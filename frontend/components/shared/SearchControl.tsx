"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { useAppState } from "@/contexts/AppStateProvider";

type SearchControlProps = {
  action?: "/listings" | "/top-agents";
  initialValue?: string;
  placeholder?: string;
  className?: string;
  buttonLabel?: string;
};

export function SearchIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="m20 20-4.2-4.2m1.7-5A6.5 6.5 0 1 1 4 10.5a6.5 6.5 0 0 1 13 0Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

export function SearchControl({
  action = "/listings",
  initialValue = "",
  placeholder = "Search properties",
  className = "",
  buttonLabel = "Search",
}: SearchControlProps) {
  const router = useRouter();
  const { rememberSearch } = useAppState();
  const [query, setQuery] = useState(initialValue);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const search = query.trim();
    rememberSearch(search);
    router.push(search ? `${action}?search=${encodeURIComponent(search)}` : action);
  }

  return (
    <form className={`relative flex items-center ${className}`} onSubmit={onSubmit}>
      <SearchIcon className="pointer-events-none absolute left-3 h-4 w-4 text-stone-500" />
      <input
        aria-label={action === "/top-agents" ? "Search agents" : "Search listings"}
        className="min-h-10 w-full rounded-lg border border-stone-200 bg-white py-2 pl-10 pr-24 text-sm outline-none focus:border-orange-600"
        onChange={(event) => setQuery(event.target.value)}
        placeholder={placeholder}
        type="search"
        value={query}
      />
      <button
        className="absolute right-1.5 rounded-md bg-orange-600 px-3 py-1.5 text-xs font-semibold text-white"
        type="submit"
      >
        {buttonLabel}
      </button>
    </form>
  );
}
