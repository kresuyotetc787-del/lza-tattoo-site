import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-black/10 bg-[#f4f1ed]">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3 lg:px-8">
        <div>
          <div className="text-sm uppercase tracking-[0.28em]">
            ŁZA TATTOO &amp; PIERCING
          </div>
          <p className="mt-4 text-sm leading-7 text-black/70">
            Studio tatuażu i piercingu w Lublinie
            <br />
            ul. Prezydenta Gabriela Narutowicza 22
            <br />
            20–004 Lublin
          </p>
        </div>

        <div>
          <div className="text-[11px] uppercase tracking-[0.24em] text-black/45">
            Oferta
          </div>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/tatuaz-lublin" className="hover:opacity-60">
                Tatuaż Lublin
              </Link>
            </li>
            <li>
              <Link href="/piercing-lublin" className="hover:opacity-60">
                Piercing Lublin
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:opacity-60">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <div className="text-[11px] uppercase tracking-[0.24em] text-black/45">
            Kontakt
          </div>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href="tel:+48733625594" className="hover:opacity-60">
                733 625 594
              </a>
            </li>
            <li>
              <a
                href="mailto:lezkatattoo@gmail.com"
                className="hover:opacity-60"
              >
                lezkatattoo@gmail.com
              </a>
            </li>
            <li className="pt-2 text-black/70">
              pon.–pt. 9:00–17:00, sob. 9:00–15:00
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-black/10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-5 text-[11px] uppercase tracking-[0.18em] text-black/50 lg:px-8">
          <span>© {new Date().getFullYear()} ŁZA TATTOO &amp; PIERCING</span>
          <span className="flex gap-5">
            <Link href="/polityka-prywatnosci" className="hover:opacity-60">
              Polityka prywatności
            </Link>
            <Link href="/polityka-cookies" className="hover:opacity-60">
              Polityka cookies
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
