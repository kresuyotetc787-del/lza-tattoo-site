import type { MetadataRoute } from "next";
import { SITE_URL } from "./components/JsonLd";
import { getPublishedPosts } from "./lib/blog";

// Mapa strony odświeża się co godzinę, więc zaplanowany wpis trafia
// do niej automatycznie w dniu publikacji.
export const revalidate = 3600;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, changeFrequency: "monthly", priority: 1 },
    {
      url: `${SITE_URL}/tatuaz-lublin`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/piercing-lublin`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    { url: `${SITE_URL}/blog`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE_URL}/polityka-prywatnosci`, priority: 0.1 },
    { url: `${SITE_URL}/polityka-cookies`, priority: 0.1 },
  ];

  const postPages: MetadataRoute.Sitemap = getPublishedPosts().map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticPages, ...postPages];
}
