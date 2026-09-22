import type { Metadata } from "next";
import Link from "next/link";
import ContentBlocks from "../components/ContentBlocks";
import ContactCta from "../components/ContactCta";
import PageShell from "../components/PageShell";
import JsonLd, { SITE_URL, studioSchema } from "../components/JsonLd";
import { postInline } from "../lib/blog";
import type { Block } from "../lib/blog/types";

export const revalidate = 3600;

const TITLE = "Piercing Świdnik - kolczykowanie w profesjonalnym studiu tuż za rogiem";

export const metadata: Metadata = {
  title: "Piercing Świdnik - studio piercingu | Łza Tattoo",
  description:
    "Piercing dla mieszkańców Świdnika w sterylnym studiu w centrum Lublina. Jednorazowy sprzęt i indywidualne podejście. Umów wizytę już dziś!",
  keywords: [
    "piercing Świdnik",
    "tatuaż Świdnik",
    "studio tatuażu Świdnik",
    "salon tatuażu koło Świdnika",
  ],
  alternates: { canonical: "/piercing-swidnik" },
  openGraph: {
    title: "Piercing Świdnik - studio piercingu | Łza Tattoo",
    description:
      "Piercing dla mieszkańców Świdnika w sterylnym studiu w centrum Lublina. Jednorazowy sprzęt i indywidualne podejście.",
    url: `${SITE_URL}/piercing-swidnik`,
    type: "website",
  },
};

const blocks: Block[] = [
  { type: "h2", text: "Jaki piercing wykonamy mieszkańcom Świdnika?" },
  {
    type: "p",
    content: [
      "W naszej ofercie znajdziesz przekłucie płatka i chrząstki ucha (w tym helix i tragus), piercing nosa, pępka, brwi oraz języka. Każdy zabieg poprzedzamy krótką rozmową - dobieramy rodzaj biżuterii i miejsce przekłucia indywidualnie, tak żeby efekt był nie tylko ładny, ale też wygodny na co dzień.",
    ],
  },
  { type: "h2", text: "Dlaczego warto przyjechać ze Świdnika akurat do nas?" },
  {
    type: "p",
    content: [
      "Pracujemy w pełni sterylnych warunkach, na jednorazowym sprzęcie, a każde przekłucie wykonuje osoba z realnym doświadczeniem, a nie ktoś „przy okazji” innych zabiegów. Dla wielu klientów ze Świdnika to pierwszy piercing w życiu - dlatego szczególnie dużo czasu poświęcamy na wyjaśnienie, jak wygląda gojenie i pielęgnacja, zanim jeszcze usiądziesz na fotelu.",
    ],
  },
  { type: "h2", text: "Jak wygląda wizyta krok po kroku?" },
  {
    type: "p",
    content: [
      "Rezerwujesz termin telefonicznie lub przez formularz, na miejscu omawiamy oczekiwania i lokalizację przekłucia, dobieramy biżuterię, a na końcu zabiegu otrzymujesz jasne instrukcje pielęgnacyjne. Zasady gojenia możesz sobie odświeżyć też w naszych wpisach o ",
      postInline("pielegnacja-piercingu-ucho", "pielęgnacji piercingu w uchu"),
      " i ",
      postInline("gojenie-piercingu-pepka", "gojeniu piercingu pępka"),
      ".",
    ],
  },
  { type: "h2", text: "A może przy okazji tatuaż?" },
  {
    type: "p",
    content: [
      "Skoro już wybierasz się do Lublina, warto wiedzieć, że pod tym samym adresem działa nasze ",
      { text: "studio tatuażu", href: "/tatuaz-lublin" },
      " - dla klientów szukających frazy tatuaż Świdnik czy studio tatuażu Świdnik to naturalne rozszerzenie oferty. Realizujemy projekty minimalistyczne, kolorowe, czarno-białe, japońskie i geometryczne, a także poprawki i cover-upy.",
    ],
  },
  {
    type: "p",
    content: [
      "Jeśli szukasz hasła salon tatuażu koło Świdnika, który łączy piercing i tatuaż w jednym miejscu - umów się z nami. Termin ustalisz pod numerem 733 625 594 lub przez formularz rezerwacji. Pracujemy od poniedziałku do piątku w godz. 9:00-17:00 oraz w soboty 9:00-15:00, przy ul. Prezydenta Gabriela Narutowicza 22 w centrum Lublina.",
    ],
  },
  { type: "h2", text: "Ile trwa gojenie?" },
  {
    type: "p",
    content: [
      "To pytanie, które zadaje nam niemal każdy klient ze Świdnika już na pierwszej wizycie. Orientacyjnie płatek ucha goi się od 6 do 8 tygodni, chrząstka - nawet kilka miesięcy, a pępek czy nos potrzebują zwykle od 2 do 4 miesięcy cierpliwości. Dokładny czas zawsze zależy od miejsca przekłucia i indywidualnych predyspozycji skóry, dlatego każdemu klientowi tłumaczymy to osobno, dopasowując zalecenia do konkretnego przypadku.",
    ],
  },
  { type: "h2", text: "Kto może zrobić u nas piercing?" },
  {
    type: "p",
    content: [
      "Osoby pełnoletnie umawiamy bez dodatkowych formalności. Młodsi klienci ze Świdnika i okolic mogą wykonać piercing wyłącznie za pisemną zgodą rodzica lub opiekuna prawnego, który najlepiej niech pojawi się z nastolatkiem osobiście - tak, żeby cała procedura była w pełni bezpieczna i przejrzysta dla obu stron.",
    ],
  },
];

export default function PiercingSwidnikPage() {
  return (
    <PageShell
      title={TITLE}
      lead="Szukasz miejsca, gdzie piercing Świdnik wykona ktoś, komu naprawdę można zaufać? Nasze studio Łza Tattoo & Piercing działa w samym centrum Lublina, czyli dosłownie kilkanaście minut jazdy od Świdnika - bliżej niż niejedno „lokalne” studio w większym mieście. Mieszkańcy Świdnika coraz chętniej przyjeżdżają właśnie do nas, bo liczy się dla nich to samo, co dla wszystkich naszych klientów: sterylne warunki, jednorazowy sprzęt i osoba, która naprawdę zna się na rzeczy."
    >
      <ContentBlocks blocks={blocks} />

      <h2 className="mt-12 text-2xl uppercase tracking-wide md:text-3xl">
        Umów wizytę ze Świdnika
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
            name: "Piercing Świdnik",
            serviceType: "Piercing",
            areaServed: "Świdnik",
            provider: { "@id": `${SITE_URL}/#studio` },
            url: `${SITE_URL}/piercing-swidnik`,
          },
        ]}
      />
    </PageShell>
  );
}
