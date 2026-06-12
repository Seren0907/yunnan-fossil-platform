import type { FossilResource } from '../data/fossils';

type Props = {
  fossil: FossilResource | null;
  favored: boolean;
  onClose: () => void;
  onToggleFavorite: () => void;
};

export default function FossilDetailModal({ fossil, favored, onClose, onToggleFavorite }: Props) {
  if (!fossil) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-museum-navy/55 p-4">
      <div className="max-h-[90vh] w-full max-w-3xl overflow-auto rounded-lg bg-museum-paper p-6 shadow-soft">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-2xl font-semibold text-museum-navy">{fossil.name}</h3>
            <p className="mt-1 text-sm text-museum-stone">{fossil.location} · {fossil.period} · {fossil.type}</p>
          </div>
          <button onClick={onClose} className="rounded border border-museum-navy/20 px-3 py-1 text-museum-navy">关闭</button>
        </div>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <Info title="科学价值" text={fossil.scientificValue} />
          <Info title="科普价值" text={fossil.publicValue} />
        </div>
        <div className="mt-4 rounded-lg bg-white/80 p-4">
          <h4 className="font-semibold text-museum-navy">学习提示</h4>
          <p className="mt-2 leading-7 text-museum-ink">{fossil.learningTip}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {fossil.keywords.map((tag) => <span key={tag} className="rounded bg-museum-mist px-2 py-1 text-xs text-museum-teal">{tag}</span>)}
        </div>
        <button onClick={onToggleFavorite} className="mt-5 rounded bg-museum-teal px-4 py-2 text-white">{favored ? '取消收藏' : '收藏该资源'}</button>
      </div>
    </div>
  );
}

function Info({ title, text }: { title: string; text: string }) {
  return (
    <section className="rounded-lg border border-museum-navy/10 bg-white/80 p-4">
      <h4 className="font-semibold text-museum-navy">{title}</h4>
      <p className="mt-2 leading-7 text-museum-ink">{text}</p>
    </section>
  );
}
