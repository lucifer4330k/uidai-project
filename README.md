# 🏛️ Aadhaar Ops - Command Center Dashboard v2.0

A next-generation analytics platform for UIDAI Aadhaar operations, featuring a Python-powered backend, "Neo-Enterprise" design system, and AI-driven hyper-local optimization.

![Dashboard Preview](https://img.shields.io/badge/Status-Live-brightgreen) ![React](https://img.shields.io/badge/React-19.0-blue) ![FastAPI](https://img.shields.io/badge/FastAPI-Backend-fastgreen) ![Firebase](https://img.shields.io/badge/Firebase-Hosted-orange)

## 🌐 Live Demo

**[https://uidai-69d55.web.app/](https://uidai-69d55.web.app/)**

---

## 🚀 What's New in v2.0

- **🐍 Python/FastAPI Backend**: Advanced analytics engine for hotspot detection and forecasting.
- **🎨 Neo-Enterprise UI**: A professional "Slate & Indigo" dark theme with a focus on data density.
- **📱 Sidebar Navigation**: Scalable layout replacing the old tab system.
- **🛣️ Independent Route Optimizer**: Dedicated module for mobile camp scheduling with improved visualization placeholders.

---

## ✨ Modules

### 1. 📊 Overview & Geospatial Intelligence
- **Real-time Operations Stats**: Instant view of Enrolments & Updates.
- **Interactive India Map**: State-level intensity heatmaps for Enrolment vs Updates.
- **Drill-down Analytics**: Service desert identification at the state level.

### 2. 🛣️ Smart Route Optimizer (Dedicated Page)
- **Hyper-Local Analysis**: Identifies target pincodes using `(High Biometric Demand + Low Child Enrolment)` logic.
- **AI Recommendations**:
  - *Example*: "Deploy Mobile Van on Tuesdays" for Pincode 560066.
- **Demand Scoring**: 0-100 Priority Index.

### 3. 📈 Forecaster
- **Predictive Modeling**: Time-series analysis of biometric update surges.
- **Resource Allocation**: Actionable insights for kit deployment (e.g., "Deploy 5 extra kits in Nov").

### 4. 🛡️ Watchtower
- **Anomaly Detection**: Real-time fraud pattern recognition.
- **Traffic Light System**: 🔴 Critical / 🟡 Warning / 🟢 Nominal.

---

## 🛠️ Technical Architecture

### Frontend
- **Framework**: React 19 + Vite
- **Routing**: React Router DOM (Sidebar Navigation)
- **Styling**: Custom CSS Variables (Neo-Enterprise Theme)
- **Icons**: Lucide React

### Backend (New!)
- **Framework**: FastAPI (Python 3.13)
- **Data Processing**: Pandas & NumPy
- **Endpoints**:
  - `/api/optimize/routes`: Hotspot calculation
  - `/api/forecast`: Trend analysis

---

## 🚀 Quick Start

### 1. Frontend Setup
```bash
cd aadhaar-ops-dashboard
npm install
npm run dev
```

### 2. Backend Setup
```bash
cd aadhaar-ops-dashboard/backend
pip install -r requirements.txt
uvicorn app.main:app --reload
```
*Note: The frontend allows fallback to mock data if the backend is unreachable.*

---

## 🔧 Deployment

### Firebase Hosting (Frontend)
```bash
npm run build
firebase deploy --only hosting
```

---

## 👤 Author
**Debanjan** - [@lucifer4330k](https://github.com/lucifer4330k)
