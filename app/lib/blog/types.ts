// Fragment tekstu w akapicie. Zwykły string albo link.
export type Inline = string | { text: string; href: string };

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
