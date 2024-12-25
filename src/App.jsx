import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { BeerGrid } from './components/BeerGrid';
import { LoadingSpinner } from './components/LoadingSpinner';
import { ErrorMessage } from './components/ErrorMessage';
import { fetchBeers } from './utils/api';
import { filterBeers } from './utils/filterBeers';

function App() {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBeers()
      .then((data) => {
        setBeers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  const filteredBeers = filterBeers(beers, searchTerm);

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <Header searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        <BeerGrid beers={filteredBeers} />
      </div>
    </div>
  );
}

export default App;