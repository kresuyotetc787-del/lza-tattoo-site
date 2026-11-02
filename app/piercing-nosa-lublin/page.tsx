import type { Metadata } from "next";
import Link from "next/link";
import BooksyCta from "../components/BooksyCta";
import ContentBlocks from "../components/ContentBlocks";
import PageShell from "../components/PageShell";
import PriceTable from "../components/PriceTable";
import JsonLd, { SITE_URL, faqSchema, studioSchema } from "../components/JsonLd";
import { work } from "../lib/artists";
import { CENNIK_PIERCINGU } from "../lib/cennik";
import type { Block } from "../lib/blog/types";

export const revalidate = 3600;

const TITLE = "Przekłuwanie nosa w Lublinie - nostril i septum w sterylnym studiu";

export const metadata: Metadata = {
  title: "Przekłuwanie nosa Lublin - nostril, septum | Łza Tattoo",
  description:
    "Przekłuwanie nosa w Lublinie: nostril i septum, dobór kolczyka, gojenie i pielęgnacja. Sterylne warunki, rezerwacja online w Łza Tattoo.",
  keywords: [
    "przekłuwanie nosa lublin",
    "piercing nosa lublin",
    "nostril",
    "septum",
    "kolczyk w nosie",
    "sterylny piercing lublin",
  ],
  alternates: { canonical: "/piercing-nosa-lublin" },
  openGraph: {
    title: "Przekłuwanie nosa Lublin - nostril, septum | Łza Tattoo",
    description:
      "Nostril i septum w sterylnym studiu w centrum Lublina - dobór kolczyka, gojenie i rezerwacja online.",
    url: `${SITE_URL}/piercing-nosa-lublin`,
    type: "website",
  },
};

const nosePrices = CENNIK_PIERCINGU.find((group) => group.id === "nos")!.items;
const noseWork = work("piercinglbn", 0);

const faqItems = [
  {
    q: "Czy przekłucie nosa boli?",
    a: "Krótko i zwykle bardziej zaskakuje, niż boli. Większość osób opisuje ostre ukłucie i łzawienie oczu.",
  },
  {
    q: "Nostril czy septum - co wybrać?",
    a: "Nostril jest bardziej klasyczny, septum wyrazistszy. Anatomia pomoże rozstrzygnąć.",
  },
  {
    q: "Ile kosztuje przekłucie nosa?",
    a: "Nostril (skrzydełko nosa) kosztuje 140 zł, septum i bridge 180 zł, a double nostril 250 zł.",
  },
  {
    q: "Czy mogę przyjść bez rezerwacji?",
    a: "Zalecamy rezerwację online, aby mieć pewność wolnego terminu.",
  },
  {
    q: "Kiedy mogę zmienić kolczyk?",
    a: "Po pełnym wygojeniu przekłucia. Wcześniejsza zmiana może podrażnić świeżą ranę.",
  },
];

const intro: Block[] = [
  { type: "h2", text: "Jakie przekłucia nosa wykonujemy?" },
  {
    type: "p",
    content: [
      "Najczęściej wybierany jest nostril, czyli przekłucie skrzydełka nosa, dyskretne i łatwe do ukrycia, jeśli sytuacja tego wymaga. Drugą popularną opcją jest septum, czyli przegroda nosowa. Przy septum liczy się budowa nosa, dlatego przed zabiegiem sprawdzamy, czy anatomia pozwala na komfortowe przekłucie. Możliwe są także inne warianty, np. przekłucie obu skrzydełek; ustal je z piercerem podczas wizyty. Pozostałe usługi znajdziesz na stronie ",
      { text: "piercing w Lublinie", href: "/piercing-lublin" },
      ".",
    ],
  },
  {
    type: "image",
    src: noseWork.src,
    alt: noseWork.alt,
    width: noseWork.width,
    height: noseWork.height,
    caption: "Podwójny nostril wykonany w naszym studiu.",
  },
  { type: "h2", text: "Jak wygląda wizyta?" },
  {
    type: "ol",
    items: [
      "Rozmawiamy o miejscu przekłucia i wybranej biżuterii.",
      "Sprawdzamy anatomię i oznaczamy punkt, który zatwierdzasz.",
      "Dezynfekujemy skórę i wykonujemy przekłucie jednorazową igłą.",
      "Zakładamy kolczyk i omawiamy pielęgnację.",
    ],
  },
  {
    type: "p",
    content: [
      "Sam zabieg trwa krótko, a większość czasu zajmuje przygotowanie. Pytanie o ból pojawia się najczęściej: nos jest wrażliwym miejscem i przy przekłuciu możesz mieć łzawienie oczu, które szybko mija. Szczegółowo opisaliśmy to we wpisie ",
      { text: "czy piercing boli", post: "czy-piercing-boli" },
      ".",
    ],
  },
  { type: "h2", text: "Dobór kolczyka do świeżego przekłucia" },
  {
    type: "p",
    content: [
      "Do świeżego przekłucia wybieramy biżuterię z materiałów dobrych dla skóry, takich jak tytan implantacyjny. Zbyt krótki kolczyk uciska tkanki w czasie obrzęku, a zbyt długi zahacza o ubranie.",
      " Z czasem możesz zmienić kolczyk na bardziej ozdobny, ale dopiero po pełnym wygojeniu.",
    ],
  },
];

