import { formatPrice, type PriceItem } from "../lib/cennik";

export default function PriceTable({
  items,
  caption,
}: {
  items: PriceItem[];
  caption?: string;
}) {
  return (
    <table className="mt-5 w-full border-collapse border border-black/10 bg-white text-left text-lg">
      {caption && <caption className="sr-only">{caption}</caption>}
      <thead>
        <tr className="border-b border-black/10 text-[11px] uppercase tracking-[0.24em] text-black/50">
          <th scope="col" className="px-4 py-3 font-normal">
            Usługa
          </th>
          <th scope="col" className="px-4 py-3 text-right font-normal">
            Cena
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-black/10">
        {items.map((item) => (
          <tr key={item.name}>
            <th scope="row" className="px-4 py-3 font-normal leading-7">
              {item.name}
              {item.note && (
                <span className="ml-2 text-sm text-black/50">({item.note})</span>
              )}
            </th>
            <td className="whitespace-nowrap px-4 py-3 text-right">
              {formatPrice(item)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
