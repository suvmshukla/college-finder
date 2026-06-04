# CollegeFinder 🎓

A full-stack College Discovery Platform built using Next.js, Prisma, Neon PostgreSQL, and Tailwind CSS.

## Live Demo

https://college-finder-zeta.vercel.app

## GitHub Repository

https://github.com/suvmshukla/college-finder

---

## Features

### 1. College Listing & Search

* Browse colleges
* Search colleges by name
* Filter by location
* Filter by rating

### 2. College Detail Page

* College overview
* Fees information
* Ratings
* Placement information
* Courses section
* Reviews section

### 3. Compare Colleges

* Side-by-side comparison
* Compare fees
* Compare ratings
* Compare placements
* Compare locations

### 4. College Predictor Tool

* Enter JEE Rank
* Get recommended colleges based on rank
* Simple recommendation engine

---

## Tech Stack

### Frontend

* Next.js
* React
* TypeScript
* Tailwind CSS

### Backend

* Next.js API Routes
* Prisma ORM

### Database

* Neon PostgreSQL

### Deployment

* Vercel

---

## Database Schema

```prisma
model College {
  id          Int      @id @default(autoincrement())
  name        String
  location    String
  fees        Int
  rating      Float
  placements  String?
  description String
}
```

---

## API Endpoints

### Get All Colleges

```http
GET /api/colleges
```

### Get Single College

```http
GET /api/colleges/[id]
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/suvmshukla/college-finder.git
```

Move into project directory:

```bash
cd college-finder
```

Install dependencies:

```bash
npm install
```

Configure environment variables:

```env
DATABASE_URL=your_neon_database_url
```

Run development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## Future Improvements

* Authentication
* Saved Colleges
* Saved Comparisons
* Advanced Predictor Logic
* Pagination
* Real College Dataset
* Student Reviews System

---

## Author

Shubham Kumar Shukla

Built as part of a Full Stack College Discovery Platform project using Next.js, Prisma, Neon PostgreSQL, and Vercel.

