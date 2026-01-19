import { useState } from 'react';
import { MapPin, Users, ArrowUpDown, Info } from 'lucide-react';
import { stateGeoData, states } from '../data/sampleData';

export default function MacroView() {
    const [viewMode, setViewMode] = useState('enrolment'); // 'enrolment' or 'demographic'
    const [selectedState, setSelectedState] = useState(null);

    const getIntensityColor = (value) => {
        if (value > 80) return '#ef4444'; // Red
        if (value > 60) return '#f97316'; // Orange
        if (value > 40) return '#eab308'; // Yellow
        if (value > 20) return '#22c55e'; // Green
        return '#3b82f6'; // Blue
    };

    const getMigrationLabel = (ratio) => {
        if (ratio > 3) return 'High Migration Hub';
        if (ratio > 2) return 'Moderate Migration';
        if (ratio > 1) return 'Balanced Activity';
        return 'Service Desert';
    };

    const sortedStates = [...states].sort((a, b) => {
        const valueA = viewMode === 'enrolment'
            ? stateGeoData[a]?.enrolmentIntensity || 0
            : stateGeoData[a]?.demographicIntensity || 0;
        const valueB = viewMode === 'enrolment'
            ? stateGeoData[b]?.enrolmentIntensity || 0
            : stateGeoData[b]?.demographicIntensity || 0;
        return valueB - valueA;
    });

    return (
        <div className="macro-view">
            <div className="view-header">
                <div className="header-info">
                    <h2><MapPin size={24} /> Geospatial Intelligence</h2>
                    <p>Visualize Service Deserts and Migration Hubs across India</p>
                </div>

                <div className="toggle-container" style={{ background: '#1e293b', padding: '4px', borderRadius: '8px', border: '1px solid #334155' }}>
                    <button
                        className={`toggle-btn ${viewMode === 'enrolment' ? 'active' : ''}`}
                        onClick={() => setViewMode('enrolment')}
                        style={{
                            background: viewMode === 'enrolment' ? 'rgba(99, 102, 241, 0.2)' : 'transparent',
                            color: viewMode === 'enrolment' ? '#818cf8' : '#94a3b8',
                            border: 'none',
                            padding: '6px 12px',
                            borderRadius: '6px',
                            fontSize: '0.85rem',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            transition: 'all 0.2s'
                        }}
                    >
                        <Users size={14} />
                        <span className="toggle-text">Enrolment Intensity</span>
                    </button>
                    <button
                        className={`toggle-btn ${viewMode === 'demographic' ? 'active' : ''}`}
                        onClick={() => setViewMode('demographic')}
                        style={{
                            background: viewMode === 'demographic' ? 'rgba(236, 72, 153, 0.2)' : 'transparent',
                            color: viewMode === 'demographic' ? '#f472b6' : '#94a3b8',
                            border: 'none',
                            padding: '6px 12px',
                            borderRadius: '6px',
                            fontSize: '0.85rem',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            transition: 'all 0.2s'
                        }}
                    >
                        <ArrowUpDown size={14} />
                        <span className="toggle-text">Demographic Updates</span>
                    </button>
                </div>
            </div>

            <div className="macro-layout">
                <div className="map-section">
                    <div className="india-map-grid">
                        {sortedStates.map((state) => {
                            const data = stateGeoData[state];
                            if (!data) return null;

                            const intensity = viewMode === 'enrolment' ? data.enrolmentIntensity : data.demographicIntensity;
                            const color = getIntensityColor(intensity);

                            return (
                                <div
                                    key={state}
                                    className={`state-card ${selectedState === state ? 'selected' : ''}`}
                                    style={{
                                        '--intensity-color': color,
                                        '--intensity': intensity / 100
                                    }}
                                    onClick={() => setSelectedState(selectedState === state ? null : state)}
                                >
                                    <div className="state-name">{state}</div>
                                    <div className="intensity-bar">
                                        <div
                                            className="intensity-fill"
                                            style={{ width: `${intensity}%`, backgroundColor: color }}
                                        />
                                    </div>
                                    <div className="intensity-value">{intensity}%</div>

                                    {selectedState === state && (
                                        <div className="state-popup">
                                            <div className="popup-header">
                                                <Info size={16} />
                                                <span>{state}</span>
                                            </div>
                                            <div className="popup-stats">
                                                <div className="stat">
                                                    <span className="stat-label">Update-to-Enrolment Ratio</span>
                                                    <span className="stat-value">{data.updateRatio}x</span>
                                                </div>
                                                <div className="stat">
                                                    <span className="stat-label">Classification</span>
                                                    <span className={`stat-badge ${data.updateRatio > 2 ? 'migration-hub' : 'service-desert'}`}>
                                                        {getMigrationLabel(data.updateRatio)}
                                                    </span>
                                                </div>
                                                <div className="stat">
                                                    <span className="stat-label">Enrolment Intensity</span>
                                                    <span className="stat-value">{data.enrolmentIntensity}%</span>
                                                </div>
                                                <div className="stat">
                                                    <span className="stat-label">Demographic Updates</span>
                                                    <span className="stat-value">{data.demographicIntensity}%</span>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    <div className="legend">
                        <h4>Intensity Scale</h4>
                        <div className="legend-items">
                            <div className="legend-item">
                                <span className="legend-color" style={{ background: '#3b82f6' }} />
                                <span>0-20%</span>
                            </div>
                            <div className="legend-item">
                                <span className="legend-color" style={{ background: '#22c55e' }} />
                                <span>20-40%</span>
                            </div>
                            <div className="legend-item">
                                <span className="legend-color" style={{ background: '#eab308' }} />
                                <span>40-60%</span>
                            </div>
                            <div className="legend-item">
                                <span className="legend-color" style={{ background: '#f97316' }} />
                                <span>60-80%</span>
                            </div>
                            <div className="legend-item">
                                <span className="legend-color" style={{ background: '#ef4444' }} />
                                <span>80-100%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

