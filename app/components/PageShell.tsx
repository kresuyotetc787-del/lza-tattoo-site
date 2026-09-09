import Link from "next/link";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

export default function PageShell({
  title,
  lead,
  breadcrumb,
  children,
}: {
  title: string;
  lead?: string;
  breadcrumb?: { href: string; label: string };
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#e8e5e1] text-black font-serif">
      <SiteHeader />

      <main className="mx-auto max-w-3xl px-4 pb-16 pt-8 lg:px-8 lg:pb-24">
        {breadcrumb && (
          <Link
            href={breadcrumb.href}
            className="text-[11px] uppercase tracking-[0.24em] text-black/45 hover:opacity-60"
          >
            ← {breadcrumb.label}
          </Link>
        )}

        <h1 className="mt-6 text-3xl uppercase leading-tight tracking-wide md:text-5xl">
          {title}
        </h1>

        {lead && (
          <p className="mt-6 text-xl leading-9 text-black/70 md:text-2xl">
            {lead}
          </p>
        )}

        <div className="mt-10 border-t border-black/10 pt-2">{children}</div>
      </main>

      <SiteFooter />
    </div>
  );
}
