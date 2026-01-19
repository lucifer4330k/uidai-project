
import { useState } from 'react';
import { Shield, AlertCircle, AlertTriangle, CheckCircle, ChevronDown, ChevronUp, MapPin, Calendar, Building, X } from 'lucide-react';
import { anomalyData } from '../data/sampleData';

// Styles embedded for smoother UI (rounded corners, soft shadows)
const cardStyle = {
    background: 'var(--bg-card)',
    border: '1px solid var(--border-color)',
    borderRadius: '24px', // Extra smooth
    padding: '0',
    overflow: 'hidden',
    boxShadow: 'var(--shadow-md)'
};

const badgeStyle = (color) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    padding: '6px 14px',
    borderRadius: '20px',
    fontSize: '0.8rem',
    fontWeight: '600',
    background: color === 'red' ? 'rgba(239, 68, 68, 0.1)' : color === 'yellow' ? 'rgba(245, 158, 11, 0.1)' : 'rgba(16, 185, 129, 0.1)',
    color: color === 'red' ? '#ef4444' : color === 'yellow' ? '#f59e0b' : '#10b981',
    border: `1px solid ${color === 'red' ? 'rgba(239, 68, 68, 0.2)' : color === 'yellow' ? 'rgba(245, 158, 11, 0.2)' : 'rgba(16, 185, 129, 0.2)'}`
});

