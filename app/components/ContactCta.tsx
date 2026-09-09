import Link from "next/link";

export default function ContactCta({ children }: { children: React.ReactNode }) {
  return (
    <section className="mt-14 border border-black/10 bg-[#f4f1ed] px-6 py-8 md:px-8">
      <div className="text-lg leading-8 text-black/85">{children}</div>

      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href="/#booking"
          className="border border-black bg-[#252b3a] px-6 py-3 text-[11px] uppercase tracking-[0.24em] text-white transition hover:bg-black"
        >
          Formularz kontaktowy
        </Link>
        <a
          href="tel:+48733625594"
          className="border border-black/10 bg-white px-6 py-3 text-[11px] uppercase tracking-[0.24em] shadow-sm transition hover:-translate-y-0.5"
        >
          733 625 594
        </a>
        <a
          href="mailto:lezkatattoo@gmail.com"
          className="border border-black/10 bg-white px-6 py-3 text-[11px] uppercase tracking-[0.24em] shadow-sm transition hover:-translate-y-0.5"
        >
          lezkatattoo@gmail.com
        </a>
      </div>
    </section>
  );
}
