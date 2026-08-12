import { OPEN_LIBRARY_API, MAX_BOOKS } from "@/lib/constants/api.js";
import { ApiError } from "@/lib/errors/apiError.js";

export async function searchOpenLibrary(query) {
  const url = new URL(OPEN_LIBRARY_API);

  url.searchParams.set("q", query);
  url.searchParams.set("limit", String(MAX_BOOKS));

  url.searchParams.set(
    "fields",
    [
      "title",
      "author_name",
      "first_publish_year",
      "isbn",
      "cover_i",
      "key",
    ].join(","),
  );

  const response = await fetch(url, {
    next: {
      revalidate: 300,
    },
  });

  if (!response.ok) {
    throw new ApiError("Failed to fetch books from Open Library", 502);
  }

  const data = await response.json();

  return {
    books: data.docs || [],
    total: data.numFound || 0,
  };
}
