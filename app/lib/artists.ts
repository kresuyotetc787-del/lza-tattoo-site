/**
 * Zespół studia. Jedno źródło dla strony głównej, /artysci i galerii na
 * podstronach usług.
 *
 * DO UZUPEŁNIENIA PRZEZ STUDIO: `name` (imię artysty) i `bio` (doświadczenie,
 * od kiedy tatuuje/przekłuwa). Na razie są tylko nicki z Instagrama - imiona
 * i doświadczenie to dla Google ważny sygnał wiarygodności (E-E-A-T).
 * Style w `styles` opisaliśmy na podstawie prac widocznych w portfolio.
 */

export type Work = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Kadrowanie w kwadratowej miniaturze (object-position). */
  position?: string;
};

export type Artist = {
  handle: string;
  displayName: string;
  /** Imię - uzupełnić, gdy studio poda. */
  name?: string;
  role: "Tatuażysta" | "Tatuażystka" | "Piercer" | "Piercerka";
  styles: string[];
  bio?: string;
  photo: { src: string; alt: string; width: number; height: number; position?: string };
  works: Work[];
  booksy?: boolean;
};

const STUDIO = "Łza Tattoo Lublin";

export const ARTISTS: Artist[] = [
  {
    handle: "piercinglbn",
    displayName: "Piercing LBN",
    role: "Piercer",
    styles: ["piercing uszu", "piercing nosa", "industrial", "piercing chrząstki"],
    photo: {
      src: "/images/artists/piercinglbn.jpg",
      alt: `Piercer Piercing LBN podczas przekłuwania w studiu ${STUDIO}`,
      width: 1058,
      height: 1160,
      position: "top",
    },
    works: [
      {
        src: "/images/works/piercinglbn-1.jpg",
        alt: `Podwójny piercing nostril - dwa kółka w nosie, Piercing LBN, ${STUDIO}`,
        width: 960,
        height: 1280,
      },
      {
        src: "/images/works/piercinglbn-2.jpg",
        alt: `Trzy kolczyki w helixie i kółko w płatku ucha - piercing ucha, ${STUDIO}`,
        width: 960,
        height: 1280,
        position: "center 90%",
      },
      {
        src: "/images/works/piercinglbn-3.jpg",
        alt: `Piercing industrial i kółko w płatku ucha - Piercing LBN, ${STUDIO}`,
        width: 960,
        height: 1280,
      },
    ],
    booksy: true,
  },
  {
    handle: "ilotattoo",
    displayName: "ilotattoo",
    role: "Tatuażystka",
    styles: ["kolorowy realizm", "postacie z komiksów i kreskówek", "watercolor"],
    photo: {
      src: "/images/artists/ilotattoo.jpg",
      alt: `Tatuażystka ilotattoo przy pracy w studiu ${STUDIO}`,
      width: 933,
      height: 1280,
      position: "center 20%",
    },
    works: [
      {
        src: "/images/works/ilotattoo-1.jpg",
        alt: `Kolorowy realistyczny tatuaż Batmana z logo Supermana na przedramieniu - ilotattoo, ${STUDIO}`,
        width: 1121,
        height: 1280,
      },
      {
        src: "/images/works/ilotattoo-2.jpg",
        alt: `Kolorowy tatuaż kowboja z kreskówki na ramieniu - ilotattoo, ${STUDIO}`,
        width: 1024,
        height: 1280,
        position: "center 40%",
      },
      {
        src: "/images/works/ilotattoo-3.jpg",
        alt: `Tatuaż ważki w stylu watercolor na przedramieniu - ilotattoo, ${STUDIO}`,
        width: 1024,
        height: 1280,
      },
    ],
  },
  {
    handle: "blackbirddotwork",
    displayName: "blackbirddotwork",
    role: "Tatuażystka",
    styles: ["dotwork", "motywy botaniczne", "fine line"],
    photo: {
      src: "/images/artists/blackbirddotwork.jpg",
      alt: `Tatuażystka blackbirddotwork w wianku z kwiatów, ${STUDIO}`,
      width: 959,
      height: 1280,
    },
    works: [
      {
        src: "/images/works/blackbirddotwork-1.jpg",
        alt: `Kwiatowy tatuaż dotwork z piwoniami na ramieniu - blackbirddotwork, ${STUDIO}`,
        width: 960,
        height: 1280,
      },
      {
        src: "/images/works/blackbirddotwork-2.jpg",
        alt: `Tatuaż polnych kwiatów w stylu dotwork na ramieniu - blackbirddotwork, ${STUDIO}`,
        width: 960,
        height: 1280,
      },
      {
        src: "/images/works/blackbirddotwork-3.jpg",
        alt: `Botaniczny tatuaż krwawnika i paproci na ramieniu - blackbirddotwork, ${STUDIO}`,
        width: 960,
        height: 1280,
      },
    ],
  },
  {
    handle: "demonology_ink",
    displayName: "demonology_ink",
    role: "Tatuażysta",
    styles: ["black & grey", "realizm", "portrety"],
    photo: {
      src: "/images/artists/demonology_ink.jpg",
      alt: `Tatuażysta demonology_ink, ${STUDIO}`,
      width: 1036,
      height: 1280,
      position: "center 60%",
    },
    works: [
      {
        src: "/images/works/demonology_ink-1.jpg",
        alt: `Czarno-szare tatuaże kobiecych twarzy z liliami na obu przedramionach - demonology_ink, ${STUDIO}`,
        width: 857,
        height: 1280,
      },
      {
        src: "/images/works/demonology_ink-2.jpg",
        alt: `Realistyczne portrety Ozzy'ego Osbourne'a na przedramionach, black & grey - demonology_ink, ${STUDIO}`,
        width: 914,
        height: 1280,
      },
      {
        src: "/images/works/demonology_ink-3.jpg",
        alt: `Tatuaż zegarka kieszonkowego z liną i kotwicą na ramieniu - demonology_ink, ${STUDIO}`,
        width: 789,
        height: 1280,
      },
    ],
  },
  {
    handle: "maxovod",
    displayName: "maxovod",
    role: "Tatuażysta",
    styles: ["dark realizm", "black & grey", "duże projekty - rękawy i plecy"],
    photo: {
      src: "/images/artists/maxovod.jpg",
      alt: `Tatuażysta maxovod podczas tatuowania w studiu ${STUDIO}`,
      width: 694,
      height: 597,
    },
    works: [
      {
        src: "/images/works/maxovod-1.jpg",
        alt: `Rękaw w stylu dark realizm z czaszką, black & grey - maxovod, ${STUDIO}`,
        width: 1024,
        height: 1280,
      },
      {
        src: "/images/works/maxovod-2.jpg",
        alt: `Tatuaż na całe plecy z kwiatami i zwierzętami, black & grey - maxovod, ${STUDIO}`,
        width: 1163,
        height: 1280,
      },
      {
        src: "/images/works/maxovod-3.jpg",
        alt: `Tatuaż wikinga i czaszki na ramieniu, black & grey - maxovod, ${STUDIO}`,
        width: 1081,
        height: 1280,
      },
    ],
  },
  {
    handle: "dziurkikarolki",
    displayName: "dziurkikarolki",
    role: "Piercerka",
    styles: ["kompozycje kolczyków w uchu", "industrial", "piercing chrząstki"],
    photo: {
      src: "/images/artists/dziurkikarolki.jpg",
      alt: `Piercerka dziurkikarolki z narzędziami do piercingu, ${STUDIO}`,
      width: 960,
      height: 1280,
      position: "center 80%",
    },
    works: [
      {
        src: "/images/works/dziurkikarolki-1.jpg",
        alt: `Piercing industrial z dodatkowymi kolczykami w helixie - dziurkikarolki, ${STUDIO}`,
        width: 1280,
        height: 1280,
      },
      {
        src: "/images/works/dziurkikarolki-2.jpg",
        alt: `Kompozycja kolczyków w uchu - conch, helix i płatek - dziurkikarolki, ${STUDIO}`,
        width: 1280,
        height: 1280,
      },
      {
        src: "/images/works/dziurkikarolki-3.jpg",
        alt: `Kółka w conchu i kolczyki w płatku ucha - dziurkikarolki, ${STUDIO}`,
        width: 1280,
        height: 1280,
      },
    ],
    booksy: true,
  },
  {
    handle: "inked.by.luvlom",
    displayName: "inked.by.luvlom",
    role: "Tatuażystka",
    styles: ["blackwork", "fine line", "liternictwo"],
    photo: {
      src: "/images/artists/inked.by.luvlom.jpg",
      alt: `Tatuażystka inked.by.luvlom z maszynką do tatuażu, ${STUDIO}`,
      width: 853,
      height: 1280,
    },
    works: [
      {
        src: "/images/works/inked.by.luvlom-1.jpg",
        alt: `Tatuaż czaszki barana na biodrze w stylu blackwork - inked.by.luvlom, ${STUDIO}`,
        width: 1024,
        height: 1280,
      },
      {
        src: "/images/works/inked.by.luvlom-2.jpg",
        alt: `Drobne tatuaże fine line - księżyc i gwiazdy na ramieniu - inked.by.luvlom, ${STUDIO}`,
        width: 960,
        height: 1280,
      },
      {
        src: "/images/works/inked.by.luvlom-3.jpg",
        alt: `Tatuaż na plecach z napisem Ascendant, bambusem i ptakami - inked.by.luvlom, ${STUDIO}`,
        width: 1024,
        height: 1280,
      },
    ],
  },
];

function work(handle: string, index: number): Work {
  const artist = ARTISTS.find((a) => a.handle === handle);
  if (!artist) throw new Error(`Nieznany artysta: ${handle}`);
  return artist.works[index];
}

/** Wybrane prace do galerii na podstronach usług. */
export const GALLERY = {
  tatuaz: [
    work("ilotattoo", 0),
    work("blackbirddotwork", 0),
    work("demonology_ink", 1),
    work("maxovod", 2),
    work("inked.by.luvlom", 0),
    work("ilotattoo", 2),
  ],
  rekaw: [
    work("maxovod", 0),
    work("ilotattoo", 0),
    work("demonology_ink", 0),
  ],
  piercing: [
    work("piercinglbn", 1),
    work("piercinglbn", 0),
    work("dziurkikarolki", 0),
    work("dziurkikarolki", 1),
    work("piercinglbn", 2),
    work("dziurkikarolki", 2),
  ],
  uszy: [
    work("dziurkikarolki", 1),
    work("piercinglbn", 1),
    work("dziurkikarolki", 2),
  ],
};
