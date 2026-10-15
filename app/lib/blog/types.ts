// Fragment tekstu w akapicie. Zwykły string, link albo odnośnik do wpisu.
export type Inline =
  | string
  | { text: string; href: string }
  /**
   * Odnośnik do innego wpisu bloga, rozwiązywany dopiero przy renderze.
   * Jeśli wskazany wpis czeka jeszcze na swoją datę publikacji, zostaje
   * sam tekst zamiast linku - dzięki temu opublikowany wpis nigdy nie
   * linkuje do strony, która zwraca jeszcze 404.
   *
   * Działa jak `postInline()` z app/lib/blog/index.ts, ale w tej formie mogą
   * z tego korzystać same pliki wpisów. Gdyby importowały `postInline`,
   * powstałby cykliczny import (index -> wpis -> index) i `allPosts` byłoby
   * w TDZ w chwili, w której wpis buduje swoją treść.
   */
  | { text: string; post: string };

export type Block =
  | { type: "p"; content: Inline[] }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | {
      type: "image";
      src: string;
      alt: string;
      /** Wymiary pliku źródłowego - potrzebne, by przeglądarka nie skakała przy ładowaniu. */
      width: number;
      height: number;
      caption?: string;
    }
  | { type: "faq"; heading: string; items: { q: string; a: string }[] };

export type Post = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  /** Krótki wstęp na liście wpisów. */
  excerpt: string;
  /**
   * Data publikacji w formacie ISO (czas polski).
   * Wpis z datą w przyszłości NIE pojawia się na stronie do tego dnia —
   * to jest cały mechanizm harmonogramu, patrz app/lib/blog/index.ts.
   */
  publishedAt: string;
  body: Block[];
};
