import { useMemo, useState } from 'react';
import ExhibitCard from '../components/ExhibitCard';
import ExhibitDetailModal from '../components/ExhibitDetailModal';
import SectionTitle from '../components/SectionTitle';
import { exhibits, type Exhibit } from '../data/exhibits';
import { storageKeys, useStoredIds } from '../utils/storage';

export default function ExhibitionPage() {
  const [group, setGroup] = useState('');
  const [selected, setSelected] = useState<Exhibit | null>(null);
  const viewed = useStoredIds(storageKeys.viewedExhibits);
  const groups = useMemo(() => Array.from(new Set(exhibits.map((item) => item.group))), []);
  const filtered = group ? exhibits.filter((item) => item.group === group) : exhibits;

  const openExhibit = (exhibit: Exhibit) => {
    setSelected(exhibit);
    viewed.add(exhibit.id);
  };

  return (
    <div className="space-y-6">
      <SectionTitle
        title="澄江数字展厅"
        subtitle="澄江化石地的价值不仅在于化石数量多，更在于其对软体结构保存、早期动物结构认识和古生态系统复原的意义。"
      />
      <section className="overflow-hidden rounded-lg border border-museum-navy/10 bg-white/85 shadow-soft">
        <div className="grid gap-0 lg:grid-cols-[1fr_1fr_1fr]">
          <div className="bg-museum-navy p-5 text-white">
            <div className="text-sm text-white/70">展厅导览</div>
            <h3 className="mt-2 text-xl font-semibold">从形态到生态</h3>
            <p className="mt-3 text-sm leading-6 text-white/82">先观察身体结构，再比较保存特点，最后思考它与寒武纪生命大爆发的关系。</p>
          </div>
          <div className="bg-museum-mist p-5">
            <div className="text-sm text-museum-teal">当前记录</div>
            <div className="mt-2 text-3xl font-semibold text-museum-navy">{viewed.ids.length}/{exhibits.length}</div>
            <p className="mt-2 text-sm leading-6 text-museum-stone">已查看展品会保存到 localStorage，并可在首页同步显示。</p>
          </div>
          <div className="bg-museum-paper p-5">
            <div className="text-sm text-museum-teal">图片说明</div>
            <p className="mt-2 text-sm leading-6 text-museum-stone">本页使用本地真实化石图片作为类型化展品参考，来源说明保留在卡片、弹窗和 README 中。</p>
          </div>
        </div>
      </section>
      <div className="flex flex-col gap-3 rounded-lg border border-museum-navy/10 bg-white/80 p-4 shadow-soft md:flex-row md:items-center md:justify-between">
        <div className="text-sm text-museum-stone">已查看展品：{viewed.ids.length}/{exhibits.length}</div>
        <select value={group} onChange={(event) => setGroup(event.target.value)} className="rounded border border-museum-navy/15 bg-white px-3 py-2 outline-none focus:border-museum-teal">
          <option value="">全部类群</option>
          {groups.map((item) => <option key={item} value={item}>{item}</option>)}
        </select>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((exhibit) => <ExhibitCard key={exhibit.id} exhibit={exhibit} onOpen={() => openExhibit(exhibit)} />)}
      </div>
      <ExhibitDetailModal exhibit={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
