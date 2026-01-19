
import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, ComposedChart } from 'recharts';
import { TrendingUp, Calendar, AlertTriangle, ChevronDown, CheckCircle } from 'lucide-react';
import { timeSeriesData, stateTimeSeriesData } from '../data/sampleData';

export default function Forecaster() {
    const [selectedState, setSelectedState] = useState('Karnataka');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const stateData = stateTimeSeriesData[selectedState] || stateTimeSeriesData['Karnataka'];
    const chartData = stateData?.data || timeSeriesData;
    const prediction = stateData?.prediction || { surge: '+40%', month: 'Nov 2026', extraKits: 5 };

    const availableStates = Object.keys(stateTimeSeriesData);

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className="chart-tooltip" style={{ background: '#1e293b', border: '1px solid #334155', padding: '12px', borderRadius: '8px' }}>
                    <p className="tooltip-label" style={{ color: '#f8fafc', fontWeight: 600, marginBottom: '8px' }}>{label}</p>
                    {payload.map((entry, index) => (
                        <p key={index} style={{ color: entry.color, fontSize: '0.8rem', display: 'flex', gap: '8px', alignItems: 'center' }}>
                            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: entry.color }}></span>
                            {entry.name}: {entry.value?.toLocaleString() || 'N/A'}
                        </p>
                    ))}
                </div>
            );
        }
        return null;
    };

    return (
        <div className="forecaster-layout">
            {/* Left Column: Charts */}
            <div className="chart-container card">
                <div className="chart-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                    <div>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: 600 }}>Enrolment vs Biometric Updates</h3>
                        <p style={{ fontSize: '0.85rem', color: '#64748b' }}>Correlation analysis (5-year lag)</p>
                    </div>

                    <div className="dropdown-container" style={{ position: 'relative' }}>
                        <button
                            className="dropdown-trigger btn-outline"
                            style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 12px' }}
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        >
                            <span>{selectedState}</span>
                            <ChevronDown size={14} className={isDropdownOpen ? 'rotated' : ''} />
                        </button>

                        {isDropdownOpen && (
                            <div className="dropdown-menu" style={{ position: 'absolute', top: '100%', right: 0, marginTop: '8px', background: '#1e293b', border: '1px solid #334155', borderRadius: '8px', width: '180px', zIndex: 20 }}>
                                {availableStates.map((state) => (
                                    <button
                                        key={state}
                                        style={{ display: 'block', width: '100%', padding: '10px 16px', textAlign: 'left', background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', transition: 'all 0.2s' }}
                                        className={`dropdown-item ${selectedState === state ? 'active' : ''}`}
                                        onClick={() => {
                                            setSelectedState(state);
                                            setIsDropdownOpen(false);
                                        }}
                                    >
                                        {state}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                <div className="chart-wrapper" style={{ height: '300px' }}>
                    <ResponsiveContainer width="100%" height="100%">
                        <ComposedChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                            <defs>
                                <linearGradient id="enrolmentGradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                            <XAxis
                                dataKey="month"
                                stroke="#64748b"
                                tick={{ fill: '#64748b', fontSize: 11 }}
                                axisLine={false}
                                tickLine={false}
                                dy={10}
                            />
                            <YAxis
                                stroke="#64748b"
                                tick={{ fill: '#64748b', fontSize: 11 }}
                                axisLine={false}
                                tickLine={false}
                                tickFormatter={(value) => `${(value / 1000).toFixed(0)}K`}
                            />
                            <Tooltip content={<CustomTooltip />} />
                            <Legend wrapperStyle={{ paddingTop: '20px' }} />
                            <Area
                                type="monotone"
                                dataKey="enrolments_0_5"
                                stroke="#8b5cf6"
                                strokeWidth={2}
                                fill="url(#enrolmentGradient)"
                                strokeDasharray="5 5"
                                name="Enrolments (0-5)"
                            />
                            <Line
                                type="monotone"
                                dataKey="biometricUpdates"
                                stroke="#06b6d4"
                                strokeWidth={3}
                                dot={{ fill: '#06b6d4', strokeWidth: 0, r: 4 }}
                                activeDot={{ r: 6, fill: '#06b6d4', strokeWidth: 0 }}
                                name="Biometric Updates"
                            />
                        </ComposedChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Right Column: Actions */}
            <div className="action-cards">
                <div className="action-card primary">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                        <div style={{ padding: '8px', background: 'rgba(99, 102, 241, 0.2)', borderRadius: '8px', color: '#6366f1' }}>
                            <TrendingUp size={20} />
                        </div>
                        <div>
                            <h4 style={{ fontSize: '0.9rem', fontWeight: 600 }}>Predicted Surge</h4>
                            <p style={{ fontSize: '0.8rem', color: '#64748b' }}>Expected in {prediction.month}</p>
                        </div>
                    </div>
                    <div className="surge-value">{prediction.surge}</div>
                </div>

                <div className="action-card">
                    <h4 style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Calendar size={16} className="text-blue-500" /> Recommendation
                    </h4>
                    <p className="recommendation" style={{ lineHeight: '1.5', color: '#e2e8f0', border: 'none', padding: 0, marginTop: 0 }}>
                        Deploy <strong>{prediction.extraKits} extra biometric kits</strong> to {selectedState} starting 2 months before peak.
                    </p>
                </div>

                <div className="action-card">
                    <h4 style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <CheckCircle size={16} className="text-green-500" /> Model Accuracy
                    </h4>
                    <div className="accuracy-meter" style={{ height: '6px', background: '#1e293b', borderRadius: '3px', marginBottom: '8px' }}>
                        <div className="accuracy-fill" style={{ width: '87%', height: '100%', background: '#10b981', borderRadius: '3px' }} />
                    </div>
                    <p className="accuracy-value" style={{ fontSize: '0.8rem', color: '#94a3b8' }}>87% confidence based on historical data</p>
                </div>
            </div>
        </div>
    );
}
