import type { Exhibit } from '../data/exhibits';

type Props = {
  exhibit: Exhibit | null;
  onClose: () => void;
};

export default function ExhibitDetailModal({ exhibit, onClose }: Props) {
  if (!exhibit) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-museum-navy/55 p-4">
      <div className="max-h-[90vh] w-full max-w-3xl overflow-auto rounded-lg bg-museum-paper p-6 shadow-soft">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-sm text-museum-teal">{exhibit.code} · {exhibit.group}</div>
            <h3 className="mt-1 text-2xl font-semibold text-museum-navy">{exhibit.name}</h3>
          </div>
          <button onClick={onClose} className="rounded border border-museum-navy/20 px-3 py-1 text-museum-navy">关闭</button>
        </div>
        <figure className="mt-5 overflow-hidden rounded-lg border border-museum-navy/10 bg-white">
          <img src={exhibit.image} alt={exhibit.imageAlt} className="max-h-[360px] w-full object-cover" />
          <figcaption className="px-4 py-3 text-xs leading-5 text-museum-stone">{exhibit.imageCredit}。本图用于类型化展品学习展示，正式发布前需进一步核验授权与说明文字。</figcaption>
        </figure>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <Info title="形态特点" text={exhibit.morphology} />
          <Info title="保存特点" text={exhibit.preservation} />
          <Info title="演化意义" text={exhibit.significance} />
          <Info title="与寒武纪生命大爆发的关系" text={exhibit.cambrianRelation} />
        </div>
        <div className="mt-4 rounded-lg bg-museum-mist p-4">
          <h4 className="font-semibold text-museum-navy">学习问题</h4>
          <p className="mt-2 leading-7">{exhibit.question}</p>
        </div>
      </div>
    </div>
  );
}

function Info({ title, text }: { title: string; text: string }) {
  return (
    <section className="rounded-lg border border-museum-navy/10 bg-white/80 p-4">
      <h4 className="font-semibold text-museum-navy">{title}</h4>
      <p className="mt-2 leading-7">{text}</p>
    </section>
  );
}
