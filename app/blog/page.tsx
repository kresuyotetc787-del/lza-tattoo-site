import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "../components/PageShell";
import JsonLd, { SITE_URL, studioSchema } from "../components/JsonLd";
import { formatDate, getPublishedPosts } from "../lib/blog";

// Lista odświeża się co godzinę - dzięki temu wpis z datą publikacji
// w przyszłości pojawia się tu sam, bez żadnego wdrożenia.
export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Blog - ŁZA TATTOO & PIERCING Lublin",
  description:
    "Poradniki o pielęgnacji tatuażu i piercingu: czas gojenia, czego unikać i kiedy skonsultować się z lekarzem. Wskazówki studia z Lublina.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog - ŁZA TATTOO & PIERCING Lublin",
    description:
      "Poradniki o pielęgnacji tatuażu i piercingu prosto od studia z Lublina.",
    url: `${SITE_URL}/blog`,
    type: "website",
  },
};

export default function BlogIndexPage() {
  const posts = getPublishedPosts();

  return (
    <PageShell
      title="Blog"
      lead="Praktyczne poradniki o gojeniu i pielęgnacji - to, co na co dzień tłumaczymy klientom w studiu, zebrane w jednym miejscu."
    >
      {posts.length === 0 ? (
        <p className="mt-8 text-lg leading-8 text-black/70">
          Pierwsze wpisy pojawią się już wkrótce.
        </p>
      ) : (
        <ul className="mt-4 divide-y divide-black/10">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block py-8 transition hover:opacity-70"
              >
                <div className="text-[11px] uppercase tracking-[0.24em] text-black/45">
                  <time dateTime={post.publishedAt}>
                    {formatDate(post.publishedAt)}
                  </time>
                </div>
                <h2 className="mt-3 text-2xl uppercase leading-snug tracking-wide md:text-3xl">
                  {post.title}
                </h2>
                <p className="mt-3 text-lg leading-8 text-black/75">
                  {post.excerpt}
                </p>
                <span className="mt-4 inline-block text-[11px] uppercase tracking-[0.24em] underline underline-offset-4">
                  Czytaj wpis
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}

      <JsonLd
        data={[
          studioSchema,
          {
            "@type": "Blog",
            name: "Blog ŁZA TATTOO & PIERCING",
            url: `${SITE_URL}/blog`,
            publisher: { "@id": `${SITE_URL}/#studio` },
          },
        ]}
      />
    </PageShell>
  );
}
