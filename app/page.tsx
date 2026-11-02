import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import LocationsMap from "./components/LocationsMap";
import ArtistCard from "./components/ArtistCard";
import ContactForm from "./components/ContactForm";
import ReviewsBlock, { GOOGLE_MAPS_URL } from "./components/ReviewsBlock";
import JsonLd, { faqSchema, studioSchema } from "./components/JsonLd";
import { ARTISTS } from "./lib/artists";
import { BOOKSY_SHORT_LABEL, BOOKSY_URL } from "./lib/booksy";
import { SITE_URL } from "./lib/site";

// Canonical ustawiamy tutaj, a nie w layout.tsx - inaczej dziedziczyłaby go
// każda podstrona bez własnego canonical (np. strona 404).
export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: {
    title: "Tatuaż i piercing Lublin - Studio ŁZA TATTOO & PIERCING",
    description:
      "Studio tatuażu i piercingu w Lublinie. Indywidualne projekty, sterylne warunki i doświadczony zespół artystów.",
    url: `${SITE_URL}/`,
    siteName: "ŁZA TATTOO & PIERCING",
    locale: "pl_PL",
    type: "website",
  },
};

const homeFaq = [
  {
    q: "Ile kosztuje tatuaż w Lublinie?",
    a: "Nie mamy stałego cennika tatuaży - każdy wzór wyceniamy indywidualnie. Na cenę wpływa wielkość projektu, kolorystyka, stopień skomplikowania i szczegółowości wzoru oraz miejsce na ciele, w którym ma być wykonany. Dokładną wycenę ustalamy na konsultacji - napisz do nas przez formularz albo zadzwoń, a przedstawimy widełki dla Twojego pomysłu.",
  },
  {
    q: "Jak zarezerwować termin na piercing?",
    a: `Terminy na piercing prowadzimy w Booksy (${BOOKSY_SHORT_LABEL}) - w kalendarzu widzisz wolne godziny i od razu rezerwujesz wizytę, o dowolnej porze. Cały proces opisaliśmy na stronie Rezerwacja piercingu. Możesz też po prostu zadzwonić pod numer 733 625 594.`,
  },
  {
    q: "Ile kosztuje piercing?",
    a: "Przekłucie płatka ucha kosztuje 120 zł, helix i nostril 140 zł, tragus 150 zł, a przekłucie pępka, septum i języka 180 zł. Pełny cennik wszystkich przekłuć znajdziesz na stronie Cennik oraz przy usługach w Booksy - cena zależy od rodzaju przekłucia.",
  },
  {
    q: "Czy trzeba się umawiać wcześniej?",
    a: "Tak, pracujemy na umówione wizyty. Dzięki temu każdy klient ma zarezerwowany czas bez pośpiechu. Pracujemy od poniedziałku do piątku w godzinach 9:00-17:00 oraz w soboty 9:00-15:00, a w uzasadnionych przypadkach umawiamy się także poza tymi godzinami.",
  },
  {
    q: "Czy studio pracuje w sterylnych warunkach?",
    a: "Tak. Do każdego zabiegu - zarówno tatuażu, jak i piercingu - używamy jednorazowego, sterylnego sprzętu, a stanowisko przygotowujemy zgodnie z zasadami higieny.",
  },
  {
    q: "Jaki piercing wykonujecie?",
    a: "Wykonujemy przekłuwanie uszu (płatek i chrząstka - helix, tragus i inne warianty), nosa, pępka, brwi i języka, a także inne przekłucia dobierane indywidualnie podczas rozmowy.",
  },
  {
    q: "Czy robicie cover-up i poprawki starych tatuaży?",
    a: "Tak, zajmujemy się zarówno przykryciem starego tatuażu nowym projektem, jak i odświeżeniem koloru czy konturu istniejącego wzoru. Napisz do nas i dołącz zdjęcie - ocenimy, co da się zrobić.",
  },
  {
    q: "Jak długo goi się tatuaż i piercing?",
    a: "Powierzchowne gojenie tatuażu trwa zwykle 2-3 tygodnie, a pełna regeneracja skóry nawet do 2 miesięcy. Piercing płatka ucha goi się 6-8 tygodni, chrząstki i pępka znacznie dłużej. Szczegóły opisujemy na blogu.",
  },
  {
    q: "Gdzie znajduje się studio?",
    a: "Przy ul. Prezydenta Gabriela Narutowicza 22 w Lublinie (20-004), w centrum miasta - z łatwym dojazdem i parkingiem w okolicy.",
  },
];

