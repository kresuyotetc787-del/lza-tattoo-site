import Image from "next/image";
import Link from "next/link";
import type { Block, Inline } from "../lib/blog/types";

function renderInline(content: Inline[]) {
  return content.map((part, index) => {
    if (typeof part === "string") return part;
    return (
      <Link
        key={index}
        href={part.href}
        className="underline underline-offset-4 hover:opacity-60"
      >
        {part.text}
      </Link>
    );
  });
}

export default function ContentBlocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((block, index) => {
        switch (block.type) {
          case "h2":
            return (
              <h2
                key={index}
                className="mt-12 text-2xl uppercase tracking-wide md:text-3xl"
              >
                {block.text}
              </h2>
            );

          case "p":
            return (
              <p key={index} className="mt-5 text-lg leading-8 text-black/85">
                {renderInline(block.content)}
              </p>
            );

          case "ul":
            return (
              <ul key={index} className="mt-5 space-y-3">
                {block.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex gap-3 text-lg leading-8 text-black/85"
                  >
                    <span aria-hidden className="mt-3 h-1.5 w-1.5 shrink-0 bg-black/60" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            );

          case "image":
            return (
              <figure key={index} className="mt-8">
                <div className="mx-auto w-fit border border-black/10 bg-white p-3 shadow-sm">
                  <Image
                    src={block.src}
                    alt={block.alt}
                    width={block.width}
                    height={block.height}
                    sizes="(max-width: 640px) 90vw, 360px"
                    className="h-auto w-full max-w-[360px] border border-black/10"
                  />
                </div>
                {block.caption && (
                  <figcaption className="mt-3 text-center text-sm leading-7 text-black/55">
                    {block.caption}
                  </figcaption>
                )}
              </figure>
            );

          case "faq":
            return (
              <section key={index} className="mt-12">
                <h2 className="text-2xl uppercase tracking-wide md:text-3xl">
                  {block.heading}
                </h2>
                <dl className="mt-6 divide-y divide-black/10 border-y border-black/10">
                  {block.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="py-5">
                      <dt className="text-lg font-bold">{item.q}</dt>
                      <dd className="mt-2 text-lg leading-8 text-black/85">
                        {item.a}
                      </dd>
                    </div>
                  ))}
                </dl>
              </section>
            );
        }
      })}
    </>
  );
}
