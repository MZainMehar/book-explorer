import { NextResponse } from "next/server";

import { searchOpenLibrary } from "@/lib/services/openLibrary.js";
import { searchGoogleBooks } from "@/lib/services/googleBooks.js";

import { transformBook } from "@/lib/utils/book.js";
import { handleApiError } from "@/lib/errors/errorHandler.js";
import { DEFAULT_SEARCH_QUERY } from "@/lib/constants/api";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);

    const query = searchParams.get("q")?.trim() || DEFAULT_SEARCH_QUERY;

    // if (!query) {
    //   return NextResponse.json(
    //     {
    //       error: "Search query is required",
    //     },
    //     {
    //       status: 400,
    //     },
    //   );
    // }

    if (query.length > 100) {
      return NextResponse.json(
        {
          error: "Search query is too long",
        },
        {
          status: 400,
        },
      );
    }

    const { books: openLibraryBooks, total } = await searchOpenLibrary(query);

    const books = await Promise.all(
      openLibraryBooks.map(async (book) => {
        let googleBook = null;

        try {
          googleBook = await searchGoogleBooks(book);
        } catch (error) {
          console.error("Google Books lookup failed:", error);
        }

        return transformBook(book, googleBook);
      }),
    );

    return NextResponse.json({
      books,
      total,
    });
  } catch (error) {
    return handleApiError(error);
  }
}
