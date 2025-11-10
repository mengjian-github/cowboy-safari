import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const siteTitle = "Play Cowboy Safari Now – Zero Ad Fan Hub";
const siteDescription =
  "Launch Cowboy Safari instantly with fullscreen support, telemetry-verified uptime, spoiler-light mastery guides, and parent-safe help—no ads, no clutter.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  title: {
    default: siteTitle,
    template: "%s | Cowboy Safari Fan Hub",
  },
  description: siteDescription,
  keywords: [
    "Cowboy Safari",
    "Cowboy Safari fan site",
    "play Cowboy Safari online",
    "Cowboy Safari guides",
    "Cowboy Safari walkthrough",
  ],
  alternates: {
    canonical: siteConfig.baseUrl,
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteConfig.baseUrl,
    type: "website",
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Cowboy Safari Fan Hub hero collage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    creator: "@cowboysafari",
  },
  category: "Game",
  robots: {
    index: true,
    follow: true,
    "max-snippet": 220,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://azgames.io" />
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-5CRLBF7NXD"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-5CRLBF7NXD');
            `.trim(),
          }}
        />
        {/* Microsoft Clarity */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "u3xek0f2jv");
            `.trim(),
          }}
        />
      </head>
      <body className="antialiased bg-[#fff8ef] text-[#1f140c]">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <div className="flex min-h-screen flex-col bg-[#fff8ef] font-sans text-base text-[#1f140c]">
          <SiteHeader />
          <main id="main" className="flex-1">
            {children}
          </main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
