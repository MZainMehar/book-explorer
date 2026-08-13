"use client";

import { useState, useEffect } from "react";
import { Search } from "lucide-react";

import useDebounce from "@/hooks/useDebounce";

export default function Navbar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    onSearch(debouncedSearchTerm);
  }, [debouncedSearchTerm, onSearch]);

  return (
    <header className="border-b border-stone-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center gap-8 px-5 py-4 lg:px-8">
        <a href="/" className="shrink-0">
          <div className="text-2xl font-semibold tracking-tight text-stone-900">
            Libria
          </div>

          <p className="text-[10px] tracking-wide text-stone-500">
            Where books live, ideas grow
          </p>
        </a>

        <nav className="hidden flex-1 justify-center md:flex">
          <a
            href="#explore"
            className="text-sm text-stone-700 transition hover:text-stone-950"
          >
            Explore Books
          </a>
        </nav>

        <div className="relative ml-auto w-full max-w-sm">
          <Search
            size={17}
            strokeWidth={1.8}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-stone-400"
          />

          <input
            type="search"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Search books or authors..."
            className="h-10 w-full rounded-full border border-stone-200 bg-stone-50 pl-10 pr-4 text-sm text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-amber-500 focus:bg-white"
          />
        </div>
      </div>
    </header>
  );
}