const care: Block[] = [
  { type: "h2", text: "Gojenie i pielęgnacja" },
  {
    type: "p",
    content: [
      "Nostril goi się zwykle kilka miesięcy, a septum często szybciej, ale tempo bywa różne i zależy od pielęgnacji oraz organizmu. W tym czasie:",
    ],
  },
  {
    type: "ul",
    items: [
      "dotykaj przekłucia tylko czystymi rękami,",
      "nie obracaj i nie zdejmuj kolczyka,",
      "unikaj basenu, sauny i makijażu w pobliżu przekłucia,",
      "przemywaj okolicę zgodnie z zaleceniami piercera.",
    ],
  },
  {
    type: "p",
    content: [
      "Zasady pielęgnacji są podobne jak przy uchu, a omawiamy je w poradniku ",
      { text: "jak pielęgnować piercing w uchu", post: "pielegnacja-piercingu-ucho" },
      ". Przy zaczerwienieniu, które nie ustępuje, lub bólu skontaktuj się z nami albo z lekarzem.",
    ],
  },
];

export default function PiercingNosaLublinPage() {
  return (
    <PageShell
      title={TITLE}
      lead="Myślisz o przekłuwaniu nosa w Lublinie? Kolczyk w nosie to jedna z najpopularniejszych ozdób, ale też przekłucie, w którym dużo zależy od miejsca, techniki i doboru biżuterii. W studiu Łza Tattoo & Piercing przy ul. Narutowicza 22 wykonujemy przekłucia nosa w sterylnych warunkach, na jednorazowym sprzęcie i z indywidualnym podejściem do anatomii."
    >
      <ContentBlocks blocks={intro} />
      <ContentBlocks blocks={care} />

      <h2 className="mt-12 text-2xl uppercase tracking-wide md:text-3xl">
        Cena i rezerwacja
      </h2>
      <p className="mt-5 text-lg leading-8 text-black/85">
        Ceny przekłuć nosa w naszym studiu:
      </p>
      <PriceTable items={nosePrices} caption="Cennik przekłuwania nosa" />
      <p className="mt-4 text-lg leading-8 text-black/85">
        Te same ceny widzisz w kalendarzu Booksy przy każdej usłudze. Termin
        zarezerwujesz online na stronie{" "}
        <Link href="/rezerwacja-piercing" className="underline underline-offset-4 hover:opacity-60">
          rezerwacji piercingu
        </Link>
        , a pozostałe zabiegi znajdziesz w{" "}
        <Link href="/cennik" className="underline underline-offset-4 hover:opacity-60">
          pełnym cenniku
        </Link>
        . Osoby niepełnoletnie potrzebują pisemnej zgody rodzica lub opiekuna i
        jego obecności.
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
        Przekłuj nos w sprawdzonym studiu
      </h2>
      <BooksyCta>
        <p>
          Wybierz termin online albo zadzwoń pod numer 733 625 594. Przekłuwanie
          nosa w Lublinie w Łza Tattoo &amp; Piercing to higiena, rzeczowa
          rozmowa i biżuteria dobrana do Ciebie.
        </p>
      </BooksyCta>

      <JsonLd
        data={[
          studioSchema,
          {
            "@type": "Service",
            name: "Przekłuwanie nosa Lublin",
            serviceType: "Piercing nosa",
            areaServed: "Lublin",
            provider: { "@id": `${SITE_URL}/#studio` },
            url: `${SITE_URL}/piercing-nosa-lublin`,
            offers: nosePrices.map((item) => ({
              "@type": "Offer",
              name: item.name,
              price: item.price,
              priceCurrency: "PLN",
            })),
          },
          faqSchema(faqItems),
        ]}
      />
    </PageShell>
  );
}
