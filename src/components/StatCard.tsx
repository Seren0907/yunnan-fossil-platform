type Props = {
  label: string;
  value: number | string;
  note?: string;
};

export default function StatCard({ label, value, note }: Props) {
  return (
    <div className="rounded-lg border border-museum-navy/10 bg-white/85 p-5 shadow-soft">
      <div className="text-sm text-museum-stone">{label}</div>
      <div className="mt-2 text-3xl font-semibold text-museum-navy">{value}</div>
      {note ? <div className="mt-2 text-xs text-museum-stone">{note}</div> : null}
    </div>
  );
}
