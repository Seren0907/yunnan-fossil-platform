type Props = {
  search: string;
  onSearch: (value: string) => void;
  period: string;
  onPeriod: (value: string) => void;
  type: string;
  onType: (value: string) => void;
  periods: string[];
  types: string[];
};

export default function SearchFilterBar({ search, onSearch, period, onPeriod, type, onType, periods, types }: Props) {
  return (
    <div className="grid gap-3 rounded-lg border border-museum-navy/10 bg-white/80 p-4 shadow-soft md:grid-cols-[1fr_220px_220px]">
      <input
        value={search}
        onChange={(event) => onSearch(event.target.value)}
        placeholder="搜索名称、所在地、关键词或简介"
        className="rounded border border-museum-navy/15 bg-white px-3 py-2 outline-none focus:border-museum-teal"
      />
      <select value={period} onChange={(event) => onPeriod(event.target.value)} className="rounded border border-museum-navy/15 bg-white px-3 py-2 outline-none focus:border-museum-teal">
        <option value="">全部地质年代</option>
        {periods.map((item) => <option key={item} value={item}>{item}</option>)}
      </select>
      <select value={type} onChange={(event) => onType(event.target.value)} className="rounded border border-museum-navy/15 bg-white px-3 py-2 outline-none focus:border-museum-teal">
        <option value="">全部化石类型</option>
        {types.map((item) => <option key={item} value={item}>{item}</option>)}
      </select>
    </div>
  );
}
