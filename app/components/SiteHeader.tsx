import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#studio", label: "Studio" },
  { href: "/tatuaz-lublin", label: "Tatuaż" },
  { href: "/piercing-lublin", label: "Piercing" },
  { href: "/blog", label: "Blog" },
  { href: "/#contact", label: "Kontakt" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f4f1ed]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 lg:px-8">
        <Link href="/" className="shrink-0">
          <div className="text-lg uppercase tracking-[0.28em]">
            ŁZA TATTOO &amp; PIERCING
          </div>
          <div className="text-[10px] uppercase tracking-[0.32em] text-black/45">
            Lublin • Tattoo Studio • Tattoo Artists
          </div>
        </Link>

        <nav className="hidden gap-6 text-[11px] uppercase tracking-[0.18em] lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:opacity-60">
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/#booking"
          className="shrink-0 border border-black/10 bg-white px-4 py-2 text-[11px] uppercase tracking-[0.24em] shadow-sm transition hover:-translate-y-0.5"
        >
          Booking
        </Link>
      </div>

      <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2 border-t border-black/10 px-4 pb-3 pt-2 text-[11px] uppercase tracking-[0.18em] lg:hidden">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className="hover:opacity-60">
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
