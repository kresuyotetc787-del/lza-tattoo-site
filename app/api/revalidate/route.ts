import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

/**
 * Endpoint odświeżający cache stron, na których pojawiają się wpisy bloga.
 *
 * Wywołuje go Vercel Cron wg harmonogramu z vercel.json (codziennie tuż po
 * północy UTC, czyli zaraz po tym, jak zaplanowany wpis wchodzi w swoją datę
 * publikacji). Dzięki temu wpis, mapa strony i odnośniki na podstronach
 * ofertowych aktualizują się od razu, a nie dopiero przy najbliższym
 * odświeżeniu ISR (`revalidate = 3600`).
 *
 * Zabezpieczenie: Vercel dokłada nagłówek `Authorization: Bearer <CRON_SECRET>`,
 * jeśli zmienna środowiskowa CRON_SECRET jest ustawiona w projekcie.
 * Bez niej endpoint nie zrobi nic.
 */

// Ścieżki zależne od tego, które wpisy są już opublikowane.
const PATHS = ["/blog", "/tatuaz-lublin", "/piercing-lublin", "/sitemap.xml"];

export async function GET(request: Request) {
  const secret = process.env.CRON_SECRET;

  if (!secret) {
    return NextResponse.json(
      { ok: false, error: "CRON_SECRET is missing" },
      { status: 500 }
    );
  }

  if (request.headers.get("authorization") !== `Bearer ${secret}`) {
    return NextResponse.json(
      { ok: false, error: "Unauthorized" },
      { status: 401 }
    );
  }

  for (const path of PATHS) {
    revalidatePath(path);
  }

  // Wszystkie wpisy naraz - inaczej trzeba by wymieniać każdy slug osobno.
  revalidatePath("/blog/[slug]", "page");

  return NextResponse.json({
    ok: true,
    revalidated: [...PATHS, "/blog/[slug]"],
    now: new Date().toISOString(),
  });
}
