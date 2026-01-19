// Sample data for the Aadhaar Ops Dashboard
// Derived from actual UIDAI data structure

export const states = [
  'Andhra Pradesh', 'Bihar', 'Delhi', 'Gujarat', 'Haryana', 'Karnataka',
  'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Rajasthan', 'Tamil Nadu',
  'Telangana', 'Uttar Pradesh', 'West Bengal', 'Odisha', 'Punjab',
  'Jharkhand', 'Chhattisgarh', 'Assam', 'Jammu and Kashmir'
];

export const stateGeoData = {
  'Andhra Pradesh': { enrolmentIntensity: 78, demographicIntensity: 45, updateRatio: 1.7, lat: 15.9129, lng: 79.74 },
  'Bihar': { enrolmentIntensity: 92, demographicIntensity: 38, updateRatio: 0.8, lat: 25.0961, lng: 85.3131 },
  'Delhi': { enrolmentIntensity: 45, demographicIntensity: 89, updateRatio: 4.2, lat: 28.7041, lng: 77.1025 },
  'Gujarat': { enrolmentIntensity: 65, demographicIntensity: 52, updateRatio: 1.9, lat: 22.2587, lng: 71.1924 },
  'Haryana': { enrolmentIntensity: 58, demographicIntensity: 67, updateRatio: 2.8, lat: 29.0588, lng: 76.0856 },
  'Karnataka': { enrolmentIntensity: 72, demographicIntensity: 85, updateRatio: 3.5, lat: 15.3173, lng: 75.7139 },
  'Kerala': { enrolmentIntensity: 35, demographicIntensity: 42, updateRatio: 1.2, lat: 10.8505, lng: 76.2711 },
  'Madhya Pradesh': { enrolmentIntensity: 88, demographicIntensity: 35, updateRatio: 0.6, lat: 22.9734, lng: 78.6569 },
  'Maharashtra': { enrolmentIntensity: 68, demographicIntensity: 78, updateRatio: 3.1, lat: 19.7515, lng: 75.7139 },
  'Rajasthan': { enrolmentIntensity: 82, demographicIntensity: 41, updateRatio: 0.9, lat: 27.0238, lng: 74.2179 },
  'Tamil Nadu': { enrolmentIntensity: 55, demographicIntensity: 72, updateRatio: 2.9, lat: 11.1271, lng: 78.6569 },
  'Telangana': { enrolmentIntensity: 62, demographicIntensity: 88, updateRatio: 4.1, lat: 18.1124, lng: 79.0193 },
  'Uttar Pradesh': { enrolmentIntensity: 95, demographicIntensity: 32, updateRatio: 0.5, lat: 26.8467, lng: 80.9462 },
  'West Bengal': { enrolmentIntensity: 75, demographicIntensity: 55, updateRatio: 1.8, lat: 22.9868, lng: 87.855 },
  'Odisha': { enrolmentIntensity: 85, demographicIntensity: 38, updateRatio: 0.7, lat: 20.9517, lng: 85.0985 },
  'Punjab': { enrolmentIntensity: 48, demographicIntensity: 62, updateRatio: 2.4, lat: 31.1471, lng: 75.3412 },
  'Jharkhand': { enrolmentIntensity: 89, demographicIntensity: 28, updateRatio: 0.4, lat: 23.6102, lng: 85.2799 },
  'Chhattisgarh': { enrolmentIntensity: 86, demographicIntensity: 32, updateRatio: 0.5, lat: 21.2787, lng: 81.8661 },
  'Assam': { enrolmentIntensity: 78, demographicIntensity: 35, updateRatio: 0.7, lat: 26.2006, lng: 92.9376 },
  'Jammu and Kashmir': { enrolmentIntensity: 52, demographicIntensity: 48, updateRatio: 1.5, lat: 33.7782, lng: 76.5762 }
};

