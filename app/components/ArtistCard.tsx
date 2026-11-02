import Image from "next/image";
import { BOOKSY_URL } from "../lib/booksy";
import type { Artist } from "../lib/artists";

export default function ArtistCard({
  artist,
  isCentered = false,
  headingLevel = "h3",
}: {
  artist: Artist;
  isCentered?: boolean;
  headingLevel?: "h2" | "h3";
}) {
  const Heading = headingLevel;

  return (
    <article
      className={`border border-black/10 bg-white p-5 shadow-sm ${
        isCentered ? "md:col-span-2 md:mx-auto md:max-w-md" : ""
      }`}
    >
      <Heading className="mb-1 text-center text-lg uppercase">
        {artist.name ? `${artist.name} - ${artist.displayName}` : artist.displayName}
      </Heading>
      <p className="mb-3 text-center text-sm leading-6 text-black/60">
        {artist.role} · {artist.styles.join(", ")}
      </p>
      {artist.bio && (
        <p className="mb-3 text-center text-sm leading-6 text-black/75">{artist.bio}</p>
      )}

      <div className="relative h-[450px] overflow-hidden border border-black">
        <Image
          src={artist.photo.src}
          alt={artist.photo.alt}
          fill
          sizes="(max-width: 768px) 90vw, 520px"
          className="object-cover"
          style={{ objectPosition: artist.photo.position ?? "center" }}
        />
      </div>

      <div
        className={`mt-2 grid gap-0 ${artist.booksy ? "grid-cols-2" : "grid-cols-1"}`}
      >
        <a
          href={`https://instagram.com/${artist.handle}`}
          target="_blank"
          rel="noreferrer"
          className="border border-black px-4 py-3 text-center text-lg font-semibold uppercase hover:bg-black hover:text-white"
        >
          Instagram
        </a>

        {artist.booksy && (
          <a
            href={BOOKSY_URL}
            target="_blank"
            rel="noreferrer"
            className="border border-l-0 border-black px-4 py-3 text-center text-lg font-semibold uppercase hover:bg-black hover:text-white"
          >
            Booksy
          </a>
        )}
      </div>

      <div className="mt-3 grid grid-cols-3 gap-2">
        {artist.works.map((work) => (
          <div
            key={work.src}
            className="relative aspect-square overflow-hidden border border-black"
          >
            <Image
              src={work.src}
              alt={work.alt}
              fill
              sizes="(max-width: 768px) 30vw, 170px"
              className="object-cover"
              style={{ objectPosition: work.position ?? "center" }}
            />
          </div>
        ))}
      </div>
    </article>
  );
}
