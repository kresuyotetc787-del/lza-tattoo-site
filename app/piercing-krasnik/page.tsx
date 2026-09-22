import type { Metadata } from "next";
import Link from "next/link";
import ContentBlocks from "../components/ContentBlocks";
import ContactCta from "../components/ContactCta";
import PageShell from "../components/PageShell";
import JsonLd, { SITE_URL, studioSchema } from "../components/JsonLd";
import { postInline } from "../lib/blog";
import type { Block } from "../lib/blog/types";

export const revalidate = 3600;

const TITLE = "Piercing Kraśnik - blisko Lublina, a jakość bez kompromisów";

export const metadata: Metadata = {
  title: "Piercing Kraśnik - studio w Lublinie | Łza Tattoo",
  description:
    "Piercing dla mieszkańców Kraśnika - zaledwie 40 minut jazdy od Lublina. Sterylne warunki i jednorazowy sprzęt. Zadzwoń i umów się na wizytę",
  keywords: ["piercing Kraśnik", "tatuaż Kraśnik"],
  alternates: { canonical: "/piercing-krasnik" },
  openGraph: {
    title: "Piercing Kraśnik - studio w Lublinie | Łza Tattoo",
    description:
      "Piercing dla mieszkańców Kraśnika - zaledwie 40 minut jazdy od Lublina. Sterylne warunki i jednorazowy sprzęt.",
    url: `${SITE_URL}/piercing-krasnik`,
    type: "website",
  },
};

const blocks: Block[] = [
  { type: "h2", text: "Co oferujemy?" },
  {
    type: "p",
    content: [
      "Przekłuwamy płatek i chrząstkę ucha (helix, tragus), nos, pępek, brwi oraz język. Biżuterię i dokładne miejsce przekłucia ustalamy indywidualnie podczas rozmowy przed zabiegiem - tak, żeby wynik pasował do Twojej twarzy czy ucha, a nie tylko do zdjęcia w internecie.",
    ],
  },
  { type: "h2", text: "Higiena na pierwszym miejscu" },
  {
    type: "p",
    content: [
      "Każdy zabieg wykonujemy na sterylnym, jednorazowym sprzęcie. Po przekłuciu dostajesz komplet informacji o pielęgnacji - uzupełniające wskazówki znajdziesz też w naszych wpisach o ",
      postInline("pielegnacja-piercingu-ucho", "pielęgnacji piercingu w uchu"),
      " oraz ",
      postInline("gojenie-piercingu-pepka", "gojeniu piercingu pępka"),
      ".",
    ],
  },
  { type: "h2", text: "Jak wygląda wizyta?" },
  {
    type: "p",
    content: [
      "Umawiasz termin telefonicznie lub online, na miejscu krótko rozmawiamy o oczekiwaniach, wykonujemy zabieg i przekazujemy zasady pielęgnacji na najbliższe tygodnie. Cały proces jest tak zaplanowany, żeby dojazd z Kraśnika był wart czasu.",
    ],
  },
  { type: "h2", text: "A tatuaż?" },
  {
    type: "p",
    content: [
      "Jeśli oprócz piercingu interesuje Cię też tatuaż Kraśnik, w tym samym miejscu prowadzimy ",
      { text: "studio tatuażu", href: "/tatuaz-lublin" },
      " - od minimalistycznych wzorów po realistyczne portrety i cover-upy. Jeden wyjazd do Lublina może załatwić obie sprawy naraz.",
    ],
  },
  { type: "h2", text: "Rezerwacja" },
  {
    type: "p",
    content: [
      "Zadzwoń pod numer 733 625 594 lub zarezerwuj wizytę przez formularz online. Znajdziesz nas przy ul. Prezydenta Gabriela Narutowicza 22 w centrum Lublina, czynni od poniedziałku do piątku 9:00-17:00 i w soboty 9:00-15:00.",
    ],
  },
  { type: "h2", text: "Ile trzeba czekać na wygojenie?" },
  {
    type: "p",
    content: [
      "To zależy od miejsca przekłucia - płatek ucha wymaga zwykle 6-8 tygodni cierpliwości, chrząstka kilku miesięcy, a pępek czy nos orientacyjnie 2-4 miesięcy. Każdemu klientowi z Kraśnika tłumaczymy dokładnie, jak pielęgnować świeży piercing, żeby jedna wizyta w Lublinie w zupełności wystarczyła.",
    ],
  },
  { type: "h2", text: "Piercing dla osób niepełnoletnich" },
  {
    type: "p",
    content: [
      "Dorosłych klientów przyjmujemy bez dodatkowych formalności. Jeśli o zabieg pyta osoba niepełnoletnia, wymagana jest pisemna zgoda rodzica lub opiekuna prawnego, najlepiej obecnego osobiście na wizycie - to zasada, której trzymamy się niezależnie od tego, z jak daleka ktoś przyjeżdża.",
    ],
  },
  { type: "h2", text: "Praktyczna wskazówka na dojazd z Kraśnika" },
  {
    type: "p",
    content: [
      "Jeśli zależy Ci na czasie, zadzwoń wcześniej i ustal szczegóły - rodzaj piercingu, orientacyjną cenę biżuterii i to, na co warto zwrócić uwagę przed samym zabiegiem. Dzięki temu na miejscu spędzisz tylko tyle czasu, ile naprawdę potrzeba, a droga z Kraśnika do Lublina i z powrotem zmieści się wygodnie w jedno przedpołudnie lub popołudnie.",
    ],
  },
];

export default function PiercingKrasnikPage() {
  return (
    <PageShell
      title={TITLE}
      lead="Kraśnik dzieli od naszego studia w Lublinie zaledwie około 40 minut jazdy, dlatego coraz więcej osób szukających frazy piercing Kraśnik decyduje się na wizytę właśnie u nas. To wystarczająco blisko, żeby wyjazd nie był problemem, a jednocześnie na tyle daleko od „pierwszego lepszego” studia, że warto pojechać tam, gdzie liczy się doświadczenie."
    >
      <ContentBlocks blocks={blocks} />

      <h2 className="mt-12 text-2xl uppercase tracking-wide md:text-3xl">
        Umów wizytę z Kraśnika
      </h2>

      <ContactCta>
        <p>
          Cena zabiegu zależy od rodzaju przekłucia i wybranej biżuterii -
          dokładną wycenę podamy podczas rozmowy. Sprawdź też naszą{" "}
          <Link
            href="/piercing-lublin"
            className="underline underline-offset-4 hover:opacity-60"
          >
            pełną ofertę piercingu
          </Link>
          .
        </p>
      </ContactCta>

      <JsonLd
        data={[
          studioSchema,
          {
            "@type": "Service",
            name: "Piercing Kraśnik",
            serviceType: "Piercing",
            areaServed: "Kraśnik",
            provider: { "@id": `${SITE_URL}/#studio` },
            url: `${SITE_URL}/piercing-krasnik`,
          },
        ]}
      />
    </PageShell>
  );
}
