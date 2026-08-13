import { GOOGLE_BOOKS_API } from "@/lib/constants/api.js";
import { normalizeText } from "@/lib/utils/text.js";
import { getBestIsbn } from "@/lib/utils/book.js";

function isGoogleBookMatch(openLibraryBook, googleBook) {
  const openLibraryTitle = normalizeText(openLibraryBook.title);

  const googleTitle = normalizeText(googleBook.volumeInfo?.title);

  if (!openLibraryTitle || !googleTitle) {
    return false;
  }

  if (openLibraryTitle === googleTitle) {
    return true;
  }

  return (
    openLibraryTitle.includes(googleTitle) ||
    googleTitle.includes(openLibraryTitle)
  );
}

export async function searchGoogleBooks(book) {
  const apiKey = process.env.GOOGLE_BOOKS_API_KEY;

  if (!apiKey) {
    throw new Error("GOOGLE_BOOKS_API_KEY is not configured");
  }

  const isbn = getBestIsbn(book.isbn);

  const url = new URL(GOOGLE_BOOKS_API);

  if (isbn) {
    url.searchParams.set("q", `isbn:${isbn}`);
  } else {
    const title = book.title || "";
    const author = book.author_name?.[0] || "";

    url.searchParams.set("q", `intitle:${title} inauthor:${author}`);
  }

  url.searchParams.set("maxResults", "5");
  url.searchParams.set("key", apiKey);

  const response = await fetch(url, {
    next: {
      revalidate: 300,
    },
  });

  if (!response.ok) {
    throw new Error(`Google Books API returned ${response.status}`);
  }

  const data = await response.json();

  const googleBooks = data.items || [];

  if (googleBooks.length === 0) {
    return null;
  }

  const matchingBook = googleBooks.find((googleBook) =>
    isGoogleBookMatch(book, googleBook),
  );

  return matchingBook || googleBooks[0];
}
