import { SHOW_TODOS } from "../lib/do-uzupelnienia";

/**
 * Znacznik brakującej treści. Widoczny tylko lokalnie i na podglądzie Vercel -
 * na produkcji nie renderuje niczego. Lista pól: app/lib/do-uzupelnienia.ts.
 */
export default function DoUzupelnienia({ children }: { children: React.ReactNode }) {
  if (!SHOW_TODOS) return null;

  return (
    <div
      role="note"
      className="mt-5 border-2 border-dashed border-amber-500 bg-amber-100 px-4 py-3 font-sans text-sm leading-6 text-amber-950"
    >
      <strong className="mr-1 uppercase tracking-wide">Do uzupełnienia:</strong>
      {children}
    </div>
  );
}
