
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Overview from './pages/Overview';
import ForecasterPage from './pages/ForecasterPage';
import WatchtowerPage from './pages/WatchtowerPage';
import RouteOptimizerPage from './pages/RouteOptimizerPage';

export default function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <main className="main-wrapper">
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/geo" element={<Navigate to="/" replace />} />
            <Route path="/forecast" element={<ForecasterPage />} />
            <Route path="/watchtower" element={<WatchtowerPage />} />
            <Route path="/optimizer" element={<RouteOptimizerPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
