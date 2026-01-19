
import pandas as pd
import numpy as np
from app.data import PINCODE_DATA

class AnalyticsEngine:
    def __init__(self):
        # Initialize with simulated data
        self.df = pd.DataFrame(PINCODE_DATA)

    def get_route_recommendations(self, state: str) -> dict:
        """
        Identify service deserts and recommend mobile camp routes.
        Logic: High Biometric Updates + Low Child Enrolments = Service Desert
        """
        # Filter by state
        state_df = self.df[self.df['state'] == state].copy()
        
        if state_df.empty:
             return {"district": "Unknown", "pincodes": []}

        district = state_df.iloc[0]['district'] # Assuming one district per state in mock data for simplicity

        # Normalization for scoring
        # We want High Biometric -> High Score
        # We want Low Enrolment -> High Score
        
        bio_max = state_df['biometricUpdates'].max()
        enrol_min = state_df['enrolment_0_5'].min()
        
        # Avoid division by zero
        bio_max = bio_max if bio_max > 0 else 1
        enrol_min = enrol_min if enrol_min > 0 else 1

        # Simple scoring algorithm
        # Score = (Biometric / Max_Biometric * 50) + ((Min_Enrolment / Enrolment) * 50)
        # This gives approx 0-100 score
        state_df['bio_score'] = (state_df['biometricUpdates'] / bio_max) * 50
        state_df['enrol_score'] = (enrol_min / state_df['enrolment_0_5']) * 50
        state_df['demandScore'] = state_df['bio_score'] + state_df['enrol_score']
        
        # Cap at 99
        state_df['demandScore'] = state_df['demandScore'].clip(upper=99).astype(int)
        
        # Sort by Demand Score Descending
        state_df = state_df.sort_values('demandScore', ascending=False)
        
        # Generate Recommendations
        def generate_recommendation(row):
            score = row['demandScore']
            if score >= 90: return "Deploy Mobile Van Daily (Mon-Sat)"
            if score >= 85: return "Deploy Mobile Van on Mon, Wed, Fri"
            if score >= 80: return "Deploy Mobile Van on Tuesdays & Thursdays"
            if score >= 75: return "Weekly camp on Saturdays"
            return "Bi-weekly camp recommended"

        def generate_reason(row):
            if row['enrolment_0_5'] < 40 and row['biometricUpdates'] > 1200:
                return "Critical: High adult footfall but near-zero child enrolment"
            if row['biometricUpdates'] > 1500:
                return "Corporate hub - massive update demand"
            return "Residential area with mixed demographic needs"

        state_df['recommendation'] = state_df.apply(generate_recommendation, axis=1)
        state_df['reason'] = state_df.apply(generate_reason, axis=1)

        # Format output
        pincodes = []
        for _, row in state_df.iterrows():
            pincodes.append({
                "pincode": row['pincode'],
                "area": row['area'],
                "demandScore": int(row['demandScore']),
                "enrolment_0_5": int(row['enrolment_0_5']),
                "biometricUpdates": int(row['biometricUpdates']),
                "recommendation": row['recommendation'],
                "reason": row['reason'],
                "estimatedFootfall": int(row['footfall'])
            })
            
        return {
            "district": district,
            "pincodes": pincodes
        }

    def get_forecast_data(self, state: str = None):
        """
        Generate forecast data with basic trend analysis
        """
        # Mock calculation - normally would run ARIMA/Prophet models here
        base_updates = 25000
        growth_rate = 1.05
        
        data = []
        months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        
        current_val = base_updates
        for month in months:
            current_val = int(current_val * growth_rate)
            data.append({
                "month": f"{month} 2024",
                "biometricUpdates": current_val,
                "enrolments_0_5": int(current_val * 2.5),
                "predicted": False
            })
            
        # Predictions for next 3 months
        for month in ["Jan", "Feb", "Mar"]:
            current_val = int(current_val * 1.1)
            data.append({
                "month": f"{month} 2025",
                "biometricUpdates": current_val,
                "enrolments_0_5": None,
                "predicted": True
            })
            
        return data

analytics_engine = AnalyticsEngine()
