import type { Metadata } from "next";
import Link from "next/link";
import ContentBlocks from "../components/ContentBlocks";
import BooksyCta from "../components/BooksyCta";
import PageShell from "../components/PageShell";
import JsonLd, {
  SITE_URL,
  faqSchema,
  studioSchema,
} from "../components/JsonLd";
import { postInline } from "../lib/blog";
import { BOOKSY_SHORT_LABEL, BOOKSY_URL } from "../lib/booksy";
import type { Block } from "../lib/blog/types";

// Odświeżanie co godzinę, tak jak na pozostałych podstronach ofertowych -
// linki do zaplanowanych wpisów bloga pojawiają się wtedy same.
export const revalidate = 3600;

const TITLE = "Rezerwacja piercingu online - umów termin przez Booksy";

export const metadata: Metadata = {
  title: "Rezerwacja piercingu online - Booksy | ŁZA TATTOO & PIERCING Lublin",
  description:
    "Zarezerwuj termin na piercing w Lublinie online przez Booksy. Wolne godziny i aktualny cennik przekłuć widzisz od razu w kalendarzu studia ŁZA TATTOO & PIERCING.",
  keywords: [
    "rezerwacja piercing lublin",
    "piercing lublin booksy",
    "umów piercing online lublin",
    "cennik piercingu lublin",
    "kolczykowanie lublin rezerwacja",
    "przekłuwanie uszu lublin termin",
  ],
  alternates: { canonical: "/rezerwacja-piercing" },
  openGraph: {
    title: "Rezerwacja piercingu online - Booksy | ŁZA TATTOO & PIERCING",
    description:
      "Zarezerwuj termin na piercing w Lublinie online przez Booksy - wolne godziny i cennik przekłuć widzisz od razu w kalendarzu.",
    url: `${SITE_URL}/rezerwacja-piercing`,
    type: "website",
  },
};

const faqItems = [
  {
    q: "Gdzie znajdę cennik piercingu?",
    a: `Cennik piercingu prowadzimy w Booksy (${BOOKSY_SHORT_LABEL}) - przy każdej usłudze widzisz aktualną cenę oraz czas trwania zabiegu, więc nic nie zaskoczy Cię na miejscu. Koszt zależy od rodzaju przekłucia i wybranej biżuterii.`,
  },
  {
    q: "Czy tatuaż też rezerwuję przez Booksy?",
    a: "Nie - Booksy obsługuje u nas rezerwacje piercingu. Tatuaż zaczynamy od konsultacji: napisz przez formularz kontaktowy, zadzwoń lub wyślij wiadomość na Instagramie, opisz pomysł i dołącz inspiracje, a wspólnie ustalimy wycenę i termin.",
  },
  {
    q: "Czy jest stały cennik tatuaży?",
    a: "Nie ma stałego cennika tatuaży - każdy wzór wyceniamy indywidualnie. Na cenę wpływa wielkość projektu, kolorystyka, stopień skomplikowania i szczegółowości wzoru oraz miejsce na ciele, w którym ma być wykonany.",
  },
  {
    q: "Co jeśli w kalendarzu nie ma pasującego terminu?",
    a: "Zadzwoń pod numer 733 625 594 albo napisz do nas - bywa, że zwalniają się godziny, których nie widać jeszcze w kalendarzu, a w uzasadnionych przypadkach umawiamy się także poza standardowymi godzinami pracy.",
  },
  {
    q: "Czy mogę odwołać albo przenieść rezerwację?",
    a: "Tak. Termin zmienisz lub odwołasz w Booksy ze swojego konta, a jeśli do wizyty zostało niewiele czasu - zadzwoń do nas, żebyśmy mogli zwolnić tę godzinę dla kogoś innego.",
  },
  {
    q: "Czy osoba niepełnoletnia może zarezerwować piercing?",
    a: "Osoby pełnoletnie umawiamy bez dodatkowych formalności. Młodsi klienci mogą wykonać piercing wyłącznie za pisemną zgodą rodzica lub opiekuna prawnego, który najlepiej niech pojawi się na wizycie osobiście.",
  },
];

