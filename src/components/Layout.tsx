import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';

export default function Layout() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f7f2e8_0%,#eef6f3_55%,#f7f2e8_100%)] text-museum-ink">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
