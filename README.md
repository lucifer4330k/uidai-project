# 🏛️ Aadhaar Ops Command Center Dashboard

A next-generation analytics platform for UIDAI Aadhaar operations, featuring a Python-powered analytics engine, modern UI, and AI-driven resource optimization.

![Dashboard](https://img.shields.io/badge/Status-Live-brightgreen) ![React](https://img.shields.io/badge/React-19.0-blue) ![FastAPI](https://img.shields.io/badge/FastAPI-Backend-green) ![Firebase](https://img.shields.io/badge/Firebase-Hosted-orange)

## 🌐 Live Demo

**Frontend:** [https://uidai-69d55.web.app/](https://uidai-69d55.web.app/)

---

## ✨ Features

| Module | Description |
|--------|-------------|
| 📊 **Overview** | Real-time stats, alerts, and system health |
| 🗺️ **Geospatial** | State-level intensity maps for enrolment and demographics |
| 📈 **Forecaster** | Predictive analytics for resource allocation |
| 🛡️ **Watchtower** | Anomaly detection with traffic light system |
| 🚐 **Route Optimizer** | AI-driven mobile camp scheduling |

---

## 🛠️ Tech Stack

### Frontend
- React 19 + Vite
- React Router DOM (Sidebar Navigation)
- Recharts (Data visualization)
- Lucide Icons

### Backend
- FastAPI (Python 3.11+)
- Pandas & NumPy (Analytics)
- Uvicorn (ASGI Server)

---

## 🚀 Quick Start

### Frontend Only
```bash
cd aadhaar-ops-dashboard
npm install
npm run dev
```
Open [http://localhost:5173](http://localhost:5173)

### Full Stack (Frontend + Backend)

**Terminal 1 - Backend:**
```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
```

**Terminal 2 - Frontend:**
```bash
npm run dev
```

The Route Optimizer will show **"Live API"** badge when connected.

---

## 📁 Project Structure

```
aadhaar-ops-dashboard/
├── src/
│   ├── components/     # React components
│   ├── pages/          # Page wrappers
│   └── data/           # Sample data
├── backend/
│   ├── app/
│   │   ├── main.py     # FastAPI entry point
│   │   ├── analytics.py # Pandas analytics
│   │   └── routers/    # API endpoints
│   ├── requirements.txt
│   └── Dockerfile
├── render.yaml         # Render.com config
└── firebase.json       # Firebase hosting
```

---

## ☁️ Deployment

### Frontend (Firebase)
```bash
npm run build
firebase deploy --only hosting
```

### Backend (Render.com)
1. Connect repo to [Render.com](https://render.com)
2. Select "Web Service"
3. Root Directory: `backend`
4. Build: `pip install -r requirements.txt`
5. Start: `uvicorn app.main:app --host 0.0.0.0 --port $PORT`

---

## 📄 API Endpoints

| Endpoint | Description |
|----------|-------------|
| `GET /` | Health check |
| `GET /api/routes?state={state}` | Route optimization data |
| `GET /api/stats` | Dashboard statistics |
| `GET /api/geo/states` | Geospatial data |

---

## 👤 Author

**Debanjan** - [@lucifer4330k](https://github.com/lucifer4330k)
