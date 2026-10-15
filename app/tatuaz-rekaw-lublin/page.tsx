import type { Metadata } from "next";
import ContentBlocks from "../components/ContentBlocks";
import ContactCta from "../components/ContactCta";
import PageShell from "../components/PageShell";
import JsonLd, { SITE_URL, faqSchema, studioSchema } from "../components/JsonLd";
import { postInline } from "../lib/blog";
import type { Block } from "../lib/blog/types";

// Odświeżanie co godzinę, żeby odnośniki do zaplanowanych wpisów
// bloga pojawiły się same, gdy te wpisy wejdą na stronę.
export const revalidate = 3600;

const TITLE = "Tatuaż rękaw w Lublinie - projekt, który opowiada Twoją historię";

export const metadata: Metadata = {
  title: "Tatuaż rękaw Lublin - ŁZA TATTOO & PIERCING",
  description:
    "Tatuaż rękaw w Lublinie: pełny rękaw, półrękaw i rękaw damski. Indywidualny projekt, konsultacja i sesje etapami. Umów rozmowę o pomyśle.",
  keywords: [
    "tatuaż rękaw",
    "tatuaż rękaw lublin",
    "tatuaż rękaw damski",
    "tatuaże rękawy damskie",
    "studio tatuażu lublin",
    "tatuaż lublin",
  ],
  alternates: { canonical: "/tatuaz-rekaw-lublin" },
  openGraph: {
    title: "Tatuaż rękaw Lublin - ŁZA TATTOO & PIERCING",
    description:
      "Tatuaż rękaw w Lublinie: pełny rękaw, półrękaw i rękaw damski. Indywidualny projekt i sesje etapami.",
    url: `${SITE_URL}/tatuaz-rekaw-lublin`,
    type: "website",
  },
};

const faqItems = [
  {
    q: "Czy rękaw można wykonać w jednej sesji?",
    a: "Zwykle nie. Rękaw powstaje etapami, a między sesjami skóra potrzebuje czasu na zagojenie.",
  },
  {
    q: "Czy mogę połączyć moje stare tatuaże w rękaw?",
    a: "Tak, istniejące wzory można wpleść w nową kompozycję lub je przykryć. Wyślij nam zdjęcie - ocenimy, co da się zrobić.",
  },
  {
    q: "Czy muszę mieć gotowy projekt?",
    a: "Nie. Wystarczy pomysł i inspiracje, a projekt przygotujemy razem podczas konsultacji.",
  },
  {
    q: "Czy rękaw boli bardziej niż mały tatuaż?",
    a: "Intensywność zależy głównie od miejsca, ale sesje są dłuższe, więc ból bywa bardziej męczący. Przedramię i zewnętrzna strona ramienia należą zwykle do łagodniejszych miejsc.",
  },
];

