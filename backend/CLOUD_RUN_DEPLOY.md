# Cloud Run Deployment Guide

Firebase Cloud Functions doesn't natively support Python FastAPI. Instead, use **Google Cloud Run** which integrates seamlessly with Firebase.

## Prerequisites
1. [Google Cloud CLI](https://cloud.google.com/sdk/docs/install) installed
2. A Google Cloud project (you can use the same Firebase project: `uidai-69d55`)

## Deployment Steps

### 1. Authenticate
```bash
gcloud auth login
gcloud config set project uidai-69d55
```

### 2. Enable Cloud Run API
```bash
gcloud services enable run.googleapis.com
```

### 3. Deploy from Backend Directory
```bash
cd backend
gcloud run deploy aadhaar-ops-backend \
  --source . \
  --region us-central1 \
  --allow-unauthenticated
```

### 4. Get the Service URL
After deployment, you'll receive a URL like:
```
https://aadhaar-ops-backend-xxxxx-uc.a.run.app
```

### 5. Update Frontend to Use Cloud Run URL
In `RouteOptimizer.jsx`, change:
```javascript
const response = await fetch(`http://localhost:8000/api/routes?state=${selectedState}`);
```
To:
```javascript
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';
const response = await fetch(`${API_URL}/api/routes?state=${selectedState}`);
```

Then create a `.env.production` file:
```
VITE_API_URL=https://aadhaar-ops-backend-xxxxx-uc.a.run.app
```

### 6. Rebuild and Redeploy Frontend
```bash
npm run build
firebase deploy --only hosting
```

## Cost
Cloud Run has a generous free tier (2 million requests/month).
