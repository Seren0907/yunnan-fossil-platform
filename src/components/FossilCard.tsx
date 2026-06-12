import type { FossilResource } from '../data/fossils';

type Props = {
  fossil: FossilResource;
  favored: boolean;
  onOpen: () => void;
  onToggleFavorite: () => void;
};

export default function FossilCard({ fossil, favored, onOpen, onToggleFavorite }: Props) {
  return (
    <article className={`relative rounded-lg border bg-white/88 p-5 shadow-soft transition hover:-translate-y-0.5 ${fossil.featured ? 'border-museum-teal/80 ring-2 ring-museum-teal/15' : 'border-museum-navy/10 hover:border-museum-teal/45'}`}>
      {fossil.featured ? <div className="absolute right-4 top-0 -translate-y-1/2 rounded bg-museum-teal px-3 py-1 text-xs font-semibold text-white shadow-soft">重点资源</div> : null}
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-xl font-semibold text-museum-navy">{fossil.name}</h3>
          <p className="mt-1 text-sm text-museum-stone">{fossil.location} · {fossil.period}</p>
        </div>
        <span className={`rounded px-2 py-1 text-xs ${favored ? 'bg-museum-teal text-white' : 'bg-museum-mist text-museum-teal'}`}>{favored ? '已收藏' : '可收藏'}</span>
      </div>
      <p className="mt-4 min-h-20 text-sm leading-6 text-museum-ink">{fossil.summary}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {[fossil.period, fossil.type, ...fossil.tags].map((tag) => <span key={tag} className="rounded bg-museum-mist px-2 py-1 text-xs text-museum-teal">{tag}</span>)}
      </div>
      <div className="mt-5 flex gap-2">
        <button onClick={onOpen} className="rounded bg-museum-navy px-4 py-2 text-sm text-white hover:bg-museum-teal">查看详情</button>
        <button onClick={onToggleFavorite} className={`rounded border px-4 py-2 text-sm ${favored ? 'border-museum-teal bg-museum-mist text-museum-teal' : 'border-museum-navy/20 text-museum-navy hover:border-museum-teal'}`}>
          {favored ? '已收藏' : '收藏'}
        </button>
      </div>
    </article>
  );
}
