
import RouteOptimizer from '../components/RouteOptimizer';

export default function RouteOptimizerPage() {
    return (
        <div className="optimizer-page">
            <div className="page-header">
                <h1 className="page-title">Smart Route Optimizer</h1>
                <p className="page-subtitle">AI-driven mobile camp scheduling based on hyper-local data</p>
            </div>

            <div className="optimizer-grid">
                <div className="heatmap-section">
                    {/* Placeholder for a future Heatmap visualization */}
                    <div className="heatmap-placeholder">
                        <div style={{ textAlign: 'center', opacity: 0.6 }}>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--accent-secondary)' }}>Live Hotspot Heatmap</h3>
                            <p>Visualizing demand density across pincodes</p>
                            <p style={{ fontSize: '0.8rem', marginTop: '8px' }}>(Integration Pending: Python Backend API)</p>
                        </div>
                    </div>
                </div>

                <div className="optimizer-panel">
                    <RouteOptimizer />
                </div>
            </div>
        </div>
    );
}
