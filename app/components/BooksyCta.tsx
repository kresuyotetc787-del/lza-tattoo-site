import Link from "next/link";
import { BOOKSY_SHORT_LABEL, BOOKSY_URL } from "../lib/booksy";

/**
 * Blok z rezerwacją piercingu online. Booksy obsługuje tylko piercing,
 * dlatego wstawiamy go na podstronach piercingu, a nie tatuażu.
 */
export default function BooksyCta({
  children,
  showOfferLink = true,
}: {
  children?: React.ReactNode;
  showOfferLink?: boolean;
}) {
  return (
    <section className="mt-14 border border-black/10 bg-white px-6 py-8 shadow-sm md:px-8">
      <div className="text-[11px] uppercase tracking-[0.24em] text-black/45">
        Rezerwacja online
      </div>

      <div className="mt-4 text-lg leading-8 text-black/85">
        {children ?? (
          <p>
            Terminy na piercing rezerwujesz sama/sam w Booksy - kalendarz
            pokazuje wolne godziny na żywo, a razem z nimi aktualny cennik
            poszczególnych przekłuć. Rezerwacja zajmuje chwilę i działa
            całą dobę.
          </p>
        )}
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={BOOKSY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-black bg-[#252b3a] px-6 py-3 text-[11px] uppercase tracking-[0.24em] text-white transition hover:bg-black"
        >
          Zarezerwuj termin w Booksy
        </a>

        {showOfferLink && (
          <Link
            href="/rezerwacja-piercing"
            className="border border-black/10 bg-[#f4f1ed] px-6 py-3 text-[11px] uppercase tracking-[0.24em] shadow-sm transition hover:-translate-y-0.5"
          >
            Jak działa rezerwacja
          </Link>
        )}
      </div>

      <p className="mt-5 text-sm leading-7 text-black/55">
        Nasz profil: {BOOKSY_SHORT_LABEL}
      </p>
    </section>
  );
}
