import type { Metadata } from "next";
import Link from "next/link";
import ArtistCard from "../components/ArtistCard";
import ContactCta from "../components/ContactCta";
import PageShell from "../components/PageShell";
import JsonLd, { SITE_URL, faqSchema, studioSchema } from "../components/JsonLd";
import { ARTISTS } from "../lib/artists";

export const metadata: Metadata = {
  title: "Artyści tatuażu Lublin - zespół | Łza Tattoo",
  description:
    "Poznaj artystów tatuażu w Lublinie: style, portfolio i kontakt. Wybierz tatuażystę lub piercera w Łza Tattoo & Piercing i umów konsultację.",
  keywords: [
    "artyści tatuażu lublin",
    "tatuażyści lublin",
    "najlepsi tatuażyści lublin",
    "portfolio tatuaży lublin",
    "piercer lublin",
  ],
  alternates: { canonical: "/artysci" },
  openGraph: {
    title: "Artyści tatuażu Lublin - zespół | Łza Tattoo",
    description:
      "Poznaj artystów tatuażu w Lublinie: style, portfolio i kontakt. Wybierz tatuażystę lub piercera i umów konsultację.",
    url: `${SITE_URL}/artysci`,
    type: "website",
  },
};

const tattooArtists = ARTISTS.filter((a) => a.role.startsWith("Tatuaż"));
const piercers = ARTISTS.filter((a) => !a.role.startsWith("Tatuaż"));

const faqItems = [
  {
    q: "Czy mogę wybrać konkretnego tatuażystę?",
    a: "Tak. Wskaż osobę, której styl Ci odpowiada, a my sprawdzimy jej terminy. Jeśli nie masz pewności, doradzimy.",
  },
  {
    q: "Czy każdy artysta wykona każdy wzór?",
    a: "Nie. Każdy ma swoje mocne strony, dlatego realistyczny portret i delikatny minimalistyczny napis mogą trafić do różnych osób.",
  },
  {
    q: "Gdzie obejrzę prace artystów przed wizytą?",
    a: "Na tej stronie, w galerii na stronie głównej oraz na profilach na Instagramie, do których linkujemy przy każdej osobie.",
  },
  {
    q: "Czy piercing wykonuje ten sam zespół co tatuaże?",
    a: "Piercing wykonują wyspecjalizowani piercerzy, a tatuaże tatuażyści. Rezerwacje piercingu prowadzimy osobno, w Booksy.",
  },
];

const link = "underline underline-offset-4 hover:opacity-60";

export default function ArtysciPage() {
  return (
    <PageShell
      title="Artyści tatuażu Lublin - poznaj zespół Łza Tattoo & Piercing"
      lead="Szukasz tatuażysty, który zrozumie Twój pomysł i przeniesie go na skórę bez kompromisów? Artyści tatuażu Lublin w naszym studiu to zespół o różnych stylach, więc nie musisz dopasowywać wzoru do jednej estetyki. Wybierasz osobę, której prace Ci odpowiadają, a my pomagamy w decyzji. Wszyscy przyjmują w centrum Lublina, przy ul. Narutowicza 22."
    >
      <h2 className="mt-10 text-2xl uppercase tracking-wide md:text-3xl">
        Jak wybrać tatuażystę w Lublinie?
      </h2>
      <p className="mt-5 text-lg leading-8 text-black/85">
        Dobry tatuaż zaczyna się od dopasowania stylu artysty do wzoru. Zanim
        zdecydujesz, obejrzyj portfolio tatuaży poniżej i na profilach naszych
        artystów. Patrz na równość linii, gładkość wypełnień i na to, jak praca
        wygląda po zagojeniu, nie tylko świeżo po sesji. Jeśli nie wiesz, do
        kogo trafić, opisz pomysł w wiadomości, a dobierzemy artystę do projektu.
        Przegląd stylów, które wykonujemy, znajdziesz na stronie{" "}
        <Link href="/tatuaz-lublin" className={link}>
          tatuaż w Lublinie
        </Link>
        .
      </p>

      <h2 className="mt-14 text-2xl uppercase tracking-wide md:text-3xl">
        Nasi tatuażyści
      </h2>
      <ul className="mt-6 space-y-3">
        {tattooArtists.map((artist) => (
          <li key={artist.handle} className="flex gap-3 text-lg leading-8 text-black/85">
            <span aria-hidden className="mt-3 h-1.5 w-1.5 shrink-0 bg-black/60" />
            <span>
              <strong className="font-bold">
                {artist.name ? `${artist.name} (${artist.displayName})` : artist.displayName}
              </strong>{" "}
              - {artist.styles.join(", ")}.
            </span>
          </li>
        ))}
      </ul>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {tattooArtists.map((artist, index) => (
          <ArtistCard
            key={artist.handle}
            artist={artist}
            isCentered={tattooArtists.length % 2 !== 0 && index === tattooArtists.length - 1}
          />
        ))}
      </div>

      <h2 className="mt-14 text-2xl uppercase tracking-wide md:text-3xl">
        Piercerzy w studiu
      </h2>
      <p className="mt-5 text-lg leading-8 text-black/85">
        Za przekłucia odpowiadają piercerzy o nickach piercinglbn oraz
        dziurkikarolki. Pracują w sterylnych warunkach, na jednorazowym
        sprzęcie, a kalendarz wolnych terminów prowadzą w Booksy. Zakres usług
        opisaliśmy na stronie{" "}
        <Link href="/piercing-lublin" className={link}>
          piercing w Lublinie
        </Link>
        , a ceny wszystkich przekłuć - w{" "}
        <Link href="/cennik" className={link}>
          cenniku
        </Link>
        .
      </p>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {piercers.map((artist) => (
          <ArtistCard key={artist.handle} artist={artist} />
        ))}
      </div>

      <h2 className="mt-14 text-2xl uppercase tracking-wide md:text-3xl">
        Jak umówić się z wybranym artystą?
      </h2>
      <p className="mt-5 text-lg leading-8 text-black/85">
        Napisz do nas lub zadzwoń pod numer 733 625 594, opisz pomysł, wskaż
        miejsce na ciele i dołącz inspiracje. Zaproponujemy konsultację z
        odpowiednim artystą, na której ustalimy rozmiar, styl i wycenę. Na
        piercing zarezerwujesz termin samodzielnie na stronie{" "}
        <Link href="/rezerwacja-piercing" className={link}>
          rezerwacji piercingu online
        </Link>
        .
      </p>

      <section className="mt-12">
        <h2 className="text-2xl uppercase tracking-wide md:text-3xl">
          Najczęstsze pytania
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

      <h2 className="mt-12 text-2xl uppercase tracking-wide md:text-3xl">
        Poznaj nas na żywo
      </h2>
      <ContactCta>
        <p>
          Najlepiej ocenisz, czy ktoś jest dla Ciebie odpowiednią osobą, na
          krótkiej rozmowie. Wpadnij do studia przy Narutowicza 22 w Lublinie
          albo napisz do nas - pomożemy wybrać artystę tatuażu, który zrobi Twój
          wzór tak, jak go sobie wyobrażasz.
        </p>
      </ContactCta>

      <JsonLd
        data={[
          {
            ...studioSchema,
            employee: ARTISTS.map((artist) => ({
              "@type": "Person",
              name: artist.name ?? artist.displayName,
              alternateName: artist.handle,
              jobTitle: artist.role,
              knowsAbout: artist.styles,
              sameAs: [`https://www.instagram.com/${artist.handle}`],
              worksFor: { "@id": `${SITE_URL}/#studio` },
            })),
          },
          faqSchema(faqItems),
        ]}
      />
    </PageShell>
  );
}
