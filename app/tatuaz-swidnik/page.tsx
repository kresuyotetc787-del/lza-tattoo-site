import type { Metadata } from "next";
import ContentBlocks from "../components/ContentBlocks";
import ContactCta from "../components/ContactCta";
import PageShell from "../components/PageShell";
import WorksGallery from "../components/WorksGallery";
import JsonLd, { SITE_URL, studioSchema } from "../components/JsonLd";
import { GALLERY } from "../lib/artists";
import type { Block } from "../lib/blog/types";

export const revalidate = 3600;

const TITLE = "Tatuaż Świdnik - studio tatuażu kilkanaście minut od domu";

export const metadata: Metadata = {
  title: "Tatuaż Świdnik - studio tatuażu blisko Świdnika | Łza Tattoo",
  description:
    "Szukasz studia tatuażu blisko Świdnika? Łza Tattoo w centrum Lublina: realizm, black & grey, dotwork, fine line, cover-up. Umów konsultację!",
  keywords: [
    "tatuaż Świdnik",
    "studio tatuażu Świdnik",
    "tatuażysta Świdnik",
    "salon tatuażu Świdnik",
    "salon tatuażu koło Świdnika",
  ],
  alternates: { canonical: "/tatuaz-swidnik" },
  openGraph: {
    title: "Tatuaż Świdnik - studio tatuażu blisko Świdnika | Łza Tattoo",
    description:
      "Studio tatuażu w centrum Lublina, kilkanaście minut od Świdnika. Indywidualne projekty i zespół artystów o różnych stylach.",
    url: `${SITE_URL}/tatuaz-swidnik`,
    type: "website",
  },
};

const blocks: Block[] = [
  { type: "h2", text: "Dlaczego klienci ze Świdnika wybierają nasze studio?" },
  {
    type: "p",
    content: [
      "Ze Świdnika do centrum Lublina dojedziesz samochodem lub komunikacją miejską w kilkanaście minut - a w zamian dostajesz wybór spośród kilku artystów o zupełnie różnych stylach. Zamiast dopasowywać pomysł do jednej osoby, wybierasz tatuażystę, który specjalizuje się w tym, czego szukasz.",
    ],
  },
  {
    type: "ul",
    items: [
      "Kilku tatuażystów pod jednym adresem - realizm, black & grey, dotwork, fine line, blackwork, kolor",
      "Indywidualny projekt przygotowany przed sesją, bez kopiowania gotowych wzorów",
      "Sterylne warunki i jednorazowy sprzęt",
      "Cover-up i poprawki starych tatuaży",
      "Godziny: poniedziałek-piątek 9:00-17:00, sobota 9:00-15:00 - po pracy w Świdniku zdążysz na sesję",
    ],
  },
  { type: "h2", text: "Jakie tatuaże robimy?" },
  {
    type: "p",
    content: [
      "Od małych, delikatnych wzorów na pierwszy tatuaż, przez botaniczne kompozycje w dotworku, po duże projekty - ",
      { text: "rękawy", href: "/tatuaz-rekaw-lublin" },
      " i tatuaże na całe plecy. Pełną listę stylów opisaliśmy na stronie ",
      { text: "tatuaż Lublin", href: "/tatuaz-lublin" },
      ", a prace poszczególnych osób znajdziesz w zakładce ",
      { text: "artyści", href: "/artysci" },
      ".",
    ],
  },
  { type: "h2", text: "Ile kosztuje tatuaż?" },
  {
    type: "p",
    content: [
      "Każdy tatuaż wyceniamy indywidualnie - cena zależy od wielkości, kolorystyki, szczegółowości i miejsca na ciele. Opisz pomysł w formularzu, a podamy widełki jeszcze przed konsultacją. Więcej o wycenie przeczytasz w ",
      { text: "cenniku", href: "/cennik#tatuaz" },
      " i we wpisie „",
      { text: "Ile kosztuje tatuaż?", post: "ile-kosztuje-tatuaz" },
      "”.",
    ],
  },
  { type: "h2", text: "Jak się do nas umówić ze Świdnika?" },
  {
    type: "p",
    content: [
      "Napisz przez ",
      { text: "formularz kontaktowy", href: "/rezerwacja-kontakt#formularz" },
      " lub zadzwoń pod 733 625 594. Ustalimy konsultację, przygotujemy projekt i umówimy sesję w dogodnym terminie. Przed wizytą zajrzyj do poradnika „",
      { text: "Jak przygotować się do tatuażu", post: "jak-przygotowac-sie-do-tatuazu" },
      "”.",
    ],
  },
  {
    type: "p",
    content: [
      "Przy okazji wizyty możesz też zrobić piercing - zabiegi dla mieszkańców Świdnika opisaliśmy na stronie ",
      { text: "piercing Świdnik", href: "/piercing-swidnik" },
      ".",
    ],
  },
];

export default function TatuazSwidnikPage() {
  return (
    <PageShell
      title={TITLE}
      lead="Mieszkasz w Świdniku i szukasz studia tatuażu, któremu możesz zaufać? ŁZA TATTOO & PIERCING działa w centrum Lublina, przy ul. Prezydenta Gabriela Narutowicza 22 - kilkanaście minut jazdy od Świdnika. Pracuje u nas zespół tatuażystów o różnych stylach, więc łatwo znajdziesz kogoś, kto zrozumie Twój pomysł."
    >
      <ContentBlocks blocks={blocks} />

      <WorksGallery
        title="Przykładowe tatuaże z naszego studia"
        works={GALLERY.tatuaz}
      />

      <ContactCta>
        <p>
          Opisz swój pomysł - odpowiemy z wyceną i terminem konsultacji. Studio
          znajdziesz przy ul. Prezydenta Gabriela Narutowicza 22 w Lublinie.
        </p>
      </ContactCta>

      <JsonLd
        data={[
          studioSchema,
          {
            "@type": "Service",
            name: "Tatuaż Świdnik",
            serviceType: "Tatuaż",
            areaServed: "Świdnik",
            provider: { "@id": `${SITE_URL}/#studio` },
            url: `${SITE_URL}/tatuaz-swidnik`,
          },
        ]}
      />
    </PageShell>
  );
}
