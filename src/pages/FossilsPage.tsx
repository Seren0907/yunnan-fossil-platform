import { useMemo, useState } from 'react';
import FossilCard from '../components/FossilCard';
import FossilDetailModal from '../components/FossilDetailModal';
import SearchFilterBar from '../components/SearchFilterBar';
import SectionTitle from '../components/SectionTitle';
import { fossils, type FossilResource } from '../data/fossils';
import { storageKeys, useStoredIds } from '../utils/storage';

export default function FossilsPage() {
  const [search, setSearch] = useState('');
  const [period, setPeriod] = useState('');
  const [type, setType] = useState('');
  const [selected, setSelected] = useState<FossilResource | null>(null);
  const favorites = useStoredIds(storageKeys.favorites);

  const periods = useMemo(() => Array.from(new Set(fossils.map((item) => item.period))), []);
  const types = useMemo(() => Array.from(new Set(fossils.map((item) => item.type))), []);
  const filtered = fossils.filter((item) => {
    const text = [item.name, item.location, item.period, item.type, item.summary, ...item.keywords, ...item.tags].join(' ');
    return text.includes(search.trim()) && (!period || item.period === period) && (!type || item.type === type);
  });
  const hasFilter = Boolean(search.trim() || period || type);
  const clearFilters = () => {
    setSearch('');
    setPeriod('');
    setType('');
  };

  return (
    <div className="space-y-6">
      <SectionTitle title="化石资源库" subtitle="通过关键词、地质年代和化石类型检索云南代表性化石资源。澄江化石地作为重点研究对象以标签和边框突出。" />
      <SearchFilterBar search={search} onSearch={setSearch} period={period} onPeriod={setPeriod} type={type} onType={setType} periods={periods} types={types} />
      <div className="flex flex-col gap-3 rounded-lg border border-museum-navy/10 bg-white/80 p-4 text-sm shadow-soft md:flex-row md:items-center md:justify-between">
        <div className="text-museum-stone">
          当前显示 <span className="font-semibold text-museum-navy">{filtered.length}</span> 条资源；
          已收藏 <span className="font-semibold text-museum-teal">{favorites.ids.length}</span> 条。
          {hasFilter ? <span> 筛选条件正在生效。</span> : <span> 可输入“澄江”“恐龙”“古人类”等关键词。</span>}
        </div>
        <button onClick={clearFilters} disabled={!hasFilter} className="w-fit rounded border border-museum-navy/15 px-3 py-2 text-museum-navy disabled:cursor-not-allowed disabled:opacity-45 hover:border-museum-teal">
          清空筛选
        </button>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {filtered.map((fossil) => (
          <FossilCard
            key={fossil.id}
            fossil={fossil}
            favored={favorites.ids.includes(fossil.id)}
            onOpen={() => setSelected(fossil)}
            onToggleFavorite={() => favorites.toggle(fossil.id)}
          />
        ))}
      </div>
      {filtered.length === 0 ? <div className="rounded-lg bg-white/85 p-6 text-museum-stone">未找到匹配资源，请调整关键词或筛选条件。</div> : null}
      <FossilDetailModal
        fossil={selected}
        favored={selected ? favorites.ids.includes(selected.id) : false}
        onClose={() => setSelected(null)}
        onToggleFavorite={() => selected && favorites.toggle(selected.id)}
      />
    </div>
  );
}
