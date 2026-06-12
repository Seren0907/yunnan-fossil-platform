import type { TimelineNode } from '../data/timeline';

export default function TimelineDetail({ node }: { node: TimelineNode }) {
  return (
    <aside className="rounded-lg border border-museum-teal/30 bg-white/85 p-5 shadow-soft">
      <div className="text-sm text-museum-teal">{node.time}</div>
      <h3 className="mt-1 text-2xl font-semibold text-museum-navy">{node.title}</h3>
      <p className="mt-4 leading-7">{node.summary}</p>
      <div className="mt-4 rounded bg-museum-mist p-4">
        <h4 className="font-semibold text-museum-navy">演化意义</h4>
        <p className="mt-2 leading-7">{node.significance}</p>
      </div>
      <div className="mt-4 rounded bg-museum-paper p-4">
        <h4 className="font-semibold text-museum-navy">与云南化石或澄江化石地的关系</h4>
        <p className="mt-2 leading-7">{node.yunnanRelation}</p>
      </div>
    </aside>
  );
}
