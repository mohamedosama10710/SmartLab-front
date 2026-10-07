# 🧪 EL-NOUR LAB — Medical Laboratory Management System

**EL-NOUR LAB** is a full-stack medical laboratory management system developed as part of an **NTI Graduation Project**.

The platform provides a centralized and secure environment for managing laboratory operations while allowing patients to interact with the laboratory online. Patients can book appointments, access their laboratory results, review their medical test history, and download or print their reports.

The system also provides dedicated dashboards for **Admin and Staff users**, enabling them to manage patients, employees, appointments, and laboratory test reports.

🌐 **Live Website:**
https://smartlab-frontend-eight.vercel.app/

---

## ✨ Key Features

### 🔐 Authentication & Authorization

* Secure authentication using **JWT**.
* Role-based access control.
* Support for **Admin, Staff, and Patient** roles.
* Automatic redirection to the appropriate dashboard based on the authenticated user's role.
* Password hashing using **bcrypt**.
* Protected frontend routes and backend resources.
* Input validation for forms and API requests.

---

## 👨‍💼 Admin & Staff Dashboard

Authorized Admin and Staff users can manage the laboratory through dedicated dashboards.

### Dashboard capabilities include:

* 👥 Patient management.
* 👨‍💼 Staff and employee management.
* 📅 Appointment scheduling and management.
* 🧪 Laboratory test report management.
* ✏️ Create and update test reports.
* 🔎 Search and filter records.
* 📄 Pagination for large datasets.
* 📊 Statistics and interactive dashboard charts.
* 🔐 Role-based access to protected resources.

---

## 🧑‍⚕️ Patient Portal

Each patient has a personalized portal where they can:

* Create and manage their account.
* Book laboratory appointments online.
* View upcoming and previous appointments.
* Access laboratory test results.
* Review their complete test history.
* View detailed test parameters.
* View:

  * Test Result
  * Unit
  * Reference Range
* Download laboratory reports.
* Print laboratory reports.

---

## 🧬 Laboratory Test Reports

The system provides a structured workflow for creating and managing laboratory reports.

Each report can contain detailed test information including:

| Field           | Description               |
| --------------- | ------------------------- |
| Test            | Laboratory test name      |
| Result          | Patient's measured result |
| Unit            | Measurement unit          |
| Reference Range | Expected/reference values |

Authorized staff members can create and update reports, while patients can securely access their available results through their personal portal.

---

## 📅 Appointment Management

Patients can book laboratory appointments directly through the website.

Staff members can then manage appointments from the dashboard, providing the laboratory with a centralized system for organizing patient schedules.

---

## 📊 Dashboard & Analytics

The management dashboard provides visual insights into laboratory operations through statistics and charts.

This allows authorized staff to quickly monitor important information and understand the current state of the laboratory system.

---

# 🏗️ System Architecture

The project follows a **client-server architecture** with the frontend and backend maintained in separate repositories.

```text
                         EL-NOUR LAB
                              │
               ┌──────────────┴──────────────┐
               │                             │
        Angular Frontend              Express.js Backend
               │                             │
         Bootstrap UI                  REST API
               │                             │
       Role-Based Views          Authentication & Validation
               │                             │
               └──────────────┬──────────────┘
                              │
                         MongoDB
```

---

# 👥 User Roles

| Role        | Responsibilities                                                                                          |
| ----------- | --------------------------------------------------------------------------------------------------------- |
| **Admin**   | Full system control, staff management, patient management, appointments, reports, and system operations.  |
| **Staff**   | Manage laboratory operations, patients, appointments, and test reports according to assigned permissions. |
| **Patient** | Book appointments, view test results, access test history, and download/print reports.                    |

---

# 🔑 Authentication Flow

```text
User
  │
  ▼
Login Page
  │
  ▼
Backend Authentication
  │
  ├── Invalid Credentials ──► Error Response
  │
  ▼
JWT Token
  │
  ▼
Identify User Role
  │
  ├── Admin ───► Admin Dashboard
  │
  ├── Staff ───► Staff Dashboard
  │
  └── Patient ─► Patient Portal
```

The application uses JWT-based authentication to secure communication between the frontend and backend while role-based authorization controls access to protected resources.

