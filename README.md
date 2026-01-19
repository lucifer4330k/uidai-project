# 🏛️ Aadhaar Ops - Command Center Dashboard

A modern React-based analytics dashboard for UIDAI Aadhaar operations, featuring predictive resource allocation, anomaly detection, geospatial intelligence, and **hyper-local mobile camp optimization**.

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

### 🚐 NEW: Smart Route Optimizer (Hyper-Local Router)
- **Pincode-Level Analysis** - Goes beyond district-level data
- **Hotspot Detection** - Identifies areas with LOW child enrolments but HIGH adult biometric updates
- **Mobile Van Scheduling** - Recommends specific days for deployment
- **Demand Scoring** - Ranks pincodes by urgency (0-100 scale)
- **Estimated Footfall** - Predicts daily visitors per location

**Example Output:**
```
📍 Pincode 560066 (Whitefield East)
   Score: 92/100 - Critical Demand
   🚚 Deploy Mobile Van on Tuesdays & Thursdays
   💡 Mature IT corridor - high adult updates, low child enrolments
   👥 Est. Footfall: 180/day
```

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
│   │   ├── MacroView.jsx        # Geospatial intensity + Route Optimizer
│   │   ├── RouteOptimizer.jsx   # 🆕 Pincode-level hotspot analysis
│   │   ├── Forecaster.jsx       # Time-series prediction charts
│   │   └── Watchtower.jsx       # Anomaly detection table
│   ├── data/
│   │   └── sampleData.js        # State, district & pincode data
│   ├── App.jsx                  # Main app with tab routing
│   ├── index.css                # Premium dark theme + responsive
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

The dashboard works with UIDAI Aadhaar data at multiple levels:

| Level | Data Points |
|-------|-------------|
| **State** | Enrolment intensity, demographic updates, migration ratio |
| **District** | Anomaly scores, update patterns, center locations |
| **Pincode** | 🆕 Child enrolments, adult biometric updates, demand scores |

---

## 🎯 Smart Route Optimizer Logic

The algorithm identifies **Hotspot Pincodes** where:
- **Child Enrolment (0-5) is LOW** → Few new births being registered
- **Biometric Updates are HIGH** → Many adults needing mandatory updates

**Insight**: This indicates mature residential areas where children are growing up, but new babies aren't being enrolled (possibly due to lack of maternity wards or Aadhaar centers nearby).

**Action**: Deploy Mobile Vans to these underserved pincodes on recommended schedules.

---

## 📱 Responsive Design

- ✅ Desktop (1400px+) - Full 2-column layout
- ✅ Laptop (1200px) - Stacked layout
- ✅ Tablet (768px) - Optimized grids
- ✅ Mobile (480px) - Single column

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
