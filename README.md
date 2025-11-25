## Study Mate 🎓 – Find Your Perfect Academic Partner

## 🌐 Live Study-mate link
https://study-mate-aside.netlify.app/


# Description
Study Mate is a web application designed to help students find and connect with study partners.  
Users can search, filter, create profiles, send requests, and manage their study connections in one place


## 🛠️ Tech Stack

- *Frontend:* React, Tailwind CSS, DaisyUI, React Spinners, React Toastify, SweetAlert,axios,aos,
- *Backend:* Node.js, Express.js, MongoDB
- *Hosting:* Netlify (Frontend), Vercel (Backend)

**Backend:**
- Node.js + Express.js + MongoDB 

**Full CRUD Operations**
  - **Create** → Add your study partner profile
  - **Read** → View all partners + detailed profile view
  - **Update** → Edit your saved connections with pre-filled form
  - **Delete** → Remove connections with SweetAlert confirmation


## 🚀 Features

 **Find Partner**
  - Search partners by **subject**.
  - Filter partners based on **experience level** (Beginner, Intermediate, Advanced).
  - All data is fetched dynamically from the backend.

# Create Partner Profile
  - Users can create their own partner profile by submitting information.
  - Profiles are stored in the backend database.

# Partner Details
  - Each partner card has a *View Profile* button.
  - Clicking shows full partner details.
  - Includes a **Send Partner Request** button:
  - Instantly increases partner request count by 1.
  - Saves request data into a new collection in the database.

## MyConnection
  - Displays all partner requests saved in the database.
  - Options available:
  - *Delete*: Removes a connection with confirmation via SweetAlert prompt.
  - *Update*: Opens an update route with pre‑filled input fields for editing.
  - After update, confirmation is shown via Toast notification.

## Authentication
  - Without login, users cannot:
  - Access **My Connection**.
  - Create a partner profile.
  - View partner details and many pages.

---


## 🎯 How It Works

1. **Search & Filter:** Users explore partners by subject or experience level.
2. **Profile Creation:** Logged‑in users create their own partner profile.
3. **View & Request:** Partner details can be viewed, and requests sent dynamically.
4. **Connection Management:** Requests are stored in a separate collection and shown in *My Connection*.
5. **Update/Delete:** Connections can be updated or deleted with interactive prompts.



# Responsive
 - Responsive Design  Works smoothly across desktop, tablet, and mobile




# Alert For Using Toastify
  - Toast Alerts* - Feedback for Login/Loguot actions

# Dynamic Routing
 * Dynamic Routing - `/partnersDetails/:id` routes with fallback handling.

 ### Project Highlights (For Recruiters)

- Full-stack MERN project with clean architecture
- Production-level code quality & folder structure
- Real-time CRUD operations with MongoDB
- Secure private routes & authentication
- Deployed live with CI/CD (Netlify + Vercel)
- Smooth animations & excellent UX

---
