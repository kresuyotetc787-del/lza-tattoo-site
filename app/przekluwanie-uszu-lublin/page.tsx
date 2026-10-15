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

const TITLE =
  "Przekłuwanie uszu w Lublinie - bezpiecznie, precyzyjnie i bez pośpiechu";

export const metadata: Metadata = {
  title: "Przekłuwanie uszu Lublin - ŁZA TATTOO & PIERCING",
  description:
    "Przekłuwanie uszu w Lublinie: płatek, helix, tragus i chrząstka. Sterylne warunki, jednorazowy sprzęt i dobór kolczyka. Umów wizytę online.",
  keywords: [
    "przekłuwanie uszu lublin",
    "piercing chrząstki lublin",
    "kolczyki lublin",
    "studio piercingu lublin",
    "piercing lublin",
  ],
  alternates: { canonical: "/przekluwanie-uszu-lublin" },
  openGraph: {
    title: "Przekłuwanie uszu Lublin - ŁZA TATTOO & PIERCING",
    description:
      "Przekłuwanie uszu w Lublinie: płatek, helix, tragus i chrząstka. Sterylne warunki i dobór kolczyka.",
    url: `${SITE_URL}/przekluwanie-uszu-lublin`,
    type: "website",
  },
};

const faqItems = [
  {
    q: "Czy przekłucie ucha boli?",
    a: "Odczucia są indywidualne, ale najmniej bolesny jest zwykle płatek ucha - zabieg trwa ułamek sekundy. Przekłucie chrząstki jest wyraźniej odczuwalne.",
  },
  {
    q: "Ile goi się przekłucie ucha?",
    a: "Płatek ucha goi się zwykle 6-8 tygodni, a chrząstka znacznie dłużej - nawet od kilku miesięcy do roku.",
  },
  {
    q: "Kiedy można zmienić pierwszy kolczyk?",
    a: "Dopiero po pełnym zagojeniu przekłucia. Zbyt wczesna wymiana często kończy się podrażnieniem.",
  },
  {
    q: "Czy trzeba się wcześniej umawiać?",
    a: "Tak, pracujemy na umówione wizyty.",
  },
];

