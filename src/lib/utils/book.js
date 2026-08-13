export function getCoverUrl(coverId) {
  if (!coverId) return null;

  return `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`;
}

export function getBestIsbn(isbns = []) {
  if (!Array.isArray(isbns) || isbns.length === 0) {
    return null;
  }

  const isbn13 = isbns.find((isbn) => isbn.replace(/[-\s]/g, "").length === 13);

  return isbn13 || isbns[0];
}

export function transformBook(openLibraryBook, googleBook) {
  const volumeInfo = googleBook?.volumeInfo;

  return {
    id: openLibraryBook.key?.replace("/works/", "") || crypto.randomUUID(),

    title: openLibraryBook.title || "Unknown title",

    author: openLibraryBook.author_name?.[0] || "Unknown author",

    publishedYear: openLibraryBook.first_publish_year || null,

    coverUrl: getCoverUrl(openLibraryBook.cover_i),

    rating:
      typeof volumeInfo?.averageRating === "number"
        ? volumeInfo.averageRating
        : null,

    ratingsCount:
      typeof volumeInfo?.ratingsCount === "number"
        ? volumeInfo.ratingsCount
        : 0,
  };
}
