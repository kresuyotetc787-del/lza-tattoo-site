import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Zdjęcia prac i studia serwujemy jako AVIF/WebP w rozmiarach
    // dopasowanych do ekranu zamiast pełnych JPG-ów.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
