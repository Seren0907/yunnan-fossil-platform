import { NavLink } from 'react-router-dom';

const links = [
  { to: '/', label: '首页' },
  { to: '/fossils', label: '化石资源库' },
  { to: '/timeline', label: '生命演化时间轴' },
  { to: '/exhibition', label: '澄江数字展厅' },
  { to: '/tasks', label: '互动学习任务' },
  { to: '/security', label: '数据安全管理' },
  { to: '/references', label: '参考资料' },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/40 bg-museum-navy/95 text-white backdrop-blur">
      <nav className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 lg:flex-row lg:items-center lg:justify-between">
        <NavLink to="/" className="text-lg font-semibold tracking-wide">
          云南化石生命演化数字科普平台
        </NavLink>
        <div className="flex flex-wrap gap-2 text-sm">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `rounded px-3 py-2 transition ${isActive ? 'bg-museum-teal text-white' : 'text-white/82 hover:bg-white/10'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}
