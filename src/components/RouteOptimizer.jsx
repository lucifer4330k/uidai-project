
import { useState, useEffect } from 'react';
import { Route, MapPin, Truck, Users, ChevronDown, TrendingDown, TrendingUp, Zap, Wifi, WifiOff } from 'lucide-react';
import { pincodeHotspots, routeOptimizerStates } from '../data/sampleData';

export default function RouteOptimizer() {
    const [selectedState, setSelectedState] = useState('Karnataka');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // State for Data & API Status
    const [pincodeData, setPincodeData] = useState([]);
    const [districtName, setDistrictName] = useState('');
    const [isLive, setIsLive] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // Fetch Data Effect
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                // Try fetching from Python Backend
                const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';
                const response = await fetch(`${API_URL}/api/routes?state=${selectedState}`);
                if (response.ok) {
                    const data = await response.json();
                    setPincodeData(data.pincodes);
                    setDistrictName(data.district);
                    setIsLive(true);
                } else {
                    throw new Error('API failed');
                }
            } catch (error) {
                // Fallback to Sample Data
                console.warn('Backend API unreachable, using sample data:', error);
                const fallback = pincodeHotspots[selectedState];
                setPincodeData(fallback?.pincodes || []);
                setDistrictName(fallback?.district || 'Unknown District');
                setIsLive(false);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [selectedState]);

    const getDemandColor = (score) => {
        if (score >= 90) return '#ef4444';
        if (score >= 80) return '#f97316';
        if (score >= 70) return '#eab308';
        return '#22c55e';
    };

    return (
        <div className="route-optimizer-card">
            <div className="optimizer-header">
                <div className="optimizer-title">
                    <Route size={20} />
                    <h3>Smart Route Optimizer</h3>
                    {isLive ? (
                        <span className="api-status-badge live" style={{ fontSize: '0.7rem', padding: '2px 8px', background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                            <Wifi size={10} /> Live API
                        </span>
                    ) : (
                        <span className="api-status-badge offline" style={{ fontSize: '0.7rem', padding: '2px 8px', background: 'rgba(148, 163, 184, 0.1)', color: '#94a3b8', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                            <WifiOff size={10} /> Offline Mode
                        </span>
                    )}
                </div>
                <p className="optimizer-subtitle">Hyper-Local Mobile Camp Recommendations</p>

                <div className="optimizer-dropdown">
                    <button
                        className="dropdown-trigger small"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                        <span>{selectedState}</span>
                        <ChevronDown size={14} className={isDropdownOpen ? 'rotated' : ''} />
                    </button>

                    {isDropdownOpen && (
                        <div className="dropdown-menu">
                            {routeOptimizerStates.map((state) => (
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

            <div className="district-badge">
                <MapPin size={14} />
                <span>{districtName}</span>
            </div>

            {isLoading ? (
                <div className="pincode-list loading-state" style={{ opacity: 0.5 }}>
                    <p style={{ textAlign: 'center', padding: '20px', fontSize: '0.9rem' }}>Loading Pincode Data...</p>
                </div>
            ) : (
                <div className="pincode-list">
                    {pincodeData.map((item, index) => (
                        <div
                            key={item.pincode}
                            className="pincode-card"
                            style={{ '--rank': index + 1 }}
                        >
                            <div className="pincode-rank">#{index + 1}</div>

                            <div className="pincode-main">
                                <div className="pincode-header">
                                    <span className="pincode-number">{item.pincode}</span>
                                    <span className="pincode-area">{item.area}</span>
                                </div>

                                <div className="demand-meter">
                                    <div
                                        className="demand-fill"
                                        style={{
                                            width: `${item.demandScore}%`,
                                            backgroundColor: getDemandColor(item.demandScore)
                                        }}
                                    />
                                </div>

                                <div className="pincode-stats">
                                    <div className="stat-mini">
                                        <TrendingDown size={12} />
                                        <span>Enrol: {item.enrolment_0_5}</span>
                                    </div>
                                    <div className="stat-mini">
                                        <TrendingUp size={12} />
                                        <span>Bio: {item.biometricUpdates}</span>
                                    </div>
                                    <div className="stat-mini">
                                        <Users size={12} />
                                        <span>~{item.estimatedFootfall}/day</span>
                                    </div>
                                </div>
                            </div>

                            <div className="pincode-score">
                                <span
                                    className="score-value"
                                    style={{ color: getDemandColor(item.demandScore) }}
                                >
                                    {item.demandScore}
                                </span>
                                <span className="score-label">/100</span>
                            </div>

                            <div className="pincode-details">
                                <div className="recommendation">
                                    <Truck size={14} />
                                    <span>{item.recommendation}</span>
                                </div>
                                <div className="reason">
                                    <Zap size={12} />
                                    <span>{item.reason}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <div className="optimizer-insight">
                <div className="insight-icon">💡</div>
                <div className="insight-text">
                    <strong>Insight:</strong> Areas with low child enrolments but high adult biometric updates
                    indicate mature residential zones where children are growing up, but new babies aren't being enrolled
                    (possibly due to lack of maternity wards or centers nearby).
                </div>
            </div>
        </div>
    );
}
