import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#05070B",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Adpence | AI, Software & Technology",
  description:
    "Adpence is an AI-first technology company building software, digital platforms, and technology businesses for global markets.",
  keywords: [
    "Adpence",
    "Adpence LLC",
    "AI technology company",
    "African technology ventures",
    "VideoPost AI",
    "FootPawa",
    "in2SOC",
    "Intelligenfy",
    "BuildAnyShop",
    "adpence.app",
    "Adpence App",
    "Influencer Marketing",
    "Software ventures",
    "Global technology",
  ],
  authors: [{ name: "Adpence LLC", url: "https://adpence.com" }],
  creator: "Adpence LLC",
  publisher: "Adpence LLC",
  metadataBase: new URL("https://adpence.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://adpence.com",
    title: "Adpence | AI, Software & Technology",
    description:
      "Adpence is an AI-first technology company building software, digital platforms, and technology businesses for global markets.",
    siteName: "Adpence LLC",
    images: [
      {
        url: "/assets/mockups/preview-adpence.png",
        width: 1200,
        height: 630,
        alt: "Adpence LLC - AI. Software. Opportunity.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adpence | AI, Software & Technology",
    description:
      "Adpence is an AI-first technology company building software, digital platforms, and technology businesses for global markets.",
    images: ["/assets/mockups/preview-adpence.png"],
    creator: "@adpence",
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    name: "Adpence LLC",
    url: "https://adpence.com",
    logo: "https://adpence.com/assets/logos/adpence-logo.png",
    slogan: "AI. Software. Opportunity.",
    description:
      "Adpence is an AI-first technology company building software, digital platforms, and technology businesses for global markets.",
    foundingLocation: {
      "@type": "Place",
      name: "Global & Africa Hubs",
    },
    knowsAbout: [
      "Artificial Intelligence",
      "Software Engineering",
      "Automation",
      "Sports Technology",
      "Cybersecurity",
      "Financial Technology",
      "Digital Commerce",
    ],
  };

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#05070B] text-slate-100 font-sans selection:bg-purple-600/30 selection:text-white antialiased">
        {children}
      </body>
    </html>
  );
}
