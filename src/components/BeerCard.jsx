import React from 'react';
import { Star } from 'lucide-react';

export function BeerCard({ beer }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
      <div className="h-48 overflow-hidden">
        <img
          src={beer.image || 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=800'}
          alt={beer.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{beer.name}</h3>
        <div className="flex items-center mb-2">
          <Star className="w-5 h-5 text-yellow-400 fill-current" />
          <span className="ml-1 text-gray-600">
            {beer.rating.average.toFixed(1)} ({beer.rating.reviews} reviews)
          </span>
        </div>
        <p className="text-gray-600 mb-2">{beer.description?.slice(0, 100)}...</p>
        <div className="text-lg font-bold text-indigo-600">{beer.price}</div>
      </div>
    </div>
  );
}