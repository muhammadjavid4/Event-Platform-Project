# 🎉 Event Platform (MERN Stack)

A full-stack Event Management platform built using the **MERN stack** where users can create events and RSVP to them with proper capacity handling and authentication.

This project focuses on **backend correctness**, **data consistency**, and **clean user experience**.

---

## 🚀 Features

### 🔐 Authentication
- User Registration & Login
- JWT-based authentication
- Protected routes

### 📅 Events
- Create new events
- View all available events
- Event capacity tracking

### 📨 RSVP System
- Users can RSVP to events
- One user can RSVP only once per event
- Event capacity is strictly enforced
- Prevents overbooking using safe backend logic

### 🎨 Frontend
- Clean landing (welcome) page
- Login / Sign up pages
- Dashboard with event listing
- Create Event page
- Proper navigation and logout flow

---

## 🛠️ Tech Stack

### Frontend
- React (Vite)
- Axios
- React Router
- CSS (custom styling)

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- bcrypt (password hashing)

---

## 📂 Project Structure

event_platform/
├── client/ # React frontend
└── server/ # Node.js backend

----------------------------

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/event-platform-project.git
cd event_platform

cd server
npm install


PORT=4000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key


npm start

**Frontend Setup**

cd ../client
npm install
npm run dev


Frontend will run on:

http://localhost:5173

Backend will run on:

http://localhost:4000