// Time series data for the Forecaster Tab
export const timeSeriesData = [
  { month: 'Jan 2024', enrolments_0_5: 45000, biometricUpdates: 12000, predicted: false },
  { month: 'Feb 2024', enrolments_0_5: 48000, biometricUpdates: 13500, predicted: false },
  { month: 'Mar 2024', enrolments_0_5: 52000, biometricUpdates: 14200, predicted: false },
  { month: 'Apr 2024', enrolments_0_5: 49000, biometricUpdates: 15800, predicted: false },
  { month: 'May 2024', enrolments_0_5: 55000, biometricUpdates: 16500, predicted: false },
  { month: 'Jun 2024', enrolments_0_5: 58000, biometricUpdates: 18200, predicted: false },
  { month: 'Jul 2024', enrolments_0_5: 62000, biometricUpdates: 19800, predicted: false },
  { month: 'Aug 2024', enrolments_0_5: 59000, biometricUpdates: 21500, predicted: false },
  { month: 'Sep 2024', enrolments_0_5: 64000, biometricUpdates: 23200, predicted: false },
  { month: 'Oct 2024', enrolments_0_5: 68000, biometricUpdates: 25800, predicted: false },
  { month: 'Nov 2024', enrolments_0_5: 72000, biometricUpdates: 28500, predicted: false },
  { month: 'Dec 2024', enrolments_0_5: 75000, biometricUpdates: 31200, predicted: false },
  { month: 'Jan 2025', enrolments_0_5: null, biometricUpdates: 34500, predicted: true },
  { month: 'Feb 2025', enrolments_0_5: null, biometricUpdates: 38200, predicted: true },
  { month: 'Mar 2025', enrolments_0_5: null, biometricUpdates: 42800, predicted: true },
  { month: 'Apr 2025', enrolments_0_5: null, biometricUpdates: 48500, predicted: true },
  { month: 'May 2025', enrolments_0_5: null, biometricUpdates: 55200, predicted: true },
  { month: 'Jun 2025', enrolments_0_5: null, biometricUpdates: 62800, predicted: true },
];

// State-specific time series
export const stateTimeSeriesData = {
  'Karnataka': {
    data: [
      { month: 'Jan 2024', enrolments_0_5: 8500, biometricUpdates: 2400 },
      { month: 'Feb 2024', enrolments_0_5: 9200, biometricUpdates: 2800 },
      { month: 'Mar 2024', enrolments_0_5: 9800, biometricUpdates: 3100 },
      { month: 'Apr 2024', enrolments_0_5: 10200, biometricUpdates: 3500 },
      { month: 'May 2024', enrolments_0_5: 11000, biometricUpdates: 4200 },
      { month: 'Jun 2024', enrolments_0_5: 11800, biometricUpdates: 4800 },
      { month: 'Jul 2024', enrolments_0_5: 12500, biometricUpdates: 5500, predicted: true },
      { month: 'Aug 2024', enrolments_0_5: 13200, biometricUpdates: 6200, predicted: true },
    ],
    prediction: { surge: '+45%', month: 'Nov 2026', extraKits: 7 }
  },
  'Maharashtra': {
    data: [
      { month: 'Jan 2024', enrolments_0_5: 12000, biometricUpdates: 3200 },
      { month: 'Feb 2024', enrolments_0_5: 12800, biometricUpdates: 3800 },
      { month: 'Mar 2024', enrolments_0_5: 13500, biometricUpdates: 4200 },
      { month: 'Apr 2024', enrolments_0_5: 14200, biometricUpdates: 4800 },
      { month: 'May 2024', enrolments_0_5: 15000, biometricUpdates: 5500 },
      { month: 'Jun 2024', enrolments_0_5: 15800, biometricUpdates: 6200 },
      { month: 'Jul 2024', enrolments_0_5: 16500, biometricUpdates: 7100, predicted: true },
      { month: 'Aug 2024', enrolments_0_5: 17200, biometricUpdates: 8000, predicted: true },
    ],
    prediction: { surge: '+38%', month: 'Oct 2026', extraKits: 5 }
  },
  'Delhi': {
    data: [
      { month: 'Jan 2024', enrolments_0_5: 4200, biometricUpdates: 8500 },
      { month: 'Feb 2024', enrolments_0_5: 4500, biometricUpdates: 9200 },
      { month: 'Mar 2024', enrolments_0_5: 4800, biometricUpdates: 9800 },
      { month: 'Apr 2024', enrolments_0_5: 5100, biometricUpdates: 10500 },
      { month: 'May 2024', enrolments_0_5: 5500, biometricUpdates: 11200 },
      { month: 'Jun 2024', enrolments_0_5: 5800, biometricUpdates: 12000 },
      { month: 'Jul 2024', enrolments_0_5: 6200, biometricUpdates: 12800, predicted: true },
      { month: 'Aug 2024', enrolments_0_5: 6500, biometricUpdates: 13800, predicted: true },
    ],
    prediction: { surge: '+52%', month: 'Sep 2026', extraKits: 8 }
  }
};

