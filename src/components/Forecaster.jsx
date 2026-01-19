import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, ComposedChart } from 'recharts';
import { TrendingUp, Calendar, AlertTriangle, ChevronDown } from 'lucide-react';
import { timeSeriesData, stateTimeSeriesData, states } from '../data/sampleData';

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
                <div className="chart-tooltip">
                    <p className="tooltip-label">{label}</p>
                    {payload.map((entry, index) => (
                        <p key={index} style={{ color: entry.color }}>
                            {entry.name}: {entry.value?.toLocaleString() || 'N/A'}
                        </p>
                    ))}
                </div>
            );
        }
        return null;
    };

    return (
        <div className="forecaster">
            <div className="view-header">
                <div className="header-info">
                    <h2><TrendingUp size={24} /> Resource Allocation Forecaster</h2>
                    <p>Predict Mandatory Biometric Updates based on historical enrolment patterns</p>
                </div>

                <div className="dropdown-container">
                    <button
                        className="dropdown-trigger"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                        <span>{selectedState}</span>
                        <ChevronDown size={16} className={isDropdownOpen ? 'rotated' : ''} />
                    </button>

                    {isDropdownOpen && (
                        <div className="dropdown-menu">
                            {availableStates.map((state) => (
                                <button
                                    key={state}
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

            <div className="forecaster-content">
                <div className="chart-section">
                    <div className="chart-header">
                        <h3>Enrolment → Biometric Update Correlation</h3>
                        <div className="chart-legend">
                            <span className="legend-dot enrolment" /> Age 0-5 Enrolments (Lead Indicator)
                            <span className="legend-dot biometric" /> Biometric Updates (Lagging 5 Years)
                        </div>
                    </div>

                    <div className="chart-wrapper">
                        <ResponsiveContainer width="100%" height={350}>
                            <ComposedChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                                <defs>
                                    <linearGradient id="enrolmentGradient" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                                    </linearGradient>
                                    <linearGradient id="biometricGradient" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#06b6d4" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                                <XAxis
                                    dataKey="month"
                                    stroke="#94a3b8"
                                    tick={{ fill: '#94a3b8', fontSize: 12 }}
                                    axisLine={{ stroke: '#334155' }}
                                />
                                <YAxis
                                    stroke="#94a3b8"
                                    tick={{ fill: '#94a3b8', fontSize: 12 }}
                                    axisLine={{ stroke: '#334155' }}
                                    tickFormatter={(value) => `${(value / 1000).toFixed(0)}K`}
                                />
                                <Tooltip content={<CustomTooltip />} />
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
                                    dot={{ fill: '#06b6d4', strokeWidth: 2, r: 4 }}
                                    activeDot={{ r: 6, fill: '#06b6d4' }}
                                    name="Biometric Updates"
                                />
                            </ComposedChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="action-cards">
                    <div className="action-card primary">
                        <div className="card-icon">
                            <AlertTriangle size={32} />
                        </div>
                        <div className="card-content">
                            <h3>Predicted Surge</h3>
                            <div className="surge-value">{prediction.surge}</div>
                            <p className="surge-date">
                                <Calendar size={14} /> Expected in {prediction.month}
                            </p>
                        </div>
                    </div>

                    <div className="action-card secondary">
                        <div className="card-content">
                            <h3>Recommended Action</h3>
                            <p className="recommendation">
                                Deploy <strong>{prediction.extraKits} extra biometric kits</strong> to {selectedState} starting 2 months before peak.
                            </p>
                            <ul className="action-list">
                                <li>Increase staff allocation by 30%</li>
                                <li>Extend center hours (8 AM - 8 PM)</li>
                                <li>Setup temporary camps in high-density areas</li>
                            </ul>
                        </div>
                    </div>

                    <div className="action-card info">
                        <div className="card-content">
                            <h3>Model Accuracy</h3>
                            <div className="accuracy-meter">
                                <div className="accuracy-fill" style={{ width: '87%' }} />
                            </div>
                            <p className="accuracy-value">87% prediction accuracy (based on historical correlation)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
