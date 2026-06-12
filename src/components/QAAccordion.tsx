import { useState } from 'react';
import type { QAItem } from '../data/qa';

export default function QAAccordion({ items }: { items: QAItem[] }) {
  const [openId, setOpenId] = useState(items[0]?.id ?? '');

  return (
    <div className="space-y-3">
      {items.map((item) => (
        <section key={item.id} className="rounded-lg border border-museum-navy/10 bg-white/85 shadow-soft">
          <button onClick={() => setOpenId(openId === item.id ? '' : item.id)} className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left">
            <span className="font-semibold text-museum-navy">{item.question}</span>
            <span className="text-museum-teal">{openId === item.id ? '收起' : '展开'}</span>
          </button>
          {openId === item.id ? (
            <div className="border-t border-museum-navy/10 px-5 py-4">
              <p className="leading-7">{item.answer}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {item.tags.map((tag) => <span key={tag} className="rounded bg-museum-mist px-2 py-1 text-xs text-museum-teal">{tag}</span>)}
              </div>
            </div>
          ) : null}
        </section>
      ))}
    </div>
  );
}
