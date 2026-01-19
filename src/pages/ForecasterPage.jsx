
import Forecaster from '../components/Forecaster';

export default function ForecasterPage() {
    return (
        <div className="forecaster-page">
            <div className="page-header">
                <h1 className="page-title">Predictive Forecaster</h1>
                <p className="page-subtitle">AI-powered resource allocation and trend analysis</p>
            </div>
            <Forecaster />
        </div>
    );
}
