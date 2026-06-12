import { Link } from 'react-router-dom';

type Props = {
  title: string;
  description: string;
  to: string;
};

export default function FeatureCard({ title, description, to }: Props) {
  return (
    <Link to={to} className="group rounded-lg border border-museum-navy/10 bg-white/80 p-5 shadow-soft transition hover:-translate-y-0.5 hover:border-museum-teal/50">
      <div className="flex items-center justify-between gap-4">
        <h3 className="font-semibold text-museum-navy">{title}</h3>
        <span className="rounded bg-museum-mist px-2 py-1 text-museum-teal transition group-hover:bg-museum-teal group-hover:text-white">进入</span>
      </div>
      <p className="mt-3 text-sm leading-6 text-museum-stone">{description}</p>
    </Link>
  );
}
