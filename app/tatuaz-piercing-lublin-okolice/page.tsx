import type { Metadata } from "next";
import Link from "next/link";
import ContentBlocks from "../components/ContentBlocks";
import ContactCta from "../components/ContactCta";
import PageShell from "../components/PageShell";
import JsonLd, { SITE_URL, faqSchema, studioSchema } from "../components/JsonLd";
import type { Block } from "../lib/blog/types";

// Odświeżanie co godzinę - ta sama zasada co na pozostałych podstronach
// ofertowych, dzięki czemu strona nie zostaje z nieaktualnym cache.
export const revalidate = 3600;

const TITLE = "Tatuaż i piercing w Lublinie - dojazd z całego regionu";

export const metadata: Metadata = {
  title: "Tatuaż i piercing Lublin - okolice i dojazd",
  description:
    "Dojeżdżasz do Lublina na tatuaż lub piercing spoza miasta? Sprawdź, jak zaplanować wizytę, dojazd i parking blisko okolicznej miejscowości.",
  keywords: [
    "tatuaż i piercing lublin okolice",
    "tatuaż świdnik",
    "piercing świdnik",
    "tatuaż zamość",
    "piercing zamość",
    "tatuaż chełm",
    "piercing chełm",
    "tatuaż kraśnik",
    "piercing kraśnik",
    "tatuaż lubartów",
    "piercing lubartów",
    "tatuaż bychawa",
    "piercing bychawa",
  ],
  alternates: { canonical: "/tatuaz-piercing-lublin-okolice" },
  openGraph: {
    title: "Tatuaż i piercing Lublin - okolice i dojazd",
    description:
      "Dojeżdżasz do Lublina na tatuaż lub piercing spoza miasta? Sprawdź, jak zaplanować wizytę, dojazd i parking.",
    url: `${SITE_URL}/tatuaz-piercing-lublin-okolice`,
    type: "website",
  },
};

const faqItems = [
  {
    q: "Czy trzeba umawiać się wcześniej, jeśli dojeżdżam z innej miejscowości?",
    a: "Zdecydowanie tak - rezerwacja terminu pozwala nam zaplanować dzień tak, żeby Twoja wizyta odbyła się bez zbędnego oczekiwania.",
  },
  {
    q: "Czy oferujecie dłuższe sesje dla osób dojeżdżających z daleka?",
    a: "Tak, przy większych projektach tatuażu można zaplanować dłuższą, jednorazową sesję - szczegóły ustalamy indywidualnie podczas konsultacji.",
  },
  {
    q: "Czy da się umówić wizytę poza standardowymi godzinami otwarcia?",
    a: "W uzasadnionych przypadkach tak - napisz do nas, a postaramy się dopasować dogodny termin.",
  },
];

