import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ContentBlocks from "../../components/ContentBlocks";
import ContactCta from "../../components/ContactCta";
import PageShell from "../../components/PageShell";
import JsonLd, { SITE_URL, faqSchema, studioSchema } from "../../components/JsonLd";
import { formatDate, getAllSlugs, getPublishedPost } from "../../lib/blog";

// Wpis zaplanowany na przyszłość zwraca 404 aż do swojej daty publikacji.
// Odświeżanie co godzinę sprawia, że wchodzi na stronę sam.
export const revalidate = 3600;

// Trasy znane są od razu dla wszystkich wpisów w repozytorium, także
// tych zaplanowanych - inaczej pierwsze wejście po dacie publikacji
// musiałoby czekać na render on-demand.
export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
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
            author: { "@id": `${SITE_URL}/#studio` },
            publisher: { "@id": `${SITE_URL}/#studio` },
          },
          ...(faq ? [faqSchema(faq.items)] : []),
        ]}
      />
    </PageShell>
  );
}
