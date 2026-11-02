/**
 * Jedyny obowiązujący adres strony. Hosting (Vercel) serwuje stronę pod www,
 * a wersja bez www przekierowuje na www - dlatego canonical, og:url, mapa
 * strony, robots.txt i schema MUSZĄ wskazywać wersję z www. Inaczej Google
 * dostaje sprzeczne sygnały (canonical wskazuje adres, który przekierowuje).
 */
export const SITE_URL = "https://www.lzatattoo.pl";
