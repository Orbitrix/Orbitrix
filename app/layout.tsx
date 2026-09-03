import type { Metadata } from "next";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://orbitrixng.com"),
  title: "Orbitrix",
  description: "Pioneering innovation at the intersection of technology & exploration",
  keywords: ["Orbitrix", "Orbitrixng"],
  openGraph: {
    title: "Orbitrix",
    description: "Pioneering innovation at the intersection of technology & exploration",
    url: "https://orbitrixng.com",
    siteName: "Orbitrixng",
    images: [
      {
        url: "/banner.jpg",
        width: 1200,
        height: 630,
        alt: "Orbitrix Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Orbitrix",
    description: "Pioneering innovation at the intersection of technology & exploration",
    images: ["/banner.jpg"],
  },
  icons: "/favicon.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
