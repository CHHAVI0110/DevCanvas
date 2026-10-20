# DevCanvas

##  Overview

**DevCanvas** is a developer-focused blogging platform where developers can create, share, and explore technical articles. It provides a simple and interactive space for developers to share their knowledge, write blogs, and connect with the developer community.

The platform allows users to create accounts, authenticate securely, publish posts, edit their content, and explore articles created by other developers.

---

## ✨ Features

### 🔐 Authentication
- User signup and login functionality
- Secure authentication using Appwrite
- User session management
- Protected routes for authenticated users

### 📝 Blog Management
- Create new blog posts
- View all available posts
- Read individual blog articles
- Edit existing posts
- Manage personal content

### 🎨 Modern UI
- Responsive design
- Clean developer-focused interface
- Modern card-based layouts
- Smooth user experience

### ⚡ Performance
- Built with React and Vite
- Fast development and optimized production builds
- Deployed using Vercel

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- JavaScript (ES6+)
- Tailwind CSS
- React Router DOM
- React Hook Form

### State Management
- Redux Toolkit

### Backend Services
- Appwrite
  - Authentication
  - Database
  - Storage

### Deployment
- Vercel

---

## 📂 Project Structure

```
DevCanvas/
│
├── public/
│
├── src/
│   │
│   ├── appwrite/
│   │   ├── auth.js
│   │   └── config.js
│   │
│   ├── components/
│   │   ├── Header/
│   │   ├── Footer/
│   │   ├── PostCard.jsx
│   │   ├── PostForm.jsx
│   │   └── ...
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   ├── AddPost.jsx
│   │   ├── EditPost.jsx
│   │   └── ...
│   │
│   ├── store/
│   │   ├── authSlice.js
│   │   └── store.js
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
├── vite.config.js
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/CHHAVI0110/DevCanvas-.git
```

### 2. Navigate into the project

```bash
cd DevCanvas-
```

### 3. Install dependencies

```bash
npm install
```

### 4. Create environment variables

Create a `.env` file in the root directory:

```env
VITE_APPWRITE_URL=
VITE_APPWRITE_PROJECT_ID=
VITE_APPWRITE_DATABASE_ID=
VITE_APPWRITE_COLLECTION_ID=
VITE_APPWRITE_BUCKET_ID=
VITE_TINYMCE_API_KEY=
```

Add your Appwrite project credentials.

---

## ▶️ Run the Project

Start the development server:

```bash
npm run dev
```

The project will run on:

```
http://localhost:5173
```

---

## 🏗️ Build for Production

Create a production build:

```bash
npm run build
```

Preview the build:

```bash
npm run preview
```

---

## 🌐 Live Demo

Visit the deployed application:

```
https://dev-canvas-lake.vercel.app/
```

---


## 👩‍💻 Author

**CHHAVI0110**

GitHub:
https://github.com/CHHAVI0110

---

⭐ If you like this project, consider giving it a star on GitHub!
