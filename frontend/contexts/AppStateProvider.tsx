"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { Role } from "@/types";

type DiscoveryState = {
  lastSearch: string;
  recentSearches: string[];
  rememberSearch: (query: string) => void;
};

type SavedListingsState = {
  savedListingIds: string[];
  isSavedListing: (listingId: string) => boolean;
  toggleSavedListing: (listingId: string) => void;
};

type SessionState = {
  role: Role;
  setRole: (role: Role) => void;
};

type AppState = DiscoveryState & SavedListingsState & SessionState;

const defaultSavedListingIds = ["kilimani-2-bed", "westlands-office"];
const AppStateContext = createContext<AppState | null>(null);

export function AppStateProvider({ children }: { children: React.ReactNode }) {
  const [role, setRole] = useState<Role>("guest");
  const [lastSearch, setLastSearch] = useState("");
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [savedListingIds, setSavedListingIds] = useState<string[]>(defaultSavedListingIds);

  useEffect(() => {
    const storedSavedListings = window.localStorage.getItem("kodisha.savedListings");
    const storedRecentSearches = window.localStorage.getItem("kodisha.recentSearches");
    const storedRole = window.localStorage.getItem("kodisha.role") as Role | null;

    if (storedSavedListings) {
      setSavedListingIds(JSON.parse(storedSavedListings));
    }

    if (storedRecentSearches) {
      const searches = JSON.parse(storedRecentSearches);
      setRecentSearches(searches);
      setLastSearch(searches[0] ?? "");
    }

    if (storedRole) {
      setRole(storedRole);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("kodisha.savedListings", JSON.stringify(savedListingIds));
  }, [savedListingIds]);

  useEffect(() => {
    window.localStorage.setItem("kodisha.recentSearches", JSON.stringify(recentSearches));
  }, [recentSearches]);

  useEffect(() => {
    window.localStorage.setItem("kodisha.role", role);
  }, [role]);

  const rememberSearch = useCallback((query: string) => {
    const normalized = query.trim();
    if (!normalized) return;

    setLastSearch(normalized);
    setRecentSearches((current) => [
      normalized,
      ...current.filter((item) => item.toLowerCase() !== normalized.toLowerCase()),
    ].slice(0, 5));
  }, []);

  const isSavedListing = useCallback(
    (listingId: string) => savedListingIds.includes(listingId),
    [savedListingIds]
  );

  const toggleSavedListing = useCallback((listingId: string) => {
    setSavedListingIds((current) =>
      current.includes(listingId)
        ? current.filter((id) => id !== listingId)
        : [listingId, ...current]
    );
  }, []);

  const value = useMemo(
    () => ({
      isSavedListing,
      lastSearch,
      recentSearches,
      rememberSearch,
      role,
      savedListingIds,
      setRole,
      toggleSavedListing,
    }),
    [
      isSavedListing,
      lastSearch,
      recentSearches,
      rememberSearch,
      role,
      savedListingIds,
      toggleSavedListing,
    ]
  );

  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>;
}

export function useAppState() {
  const context = useContext(AppStateContext);

  if (!context) {
    throw new Error("useAppState must be used inside AppStateProvider");
  }

  return context;
}
