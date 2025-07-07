# 🍽️ Restaurant Reservation System

A modern, production-ready web application for streamlined restaurant reservations, combining a premium user interface with powerful admin tools and robust backend architecture.

---

## 📌 Project Overview

This project provides a comprehensive restaurant reservation system with the following capabilities:

* **Customer-Facing Features:** Browse restaurant info, view availability, and book reservations via a responsive web interface.
* **Admin Dashboard:** Manage tables, reservations, timings, and restaurant data via an intuitive backend dashboard.
* **Modern Design Aesthetics:** Crafted with Apple-level design principles, animations, and micro-interactions for an elegant user experience.
* **Security-First Architecture:** Built with validation, role-based access, and secure database practices.
* **Production-Ready:** Optimized for deployment with scalability, maintainability, and performance in mind.

---

## 🚀 Quick Start Guide

Follow these steps to run the project locally:

1. **Clone the repository**

   ```bash
   git clone https://github.com/SavouryBite-Restaurant-Reservation-System
   cd SavouryBite-Restaurant-Reservation-System
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure Environment**

   * Create a `.env` file using `.env.example` as reference.
   * Add your MongoDB URI, admin credentials, port, etc.

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. Visit `http://localhost:3000` to use the app!

---

## 📁 Project Structure

```
restaurant-reservation/
├── client/               # Frontend - React
├── server/               # Backend - Node/Express
├── config/               # Config files and environment setup
├── models/               # Mongoose models for DB
├── routes/               # Express routes
├── controllers/          # Route logic
├── public/               # Static assets
└── README.md             # Project documentation
```

---

## 🗃️ Database Schema

**MongoDB (Mongoose)**

* `User` (Admin/Customer)

  * `name`, `email`, `password`, `role`
* `Reservation`

  * `userId`, `date`, `time`, `partySize`, `status`
* `Table`

  * `tableNumber`, `seats`, `availability`
* `Restaurant`

  * `name`, `location`, `contact`, `hours`, `images`

---

## 🎨 Design Features

* **Minimalist, Responsive UI:** Fully responsive layout using Tailwind CSS or Bootstrap.
* **Smooth Interactions:** Micro-animations for button clicks, form entries, etc.
* **Dark Mode Support**
* **Accessibility Compliance** (WCAG 2.1)

---

## ⚙️ Technology Stack

**Frontend:**

* React.js
* Tailwind CSS / Bootstrap
* Axios

**Backend:**

* Node.js
* Express.js
* MongoDB (Mongoose)

**Others:**

* JWT Authentication
* Dotenv
* Bcrypt.js
* Redux (optional)

---

## 🚢 Deployment Instructions

**1. Environment Configuration:**

* Add production variables to `.env`
* MongoDB Atlas / Vercel / Render / Railway

**2. Build Frontend:**

```bash
cd client
npm run build
```

**3. Start Server in Production:**

```bash
npm run start
```

**4. Use PM2 or Docker for production monitoring**

---


## ✨ Features Highlighted

### ✅ Customer Features

* Online Table Reservations
* Responsive UI (mobile, tablet, desktop)
* Real-time availability checking
* Email/SMS confirmation (optional)

### 🔧 Admin Features

* Dashboard with reservations overview
* Table management (add/edit/delete)
* Time slot configuration
* Customer history access

### 💻 Technical Features

* REST API architecture
* JWT-based secure authentication
* Input validation & rate-limiting
* Error-handling middleware

### 🖌️ Design Aesthetics

* Apple-level polish
* Smooth transitions
* Interactive feedback on actions
* Clean, readable fonts and color schemes

---

## 📚 Professional Documentation

### 🛠️ Installation Steps

* Clearly documented setup in this README
* `.env.example` included
* Scripts: `npm run dev`, `npm run build`, `npm start`

### 🔐 Security Considerations

* Encrypted passwords
* Environment variables for sensitive info
* Role-based access (Admin vs Customer)
* Form validation (client & server side)


---

## 👨‍💻 For Developers & Contributors

You're welcome to contribute!

1. Fork this repo
2. Create a feature branch
3. Push and submit a pull request
