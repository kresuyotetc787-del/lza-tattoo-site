import type { Metadata } from "next";
import BooksyCta from "../components/BooksyCta";
import ContactCta from "../components/ContactCta";
import PageShell from "../components/PageShell";
import PriceTable from "../components/PriceTable";
import JsonLd, { SITE_URL, faqSchema, studioSchema } from "../components/JsonLd";
import ContentBlocks from "../components/ContentBlocks";
import { formatDate } from "../lib/blog";
import { CENNIK_AKTUALIZACJA, CENNIK_PIERCINGU } from "../lib/cennik";
import { BOOKSY_SHORT_LABEL } from "../lib/booksy";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Cennik piercingu i tatuażu Lublin - ŁZA TATTOO & PIERCING",
  description:
    "Cennik piercingu w Lublinie: płatek ucha 120 zł, helix 140 zł, pępek 180 zł, septum 180 zł. Sprawdź ceny wszystkich przekłuć i jak wyceniamy tatuaże.",
  keywords: [
    "cennik piercingu lublin",
    "ile kosztuje przekłucie pępka",
    "ile kosztuje przekłucie ucha",
    "ile kosztuje piercing",
    "cena helix lublin",
    "cennik tatuażu lublin",
    "ile kosztuje tatuaż lublin",
  ],
  alternates: { canonical: "/cennik" },
  openGraph: {
    title: "Cennik piercingu i tatuażu Lublin - ŁZA TATTOO & PIERCING",
    description:
      "Ceny wszystkich przekłuć w jednym miejscu oraz zasady wyceny tatuażu w studiu w centrum Lublina.",
    url: `${SITE_URL}/cennik`,
    type: "website",
  },
};

const faqItems = [
  {
    q: "Ile kosztuje przekłucie pępka?",
    a: "Przekłucie pępka kosztuje u nas 180 zł, podobnie jak inverse navel (dolny pępek). Zabieg trwa około 30 minut, a wykonujemy go osobom od 16. roku życia.",
  },
  {
    q: "Ile kosztuje przekłucie ucha?",
    a: "Przekłucie płatka ucha kosztuje 120 zł, a obu płatków 200 zł. Przekłucia chrząstki zaczynają się od 140 zł (helix, flat), tragus i conch to 150 zł, daith i snug 160 zł, a industrial 180 zł.",
  },
  {
    q: "Czy cena obejmuje biżuterię?",
    a: "Koszt zależy od rodzaju przekłucia i wybranej biżuterii. Jeśli masz na oku konkretny model kolczyka, zapytaj przed wizytą - doradzimy i podamy ostateczną cenę.",
  },
  {
    q: "Ile kosztuje tatuaż?",
    a: "Tatuaże wyceniamy indywidualnie, bo cena zależy od wielkości, kolorystyki, stopnia szczegółowości i miejsca na ciele. Opisz swój pomysł przez formularz kontaktowy albo zadzwoń - podamy widełki i zaproponujemy termin konsultacji.",
  },
  {
    q: "Od ilu lat można zrobić piercing?",
    a: "Przekłucie płatka ucha i upper lobe wykonujemy od 14. roku życia, większość pozostałych przekłuć - od 16 lat, a sutki, piercing intymny, tunele i mantis - wyłącznie osobom pełnoletnim. Osoby niepełnoletnie potrzebują pisemnej zgody rodzica lub opiekuna, najlepiej obecnego na wizycie.",
  },
];

