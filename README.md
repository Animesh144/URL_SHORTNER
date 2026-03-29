# URL Shortener

Full-stack URL shortener with a **React** frontend and **Node.js/Express** backend.

## Project structure

- `URL_SHORTNER/FRONTEND` - React app (UI)
- `URL_SHORTNER/BACKEND` - Node/Express API (server)

## Requirements

- Node.js (LTS recommended)
- npm

## Setup

### 1) Backend

```bash
cd URL_SHORTNER/BACKEND
npm install
```

Create a `.env` file in `URL_SHORTNER/BACKEND` (do **not** commit it; it’s already ignored by `.gitignore`).

Example:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Start backend:

```bash
npm start
```

If your backend uses nodemon:

```bash
npm run dev
```

### 2) Frontend

```bash
cd URL_SHORTNER/FRONTEND
npm install
```

Start frontend:

```bash
npm run dev
```

## Running the app

- Frontend runs on the Vite dev server (usually `http://localhost:5173`)
- Backend runs on `http://localhost:5000` (or whatever `PORT` you set)

If your frontend needs the backend URL, set it in your frontend config (or an `.env` file such as `URL_SHORTNER/FRONTEND/.env.local`, which is also ignored).

## Notes

- `node_modules/`, build folders, logs, and `.env` files are ignored via the root `.gitignore`.
- If you want to share environment keys safely, add a committed `*.env.example` file (example: `URL_SHORTNER/BACKEND/.env.example`).

