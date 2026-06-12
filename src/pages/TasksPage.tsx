import ProgressBar from '../components/ProgressBar';
import QAAccordion from '../components/QAAccordion';
import SectionTitle from '../components/SectionTitle';
import TaskList from '../components/TaskList';
import { qaItems } from '../data/qa';
import { tasks } from '../data/tasks';
import { storageKeys, useStoredIds } from '../utils/storage';

export default function TasksPage() {
  const completed = useStoredIds(storageKeys.tasks);
  const percent = Math.round((completed.ids.length / tasks.length) * 100);

  return (
    <div className="space-y-8">
      <SectionTitle title="互动学习任务" subtitle="问答帮助建立基本概念，学习任务用于记录原型阶段的学习进度。完成状态保存在浏览器 localStorage 中。" />
      <section className="rounded-lg border border-museum-navy/10 bg-white/80 p-5 shadow-soft">
        <ProgressBar current={completed.ids.length} total={tasks.length} />
        <p className="mt-3 text-sm leading-6 text-museum-stone">
          当前完成率为 <span className="font-semibold text-museum-teal">{percent}%</span>。勾选任务后，首页 Dashboard 的学习进度会同步更新；刷新页面后状态仍保留在本机浏览器中。
        </p>
      </section>
      <section>
        <SectionTitle title="问答学习" subtitle="点击问题查看简明答案，适合作为阅读化石资源库和数字展厅前后的概念补充。" />
        <QAAccordion items={qaItems} />
      </section>
      <section>
        <SectionTitle title="学习任务" subtitle="任务不追求游戏化积分，而是帮助学习者形成可回看的基础学习记录。" />
        <TaskList tasks={tasks} completedIds={completed.ids} onToggle={completed.toggle} />
      </section>
    </div>
  );
}
