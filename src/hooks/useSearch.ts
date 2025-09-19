"use client";

import { useState, useCallback } from "react";

export function useSearch() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
  }, []);

  const clearSearch = useCallback(() => {
    setSearchQuery("");
  }, []);

  return {
    searchQuery,
    setSearchQuery: handleSearch,
    clearSearch,
    hasSearch: searchQuery.length > 0,
  };
}