const studioGallery = [
  {
    src: "/images/studio1.jpg",
    alt: "Wejście do studia Łza Tattoo & Piercing przy ul. Narutowicza 22 w Lublinie",
  },
  {
    src: "/images/studio2.jpg",
    alt: "Stanowisko do tatuażu i piercingu z fotelem zabiegowym w studiu Łza Tattoo w Lublinie",
  },
  {
    src: "/images/studio3.jpg",
    alt: "Recepcja i poczekalnia z czerwoną sofą w studiu tatuażu Łza Tattoo w Lublinie",
  },
  {
    src: "/images/studio4.jpg",
    alt: "Kolorowe stanowisko do tatuowania z muralem w studiu Łza Tattoo Lublin",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#e8e5e1] text-black font-serif">
      <style>{`html { scroll-behavior: smooth; }`}</style>

      <SiteHeader />

      <main>
        <section
          id="home"
          className="mx-auto max-w-6xl px-4 pb-8 pt-4 lg:px-8 lg:pb-12 lg:pt-6"
        >
          <div className="border border-black/10 bg-[#efebe7] px-6 py-6 shadow-sm md:px-10 md:py-8">
            <h1 className="mb-4 text-center md:mb-6">
              <span className="block text-4xl uppercase tracking-wide md:text-7xl">
                ŁZA TATTOO&PIERCING
              </span>
              <span className="mt-3 block text-lg uppercase tracking-[0.24em] text-black/60 md:mt-4 md:text-2xl">
                Studio tatuażu i piercingu w Lublinie
              </span>
            </h1>

            <div className="relative mx-auto h-[320px] max-w-5xl overflow-hidden border border-black/10 bg-white shadow-sm md:h-[560px]">
              <Image
                src="/images/studio-main.jpg"
                alt="Wnętrze studia tatuażu i piercingu Łza Tattoo w Lublinie - recepcja z logo studia"
                fill
                loading="eager"
                fetchPriority="high"
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-cover"
              />
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-3 md:mt-5">
              <a
                href="#artists"
                className="min-w-[170px] border border-black/10 bg-white px-6 py-3 text-center text-[11px] uppercase tracking-[0.24em] shadow-sm"
              >
                Nasi artyści
              </a>
              <a
                href="#contact"
                className="min-w-[170px] border border-black/10 bg-[#d7d2cc] px-6 py-3 text-center text-[11px] uppercase tracking-[0.24em] shadow-sm"
              >
                Kontakt
              </a>
            </div>

            <p className="mx-auto mt-6 max-w-[320px] px-3 text-center text-[18px] leading-[1.45] text-slate-700 sm:max-w-2xl sm:text-2xl md:max-w-5xl md:text-[34px]">
              Indywidualne podejście, najwyższy poziom profesjonalizmu i efekt,
              do którego będziesz wracać z dumą.
            </p>
          </div>
        </section>

        <section
          id="studio"
          className="mx-auto max-w-6xl px-4 pb-10 lg:px-8 lg:pb-14"
        >
          <div className="border border-black/5 bg-[#f4f1ed] px-6 py-6 shadow-sm md:px-8 md:py-8">
            <div className="grid items-stretch gap-10 md:grid-cols-2">
              <div className="flex h-full flex-col justify-center rounded-[40px] bg-white/90 px-10 py-10">
                <h2 className="mb-6 text-5xl md:text-7xl">
                  O nas
                  <span className="mt-3 block text-base uppercase tracking-[0.2em] text-black/55 md:text-xl">
                    Salon tatuażu i piercingu w centrum Lublina
                  </span>
                </h2>
                Łza Tattoo&amp;Piercing to studio, w którym pasja do sztuki
                spotyka się z profesjonalizmem i dbałością o każdy detal.
                Oferujemy tatuaże oraz piercing wykonywane w sterylnych
                warunkach, z indywidualnym podejściem do każdego klienta. Jeśli
                szukasz miejsca, gdzie Twoja wizja zostanie zamieniona w coś
                wyjątkowego — jesteś w dobrych rękach.
                <div className="mt-8 flex border border-black">
                  <a
                    href="https://www.instagram.com/lezkatattoo?igsh=MWtqdGc0MndqN2ZtcQ=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 border-r border-black py-4 text-center font-bold uppercase transition hover:bg-black hover:text-white"
                  >
                    Instagram
                  </a>

                  <a
                    href="https://www.facebook.com/share/18T3hTypmi/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 py-4 text-center font-bold uppercase transition hover:bg-black hover:text-white"
                  >
                    Facebook
                  </a>
                </div>
              </div>

              <div className="grid h-full grid-cols-2 gap-6">
                {studioGallery.map((photo) => (
                  <div
                    key={photo.src}
                    className="relative aspect-square overflow-hidden bg-white shadow-sm"
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(max-width: 768px) 45vw, 260px"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="oferta"
          className="mx-auto max-w-6xl px-4 pb-10 lg:px-8 lg:pb-14"
        >
          <div className="border border-black/10 bg-[#f4f1ed] px-6 py-6 shadow-sm md:px-8 md:py-8">
            <h2 className="mb-6 text-4xl uppercase md:text-6xl">
              Oferta
              <span className="mt-3 block text-base tracking-[0.2em] text-black/55 md:text-xl">
                Tatuaż i piercing w Lublinie
              </span>
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              <Link
                href="/tatuaz-lublin"
                className="group flex flex-col border border-black/10 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 md:p-8"
              >
                <h3 className="text-2xl uppercase tracking-wide md:text-3xl">
                  Tatuaż Lublin
                </h3>
                <p className="mt-4 flex-1 text-base leading-8 text-black/75">
                  Minimalistyczny, kolorowy, czarno-biały, japoński,
                  geometryczny i realistyczny. Robimy też cover-up i poprawki
                  starych tatuaży. Każdy projekt omawiamy indywidualnie na
                  konsultacji.
                </p>
                <span className="mt-6 text-[11px] uppercase tracking-[0.24em] underline underline-offset-4">
                  Zobacz ofertę tatuażu
                </span>
              </Link>

              <Link
                href="/piercing-lublin"
                className="group flex flex-col border border-black/10 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 md:p-8"
              >
                <h3 className="text-2xl uppercase tracking-wide md:text-3xl">
                  Piercing Lublin
                </h3>
                <p className="mt-4 flex-1 text-base leading-8 text-black/75">
                  Przekłuwanie uszu (płatek i chrząstka - helix, tragus), nosa,
                  pępka, brwi i języka. Sterylne warunki, jednorazowy sprzęt i
                  jasne zasady pielęgnacji po zabiegu.
                </p>
                <span className="mt-6 text-[11px] uppercase tracking-[0.24em] underline underline-offset-4">
                  Zobacz ofertę piercingu
                </span>
              </Link>
            </div>

            <div className="mt-6 border border-black/10 bg-white p-6 shadow-sm md:p-8">
              <h3 className="text-2xl uppercase tracking-wide md:text-3xl">
                Rezerwacja piercingu online
              </h3>
              <p className="mt-4 text-base leading-8 text-black/75">
                Terminy na piercing prowadzimy w Booksy — w kalendarzu widzisz
                wolne godziny i od razu rezerwujesz wizytę. Przekłucie płatka
                ucha kosztuje 120 zł, helix 140 zł, a pępek 180 zł - pełny
                cennik znajdziesz na osobnej stronie. Tatuaże wyceniamy
                indywidualnie, więc tutaj zaczynamy od konsultacji.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={BOOKSY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-black bg-[#252b3a] px-6 py-3 text-[11px] uppercase tracking-[0.24em] text-white transition hover:bg-black"
                >
                  Zarezerwuj w Booksy
                </a>
                <Link
                  href="/cennik"
                  className="border border-black/10 bg-[#f4f1ed] px-6 py-3 text-[11px] uppercase tracking-[0.24em] shadow-sm transition hover:-translate-y-0.5"
                >
                  Cennik
                </Link>
                <Link
                  href="/rezerwacja-piercing"
                  className="border border-black/10 bg-[#f4f1ed] px-6 py-3 text-[11px] uppercase tracking-[0.24em] shadow-sm transition hover:-translate-y-0.5"
                >
                  Jak działa rezerwacja
                </Link>
              </div>

              <p className="mt-5 text-sm leading-7 text-black/55">
                Nasz profil: {BOOKSY_SHORT_LABEL}
              </p>
            </div>

            <Link
              href="/blog"
              className="mt-6 block border border-black/10 bg-white px-6 py-5 text-center text-[11px] uppercase tracking-[0.24em] shadow-sm transition hover:-translate-y-0.5"
            >
              Blog — poradniki o gojeniu i pielęgnacji
            </Link>
          </div>
        </section>

        <section
          id="lokalizacje"
          className="mx-auto max-w-6xl px-4 pb-10 lg:px-8 lg:pb-14"
        >
          <div className="border border-black/10 bg-[#f4f1ed] px-6 py-6 shadow-sm md:px-8 md:py-8">
            <h2 className="mb-6 text-4xl uppercase md:text-6xl">
              Lokalizacje
              <span className="mt-3 block text-base tracking-[0.2em] text-black/55 md:text-xl">
                Studio w Lublinie, dojazd z całego regionu
              </span>
            </h2>
            <p className="mb-6 max-w-3xl text-base leading-8 text-black/75">
              Nasze studio ma jedną stałą lokalizację - w centrum Lublina - a
              klienci regularnie dojeżdżają do nas ze Świdnika, Lubartowa,
              Kraśnika, Chełma i Zamościa. Kliknij miejscowość na mapie lub na
              liście, żeby zobaczyć dojazd i ofertę dopasowaną do Twojej
              okolicy.
            </p>
            <LocationsMap />
          </div>
        </section>

        <section id="artists" className="mx-auto max-w-6xl px-4 pb-16 lg:px-8">
          <div className="border border-black/10 bg-[#f4f1ed] px-6 py-6 shadow-sm md:px-8 md:py-8">
            <h2 className="mb-8 text-4xl uppercase md:text-6xl">
              Artyści
              <span className="mt-3 block text-base tracking-[0.2em] text-black/55 md:text-xl">
                Tatuażyści i piercerzy w Lublinie
              </span>
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              {ARTISTS.map((artist, index) => {
                const isLastOdd =
                  ARTISTS.length % 2 !== 0 && index === ARTISTS.length - 1;
                return (
                  <ArtistCard
                    key={artist.handle}
                    artist={artist}
                    isCentered={isLastOdd}
                  />
                );
              })}
            </div>

            <Link
              href="/artysci"
              className="mt-6 block border border-black/10 bg-white px-6 py-5 text-center text-[11px] uppercase tracking-[0.24em] shadow-sm transition hover:-translate-y-0.5"
            >
              Style i portfolio artystów
            </Link>

            <ReviewsBlock headingLevel="h3" />
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-6xl px-4 pb-16 lg:px-8">
          <div className="border border-black/10 bg-[#f4f1ed] px-6 py-6 shadow-sm md:px-8 md:py-8">
            <h2 className="mb-8 text-4xl uppercase md:text-6xl">
              FAQ
              <span className="mt-3 block text-base tracking-[0.2em] text-black/55 md:text-xl">
                Najczęstsze pytania o tatuaż i piercing w Lublinie
              </span>
            </h2>

            <dl className="divide-y divide-black/10 border-y border-black/10">
              {homeFaq.map((item) => (
                <div key={item.q} className="py-6">
                  <dt className="text-xl leading-8 md:text-2xl">{item.q}</dt>
                  <dd className="mt-3 max-w-3xl text-base leading-8 text-black/75">
                    {item.a}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section
          id="contact"
          className="mx-auto max-w-6xl px-4 pb-16 lg:px-8 lg:pb-20"
        >
          <div className="border border-black/10 bg-white shadow-sm">
            <div className="grid gap-8 px-6 py-6 md:grid-cols-[1fr_1.05fr] md:px-8 md:py-8">
              <div>
                <h2 className="mb-4 text-5xl md:text-7xl">
                  Kontakt
                  <span className="mt-3 block text-base uppercase tracking-[0.2em] text-black/55 md:text-xl">
                    Studio tatuażu i piercingu Lublin
                  </span>
                </h2>
                <div className="space-y-5 text-lg leading-relaxed">
                  <div>
                    <div>Prezydenta Gabriela</div>
                    <div>Narutowicza 22,</div>
                    <div>20–004 Lublin</div>
                  </div>

                  <div>
                    <div>Telefon: 733 625 594</div>
                    <div>E-Mail: lezkatattoo@gmail.com</div>
                  </div>

                  <div className="max-w-md text-base leading-8 text-black/85">
                    Nasze godziny pracy to poniedziałek–piątek w godzinach
                    9:00–17:00 oraz sobota w godzinach 9:00–15:00.
                  </div>

                  <div className="max-w-md text-base leading-8 text-black/75">
                    Jesteśmy jednak elastyczni również poza tymi godzinami i
                    często możemy umówić Cię na sesję lub konsultację również
                    poza tymi godzinami. Skontaktuj się z nami, a znajdziemy dla
                    Ciebie odpowiedni termin.
                    <div className="mt-6 space-y-2 text-lg">
                      <p>
                        Instagram:{" "}
                        <a
                          href="https://www.instagram.com/lezkatattoo?igsh=MWtqdGc0MndqN2ZtcQ=="
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline hover:opacity-70"
                        >
                          lezkatattoo
                        </a>
                      </p>

                      <p>
                        Facebook:{" "}
                        <a
                          href="https://www.facebook.com/share/18T3hTypmi/?mibextid=wwXIfr"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline hover:opacity-70"
                        >
                          Łza Tattoo & Piercing
                        </a>
                      </p>

                      <p>
                        <Link
                          href="/rezerwacja-kontakt"
                          className="underline hover:opacity-70"
                        >
                          Rezerwacja i kontakt - wszystkie sposoby
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden border-2 border-black bg-[#f5f2ee] shadow-sm">
                <div className="flex h-full min-h-[340px] flex-col">
                  <iframe
                    title="Mapa dojazdu do studia Łza Tattoo & Piercing w Lublinie"
                    src="https://www.google.com/maps?q=%C5%81za%20Tattoo%20%26%20Piercing%20Lublin&hl=pl&z=16&output=embed"
                    className="h-full w-full"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                  />

                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="border-t border-black/10 bg-white px-5 py-4 text-center text-sm uppercase tracking-[0.24em] transition hover:bg-black hover:text-white"
                  >
                    Otwórz w Google Maps
                  </a>
                </div>
              </div>
            </div>

            <div
              id="booking"
              className="border-t border-black/10 bg-[#f4f1ed] px-6 py-6 md:px-8 md:py-8"
            >
              <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-start">
                <div>
                  <div className="text-2xl uppercase tracking-wide md:text-3xl">
                    Skontaktuj się ze studiem
                  </div>
                  <p className="mt-4 max-w-sm text-sm leading-7 text-black/65 md:text-base">
                    Wypełnij formularz, opisz swój pomysł, a skontaktujemy się z
                    Tobą i pomożemy dobrać dogodny termin.
                  </p>
                </div>

                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />

      <JsonLd data={[studioSchema, faqSchema(homeFaq)]} />
    </div>
  );
}
