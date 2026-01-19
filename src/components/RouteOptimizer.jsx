import { useState } from 'react';
import { Route, MapPin, Truck, Users, Calendar, ChevronDown, TrendingDown, TrendingUp, Zap } from 'lucide-react';
import { pincodeHotspots, routeOptimizerStates } from '../data/sampleData';

export default function RouteOptimizer() {
    const [selectedState, setSelectedState] = useState('Karnataka');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const stateData = pincodeHotspots[selectedState];
    const pincodes = stateData?.pincodes || [];

    const getDemandColor = (score) => {
        if (score >= 90) return '#ef4444';
        if (score >= 80) return '#f97316';
        if (score >= 70) return '#eab308';
        return '#22c55e';
    };

    const getDemandLabel = (score) => {
        if (score >= 90) return 'Critical Demand';
        if (score >= 80) return 'High Demand';
        if (score >= 70) return 'Moderate Demand';
        return 'Low Demand';
    };

    return (
        <div className="route-optimizer-card">
            <div className="optimizer-header">
                <div className="optimizer-title">
                    <Route size={20} />
                    <h3>Smart Route Optimizer</h3>
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
                <span>{stateData?.district}</span>
            </div>

            <div className="pincode-list">
                {pincodes.map((item, index) => (
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
