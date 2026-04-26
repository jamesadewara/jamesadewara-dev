import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import configPromise from "@/lib/config";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { BackgroundFx } from "@/components/site/BackgroundFx";
import NextTopLoader from "nextjs-toploader";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export async function generateMetadata(): Promise<Metadata> {
  const config = await configPromise;
  const baseUrl = config.baseUrl;

  return {
    title: "James Adewara | Fullstack Developer for Founders",
    description:
      "From idea to deployed product — frontend, backend, and cloud. One developer, faster and cheaper than hiring a team or agency.",
    authors: [{ name: "James Ayomide Adewara" }],
    keywords: [
      "fullstack developer",
      "MVP development",
      "next.js developer",
      "fastapi developer",
      "react developer",
      "aws deployment",
      "James Adewara",
    ],
    manifest: "/site.webmanifest",
    metadataBase: new URL(baseUrl),
    icons: {
      icon: [
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/favicon.ico", type: "image/x-icon" },
      ],
      apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
      other: [
        { rel: "android-chrome-192x192", url: "/android-chrome-192x192.png" },
        { rel: "android-chrome-512x512", url: "/android-chrome-512x512.png" },
      ],
    },
    openGraph: {
      title: "James Adewara | Fullstack Developer for Founders",
      description:
        "From idea to deployed product — frontend, backend, and cloud. One developer, faster and cheaper than a team.",
      type: "website",
      images: [`${baseUrl}/favicon.ico`],
      siteName: "James Adewara",
    },
    twitter: {
      card: "summary_large_image",
      site: "@jamesadewara_dev",
      creator: "@jamesadewara_dev",
      images: [`${baseUrl}/favicon.ico`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const config = await configPromise;

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <meta name="google-adsense-account" content={config.adsenseId}></meta>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "James Ayomide Adewara",
              jobTitle: "Fullstack Developer",
              url: config.baseUrl,
              image: `${config.baseUrl}/favicon.ico`,
              sameAs: [
                "https://www.linkedin.com/in/james-adewara/",
                "https://github.com/jamesadewara",
                "https://x.com/jamesadewaradev",
                "https://medium.com/@jamesadewara1",
              ],
              knowsAbout: [
                "React",
                "Next.js",
                "FastAPI",
                "Django",
                "PostgreSQL",
                "AWS",
                "Docker",
                "TypeScript",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <NextTopLoader
          color="#4a7ad8"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #4a7ad8,0 0 5px #4a7ad8"
        />
        <div className="relative min-h-screen flex flex-col">
          <BackgroundFx />
          <Header />
          <main className="flex-1 pt-24">{children}</main>
          <Footer contactHrefs={config.contactHrefs} />
        </div>
        {config.analyticsId && (
          <>
            <Script
              id="adsense-id"
              async
              strategy="afterInteractive"
              src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${config.adsenseId}`}
              crossOrigin="anonymous"
            />
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${config.analyticsId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){window.dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${config.analyticsId}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
