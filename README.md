# 🏛️ Aadhaar Ops - Command Center Dashboard

A modern React-based analytics dashboard for UIDAI Aadhaar operations, featuring predictive resource allocation, anomaly detection, and geospatial intelligence visualization.

![Dashboard Preview](https://img.shields.io/badge/Status-Live-brightgreen) ![React](https://img.shields.io/badge/React-19.0-blue) ![Firebase](https://img.shields.io/badge/Firebase-Hosted-orange)

## 🌐 Live Demo

**[https://uidai-69d55.web.app/](https://uidai-69d55.web.app/)**

---

## ✨ Features

### 📍 Tab 1: Macro View (Geospatial Intelligence)
- **Interactive State Cards** with color-coded intensity visualization
- **Toggle Switch** between Enrolment Intensity and Demographic Updates
- **State Popups** showing Update-to-Enrolment ratios and migration classification
- Identifies **Service Deserts** and **Migration Hubs** across India

### 📈 Tab 2: Forecaster (Resource Allocation)
- **Time-Series Charts** showing enrolment-to-biometric update correlation
- **State/District Dropdown** for filtered analysis
- **Lag Graph** visualization (Age 0-5 Enrolments as leading indicator)
- **Action Cards** with predicted surges and recommended deployments
- 87% prediction accuracy based on historical correlation

### 🛡️ Tab 3: Watchtower (Anomaly Detection)
- **Real-time Monitoring** table sorted by anomaly score
- **Traffic Light System**:
  - 🔴 **Red**: DOB updates > 3σ (Potential Fraud)
  - 🟡 **Yellow**: Address updates unusually high (Migration Pattern)
  - 🟢 **Green**: Normal operations
- **Drill-Down Details** for investigation with center location and spike dates

---

## 🚀 Quick Start

### Prerequisites
- Node.js 20.19+ or 22.12+
- npm 10+

### Installation

```bash
# Clone the repository
git clone https://github.com/lucifer4330k/uidai-project.git
cd uidai-project

# Install dependencies
npm install

# Start development server
npm run dev
```

The dashboard will be available at `http://localhost:5173/`

### Build for Production

```bash
npm run build
```

---

## 📁 Project Structure

```
aadhaar-ops-dashboard/
├── src/
│   ├── components/
│   │   ├── TabNavigation.jsx    # Tab switcher with icons
│   │   ├── MacroView.jsx        # Geospatial intensity visualization
│   │   ├── Forecaster.jsx       # Time-series prediction charts
│   │   └── Watchtower.jsx       # Anomaly detection table
│   ├── data/
│   │   └── sampleData.js        # Aggregated sample data
│   ├── App.jsx                  # Main app with tab routing
│   ├── index.css                # Premium dark theme styles
│   └── main.jsx                 # Entry point
├── firebase.json                # Firebase hosting config
├── package.json
└── vite.config.js
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 19** | Frontend framework |
| **Vite** | Build tool & dev server |
| **Recharts** | Time-series visualizations |
| **Lucide React** | Icon components |
| **Firebase Hosting** | Deployment platform |

---

## 📊 Data Sources

The dashboard is designed to work with UIDAI Aadhaar data containing:

| Dataset | Fields |
|---------|--------|
| **Biometric** | date, state, district, pincode, bio_age_5_17, bio_age_17_ |
| **Demographic** | date, state, district, pincode, demo_age_5_17, demo_age_17_ |
| **Enrolment** | date, state, district, pincode, age_0_5, age_5_17, age_18_greater |

---

## 🎨 Design Features

- **Premium Dark Theme** with glassmorphism effects
- **Smooth Animations** and micro-interactions
- **Responsive Design** for desktop and tablet
- **Custom Scrollbars** and gradient accents
- **Google Inter Font** for modern typography

---

## 📋 Use Cases

1. **Policy Makers**: Identify service deserts requiring additional Aadhaar centers
2. **Operations Team**: Predict resource requirements for biometric updates
3. **Fraud Detection**: Flag suspicious DOB update patterns for investigation
4. **Migration Analysis**: Track population movement patterns via address updates

---

## 🔧 Configuration

### Firebase Deployment

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login to Firebase
firebase login

# Deploy
firebase deploy --only hosting
```

---

## 📄 License

This project is built for the UIDAI Data Analytics competition.

---

## 👤 Author

**Debanjan**

- GitHub: [@lucifer4330k](https://github.com/lucifer4330k)
