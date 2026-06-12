import type { SecurityRisk } from '../data/security';

export default function SecurityRiskTable({ risks }: { risks: SecurityRisk[] }) {
  return (
    <div className="overflow-hidden rounded-lg border border-museum-navy/10 bg-white/85 shadow-soft">
      <div className="grid grid-cols-4 bg-museum-navy text-sm font-semibold text-white">
        <div className="p-3">安全风险</div>
        <div className="p-3">可能影响</div>
        <div className="p-3">应对措施</div>
        <div className="p-3">原型中的体现</div>
      </div>
      {risks.map((item) => (
        <div key={item.risk} className="grid grid-cols-1 border-t border-museum-navy/10 text-sm lg:grid-cols-4">
          <div className="p-3 font-semibold text-museum-navy">{item.risk}</div>
          <div className="p-3 leading-6 text-museum-stone">{item.impact}</div>
          <div className="p-3 leading-6">{item.response}</div>
          <div className="p-3 leading-6 text-museum-stone">{item.platformPractice}</div>
        </div>
      ))}
    </div>
  );
}
