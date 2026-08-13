"use client";

import { ArrowDownUp } from "lucide-react";

const sortOptions = [
  {
    value: "relevance",
    label: "Relevance",
  },
  {
    value: "rating",
    label: "Highest Rated",
  },
  {
    value: "newest",
    label: "Newest",
  },
  {
    value: "oldest",
    label: "Oldest",
  },
];

export default function BookSort({ value, onChange }) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-stone-200 bg-white px-3 py-2">
      <ArrowDownUp size={16} className="text-stone-400" />

      <label htmlFor="book-sort" className="text-sm text-stone-500">
        Sort by
      </label>

      <select
        id="book-sort"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="cursor-pointer bg-transparent text-sm font-medium text-stone-800 outline-none"
      >
        {sortOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
