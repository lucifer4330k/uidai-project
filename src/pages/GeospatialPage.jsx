
import MacroView from '../components/MacroView';

export default function GeospatialPage() {
    return (
        <div className="geospatial-page">
            <div className="page-header">
                <h1 className="page-title">Geospatial Intelligence</h1>
                <p className="page-subtitle">State-level service deserts and migration patterns</p>
            </div>
            <div className="card" style={{ padding: '0', overflow: 'hidden', border: 'none', background: 'transparent' }}>
                <MacroView />
            </div>
        </div>
    );
}
