"use client";

import { useState } from "react";
import Link from "next/link";

// Kontur woj. lubelskiego w układzie viewBox 1000 x 1286 (dane GUS/OSM,
// uproszczone i zrzutowane raz na sztywno - dzięki temu mapa nie potrzebuje
// żadnej zewnętrznej biblioteki ani klucza API.)
const REGION_PATH = "M108.5 227.0L99.2 217.5L104.7 200.1L121.0 193.9L125.9 186.1L139.7 188.6L151.0 174.2L164.5 168.0L197.2 180.8L206.7 177.5L212.0 163.9L252.2 179.0L265.0 169.5L269.5 158.2L279.5 158.5L276.8 173.0L288.1 184.3L302.3 171.3L323.3 170.7L332.2 163.1L343.0 139.3L351.7 137.6L368.3 153.7L392.4 158.4L398.1 170.0L402.4 162.2L413.3 158.7L415.4 131.6L408.1 124.6L428.1 107.6L429.0 114.2L452.7 124.2L461.6 138.5L480.3 130.4L487.8 140.4L494.1 136.1L494.2 141.4L508.5 141.7L510.6 133.2L502.7 123.7L504.9 117.4L518.7 111.3L527.4 117.2L534.6 108.9L520.7 95.6L541.6 81.4L538.1 73.0L560.9 69.1L575.4 74.2L562.9 65.6L559.5 45.0L578.0 33.4L597.6 0.0L627.8 7.1L628.4 19.3L623.9 30.5L627.7 38.7L652.9 46.0L667.9 41.9L665.4 48.1L691.8 50.4L694.7 58.2L703.8 55.1L704.8 68.9L711.6 66.6L715.1 72.8L728.3 65.2L731.8 71.8L745.2 68.8L747.7 71.9L742.0 71.1L739.6 85.1L748.6 86.9L750.4 95.1L761.3 100.6L764.2 112.4L776.5 106.1L791.6 113.2L788.9 119.8L805.6 136.3L801.7 140.2L806.2 144.1L801.0 144.1L809.1 156.6L806.9 170.0L819.5 186.9L810.1 195.1L811.7 204.1L795.6 212.1L800.3 213.6L802.4 223.2L789.1 233.1L791.6 242.8L799.3 249.4L793.1 254.5L796.3 261.8L786.9 260.4L791.2 272.7L784.3 282.5L788.0 283.7L785.4 289.0L792.8 288.7L800.2 305.1L796.5 320.6L783.1 325.7L779.5 333.7L768.1 332.4L757.0 343.8L755.4 352.5L763.5 354.5L763.5 364.9L766.7 366.8L763.9 368.6L768.6 372.3L764.1 381.0L767.9 393.0L760.3 398.6L759.6 406.3L764.0 408.6L760.3 413.1L763.1 420.6L760.7 433.3L775.5 461.1L770.5 466.0L770.5 475.9L789.4 479.4L794.1 488.5L791.1 491.2L792.2 499.9L812.1 508.7L814.4 516.0L802.9 523.2L803.8 531.6L818.2 532.6L815.0 542.5L824.9 548.7L821.0 551.6L824.9 558.6L814.7 564.5L819.5 568.3L815.4 571.0L818.5 580.6L810.1 581.8L811.5 585.8L806.9 586.4L804.0 596.2L806.5 599.3L798.6 605.6L800.4 619.5L805.0 624.4L802.5 629.1L822.0 629.4L834.3 648.5L834.3 664.1L840.8 671.7L839.5 679.7L846.2 679.4L857.4 693.7L866.9 696.9L872.9 711.3L880.5 709.8L890.6 718.3L890.8 731.7L882.9 735.1L887.9 742.4L885.9 750.6L891.6 753.5L893.3 764.6L907.4 766.6L910.7 783.8L908.0 787.1L915.3 789.5L909.1 795.5L917.0 804.2L908.8 808.9L925.3 819.3L930.4 844.5L963.0 882.1L1000.0 896.5L994.6 908.9L981.7 917.1L938.3 916.1L928.1 930.7L925.7 942.9L934.0 959.9L951.8 961.2L952.3 965.6L948.5 963.5L946.8 968.5L951.7 970.8L948.5 973.0L951.4 974.0L949.1 988.5L960.2 993.2L970.8 990.0L967.0 1016.9L974.9 1018.9L978.4 1026.0L974.2 1038.0L981.2 1042.5L978.5 1090.1L970.1 1127.2L956.0 1164.2L944.7 1170.1L941.4 1184.8L864.7 1189.4L834.5 1200.1L825.0 1208.1L818.4 1235.7L799.6 1242.7L796.5 1252.6L788.9 1256.1L776.8 1277.1L763.7 1286.1L757.2 1279.6L748.3 1280.1L750.3 1269.0L745.2 1265.0L752.6 1258.5L732.9 1259.7L727.8 1253.6L710.3 1250.8L706.6 1254.8L719.4 1226.0L696.9 1212.5L694.9 1207.0L698.5 1203.0L692.1 1196.4L700.4 1189.1L688.7 1185.8L646.2 1218.2L633.6 1199.9L618.2 1195.6L554.0 1263.9L503.9 1254.7L489.9 1259.1L448.6 1253.7L431.6 1261.1L403.3 1253.2L391.8 1248.6L391.9 1239.0L423.4 1227.2L423.7 1220.0L404.0 1218.6L387.3 1224.9L375.5 1218.3L352.3 1228.1L351.0 1222.2L341.8 1222.1L331.9 1213.4L330.9 1199.7L324.0 1197.2L324.7 1192.7L311.2 1195.5L314.7 1177.7L328.3 1180.5L329.8 1171.6L333.4 1171.0L327.6 1153.2L351.3 1157.6L352.4 1149.8L357.7 1151.9L361.5 1162.7L369.8 1153.2L375.8 1154.7L370.8 1151.1L383.6 1143.6L376.1 1139.9L359.8 1144.9L352.1 1139.4L367.7 1138.3L380.0 1126.6L365.8 1125.7L360.9 1121.2L364.1 1118.8L360.5 1115.4L363.6 1114.1L363.1 1105.6L354.3 1104.7L358.9 1102.6L357.5 1098.5L364.8 1097.9L363.9 1083.8L357.4 1076.8L351.9 1081.6L352.1 1076.1L343.1 1081.5L345.1 1078.7L335.8 1076.0L335.8 1071.3L318.0 1078.4L289.4 1057.0L250.6 1053.1L240.2 1028.4L208.0 1022.1L218.8 1010.0L221.6 1002.5L219.3 999.1L233.2 968.9L212.1 957.6L216.4 941.5L172.5 926.9L149.7 950.4L141.1 947.5L132.0 957.9L105.5 953.5L98.3 938.1L99.2 925.8L89.6 914.4L91.6 900.8L78.0 854.8L81.1 810.6L74.0 797.5L83.3 783.8L72.8 765.3L69.2 740.1L72.7 728.3L66.9 718.5L70.0 699.7L66.3 697.1L73.4 674.1L79.5 667.8L76.2 652.8L96.7 640.0L86.7 631.0L82.0 636.2L77.6 629.3L67.7 633.4L66.2 627.9L80.6 624.0L87.4 603.2L84.6 597.9L94.1 591.2L87.9 574.4L79.2 578.7L69.6 563.7L60.5 566.4L57.5 560.0L60.2 552.3L65.1 553.5L73.5 543.4L88.9 549.3L101.8 513.5L92.2 508.0L94.8 491.1L82.3 458.3L31.9 453.4L16.2 446.0L13.4 433.0L0.0 423.3L9.7 418.1L8.2 400.2L14.1 396.7L42.1 410.8L44.0 423.0L52.8 426.9L58.1 415.3L56.4 410.7L63.4 407.7L61.8 404.3L85.1 404.0L90.7 388.2L103.7 386.1L104.5 375.3L113.7 368.6L103.3 363.9L100.9 350.6L86.9 343.3L99.2 327.9L111.4 327.8L112.6 322.3L123.1 321.6L134.7 312.0L123.3 284.2L96.9 290.1L95.5 283.1L90.8 282.1L92.0 276.0L108.6 272.1L111.3 255.6L117.5 253.5L113.5 247.0L115.6 243.1L106.7 237.4L108.5 227.0Z";

