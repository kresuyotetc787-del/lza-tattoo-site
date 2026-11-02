import type { MetadataRoute } from "next";
import { SITE_URL } from "./lib/site";
import { STATIC_ROUTES } from "./lib/routes";
import { getPublishedPosts } from "./lib/blog";

// Mapa strony odświeża się co godzinę, więc zaplanowany wpis trafia
// do niej automatycznie w dniu publikacji.
export const revalidate = 3600;

// Podstrony bierzemy z app/lib/routes.ts, wpisy - z listy bloga.
// Nic nie trzeba dopisywać ręcznie w tym pliku.
export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: route.path === "/" ? `${SITE_URL}/` : `${SITE_URL}${route.path}`,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const postPages: MetadataRoute.Sitemap = getPublishedPosts().map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticPages, ...postPages];
}
