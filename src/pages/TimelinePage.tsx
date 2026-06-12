import { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import TimelineDetail from '../components/TimelineDetail';
import TimelineView from '../components/TimelineView';
import { timeline } from '../data/timeline';

export default function TimelinePage() {
  const [selectedId, setSelectedId] = useState('chengjiang-biota');
  const selected = timeline.find((item) => item.id === selectedId) ?? timeline[0];

  return (
    <div className="space-y-6">
      <SectionTitle
        title="生命演化时间轴"
        subtitle="时间轴以关键节点帮助学习者理解澄江生物群在生命演化长时段中的位置。点击节点可查看演化意义和云南化石关联。"
      />
      <section className="rounded-lg border border-museum-teal/30 bg-white/85 p-5 shadow-soft">
        <div className="grid gap-4 md:grid-cols-[1fr_auto_1fr] md:items-center">
          <div className="rounded bg-museum-mist p-4">
            <div className="text-sm text-museum-teal">关键事件</div>
            <div className="mt-1 font-semibold text-museum-navy">寒武纪生命大爆发</div>
            <p className="mt-2 text-sm leading-6 text-museum-stone">动物主要类群快速分化，生态关系和身体构型明显复杂化。</p>
          </div>
          <div className="text-center text-2xl font-semibold text-museum-teal">→</div>
          <div className="rounded bg-museum-paper p-4 ring-1 ring-museum-teal/30">
            <div className="text-sm text-museum-teal">云南窗口</div>
            <div className="mt-1 font-semibold text-museum-navy">澄江生物群</div>
            <p className="mt-2 text-sm leading-6 text-museum-stone">通过软体结构和多类群保存，为理解早寒武世复杂海洋生态系统提供证据。</p>
          </div>
        </div>
      </section>
      <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
        <TimelineView nodes={timeline} selectedId={selectedId} onSelect={setSelectedId} />
        <TimelineDetail node={selected} />
      </div>
      <section className="rounded-lg border border-museum-teal/30 bg-white/85 p-5 shadow-soft">
        <h3 className="font-semibold text-museum-navy">学习提示</h3>
        <p className="mt-2 leading-7">
          澄江化石地不是孤立的化石点，而是认识早寒武世复杂海洋生态系统的重要窗口。学习时应把它放在前寒武纪生命复杂化、
          寒武纪生命大爆发和后续动物演化的连续背景中理解。
        </p>
      </section>
    </div>
  );
}
