import Image from "next/image";
import Link from "next/link";
import type { Work } from "../lib/artists";

/** Galeria wybranych prac na podstronach usług (lazy-loading, WebP/AVIF). */
export default function WorksGallery({
  title,
  works,
  caption,
}: {
  title: string;
  works: Work[];
  caption?: string;
}) {
  return (
    <section className="mt-12">
      <h2 className="text-2xl uppercase tracking-wide md:text-3xl">{title}</h2>

      <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3">
        {works.map((work) => (
          <figure
            key={work.src}
            className="relative aspect-square overflow-hidden border border-black/10 bg-white"
          >
            <Image
              src={work.src}
              alt={work.alt}
              fill
              sizes="(max-width: 768px) 50vw, 250px"
              className="object-cover"
              style={work.position ? { objectPosition: work.position } : undefined}
            />
          </figure>
        ))}
      </div>

      <p className="mt-4 text-sm leading-7 text-black/55">
        {caption ?? "Prace wykonane w naszym studiu."}{" "}
        <Link href="/artysci" className="underline underline-offset-4 hover:opacity-60">
          Poznaj wszystkich artystów i ich portfolio
        </Link>
        .
      </p>
    </section>
  );
}
