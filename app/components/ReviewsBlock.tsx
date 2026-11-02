import { BOOKSY_URL } from "../lib/booksy";
import { OPINIE_BOOKSY } from "../lib/cennik";

export const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/q6ZiNCrBhdhhpLMJ7";

/**
 * Opinie klientów - odsyłamy do zweryfikowanych opinii w Booksy i Google
 * zamiast przepisywać je na stronę.
 */
export default function ReviewsBlock({
  heading = "Opinie o Łza Tattoo",
  headingLevel = "h2",
}: {
  heading?: string;
  headingLevel?: "h2" | "h3";
}) {
  const Heading = headingLevel;

  return (
    <section className="mt-12 border border-black/10 bg-white px-6 py-8 shadow-sm md:px-8">
      <Heading className="text-2xl uppercase tracking-wide md:text-3xl">
        {heading}
      </Heading>

      <div className="mt-6 flex flex-wrap items-end gap-x-6 gap-y-2">
        <span className="text-5xl md:text-6xl">{OPINIE_BOOKSY.rating}</span>
        <span className="pb-2 text-lg leading-8 text-black/75">
          średnia ocena w Booksy z{" "}
          {OPINIE_BOOKSY.count.toLocaleString("pl-PL")} opinii klientów
          (stan na {OPINIE_BOOKSY.asOf})
        </span>
      </div>

      <p className="mt-5 text-lg leading-8 text-black/85">
        Opinie w Booksy może wystawić wyłącznie osoba, która była u nas na
        umówionej wizycie - dlatego to najbardziej wiarygodne źródło informacji
        o tym, jak pracujemy. Opinie o studiu znajdziesz też w Google -
        przeczytaj je, zanim umówisz wizytę.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={BOOKSY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-black bg-[#252b3a] px-6 py-3 text-[11px] uppercase tracking-[0.24em] text-white transition hover:bg-black"
        >
          Opinie w Booksy
        </a>
        <a
          href={GOOGLE_MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-black/10 bg-[#f4f1ed] px-6 py-3 text-[11px] uppercase tracking-[0.24em] shadow-sm transition hover:-translate-y-0.5"
        >
          Opinie w Google
        </a>
      </div>
    </section>
  );
}
