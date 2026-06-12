import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import DashboardPage from './pages/DashboardPage';
import ExhibitionPage from './pages/ExhibitionPage';
import FossilsPage from './pages/FossilsPage';
import ReferencesPage from './pages/ReferencesPage';
import SecurityPage from './pages/SecurityPage';
import TasksPage from './pages/TasksPage';
import TimelinePage from './pages/TimelinePage';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<DashboardPage />} />
        <Route path="fossils" element={<FossilsPage />} />
        <Route path="timeline" element={<TimelinePage />} />
        <Route path="exhibition" element={<ExhibitionPage />} />
        <Route path="tasks" element={<TasksPage />} />
        <Route path="security" element={<SecurityPage />} />
        <Route path="references" element={<ReferencesPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