const blocks: Block[] = [
  { type: "h2", text: "Skąd najczęściej do nas trafiacie?" },
  {
    type: "p",
    content: [
      "Nasi klienci dojeżdżają między innymi z okolic takich jak Świdnik, Zamość, Chełm, Kraśnik, Lubartów i Bychawa. Niezależnie od tego, skąd jedziesz, studio znajdziesz w centrum Lublina, przy ul. Prezydenta Gabriela Narutowicza 22 - z łatwym dojazdem i miejscami parkingowymi w okolicy.",
    ],
  },
  { type: "h2", text: "Dojazd z poszczególnych miejscowości" },
  {
    type: "ul",
    items: [
      "Świdnik - jedna z najbliższych miejscowości, dojazd zajmuje zwykle kilkanaście minut samochodem",
      "Zamość - wielu klientów łączy wizytę u nas z innymi sprawami w Lublinie, planując dłuższy pobyt w mieście",
      "Chełm - dojazd wygodny trasą krajową, warto zarezerwować termin z wyprzedzeniem",
      "Kraśnik - popularny kierunek wśród osób szukających większego wyboru stylów tatuażu niż w mniejszym mieście",
      "Lubartów - bliska odległość od Lublina sprawia, że to jedna z częściej odwiedzających nas miejscowości",
      "Bychawa - krótki dojazd, często łączony z wizytą konsultacyjną i sesją tego samego dnia",
    ],
  },
  { type: "h2", text: "Jak zaplanować wizytę, jeśli dojeżdżasz spoza Lublina?" },
  {
    type: "p",
    content: [
      "Najlepiej umówić się z wyprzedzeniem - napisz do nas przez formularz kontaktowy, zadzwoń pod numer 733 625 594 lub napisz na adres lezkatattoo@gmail.com, podając przybliżoną godzinę przyjazdu. Dzięki temu unikniesz oczekiwania i będziesz mieć zarezerwowany czas wyłącznie dla siebie. Przy większych projektach tatuażu, gdzie liczy się każdy przejazd, można też od razu zapytać o zaplanowanie dłuższej, jednorazowej sesji zamiast kilku krótszych wizyt.",
    ],
  },
  { type: "h2", text: "Co warto ustalić przed przyjazdem z daleka" },
  {
    type: "ul",
    items: [
      "Dokładną godzinę wizyty - tak, żeby nie czekać na miejscu, jeśli masz zaplanowany długi powrót",
      "Przybliżony czas trwania zabiegu - przy większych realizacjach warto zarezerwować sobie na wyjazd cały dzień",
      "Ewentualne pytania dotyczące projektu - lepiej wyjaśnić je wcześniej telefonicznie lub mailowo niż dopiero na miejscu",
      "Zapasowy czas na dojazd - szczególnie w weekendy, kiedy w centrum bywa więcej ruchu",
    ],
  },
  {
    type: "p",
    content: [
      "Pełny zakres usług, style tatuażu i rodzaje piercingu opisaliśmy na osobnych podstronach - zajrzyj do ",
      { text: "oferty tatuażu", href: "/tatuaz-lublin" },
      " oraz ",
      { text: "oferty piercingu", href: "/piercing-lublin" },
      ", żeby przed przyjazdem dokładnie zorientować się, co oferujemy.",
    ],
  },
  { type: "h2", text: "Dojazd i parking" },
  {
    type: "p",
    content: [
      "Studio mieści się w centrum Lublina, przy ul. Prezydenta Gabriela Narutowicza 22 (20-004 Lublin) - to lokalizacja dobrze skomunikowana zarówno dla osób jadących samochodem, jak i komunikacją miejską z innych części miasta i regionu. W okolicy dostępne są miejsca parkingowe, więc dojazd nie powinien nastręczać trudności.",
    ],
  },
  {
    type: "faq",
    heading: "Najczęstsze pytania o dojazd i rezerwację",
    items: faqItems,
  },
];

export default function TatuazPiercingLublinOkolicePage() {
  return (
    <PageShell
      title={TITLE}
      lead="Do naszego studia ŁZA TATTOO & PIERCING w Lublinie regularnie przyjeżdżają klienci nie tylko z samego miasta, ale też z okolicznych miejscowości. Jeśli szukasz sprawdzonego miejsca na tatuaż lub piercing i mieszkasz w pobliżu Lublina, ten dojazd naprawdę się opłaca - a my staramy się go maksymalnie ułatwić."
    >
      <ContentBlocks blocks={blocks} />

      <h2 className="mt-12 text-2xl uppercase tracking-wide md:text-3xl">
        Umów się na wizytę w Lublinie
      </h2>

      <ContactCta>
        <p>
          Niezależnie od tego, czy jesteś z Lublina, czy dojeżdżasz z okolicy -
          zapraszamy do studia ŁZA TATTOO &amp; PIERCING. Sprawdź naszą{" "}
          <Link
            href="/tatuaz-lublin"
            className="underline underline-offset-4 hover:opacity-60"
          >
            ofertę tatuażu
          </Link>{" "}
          i{" "}
          <Link
            href="/piercing-lublin"
            className="underline underline-offset-4 hover:opacity-60"
          >
            ofertę piercingu
          </Link>{" "}
          i umów się na konsultację.
        </p>
      </ContactCta>

      <JsonLd
        data={[
          studioSchema,
          {
            "@type": "Service",
            name: "Tatuaż i piercing Lublin - okolice",
            serviceType: "Tatuaż i piercing",
            areaServed: [
              "Lublin",
              "Świdnik",
              "Zamość",
              "Chełm",
              "Kraśnik",
              "Lubartów",
              "Bychawa",
            ],
            provider: { "@id": `${SITE_URL}/#studio` },
            url: `${SITE_URL}/tatuaz-piercing-lublin-okolice`,
          },
          faqSchema(faqItems),
        ]}
      />
    </PageShell>
  );
}
