import { Map, TrendingUp, Shield } from 'lucide-react';

const tabs = [
    { id: 'macro', label: 'Macro View', icon: Map, subtitle: 'Geospatial Intelligence' },
    { id: 'forecaster', label: 'Forecaster', icon: TrendingUp, subtitle: 'Resource Allocation' },
    { id: 'watchtower', label: 'Watchtower', icon: Shield, subtitle: 'Anomaly Detection' }
];

export default function TabNavigation({ activeTab, setActiveTab }) {
    return (
        <nav className="tab-navigation">
            {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                    <button
                        key={tab.id}
                        className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        <Icon size={20} />
                        <div className="tab-content">
                            <span className="tab-label">{tab.label}</span>
                            <span className="tab-subtitle">{tab.subtitle}</span>
                        </div>
                    </button>
                );
            })}
        </nav>
    );
}
