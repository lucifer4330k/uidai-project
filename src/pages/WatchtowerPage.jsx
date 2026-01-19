
import Watchtower from '../components/Watchtower';

export default function WatchtowerPage() {
    return (
        <div className="watchtower-page">
            <div className="page-header">
                <h1 className="page-title">Watchtower Anomaly Detection</h1>
                <p className="page-subtitle">Real-time fraud detection and operational alerts</p>
            </div>
            <Watchtower />
        </div>
    );
}
