import type { ReferenceItem } from '../data/references';

export default function ReferenceList({ items }: { items: ReferenceItem[] }) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <article key={item.id} className="rounded-lg border border-museum-navy/10 bg-white/85 p-5 shadow-soft">
          <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
            <h3 className="font-semibold text-museum-navy">{item.title}</h3>
            <span className="w-fit rounded bg-museum-mist px-2 py-1 text-xs text-museum-teal">{item.type}</span>
          </div>
          <p className="mt-3 leading-7 text-museum-ink">{item.usage}</p>
          <p className="mt-2 text-sm text-museum-stone">链接状态：{item.link}</p>
        </article>
      ))}
    </div>
  );
}
