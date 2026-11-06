import type { Metadata } from "next";
import Link from "next/link";
import BooksyCta from "../components/BooksyCta";
import ContactForm from "../components/ContactForm";
import PageShell from "../components/PageShell";
import ReviewsBlock, { GOOGLE_MAPS_URL } from "../components/ReviewsBlock";
import JsonLd, { SITE_URL, faqSchema, studioSchema } from "../components/JsonLd";

export const metadata: Metadata = {
  title: "Kontakt - studio tatuażu Lublin | Łza Tattoo",
  description:
    "Kontakt ze studiem tatuażu w Lublinie: adres Narutowicza 22, telefon, godziny otwarcia i rezerwacja. Umów wizytę w Łza Tattoo & Piercing.",
  keywords: [
    "kontakt studio tatuażu lublin",
    "rezerwacja tatuaż lublin",
    "umów wizytę tatuaż lublin",
    "zapisy na piercing lublin",
    "godziny otwarcia łza tattoo",
    "studio tatuażu lublin narutowicza",
    "studio tatuażu lublin czynne w weekend",
  ],
  alternates: { canonical: "/rezerwacja-kontakt" },
  openGraph: {
    title: "Kontakt - studio tatuażu Lublin | Łza Tattoo",
    description:
      "Adres Narutowicza 22, telefon, godziny otwarcia i rezerwacja tatuażu oraz piercingu w Lublinie.",
    url: `${SITE_URL}/rezerwacja-kontakt`,
    type: "website",
  },
};

const faqItems = [
  {
    q: "Czy na tatuaż muszę się wcześniej zapisać?",
    a: "Tak. Tatuaż poprzedzamy konsultacją, na której ustalamy projekt, rozmiar i wycenę.",
  },
  {
    q: "Czy konsultacja tatuażu jest płatna?",
    a: "Nie, konsultacje tatuażu są darmowe.",
  },
  {
    q: "Czy mogę przyjść na piercing bez rezerwacji?",
    a: "Zalecamy rezerwację online, bo w kalendarzu od razu widać wolne terminy.",
  },
  {
    q: "Jak szybko odpowiadacie na wiadomości?",
    a: "Odpowiadamy na wiadomości zazwyczaj w ciągu 1-2 dni. Najszybciej złapiesz nas telefonicznie w godzinach otwarcia.",
  },
  {
    q: "Czy mogę umówić się poza godzinami otwarcia?",
    a: "Często tak. Skontaktuj się z nami, a ustalimy dogodny termin.",
  },
];

const link = "underline underline-offset-4 hover:opacity-60";
const h2 = "mt-12 text-2xl uppercase tracking-wide md:text-3xl";
const p = "mt-5 text-lg leading-8 text-black/85";

