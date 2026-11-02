/**
 * CENNIK PIERCINGU - przepisany z profilu studia w Booksy.
 *
 * Booksy pozostaje źródłem prawdy (tam klient płaci i rezerwuje). Po każdej
 * zmianie cen w Booksy zaktualizuj tę listę i datę poniżej, żeby strona
 * nie pokazywała nieaktualnych kwot.
 */
export const CENNIK_AKTUALIZACJA = "2026-11-02";

export type PriceItem = {
  name: string;
  /** Cena w zł. */
  price: number;
  /** true = cena „od” (zależy od biżuterii lub liczby przekłuć). */
  from?: boolean;
  note?: string;
};

export type PriceGroup = { id: string; title: string; items: PriceItem[] };

export const CENNIK_PIERCINGU: PriceGroup[] = [
  {
    id: "ucho",
    title: "Ucho",
    items: [
      { name: "Płatek ucha (lobe)", price: 120, note: "od 14 lat" },
      { name: "Przekłucie dwóch płatków", price: 200, note: "od 14 lat" },
      { name: "Upper lobe", price: 120, note: "od 14 lat" },
      { name: "Stacked lobe", price: 150, note: "od 14 lat" },
      { name: "Helix", price: 140, note: "od 16 lat" },
      { name: "Forward helix", price: 150, note: "od 16 lat" },
      { name: "Hidden helix", price: 150, note: "od 16 lat" },
      { name: "Vertical helix", price: 150, note: "od 16 lat" },
      { name: "Flat", price: 140, note: "od 16 lat" },
      { name: "Tragus", price: 150, note: "od 16 lat" },
      { name: "Antitragus", price: 160, note: "od 16 lat" },
      { name: "Snug", price: 160, note: "od 16 lat" },
      { name: "Rook", price: 150, note: "od 16 lat" },
      { name: "Faux rook", price: 150, note: "od 16 lat" },
      { name: "Daith", price: 160, note: "od 16 lat" },
      { name: "Conch", price: 150, note: "od 16 lat" },
      { name: "Outer conch", price: 150, note: "od 16 lat" },
      { name: "Industrial", price: 180, note: "od 16 lat" },
      { name: "Double helix", price: 250 },
      { name: "Helix + upper lobe", price: 240 },
      { name: "2x upper lobe", price: 200 },
      { name: "3x lobe / upper lobe", price: 280 },
      { name: "4x upper lobe", price: 350 },
      { name: "2x upper lobe / 2x lobe + helix", price: 300 },
      { name: "2 przekłucia w chrząstce", price: 280, from: true },
      { name: "3 przekłucia w chrząstce", price: 350, from: true },
      { name: "Tunele", price: 300, note: "od 18 lat" },
    ],
  },
  {
    id: "nos",
    title: "Nos",
    items: [
      { name: "Nostril (skrzydełko nosa)", price: 140, note: "od 16 lat" },
      { name: "Double nostril", price: 250, note: "od 16 lat" },
      { name: "Septum", price: 180, note: "od 16 lat" },
      { name: "Bridge", price: 180, note: "od 16 lat" },
      { name: "Mantis", price: 300, note: "od 18 lat" },
    ],
  },
  {
    id: "usta",
    title: "Usta i język",
    items: [
      { name: "Język", price: 180, note: "od 16 lat" },
      { name: "Labret", price: 150, note: "od 16 lat" },
      { name: "Side labret", price: 150, note: "od 16 lat" },
      { name: "Vertical labret", price: 160, note: "od 16 lat" },
      { name: "Medusa", price: 150, note: "od 16 lat" },
      { name: "Madonna", price: 150, note: "od 16 lat" },
      { name: "Ashley", price: 150, note: "od 16 lat" },
      { name: "Jestrum", price: 150, note: "od 16 lat" },
      { name: "Snake bites", price: 250, note: "od 16 lat" },
      { name: "Cyber bites", price: 250, note: "od 16 lat" },
      { name: "Spider bites", price: 250 },
      { name: "Angel fangs", price: 300, note: "od 16 lat" },
    ],
  },
  {
    id: "pepek",
    title: "Pępek",
    items: [
      { name: "Przekłucie pępka", price: 180, note: "od 16 lat" },
      { name: "Inverse navel (dolny pępek)", price: 180, note: "od 16 lat" },
    ],
  },
  {
    id: "brwi",
    title: "Brwi",
    items: [
      { name: "Brew", price: 150, note: "od 16 lat" },
      { name: "Symetryczne brwi (2x brew)", price: 260, note: "od 16 lat" },
    ],
  },
  {
    id: "sutki",
    title: "Sutki",
    items: [
      { name: "Sutek", price: 180, note: "od 18 lat" },
      { name: "Sutki (para)", price: 300, note: "od 18 lat" },
    ],
  },
  {
    id: "intymne",
    title: "Piercing intymny damski",
    items: [
      { name: "Christina", price: 300, note: "od 18 lat" },
      { name: "Vertical clitoral hood (VCH)", price: 300, note: "od 18 lat" },
      { name: "Horizontal clitoral hood (HCH)", price: 300, note: "od 18 lat" },
      { name: "Inner labia", price: 300, note: "od 18 lat" },
      { name: "Outer labia", price: 300, note: "od 18 lat" },
    ],
  },
  {
    id: "inne",
    title: "Pozostałe",
    items: [
      { name: "Przekłucie spoza cennika", price: 100, from: true },
      { name: "Konsultacja piercingowa", price: 80 },
      { name: "Usunięcie microdermala", price: 50 },
    ],
  },
];

/** Najczęściej wybierane - skrót do podstron usług. */
export const POPULARNE_PRZEKLUCIA: PriceItem[] = [
  { name: "Płatek ucha", price: 120 },
  { name: "Helix", price: 140 },
  { name: "Tragus", price: 150 },
  { name: "Daith", price: 160 },
  { name: "Nostril (nos)", price: 140 },
  { name: "Septum", price: 180 },
  { name: "Przekłucie pępka", price: 180 },
  { name: "Język", price: 180 },
  { name: "Brew", price: 150 },
];

export function formatPrice(item: PriceItem): string {
  return `${item.from ? "od " : ""}${item.price} zł`;
}

/**
 * Opinie z profilu Booksy - liczby przepisane ręcznie. Aktualizuj razem
 * z cennikiem. Celowo NIE wstawiamy ich do schema (AggregateRating) -
 * Google nie pokazuje gwiazdek dla opinii publikowanych przez firmę o sobie.
 */
export const OPINIE_BOOKSY = { rating: "5,0", count: 1112, asOf: "listopad 2026" };
