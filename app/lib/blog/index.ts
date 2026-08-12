import type { Inline, Post } from "./types";
import pielegnacjaPiercinguUcho from "./posts/pielegnacja-piercingu-ucho";
import pielegnacjaTatuazu from "./posts/pielegnacja-tatuazu";
import gojeniePiercinguPepka from "./posts/gojenie-piercingu-pepka";
import gojenieTatuazu from "./posts/gojenie-tatuazu";

/**
 * JAK DODAĆ NOWY WPIS
 *
 * 1. Stwórz plik app/lib/blog/posts/<slug>.ts (najłatwiej skopiować istniejący).
 * 2. Ustaw `publishedAt` na dzień, w którym wpis ma się pojawić.
 * 3. Dopisz import powyżej i pozycję w tablicy poniżej.
 * 4. Zrób push na main.
 *
 * Wpis z datą w przyszłości leży w repozytorium, ale NIE jest widoczny
 * na stronie ani w mapie strony do nadejścia tej daty. Nie trzeba niczego
 * wdrażać ponownie - strony bloga odświeżają się same co godzinę
 * (`export const revalidate = 3600` w app/blog/page.tsx i app/blog/[slug]/page.tsx).
 *
 * Przykład publikacji co tydzień w poniedziałki:
 *   publishedAt: "2026-08-17"
 *   publishedAt: "2026-08-24"
 *   publishedAt: "2026-08-31"
 *
 * Sama data ("2026-08-17") oznacza północ UTC, czyli 2:00 rano czasu polskiego.
 * Jeśli chcesz konkretną godzinę, podaj pełny zapis: "2026-08-17T09:00:00+02:00".
 */
const allPosts: Post[] = [
  pielegnacjaPiercinguUcho,
  pielegnacjaTatuazu,
  gojeniePiercinguPepka,
  gojenieTatuazu,
];

function isPublished(post: Post, now: number): boolean {
  return new Date(post.publishedAt).getTime() <= now;
}

/** Wpisy widoczne publicznie, od najnowszego. */
export function getPublishedPosts(): Post[] {
  const now = Date.now();
  return allPosts
    .filter((post) => isPublished(post, now))
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
}

/** Wpis po slugu - tylko jeśli jego data publikacji już minęła. */
export function getPublishedPost(slug: string): Post | undefined {
  const now = Date.now();
  return allPosts.find((post) => post.slug === slug && isPublished(post, now));
}

/**
 * Wszystkie slugi, także zaplanowane. Używane wyłącznie przez
 * generateStaticParams, żeby Next znał trasę zanim wpis wejdzie na stronę.
 */
export function getAllSlugs(): string[] {
  return allPosts.map((post) => post.slug);
}

/**
 * Odwołanie do wpisu wewnątrz innego tekstu. Jeśli wpis czeka jeszcze na
 * swoją datę publikacji, zwraca sam tytuł zamiast linku - dzięki temu
 * podstrony ofertowe nigdy nie linkują do strony, której jeszcze nie ma.
 */
export function postInline(slug: string, label: string): Inline {
  return getPublishedPost(slug) ? { text: label, href: `/blog/${slug}` } : label;
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("pl-PL", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Europe/Warsaw",
  });
}

export type { Block, Inline, Post } from "./types";
