<?php
/**
 * File-based per-IP rate limiting. Shared hosting has no Redis/Memcached,
 * so state is a small JSON file per (bucket, IP) pair, guarded by flock()
 * to stay correct under concurrent requests. Fails OPEN on disk errors —
 * a rate limiter that can accidentally block all traffic during a disk
 * hiccup is worse than one that occasionally under-limits.
 */

function babita_rate_limit(string $bucket): void
{
    $cfg = babita_config();
    $dir = $cfg['rateLimitDir'];
    $max = $cfg['rateLimit']['maxAttempts'];
    $window = $cfg['rateLimit']['windowSeconds'];

    if (!is_dir($dir) && !@mkdir($dir, 0700, true) && !is_dir($dir)) {
        error_log("babita_rate_limit: could not create $dir, failing open");
        return;
    }

    $ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
    $key = preg_replace('/[^a-zA-Z0-9_.-]/', '_', $bucket . '_' . $ip);
    $file = $dir . '/' . $key . '.json';

    $fp = @fopen($file, 'c+');
    if (!$fp) {
        error_log("babita_rate_limit: could not open $file, failing open");
        return;
    }

    flock($fp, LOCK_EX);
    $raw = stream_get_contents($fp);
    $now = time();
    $state = $raw ? json_decode($raw, true) : null;
    if (!is_array($state) || ($now - ($state['windowStart'] ?? 0)) > $window) {
        $state = ['count' => 0, 'windowStart' => $now];
    }
    $state['count']++;

    ftruncate($fp, 0);
    rewind($fp);
    fwrite($fp, json_encode($state));
    fflush($fp);
    flock($fp, LOCK_UN);
    fclose($fp);

    if ($state['count'] > $max) {
        babita_error('Too many submissions from this address. Please try again later.', 429);
    }
}
