import type { Metadata } from "next";
import { Cinzel } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "className="text-[60px] md:text-[100px] font-bold tracking-wide">
  ŁZA TATTOO & PIERCING
  description:
    "Profesjonalne studio tatuażu i piercingu w Lublinie. Tatuaże, piercing, rezerwacje przez Instagram i Booksy.",
};

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "700"],
});





export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cinzel.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
