import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#0f0f14",
};

export const metadata: Metadata = {
  title: "Kavivas.Tech | Fixing real problems with AI",
  description: "Kavivas is a product studio creating software across multiple domains — built for clarity, speed, and real-world outcomes.",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Kavivas.Tech",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} dark`} suppressHydrationWarning>
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
