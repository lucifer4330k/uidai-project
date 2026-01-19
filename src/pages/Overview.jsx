
import { dashboardStats } from '../data/sampleData';
import { Users, FileText, Fingerprint, AlertTriangle, Activity, CheckCircle, Clock } from 'lucide-react';
import { NavLink } from 'react-router-dom';

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
                <p className="page-subtitle">Real-time system health and critical alerts</p>
            </div>

            {/* Stats Row */}
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

            {/* Recent Activity & System Health Grid */}
            <div className="dashboard-grid">

                {/* Recent Alerts */}
                <div className="card col-span-8">
                    <div className="card-header" style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between' }}>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: 600 }}>Critical Alerts</h3>
                        <NavLink to="/watchtower" className="btn-outline" style={{ padding: '4px 12px', fontSize: '0.8rem', textDecoration: 'none' }}>View All</NavLink>
                    </div>

                    <div className="alert-list" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <div className="alert-item" style={{ display: 'flex', gap: '12px', padding: '12px', background: 'rgba(239, 68, 68, 0.1)', borderRadius: '8px', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
                            <AlertTriangle size={18} className="text-red-500" style={{ marginTop: '2px' }} />
                            <div>
                                <h4 style={{ fontWeight: 600, fontSize: '0.9rem', color: '#fca5a5' }}>High Anomaly Score: Center #4299</h4>
                                <p style={{ fontSize: '0.8rem', color: '#94a3b8' }}>34 DOB updates in 48 hours (300% surge)</p>
                            </div>
                        </div>

                        <div className="alert-item" style={{ display: 'flex', gap: '12px', padding: '12px', background: 'rgba(245, 158, 11, 0.1)', borderRadius: '8px', border: '1px solid rgba(245, 158, 11, 0.2)' }}>
                            <Activity size={18} className="text-amber-500" style={{ marginTop: '2px' }} />
                            <div>
                                <h4 style={{ fontWeight: 600, fontSize: '0.9rem', color: '#fcd34d' }}>Address Update Spike: Bangalore East</h4>
                                <p style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Migration pattern detected from District Code 27</p>
                            </div>
                        </div>

                        <div className="alert-item" style={{ display: 'flex', gap: '12px', padding: '12px', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '8px', border: '1px solid rgba(59, 130, 246, 0.2)' }}>
                            <Clock size={18} className="text-blue-500" style={{ marginTop: '2px' }} />
                            <div>
                                <h4 style={{ fontWeight: 600, fontSize: '0.9rem', color: '#93c5fd' }}>System Maintenance Scheduled</h4>
                                <p style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Deduplication engine maintenance at 02:00 AM IST</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* System Health / Quick Actions */}
                <div className="card col-span-4">
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '20px' }}>System Health</h3>

                    <div className="health-metrics" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        <div className="metric">
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', fontSize: '0.85rem' }}>
                                <span style={{ color: '#94a3b8' }}>API Latency</span>
                                <span style={{ color: '#10b981' }}>45ms</span>
                            </div>
                            <div style={{ height: '4px', background: '#1e293b', borderRadius: '2px' }}>
                                <div style={{ width: '20%', height: '100%', background: '#10b981', borderRadius: '2px' }}></div>
                            </div>
                        </div>

                        <div className="metric">
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', fontSize: '0.85rem' }}>
                                <span style={{ color: '#94a3b8' }}>Ingestion Rate</span>
                                <span style={{ color: '#3b82f6' }}>2.4k/sec</span>
                            </div>
                            <div style={{ height: '4px', background: '#1e293b', borderRadius: '2px' }}>
                                <div style={{ width: '65%', height: '100%', background: '#3b82f6', borderRadius: '2px' }}></div>
                            </div>
                        </div>

                        <div className="metric">
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', fontSize: '0.85rem' }}>
                                <span style={{ color: '#94a3b8' }}>Error Rate</span>
                                <span style={{ color: '#10b981' }}>0.01%</span>
                            </div>
                            <div style={{ height: '4px', background: '#1e293b', borderRadius: '2px' }}>
                                <div style={{ width: '2%', height: '100%', background: '#10b981', borderRadius: '2px' }}></div>
                            </div>
                        </div>
                    </div>

                    <div className="quick-actions" style={{ marginTop: '32px' }}>
                        <h4 style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Quick Actions</h4>
                        <NavLink to="/optimizer" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', textDecoration: 'none' }}>
                            Deploy Mobile Van
                        </NavLink>
                    </div>
                </div>

            </div>
        </div>
    );
}
