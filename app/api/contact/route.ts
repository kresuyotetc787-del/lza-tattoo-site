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

    const result = await resend.emails.send({
      from: "kontakt@lzatattoo.pl",
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

    console.log("RESEND RESULT:", result);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("RESEND ERROR:", err);

    return NextResponse.json(
      { ok: false, error: String(err) },
      { status: 500 }
    );
  }
}