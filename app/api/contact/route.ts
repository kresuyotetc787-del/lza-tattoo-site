import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { firstName, lastName, phone, email, message } = await req.json();

    if (!firstName || !lastName || !phone || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Brak wymaganych danych." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "lezkatattoo@gmail.com",
      subject: "Nowe zgłoszenie ze strony",
      replyTo: email,
      text: `
Nowe zgłoszenie:

Imię: ${firstName}
Nazwisko: ${lastName}
Telefon: ${phone}
E-mail: ${email}

Wiadomość:
${message}
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { ok: false, error: "Nie udało się wysłać wiadomości." },
      { status: 500 }
    );
  }
}