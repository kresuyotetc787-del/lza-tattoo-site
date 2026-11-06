import type { Block, Post } from "../types";

const faqItems = [
  {
    q: "Ile kosztuje mały tatuaż?",
    a: "To zależy od rozmiaru, detali i miejsca na ciele. Opisz pomysł, a podamy orientacyjne widełki - dokładną kwotę ustalisz na konsultacji.",
  },
  {
    q: "Czy cena zależy od koloru?",
    a: "Tak. Wypełnienia kolorowe zazwyczaj wymagają więcej czasu niż czarny kontur, co przekłada się na wycenę.",
  },
  {
    q: "Czy mogę poznać cenę przed wizytą?",
    a: "Tak. Napisz lub zadzwoń, opisz pomysł i dołącz inspiracje. Orientacyjne widełki podajemy po zapoznaniu się z projektem.",
  },
  {
    q: "Czy pierwsza konsultacja jest płatna?",
    a: "Nie. W naszym studiu konsultacje tatuażu są darmowe.",
  },
  {
    q: "Czy cena obejmuje poprawki?",
    a: "To zależy od studia, dlatego zapytaj o zasady poprawek przed rezerwacją.",
  },
];

const body: Block[] = [
  { type: "h2", text: "W skrócie" },
  {
    type: "ul",
    items: [
      "Odpowiedź na pytanie ile kosztuje tatuaż zależy od rozmiaru, poziomu szczegółów, koloru, miejsca na ciele i doświadczenia artysty.",
      "Mały, prosty wzór to zupełnie inny nakład pracy niż duży, wielosesyjny projekt - i to widać w cenie.",
      "Rzetelne studia wyceniają projekt indywidualnie, po rozmowie i obejrzeniu pomysłu.",
      "Zbyt niska cena powinna wzbudzić czujność: chodzi o higienę, jakość i poprawki.",
      "Do kosztu warto doliczyć pielęgnację i ewentualne poprawki.",
      "Najpewniejszą wycenę dostaniesz na konsultacji, zwykle po opisaniu wzoru i miejsca.",
    ],
  },
  { type: "h2", text: "Ile kosztuje tatuaż w praktyce?" },
  {
    type: "p",
    content: [
      "To pytanie zadaje prawie każdy, kto planuje pierwszą wizytę, ale nie da się na nie odpowiedzieć jedną kwotą. Ile kosztuje tatuaż, zależy od tego, jak duży jest wzór, ile w nim detali i ile godzin pracy wymaga. Mała, prosta grafika to zupełnie inny nakład pracy niż realistyczny portret na łydce. Dlatego dobre studia nie wyceniają „z listy”, tylko oceniają konkretny projekt.",
    ],
  },
  {
    type: "p",
    content: [
      "W naszym studiu każdy projekt wyceniamy indywidualnie, a dokładną kwotę poznasz na konsultacji. Szczegóły oferty opisaliśmy na stronie ",
      { text: "tatuaż w Lublinie", href: "/tatuaz-lublin" },
      ".",
    ],
  },
  { type: "h2", text: "Od czego zależy cena tatuażu?" },
  {
    type: "p",
    content: ["Na końcowy koszt wpływa kilka elementów, które warto znać przed wizytą:"],
  },
  {
    type: "ul",
    items: [
      "Rozmiar. Im większa powierzchnia, tym więcej pracy i czasu. To główny czynnik ceny.",
      "Poziom szczegółów. Cienkie linie, gęste cieniowanie i drobne elementy wymagają skupienia i więcej czasu niż prosty kontur.",
      "Kolor. Wypełnienia kolorowe zazwyczaj zajmują więcej czasu niż czarny kontur lub delikatny cień.",
      "Miejsce na ciele. Obszary trudniejsze technicznie, jak żebra, dłonie czy szyja, mogą wymagać więcej czasu i cierpliwości.",
      "Doświadczenie artysty. Osoba z dużym doświadczeniem i rozpoznawalnym stylem zwykle pracuje w wyższych stawkach.",
      "Projekt. Autorski wzór przygotowany od zera to dodatkowa praca projektowa.",
      "Liczba sesji. Duże prace, jak rękaw, powstają etapami i każda sesja jest osobnym kosztem.",
    ],
  },
  { type: "h2", text: "Ile kosztuje tatuaż na ręce?" },
  {
    type: "p",
    content: [
      "To jedno z najczęściej zadawanych pytań, ale odpowiedź zależy od wielkości i stylu. Mały motyw na nadgarstku będzie kosztował znacznie mniej niż wzór od nadgarstka do łokcia, a ten mniej niż pełny ",
      { text: "rękaw", href: "/tatuaz-rekaw-lublin" },
      ". Sprawdź, czy chcesz małą grafikę, czy rozbudowaną kompozycję. Przy większych projektach studio zwykle ustala cenę za całość lub za sesję, nie „za centymetr”.",
    ],
  },
  { type: "h2", text: "Jak uniknąć niespodzianek przy wycenie?" },
  {
    type: "ul",
    items: [
      "Opisz pomysł dokładnie. Dołącz inspiracje, rozmiar i miejsce na ciele.",
      "Zapytaj, co obejmuje cena. Czy w niej jest projekt, poprawka po zagojeniu i materiały do pielęgnacji?",
      "Ustal liczbę sesji. Przy dużych wzorach cena bywa rozłożona na etapy.",
      "Zapytaj o zadatek i zasady przełożenia terminu. Wiele studiów pobiera zadatek na rezerwację terminu.",
      "Nie negocjuj kosztem jakości. Podejrzanie niska wycena skomplikowanego wzoru to sygnał ostrzegawczy.",
    ],
  },
  { type: "h2", text: "Czy warto oszczędzać na tatuażu?" },
  {
    type: "p",
    content: [
      "Tatuaż zostaje z Tobą na lata, więc oszczędność na wykonaniu zwykle kończy się kosztowną poprawką albo przykryciem. Niska cena często oznacza pośpiech, gorsze materiały albo brak wywiadu zdrowotnego. Lepiej poczekać, uzbierać kwotę na sprawdzonego artystę i wybrać mniejszy wzór niż zdecydować się na duży, ale niepewnej jakości. Przy wyborze miejsca pomoże też wiedza o ",
      { text: "przeciwwskazaniach do tatuażu", post: "przeciwwskazania-do-tatuazu" },
      ".",
    ],
  },
  { type: "h2", text: "Dodatkowe koszty po tatuażu" },
  {
    type: "p",
    content: [
      "Do ceny sesji dolicz pielęgnację: preparaty do mycia i nawilżania oraz folię lub plaster ochronny, jeśli studio je zaleca. Warto też zaplanować ewentualną poprawkę po zagojeniu, bo niektóre wzory wymagają odświeżenia. Jak dbać o tatuaż po sesji, opisujemy w artykule ",
      { text: "jak dbać o świeży tatuaż", post: "pielegnacja-tatuazu" },
      ".",
    ],
  },
  { type: "h2", text: "Poprawki, cover-up i usuwanie - ile to kosztuje?" },
  {
    type: "p",
    content: [
      "Wycena nie dotyczy tylko nowych wzorów. Odświeżenie koloru lub konturu, przykrycie starego tatuażu nowym projektem (tzw. cover-up) i poprawki po latach rządzą się własnymi regułami. Cover-up zwykle wymaga większego wzoru niż oryginał, aby dobrze zamaskować dawny rysunek, dlatego bywa droższy niż nowy tatuaż w tym samym miejscu. O tym, czy przykrycie jest możliwe, decyduje artysta po obejrzeniu starego wzoru.",
    ],
  },
  {
    type: "p",
    content: [
      "Warto też wiedzieć, że usunięcie tatuażu jest trudniejsze i droższe niż jego wykonanie, a zwykle wymaga kilku sesji. To dodatkowy argument, żeby wybierać wzór i wykonawcę świadomie.",
    ],
  },
  { type: "h2", text: "Jak zaplanować budżet na tatuaż?" },
  {
    type: "p",
    content: [
      "Jeśli masz ograniczony budżet, możesz rozłożyć projekt w czasie albo zacząć od mniejszej części, którą później rozbudujesz. W przypadku dużych prac, takich jak rękaw, to typowe podejście: kolejne sesje dzielą wydatek na miesiące. Zostaw też zapas na pielęgnację i ewentualną poprawkę. Dobrym pomysłem jest zebranie kilku wycen, ale porównuj je rozsądnie: patrz na portfolio i higienę, nie tylko na kwotę. Wzór, który wygląda świetnie za rok i za dziesięć lat, jest wart więcej niż najtańsza opcja.",
    ],
  },
  { type: "h2", text: "Jak wygląda wycena w naszym studiu?" },
  {
    type: "p",
    content: [
      "Zaczynamy od rozmowy. Prosimy o opis pomysłu, miejsce na ciele, orientacyjny rozmiar i inspiracje. Na tej podstawie dobieramy artystę i przedstawiamy widełki cenowe, które doprecyzowujemy po zatwierdzeniu projektu. Takie podejście pozwala uniknąć zaskoczeń i dopasować wzór do Twojego budżetu, bo często wystarczy drobna zmiana rozmiaru lub poziomu detali, by koszt był niższy. Pomysł opiszesz w ",
      { text: "formularzu kontaktowym", href: "/rezerwacja-kontakt#formularz" },
      ".",
    ],
  },
  { type: "faq", heading: "FAQ - koszt tatuażu", items: faqItems },
  { type: "h2", text: "Podsumowanie" },
  {
    type: "p",
    content: [
      "Pytanie ile kosztuje tatuaż nie ma jednej odpowiedzi, ale znajomość czynników wpływających na cenę pozwala zaplanować budżet. Najlepszy sposób na konkretną kwotę to rozmowa z tatuażystą. Zadzwoń pod numer 733 625 594 lub opisz pomysł w wiadomości, a przygotujemy wycenę dla Twojego projektu.",
    ],
  },
];

const post: Post = {
  slug: "ile-kosztuje-tatuaz",
  title: "Ile kosztuje tatuaż? Od czego zależy cena tatuażu",
  metaTitle: "Ile kosztuje tatuaż? Od czego zależy cena | Łza Tattoo",
  metaDescription:
    "Ile kosztuje tatuaż? Sprawdź, od czego zależy cena tatuażu, ile kosztuje tatuaż na ręce, jak wygląda wycena i jak uniknąć niespodzianek.",
  keywords: [
    "ile kosztuje tatuaż",
    "koszt tatuażu",
    "cena tatuażu",
    "ile kosztuje tatuaż w lublinie",
    "ile kosztuje tatuaż na ręce",
    "wycena tatuażu",
  ],
  excerpt:
    "Od czego zależy cena tatuażu, ile kosztuje tatuaż na ręce, jak uniknąć niespodzianek przy wycenie i jak zaplanować budżet.",
  publishedAt: "2026-11-09",
  body,
};

export default post;
