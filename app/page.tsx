"use client";
import Link from "next/link";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import JsonLd, { faqSchema, studioSchema } from "./components/JsonLd";

const homeFaq = [
  {
    q: "Ile kosztuje tatuaż w Lublinie?",
    a: "Wycena zależy od rozmiaru wzoru, techniki i czasu pracy artysty. Dokładną cenę ustalamy podczas konsultacji, na której omawiamy projekt - napisz do nas przez formularz albo zadzwoń, a przedstawimy widełki dla Twojego pomysłu.",
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

export default function Home() {
  const heroImage = "/images/studio-main.jpg";

  const studioGallery = [
    "/images/studio1.jpg",
    "/images/studio2.jpg",
    "/images/studio3.jpg",
    "/images/studio4.jpg",
  ];
  const booksyArtists = ["piercinglbn", "dziurikikarolki", "dziurkikarolki"];

const booksyLinks: Record<string, string> = {
  piercinglbn: "https://piercinglbn.booksy.com",
  dziurikikarolki: "https://piercinglbn.booksy.com",
};


  const artists = [
    "piercinglbn",
    "ilotattoo",
    "blackbirddotwork",
    "demonology_ink",
    "maxovod",
   "dziurkikarolki",
   "inked.by.luvlom",
  ];

  
   function ArtistCard({
  name,
  isCentered = false,
}: {
  name: string;
  isCentered?: boolean;
}) {
  return (
    
    <div
    
      className={`border border-black/10 bg-white p-5 shadow-sm ${
        isCentered ? "md:col-span-2 md:mx-auto md:max-w-md" : ""
        
      }`}
    >
      <div className="text-center text-lg uppercase mb-3">
      {name === "piercinglbn" ? "Piercing LBN" : name}
    </div>
      <div className="overflow-hidden border border-black">
        <img
          src={`/images/artists/${name}.jpg`}
          alt={name}
          className={`h-[450px] w-full object-cover ${
  name === "dziurikikarolki"
    ? "object-[center_80%]"
    : name === "ilotattoo"
    ? "object-[center_20%]"
    : name === "piercinglbn"
    ? "object-top"
    : name === "demonology_ink"
    ? "object-[center_60%]"
    : "object-center"
}`}

></img>
      </div>

      
    <div
  className={`mt-2 grid gap-0 ${
    booksyArtists.includes(name) ? "grid-cols-2" : "grid-cols-1"
  }`}
>
  <a
    href={`https://instagram.com/${name}`}
    target="_blank"
    rel="noreferrer"
    className="border border-black px-4 py-3 text-center text-lg font-semibold uppercase hover:bg-black hover:text-white"
  >
    Instagram
  </a>

  {booksyArtists.includes(name) && (
    <a
      href="https://piercinglbn.booksy.com"
      target="_blank"
      rel="noreferrer"
      className="border border-l-0 border-black px-4 py-3 text-center text-lg font-semibold uppercase hover:bg-black hover:text-white"
    >
      Booksy
    </a>
  )}
</div>
      <div className="mt-3 grid grid-cols-3 gap-2">
        {[1, 2, 3].map((i) => (
          <div
            key={`${name}-${i}`}
            className="aspect-square overflow-hidden border border-black"
          >
            <img
               src={`/images/works/${name}-${i}.jpg`}
               alt={`${name} work ${i}`}
               className={`h-full w-full object-cover ${
                name === "piercinglbn" && i === 2
                ? "object-[center_90%]" // ПОДНЯТЬ (1 мастер)
              : name === "ilotattoo" && i === 2
              ? "object-[center_40%]" // оставить как есть (2 мастер)
              : "object-center"
            }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
  return (
    <div className="min-h-screen bg-[#e8e5e1] text-black font-serif">
      <style>{`
        html { scroll-behavior: smooth; }
      `}</style>

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

            <div className="mx-auto max-w-5xl overflow-hidden border border-black/10 bg-white shadow-sm">
              <img
                src={heroImage}
                alt="Tattoo studio"
                className="h-[320px] w-full object-cover md:h-[560px]"
              />
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-3 md:mt-5">
              <a
                href="#artists"
                className="min-w-[170px] border border-black/10 bg-white px-6 py-3 text-center text-[11px] uppercase tracking-[0.24em] shadow-sm"
              >
                Tattoo Artists
              </a>
              <a
                href="#contact"
                className="min-w-[170px] border border-black/10 bg-[#d7d2cc] px-6 py-3 text-center text-[11px] uppercase tracking-[0.24em] shadow-sm"
              >
                Contact
              </a>
            </div>

            <p className="mx-auto mt-6 max-w-[320px] px-3 text-center text-[18px] leading-[1.45] text-slate-700 sm:max-w-2xl sm:text-2xl md:max-w-5xl md:text-[34px]">
  Indywidualne podejście, najwyższy poziom profesjonalizmu i efekt, do którego będziesz wracać z dumą.
            </p>
          </div>
        </section>

        <section
          id="studio"
          className="mx-auto max-w-6xl px-4 pb-10 lg:px-8 lg:pb-14"
        >
          <div className="border border-black/5 bg-[#f4f1ed] px-6 py-6 shadow-sm md:px-8 md:py-8">
            <div className="grid gap-10 md:grid-cols-2 items-stretch">
              <div className="rounded-[40px] bg-white/90 px-10 py-10 flex flex-col justify-center h-full">
                <h2 className="mb-6 text-5xl md:text-7xl">
                  O nas
                  <span className="mt-3 block text-base uppercase tracking-[0.2em] text-black/55 md:text-xl">
                    Salon tatuażu i piercingu w centrum Lublina
                  </span>
                </h2>
                
                  Łza Tattoo&amp;Piercing to studio, w którym pasja do sztuki
                  spotyka się z profesjonalizmem i dbałością o każdy detal.
                  Oferujemy tatuaże oraz piercing wykonywane w sterylnych
                  warunkach, z indywidualnym podejściem do każdego klienta.
                  Jeśli szukasz miejsca, gdzie Twoja wizja zostanie zamieniona w
                  coś wyjątkowego — jesteś w dobrych rękach.
                    <div className="mt-8 flex border border-black">
    <a
      href="https://www.instagram.com/lezkatattoo?igsh=MWtqdGc0MndqN2ZtcQ=="
      target="_blank"
      rel="noopener noreferrer"
      className="w-1/2 border-r border-black py-4 text-center font-bold uppercase hover:bg-black hover:text-white transition"
    >
      Instagram
    </a>

    <a
      href="https://www.facebook.com/share/18T3hTypmi/?mibextid=wwXIfr"
      target="_blank"
      rel="noopener noreferrer"
      className="w-1/2 py-4 text-center font-bold uppercase hover:bg-black hover:text-white transition"
    >
      Facebook
    </a>
  </div>
</div>
                
              <div className="grid grid-cols-2 gap-6 h-full">
                
                {studioGallery.map((src, index) => (
                  <div
                    key={`studio-${index}`}
                    className="aspect-square overflow-hidden bg-white shadow-sm"
                  >
                    <img
                      src={src}
                      alt={`Studio photo ${index + 1}`}
                      className="h-full w-full object-cover"
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

            <Link
              href="/blog"
              className="mt-6 block border border-black/10 bg-white px-6 py-5 text-center text-[11px] uppercase tracking-[0.24em] shadow-sm transition hover:-translate-y-0.5"
            >
              Blog — poradniki o gojeniu i pielęgnacji
            </Link>
          </div>
        </section>

        <section
          id="artists"
          className="mx-auto max-w-6xl px-4 pb-16 lg:px-8"
        >
          <div className="border border-black/10 bg-[#f4f1ed] px-6 py-6 shadow-sm md:px-8 md:py-8">
            <h2 className="mb-8 text-4xl md:text-6xl uppercase">
              Artists
              <span className="mt-3 block text-base tracking-[0.2em] text-black/55 md:text-xl">
                Tatuażyści i piercer w Lublinie
              </span>
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              {artists.map((name, index) => {
                const isLastOdd =
                  artists.length % 2 !== 0 && index === artists.length - 1;
                return (
                  <ArtistCard
                    key={name}
                    name={name}
                    isCentered={isLastOdd}
                  />
                );
              })}
            </div>
          </div>
        </section>

        <section
          id="faq"
          className="mx-auto max-w-6xl px-4 pb-16 lg:px-8"
        >
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
</div>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden border-2 border-black bg-[#f5f2ee] shadow-sm">
                <div className="flex h-full min-h-[340px] flex-col">
                  <iframe
  src="https://www.google.com/maps?q=%C5%81za%20Tattoo%20%26%20Piercing%20Lublin&hl=pl&z=16&output=embed"
  className="w-full h-full"
  style={{ border: 0 }}
  loading="lazy"
  allowFullScreen
  referrerPolicy="no-referrer-when-downgrade"
/>
                  
                  <a
                    href="https://maps.app.goo.gl/q6ZiNCrBhdhhpLMJ7"
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

                <form
  className="grid gap-4"
  onSubmit={async (e) => {
    e.preventDefault();

    const form = e.currentTarget as HTMLFormElement & {
      firstName: { value: string };
      lastName: { value: string };
      phone: { value: string };
      email: { value: string };
      message: { value: string };
      privacyConsent: { checked: boolean };
    };

    const firstName = form.firstName.value.trim();
    const lastName = form.lastName.value.trim();
    const phone = form.phone.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    const privacyConsent = form.privacyConsent.checked;

    if (!privacyConsent) {
      alert("Zaznacz zgodę na przetwarzanie danych.");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          phone,
          email,
          message,
        }),
      });

      const result = await res.json();

      if (result.ok) {
        alert("Wiadomość została wysłana.");
        form.reset();
      } else {
        alert(result.error || "Błąd podczas wysyłania wiadomości.");
      }
    } catch (error) {
      alert("Błąd połączenia z serwerem.");
      console.error(error);
    }
  }}
>
  <div className="grid gap-4 md:grid-cols-2">
    <input
      name="firstName"
      className="border border-black/10 bg-white px-4 py-3 outline-none placeholder:text-black/35"
      placeholder="Imię"
      required
    />
    <input
      name="lastName"
      className="border border-black/10 bg-white px-4 py-3 outline-none placeholder:text-black/35"
      placeholder="Nazwisko"
      required
    />
  </div>

  <div className="grid gap-4 md:grid-cols-2">
    <input
      name="phone"
      type="tel"
      className="border border-black/10 bg-white px-4 py-3 outline-none placeholder:text-black/35"
      placeholder="Telefon"
      required
    />
    <input
      name="email"
      type="email"
      className="border border-black/10 bg-white px-4 py-3 outline-none placeholder:text-black/35"
      placeholder="Adres e-mail"
      required
    />
  </div>

  <textarea
    name="message"
    className="min-h-[160px] border border-black/10 bg-white px-4 py-3 outline-none placeholder:text-black/35"
    placeholder="Wiadomość"
    required
  />

  <div className="mt-1 bg-[#252b3a] px-6 py-6 text-white">
    <div className="space-y-4">
      <label className="flex items-start gap-3 text-sm leading-6 text-white">
        <input
          type="checkbox"
          name="privacyConsent"
          className="mt-1 h-4 w-4 rounded border-white text-neutral-900 focus:ring-neutral-900"
          required
        />
        <span>
          Zapoznałem/am się z{" "}
          <a
            href="/polityka-prywatnosci"
            className="underline underline-offset-2 hover:opacity-70"
            target="_blank"
            rel="noreferrer"
          >
            Polityką prywatności
          </a>{" "}
          i wyrażam zgodę na przetwarzanie moich danych osobowych w celu obsługi
          zapytania przesłanego przez formularz kontaktowy.
        </span>
      </label>

      <p className="text-xs leading-5 text-white/70">
        Administratorem danych jest ŁZA TATTOO & PIERCING. Dane podane w formularzu
        będą przetwarzane wyłącznie w celu odpowiedzi na wiadomość i kontaktu w
        sprawie rezerwacji lub zapytania.
      </p>
    </div>

    <button
      type="submit"
      className="mt-6 w-full border border-white/20 bg-transparent px-6 py-4 text-center text-sm uppercase tracking-[0.24em] text-white transition hover:bg-white hover:text-[#252b3a]"
    >
      Wyślij zgłoszenie
    </button>
  </div>
</form>
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