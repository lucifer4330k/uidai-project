import { useState } from 'react';
import { Shield, AlertCircle, AlertTriangle, CheckCircle, ChevronDown, ChevronUp, MapPin, Calendar, Building } from 'lucide-react';
import { anomalyData } from '../data/sampleData';

export default function Watchtower() {
    const [expandedRow, setExpandedRow] = useState(null);
    const [sortOrder, setSortOrder] = useState('desc');

    const getStatusIcon = (status) => {
        switch (status) {
            case 'red':
                return <AlertCircle className="status-icon red" size={20} />;
            case 'yellow':
                return <AlertTriangle className="status-icon yellow" size={20} />;
            case 'green':
                return <CheckCircle className="status-icon green" size={20} />;
            default:
                return null;
        }
    };

    const getStatusLabel = (status) => {
        switch (status) {
            case 'red':
                return 'Critical - Potential Fraud';
            case 'yellow':
                return 'Warning - Migration Pattern';
            case 'green':
                return 'Normal Operations';
            default:
                return 'Unknown';
        }
    };

    const sortedData = [...anomalyData].sort((a, b) => {
        return sortOrder === 'desc'
            ? b.anomalyScore - a.anomalyScore
            : a.anomalyScore - b.anomalyScore;
    });

    const redCount = anomalyData.filter(d => d.status === 'red').length;
    const yellowCount = anomalyData.filter(d => d.status === 'yellow').length;
    const greenCount = anomalyData.filter(d => d.status === 'green').length;

    return (
        <div className="watchtower">
            <div className="view-header">
                <div className="header-info">
                    <h2><Shield size={24} /> Anomaly Detection Watchtower</h2>
                    <p>Real-time monitoring of suspicious activity patterns across districts</p>
                </div>

                <div className="status-summary">
                    <div className="status-badge red">
                        <AlertCircle size={16} />
                        <span>{redCount} Critical</span>
                    </div>
                    <div className="status-badge yellow">
                        <AlertTriangle size={16} />
                        <span>{yellowCount} Warnings</span>
                    </div>
                    <div className="status-badge green">
                        <CheckCircle size={16} />
                        <span>{greenCount} Normal</span>
                    </div>
                </div>
            </div>

            <div className="table-container">
                <table className="anomaly-table">
                    <thead>
                        <tr>
                            <th>Status</th>
                            <th>District</th>
                            <th>State</th>
                            <th>Type</th>
                            <th
                                className="sortable"
                                onClick={() => setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc')}
                            >
                                Anomaly Score
                                {sortOrder === 'desc' ? <ChevronDown size={14} /> : <ChevronUp size={14} />}
                            </th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedData.map((row) => (
                            <>
                                <tr
                                    key={row.id}
                                    className={`table-row ${row.status} ${expandedRow === row.id ? 'expanded' : ''}`}
                                    onClick={() => setExpandedRow(expandedRow === row.id ? null : row.id)}
                                >
                                    <td>
                                        <div className="status-cell">
                                            {getStatusIcon(row.status)}
                                        </div>
                                    </td>
                                    <td>
                                        <div className="district-cell">
                                            <MapPin size={14} />
                                            {row.district}
                                        </div>
                                    </td>
                                    <td>{row.state}</td>
                                    <td>
                                        <span className={`type-badge ${row.status}`}>
                                            {row.type}
                                        </span>
                                    </td>
                                    <td>
                                        <div className="score-cell">
                                            <div className="score-bar">
                                                <div
                                                    className={`score-fill ${row.status}`}
                                                    style={{ width: `${row.anomalyScore}%` }}
                                                />
                                            </div>
                                            <span className="score-value">{row.anomalyScore.toFixed(1)}</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="date-cell">
                                            <Calendar size={14} />
                                            {row.date}
                                        </div>
                                    </td>
                                    <td>
                                        <button className="drill-down-btn">
                                            {expandedRow === row.id ? 'Hide Details' : 'View Details'}
                                        </button>
                                    </td>
                                </tr>

                                {expandedRow === row.id && (
                                    <tr className="detail-row">
                                        <td colSpan="7">
                                            <div className="detail-content">
                                                <div className="detail-header">
                                                    <h4>Investigation Details - {row.district}</h4>
                                                    <span className={`status-label ${row.status}`}>
                                                        {getStatusLabel(row.status)}
                                                    </span>
                                                </div>

                                                <div className="detail-grid">
                                                    <div className="detail-card">
                                                        <Building size={20} />
                                                        <div>
                                                            <span className="detail-label">Center Location</span>
                                                            <span className="detail-value">{row.center}</span>
                                                        </div>
                                                    </div>

                                                    <div className="detail-card">
                                                        <Calendar size={20} />
                                                        <div>
                                                            <span className="detail-label">Spike Date</span>
                                                            <span className="detail-value">{row.date}</span>
                                                        </div>
                                                    </div>

                                                    {row.dobUpdates && (
                                                        <div className="detail-card">
                                                            <AlertCircle size={20} />
                                                            <div>
                                                                <span className="detail-label">DOB Updates</span>
                                                                <span className="detail-value">
                                                                    {row.dobUpdates.toLocaleString()}
                                                                    <span className="vs-avg">(avg: {row.avgDobUpdates?.toLocaleString()})</span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    )}

                                                    {row.addressUpdates && (
                                                        <div className="detail-card">
                                                            <MapPin size={20} />
                                                            <div>
                                                                <span className="detail-label">Address Updates</span>
                                                                <span className="detail-value">
                                                                    {row.addressUpdates.toLocaleString()}
                                                                    <span className="vs-avg">(avg: {row.avgAddressUpdates?.toLocaleString()})</span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    )}

                                                    <div className="detail-card full-width">
                                                        <div>
                                                            <span className="detail-label">Analysis</span>
                                                            <span className="detail-value">{row.description}</span>
                                                            {row.status === 'red' && (
                                                                <div className="action-required">
                                                                    <AlertCircle size={14} />
                                                                    <span>Immediate investigation required. Standard deviation: {row.stdDev}σ above normal.</span>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
