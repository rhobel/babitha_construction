import Script from "next/script";

// Renders nothing until NEXT_PUBLIC_GA_ID is set at build time (requirements.md
// §9 — client hasn't supplied one yet). Set it in the build environment
// (hPanel > Node/PHP build settings, or a .env.production file that is NOT
// committed) and rebuild — no code change needed once the real ID arrives.
export default function GoogleAnalytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  if (!gaId) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}');
        `}
      </Script>
    </>
  );
}