const VIEW_W = 1000;
const VIEW_H = 1286;

type Spot = {
  slug: string;
  name: string;
  href: string;
  x: number;
  y: number;
  distance: string;
  time: string;
  side: "left" | "right";
  /** Przesunięcie etykiety w pikselach, gdy koliduje z trasą dojazdu. */
  labelDy?: number;
};

const STUDIO = {
  name: "Lublin",
  href: "/piercing-lublin",
  x: 376.6,
  y: 657.8,
};

const SPOTS: Spot[] = [
  {
    slug: "lubartow",
    name: "Lubartów",
    href: "/piercing-lubartow",
    x: 391.4,
    y: 524.1,
    distance: "ok. 24 km",
    time: "25-30 min",
    side: "right",
  },
  {
    slug: "swidnik",
    name: "Świdnik",
    href: "/piercing-swidnik",
    x: 427.1,
    y: 674.9,
    distance: "ok. 9 km",
    time: "kilkanaście min",
    side: "right",
    labelDy: 14,
  },
  {
    slug: "krasnik",
    name: "Kraśnik",
    href: "/piercing-krasnik",
    x: 239.3,
    y: 861.6,
    distance: "ok. 43 km",
    time: "ok. 40 min",
    side: "left",
  },
  {
    slug: "chelm",
    name: "Chełm",
    href: "/piercing-chelm",
    x: 735.9,
    y: 723.1,
    distance: "ok. 65 km",
    time: "ok. godziny",
    side: "right",
  },
  {
    slug: "zamosc",
    name: "Zamość",
    href: "/piercing-zamosc",
    x: 646.7,
    y: 988.4,
    distance: "ok. 75 km",
    time: "ok. godziny",
    side: "right",
  },
];