const blocks: Block[] = [
  { type: "h2", text: "Jakie rodzaje rękawów można wykonać?" },
  {
    type: "ul",
    items: [
      "Pełny rękaw - kompozycja od barku aż po nadgarstek",
      "Rękaw trzy czwarte - od barku do połowy przedramienia",
      "Półrękaw - samo ramię albo samo przedramię",
      "Rękaw łączący istniejące tatuaże - wcześniejsze wzory można wpleść w nową kompozycję lub je przykryć",
    ],
  },
  { type: "h2", text: "Tatuaż rękaw damski i męski - czy jest różnica?" },
  {
    type: "p",
    content: [
      "Technicznie żadnej. Szukając inspiracji pod hasłem tatuaże rękawy damskie albo męskie, warto pamiętać, że o charakterze kompozycji decyduje gust, a nie płeć. Przy tatuażu rękaw damski wiele osób wybiera lżejsze, delikatniejsze motywy, na przykład roślinne albo z cienką linią, ale rękaw może być równie wyrazisty, ciemny i rozbudowany jak każdy inny.",
    ],
  },
  { type: "h2", text: "Style, które sprawdzają się w rękawie" },
  {
    type: "p",
    content: [
      "Rękaw najlepiej wygląda wtedy, gdy kompozycja ma wspólny język wizualny. Nasz zespół pracuje w różnych stylach, więc możesz wybrać kierunek, który najbardziej Ci odpowiada:",
    ],
  },
  {
    type: "ul",
    items: [
      "Styl japoński - płynne, wielkoformatowe kompozycje, które naturalnie opływają kształt ręki",
      "Styl geometryczny - precyzyjne wzory i symetria, dobre do rękawów o uporządkowanym charakterze",
      "Czarno-biały i realistyczny - głębia, cieniowanie i szczegółowe motywy, na przykład natura czy portrety",
      "Tatuaż kolorowy - wyrazisty, żywy rękaw o dużej sile wyrazu",
      "Styl minimalistyczny - rzadszy wybór przy rękawie, ale możliwy w formie delikatnych, liniowych kompozycji",
    ],
  },
  {
    type: "p",
    content: [
      "Niezależnie od stylu dobieramy artystę, którego estetyka najlepiej pasuje do Twojego pomysłu. Więcej o stylach przeczytasz na stronie ",
      { text: "tatuaż w Lublinie", href: "/tatuaz-lublin" },
      ".",
    ],
  },
  { type: "h2", text: "Jak powstaje rękaw - etapy pracy" },
  {
    type: "ul",
    items: [
      "Konsultacja - opowiadasz o pomyśle, pokazujesz inspiracje i ustalamy zakres, czyli czy to pełny rękaw, czy półrękaw",
      "Projekt - kompozycja powstaje z myślą o ruchu i kształcie ręki, aby wzór dobrze wyglądał z każdej strony",
      "Sesje - rękaw wykonuje się etapami, a między nimi skóra ma czas na zagojenie",
      "Dopracowanie - po zagojeniu oceniamy całość i w razie potrzeby uzupełniamy szczegóły",
    ],
  },
  { type: "h2", text: "Ile trwa wykonanie rękawa?" },
  {
    type: "p",
    content: [
      "Nie da się podać jednej liczby, bo czas zależy od wielkości, poziomu szczegółowości i techniki. Zwykle jest to kilka sesji, a przy bardzo bogatych, kolorowych lub realistycznych kompozycjach nawet kilkanaście. Między sesjami robi się przerwy na gojenie, które trwają zazwyczaj kilka tygodni, dlatego rękaw warto zaplanować z wyprzedzeniem i bez pośpiechu. Od czego zależy cena, tłumaczymy w poradniku ",
      postInline("ile-kosztuje-tatuaz", "Ile kosztuje tatuaż? Od czego zależy cena"),
      ", a dokładną wycenę rękawa ustalamy podczas konsultacji.",
    ],
  },
  { type: "h2", text: "Przygotowanie i pielęgnacja" },
  {
    type: "p",
    content: [
      "Przy tak dużym projekcie przygotowanie ma jeszcze większe znaczenie. Zanim usiądziesz w fotelu, przeczytaj, ",
      postInline(
        "jak-przygotowac-sie-do-tatuazu",
        "jak przygotować się do tatuażu"
      ),
      " oraz ",
      postInline("czy-tatuaz-boli", "czy tatuaż boli"),
      " - rękaw to długie sesje, więc warto wiedzieć, czego się spodziewać. Po każdym etapie obowiązują zasady opisane w poradniku ",
      postInline("pielegnacja-tatuazu", "Jak dbać o świeży tatuaż?"),
      " oraz w tekście o ",
      postInline("gojenie-tatuazu", "czasie gojenia tatuażu"),
      ".",
    ],
  },
  { type: "h2", text: "Umów konsultację w sprawie rękawa" },
  {
    type: "p",
    content: [
      "Nie musisz mieć gotowego projektu - wystarczy pomysł. Napisz do nas przez ",
      { text: "formularz kontaktowy", href: "/#booking" },
      ", zadzwoń pod numer 733 625 594 lub wyślij wiadomość na lezkatattoo@gmail.com, a pomożemy dobrać artystę i termin konsultacji. Studio znajdziesz przy ul. Prezydenta Gabriela Narutowicza 22 w Lublinie. Jeśli dojeżdżasz z innej miejscowości, ",
      {
        text: "tutaj sprawdzisz, jak zaplanować wizytę",
        href: "/tatuaz-piercing-lublin-okolice",
      },
      ".",
    ],
  },
  {
    type: "faq",
    heading: "Najczęstsze pytania o tatuaż rękaw",
    items: faqItems,
  },
];

export default function TatuazRekawLublinPage() {
  return (
    <PageShell
      title={TITLE}
      lead="Tatuaż rękaw to jedno z największych wyzwań w pracy tatuażysty i jednocześnie jedna z najbardziej efektownych realizacji. To nie pojedynczy wzór, tylko spójna kompozycja obejmująca całą rękę lub jej dużą część, która powstaje na przestrzeni kilku sesji. W ŁZA TATTOO & PIERCING, studiu tatuażu w Lublinie, podchodzimy do niej tak, jak do każdego większego projektu: najpierw rozmowa, potem projekt, a dopiero na końcu pierwsza kreska."
    >
      <ContentBlocks blocks={blocks} />

      <ContactCta>
        <p>
          Masz pomysł na rękaw, ale nie wiesz, od czego zacząć? Napisz przez
          formularz, zadzwoń lub wyślij e-mail - omówimy zakres, dobierzemy
          artystę i zaplanujemy pierwszą konsultację w studiu przy ul.
          Prezydenta Gabriela Narutowicza 22 w Lublinie.
        </p>
      </ContactCta>

      <JsonLd
        data={[
          studioSchema,
          {
            "@type": "Service",
            name: "Tatuaż rękaw Lublin",
            serviceType: "Tatuaż rękaw",
            areaServed: "Lublin",
            provider: { "@id": `${SITE_URL}/#studio` },
            url: `${SITE_URL}/tatuaz-rekaw-lublin`,
          },
          faqSchema(faqItems),
        ]}
      />
    </PageShell>
  );
}