const blocks: Block[] = [
  { type: "h2", text: "Jakie przekłucia ucha wykonujemy?" },
  {
    type: "p",
    content: [
      "Ucho daje wyjątkowo dużo możliwości, dlatego przed zabiegiem wspólnie oglądamy jego budowę i wybieramy miejsca, które będą dobrze wyglądać i wygodnie się goić:",
    ],
  },
  {
    type: "ul",
    items: [
      "Płatek ucha - klasyczne przekłucie, najłatwiejsze w gojeniu i dobre na pierwszy raz; możliwe są także dwa lub trzy otwory w jednym uchu",
      "Helix - przekłucie górnej części chrząstki, wybierane pojedynczo lub w zestawie z kilkoma kolczykami",
      "Tragus - niewielki fragment chrząstki przy wejściu do przewodu słuchowego",
      "Inne warianty chrząstki, takie jak conch czy daith - dobierane indywidualnie, bo nie każde ucho ma budowę odpowiednią do każdego przekłucia",
    ],
  },
  { type: "h2", text: "Płatek czy chrząstka - czym się różnią?" },
  {
    type: "p",
    content: [
      "Przekłucie płatka jest zwykle mało bolesne i goi się w ciągu około 6-8 tygodni. Piercing chrząstki odczuwa się wyraźniej, a gojenie trwa znacznie dłużej - od kilku miesięcy nawet do roku, ponieważ chrząstka ma słabsze ukrwienie niż miękka tkanka płatka. To ważna informacja przy planowaniu: chrząstka wymaga cierpliwości i regularnej pielęgnacji. O odczuciach podczas zabiegu piszemy we wpisie ",
      postInline(
        "czy-piercing-boli",
        "Czy piercing boli? Poziom bólu w zależności od miejsca"
      ),
      ", a o samym gojeniu - w poradniku ",
      postInline(
        "pielegnacja-piercingu-ucho",
        "Jak pielęgnować piercing w uchu? Zasady gojenia"
      ),
      ".",
    ],
  },
  { type: "h2", text: "Jak wygląda wizyta?" },
  {
    type: "ul",
    items: [
      "Rozmowa i wybór miejsca - omawiamy, co chcesz przekłuć, i dopasowujemy przekłucie do budowy Twojego ucha",
      "Dobór biżuterii - pokazujemy dostępne kolczyki i doradzamy, które sprawdzą się na początku gojenia",
      "Przygotowanie - stanowisko przygotowujemy zgodnie z zasadami higieny, a skórę dezynfekujemy",
      "Zabieg - wykonujemy go sterylnym, jednorazowym sprzętem",
      "Zalecenia - na koniec dostajesz jasne wskazówki dotyczące pielęgnacji",
    ],
  },
  { type: "h2", text: "Kolczyki do świeżego przekłucia" },
  {
    type: "p",
    content: [
      "Dobór kolczyka ma duży wpływ na komfort gojenia. Na początku warto wybrać biżuterię wygodną i niedrażniącą, a większe, ozdobne wzory zostawić na później. Jeśli zastanawiasz się nad kolczykami w Lublinie do pierwszego przekłucia, podczas wizyty omówimy z Tobą dostępne modele, ich rozmiar oraz ewentualne uczulenia na metale. Zbyt wczesna zmiana biżuterii to jedna z częstszych przyczyn podrażnień, dlatego pierwszy kolczyk nosi się do pełnego zagojenia.",
    ],
  },
  { type: "h2", text: "Pielęgnacja po przekłuciu" },
  {
    type: "p",
    content: [
      "Po zabiegu przekazujemy zasady pielęgnacji, bo to, jak zadbasz o ucho w pierwszych tygodniach, bezpośrednio wpływa na czas gojenia. Najczęściej zaleca się delikatne przemywanie przekłucia solą fizjologiczną, unikanie dotykania ucha nieumytymi rękami, rezygnację ze spania na świeżo przekłutym uchu oraz z pływania w basenie. W razie niepokojących objawów warto skonsultować się z lekarzem.",
    ],
  },
  { type: "h2", text: "Umów przekłuwanie uszu w Lublinie" },
  {
    type: "p",
    content: [
      "Pracujemy na umówione wizyty, dzięki czemu masz zarezerwowany czas bez pośpiechu. Termin możesz wybrać przez ",
      { text: "formularz kontaktowy", href: "/#booking" },
      ", zadzwonić pod numer 733 625 594 lub wysłać wiadomość na lezkatattoo@gmail.com. Studio jest czynne od poniedziałku do piątku w godzinach 9:00-17:00 oraz w soboty 9:00-15:00.",
    ],
  },
  {
    type: "p",
    content: [
      "Pełną ofertę zabiegów znajdziesz na stronie ",
      { text: "piercing w Lublinie", href: "/piercing-lublin" },
      ". Jeśli dojeżdżasz do nas spoza miasta, sprawdź ",
      {
        text: "informacje o dojeździe z okolic Lublina",
        href: "/tatuaz-piercing-lublin-okolice",
      },
      ".",
    ],
  },
  {
    type: "faq",
    heading: "Najczęstsze pytania o przekłuwanie uszu",
    items: faqItems,
  },
];

export default function PrzekluwanieUszuLublinPage() {
  return (
    <PageShell
      title={TITLE}
      lead="Przekłuwanie uszu to jeden z najczęściej wybieranych zabiegów w naszym studiu - od klasycznego przekłucia płatka, przez piercing chrząstki w Lublinie, po zestawy kilku kolczyków w jednym uchu. ŁZA TATTOO & PIERCING to studio piercingu w Lublinie przy ul. Prezydenta Gabriela Narutowicza 22, w którym zabieg wykonuje doświadczona osoba, w sterylnych warunkach i bez pośpiechu."
    >
      <ContentBlocks blocks={blocks} />

      <ContactCta>
        <p>
          Chcesz przekłuć płatek, helix albo tragus? Napisz przez formularz,
          zadzwoń lub wyślij e-mail - doradzimy, które przekłucie sprawdzi się
          przy budowie Twojego ucha, i zaproponujemy termin w studiu przy ul.
          Prezydenta Gabriela Narutowicza 22 w Lublinie.
        </p>
      </ContactCta>

      <JsonLd
        data={[
          studioSchema,
          {
            "@type": "Service",
            name: "Przekłuwanie uszu Lublin",
            serviceType: "Przekłuwanie uszu",
            areaServed: "Lublin",
            provider: { "@id": `${SITE_URL}/#studio` },
            url: `${SITE_URL}/przekluwanie-uszu-lublin`,
          },
          faqSchema(faqItems),
        ]}
      />
    </PageShell>
  );
}
