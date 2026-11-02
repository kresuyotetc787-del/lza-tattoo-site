import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "./components/PageShell";

// Bez canonical - strona błędu nie może wskazywać strony głównej jako
// swojego kanonicznego adresu.
export const metadata: Metadata = {
  title: "Nie znaleziono strony - ŁZA TATTOO & PIERCING Lublin",
  robots: { index: false, follow: true },
};

const links = [
  { href: "/tatuaz-lublin", label: "Tatuaż w Lublinie" },
  { href: "/piercing-lublin", label: "Piercing w Lublinie" },
  { href: "/cennik", label: "Cennik" },
  { href: "/artysci", label: "Nasi artyści" },
  { href: "/rezerwacja-kontakt", label: "Rezerwacja i kontakt" },
  { href: "/blog", label: "Blog - poradniki" },
];

export default function NotFound() {
  return (
    <PageShell
      title="Nie znaleziono strony"
      lead="Strona, której szukasz, nie istnieje albo zmieniła adres. Wybierz jedną z poniższych podstron albo wróć na stronę główną."
    >
      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="block border border-black/10 bg-white px-5 py-4 text-[11px] uppercase tracking-[0.24em] shadow-sm transition hover:-translate-y-0.5"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <p className="mt-8 text-lg leading-8 text-black/75">
        <Link href="/" className="underline underline-offset-4 hover:opacity-60">
          Wróć na stronę główną
        </Link>{" "}
        lub zadzwoń: <a href="tel:+48733625594" className="underline underline-offset-4">733 625 594</a>.
      </p>
    </PageShell>
  );
}
