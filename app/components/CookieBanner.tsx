"use client";

import { useState } from "react";

export default function CookieBanner() {
  const [accepted, setAccepted] = useState(false);

  if (accepted) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-black text-white p-4 flex justify-between items-center z-50">
      <p className="text-sm">
        Używamy plików cookies. Zobacz{" "}
        <a href="/polityka-cookies" className="underline">
          politykę cookies
        </a>
      </p>
      <button
        onClick={() => setAccepted(true)}
        className="bg-white text-black px-4 py-2"
      >
        OK
      </button>
    </div>
  );
}