---

# 🛠️ Tech Stack

| Technology     | Purpose                        |
| -------------- | ------------------------------ |
| **Angular**    | Frontend application           |
| **Bootstrap**  | Responsive UI and styling      |
| **Node.js**    | Backend runtime                |
| **Express.js** | REST API and backend services  |
| **MongoDB**    | Database                       |
| **JWT**        | Authentication & authorization |
| **bcrypt**     | Password hashing               |

---

# 📂 Project Repositories

The project is divided into two separate repositories:

### Frontend

**Angular + Bootstrap**

https://github.com/mohamedosama10710/SmartLab-front

### Backend

**Node.js + Express.js + MongoDB**

https://github.com/mohamedosama10710/SmartLab-back

---

# 🌐 Live Demo

The application is deployed and available online:

**EL-NOUR LAB:**
https://smartlab-frontend-eight.vercel.app/

---

# 🔑 Demo Admin Account

For demonstration and evaluation purposes, you can access the Admin Dashboard using the following demo account:

```text
Email:    mohamedosama@gmail.com
Password: 1234
Role:     Admin
```

> ⚠️ **Demo Account Notice:**
> The credentials above are provided strictly for demonstration purposes. They should not be used as production credentials or for storing real patient information.

After logging in, you can explore the administrative dashboard and the available laboratory management features.

---

# 🚀 Getting Started

## Prerequisites

Make sure you have the following installed:

* Node.js
* npm
* Angular CLI
* MongoDB

---

## 1. Clone the Repositories

Clone both repositories:

```bash
git clone https://github.com/mohamedosama10710/SmartLab-front.git

git clone https://github.com/mohamedosama10710/SmartLab-back.git
```

---

## 2. Backend Setup

Navigate to the backend project:

```bash
cd SmartLab-back
```

Install dependencies:

```bash
npm install
```

Configure the required environment variables according to the backend configuration.

Example:

```env
PORT=5000
MONGODB_URI=YOUR_MONGODB_CONNECTION_STRING
JWT_SECRET=YOUR_SECRET_KEY
```

Start the backend:

```bash
npm start
```

---

## 3. Frontend Setup

Navigate to the frontend project:

```bash
cd SmartLab-front
```

Install dependencies:

```bash
npm install
```

Start the Angular development server:

```bash
ng serve
```

Then open:

```text
http://localhost:4200/
```

The Angular repository currently uses Angular CLI, and its documented development workflow uses `ng serve`.

---

# 🔒 Security

The system implements several security mechanisms, including:

* JWT authentication.
* Role-based authorization.
* Password hashing using bcrypt.
* Protected frontend routes.
* Protected backend resources.
* Input validation.
* Environment variables for sensitive configuration.
* Controlled access to patient information.

> **Important:** This project was developed as an educational NTI graduation project. A production system handling real medical data would require additional security, privacy, auditing, infrastructure, and regulatory compliance measures.

---

# 🎯 Project Objectives

The main objectives of EL-NOUR LAB were to:

* Digitize laboratory management operations.
* Reduce manual management of patient information.
* Simplify appointment scheduling.
* Provide patients with online access to their laboratory results.
* Maintain organized patient test history.
* Centralize laboratory operations within one platform.
* Implement secure authentication and role-based authorization.
* Apply full-stack development concepts in a real-world healthcare scenario.

---

# 🎓 NTI Graduation Project

**EL-NOUR LAB** was developed collaboratively as part of an **NTI Graduation Project**, combining frontend, backend, database, authentication, authorization, and deployment technologies into a complete full-stack application.

---

# 👥 Project Team

Developed collaboratively as part of the **National Telecommunication Institute (NTI) Graduation Project**.

> Team members and individual responsibilities can be added here.

---

# 📌 Future Improvements

Potential future improvements could include:

* Email and SMS appointment notifications.
* Advanced laboratory analytics.
* Online payment integration.
* More granular staff permissions.
* Audit logs for sensitive operations.
* Automated report generation.
* Enhanced medical data security and compliance.
* Mobile application support.

---

# 📄 License

This project was developed for educational purposes as part of an NTI graduation project.

If the repositories are intended for public distribution, an appropriate open-source license can be added.