export default function Watchtower() {
    const [expandedRow, setExpandedRow] = useState(null);
    const [sortOrder, setSortOrder] = useState('desc');
    const [filter, setFilter] = useState('all'); // all, red, yellow, green

    const getStatusIcon = (status) => {
        switch (status) {
            case 'red': return <AlertCircle className="text-red-500" size={18} />;
            case 'yellow': return <AlertTriangle className="text-amber-500" size={18} />;
            case 'green': return <CheckCircle className="text-emerald-500" size={18} />;
            default: return null;
        }
    };

    const filteredData = anomalyData.filter(d => filter === 'all' || d.status === filter);

    const sortedData = [...filteredData].sort((a, b) => {
        return sortOrder === 'desc'
            ? b.anomalyScore - a.anomalyScore
            : a.anomalyScore - b.anomalyScore;
    });

    const counts = {
        red: anomalyData.filter(d => d.status === 'red').length,
        yellow: anomalyData.filter(d => d.status === 'yellow').length,
        green: anomalyData.filter(d => d.status === 'green').length
    };

    return (
        <div className="watchtower-layout" style={{ maxWidth: '1200px', margin: '0 auto' }}>

            {/* Status Summary Cards */}
            <div className="status-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '32px' }}>
                <div style={{ ...cardStyle, padding: '20px', borderRadius: '20px', cursor: 'pointer', border: filter === 'red' ? '1px solid #ef4444' : cardStyle.border }} onClick={() => setFilter(filter === 'red' ? 'all' : 'red')}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                        <h4 style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Critical Anomalies</h4>
                        <div style={{ background: 'rgba(239, 68, 68, 0.2)', padding: '6px', borderRadius: '12px', color: '#ef4444' }}><AlertCircle size={20} /></div>
                    </div>
                    <div style={{ fontSize: '2rem', fontWeight: 700, color: '#f8fafc' }}>{counts.red}</div>
                    <div style={{ fontSize: '0.8rem', color: '#ef4444', marginTop: '4px' }}>Immediate Action Required</div>
                </div>

                <div style={{ ...cardStyle, padding: '20px', borderRadius: '20px', cursor: 'pointer', border: filter === 'yellow' ? '1px solid #f59e0b' : cardStyle.border }} onClick={() => setFilter(filter === 'yellow' ? 'all' : 'yellow')}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                        <h4 style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Warnings</h4>
                        <div style={{ background: 'rgba(245, 158, 11, 0.2)', padding: '6px', borderRadius: '12px', color: '#f59e0b' }}><AlertTriangle size={20} /></div>
                    </div>
                    <div style={{ fontSize: '2rem', fontWeight: 700, color: '#f8fafc' }}>{counts.yellow}</div>
                    <div style={{ fontSize: '0.8rem', color: '#f59e0b', marginTop: '4px' }}>Monitor Closely</div>
                </div>

                <div style={{ ...cardStyle, padding: '20px', borderRadius: '20px', cursor: 'pointer', border: filter === 'green' ? '1px solid #10b981' : cardStyle.border }} onClick={() => setFilter(filter === 'green' ? 'all' : 'green')}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                        <h4 style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Normal Operations</h4>
                        <div style={{ background: 'rgba(16, 185, 129, 0.2)', padding: '6px', borderRadius: '12px', color: '#10b981' }}><CheckCircle size={20} /></div>
                    </div>
                    <div style={{ fontSize: '2rem', fontWeight: 700, color: '#f8fafc' }}>{counts.green}</div>
                    <div style={{ fontSize: '0.8rem', color: '#10b981', marginTop: '4px' }}>Systems Nominal</div>
                </div>
            </div>

            {/* Main Table Card */}
            <div style={cardStyle}>
                <div style={{ padding: '24px', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 600 }}>Active Flags</h3>
                    {filter !== 'all' && (
                        <button onClick={() => setFilter('all')} style={{ background: 'none', border: 'none', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer', fontSize: '0.9rem' }}>
                            <X size={14} /> Clear Filter
                        </button>
                    )}
                </div>

                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                    <thead>
                        <tr style={{ background: 'rgba(30, 41, 59, 0.5)', color: '#94a3b8', fontSize: '0.85rem', textTransform: 'uppercase' }}>
                            <th style={{ padding: '16px 24px' }}>Status</th>
                            <th style={{ padding: '16px 24px' }}>District</th>
                            <th style={{ padding: '16px 24px' }}>Type</th>
                            <th style={{ padding: '16px 24px', cursor: 'pointer' }} onClick={() => setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc')}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                    Score {sortOrder === 'desc' ? <ChevronDown size={14} /> : <ChevronUp size={14} />}
                                </div>
                            </th>
                            <th style={{ padding: '16px 24px' }}>Date</th>
                            <th style={{ padding: '16px 24px' }}></th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedData.map((row) => (
                            <tr key={row.id} style={{ borderBottom: '1px solid var(--border-color)', transition: 'background 0.2s', cursor: 'pointer', background: expandedRow === row.id ? 'rgba(56, 189, 248, 0.05)' : 'transparent' }} onClick={() => setExpandedRow(expandedRow === row.id ? null : row.id)}>
                                <td style={{ padding: '20px 24px' }}>{getStatusIcon(row.status)}</td>
                                <td style={{ padding: '20px 24px', fontWeight: 500 }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <MapPin size={14} className="text-slate-400" />
                                        {row.district}, {row.state}
                                    </div>
                                </td>
                                <td style={{ padding: '20px 24px' }}>
                                    <span style={{
                                        padding: '4px 10px',
                                        borderRadius: '12px',
                                        background: '#1e293b',
                                        border: '1px solid #334155',
                                        fontSize: '0.75rem',
                                        color: '#cbd5e1'
                                    }}>
                                        {row.type}
                                    </span>
                                </td>
                                <td style={{ padding: '20px 24px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                        <div style={{ width: '80px', height: '6px', background: '#334155', borderRadius: '3px', overflow: 'hidden' }}>
                                            <div style={{ width: `${row.anomalyScore}%`, height: '100%', background: row.status === 'red' ? '#ef4444' : row.status === 'yellow' ? '#f59e0b' : '#10b981', borderRadius: '3px' }} />
                                        </div>
                                        <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>{row.anomalyScore}</span>
                                    </div>
                                </td>
                                <td style={{ padding: '20px 24px', color: '#94a3b8', fontSize: '0.9rem' }}>{row.date}</td>
                                <td style={{ padding: '20px 24px', textAlign: 'right' }}>
                                    <ChevronDown size={18} style={{ transform: expandedRow === row.id ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s', color: '#64748b' }} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {expandedRow && (
                    <div style={{ background: 'rgba(15, 23, 42, 0.5)', padding: '24px', borderTop: '1px solid var(--border-color)', animation: 'slideDown 0.3s ease' }}>
                        {(() => {
                            const row = anomalyData.find(d => d.id === expandedRow);
                            return (
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                        <h4 style={{ fontSize: '1rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <Building size={16} className="text-indigo-400" /> Center Details
                                        </h4>
                                        <div style={{ background: '#1e293b', padding: '16px', borderRadius: '12px', border: '1px solid #334155' }}>
                                            <div style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: '4px' }}>{row.center}</div>
                                            <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>ID: {row.id}</div>
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                        <h4 style={{ fontSize: '1rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <Shield size={16} className="text-indigo-400" /> AI Analysis
                                        </h4>
                                        <div style={{ background: '#1e293b', padding: '16px', borderRadius: '12px', border: '1px solid #334155' }}>
                                            <p style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>{row.description}</p>
                                            {row.status === 'red' && (
                                                <div style={{ marginTop: '12px', padding: '8px 12px', background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.2)', borderRadius: '8px', color: '#fca5a5', fontSize: '0.85rem', display: 'flex', gap: '8px', alignItems: 'center' }}>
                                                    <AlertCircle size={14} /> Immediate investigation recommended.
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })()}
                    </div>
                )}
            </div>
        </div>
    );
}

// Global Style Injection for Animation (optional, or just inline)
// Using standard CSS classes where possible, inline for specific "smooth" radius overrides
