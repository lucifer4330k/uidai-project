import { useState } from 'react';
import TabNavigation from './components/TabNavigation';
import MacroView from './components/MacroView';
import Forecaster from './components/Forecaster';
import Watchtower from './components/Watchtower';
import { dashboardStats } from './data/sampleData';
import { Activity, Users, FileEdit, Fingerprint } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('macro');

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'macro':
        return <MacroView />;
      case 'forecaster':
        return <Forecaster />;
      case 'watchtower':
        return <Watchtower />;
      default:
        return <MacroView />;
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <div className="logo-section">
          <div className="logo">
            <Fingerprint size={32} />
          </div>
          <div className="title-section">
            <h1>Aadhaar Ops</h1>
            <span className="subtitle">Command Center Dashboard</span>
          </div>
        </div>

        <div className="stats-bar">
          <div className="stat-item">
            <Users size={18} />
            <div>
              <span className="stat-value">{(dashboardStats.totalEnrolments / 1000000).toFixed(2)}M</span>
              <span className="stat-label">Enrolments</span>
            </div>
          </div>
          <div className="stat-item">
            <FileEdit size={18} />
            <div>
              <span className="stat-value">{(dashboardStats.totalDemographicUpdates / 1000000).toFixed(2)}M</span>
              <span className="stat-label">Demographic Updates</span>
            </div>
          </div>
          <div className="stat-item">
            <Fingerprint size={18} />
            <div>
              <span className="stat-value">{(dashboardStats.totalBiometricUpdates / 1000000).toFixed(2)}M</span>
              <span className="stat-label">Biometric Updates</span>
            </div>
          </div>
          <div className="stat-item highlight">
            <Activity size={18} />
            <div>
              <span className="stat-value">{dashboardStats.activeAnomalies}</span>
              <span className="stat-label">Active Alerts</span>
            </div>
          </div>
        </div>
      </header>

      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="main-content">
        {renderActiveTab()}
      </main>

      <footer className="app-footer">
        <span>UIDAI Analytics Dashboard v1.0</span>
        <span>Last Updated: {new Date().toLocaleDateString('en-IN', {
          day: '2-digit',
          month: 'short',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })}</span>
      </footer>
    </div>
  );
}

export default App;
