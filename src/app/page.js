"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import Navbar from "@/components/navigation/Navbar";
import Hero from "@/components/home/Hero";
import BookSection from "@/components/home/BookSection";

export default function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");

  const abortControllerRef = useRef(null);

  const fetchBooks = useCallback(async (searchQuery = "") => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    const controller = new AbortController();

    abortControllerRef.current = controller;

    try {
      setLoading(true);
      setError("");

      const params = new URLSearchParams();

      if (searchQuery) {
        params.set("q", searchQuery);
      }

      const response = await fetch(`/api/books?${params.toString()}`, {
        signal: controller.signal,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to fetch books");
      }

      setBooks(data.books || []);
    } catch (error) {
      if (error.name === "AbortError") {
        return;
      }

      console.error("Book fetch error:", error);

      setBooks([]);

      setError(error.message || "Something went wrong while fetching books.");
    } finally {
      if (!controller.signal.aborted) {
        setLoading(false);
      }
    }
  }, []);

  useEffect(() => {
    fetchBooks();

    return () => {
      abortControllerRef.current?.abort();
    };
  }, [fetchBooks]);

  const handleSearch = useCallback(
    (searchQuery) => {
      setQuery(searchQuery);
      fetchBooks(searchQuery);
    },
    [fetchBooks],
  );

  return (
    <div className="min-h-screen bg-[#f8f4ee]">
      <Navbar onSearch={handleSearch} />

      <main>
        <Hero />

        <BookSection
          books={books}
          loading={loading}
          error={error}
          query={query}
        />
      </main>
    </div>
  );
}