export default function RezerwacjaKontaktPage() {
  return (
    <PageShell
      title="Kontakt studio tatuażu Lublin - Łza Tattoo & Piercing"
      lead="Potrzebujesz telefonu, adresu albo godzin otwarcia? Na tej stronie masz pełny kontakt ze studiem tatuażu w Lublinie w jednym miejscu. Znajdziesz nas w samym centrum miasta, przy ul. Narutowicza 22. Poniżej zebraliśmy wszystko, czego potrzebujesz, żeby się z nami skontaktować, sprawdzić godziny i umówić wizytę na tatuaż lub piercing."
    >
      <section className="grid gap-8 md:grid-cols-2">
        <div>
          <h2 className={h2}>Adres i dane kontaktowe</h2>
          <address className={`${p} not-italic`}>
            Łza Tattoo &amp; Piercing
            <br />
            ul. Prezydenta Gabriela Narutowicza 22
            <br />
            20-004 Lublin
          </address>
          <ul className="mt-4 space-y-1 text-lg leading-8 text-black/85">
            <li>
              Telefon:{" "}
              <a href="tel:+48733625594" className={link}>
                733 625 594
              </a>
            </li>
            <li>
              E-mail:{" "}
              <a href="mailto:lezkatattoo@gmail.com" className={link}>
                lezkatattoo@gmail.com
              </a>
            </li>
            <li>
              Instagram:{" "}
              <a
                href="https://www.instagram.com/lezkatattoo"
                target="_blank"
                rel="noopener noreferrer"
                className={link}
              >
                @lezkatattoo
              </a>
            </li>
            <li>
              Facebook:{" "}
              <a
                href="https://www.facebook.com/share/18T3hTypmi/"
                target="_blank"
                rel="noopener noreferrer"
                className={link}
              >
                Łza Tattoo &amp; Piercing
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-12 flex min-h-[340px] flex-col overflow-hidden border-2 border-black bg-[#f5f2ee] shadow-sm">
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

      <p className={p}>
        Studio znajduje się w centrum, dlatego dojedziesz do nas komunikacją
        miejską lub samochodem. Najbliższy przystanek to Mościckiego 02, a
        samochód zaparkujesz w okolicznych uliczkach.{" "}
        Jeśli przyjeżdżasz spoza Lublina, zajrzyj na stronę{" "}
        <Link href="/tatuaz-piercing-lublin-okolice" className={link}>
          dojazd z okolic do studia
        </Link>
        .
      </p>

      <h2 className={h2}>Godziny otwarcia</h2>
      <p className={p}>Nasze godziny otwarcia to:</p>
      <ul className="mt-3 space-y-1 text-lg leading-8 text-black/85">
        <li>poniedziałek-piątek: 9:00-17:00</li>
        <li>sobota: 9:00-15:00</li>
        <li>niedziela: bez stałych godzin</li>
      </ul>
      <p className={p}>
        Pytasz, czy studio tatuażu w Lublinie jest czynne w weekend? W sobotę
        zapraszamy do 15:00. Jesteśmy też elastyczni poza standardowymi
        godzinami: w wyjątkowych sytuacjach możemy umówić sesję lub konsultację
        wieczorem albo w niedzielę. Napisz lub zadzwoń, a znajdziemy termin.
      </p>

      <h2 className={h2}>Jak umówić wizytę na tatuaż?</h2>
      <p className={p}>
        Na tatuaż najpierw umawiamy konsultację - jest darmowa. Opisz pomysł, wskaż miejsce na
        ciele i dołącz inspiracje, a my dobierzemy artystę i zaproponujemy
        termin. Możesz zrobić to przez formularz poniżej, telefonicznie, e-mailem
        lub przez wiadomość na Instagramie. Zanim napiszesz, możesz przejrzeć{" "}
        <Link href="/tatuaz-lublin" className={link}>
          style tatuażu, które wykonujemy
        </Link>
        , i{" "}
        <Link href="/artysci" className={link}>
          portfolio naszych artystów
        </Link>
        .
      </p>

      <section id="formularz" className="mt-8 scroll-mt-28 border border-black/10 bg-[#f4f1ed] px-6 py-8 md:px-8">
        <h3 className="mb-6 text-xl uppercase tracking-wide md:text-2xl">
          Formularz kontaktowy
        </h3>
        <ContactForm />
      </section>

      <h2 className={h2}>Zapisy na piercing</h2>
      <p className={p}>
        Rezerwacja piercingu działa online. Wybierasz usługę, widzisz wolne
        godziny i aktualny cennik, a potwierdzenie dostajesz od razu. Wszystko
        znajdziesz na stronie{" "}
        <Link href="/rezerwacja-piercing" className={link}>
          rezerwacji piercingu online
        </Link>{" "}
        lub bezpośrednio w Booksy. Ceny wszystkich przekłuć są też w naszym{" "}
        <Link href="/cennik" className={link}>
          cenniku
        </Link>
        . Osoby niepełnoletnie potrzebują pisemnej zgody rodzica lub opiekuna i
        jego obecności na wizycie.
      </p>
      <BooksyCta />

      <h2 className={h2}>Z czym warto przyjść na konsultację?</h2>
      <p className={p}>
        Konsultacja przebiega sprawniej, gdy masz przygotowane kilka rzeczy:
        referencje wzoru (zdjęcia, rysunki, motywy), informację o miejscu na
        ciele oraz orientacyjny rozmiar. Warto też napisać o wcześniejszych
        tatuażach, jeśli wzór ma się z nimi łączyć lub je przykryć. Wskazówki,
        jak przygotować się do samej sesji, znajdziesz w poradniku{" "}
        <Link href="/blog/jak-przygotowac-sie-do-tatuazu" className={link}>
          jak przygotować się do tatuażu
        </Link>
        .
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

      <ReviewsBlock />

      <h2 className={h2}>Do zobaczenia przy Narutowicza 22</h2>
      <p className={p}>
        Zadzwoń, napisz lub zarezerwuj termin online. Chętnie odpowiemy na
        pytania o tatuaż i piercing oraz pomożemy zaplanować wizytę.
      </p>

      <JsonLd
        data={[
          studioSchema,
          {
            "@type": "ContactPage",
            name: "Kontakt - studio tatuażu Lublin | Łza Tattoo",
            url: `${SITE_URL}/rezerwacja-kontakt`,
            about: { "@id": `${SITE_URL}/#studio` },
          },
          faqSchema(faqItems),
        ]}
      />
    </PageShell>
  );
}
