
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers import optimization
from app.data import STATE_GEO_DATA

app = FastAPI(title="Aadhaar Ops Backend", version="1.0.0")

# Enable CORS for frontend development
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # For dev only, restrict in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include Routers
app.include_router(optimization.router, prefix="/api", tags=["optimization"])

@app.get("/")
async def root():
    return {"message": "Aadhaar Ops Command Center Backend Live"}

@app.get("/api/geo/states")
async def get_state_data():
    return STATE_GEO_DATA

@app.get("/api/stats")
async def get_dashboard_stats():
    return {
        "totalEnrolments": 1006029,
        "totalDemographicUpdates": 2071700,
        "totalBiometricUpdates": 1861108,
        "activeAnomalies": 3,
        "activeAlerts": 5
    }
