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

const TITLE = "Tatuaż Lublin - studio, w którym Twoja wizja zyskuje formę";

export const metadata: Metadata = {
  title: "Tatuaż Lublin - Studio Tatuażu ŁZA TATTOO & PIERCING",
  description:
    "Studio tatuażu w Lublinie z indywidualnym podejściem do projektu. Zróżnicowany zespół artystów, sterylne warunki. Umów konsultację już dziś!",
  keywords: [
    "tatuaż lublin",
    "salon tatuażu lublin",
    "studio tatuażu lublin",
    "tatuażysta lublin",
    "tatuażyści lublin",
    "tatuaż minimalistyczny lublin",
    "tatuaż kolorowy lublin",
    "tatuaż czarno-biały lublin",
    "tatuaż japoński lublin",
    "tatuaż realistyczny lublin",
    "cover up tatuaż lublin",
    "poprawki tatuażu lublin",
  ],
  alternates: { canonical: "/tatuaz-lublin" },
  openGraph: {
    title: "Tatuaż Lublin - Studio Tatuażu ŁZA TATTOO & PIERCING",
    description:
      "Studio tatuażu w Lublinie z indywidualnym podejściem do projektu. Zróżnicowany zespół artystów, sterylne warunki.",
    url: `${SITE_URL}/tatuaz-lublin`,
    type: "website",
  },
};

const blocks: Block[] = [
  {
    type: "p",
    content: [
      "Nasze studio mieści się w centrum Lublina, przy ul. Prezydenta Gabriela Narutowicza 22. Współpracujemy z zespołem tatuażystów o różnych stylach i doświadczeniu, dzięki czemu niezależnie od tego, czy marzysz o pierwszym małym tatuażu, czy dużym, wielosesyjnym projekcie - znajdziesz u nas kogoś, kto zrozumie Twoją wizję.",
    ],
  },
  { type: "h2", text: "Jakie style tatuażu wykonamy w naszym studiu?" },
  {
    type: "p",
    content: [
      "Nasz zespół tatuażystów w Lublinie specjalizuje się w różnych stylach, dzięki czemu każdy klient może znaleźć artystę odpowiadającego jego estetyce:",
    ],
  },
  {
    type: "ul",
    items: [
      "Tatuaż minimalistyczny - delikatne linie, subtelne napisy i drobne wzory",
      "Tatuaż kolorowy - żywe, wyraziste kompozycje",
      "Tatuaż czarno-biały - klasyka, która nigdy nie wychodzi z mody",
      "Tatuaż japoński i geometryczny - precyzyjne, przemyślane kompozycje",
      "Tatuaż realistyczny - portrety, motywy przyrody i inne realistyczne wzory",
      "Cover-up - przykrycie starego tatuażu nowym projektem",
      "Poprawki tatuażu - odświeżenie koloru lub konturu istniejącego wzoru",
    ],
  },
  {
    type: "p",
    content: [
      "Nie znalazłeś swojego stylu na liście? Napisz do nas i opisz swój pomysł - dobierzemy artystę, który najlepiej odpowiada Twojej wizji.",
    ],
  },
  { type: "h2", text: "Dlaczego warto wybrać nasze studio tatuażu w Lublinie?" },
  {
    type: "ul",
    items: [
      "Indywidualne podejście do każdego projektu - żadnych kopii z internetu bez konsultacji",
      "Zróżnicowany zespół artystów, co daje Ci wybór stylu i podejścia",
      "Sterylne warunki pracy i jednorazowy sprzęt",
      "Lokalizacja w centrum Lublina - łatwy dojazd",
      "Elastyczne godziny: poniedziałek-piątek 9:00-17:00, sobota 9:00-15:00, a w wyjątkowych sytuacjach umawiamy się także poza tymi godzinami",
    ],
  },
  { type: "h2", text: "Jak wygląda proces realizacji tatuażu?" },
  {
    type: "p",
    content: [
      "Wszystko zaczyna się od rozmowy - opowiedz nam o swoim pomyśle, miejscu na ciele, które Cię interesuje, oraz stylu, jaki najbardziej do Ciebie przemawia. Na tej podstawie dobieramy artystę i umawiamy konsultację, podczas której omawiamy szczegóły projektu, rozmiar i wycenę. Po akceptacji projektu ustalamy termin sesji.",
    ],
  },
  {
    type: "image",
    src: "/images/projekt-tatuazu.webp",
    alt: "Kolorowy projekt tatuażu przygotowany przed sesją w studiu tatuażu ŁZA TATTOO & PIERCING w Lublinie",
    width: 382,
    height: 510,
    caption:
      "Projekt przygotowany przed sesją - zanim usiądziesz w fotelu, wzór jest już dopracowany i zaakceptowany.",
  },
  {
    type: "p",
    content: [
      "Po zabiegu przekazujemy Ci pełne instrukcje pielęgnacji świeżego tatuażu - prawidłowe gojenie jest równie ważne jak samo wykonanie wzoru. Więcej praktycznych wskazówek znajdziesz w naszych wpisach: „",
      postInline(
        "pielegnacja-tatuazu",
        "Jak dbać o świeży tatuaż? Pielęgnacja krok po kroku"
      ),
      "” oraz „",
      postInline(
        "gojenie-tatuazu",
        "Ile goi się tatuaż? Czas gojenia na różnych częściach ciała"
      ),
      "”.",
    ],
  },
];

export default function TatuazLublinPage() {
  return (
    <PageShell
      title={TITLE}
      lead="Szukasz studia tatuażu w Lublinie, które podejdzie do Twojego projektu indywidualnie, a nie z gotowego katalogu wzorów? ŁZA TATTOO & PIERCING to miejsce, w którym pasja do sztuki tatuażu spotyka się z profesjonalizmem i dbałością o każdy detal - od pierwszej konsultacji po ostatnią kreskę."
    >
      <ContentBlocks blocks={blocks} />

      <h2 className="mt-12 text-2xl uppercase tracking-wide md:text-3xl">
        Cennik i rezerwacja wizyty
      </h2>

      <ContactCta>
        <p>
          Wycena tatuażu zależy od rozmiaru, techniki i czasu pracy artysty -
          dokładne widełki cenowe ustalamy podczas konsultacji. Aby umówić
          konsultację lub sesję, skorzystaj z formularza kontaktowego, zadzwoń
          lub napisz do nas e-mail.
        </p>
        <p className="mt-4">
          Odwiedź nas przy ul. Prezydenta Gabriela Narutowicza 22 w Lublinie i
          przekonaj się, że dobry tatuaż to efekt współpracy, zaufania i czasu
          poświęconego na dopracowanie każdego szczegółu.
        </p>
      </ContactCta>

      <JsonLd
        data={[
          studioSchema,
          {
            "@type": "Service",
            name: "Tatuaż Lublin",
            serviceType: "Tatuaż",
            areaServed: "Lublin",
            provider: { "@id": `${SITE_URL}/#studio` },
            url: `${SITE_URL}/tatuaz-lublin`,
          },
        ]}
      />
    </PageShell>
  );
}
