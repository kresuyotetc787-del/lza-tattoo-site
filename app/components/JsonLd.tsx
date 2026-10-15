import { BOOKSY_URL } from "../lib/booksy";

export const SITE_URL = "https://lzatattoo.pl";

export const studioSchema = {
  "@type": "TattooParlor",
  "@id": `${SITE_URL}/#studio`,
  name: "ŁZA TATTOO & PIERCING",
  url: SITE_URL,
  telephone: "+48733625594",
  email: "lezkatattoo@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "ul. Prezydenta Gabriela Narutowicza 22",
    addressLocality: "Lublin",
    postalCode: "20-004",
    addressCountry: "PL",
  },
  areaServed: "Lublin",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "15:00",
    },
  ],
  sameAs: [
    "https://www.instagram.com/lezkatattoo",
    "https://www.facebook.com/share/18T3hTypmi/",
    BOOKSY_URL,
  ],
  // Rezerwacje piercingu przyjmujemy w Booksy - dla Google to sygnał,
  // gdzie klient może umówić wizytę.
  potentialAction: {
    "@type": "ReserveAction",
    name: "Rezerwacja piercingu online",
    target: {
      "@type": "EntryPoint",
      urlTemplate: BOOKSY_URL,
      inLanguage: "pl-PL",
      actionPlatform: [
        "https://schema.org/DesktopWebPlatform",
        "https://schema.org/MobileWebPlatform",
      ],
    },
    result: { "@type": "Reservation", name: "Termin na piercing" },
  },
};

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export default function JsonLd({ data }: { data: object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ "@context": "https://schema.org", "@graph": data }),
      }}
    />
  );
}
