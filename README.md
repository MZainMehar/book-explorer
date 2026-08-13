# Book Explorer

A full-stack book explorer built with Next.js. The application allows users to search for books and view information such as the title, author, publication year, cover, rating, and number of ratings.

Book information is fetched from Open Library, while ratings are retrieved from Google Books. The backend combines the data from both APIs and provides it to the frontend through a single API endpoint.

## Features

1. Search books by title or author
2. Debounced search
3. Book covers and basic book information
4. Google Books ratings and rating counts
5. Responsive design
6. Loading skeletons
7. Empty and error states
8. Backend API for combining data from both external services
9. API key kept securely on the server

## Tech Stack

Next.js
React
JavaScript
Tailwind CSS
Lucide React
Open Library API
Google Books API

## Getting Started

### Installation

Clone the repository:

```bash
git clone https://github.com/MZainMehar/book-explorer.git
cd book-explorer
```

Install the dependencies:

```bash
npm install
```

### Environment Variables

Create a `.env` file in the root of the project:

```env
GOOGLE_BOOKS_API_KEY=your_google_books_api_key
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Production Build

To create a production build:

```bash
npm run build
```

To run the production server:

```bash
npm start
```

## API

The application exposes the following endpoint:

```text
GET /api/books
```

A search query can be provided using the `q` parameter:

```text
GET /api/books?q=harry+potter
```

The backend first searches Open Library for the requested books. It then searches Google Books for the matching books and retrieves their ratings.

The final response combines the information into a consistent format for the frontend.

If no search query is provided, the application uses the default search configured by the backend.

## External APIs

### Open Library

Open Library is used for the main book information, including titles, authors, publication years, ISBNs, and cover images.

https://openlibrary.org/search.json?q=harry+potter

### Google Books

https://www.googleapis.com/books/v1/volumes?q=harry+potter&key={{google_api_key}}

Google Books is used to retrieve the average rating and number of ratings where available.

## Production URL: https://book-explorer-black.vercel.app
