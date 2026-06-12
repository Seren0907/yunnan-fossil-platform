import type { LearningTask } from '../data/tasks';

type Props = {
  tasks: LearningTask[];
  completedIds: string[];
  onToggle: (id: string) => void;
};

export default function TaskList({ tasks, completedIds, onToggle }: Props) {
  return (
    <div className="space-y-3">
      {tasks.map((task) => {
        const done = completedIds.includes(task.id);
        return (
          <label key={task.id} className={`flex cursor-pointer gap-4 rounded-lg border p-4 shadow-soft ${done ? 'border-museum-teal/50 bg-museum-mist' : 'border-museum-navy/10 bg-white/85'}`}>
            <input type="checkbox" checked={done} onChange={() => onToggle(task.id)} className="mt-1 h-5 w-5 accent-museum-teal" />
            <span>
              <span className="block font-semibold text-museum-navy">{task.title}</span>
              <span className="mt-1 block text-sm leading-6 text-museum-stone">{task.description}</span>
              {done ? <span className="mt-2 block text-sm text-museum-teal">已记录完成。继续保持对证据和来源的关注。</span> : null}
            </span>
          </label>
        );
      })}
    </div>
  );
}
