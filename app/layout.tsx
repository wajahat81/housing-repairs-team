import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});



// ... (keep font definitions) ...

export const viewport: Viewport = {
  themeColor: "#242420",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1, // Prevents iOS input zoom on forms
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.housingrepairsteam.co.uk"),
  title: {
    template: "%s | Housing Repairs Team",
    default: "Housing Repairs Team | No Win No Fee Disrepair Claims",
  },
  description: "Professional guidance and support for housing disrepair claims. We ensure your living standards are upheld with no upfront legal costs.",
  keywords: ["housing disrepair", "council tenant claim", "housing association claim", "damp and mould claim", "tenant rights UK"],

  // Add this icons configuration block:
  icons: {
    icon: [
      { url: "/tab-logo.avif", type: "image/avif" }, // Fallback if browser supports avif
      { url: "/favicon.ico", sizes: "any" },     // Standard fallback
    ],
    apple: { url: "/tab-logo.avif" },
  },

  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "/",
    siteName: "Housing Repairs Team",
    title: "Housing Repairs Team | No Win No Fee Disrepair Claims",
    description: "Professional guidance and support for housing disrepair claims. Force your landlord to make repairs and secure compensation.",
    images: [
      {
        url: "/tab-logo.avif",
        width: 1200,
        height: 630,
        alt: "Housing Repairs Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Housing Repairs Team | No Win No Fee Disrepair Claims",
    description: "Force your landlord to make repairs and secure compensation with no upfront legal costs.",
    images: ["/tab-logo.avif"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <head>
        <Script id="google-tag-manager" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MLMF8KHG');`}
        </Script>
      </head>
      <body className={`${cormorant.variable} ${dmSans.variable} flex min-h-screen flex-col`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MLMF8KHG"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DZ5SNSKGW1"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-DZ5SNSKGW1');`}
        </Script>
        <Navbar />
        <div className="flex-1 flex flex-col">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}