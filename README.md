# Inteloop(Under Development)

**AI‑Powered Feedback Hub for Product Teams**

Inteloop centralizes product feedback from multiple channels and stakeholders, helping teams submit, organize and analyze feedback efficiently. Leverage role‑based access (Admin, Organization, Stakeholder) and JWT security to onboard 3 user types across core workflows.  

---

## 🚀 Features

- **Role‑Based Auth**  
  Secure JWT login/signup flows for Admin (Inteloop owner), Organization (product company), Stakeholders (UX, QA, devs, users).  
- **Organization Onboarding**  
  Single‑step signup with email, password and organization name → redirects to `/org/dashboard`.  
- **Stakeholder Management**  
  Invite stakeholders via email/CSV, assign to products, custom roles.  
- **Feedback Collection**  
  Multi‑step form with title, description, priority, tags, image upload (Cloudinary).  
- **Feedback Explorer**  
  List or card view, filters (date range, priority, status, tags), full‑text search.  
- **Feedback Detail & Collaboration**  
  Threaded comments, status updates, activity log.  
- **Analytics Dashboard**  
  Aggregate stats, trending tags/categories, unresolved list.  

---

## 🛠 Tech Stack

- **Frontend**: React + Vite, TailwindCSS, React Router, Axios  
- **Backend**: Node.js, Express.js, MongoDB (Mongoose)  
- **Auth**: JWT, role‑based middleware  
- **Storage**: Cloudinary for image hosting  
- **Deployment**: Vercel/Netlify (frontend), Railway/Render (backend)

---

## 🔗 Live Demo Link

- **Live Demo**: [Live Demo](https://inteloop-y843kkt7x-selviraja-pasagadugulas-projects.vercel.app/)

---

## ⚙️ Getting Started

1. **Clone & Install**  
   ```bash
   git clone https://github.com/your-org/inteloop.git
   cd inteloop
   # Frontend
   cd client && npm install
   # Backend
   cd ../server && npm install
   ```

2. **Environment Variables**  
   Create `.env` in `server/` with:
   ```bash
   MONGO_URI=<your-mongo-uri>
   JWT_SECRET=<your-jwt-secret>
   CLOUDINARY_URL=<your-cloudinary-url>
   ```
   And `.env` in `client/`:
   ```bash
   VITE_API_BASE_URL=http://localhost:5000/api
   ```

3. **Run Locally**  
   ```bash
   # Backend
   cd server
   npm run dev
   # Frontend
   cd ../client
   npm run dev
   ```

4. **Seed Initial Admin**  
   ```bash
   cd server
   node scripts/seedAdmin.js
   ```

5. **Access**  
   - Frontend: `http://localhost:5173`  
   - Backend Health Check: `http://localhost:5000/health`

---

## 📝 Folder Structure

```
inteloop/
├── client/           # React + Vite frontend
│   ├── src/
│   │   ├── api/      # axios instance
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   └── main.jsx
│   └── index.html
└── server/           # Express backend
    ├── config/       # DB connection
    ├── controllers/  # Auth, feedback, admin, etc.
    ├── middleware/   # JWT protect/authorize
    ├── models/       # Mongoose schemas
    ├── routes/
    ├── scripts/      # seedAdmin.js
    └── app.js
```

---

## 📄 API Endpoints

- **Auth**  
  `POST /api/auth/signup` — org signup  
  `POST /api/auth/login` — login  

- **Admin**  
  `GET /api/organizations`  
  `POST /api/organizations`  

- **Organization**  
  `GET /api/products`  
  `POST /api/products`  

- **Feedback**  
  `POST /api/feedback`  
  `GET /api/feedback`  

---
