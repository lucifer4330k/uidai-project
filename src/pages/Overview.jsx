
import { dashboardStats } from '../data/sampleData';
import MacroView from '../components/MacroView';
import { Users, FileText, Fingerprint, Activity, AlertTriangle } from 'lucide-react';

export default function Overview() {
    const stats = [
        { label: 'Total Enrolments', value: (dashboardStats.totalEnrolments / 1000000).toFixed(2) + 'M', icon: Users, color: 'text-blue-500' },
        { label: 'Demographic Updates', value: (dashboardStats.totalDemographicUpdates / 1000000).toFixed(2) + 'M', icon: FileText, color: 'text-indigo-500' },
        { label: 'Biometric Updates', value: (dashboardStats.totalBiometricUpdates / 1000000).toFixed(2) + 'M', icon: Fingerprint, color: 'text-cyan-500' },
        { label: 'Active Alerts', value: dashboardStats.activeAnomalies, icon: AlertTriangle, color: 'text-red-500' },
    ];

    return (
        <div className="overview-page">
            <div className="page-header">
                <h1 className="page-title">Operations Overview</h1>
                <p className="page-subtitle">Real-time insights across Aadhaar ecosystem</p>
            </div>

            <div className="stats-container">
                {stats.map((stat, index) => (
                    <div key={index} className="stat-card-neo">
                        <div className="stat-header">
                            <span className="stat-label">{stat.label}</span>
                            <div className="stat-icon">
                                <stat.icon size={20} />
                            </div>
                        </div>
                        <div className="stat-value">{stat.value}</div>
                    </div>
                ))}
            </div>

            <div className="dashboard-grid">
                <div className="col-span-12">
                    <MacroView />
                </div>
            </div>
        </div>
    );
}
