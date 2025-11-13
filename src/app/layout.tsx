import type { Metadata } from "next";
import { Space_Grotesk, Urbanist, Poppins, Montserrat } from "next/font/google";
import HelmetProviderWrapper from "@/components/providers/HelmetProviderWrapper";
import "../styles/globals.css";

const space_grtoesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "300"],
});

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "FlashNotes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="dark only" />
      </head>
      <body
        className={`${space_grtoesk.variable} ${urbanist.variable} ${poppins.variable} ${montserrat.variable} antialiased`}
        suppressHydrationWarning
      >
        <HelmetProviderWrapper>{children}</HelmetProviderWrapper>
      </body>
    </html>
  );
}
