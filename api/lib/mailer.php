<?php
/**
 * Thin wrapper around PHP's built-in mail(). This is a best-effort send:
 * Hostinger shared hosting mail() delivery is not guaranteed and easily
 * lands in spam without SPF/DKIM configured for the sending domain. If
 * deliverability becomes a problem post-launch, swap this function's body
 * for an SMTP-based mailer (e.g. PHPMailer + a transactional provider) —
 * every endpoint calls through this one function.
 */

function babitha_send_mail(string $to, string $subject, string $body, ?string $replyTo = null): void
{
    $cfg = babitha_config()['mail'];

    $headers = "From: {$cfg['fromName']} <{$cfg['from']}>\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    if ($replyTo) {
        $headers .= "Reply-To: $replyTo\r\n";
    }

    $encodedSubject = '=?UTF-8?B?' . base64_encode($subject) . '?=';

    $sent = @mail($to, $encodedSubject, $body, $headers);
    if (!$sent) {
        error_log("babitha_send_mail: failed to send to $to (\"$subject\")");
    }
}
