import React from 'react';
import { Search } from 'lucide-react';

export function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="relative max-w-md w-full">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search beers..."
        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
      />
      <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
    </div>
  );
}