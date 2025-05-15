# 🧑‍💼 MERN Job Board App

A full-stack Job Board built using the MERN stack with search, validation, and responsive UI.

## 🌐 Features

- View job listings
- Add new job with validation
- View full job details
- Search jobs by title or location
- Responsive UI with Tailwind CSS
- Backend input validation using express-validator
- Frontend form validation using Zod + React Hook Form
- Loading spinners

---

## 🧱 Tech Stack

- **Frontend:** React, Tailwind CSS, React Hook Form, Zod, Axios
- **Backend:** Node.js, Express, MongoDB, Mongoose, express-validator

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/mern-job-board.git
cd mern-job-board

2. 🛠️ Setup Backend (Server)
bash
cd server
npm install
2.1. Create .env file (Optional for MongoDB Atlas)
If using MongoDB Atlas, create a .env file inside the server/ directory:


2.1. Start Backend Server
bash
npm run dev
The backend will start on:
🔗 http://localhost:5000

3. 💻 Setup Frontend (Client)
bash
cd ../client
npm install

3.1. Start Frontend React App
bash
npm start
The app will start on:
🔗 http://localhost:3000

Make sure the backend server is also running for API requests to succeed.

4. 🧪 Test the App
Open http://localhost:3000

Add new jobs, search, and view job details

Console/log errors will help you debug any issues
---