const blocks: Block[] = [
  { type: "h2", text: "Rezerwacja piercingu krok po kroku" },
  {
    type: "ul",
    items: [
      `Otwórz nasz profil w Booksy przyciskiem powyżej albo wpisz adres ${BOOKSY_SHORT_LABEL} w przeglądarce.`,
      "Wybierz rodzaj przekłucia z listy usług - obok każdej pozycji widzisz cenę i czas trwania zabiegu.",
      "Zaznacz wolny termin w kalendarzu, który pokazuje aktualną dostępność.",
      "Potwierdź rezerwację danymi kontaktowymi - przypomnienie o wizycie dostaniesz automatycznie.",
      "Przyjdź do studia przy ul. Prezydenta Gabriela Narutowicza 22 w Lublinie kilka minut przed wyznaczoną godziną.",
    ],
  },
  {
    type: "p",
    content: [
      "Rezerwacja online działa całą dobę, więc nie musisz czekać na godziny otwarcia studia ani dzwonić w przerwie między zabiegami. Jeśli wolisz jednak ustalić termin w rozmowie - zadzwoń pod numer 733 625 594, chętnie doradzimy przy wyborze przekłucia.",
    ],
  },
  { type: "h2", text: "Cennik piercingu" },
  {
    type: "p",
    content: [
      `Aktualny cennik piercingu znajdziesz przy poszczególnych usługach w Booksy (${BOOKSY_SHORT_LABEL}). Trzymamy go w jednym miejscu razem z kalendarzem, żeby cena widoczna przy rezerwacji zawsze była tą obowiązującą. Koszt zależy przede wszystkim od rodzaju przekłucia i wybranej biżuterii - jeśli masz wątpliwości, co wybrać, napisz do nas przed rezerwacją.`,
    ],
  },
  { type: "h2", text: "A co z wyceną tatuażu?" },
  {
    type: "p",
    content: [
      "Tatuaży nie da się uczciwie zamknąć w jednym cenniku - to zawsze wycena indywidualna. Na cenę wpływa wielkość wzoru, kolorystyka, stopień skomplikowania i szczegółowości projektu oraz miejsce na ciele, w którym ma zostać wykonany. Dlatego zamiast tabelki proponujemy konsultację: opisz pomysł, dołącz inspiracje, a my przedstawimy widełki i zaproponujemy termin sesji.",
    ],
  },
  {
    type: "p",
    content: [
      "Szczegóły oferty opisaliśmy na stronie ",
      { text: "tatuaż Lublin", href: "/tatuaz-lublin" },
      ", a sam projekt omówimy po Twoim zgłoszeniu przez ",
      { text: "formularz kontaktowy", href: "/#booking" },
      ".",
    ],
  },
  { type: "h2", text: "Zanim przyjdziesz na piercing" },
  {
    type: "ul",
    items: [
      "Zjedz coś przed wizytą i bądź wypoczęta/wypoczęty - łatwiej wtedy znieść samo przekłucie.",
      "Nie przychodź po alkoholu ani po lekach rozrzedzających krew.",
      "Ubierz się tak, żeby dostęp do przekłuwanego miejsca był swobodny - to szczególnie ważne przy pępku.",
      "Weź dokument tożsamości, a osoby niepełnoletnie - pisemną zgodę rodzica lub opiekuna oraz jego obecność na wizycie.",
      "Zaplanuj kilka minut na rozmowę o umiejscowieniu i biżuterii przed zabiegiem.",
    ],
  },
  {
    type: "p",
    content: [
      "O tym, jak zadbać o świeże przekłucie, piszemy szerzej we wpisach „",
      postInline("pielegnacja-piercingu-ucho", "Jak pielęgnować piercing w uchu"),
      "” oraz „",
      postInline("gojenie-piercingu-pepka", "Ile goi się piercing pępka"),
      "”. Jeśli zastanawiasz się nad samym zabiegiem, zajrzyj też do wpisu „",
      postInline("czy-piercing-boli", "Czy piercing boli"),
      "”.",
    ],
  },
  {
    type: "faq",
    heading: "Najczęstsze pytania o rezerwację i cennik",
    items: faqItems,
  },
];

export default function RezerwacjaPiercinguPage() {
  return (
    <PageShell
      title={TITLE}
      lead="Terminy na piercing w studiu ŁZA TATTOO & PIERCING prowadzimy w Booksy. W kalendarzu na bieżąco widzisz wolne godziny oraz aktualny cennik poszczególnych przekłuć, więc rezerwację zrobisz samodzielnie w kilka chwil - o każdej porze dnia i nocy, bez czekania na odpowiedź."
    >
      <BooksyCta showOfferLink={false} />

      <ContentBlocks blocks={blocks} />

      <section className="mt-14 border border-black/10 bg-[#f4f1ed] px-6 py-8 md:px-8">
        <div className="text-lg leading-8 text-black/85">
          <p>
            Masz pytanie, na które nie ma tu odpowiedzi? Napisz albo zadzwoń -
            pomożemy dobrać rodzaj przekłucia i termin. Pracujemy od
            poniedziałku do piątku w godzinach 9:00-17:00 oraz w soboty
            9:00-15:00, przy ul. Prezydenta Gabriela Narutowicza 22 w centrum
            Lublina.
          </p>
          <p className="mt-4">
            Zobacz też naszą{" "}
            <Link
              href="/piercing-lublin"
              className="underline underline-offset-4 hover:opacity-60"
            >
              pełną ofertę piercingu
            </Link>
            .
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={BOOKSY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-black bg-[#252b3a] px-6 py-3 text-[11px] uppercase tracking-[0.24em] text-white transition hover:bg-black"
          >
            Booksy - wolne terminy
          </a>
          <a
            href="tel:+48733625594"
            className="border border-black/10 bg-white px-6 py-3 text-[11px] uppercase tracking-[0.24em] shadow-sm transition hover:-translate-y-0.5"
          >
            733 625 594
          </a>
          <Link
            href="/#booking"
            className="border border-black/10 bg-white px-6 py-3 text-[11px] uppercase tracking-[0.24em] shadow-sm transition hover:-translate-y-0.5"
          >
            Formularz kontaktowy
          </Link>
        </div>
      </section>

      <JsonLd
        data={[
          studioSchema,
          {
            "@type": "Service",
            name: "Rezerwacja piercingu online - Lublin",
            serviceType: "Piercing",
            areaServed: "Lublin",
            provider: { "@id": `${SITE_URL}/#studio` },
            url: `${SITE_URL}/rezerwacja-piercing`,
            potentialAction: {
              "@type": "ReserveAction",
              name: "Rezerwacja piercingu w Booksy",
              target: {
                "@type": "EntryPoint",
                urlTemplate: BOOKSY_URL,
                inLanguage: "pl-PL",
                actionPlatform: [
                  "https://schema.org/DesktopWebPlatform",
                  "https://schema.org/MobileWebPlatform",
                ],
              },
              result: { "@type": "Reservation", name: "Termin na piercing" },
            },
          },
          faqSchema(faqItems),
        ]}
      />
    </PageShell>
  );
}
