import type { Metadata } from "next";
import Link from "next/link";
import BooksyCta from "../components/BooksyCta";
import ContactForm from "../components/ContactForm";
import PageShell from "../components/PageShell";
import ReviewsBlock, { GOOGLE_MAPS_URL } from "../components/ReviewsBlock";
import JsonLd, { SITE_URL, studioSchema } from "../components/JsonLd";

export const metadata: Metadata = {
  title: "Rezerwacja i kontakt - studio tatuażu ŁZA TATTOO Lublin",
  description:
    "Umów tatuaż lub piercing w Lublinie: formularz, telefon 733 625 594, e-mail lub Booksy. ul. Narutowicza 22, pon.-pt. 9-17, sob. 9-15. Dojazd i mapa.",
  keywords: [
    "łza tattoo kontakt",
    "łza tattoo lublin",
    "studio tatuażu lublin kontakt",
    "rezerwacja tatuaż lublin",
    "umów tatuaż lublin",
    "narutowicza 22 lublin tatuaż",
  ],
  alternates: { canonical: "/rezerwacja-kontakt" },
  openGraph: {
    title: "Rezerwacja i kontakt - ŁZA TATTOO & PIERCING Lublin",
    description:
      "Formularz, telefon, e-mail, Booksy i dojazd do studia tatuażu i piercingu w centrum Lublina.",
    url: `${SITE_URL}/rezerwacja-kontakt`,
    type: "website",
  },
};

const ways = [
  {
    title: "Tatuaż - konsultacja",
    text: "Opisz pomysł w formularzu poniżej, dołącz informację o miejscu na ciele i przybliżonym rozmiarze. Odpiszemy z widełkami cenowymi i propozycją terminu.",
  },
  {
    title: "Piercing - Booksy",
    text: "Terminy na piercing rezerwujesz sama/sam w Booksy - widzisz wolne godziny i cenę każdego przekłucia. Rezerwacja działa całą dobę.",
  },
  {
    title: "Telefon i wiadomość",
    text: "Wolisz porozmawiać? Zadzwoń pod 733 625 594 albo napisz do nas na Instagramie lub e-mailem.",
  },
];

export default function RezerwacjaKontaktPage() {
  return (
    <PageShell
      title="Rezerwacja i kontakt"
      lead="Studio ŁZA TATTOO & PIERCING znajdziesz w centrum Lublina, przy ul. Prezydenta Gabriela Narutowicza 22. Tatuaż zaczynamy od konsultacji, piercing rezerwujesz online - poniżej wszystkie sposoby, żeby się z nami umówić."
    >
      <section className="mt-6 grid gap-4 md:grid-cols-3">
        {ways.map((way) => (
          <div key={way.title} className="border border-black/10 bg-white p-5 shadow-sm">
            <h2 className="text-lg uppercase tracking-wide">{way.title}</h2>
            <p className="mt-3 text-base leading-7 text-black/75">{way.text}</p>
          </div>
        ))}
      </section>

      <section className="mt-12 grid gap-8 md:grid-cols-2">
        <div className="text-lg leading-8 text-black/85">
          <h2 className="text-2xl uppercase tracking-wide md:text-3xl">Dane kontaktowe</h2>
          <address className="mt-5 not-italic">
            ŁZA TATTOO &amp; PIERCING
            <br />
            ul. Prezydenta Gabriela Narutowicza 22
            <br />
            20-004 Lublin
          </address>
          <p className="mt-4">
            Telefon:{" "}
            <a href="tel:+48733625594" className="underline underline-offset-4">
              733 625 594
            </a>
            <br />
            E-mail:{" "}
            <a href="mailto:lezkatattoo@gmail.com" className="underline underline-offset-4">
              lezkatattoo@gmail.com
            </a>
            <br />
            Instagram:{" "}
            <a
              href="https://www.instagram.com/lezkatattoo"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
            >
              lezkatattoo
            </a>
          </p>

          <h3 className="mt-8 text-xl uppercase tracking-wide">Godziny otwarcia</h3>
          <p className="mt-3">
            Poniedziałek-piątek: 9:00-17:00
            <br />
            Sobota: 9:00-15:00
            <br />
            Niedziela: nieczynne
          </p>
          <p className="mt-3 text-base leading-7 text-black/70">
            W uzasadnionych przypadkach umawiamy sesje i konsultacje także poza
            tymi godzinami - zapytaj.
          </p>
        </div>

        <div className="flex min-h-[340px] flex-col overflow-hidden border-2 border-black bg-[#f5f2ee] shadow-sm">
          <iframe
            title="Mapa dojazdu do studia Łza Tattoo & Piercing w Lublinie"
            src="https://www.google.com/maps?q=%C5%81za%20Tattoo%20%26%20Piercing%20Lublin&hl=pl&z=16&output=embed"
            className="h-full min-h-[300px] w-full flex-1"
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
      </section>

      <section className="mt-12">
        <h2 className="text-2xl uppercase tracking-wide md:text-3xl">Dojazd</h2>
        <p className="mt-5 text-lg leading-8 text-black/85">
          Studio mieści się w ścisłym centrum Lublina, z łatwym dojazdem i
          parkingiem w okolicy. Regularnie przyjeżdżają do nas klienci ze
          Świdnika, Lubartowa, Kraśnika, Chełma i Zamościa - dojazd z każdej z
          tych miejscowości opisaliśmy na stronie{" "}
          <Link
            href="/tatuaz-piercing-lublin-okolice"
            className="underline underline-offset-4 hover:opacity-60"
          >
            tatuaż i piercing - Lublin i okolice
          </Link>
          .
        </p>
      </section>

      <section id="formularz" className="mt-12 scroll-mt-28">
        <h2 className="text-2xl uppercase tracking-wide md:text-3xl">
          Formularz kontaktowy
        </h2>
        <p className="mt-5 mb-6 text-lg leading-8 text-black/85">
          Opisz swój pomysł - przy tatuażu podaj miejsce na ciele, przybliżony
          rozmiar i styl (jeśli masz upatrzonego artystę, napisz kogo), a
          odezwiemy się z propozycją terminu.
        </p>
        <ContactForm />
      </section>

      <BooksyCta />

      <ReviewsBlock />

      <JsonLd
        data={[
          studioSchema,
          {
            "@type": "ContactPage",
            name: "Rezerwacja i kontakt - ŁZA TATTOO & PIERCING",
            url: `${SITE_URL}/rezerwacja-kontakt`,
            about: { "@id": `${SITE_URL}/#studio` },
          },
        ]}
      />
    </PageShell>
  );
}
