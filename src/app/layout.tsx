import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { Header } from "@/components/sections/header";
import Script from "next/script";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AstraHR - The Future of HR Management",
  description: "AI-powered HR platform for modern teams.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} antialiased`}
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QWEFZ3QDYY"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-QWEFZ3QDYY');
          `}
        </Script>

        <Header />
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
