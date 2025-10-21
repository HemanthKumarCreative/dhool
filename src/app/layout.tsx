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
  title: "Dhool - Coming Soon",
  description:
    "Something amazing is coming soon. Stay tuned for the launch of our innovative platform that will revolutionize your experience.",
  keywords: ["coming soon", "launch", "innovation", "platform", "dhool"],
  authors: [{ name: "Dhool Team" }],
  openGraph: {
    title: "Dhool - Coming Soon",
    description:
      "Something amazing is coming soon. Stay tuned for the launch of our innovative platform.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhool - Coming Soon",
    description:
      "Something amazing is coming soon. Stay tuned for the launch of our innovative platform.",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1",
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
