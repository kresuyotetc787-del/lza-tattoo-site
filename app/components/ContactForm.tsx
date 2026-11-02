"use client";

/**
 * Formularz kontaktowy (wysyłka przez /api/contact). Wydzielony do osobnego
 * komponentu klienckiego, żeby strona główna i /rezerwacja-kontakt mogły
 * być komponentami serwerowymi z własnymi metadanymi (canonical, title).
 */
export default function ContactForm() {
  return (
    <form
      className="grid gap-4"
      onSubmit={async (e) => {
        e.preventDefault();

        const form = e.currentTarget as HTMLFormElement & {
          firstName: { value: string };
          lastName: { value: string };
          phone: { value: string };
          email: { value: string };
          message: { value: string };
          privacyConsent: { checked: boolean };
        };

        const firstName = form.firstName.value.trim();
        const lastName = form.lastName.value.trim();
        const phone = form.phone.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();
        const privacyConsent = form.privacyConsent.checked;

        if (!privacyConsent) {
          alert("Zaznacz zgodę na przetwarzanie danych.");
          return;
        }

        try {
          const res = await fetch("/api/contact", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              firstName,
              lastName,
              phone,
              email,
              message,
            }),
          });

          const result = await res.json();

          if (result.ok) {
            alert("Wiadomość została wysłana.");
            form.reset();
          } else {
            alert(result.error || "Błąd podczas wysyłania wiadomości.");
          }
        } catch (error) {
          alert("Błąd połączenia z serwerem.");
          console.error(error);
        }
      }}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <input
          name="firstName"
          aria-label="Imię"
          className="border border-black/10 bg-white px-4 py-3 outline-none placeholder:text-black/35"
          placeholder="Imię"
          required
        />
        <input
          name="lastName"
          aria-label="Nazwisko"
          className="border border-black/10 bg-white px-4 py-3 outline-none placeholder:text-black/35"
          placeholder="Nazwisko"
          required
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <input
          name="phone"
          type="tel"
          aria-label="Telefon"
          className="border border-black/10 bg-white px-4 py-3 outline-none placeholder:text-black/35"
          placeholder="Telefon"
          required
        />
        <input
          name="email"
          type="email"
          aria-label="Adres e-mail"
          className="border border-black/10 bg-white px-4 py-3 outline-none placeholder:text-black/35"
          placeholder="Adres e-mail"
          required
        />
      </div>

      <textarea
        name="message"
        aria-label="Wiadomość"
        className="min-h-[160px] border border-black/10 bg-white px-4 py-3 outline-none placeholder:text-black/35"
        placeholder="Wiadomość"
        required
      />

      <div className="mt-1 bg-[#252b3a] px-6 py-6 text-white">
        <div className="space-y-4">
          <label className="flex items-start gap-3 text-sm leading-6 text-white">
            <input
              type="checkbox"
              name="privacyConsent"
              className="mt-1 h-4 w-4 rounded border-white text-neutral-900 focus:ring-neutral-900"
              required
            />
            <span>
              Zapoznałem/am się z{" "}
              <a
                href="/polityka-prywatnosci"
                className="underline underline-offset-2 hover:opacity-70"
                target="_blank"
                rel="noreferrer"
              >
                Polityką prywatności
              </a>{" "}
              i wyrażam zgodę na przetwarzanie moich danych osobowych w celu
              obsługi zapytania przesłanego przez formularz kontaktowy.
            </span>
          </label>

          <p className="text-xs leading-5 text-white/70">
            Administratorem danych jest ŁZA TATTOO & PIERCING. Dane podane w
            formularzu będą przetwarzane wyłącznie w celu odpowiedzi na
            wiadomość i kontaktu w sprawie rezerwacji lub zapytania.
          </p>
        </div>

        <button
          type="submit"
          className="mt-6 w-full border border-white/20 bg-transparent px-6 py-4 text-center text-sm uppercase tracking-[0.24em] text-white transition hover:bg-white hover:text-[#252b3a]"
        >
          Wyślij zgłoszenie
        </button>
      </div>
    </form>
  );
}
