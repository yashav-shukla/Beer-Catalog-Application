import React, { useEffect, useState } from 'react';
import { Beer } from './types/Beer';
import { BeerCard } from './components/BeerCard';
import { SearchBar } from './components/SearchBar';
import { Beer as BeerIcon } from 'lucide-react';

function App() {
  const [beers, setBeers] = useState<Beer[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://api.sampleapis.com/beers/ale')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch beers');
        }
        return response.json();
      })
      .then((data) => {
        setBeers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const filteredBeers = beers.filter((beer) =>
    beer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-red-500 text-xl">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <BeerIcon className="w-8 h-8 text-indigo-600 mr-3" />
            <h1 className="text-3xl font-bold text-gray-800">Beer Catalog</h1>
          </div>
          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        </div>

        {filteredBeers.length === 0 ? (
          <div className="text-center text-gray-500 mt-12">
            No beers found matching your search.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBeers.map((beer) => (
              <BeerCard key={beer.id} beer={beer} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;