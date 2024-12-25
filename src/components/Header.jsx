import React from 'react';
import { Beer as BeerIcon } from 'lucide-react';
import { SearchBar } from './SearchBar';

export function Header({ searchTerm, onSearchChange }) {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center">
        <BeerIcon className="w-8 h-8 text-indigo-600 mr-3" />
        <h1 className="text-3xl font-bold text-gray-800">Beer Catalog</h1>
      </div>
      <SearchBar searchTerm={searchTerm} onSearchChange={onSearchChange} />
    </div>
  );
}