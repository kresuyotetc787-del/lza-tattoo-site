"use client";
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

      <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f4f1ed]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 lg:px-8">
          <div>
            <div className="text-lg uppercase tracking-[0.28em]">
              ŁZA TATTOO & PIERCING
            </div>
            <div className="text-[10px] uppercase tracking-[0.32em] text-black/45">
              Lublin • Tattoo Studio • Tattoo Artists
            </div>
          </div>

          <nav className="hidden gap-8 text-[11px] uppercase tracking-[0.24em] md:flex">
            <a href="#home" className="hover:opacity-60">
              Home
            </a>
            <a href="#studio" className="hover:opacity-60">
              Studio
            </a>
            <a href="#artists" className="hover:opacity-60">
              Artists
            </a>
            <a href="#contact" className="hover:opacity-60">
              Contact
            </a>
          </nav>

          <a
            href="#booking"
            className="border border-black/10 bg-white px-4 py-2 text-[11px] uppercase tracking-[0.24em] shadow-sm transition hover:-translate-y-0.5"
          >
            Booking
          </a>
        </div>
      </header>

      <main>
        <section
          id="home"
          className="mx-auto max-w-6xl px-4 pb-8 pt-4 lg:px-8 lg:pb-12 lg:pt-6"
        >
          <div className="border border-black/10 bg-[#efebe7] px-6 py-6 shadow-sm md:px-10 md:py-8">
            <h1 className="mb-4 text-center text-4xl uppercase tracking-wide md:mb-6 md:text-7xl">
              ŁZA TATTOO&PIERCING
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
                <h2 className="mb-6 text-5xl md:text-7xl">O nas</h2>
                
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
          id="artists"
          className="mx-auto max-w-6xl px-4 pb-16 lg:px-8"
        >
          <div className="border border-black/10 bg-[#f4f1ed] px-6 py-6 shadow-sm md:px-8 md:py-8">
            <h2 className="mb-8 text-4xl md:text-6xl uppercase">Artists</h2>

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
          id="contact"
          className="mx-auto max-w-6xl px-4 pb-16 lg:px-8 lg:pb-20"
        >
          <div className="border border-black/10 bg-white shadow-sm">
            <div className="grid gap-8 px-6 py-6 md:grid-cols-[1fr_1.05fr] md:px-8 md:py-8">
              <div>
                <h2 className="mb-4 text-5xl md:text-7xl">Kontakt</h2>
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
  src={`https://www.google.com/maps/embed/v1/place?key=TU_WSTAW_API_KEY&q=${encodeURIComponent(
    "Łza Tattoo & Piercing, Prezydenta Gabriela Narutowicza 22, 20-004 Lublin, Poland"
  )}&language=pl&region=PL&zoom=16`}
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
                    };

                    const firstName = form.firstName.value.trim();
                    const lastName = form.lastName.value.trim();
                    const phone = form.phone.value.trim();
                    const email = form.email.value.trim();
                    const message = form.message.value.trim();

                    const body = [
                      "Nowe zgłoszenie:",
                      `Imię: ${firstName}`,
                      `Nazwisko: ${lastName}`,
                      `Telefon: ${phone}`,
                      `E-mail: ${email}`,
                      `Wiadomość: ${message}`,
                    ].join("\n");

                    await fetch("/api/contact", {
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

                  

                  <button
                    type="submit"
                    className="mt-1 bg-[#252b3a] px-6 py-4 text-sm uppercase tracking-[0.24em] text-white"
                  >
                    <div className="mt-6 space-y-4">
  <label className="flex items-start gap-3 text-sm leading-6 text-white">
    <input
      type="checkbox"
      name="privacyConsent"
      required
      className="mt-1 h-4 w-4 rounded border-white text-neutral-900 focus:ring-neutral-900"
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
                    Wyślij zgłoszenie
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}