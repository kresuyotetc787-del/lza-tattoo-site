import type { MetadataRoute } from "next";

type Route = {
  path: string;
  priority: number;
  changeFrequency?: MetadataRoute.Sitemap[number]["changeFrequency"];
};

/**
 * LISTA WSZYSTKICH PODSTRON (poza wpisami bloga, które dochodzą same).
 *
 * Z tej listy powstaje mapa strony (app/sitemap.ts) i lista ścieżek
 * odświeżanych przez cron (app/api/revalidate/route.ts). Dodajesz nową
 * podstronę w app/ - dopisz ją tutaj, inaczej nie trafi do sitemap.xml.
 */
export const STATIC_ROUTES: Route[] = [
  { path: "/", priority: 1, changeFrequency: "monthly" },
  { path: "/tatuaz-lublin", priority: 0.9, changeFrequency: "monthly" },
  { path: "/piercing-lublin", priority: 0.9, changeFrequency: "monthly" },
  { path: "/cennik", priority: 0.9, changeFrequency: "monthly" },
  { path: "/rezerwacja-kontakt", priority: 0.8, changeFrequency: "monthly" },
  { path: "/rezerwacja-piercing", priority: 0.8, changeFrequency: "monthly" },
  { path: "/artysci", priority: 0.8, changeFrequency: "monthly" },
  { path: "/tatuaz-rekaw-lublin", priority: 0.8, changeFrequency: "monthly" },
  { path: "/przekluwanie-uszu-lublin", priority: 0.8, changeFrequency: "monthly" },
  { path: "/tatuaz-piercing-lublin-okolice", priority: 0.8, changeFrequency: "monthly" },
  { path: "/tatuaz-swidnik", priority: 0.7, changeFrequency: "monthly" },
  { path: "/piercing-swidnik", priority: 0.7, changeFrequency: "monthly" },
  { path: "/piercing-zamosc", priority: 0.7, changeFrequency: "monthly" },
  { path: "/piercing-chelm", priority: 0.7, changeFrequency: "monthly" },
  { path: "/piercing-krasnik", priority: 0.7, changeFrequency: "monthly" },
  { path: "/piercing-lubartow", priority: 0.7, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.7, changeFrequency: "weekly" },
  { path: "/polityka-prywatnosci", priority: 0.1 },
  { path: "/polityka-cookies", priority: 0.1 },
];

/** Podstrony miast - linkowane w stopce, żeby nie wisiały tylko na stronie głównej. */
export const CITY_LINKS = [
  { href: "/tatuaz-swidnik", label: "Tatuaż Świdnik" },
  { href: "/piercing-swidnik", label: "Piercing Świdnik" },
  { href: "/piercing-lubartow", label: "Piercing Lubartów" },
  { href: "/piercing-krasnik", label: "Piercing Kraśnik" },
  { href: "/piercing-chelm", label: "Piercing Chełm" },
  { href: "/piercing-zamosc", label: "Piercing Zamość" },
];
