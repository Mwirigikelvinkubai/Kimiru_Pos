# POS System (Shop Version)

A full-stack Point of Sale (POS) system built for small to medium retail shops. Includes product management, sales tracking, user login with roles (admin & cashier), and MPESA integration.

## Tech Stack
- Frontend: React.js + Tailwind CSS
- Backend: Node.js (Express)
- Database: PostgreSQL (or MongoDB later)
- Payments: MPESA Daraja API

## Folder Structure
- `frontend/` – React-based UI
- `backend/` – Node.js REST API

## Getting Started

### Frontend
```bash
cd frontend
npm install
npm run dev
```
on it
### Backend
```bash
cd backend
npm install
npm run dev
```

## Features
- User authentication (Admin, Cashier)
- Add/edit/delete/view products
- Checkout & receipt generation
- Sales reports
- MPESA push integration

## Future Enhancements
- Barcode scanner
- Customer records
- Inventory alerts
- Multi-branch support


POS-System/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── config/
│   ├── .env
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Products.jsx
│   │   │   ├── Sales.jsx
│   │   │   ├── Receipt.jsx
│   │   │   └── Reports.jsx
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── tailwind.config.js
│   └── package.json
│
├── README.md