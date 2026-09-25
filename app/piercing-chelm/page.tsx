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

const TITLE = "Piercing Chełm - indywidualne podejście, na które warto przyjechać do Lublina";

export const metadata: Metadata = {
  title: "Piercing Chełm - studio w Lublinie | Łza Tattoo",
  description:
    "Piercing dla klientów z Chełma - indywidualne podejście i jednorazowy sprzęt w naszym studiu w centrum Lublina. Umów wizytę, zadzwoń do nas",
  keywords: ["piercing Chełm", "tatuaż Chełm", "salon tatuażu Chełm"],
  alternates: { canonical: "/piercing-chelm" },
  openGraph: {
    title: "Piercing Chełm - studio w Lublinie | Łza Tattoo",
    description:
      "Piercing dla klientów z Chełma - indywidualne podejście i jednorazowy sprzęt w naszym studiu w centrum Lublina.",
    url: `${SITE_URL}/piercing-chelm`,
    type: "website",
  },
};

const blocks: Block[] = [
  { type: "h2", text: "Zakres usług dla klientów z Chełma" },
  {
    type: "p",
    content: [
      "Wykonujemy piercing płatka i chrząstki ucha, w tym helix i tragus, a także przekłucia nosa, pępka, brwi i języka. Do każdego zabiegu podchodzimy indywidualnie - bierzemy pod uwagę budowę ucha, kształt twarzy i to, jak biżuteria będzie się układać na co dzień, a nie tylko na zdjęciu tuż po zabiegu.",
    ],
  },
  { type: "h2", text: "Sterylność przede wszystkim" },
  {
    type: "p",
    content: [
      "Pracujemy wyłącznie na jednorazowym sprzęcie, w warunkach porównywalnych z gabinetem medycznym. Po zabiegu dokładnie tłumaczymy, jak dbać o świeże przekłucie - dodatkowo możesz zajrzeć do naszych artykułów o ",
      postInline("gojenie-piercingu-pepka", "gojeniu piercingu pępka"),
      " i ",
      postInline("pielegnacja-piercingu-ucho", "pielęgnacji piercingu w uchu"),
      ", żeby wiedzieć, czego się spodziewać jeszcze przed przyjazdem z Chełma.",
    ],
  },
  { type: "h2", text: "Dla kogo to dobry wybór?" },
  {
    type: "p",
    content: [
      "Zarówno dla osób robiących pierwszy piercing w życiu, jak i tych, które wracają do nas po kolejne przekłucie. Klienci z Chełma często pytają też o tatuaż Chełm i salon tatuażu Chełm - dobra wiadomość jest taka, że nasze ",
      { text: "studio tatuażu", href: "/tatuaz-lublin" },
      " w Lublinie działa pod tym samym adresem, więc jeden wyjazd wystarczy na obie usługi.",
    ],
  },
  { type: "h2", text: "Umów wizytę" },
  {
    type: "p",
    content: [
      "Rezerwację najszybciej zrobisz telefonicznie pod numerem 733 625 594 lub przez formularz na stronie. Studio znajdziesz przy ul. Prezydenta Gabriela Narutowicza 22 w centrum Lublina, czynne od poniedziałku do piątku w godz. 9:00-17:00 oraz w soboty 9:00-15:00.",
    ],
  },
  { type: "h2", text: "Ile trzeba czekać na efekt końcowy?" },
  {
    type: "p",
    content: [
      "Cierpliwość to część procesu - płatek ucha goi się zwykle 6-8 tygodni, chrząstka potrafi wymagać nawet kilku miesięcy, a nos czy pępek zwykle od 2 do 4 miesięcy. Klientom z Chełma, którzy nie mogą wpaść do nas na kontrolę równie łatwo jak mieszkańcy Lublina, tłumaczymy dokładnie, na jakie objawy zwrócić uwagę w domu i kiedy warto się zaniepokoić, a kiedy to normalny etap gojenia.",
    ],
  },
  { type: "h2", text: "Piercing dla niepełnoletnich" },
  {
    type: "p",
    content: [
      "Osoby pełnoletnie przyjmujemy bez dodatkowych formalności. Jeśli o piercing pyta osoba niepełnoletnia z Chełma, potrzebna jest pisemna zgoda rodzica lub opiekuna, najlepiej obecnego osobiście podczas wizyty - to standard, którego pilnujemy niezależnie od tego, skąd przyjeżdża klient.",
    ],
  },
  { type: "h2", text: "Jak się przygotować przed wyjazdem z Chełma?" },
  {
    type: "p",
    content: [
      "Zanim wyruszysz w drogę, zjedz coś konkretnego i postaraj się wyspać - zabieg na czczo i po nieprzespanej nocy bywa po prostu mniej przyjemny. Warto też unikać alkoholu dzień wcześniej, bo utrudnia gojenie. Jeśli masz wątpliwości co do wyboru rodzaju piercingu, zadzwoń do nas wcześniej - chętnie doradzimy jeszcze przed przyjazdem, żeby wizyta w Lublinie była jak najbardziej efektywna.",
    ],
  },
];

export default function PiercingChelmPage() {
  return (
    <PageShell
      title={TITLE}
      lead="Jeśli wpisujesz w wyszukiwarkę piercing Chełm, prawdopodobnie zależy Ci na czymś więcej niż szybkim przekłuciu w pierwszym lepszym miejscu. W Łza Tattoo & Piercing w Lublinie - od Chełma to około godziny drogi - każdy zabieg poprzedzamy rozmową o Twoich oczekiwaniach, a dopiero potem dobieramy miejsce przekłucia i biżuterię."
    >
      <ContentBlocks blocks={blocks} />

      <h2 className="mt-12 text-2xl uppercase tracking-wide md:text-3xl">
        Umów wizytę z Chełma
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
            name: "Piercing Chełm",
            serviceType: "Piercing",
            areaServed: "Chełm",
            provider: { "@id": `${SITE_URL}/#studio` },
            url: `${SITE_URL}/piercing-chelm`,
          },
        ]}
      />
    </PageShell>
  );
}
