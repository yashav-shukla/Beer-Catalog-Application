import React from 'react';
import { BeerCard } from './BeerCard';

export function BeerGrid({ beers }) {
  if (beers.length === 0) {
    return (
      <div className="text-center text-gray-500 mt-12">
        No beers found matching your search.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {beers.map((beer) => (
        <BeerCard key={beer.id} beer={beer} />
      ))}
    </div>
  );
}