import ReferenceList from '../components/ReferenceList';
import SectionTitle from '../components/SectionTitle';
import { references } from '../data/references';

export default function ReferencesPage() {
  return (
    <div className="space-y-6">
      <SectionTitle
        title="参考资料"
        subtitle="本页列出平台内容依据和后续需要补充核验的资料来源。对不确定链接不作伪造，统一标注为“待补充链接”。"
      />
      <ReferenceList items={references} />
      <section className="rounded-lg border border-museum-navy/10 bg-white/80 p-5 text-sm leading-7 text-museum-stone shadow-soft">
        后续完善时，应优先补充 UNESCO、政府公开资料、博物馆公开资料和学术论文的准确来源链接，并在页面内容更新时同步记录资料用途。
      </section>
    </div>
  );
}
