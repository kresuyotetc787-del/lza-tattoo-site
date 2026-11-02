import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ContentBlocks from "../../components/ContentBlocks";
import ContactCta from "../../components/ContactCta";
import PageShell from "../../components/PageShell";
import JsonLd, { SITE_URL, faqSchema, studioSchema } from "../../components/JsonLd";
import { formatDate, getPublishedPost, getPublishedPosts } from "../../lib/blog";

// Wpis zaplanowany na przyszłość zwraca 404 aż do swojej daty publikacji.
// Odświeżanie co godzinę sprawia, że wchodzi na stronę sam.
export const revalidate = 3600;

// Przy budowaniu generujemy tylko wpisy już opublikowane. Wpis zaplanowany
// renderuje się na żądanie przy pierwszym wejściu po dacie publikacji
// (dynamicParams = true). Wcześniej prerenderowaliśmy też zaplanowane wpisy -
// zapisana w cache strona 404 potrafiła wisieć dłużej niż lista na /blog,
// przez co blog linkował do wpisu, który zwracał 404.
export const dynamicParams = true;

export function generateStaticParams() {
  return getPublishedPosts().map((post) => ({ slug: post.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPublishedPost(slug);

  if (!post) return { title: "Nie znaleziono wpisu" };

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `${SITE_URL}/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishedAt,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPublishedPost(slug);

  if (!post) notFound();

  const faq = post.body.find((block) => block.type === "faq");

  return (
    <PageShell
      title={post.title}
      breadcrumb={{ href: "/blog", label: "Wszystkie wpisy" }}
    >
      <div className="text-[11px] uppercase tracking-[0.24em] text-black/45">
        <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
        <span aria-hidden> · </span>
        <span>Autor: zespół ŁZA TATTOO &amp; PIERCING</span>
      </div>

      <article className="mt-2">
        <ContentBlocks blocks={post.body} />
      </article>

      <ContactCta>
        <p>
          Masz pytanie o gojenie albo chcesz umówić termin? Napisz przez
          formularz, zadzwoń lub wyślij nam wiadomość - odpowiemy i pomożemy
          dobrać dogodny termin w studiu przy ul. Prezydenta Gabriela
          Narutowicza 22 w Lublinie.
        </p>
      </ContactCta>

      <JsonLd
        data={[
          studioSchema,
          {
            "@type": "Article",
            headline: post.metaTitle,
            description: post.metaDescription,
            datePublished: post.publishedAt,
            inLanguage: "pl-PL",
            mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
            author: {
              "@type": "Organization",
              "@id": `${SITE_URL}/#studio`,
              name: "ŁZA TATTOO & PIERCING",
              url: `${SITE_URL}/artysci`,
            },
            publisher: { "@id": `${SITE_URL}/#studio` },
          },
          ...(faq ? [faqSchema(faq.items)] : []),
        ]}
      />
    </PageShell>
  );
}
