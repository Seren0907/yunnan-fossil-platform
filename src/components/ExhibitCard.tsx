import type { Exhibit } from '../data/exhibits';

export default function ExhibitCard({ exhibit, onOpen }: { exhibit: Exhibit; onOpen: () => void }) {
  return (
    <article className="overflow-hidden rounded-lg border border-museum-navy/10 bg-white/85 shadow-soft transition hover:-translate-y-0.5 hover:border-museum-teal/50">
      <div className="relative h-48 overflow-hidden bg-museum-navy">
        <img src={exhibit.image} alt={exhibit.imageAlt} className="h-full w-full object-cover opacity-90 transition duration-300 hover:scale-105" />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-museum-navy/90 to-transparent p-3">
          <span className="rounded bg-white/90 px-2 py-1 text-xs font-semibold text-museum-navy">{exhibit.code}</span>
        </div>
      </div>
      <div className="p-5">
        <div className="text-xs font-semibold text-museum-teal">{exhibit.group}</div>
        <h3 className="mt-1 text-lg font-semibold text-museum-navy">{exhibit.name}</h3>
        <p className="mt-2 min-h-16 text-sm leading-6 text-museum-stone">{exhibit.preservation}</p>
        <p className="mt-2 line-clamp-2 text-xs leading-5 text-museum-stone">{exhibit.imageCredit}</p>
        <button onClick={onOpen} className="mt-4 rounded bg-museum-navy px-4 py-2 text-sm text-white hover:bg-museum-teal">查看详情</button>
      </div>
    </article>
  );
}
