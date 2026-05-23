# 🌿 Ayushman Patient Management System

A fully offline, static HTML/JS Ayurvedic Patient Management System — ready to deploy on **GitHub Pages**.

## 📁 File Structure

```
ayushman-patients/
├── index.html              ← Dashboard (home page)
├── login.html              ← Login
├── register.html           ← Registration
├── css/
│   └── styles.css          ← Shared styles
├── js/
│   ├── auth.js             ← Authentication (localStorage)
│   ├── patients.js         ← Patient data management
│   └── app.js              ← Shared nav/drawer
└── pages/
    ├── add-patient.html    ← Add new patient (4-step form)
    ├── all-patients.html   ← Patient list with search/filter
    ├── patient-detail.html ← Full patient info + print
    └── search-patient.html ← Quick search with highlights
```

## 🚀 Deploy to GitHub Pages

1. Create a new **public** GitHub repository (e.g. `ayushman-patients`)
2. Upload all files maintaining the folder structure above
3. Go to **Settings → Pages → Branch: main → / (root) → Save**
4. Your site will be live at `https://<your-username>.github.io/ayushman-patients/`

## ✨ Features

- **Register / Login** — Each doctor creates their own account
- **Add Patient** — 4-step form covering:
  - Personal info (name, mobile, age, gender, address, emergency contact)
  - Medical details (vitals, blood group, Prakriti, Vikriti, Agni, Koshtha)
  - Chief complaints, duration, lifestyle, habits
  - Diagnosis, medicines, Panchakarma, Pathya-Apathya, fees
- **All Patients** — Table view with filter by gender, visit type, sort
- **Search** — Live search by name, mobile, ID or village with highlight
- **Patient Detail** — Full record display, print-friendly
- **Delete** — Remove patient records

## 💾 Data Storage

All data is stored in the **browser's `localStorage`** — no backend, no server required.  
Data is per-device/per-browser. For multi-device use, consider adding Firebase later.

## 🎨 Design

Matches the **Ayushman Bhava / Vasavi Ayurveda** design system:
- Primary: `#234123` (forest green)
- Accent: `#7cc58f` (mint green)
- Font: Inter
- Clean card layout, responsive drawer navigation
