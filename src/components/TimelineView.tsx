import type { TimelineNode } from '../data/timeline';

type Props = {
  nodes: TimelineNode[];
  selectedId: string;
  onSelect: (id: string) => void;
};

export default function TimelineView({ nodes, selectedId, onSelect }: Props) {
  return (
    <div className="relative space-y-4 before:absolute before:left-4 before:top-3 before:h-[calc(100%-24px)] before:w-0.5 before:bg-museum-teal/35 md:before:left-1/2">
      {nodes.map((node, index) => (
        <button
          key={node.id}
          onClick={() => onSelect(node.id)}
          className={`relative grid w-full gap-3 text-left md:grid-cols-2 ${index % 2 === 0 ? '' : 'md:[&>div]:col-start-2'}`}
        >
          <span className={`absolute left-[9px] top-5 h-3 w-3 rounded-full md:left-[calc(50%-6px)] ${node.highlighted ? 'bg-museum-teal ring-4 ring-museum-teal/20' : 'bg-museum-navy'}`} />
          <div className={`ml-9 rounded-lg border p-4 shadow-soft md:ml-0 ${selectedId === node.id ? 'border-museum-teal bg-white' : 'border-museum-navy/10 bg-white/75'} ${node.highlighted ? 'ring-1 ring-museum-teal/40' : ''}`}>
            <div className="flex items-center justify-between gap-3">
              <div className="text-sm text-museum-teal">{node.time}</div>
              {node.highlighted ? <span className="rounded bg-museum-teal px-2 py-1 text-xs text-white">重点节点</span> : null}
            </div>
            <div className="mt-1 font-semibold text-museum-navy">{index + 1}. {node.title}</div>
            <p className="mt-2 text-sm leading-6 text-museum-stone">{node.summary}</p>
          </div>
        </button>
      ))}
    </div>
  );
}
