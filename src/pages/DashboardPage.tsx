import { Link } from 'react-router-dom';
import FeatureCard from '../components/FeatureCard';
import ProgressBar from '../components/ProgressBar';
import SectionTitle from '../components/SectionTitle';
import StatCard from '../components/StatCard';
import chengjiangImage from '../assets/images/chengjiang-fossil-site.jpg';
import { exhibits } from '../data/exhibits';
import { fossils } from '../data/fossils';
import { tasks } from '../data/tasks';
import { timeline } from '../data/timeline';
import { storageKeys, useStoredIds } from '../utils/storage';

const features = [
  { title: '化石资源库', to: '/fossils', description: '查询云南代表性化石资源，比较地质年代、类型与科普价值。' },
  { title: '生命演化时间轴', to: '/timeline', description: '从早期生命到古人类活动记录，理解澄江生物群所在的演化位置。' },
  { title: '澄江数字展厅', to: '/exhibition', description: '浏览澄江化石地相关类型化展品，关注软体结构保存和早期动物生态。' },
  { title: '互动学习任务', to: '/tasks', description: '通过问答和任务记录形成基础学习进度。' },
  { title: '数据安全管理', to: '/security', description: '了解数字化平台在开放共享、资料保护和学习记录之间的平衡。' },
  { title: '参考资料', to: '/references', description: '查看平台内容依据和后续需要补充核验的资料来源。' },
];

const logic = ['化石资源数字化', '生命演化可视化', '数字展厅互动化', '学习任务记录化', '数据管理安全化'];

export default function DashboardPage() {
  const favorites = useStoredIds(storageKeys.favorites);
  const completedTasks = useStoredIds(storageKeys.tasks);
  const viewedExhibits = useStoredIds(storageKeys.viewedExhibits);

  return (
    <div className="space-y-8">
      <section className="overflow-hidden rounded-lg border border-museum-navy/10 bg-white/85 shadow-soft">
        <div className="grid lg:grid-cols-[1.15fr_.85fr]">
          <div className="p-6 lg:p-8">
            <p className="text-sm font-semibold text-museum-teal">课程论文配套实践平台原型</p>
            <h1 className="mt-3 text-4xl font-semibold leading-tight text-museum-navy">云南化石生命演化数字科普平台</h1>
            <p className="mt-4 max-w-3xl leading-8 text-museum-ink">
              平台以澄江化石地为重点，兼顾江川生物群、禄丰恐龙化石、元谋古人类化石等云南代表性资源，
              用于化石资源查询、生命演化学习、数字展厅浏览和学习进度记录。
            </p>
            <div className="mt-6 rounded-lg border border-museum-navy/10 bg-museum-mist p-4">
              <ProgressBar current={completedTasks.ids.length} total={tasks.length} />
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link to="/tasks" className="rounded bg-museum-teal px-4 py-2 text-sm font-semibold text-white hover:bg-museum-navy">继续学习任务</Link>
              <Link to="/exhibition" className="rounded border border-museum-teal px-4 py-2 text-sm font-semibold text-museum-teal hover:bg-museum-mist">进入数字展厅</Link>
              <Link to="/fossils" className="rounded border border-museum-navy/20 px-4 py-2 text-sm font-semibold text-museum-navy hover:border-museum-teal">查询化石资源</Link>
            </div>
          </div>
          <figure className="relative min-h-80 bg-museum-navy">
            <img src={chengjiangImage} alt="澄江化石地真实图片" className="h-full min-h-80 w-full object-cover opacity-85" />
            <figcaption className="absolute inset-x-4 bottom-4 rounded bg-museum-navy/85 px-4 py-3 text-sm leading-6 text-white">
              澄江化石地是理解早寒武世复杂海洋生态系统的重要窗口。图片来源：Wikimedia Commons。
            </figcaption>
          </figure>
        </div>
      </section>

      <section>
        <SectionTitle title="学习工作台" subtitle="这里汇总当前浏览器中的收藏、展厅浏览和任务完成状态，方便答辩演示时展示平台的记录能力。" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          <StatCard label="代表性化石资源" value={fossils.length} />
          <StatCard label="演化时间节点" value={timeline.length} />
          <StatCard label="展厅展品" value={exhibits.length} />
          <StatCard label="已收藏化石" value={favorites.ids.length} note="刷新后保留" />
          <StatCard label="任务完成进度" value={`${completedTasks.ids.length}/${tasks.length}`} note={`已查看展品 ${viewedExhibits.ids.length}/${exhibits.length}`} />
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-[.9fr_1.1fr]">
        <div className="rounded-lg border border-museum-navy/10 bg-white/85 p-5 shadow-soft">
          <SectionTitle title="继续学习" subtitle="按“资源认识—展厅观察—任务记录”的顺序使用平台，可以更清楚地理解论文中的数字科普路径。" />
          <div className="space-y-3">
            <Link to="/fossils" className="block rounded border border-museum-navy/10 bg-museum-paper p-4 hover:border-museum-teal">
              <span className="font-semibold text-museum-navy">1. 查询云南代表性化石资源</span>
              <span className="mt-1 block text-sm text-museum-stone">从澄江化石地进入，比较江川、禄丰、元谋等资源。</span>
            </Link>
            <Link to="/exhibition" className="block rounded border border-museum-navy/10 bg-museum-paper p-4 hover:border-museum-teal">
              <span className="font-semibold text-museum-navy">2. 观察澄江数字展厅展品</span>
              <span className="mt-1 block text-sm text-museum-stone">关注软体结构、类群差异和寒武纪生命大爆发证据。</span>
            </Link>
            <Link to="/tasks" className="block rounded border border-museum-navy/10 bg-museum-paper p-4 hover:border-museum-teal">
              <span className="font-semibold text-museum-navy">3. 完成互动学习任务</span>
              <span className="mt-1 block text-sm text-museum-stone">用任务勾选和收藏记录基础学习进度。</span>
            </Link>
          </div>
        </div>
        <div>
          <SectionTitle title="功能入口" subtitle="平台保留资源、时间轴、展厅、任务、安全和参考资料六类入口，不包含专业视角解读模块。" />
          <div className="grid gap-4 md:grid-cols-2">
            {features.map((feature) => <FeatureCard key={feature.to} {...feature} />)}
          </div>
        </div>
      </section>

      <section>
        <SectionTitle title="平台建设逻辑图" subtitle="原型以学习流程和数据管理流程共同组织，强调数字技术服务于理解和保护。" />
        <div className="grid gap-3 md:grid-cols-5">
          {logic.map((item, index) => (
            <div key={item} className="relative rounded-lg border border-museum-navy/10 bg-white/85 p-4 text-center shadow-soft">
              <div className="text-sm font-semibold text-museum-navy">{item}</div>
              {index < logic.length - 1 ? <div className="hidden md:block absolute -right-3 top-1/2 text-museum-teal">→</div> : null}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
