
# Raw data for the application

STATES = [
    'Andhra Pradesh', 'Bihar', 'Delhi', 'Gujarat', 'Haryana', 'Karnataka',
    'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Rajasthan', 'Tamil Nadu',
    'Telangana', 'Uttar Pradesh', 'West Bengal', 'Odisha', 'Punjab',
    'Jharkhand', 'Chhattisgarh', 'Assam', 'Jammu and Kashmir'
]

STATE_GEO_DATA = {
    'Andhra Pradesh': {'enrolmentIntensity': 78, 'demographicIntensity': 45, 'updateRatio': 1.7},
    'Bihar': {'enrolmentIntensity': 92, 'demographicIntensity': 38, 'updateRatio': 0.8},
    'Delhi': {'enrolmentIntensity': 45, 'demographicIntensity': 89, 'updateRatio': 4.2},
    'Gujarat': {'enrolmentIntensity': 65, 'demographicIntensity': 52, 'updateRatio': 1.9},
    'Haryana': {'enrolmentIntensity': 58, 'demographicIntensity': 67, 'updateRatio': 2.8},
    'Karnataka': {'enrolmentIntensity': 72, 'demographicIntensity': 85, 'updateRatio': 3.5},
    'Kerala': {'enrolmentIntensity': 35, 'demographicIntensity': 42, 'updateRatio': 1.2},
    'Madhya Pradesh': {'enrolmentIntensity': 88, 'demographicIntensity': 35, 'updateRatio': 0.6},
    'Maharashtra': {'enrolmentIntensity': 68, 'demographicIntensity': 78, 'updateRatio': 3.1},
    'Rajasthan': {'enrolmentIntensity': 82, 'demographicIntensity': 41, 'updateRatio': 0.9},
    'Tamil Nadu': {'enrolmentIntensity': 55, 'demographicIntensity': 72, 'updateRatio': 2.9},
    'Telangana': {'enrolmentIntensity': 62, 'demographicIntensity': 88, 'updateRatio': 4.1},
    'Uttar Pradesh': {'enrolmentIntensity': 95, 'demographicIntensity': 32, 'updateRatio': 0.5},
    'West Bengal': {'enrolmentIntensity': 75, 'demographicIntensity': 55, 'updateRatio': 1.8},
    'Odisha': {'enrolmentIntensity': 85, 'demographicIntensity': 38, 'updateRatio': 0.7},
    'Punjab': {'enrolmentIntensity': 48, 'demographicIntensity': 62, 'updateRatio': 2.4},
    'Jharkhand': {'enrolmentIntensity': 89, 'demographicIntensity': 28, 'updateRatio': 0.4},
    'Chhattisgarh': {'enrolmentIntensity': 86, 'demographicIntensity': 32, 'updateRatio': 0.5},
    'Assam': {'enrolmentIntensity': 78, 'demographicIntensity': 35, 'updateRatio': 0.7},
    'Jammu and Kashmir': {'enrolmentIntensity': 52, 'demographicIntensity': 48, 'updateRatio': 1.5}
}

# Simulated Pincode Data for Analytics
# Structure: Pincode, State, District, Area, 0-5 Enrolments, Biometric Updates
PINCODE_DATA = [
    # Karnataka
    {'pincode': '560066', 'state': 'Karnataka', 'district': 'Bangalore Urban', 'area': 'Whitefield East', 'enrolment_0_5': 45, 'biometricUpdates': 1250, 'footfall': 180},
    {'pincode': '560103', 'state': 'Karnataka', 'district': 'Bangalore Urban', 'area': 'Sarjapur Road', 'enrolment_0_5': 52, 'biometricUpdates': 1180, 'footfall': 165},
    {'pincode': '560037', 'state': 'Karnataka', 'district': 'Bangalore Urban', 'area': 'BTM Layout', 'enrolment_0_5': 58, 'biometricUpdates': 1050, 'footfall': 150},
    {'pincode': '560068', 'state': 'Karnataka', 'district': 'Bangalore Urban', 'area': 'Marathahalli', 'enrolment_0_5': 65, 'biometricUpdates': 920, 'footfall': 135},
    {'pincode': '560048', 'state': 'Karnataka', 'district': 'Bangalore Urban', 'area': 'Koramangala', 'enrolment_0_5': 72, 'biometricUpdates': 850, 'footfall': 120},
    
    # Maharashtra
    {'pincode': '400076', 'state': 'Maharashtra', 'district': 'Mumbai Suburban', 'area': 'Powai', 'enrolment_0_5': 38, 'biometricUpdates': 1420, 'footfall': 210},
    {'pincode': '400072', 'state': 'Maharashtra', 'district': 'Mumbai Suburban', 'area': 'Andheri East', 'enrolment_0_5': 48, 'biometricUpdates': 1280, 'footfall': 185},
    {'pincode': '400093', 'state': 'Maharashtra', 'district': 'Mumbai Suburban', 'area': 'Malad West', 'enrolment_0_5': 55, 'biometricUpdates': 1100, 'footfall': 160},
    
    # Delhi
    {'pincode': '110020', 'state': 'Delhi', 'district': 'South Delhi', 'area': 'Hauz Khas', 'enrolment_0_5': 35, 'biometricUpdates': 1380, 'footfall': 200},
    {'pincode': '110017', 'state': 'Delhi', 'district': 'South Delhi', 'area': 'Malviya Nagar', 'enrolment_0_5': 45, 'biometricUpdates': 1220, 'footfall': 175},
    
    # Telangana
    {'pincode': '500081', 'state': 'Telangana', 'district': 'Hyderabad', 'area': 'Madhapur', 'enrolment_0_5': 32, 'biometricUpdates': 1520, 'footfall': 250},
    {'pincode': '500084', 'state': 'Telangana', 'district': 'Hyderabad', 'area': 'Gachibowli', 'enrolment_0_5': 40, 'biometricUpdates': 1350, 'footfall': 195},
    
    # Haryana
    {'pincode': '122002', 'state': 'Haryana', 'district': 'Gurugram', 'area': 'Cyber City', 'enrolment_0_5': 28, 'biometricUpdates': 1680, 'footfall': 280},
    {'pincode': '122001', 'state': 'Haryana', 'district': 'Gurugram', 'area': 'DLF Phase 1-3', 'enrolment_0_5': 42, 'biometricUpdates': 1320, 'footfall': 190},
]