// Anomaly detection data for the Watchtower tab
export const anomalyData = [
  {
    id: 1,
    district: 'Bangalore Urban',
    state: 'Karnataka',
    status: 'red',
    anomalyScore: 98.5,
    type: 'DOB Updates Spike',
    dobUpdates: 15420,
    avgDobUpdates: 2150,
    stdDev: 4.2,
    date: '15-03-2025',
    center: 'Whitefield Aadhaar Seva Kendra',
    description: 'DOB updates 7.2x above normal - Potential fraud'
  },
  {
    id: 2,
    district: 'Gurugram',
    state: 'Haryana',
    status: 'red',
    anomalyScore: 95.2,
    type: 'DOB Updates Spike',
    dobUpdates: 12890,
    avgDobUpdates: 1820,
    stdDev: 3.8,
    date: '12-03-2025',
    center: 'Cyber City Aadhaar Center',
    description: 'DOB updates 7.1x above normal - Investigate immediately'
  },
  {
    id: 3,
    district: 'Thane',
    state: 'Maharashtra',
    status: 'red',
    anomalyScore: 92.8,
    type: 'DOB Updates Spike',
    dobUpdates: 9540,
    avgDobUpdates: 1450,
    stdDev: 3.5,
    date: '18-03-2025',
    center: 'Kalwa Aadhaar Kendra',
    description: 'DOB updates 6.6x above normal - Requires attention'
  },
  {
    id: 4,
    district: 'Noida',
    state: 'Uttar Pradesh',
    status: 'yellow',
    anomalyScore: 78.5,
    type: 'Address Updates High',
    addressUpdates: 8920,
    avgAddressUpdates: 3200,
    stdDev: 2.1,
    date: '10-03-2025',
    center: 'Sector 18 Aadhaar Center',
    description: 'High address updates - Migration pattern detected'
  },
  {
    id: 5,
    district: 'Hyderabad',
    state: 'Telangana',
    status: 'yellow',
    anomalyScore: 72.3,
    type: 'Address Updates High',
    addressUpdates: 7650,
    avgAddressUpdates: 2900,
    stdDev: 1.9,
    date: '08-03-2025',
    center: 'Madhapur Aadhaar Seva Kendra',
    description: 'Elevated address updates - IT corridor migration'
  },
  {
    id: 6,
    district: 'Pune',
    state: 'Maharashtra',
    status: 'yellow',
    anomalyScore: 68.9,
    type: 'Address Updates High',
    addressUpdates: 6420,
    avgAddressUpdates: 2500,
    stdDev: 1.7,
    date: '14-03-2025',
    center: 'Kharadi Aadhaar Center',
    description: 'Moderate address update spike - Student migration likely'
  },
  {
    id: 7,
    district: 'Chennai',
    state: 'Tamil Nadu',
    status: 'green',
    anomalyScore: 25.4,
    type: 'Normal',
    dobUpdates: 2280,
    avgDobUpdates: 2100,
    stdDev: 0.4,
    date: '16-03-2025',
    center: 'Anna Nagar Aadhaar Center',
    description: 'Operations within normal parameters'
  },
  {
    id: 8,
    district: 'Kolkata',
    state: 'West Bengal',
    status: 'green',
    anomalyScore: 22.1,
    type: 'Normal',
    dobUpdates: 1950,
    avgDobUpdates: 1850,
    stdDev: 0.3,
    date: '17-03-2025',
    center: 'Salt Lake Aadhaar Kendra',
    description: 'Operations within normal parameters'
  },
  {
    id: 9,
    district: 'Jaipur',
    state: 'Rajasthan',
    status: 'green',
    anomalyScore: 18.7,
    type: 'Normal',
    dobUpdates: 1680,
    avgDobUpdates: 1620,
    stdDev: 0.2,
    date: '19-03-2025',
    center: 'Malviya Nagar Aadhaar Center',
    description: 'Operations within normal parameters'
  },
  {
    id: 10,
    district: 'Lucknow',
    state: 'Uttar Pradesh',
    status: 'green',
    anomalyScore: 15.2,
    type: 'Normal',
    dobUpdates: 2100,
    avgDobUpdates: 2050,
    stdDev: 0.1,
    date: '20-03-2025',
    center: 'Gomti Nagar Aadhaar Seva Kendra',
    description: 'Operations within normal parameters'
  }
];

// Dashboard summary statistics
export const dashboardStats = {
  totalEnrolments: 1006029,
  totalDemographicUpdates: 2071700,
  totalBiometricUpdates: 1861108,
  activeAnomalies: 3,
  migrationAlerts: 3,
  normalOperations: 4,
  averageProcessingTime: '4.2 mins',
  peakHour: '11:00 AM - 12:00 PM'
};
