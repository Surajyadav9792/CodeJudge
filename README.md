# CodeJudge — Online Coding Platform

A full-stack online coding platform inspired by LeetCode, featuring a real-time code execution engine, AI-powered problem-solving assistant, and an admin panel for problem and video management.

## 🚀 Live Demo

| Service | URL |
|---------|-----|
| **Frontend (Vercel)** | [https://frontend-peach-ten-81.vercel.app](https://frontend-peach-ten-81.vercel.app) |
| **Backend API (Render)** | [https://leetcode-backend-ml5e.onrender.com](https://leetcode-backend-ml5e.onrender.com) |

> **Note:** Backend is hosted on Render free tier — first request may take 30–60 seconds due to cold start.

## Features

### Backend
- **JWT Authentication** with HTTP-only cookies and Redis-backed token blocklisting on logout
- **Role-Based Access Control (RBAC)** — `user` and `admin` roles with middleware-protected routes
- **BullMQ Judge Worker Engine** — queues code submissions via Redis and runs up to 25 test cases concurrently
- **Compilation Cache** — hashes compiled sources (C++, Java, Node.js) to skip redundant builds
- **AI Tutor (AlgoMentor)** — context-aware DSA chat assistant using OpenRouter API (Gemini 2.5 Flash) with progressive hint system
- **Cloudinary Integration** — solution explanation video upload and management
- **Keep-Alive** — self-ping every 13 minutes to prevent free-tier hosting sleep
- **MongoDB + Mongoose** — data models for users, problems, submissions, and solution videos

### Frontend
- **React 19 + Vite** with Tailwind CSS v4 and DaisyUI
- **Monaco Editor** — rich code editor with syntax highlighting and custom input support
- **Redux Toolkit** — global auth state with `checkAuth` flow and `wasLoggedIn` localStorage sync
- **React Hook Form + Zod** — validated login/signup forms
- **Admin Dashboard** — create, delete, and manage DSA problems; upload solution videos
- **Submission History** — view past submissions with runtime, memory, and verdict details
- **Parallel Boot** — `/ping` + `checkAuth()` run in `Promise.all()` to minimize cold-start wait

## Tech Stack

| Layer     | Technology                                              |
|-----------|---------------------------------------------------------|
| Frontend  | React 19, Vite, Tailwind CSS v4, DaisyUI, Redux Toolkit |
| Backend   | Node.js, Express 5, Mongoose, BullMQ, Redis             |
| Database  | MongoDB Atlas                                           |
| Cache/Queue | Redis Cloud + BullMQ                                  |
| AI        | OpenRouter API (Gemini 2.5 Flash)                       |
| Media     | Cloudinary                                              |
| Auth      | JWT, bcrypt, cookie-parser                              |

## Directory Structure

```
CodeJudge/
├── backend/
│   ├── config/            # MongoDB & Redis connection configs
│   ├── controllers/       # Auth, problems, submissions, AI chat, video logic
│   ├── model/             # Mongoose schemas (user, problem, submission, solutionVideo)
│   ├── routes/            # Express route definitions
│   ├── userMiddleware/    # JWT auth & admin RBAC middleware
│   ├── utils/             # Judge worker, language ID mapper, input validation
│   ├── src/index.js       # Express server entry point
│   └── package.json
├── frontend/
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── component/     # AdminPanel, AdminUpload, ChatAi, Editorial, SubmissionHistory
│   │   ├── pages/         # Homepage, Login, Signup, ProblemPage, Admin
│   │   ├── store/         # Redux store configuration
│   │   ├── utils/         # Axios client with cookie credentials
│   │   ├── authSlice.js   # Redux auth reducer
│   │   ├── App.jsx        # Router & parallel boot logic
│   │   └── main.jsx       # React DOM entry
│   └── package.json
├── .gitignore
└── README.md
```

## Prerequisites

- **Node.js** v18+
- **MongoDB** instance (Atlas or local)
- **Redis** server (Redis Cloud or local)
- **Cloudinary** account (for video features)
- **OpenRouter API key** (for AI chat assistant)

## Installation

### Backend

```bash
cd backend
npm install
```

Create a `.env` file in `backend/` with the following variables:

```env
PORT=
BACKEND_URL=
DB_CONNECTION_STRING=
JWT_KEY=
REDIS_HOST=
REDIS_PORT=
REDIS_PASSWORD=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
OPENAI_API_KEY=
FRONTEND_URL=
```

Start the server:

```bash
npm start
```

### Frontend

```bash
cd frontend
npm install
```

Create a `.env` file in `frontend/` with:

```env
VITE_API_URL=
```

Start the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

## Code Execution Engine

The backend uses a custom **BullMQ-based judge worker** (`utils/judgeWorker.js`) that:
1. Accepts code submissions via Express routes
2. Queues them in Redis using BullMQ
3. Compiles and executes code in sandboxed shell processes
4. Supports C++ (g++), Java (javac), and Node.js
5. Runs test cases concurrently (up to 25 parallel)
6. Caches compiled binaries to avoid redundant compilation
7. Returns verdict, runtime, memory usage, and compiler output

> **Note:** This is a self-hosted execution engine using BullMQ workers — not the external Judge0 SaaS API. The system requires a running Redis instance for the job queue.

## Limitations

- Free-tier hosting (Render/Railway) may have 30–60s cold starts on first request
- The judge worker requires a Redis connection; code execution will not work without it
- Video upload requires Cloudinary credentials
- AI chat requires a valid OpenRouter API key

## License

ISC
