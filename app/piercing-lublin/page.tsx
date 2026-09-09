import type { Metadata } from "next";
import ContentBlocks from "../components/ContentBlocks";
import ContactCta from "../components/ContactCta";
import PageShell from "../components/PageShell";
import JsonLd, { SITE_URL, studioSchema } from "../components/JsonLd";
import { postInline } from "../lib/blog";
import type { Block } from "../lib/blog/types";

// Odświeżanie co godzinę, żeby odnośniki do zaplanowanych wpisów
// bloga pojawiły się same, gdy te wpisy wejdą na stronę.
export const revalidate = 3600;

const TITLE = "Piercing Lublin - studio, w którym higiena i doświadczenie idą w parze";

export const metadata: Metadata = {
  title: "Piercing Lublin - Studio ŁZA TATTOO & PIERCING",
  description:
    "Piercing w Lublinie w sterylnych warunkach, z doświadczonym piercerem i indywidualnym podejściem. Umów się online w ŁZA TATTOO & PIERCING.",
  keywords: [
    "piercing lublin",
    "studio piercingu lublin",
    "piercer lublin",
    "salon piercingu lublin",
    "kolczyki lublin",
    "przekłuwanie uszu lublin",
    "przekłuwanie nosa lublin",
    "przekłuwanie pępka lublin",
    "przekłuwanie brwi lublin",
    "przekłuwanie języka lublin",
    "piercing chrząstki lublin",
  ],
  alternates: { canonical: "/piercing-lublin" },
  openGraph: {
    title: "Piercing Lublin - Studio ŁZA TATTOO & PIERCING",
    description:
      "Piercing w Lublinie w sterylnych warunkach, z doświadczonym piercerem i indywidualnym podejściem.",
    url: `${SITE_URL}/piercing-lublin`,
    type: "website",
  },
};

const blocks: Block[] = [
  {
    type: "p",
    content: [
      "Piercing to decyzja, która zostaje z Tobą na dłużej, dlatego zależy nam, by cały proces - od pierwszej rozmowy po samo przekłucie - przebiegał w komfortowej atmosferze, bez pośpiechu i niepotrzebnego stresu.",
    ],
  },
  { type: "h2", text: "Jaki piercing wykonamy w naszym studiu w Lublinie?" },
  {
    type: "p",
    content: [
      "W naszej ofercie znajdziesz najpopularniejsze rodzaje przekłuć, wykonywane z zachowaniem najwyższych standardów bezpieczeństwa:",
    ],
  },
  {
    type: "ul",
    items: [
      "Przekłuwanie uszu - płatek, chrząstka, helix, tragus i inne warianty",
      "Przekłuwanie nosa - zarówno klasyczne, jak i mniej typowe umiejscowienia",
      "Przekłuwanie pępka",
      "Przekłuwanie brwi",
      "Przekłuwanie języka",
      "Piercing chrząstki oraz inne przekłucia dobierane indywidualnie",
    ],
  },
  {
    type: "p",
    content: [
      "Przed każdym zabiegiem rozmawiamy o Twoich oczekiwaniach, doradzamy w kwestii umiejscowienia i rodzaju biżuterii, tak by efekt był nie tylko estetyczny, ale też wygodny na co dzień.",
    ],
  },
  { type: "h2", text: "Dlaczego warto wybrać nasze studio piercingu w Lublinie?" },
  {
    type: "ul",
    items: [
      "Sterylne warunki i jednorazowy sprzęt używany do każdego klienta",
      "Doświadczony piercer, który każdy zabieg traktuje indywidualnie",
      "Lokalizacja w centrum Lublina - łatwy dojazd i parking w okolicy",
      "Elastyczne godziny pracy: poniedziałek-piątek 9:00-17:00, sobota 9:00-15:00, a w uzasadnionych przypadkach umawiamy się także poza tymi godzinami",
      "Jasne zasady pielęgnacji po zabiegu, które otrzymujesz od nas na miejscu",
    ],
  },
  { type: "h2", text: "Jak przebiega wizyta?" },
  {
    type: "p",
    content: [
      "Na początku omawiamy z Tobą rodzaj piercingu, miejsce przekłucia oraz dostępną biżuterię. Następnie przygotowujemy stanowisko zgodnie z zasadami higieny, dezynfekujemy skórę i wykonujemy zabieg przy użyciu sterylnego, jednorazowego sprzętu. Na koniec otrzymujesz od nas wskazówki dotyczące pielęgnacji świeżego piercingu - to, jak zadbasz o przekłucie w pierwszych tygodniach, ma ogromny wpływ na czas i komfort gojenia.",
    ],
  },
  {
    type: "p",
    content: [
      "Więcej o samej pielęgnacji przeczytasz w naszych wpisach: „",
      postInline("pielegnacja-piercingu-ucho", "Jak pielęgnować piercing w uchu"),
      "” oraz „",
      postInline("gojenie-piercingu-pepka", "Ile goi się piercing pępka"),
      "” - znajdziesz tam praktyczne wskazówki krok po kroku.",
    ],
  },
];

export default function PiercingLublinPage() {
  return (
    <PageShell
      title={TITLE}
      lead="Jeśli szukasz miejsca na piercing w Lublinie, w którym każdy zabieg wykonywany jest w sterylnych warunkach, z użyciem jednorazowego sprzętu i pod okiem osoby, która naprawdę zna się na rzeczy - trafiłeś we właściwe miejsce. Studio ŁZA TATTOO & PIERCING mieści się w centrum miasta, przy ul. Prezydenta Gabriela Narutowicza 22, i od lat łączy pasję do sztuki ciała z pełnym profesjonalizmem."
    >
      <ContentBlocks blocks={blocks} />

      <h2 className="mt-12 text-2xl uppercase tracking-wide md:text-3xl">
        Cennik i rezerwacja
      </h2>

      <ContactCta>
        <p>
          Cena zabiegu zależy od rodzaju przekłucia i wybranej biżuterii -
          dokładną wycenę podamy podczas rozmowy. Jeśli masz pytania dotyczące
          konkretnego rodzaju piercingu lub chcesz umówić termin, napisz do nas
          przez formularz kontaktowy, zadzwoń lub wyślij wiadomość e-mail -
          odpowiemy i pomożemy dobrać dogodny termin.
        </p>
        <p className="mt-4">
          Znajdziesz nas przy ul. Prezydenta Gabriela Narutowicza 22 w Lublinie.
          Zapraszamy do studia, w którym piercing wykonuje się z głową -
          bezpiecznie, higienicznie i z uwagą na każdy detal.
        </p>
      </ContactCta>

      <JsonLd
        data={[
          studioSchema,
          {
            "@type": "Service",
            name: "Piercing Lublin",
            serviceType: "Piercing",
            areaServed: "Lublin",
            provider: { "@id": `${SITE_URL}/#studio` },
            url: `${SITE_URL}/piercing-lublin`,
          },
        ]}
      />
    </PageShell>
  );
}
