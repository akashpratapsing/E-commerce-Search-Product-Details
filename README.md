# Full Stack Product Search App

A full-stack application for searching and viewing product details.

## Project Overview
This is a full-stack product search application where users can search for products, view product details, and experience a clean, responsive interface. The frontend is built with React, Vite, and Tailwind CSS, while the backend is powered by Spring Boot and H2 (in-memory) Database.

## Features
- 🔍 **Live product search** via API
- 📄 **Product detail view** by product ID
- 🖼️ Clean and responsive grid layout for product listings
- 🔁 **ClipLoader spinner** during loading
- ⚠️ **Toast notifications** for errors

## Tech Stack
- **Frontend:**
  - React
  - Tailwind CSS
  - Vite
- **Backend:**
  - Spring Boot
  - JPA (Java Persistence API)
  - H2 (in-memory) Database
- **API Communication:**
  - Axios

## Project Structure
```plaintext
app/
├── backend/ # Spring Boot backend
└── frontend/ # Vite + React + Tailwind frontend
```
---

## Setup Instructions

### Prerequisites

Make sure you have the following installed:

- Node.js (v18+)
- npm or yarn
- Java 17+
- Maven

---

### Backend Setup

1. Navigate to the backend folder:

    ```
    cd app/backend
    ```

2. Create a H2 (in-memory) Database and update the `application.properties` file.

3. Build and run the Spring Boot app:

    ```
    ./mvnw spring-boot:run
    ```

4. The backend will be available at [http://localhost:8080](http://localhost:8080).

---

### Frontend Setup

1. Navigate to the frontend folder:

    ```
    cd ../frontend
    ```

2. Install dependencies:

    ```
    npm install
    ```

3. Start the Vite development server:

    ```
    npm run dev
    ```

4. The frontend will be available at [http://localhost:5173](http://localhost:5173).

---

## Features Implemented

- Live product search via API
- Product detail view via ID-based API
- Clean, responsive grid layout
- ClipLoader spinner during loading
- Toast notifications for errors

---

## Developer Notes

- Swagger API docs available at: [http://localhost:8080/swagger-ui/index.html](http://localhost:8080/swagger-ui/index.html)
- CORS is enabled in the backend for development.

---

## License

This project is for academic and learning purposes.

