import type { Metadata } from "next";
import Link from "next/link";
import ContentBlocks from "../components/ContentBlocks";
import ContactCta from "../components/ContactCta";
import BooksyCta from "../components/BooksyCta";
import PageShell from "../components/PageShell";
import JsonLd, { SITE_URL, studioSchema } from "../components/JsonLd";
import { postInline } from "../lib/blog";
import type { Block } from "../lib/blog/types";

export const revalidate = 3600;

const TITLE = "Piercing Lubartów - studio, do którego warto dojechać kilkanaście minut dłużej";

export const metadata: Metadata = {
  title: "Piercing Lubartów - studio w Lublinie | Łza Tattoo",
  description:
    "Piercing dla mieszkańców Lubartowa - tylko 25 minut od Lublina. Sterylne studio i jednorazowy sprzęt. Zadzwoń i umów się na wizytę już dziś!",
  keywords: ["piercing Lubartów", "tatuaż Lubartów"],
  alternates: { canonical: "/piercing-lubartow" },
  openGraph: {
    title: "Piercing Lubartów - studio w Lublinie | Łza Tattoo",
    description:
      "Piercing dla mieszkańców Lubartowa - tylko 25 minut od Lublina. Sterylne studio i jednorazowy sprzęt.",
    url: `${SITE_URL}/piercing-lubartow`,
    type: "website",
  },
};

const blocks: Block[] = [
  { type: "h2", text: "Jakie przekłucia wykonujemy?" },
  {
    type: "p",
    content: [
      "W ofercie mamy piercing płatka i chrząstki ucha (helix, tragus), nosa, pępka, brwi oraz języka. Przed zabiegiem rozmawiamy o Twoich oczekiwaniach i indywidualnie dobieramy zarówno miejsce przekłucia, jak i rodzaj biżuterii.",
    ],
  },
  { type: "h2", text: "Dlaczego klienci z Lubartowa nam ufają?" },
  {
    type: "p",
    content: [
      "Bo pracujemy w sterylnych warunkach, na jednorazowym sprzęcie, a każdy zabieg wykonuje osoba z realnym doświadczeniem w piercingu, nie „od wszystkiego po trochu”. Po zabiegu otrzymujesz jasne zasady pielęgnacji - dodatkowo warto zajrzeć do naszych artykułów o ",
      postInline("pielegnacja-piercingu-ucho", "pielęgnacji piercingu w uchu"),
      " i ",
      postInline("gojenie-piercingu-pepka", "gojeniu piercingu pępka"),
      ".",
    ],
  },
  { type: "h2", text: "Ile trwa wizyta?" },
  {
    type: "p",
    content: [
      "Sam zabieg to zwykle kilkanaście minut, ale wliczając rozmowę wstępną i dobór biżuterii, warto zarezerwować sobie na wizytę około pół godziny. Dzięki temu, nawet dojeżdżając z Lubartowa, zdążysz wrócić tego samego dnia bez pośpiechu.",
    ],
  },
  { type: "h2", text: "A może też tatuaż?" },
  {
    type: "p",
    content: [
      "Skoro już jesteś w drodze do Lublina, sprawdź też nasze ",
      { text: "studio tatuażu", href: "/tatuaz-lublin" },
      " - klienci szukający frazy tatuaż Lubartów często decydują się na połączenie obu zabiegów podczas jednej wizyty.",
    ],
  },
  { type: "h2", text: "Umów się na piercing" },
  {
    type: "p",
    content: [
      "Zadzwoń pod numer 733 625 594 lub skorzystaj z formularza rezerwacji. Studio znajduje się przy ul. Prezydenta Gabriela Narutowicza 22 w centrum Lublina, czynne od poniedziałku do piątku w godz. 9:00-17:00 oraz w soboty 9:00-15:00.",
    ],
  },
  { type: "h2", text: "Ile trwa gojenie?" },
  {
    type: "p",
    content: [
      "Orientacyjnie płatek ucha goi się 6-8 tygodni, chrząstka nawet kilka miesięcy, a nos czy pępek 2-4 miesiące - zawsze zależy to od indywidualnych predyspozycji skóry. Każdemu klientowi z Lubartowa tłumaczymy dokładnie, na co zwracać uwagę w kolejnych tygodniach, żeby gojenie przebiegło bez komplikacji.",
    ],
  },
  { type: "h2", text: "A jeśli jesteś niepełnoletni?" },
  {
    type: "p",
    content: [
      "Osoby pełnoletnie umawiamy bez dodatkowych formalności. Nastolatkowie z Lubartowa mogą zrobić piercing wyłącznie za pisemną zgodą rodzica lub opiekuna prawnego, który powinien być obecny na wizycie osobiście.",
    ],
  },
  { type: "h2", text: "Jak przygotować się do wizyty?" },
  {
    type: "p",
    content: [
      "Warto przyjechać wyspany, najedzony i bez pośpiechu w planie dnia - zdenerwowanie i pusty żołądek to najczęstsze powody gorszego samopoczucia w trakcie zabiegu. Unikaj też alkoholu dzień wcześniej, bo rozrzedza krew i wydłuża gojenie. Jeśli masz wątpliwości, czy dany rodzaj piercingu będzie dla Ciebie odpowiedni, śmiało zapytaj o to telefonicznie jeszcze przed przyjazdem z Lubartowa - chętnie doradzimy.",
    ],
  },
];

export default function PiercingLubartowPage() {
  return (
    <PageShell
      title={TITLE}
      lead="Szukasz kogoś, kto wykona piercing Lubartów solidnie i bezpiecznie? Nasze studio w Lublinie leży zaledwie około 25-30 minut od Lubartowa, a coraz więcej mieszkańców miasta wybiera właśnie tę krótką podróż zamiast przypadkowego miejsca „na miejscu”."
    >
      <ContentBlocks blocks={blocks} />

      <h2 className="mt-12 text-2xl uppercase tracking-wide md:text-3xl">
        Umów wizytę z Lubartowa
      </h2>

      <BooksyCta />

      <ContactCta>
        <p>
          Cenę każdego zabiegu widać przy wybranej usłudze w Booksy, a jeśli nie
          wiesz, co wybrać - podpowiemy przez telefon. Sprawdź też naszą{" "}
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
            name: "Piercing Lubartów",
            serviceType: "Piercing",
            areaServed: "Lubartów",
            provider: { "@id": `${SITE_URL}/#studio` },
            url: `${SITE_URL}/piercing-lubartow`,
          },
        ]}
      />
    </PageShell>
  );
}