const percent = (value: number, total: number) => `${(value / total) * 100}%`;

export default function LocationsMap() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="grid gap-8 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] md:items-start">
      <div className="relative mx-auto w-full max-w-[400px] border border-black/10 bg-white p-4 shadow-sm">
        <div className="mb-3 flex items-baseline justify-between">
          <span className="text-[10px] uppercase tracking-[0.24em] text-black/40">
            woj. lubelskie
          </span>
          <span className="text-[10px] uppercase tracking-[0.24em] text-black/25">
            N ↑
          </span>
        </div>

        <div className="relative aspect-[1000/1286] w-full">
          <svg
            viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
            className="absolute inset-0 h-full w-full overflow-visible"
            aria-hidden
          >
            <path
              d={REGION_PATH}
              fill="#ece7e1"
              stroke="rgba(0,0,0,0.3)"
              strokeWidth={2.5}
              strokeLinejoin="round"
            />

            {SPOTS.map((spot) => {
              const isActive = active === spot.slug;
              return (
                <line
                  key={spot.slug}
                  x1={STUDIO.x}
                  y1={STUDIO.y}
                  x2={spot.x}
                  y2={spot.y}
                  stroke={isActive ? "#252b3a" : "rgba(0,0,0,0.32)"}
                  strokeWidth={isActive ? 6 : 3.5}
                  strokeDasharray="14 11"
                  strokeLinecap="round"
                  className="transition-all duration-200"
                />
              );
            })}
          </svg>

          {SPOTS.map((spot) => {
            const isActive = active === spot.slug;
            return (
              <Link
                key={spot.slug}
                href={spot.href}
                aria-label={`Piercing ${spot.name} - ${spot.distance} do studia w Lublinie`}
                onMouseEnter={() => setActive(spot.slug)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(spot.slug)}
                onBlur={() => setActive(null)}
                className={`group absolute z-10 block h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#252b3a] transition duration-200 after:absolute after:-inset-3 after:content-[''] hover:scale-125 focus-visible:scale-125 focus-visible:outline-none ${
                  isActive ? "scale-125 bg-[#252b3a]" : "bg-white"
                }`}
                style={{
                  left: percent(spot.x, VIEW_W),
                  top: percent(spot.y, VIEW_H),
                }}
              >
                <span
                  style={spot.labelDy ? { marginTop: spot.labelDy } : undefined}
                  className={`pointer-events-none absolute top-1/2 -translate-y-1/2 whitespace-nowrap px-1.5 py-0.5 text-[10px] uppercase tracking-[0.14em] shadow-sm transition-colors duration-200 ${
                    spot.side === "right" ? "left-full ml-2.5" : "right-full mr-2.5"
                  } ${
                    isActive
                      ? "bg-[#252b3a] text-white"
                      : "bg-white/95 text-black/70"
                  }`}
                >
                  {spot.name}
                </span>
              </Link>
            );
          })}

          <Link
            href={STUDIO.href}
            aria-label="Piercing Lublin - nasze studio przy ul. Narutowicza 22"
            onMouseEnter={() => setActive("lublin")}
            onMouseLeave={() => setActive(null)}
            onFocus={() => setActive("lublin")}
            onBlur={() => setActive(null)}
            className="group absolute z-20 block h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-white bg-[#252b3a] shadow-[0_0_0_5px_rgba(37,43,58,0.14),0_0_0_13px_rgba(37,43,58,0.07)] transition-transform duration-200 after:absolute after:-inset-3 after:content-[''] hover:scale-110 focus-visible:scale-110 focus-visible:outline-none"
            style={{
              left: percent(STUDIO.x, VIEW_W),
              top: percent(STUDIO.y, VIEW_H),
            }}
          >
            <span className="pointer-events-none absolute right-full top-1/2 mr-3.5 -translate-y-1/2 whitespace-nowrap text-right">
              <span className="block bg-[#252b3a] px-2 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-white shadow-sm">
                Lublin
              </span>
              <span className="mt-1 block bg-white/95 px-2 py-0.5 text-[9px] uppercase tracking-[0.2em] text-black/55 shadow-sm">
                Nasze studio
              </span>
            </span>
          </Link>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-black/10 pt-3 text-[10px] uppercase tracking-[0.16em] text-black/45">
          <span className="flex items-center gap-2">
            <span
              aria-hidden
              className="h-2.5 w-2.5 rounded-full border-2 border-white bg-[#252b3a] shadow-[0_0_0_2px_rgba(37,43,58,0.2)]"
            />
            Studio
          </span>
          <span className="flex items-center gap-2">
            <span
              aria-hidden
              className="h-2 w-2 rounded-full border-2 border-[#252b3a] bg-white"
            />
            Skąd dojeżdżają klienci
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <Link
          href={STUDIO.href}
          onMouseEnter={() => setActive("lublin")}
          onMouseLeave={() => setActive(null)}
          className="block border border-black/10 bg-[#252b3a] px-5 py-5 text-white shadow-sm transition hover:-translate-y-0.5 md:px-6"
        >
          <div className="text-[10px] uppercase tracking-[0.28em] text-white/55">
            Nasze studio
          </div>
          <div className="mt-2 text-3xl uppercase tracking-wide md:text-4xl">
            Lublin
          </div>
          <div className="mt-3 text-sm leading-7 text-white/75">
            ul. Prezydenta Gabriela Narutowicza 22, 20-004 Lublin
            <br />
            pon.-pt. 9:00-17:00, sob. 9:00-15:00
          </div>
          <div className="mt-4 text-[11px] uppercase tracking-[0.24em] underline underline-offset-4">
            Zobacz ofertę piercingu w Lublinie
          </div>
        </Link>

        <div className="border border-black/10 bg-white px-5 py-4 shadow-sm md:px-6">
          <div className="text-[10px] uppercase tracking-[0.24em] text-black/40">
            Dojazd z okolic
          </div>
          <ul className="mt-2 divide-y divide-black/10">
            {SPOTS.map((spot) => {
              const isActive = active === spot.slug;
              return (
                <li key={spot.slug}>
                  <Link
                    href={spot.href}
                    onMouseEnter={() => setActive(spot.slug)}
                    onMouseLeave={() => setActive(null)}
                    onFocus={() => setActive(spot.slug)}
                    onBlur={() => setActive(null)}
                    className={`flex items-center justify-between gap-4 py-3 transition-colors ${
                      isActive ? "text-black" : "text-black/70 hover:text-black"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span
                        aria-hidden
                        className={`h-2 w-2 shrink-0 rounded-full border-2 border-[#252b3a] transition-colors ${
                          isActive ? "bg-[#252b3a]" : "bg-white"
                        }`}
                      />
                      <span className="text-base uppercase tracking-wide">
                        {spot.name}
                      </span>
                    </span>
                    <span className="text-right text-[10px] uppercase leading-4 tracking-[0.14em] text-black/45">
                      {spot.distance}
                      <br />
                      {spot.time}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <Link
          href="/tatuaz-piercing-lublin-okolice"
          className="border border-black/10 bg-white px-5 py-4 text-center text-[11px] uppercase tracking-[0.24em] shadow-sm transition hover:-translate-y-0.5"
        >
          Więcej o dojeździe i parkingu
        </Link>
      </div>
    </div>
  );
}
