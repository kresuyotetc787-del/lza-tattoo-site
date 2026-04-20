"use client";

import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("cookie-consent");
    if (!saved) setVisible(true);
  }, []);

  const saveConsent = (data: {
    necessary: boolean;
    analytics: boolean;
    marketing: boolean;
  }) => {
    localStorage.setItem("cookie-consent", JSON.stringify(data));
    setVisible(false);
  };

  const acceptAll = () => {
    saveConsent({
      necessary: true,
      analytics: true,
      marketing: true,
    });
  };

  const rejectOptional = () => {
    saveConsent({
      necessary: true,
      analytics: false,
      marketing: false,
    });
  };

  const saveSelected = () => {
    saveConsent({
      necessary: true,
      analytics,
      marketing,
    });
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[100] border-t border-white/10 bg-black/95 text-white shadow-2xl">
      <div className="mx-auto max-w-7xl px-4 py-5 md:px-6">
        {!showSettings ? (
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <h3 className="mb-2 text-lg font-semibold">Używamy plików cookie</h3>
              <p className="text-sm leading-6 text-white/80">
                Używamy plików cookie, aby zapewnić prawidłowe działanie strony,
                analizować ruch oraz ulepszać korzystanie z serwisu. Szczegóły
                znajdziesz w{" "}
                <a
                  href="/polityka-cookies"
                  className="underline underline-offset-2"
                  target="_blank"
                  rel="noreferrer"
                >
                  Polityce cookies
                </a>{" "}
                oraz{" "}
                <a
                  href="/polityka-prywatnosci"
                  className="underline underline-offset-2"
                  target="_blank"
                  rel="noreferrer"
                >
                  Polityce prywatności
                </a>.
              </p>
            </div>

            <div className="flex flex-col gap-3 md:min-w-[320px]">
              <button
                onClick={acceptAll}
                className="bg-white px-6 py-3 text-sm font-medium uppercase tracking-wider text-black transition hover:opacity-90"
              >
                Akceptuj wszystkie
              </button>

              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={rejectOptional}
                  className="border border-white/30 px-4 py-3 text-sm uppercase tracking-wider text-white transition hover:bg-white/10"
                >
                  Odrzuć
                </button>
                <button
                  onClick={() => setShowSettings(true)}
                  className="border border-white/30 px-4 py-3 text-sm uppercase tracking-wider text-white transition hover:bg-white/10"
                >
                  Ustawienia
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-[1.4fr_0.9fr]">
            <div>
              <h3 className="mb-3 text-lg font-semibold">Ustawienia cookies</h3>
              <p className="mb-6 text-sm leading-6 text-white/80">
                Możesz zdecydować, na które kategorie plików cookie wyrażasz
                zgodę. Niezbędne pliki cookie są zawsze aktywne, ponieważ
                odpowiadają za podstawowe działanie strony.
              </p>

              <div className="space-y-4">
                <div className="border border-white/10 p-4">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="font-medium">Niezbędne</p>
                      <p className="text-sm text-white/70">
                        Odpowiadają za podstawowe funkcje strony.
                      </p>
                    </div>
                    <span className="text-sm text-white/60">Zawsze aktywne</span>
                  </div>
                </div>

                <div className="border border-white/10 p-4">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="font-medium">Analityczne</p>
                      <p className="text-sm text-white/70">
                        Pomagają nam analizować ruch i ulepszać stronę.
                      </p>
                    </div>
                    <input
                      type="checkbox"
                      checked={analytics}
                      onChange={(e) => setAnalytics(e.target.checked)}
                      className="h-5 w-5"
                    />
                  </div>
                </div>

                <div className="border border-white/10 p-4">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="font-medium">Marketingowe</p>
                      <p className="text-sm text-white/70">
                        Umożliwiają dopasowanie treści i reklam.
                      </p>
                    </div>
                    <input
                      type="checkbox"
                      checked={marketing}
                      onChange={(e) => setMarketing(e.target.checked)}
                      className="h-5 w-5"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-end gap-3">
              <button
                onClick={saveSelected}
                className="bg-white px-6 py-3 text-sm font-medium uppercase tracking-wider text-black transition hover:opacity-90"
              >
                Zapisz ustawienia
              </button>
              <button
                onClick={acceptAll}
                className="border border-white/30 px-6 py-3 text-sm uppercase tracking-wider text-white transition hover:bg-white/10"
              >
                Akceptuj wszystkie
              </button>
              <button
                onClick={rejectOptional}
                className="border border-white/30 px-6 py-3 text-sm uppercase tracking-wider text-white transition hover:bg-white/10"
              >
                Odrzuć opcjonalne
              </button>
              <button
                onClick={() => setShowSettings(false)}
                className="px-6 py-2 text-sm text-white/70 underline underline-offset-2"
              >
                Wróć
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}