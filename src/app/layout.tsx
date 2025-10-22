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
  title: "FROM DUST TO DAWN",
  description:
    "Dhool - A sustainable marketplace celebrating conscious creation through artisanal crafts and eco-friendly products from around the world.",
  keywords: [
    "sustainable",
    "marketplace",
    "artisanal",
    "crafts",
    "eco-friendly",
    "dhool",
    "conscious creation",
  ],
  authors: [{ name: "Dhool Team" }],
  icons: {
    icon: "/DhoolLogo.png",
    shortcut: "/DhoolLogo.png",
    apple: "/DhoolLogo.png",
  },
  openGraph: {
    title: "FROM DUST TO DAWN",
    description:
      "Dhool - A sustainable marketplace celebrating conscious creation through artisanal crafts and eco-friendly products from around the world.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "FROM DUST TO DAWN",
    description:
      "Dhool - A sustainable marketplace celebrating conscious creation through artisanal crafts and eco-friendly products from around the world.",
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
      <head>
        <meta name="apple-mobile-web-app-title" content="dhool" />
      </head>
      <body
        className={`${montserrat.variable} ${raleway.variable} antialiased`}
        style={{ fontFamily: "var(--font-montserrat), Helvetica, sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
