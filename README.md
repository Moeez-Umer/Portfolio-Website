# Personal Portfolio Website

A modern and responsive full-stack portfolio website built using the MERN stack. This project showcases my skills, projects, learning journey, and provides a contact form that stores messages in MongoDB Atlas.

## Live Demo

Frontend: https://portfolio-website-tau-kohl-29.vercel.app/

Backend API: https://portfolio-website-lzrt.onrender.com/

---

## Features

* Modern responsive UI built with React and Tailwind CSS
* Professional Hero section with profile image
* About Me section
* Skills section with technology icons
* Featured Projects showcase
* Learning Journey timeline/cards
* Contact form with backend integration
* MongoDB Atlas database storage
* Framer Motion animations
* Mobile responsive design
* Resume download functionality
* GitHub and LinkedIn integration

---

## Tech Stack

### Frontend

* React.js
* Vite
* Tailwind CSS
* Framer Motion
* Axios
* React Icons

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose

### Deployment

* Vercel (Frontend)
* Render (Backend)

---

## Project Structure

```bash
portfolio-website/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── data/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## Installation

### Clone Repository

```bash
git clone <repository-url>
cd portfolio-website
```

### Frontend Setup

```bash
cd client
npm install
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

### Backend Setup

```bash
cd server
npm install
npm run dev
```

Backend runs on:

```bash
http://localhost:8000
```

---

## Environment Variables

Create a `.env` file inside the server folder:

```env
PORT=8000
MONGO_URI=your_mongodb_atlas_connection_string
```

---

## API Endpoints

### Contact Form

**POST**

```http
/api/contact
```

Request Body:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Portfolio Inquiry",
  "message": "Hello, I would like to connect."
}
```

Response:

```json
{
  "success": true,
  "message": "Message sent successfully"
}
```

---

## Featured Projects

### Vector Database (C++)

Custom vector database featuring:

* TCP client-server architecture
* Brute-force vector search
* IVF indexing
* K-Means clustering
* Snapshot persistence
* Benchmarking system

### AI Resume Screening System

AI-powered resume analysis and job matching platform.

### Real-Time Stock Alert Scanner

Stock monitoring system with live price alerts and notifications.

### DHA Real Estate Chatbot

Domain-specific chatbot for DHA Pakistan real estate queries.

---

## Learning Goals

This portfolio is part of my journey toward becoming an AI/ML Engineer and Full-Stack Developer. It serves as a central place to showcase my projects, skills, and growth as a software engineer.

---

## Future Improvements

* Project screenshots
* Dark/Light mode toggle
* Blog section
* Admin dashboard for contact messages
* Project filtering
* GitHub activity integration
* Experience timeline improvements

---

## Author

**Moeez Umer**

BSCS Student | MERN Stack Developer | AI/ML Enthusiast

GitHub: https://github.com/Moeez-Umer

LinkedIn: www.linkedin.com/in/moeez-umer

---

## License

This project is licensed under the MIT License.