export default function CennikPage() {
  return (
    <PageShell
      title="Cennik piercingu i tatuażu"
      lead="Wszystkie ceny przekłuć w jednym miejscu - bez szukania w aplikacji. Tatuaże wyceniamy indywidualnie, dlatego niżej tłumaczymy, od czego zależy cena i jak szybko dostać wycenę."
    >
      <nav aria-label="Spis treści" className="mt-6 flex flex-wrap gap-2">
        {CENNIK_PIERCINGU.map((group) => (
          <a
            key={group.id}
            href={`#${group.id}`}
            className="border border-black/10 bg-white px-4 py-2 text-[11px] uppercase tracking-[0.2em] shadow-sm hover:opacity-60"
          >
            {group.title}
          </a>
        ))}
        <a
          href="#tatuaz"
          className="border border-black/10 bg-white px-4 py-2 text-[11px] uppercase tracking-[0.2em] shadow-sm hover:opacity-60"
        >
          Tatuaż
        </a>
      </nav>

      <h2 className="mt-12 text-2xl uppercase tracking-wide md:text-3xl">
        Cennik piercingu
      </h2>
      <p className="mt-5 text-lg leading-8 text-black/85">
        Ceny obowiązują w studiu przy ul. Prezydenta Gabriela Narutowicza 22 w
        Lublinie i są takie same jak w naszym kalendarzu Booksy (
        {BOOKSY_SHORT_LABEL}). Aktualizacja: {formatDate(CENNIK_AKTUALIZACJA)}.
        Większość zabiegów trwa około 30-45 minut razem z rozmową o
        umiejscowieniu i biżuterii.
      </p>

      {CENNIK_PIERCINGU.map((group) => (
        <section key={group.id} id={group.id} className="mt-10 scroll-mt-28">
          <h3 className="text-xl uppercase tracking-wide md:text-2xl">
            Piercing - {group.title.toLowerCase()}
          </h3>
          <PriceTable items={group.items} caption={`Cennik piercingu: ${group.title}`} />
        </section>
      ))}

      <p className="mt-6 text-sm leading-7 text-black/55">
        Wiek przy pozycji to minimalny wiek klienta. Osoby niepełnoletnie
        przychodzą z pisemną zgodą rodzica lub opiekuna. Ceny z dopiskiem „od”
        zależą od liczby przekłuć i wybranej biżuterii.
      </p>

      <BooksyCta>
        <p>
          Wybrałaś/wybrałeś przekłucie? Termin zarezerwujesz w Booksy - przy
          każdej usłudze widać tę samą cenę co w tabeli powyżej. Najczęściej
          wybierane: płatek ucha (120 zł), helix (140 zł) i pępek (180 zł).
        </p>
      </BooksyCta>

      <section id="tatuaz" className="scroll-mt-28">
        <h2 className="mt-14 text-2xl uppercase tracking-wide md:text-3xl">
          Ile kosztuje tatuaż?
        </h2>
        <p className="mt-5 text-lg leading-8 text-black/85">
          Tatuażu nie da się uczciwie wycenić z tabelki - dwa wzory tej samej
          wielkości mogą wymagać zupełnie innego nakładu pracy. Każdy projekt
          wyceniamy indywidualnie, a na cenę wpływają:
        </p>
        <ul className="mt-5 space-y-3">
          {[
            "wielkość wzoru i liczba sesji potrzebnych do jego wykonania,",
            "kolorystyka - kolor i cieniowanie wymagają więcej czasu niż sam kontur,",
            "stopień szczegółowości i trudność projektu (np. realizm, portret),",
            "miejsce na ciele - niektóre partie skóry tatuuje się wolniej,",
            "praca nad projektem: cover-up starego tatuażu lub poprawki wymagają osobnej oceny.",
          ].map((item) => (
            <li key={item} className="flex gap-3 text-lg leading-8 text-black/85">
              <span aria-hidden className="mt-3 h-1.5 w-1.5 shrink-0 bg-black/60" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <ContentBlocks
          blocks={[
            {
              type: "p",
              content: [
                "Żeby dostać widełki cenowe, opisz pomysł w ",
                { text: "formularzu kontaktowym", href: "/rezerwacja-kontakt#formularz" },
                ", dołącz inspiracje i podaj miejsce na ciele oraz przybliżony rozmiar. Szczegółowo piszemy o tym we wpisie „",
                { text: "Ile kosztuje tatuaż?", post: "ile-kosztuje-tatuaz" },
                "”. Style, w których pracujemy, znajdziesz na stronie ",
                { text: "tatuaż Lublin", href: "/tatuaz-lublin" },
                ", a portfolio poszczególnych osób - w zakładce ",
                { text: "artyści", href: "/artysci" },
                ".",
              ],
            },
          ]}
        />
      </section>

      <section className="mt-12">
        <h2 className="text-2xl uppercase tracking-wide md:text-3xl">
          Pytania o ceny
        </h2>
        <dl className="mt-6 divide-y divide-black/10 border-y border-black/10">
          {faqItems.map((item) => (
            <div key={item.q} className="py-5">
              <dt className="text-lg font-bold">{item.q}</dt>
              <dd className="mt-2 text-lg leading-8 text-black/85">{item.a}</dd>
            </div>
          ))}
        </dl>
      </section>

      <ContactCta>
        <p>
          Chcesz wycenę tatuażu albo nie wiesz, które przekłucie wybrać? Napisz
          lub zadzwoń - odpowiemy i pomożemy dobrać termin.
        </p>
      </ContactCta>

      <JsonLd
        data={[
          studioSchema,
          {
            "@type": "OfferCatalog",
            name: "Cennik piercingu - ŁZA TATTOO & PIERCING Lublin",
            url: `${SITE_URL}/cennik`,
            itemListElement: CENNIK_PIERCINGU.flatMap((group) =>
              group.items
                .filter((item) => !item.from)
                .map((item) => ({
                  "@type": "Offer",
                  name: `Piercing - ${item.name}`,
                  price: item.price,
                  priceCurrency: "PLN",
                  seller: { "@id": `${SITE_URL}/#studio` },
                }))
            ),
          },
          faqSchema(faqItems),
        ]}
      />
    </PageShell>
  );
}
