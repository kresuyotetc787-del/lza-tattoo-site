"use client";

import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("cookie-consent");
    if (!saved) setVisible(true);
  }, []);

  const acceptAll = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const rejectAll = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-black text-white">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-8 px-10 py-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-4xl">
          <h3 className="mb-4 text-2xl font-semibold">
            Używamy plików cookie
          </h3>

          <p className="text-lg leading-8 text-white/85">
            Używamy plików cookie, aby zapewnić prawidłowe działanie strony,
            analizować ruch oraz ulepszać korzystanie z serwisu.
          </p>

          <p className="mt-2 text-lg leading-8 text-white/85">
            Szczegóły znajdziesz w{" "}
            <a
              href="/polityka-cookies"
              className="underline underline-offset-4 hover:text-white"
            >
              Polityce cookies
            </a>{" "}
            oraz{" "}
            <a
              href="/polityka-prywatnosci"
              className="underline underline-offset-4 hover:text-white"
            >
              Polityce prywatności
            </a>
            .
          </p>
        </div>

        <div className="flex min-w-[420px] flex-col gap-4">
          <button
            type="button"
            onClick={acceptAll}
            className="w-full bg-white px-8 py-5 text-sm font-semibold uppercase tracking-[0.18em] text-black transition hover:opacity-90"
          >
            Akceptuj wszystkie
          </button>

          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              onClick={rejectAll}
              className="w-full border border-white/40 bg-black px-8 py-5 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:border-white"
            >
              Odrzuć
            </button>

            <a
              href="/polityka-cookies"
              className="flex w-full items-center justify-center border border-white/40 bg-black px-8 py-5 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:border-white"
            >
              Ustawienia
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}