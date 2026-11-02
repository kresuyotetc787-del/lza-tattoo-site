import type { Metadata } from "next";
import Link from "next/link";
import ArtistCard from "../components/ArtistCard";
import ContactCta from "../components/ContactCta";
import PageShell from "../components/PageShell";
import JsonLd, { SITE_URL, studioSchema } from "../components/JsonLd";
import { ARTISTS } from "../lib/artists";

export const metadata: Metadata = {
  title: "Tatuażyści i piercerzy Lublin - artyści ŁZA TATTOO & PIERCING",
  description:
    "Poznaj tatuażystów i piercerów studia ŁZA TATTOO w Lublinie: realizm, black & grey, dotwork, fine line, blackwork i piercing. Zobacz portfolio i wybierz artystę.",
  keywords: [
    "tatuażysta lublin",
    "tatuażyści lublin",
    "najlepszy tatuażysta lublin",
    "piercer lublin",
    "tatuaż realistyczny lublin",
    "dotwork lublin",
    "fine line lublin",
  ],
  alternates: { canonical: "/artysci" },
  openGraph: {
    title: "Tatuażyści i piercerzy Lublin - artyści ŁZA TATTOO & PIERCING",
    description:
      "Poznaj zespół studia ŁZA TATTOO w Lublinie i zobacz portfolio artystów.",
    url: `${SITE_URL}/artysci`,
    type: "website",
  },
};

const tattooArtists = ARTISTS.filter((a) => a.role.startsWith("Tatuaż"));
const piercers = ARTISTS.filter((a) => !a.role.startsWith("Tatuaż"));

export default function ArtysciPage() {
  return (
    <PageShell
      title="Nasi artyści - tatuażyści i piercerzy w Lublinie"
      lead="W ŁZA TATTOO & PIERCING pracuje zespół osób o różnych stylach - od kolorowego realizmu, przez black & grey i dotwork, po delikatny fine line i piercing. Zobacz prace każdego z nas i wybierz artystę, którego styl najbardziej do Ciebie pasuje."
    >
      <h2 className="mt-10 text-2xl uppercase tracking-wide md:text-3xl">
        Jak wybrać tatuażystę?
      </h2>
      <p className="mt-5 text-lg leading-8 text-black/85">
        Najprościej - po stylu. Jeśli marzysz o realistycznym portrecie, wybierz
        osobę, która ma takie prace w portfolio; jeśli chcesz delikatny
        botaniczny wzór, szukaj kogoś, kto pracuje w dotworku lub fine line.
        Nie wiesz, kogo wybrać? Opisz pomysł w formularzu, a sami dobierzemy
        artystę. Ceny i zasady wyceny znajdziesz w{" "}
        <Link href="/cennik" className="underline underline-offset-4 hover:opacity-60">
          cenniku
        </Link>
        .
      </p>

      <ul className="mt-6 space-y-3">
        {tattooArtists.map((artist) => (
          <li key={artist.handle} className="flex gap-3 text-lg leading-8 text-black/85">
            <span aria-hidden className="mt-3 h-1.5 w-1.5 shrink-0 bg-black/60" />
            <span>
              <strong className="font-bold">{artist.displayName}</strong> -{" "}
              {artist.styles.join(", ")}
            </span>
          </li>
        ))}
      </ul>

      <h2 className="mt-14 text-2xl uppercase tracking-wide md:text-3xl">
        Tatuażyści
      </h2>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {tattooArtists.map((artist, index) => (
          <ArtistCard
            key={artist.handle}
            artist={artist}
            isCentered={tattooArtists.length % 2 !== 0 && index === tattooArtists.length - 1}
          />
        ))}
      </div>

      <h2 className="mt-14 text-2xl uppercase tracking-wide md:text-3xl">
        Piercing
      </h2>
      <p className="mt-5 text-lg leading-8 text-black/85">
        Przekłucia wykonujemy w sterylnych warunkach, na jednorazowym sprzęcie.
        Terminy na piercing rezerwujesz w Booksy, a ceny wszystkich przekłuć
        znajdziesz w{" "}
        <Link href="/cennik" className="underline underline-offset-4 hover:opacity-60">
          cenniku piercingu
        </Link>
        .
      </p>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {piercers.map((artist) => (
          <ArtistCard key={artist.handle} artist={artist} />
        ))}
      </div>

      <ContactCta>
        <p>
          Chcesz umówić się do konkretnej osoby? Napisz w wiadomości, kogo
          wybierasz, i opisz swój pomysł - odezwiemy się z terminem konsultacji.
        </p>
      </ContactCta>

      <JsonLd
        data={[
          {
            ...studioSchema,
            employee: ARTISTS.map((artist) => ({
              "@type": "Person",
              name: artist.name ?? artist.displayName,
              alternateName: artist.handle,
              jobTitle: artist.role,
              knowsAbout: artist.styles,
              sameAs: [`https://www.instagram.com/${artist.handle}`],
              worksFor: { "@id": `${SITE_URL}/#studio` },
            })),
          },
        ]}
      />
    </PageShell>
  );
}
