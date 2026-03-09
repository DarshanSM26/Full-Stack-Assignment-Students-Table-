# Students Dashboard – React CRUD Assignment

## Overview

This project is a **Students Management Dashboard** built using **React.js**.
It allows users to manage student records through a responsive dashboard interface.

The application performs **all CRUD operations entirely on the frontend** using React state and browser local storage.

This project was developed as part of a **Full Stack assignment** to demonstrate frontend data handling, UI design, and React component architecture.

---

## Features

### Student Management

* View a list of students in a table
* Add new students
* Edit existing student details
* Delete students with confirmation dialog

### Form Validation

* All fields are mandatory
* Email format validation included

### Data Handling

* CRUD operations handled using **React state**
* Data persistence using **localStorage**

### Table Features

* Search students by name
* Pagination support
* Result counter (e.g., *Showing 3 of 10 students*)
* Friendly empty state message

### Export

* Download student data as an **Excel file**

### UI Features

* Responsive dashboard layout
* Sidebar navigation with icons
* Dark mode toggle
* Hover expandable sidebar
* Simulated loading state

---

## Technologies Used

* React
* Vite
* Tailwind CSS
* React Icons
* SheetJS (xlsx)
* LocalStorage API

---

## Project Structure

```
src
│
├ components
│   Sidebar.jsx
│   Navbar.jsx
│   StatsCards.jsx
│   StudentTable.jsx
│   StudentModal.jsx
│   Pagination.jsx
│
├ utils
│   exportExcel.js
│
├ App.jsx
├ main.jsx
└ index.css
```

---

## Installation

Clone the repository:

```
git clone https://github.com/DarshanSM26/Full-Stack-Assignment-Students-Table-.git
```

Navigate into the project folder:

```
cd Full-Stack-Assignment-Students-Table-
```

Install dependencies:

```
npm install
```

Run the development server:

```
npm run dev
```

Open in browser:

```
http://localhost:5173
```

---

## Live Demo

Live Project:
https://full-stack-assignment-students-tabl-seven.vercel.app

---

## GitHub Repository

 https://github.com/DarshanSM26/Full-Stack-Assignment-Students-Table-

---

## Assignment Requirements Covered

| Requirement           | Status    |
| --------------------- | --------- |
| React frontend        | Completed |
| Students table        | Completed |
| Add student form      | Completed |
| Edit student          | Completed |
| Delete confirmation   | Completed |
| Form validation       | Completed |
| Simulated loading     | Completed |
| Excel export          | Completed |
| Frontend data storage | Completed |
| Responsive UI         | Completed |

---

## Author

Darshan S M
B.Tech – Computer Engineering
