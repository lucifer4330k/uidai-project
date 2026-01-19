
from fastapi import APIRouter, HTTPException
from app.analytics import analytics_engine

router = APIRouter()

@router.get("/routes")
async def get_optimization_routes(state: str = "Karnataka"):
    try:
        results = analytics_engine.get_route_recommendations(state)
        # Check if we got valid results
        if not results.get("pincodes"):
            # If no data for state, return empty structure or 404
            # For this demo, let's return a default or error
            return {"district": "Data Not Available", "pincodes": []}
            
        return results
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/forecast")
async def get_forecast(state: str = None):
    return analytics_engine.get_forecast_data(state)
