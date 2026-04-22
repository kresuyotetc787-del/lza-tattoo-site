import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { firstName, lastName, phone, email, message } = await req.json();

    if (!firstName || !lastName || !phone || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Brak danych" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "lezkatattoo@gmail.com",
      subject: "Nowe zgłoszenie",
      replyTo: email,
      text: `Imię: ${firstName}
Nazwisko: ${lastName}
Telefon: ${phone}
Email: ${email}

Wiadomość:
${message}`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { ok: false, error: "Błąd serwera" },
      { status: 500 }
    );
  }
}