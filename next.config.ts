import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Zdjęcia prac i studia serwujemy jako AVIF/WebP w rozmiarach
    // dopasowanych do ekranu zamiast pełnych JPG-ów.
    formats: ["image/avif", "image/webp"],
  },
  // Treści SEO zakładały adres /kontakt - strona kontaktowa działa pod
  // /rezerwacja-kontakt, więc /kontakt przekierowuje tam na stałe.
  async redirects() {
    return [
      { source: "/kontakt", destination: "/rezerwacja-kontakt", permanent: true },
    ];
  },
};

export default nextConfig;
