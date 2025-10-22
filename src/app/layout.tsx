import type { Metadata } from "next";
import { Montserrat, Raleway } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
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
        className={`${montserrat.variable} ${raleway.variable} antialiased`}
        style={{ fontFamily: "var(--font-montserrat), Helvetica, sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
