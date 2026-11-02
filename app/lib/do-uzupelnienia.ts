/**
 * DANE DO UZUPEŁNIENIA PRZEZ STUDIO
 *
 * Wszystko, czego brakowało w treściach SEO (pola [UZUPEŁNIĆ: ...]), jest
 * zebrane tutaj. Dopóki pole ma wartość `null`:
 *  - na produkcji (www.lzatattoo.pl) dany fragment po prostu się NIE pokazuje,
 *  - lokalnie (`npm run dev`) i na podglądzie Vercel (preview) widać w tym
 *    miejscu żółtą ramkę „DO UZUPEŁNIENIA”, żeby łatwo było znaleźć braki.
 *
 * Wystarczy wpisać tekst zamiast `null` i zrobić push - fragment pojawi się
 * na stronie sam. Imiona i doświadczenie artystów uzupełnia się osobno,
 * w app/lib/artists.ts (pola `name` i `bio`).
 */
export const DO_UZUPELNIENIA = {
  /** /rezerwacja-kontakt - np. „Najbliższy przystanek: Narutowicza (linie 1, 13). Parking płatny przy ul. ...” */
  dojazdPrzystanekParking: null as string | null,

  /** /rezerwacja-kontakt (FAQ) - np. „Zwykle odpowiadamy w ciągu jednego dnia roboczego.” */
  czasOdpowiedzi: null as string | null,

  /** /piercing-nosa-lublin - np. „W studiu mamy kółka i labrety z tytanu implantacyjnego ASTM F136 ...” */
  bizuteriaNos: null as string | null,

  /** Wpis „Ile kosztuje tatuaż?” (FAQ) - czy konsultacja tatuażu jest bezpłatna. */
  konsultacjaTatuazuPlatna: null as string | null,
};

/** Czy pokazywać ramki „DO UZUPEŁNIENIA” (lokalnie i na podglądzie Vercel, nigdy na produkcji). */
export const SHOW_TODOS =
  process.env.NODE_ENV === "development" || process.env.VERCEL_ENV === "preview";
