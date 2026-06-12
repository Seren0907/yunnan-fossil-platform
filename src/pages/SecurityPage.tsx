import SectionTitle from '../components/SectionTitle';
import SecurityRiskTable from '../components/SecurityRiskTable';
import { securityLayers, securityRisks } from '../data/security';

export default function SecurityPage() {
  return (
    <div className="space-y-8">
      <SectionTitle
        title="数据安全管理"
        subtitle="数字化不是简单开放资源，而是在保护、共享和安全之间取得平衡。本页以原型方式说明平台应考虑的数据管理问题。"
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {securityLayers.map((layer) => (
          <article key={layer.id} className="rounded-lg border border-museum-navy/10 bg-white/85 p-5 shadow-soft">
            <h3 className="font-semibold text-museum-navy">{layer.title}</h3>
            <p className="mt-2 min-h-16 text-sm leading-6 text-museum-stone">{layer.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {layer.measures.map((measure) => <span key={measure} className="rounded bg-museum-mist px-2 py-1 text-xs text-museum-teal">{measure}</span>)}
            </div>
          </article>
        ))}
      </div>
      <section>
        <SectionTitle title="安全风险—应对措施" subtitle="表格把风险、影响、治理措施和本原型中的体现放在一起，便于说明数字化平台不是简单开放资源，而是要保证资料可信、记录可控。" />
        <SecurityRiskTable risks={securityRisks} />
      </section>
      <section className="rounded-lg border border-museum-teal/30 bg-white/85 p-5 shadow-soft">
        <h3 className="font-semibold text-museum-navy">本原型的数据说明</h3>
        <p className="mt-2 leading-7">
          化石资源、时间轴、展厅展品、问答、任务、安全说明和参考资料均为 `src/data` 中的模拟数据。
          收藏化石、已完成任务和已查看展品保存在浏览器 localStorage 中，不上传服务器，也不采集真实身份信息。
          若后续接入真实数据库，应补充权限分级、备份恢复、日志审计和资料来源核验流程。
        </p>
      </section>
    </div>
  );
}
