import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export const metadata = {
  metadataBase: new URL("https://babitaconstruction.com"),
  title: {
    default: "Babita Construction — Construction, Mining & Transportation, Odisha",
    template: "%s | Babita Construction",
  },
  description:
    "Commercial and residential construction, mining and transportation services across Odisha, delivered by an in-house team with our own plant, fleet and site engineers.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
