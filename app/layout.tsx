import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import CookieBanner from "./components/CookieBanner";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lzatattoo.pl"),
  title: "Tatuaż i piercing Lublin - Studio ŁZA TATTOO & PIERCING",
  description:
    "Studio tatuażu i piercingu w Lublinie. Indywidualne projekty, sterylne warunki i doświadczony zespół artystów. Umów konsultację - ul. Narutowicza 22.",
  keywords: [
    "tatuaż lublin",
    "studio tatuażu lublin",
    "piercing lublin",
    "studio piercingu lublin",
    "tatuażysta lublin",
    "piercer lublin",
    "salon tatuażu lublin",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Tatuaż i piercing Lublin - Studio ŁZA TATTOO & PIERCING",
    description:
      "Studio tatuażu i piercingu w Lublinie. Indywidualne projekty, sterylne warunki i doświadczony zespół artystów.",
    url: "https://lzatattoo.pl",
    siteName: "ŁZA TATTOO & PIERCING",
    locale: "pl_PL",
    type: "website",
  },
  robots: { index: true, follow: true },
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

