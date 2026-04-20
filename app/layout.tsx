import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import CookieBanner from "./app/components/CookieBanner";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "ŁZA TATTOO & PIERCING | Tatuaże i piercing",
  description: "Profesjonalne studio tatuażu i piercingu w Lublinie.",
  verification: {
    google: "2lfduOL1KPtVoA9w9qJgf7JT2vE08Iz2nj",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className={`${playfair.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}

