type Props = {
  current: number;
  total: number;
};

export default function ProgressBar({ current, total }: Props) {
  const percent = total === 0 ? 0 : Math.round((current / total) * 100);
  return (
    <div>
      <div className="mb-2 flex justify-between text-sm text-museum-stone">
        <span>学习进度</span>
        <span>{current}/{total}，{percent}%</span>
      </div>
      <div className="h-3 overflow-hidden rounded-full bg-museum-navy/10">
        <div className="h-full rounded-full bg-museum-teal transition-all" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}
