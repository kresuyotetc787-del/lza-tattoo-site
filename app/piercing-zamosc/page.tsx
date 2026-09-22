import type { Metadata } from "next";
import Link from "next/link";
import ContentBlocks from "../components/ContentBlocks";
import ContactCta from "../components/ContactCta";
import PageShell from "../components/PageShell";
import JsonLd, { SITE_URL, studioSchema } from "../components/JsonLd";
import { postInline } from "../lib/blog";
import type { Block } from "../lib/blog/types";

export const revalidate = 3600;

const TITLE = "Piercing Zamość - dlaczego warto dojechać po jakość i bezpieczeństwo";

export const metadata: Metadata = {
  title: "Piercing Zamość - studio w Lublinie | Łza Tattoo",
  description:
    "Piercing dla klientów z Zamościa - sterylne studio w Lublinie, jednorazowy sprzęt i indywidualne podejście. Sprawdź ofertę i umów wizytę",
  keywords: ["piercing Zamość", "tatuaż Zamość", "studio tatuażu Zamość"],
  alternates: { canonical: "/piercing-zamosc" },
  openGraph: {
    title: "Piercing Zamość - studio w Lublinie | Łza Tattoo",
    description:
      "Piercing dla klientów z Zamościa - sterylne studio w Lublinie, jednorazowy sprzęt i indywidualne podejście.",
    url: `${SITE_URL}/piercing-zamosc`,
    type: "website",
  },
};

const blocks: Block[] = [
  { type: "h2", text: "Czy warto jechać aż z Zamościa?" },
  {
    type: "p",
    content: [
      "Rozumiemy, że wybór studia poza swoim miastem to decyzja, którą trzeba dobrze przemyśleć. Dlatego stawiamy na pełną przejrzystość: sterylne warunki pracy, jednorazowy sprzęt do każdego zabiegu oraz osoby, które wykonują piercing na co dzień, a nie od święta. Przed przyjazdem możesz telefonicznie omówić wszystkie szczegóły, żeby wizyta w Lublinie była jak najkrótsza i najbardziej efektywna.",
    ],
  },
  { type: "h2", text: "Co możemy przekłuć?" },
  {
    type: "p",
    content: [
      "Wykonujemy piercing płatka i chrząstki ucha (helix, tragus), nosa, pępka, brwi oraz języka. Miejsce i rodzaj biżuterii dobieramy indywidualnie do kształtu ucha czy twarzy - to jeden z powodów, dla których klienci z Zamościa doceniają nasze podejście.",
    ],
  },
  { type: "h2", text: "Higiena, która ma znaczenie" },
  {
    type: "p",
    content: [
      "Każdy zabieg wykonujemy na jednorazowym, sterylnym sprzęcie, a po przekłuciu otrzymujesz jasne zasady pielęgnacji. Możesz je sobie odświeżyć również w naszych wpisach o ",
      postInline("pielegnacja-piercingu-ucho", "pielęgnacji piercingu w uchu"),
      " czy ",
      postInline("gojenie-piercingu-pepka", "gojeniu piercingu pępka"),
      ", zanim jeszcze wyruszysz w drogę.",
    ],
  },
  { type: "h2", text: "Piercing czy jednak tatuaż?" },
  {
    type: "p",
    content: [
      "Skoro planujesz dłuższy wyjazd do Lublina, warto od razu pomyśleć, czy przy okazji nie zrealizować też tatuażu. Frazy tatuaż Zamość i studio tatuażu Zamość prowadzą u nas do tego samego adresu - naszego ",
      { text: "studia tatuażu", href: "/tatuaz-lublin" },
      ", gdzie łączymy oba zabiegi pod jednym dachem, więc jeden wyjazd może załatwić obie sprawy naraz.",
    ],
  },
  { type: "h2", text: "Jak umówić wizytę z Zamościa?" },
  {
    type: "p",
    content: [
      "Zadzwoń pod numer 733 625 594 lub zarezerwuj termin przez formularz online. Przyjmujemy od poniedziałku do piątku w godz. 9:00-17:00 oraz w soboty 9:00-15:00, przy ul. Prezydenta Gabriela Narutowicza 22 w centrum Lublina.",
    ],
  },
  { type: "h2", text: "Ile czasu zajmie cała wizyta?" },
  {
    type: "p",
    content: [
      "Planując wyjazd z Zamościa, warto policzyć nie tylko drogę, ale i czas samej wizyty. Rozmowa wstępna, dobór biżuterii i sam zabieg zajmują zwykle od 20 do 40 minut, w zależności od rodzaju piercingu. Jeśli chcesz zaoszczędzić czas, możesz wcześniej telefonicznie ustalić szczegóły - wtedy na miejscu zostaje już tylko sam zabieg.",
    ],
  },
  { type: "h2", text: "Gojenie - czego się spodziewać?" },
  {
    type: "p",
    content: [
      "Orientacyjny czas gojenia to od 6-8 tygodni dla płatka ucha, przez kilka miesięcy dla chrząstki, aż po 2-4 miesiące w przypadku nosa czy pępka. Dokładne wytyczne pielęgnacyjne, dopasowane do Twojego przekłucia, otrzymasz od nas na miejscu, więc dojazd z Zamościa nie będzie musiał się powtarzać z powodu niejasności co do pielęgnacji.",
    ],
  },
];

export default function PiercingZamoscPage() {
  return (
    <PageShell
      title={TITLE}
      lead="Coraz więcej osób szukających frazy piercing Zamość trafia do naszego studia w Lublinie - i wraca zadowolonych. Od Zamościa dzieli nas około godziny jazdy, ale dla wielu klientów to i tak bliżej niż dojazd do stolicy województwa po zabieg, na którym naprawdę im zależy. Łza Tattoo & Piercing to miejsce, w którym higiena i doświadczenie liczą się bardziej niż to, ile kilometrów trzeba pokonać."
    >
      <ContentBlocks blocks={blocks} />

      <h2 className="mt-12 text-2xl uppercase tracking-wide md:text-3xl">
        Umów wizytę z Zamościa
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
            name: "Piercing Zamość",
            serviceType: "Piercing",
            areaServed: "Zamość",
            provider: { "@id": `${SITE_URL}/#studio` },
            url: `${SITE_URL}/piercing-zamosc`,
          },
        ]}
      />
    </PageShell>
  );
}
