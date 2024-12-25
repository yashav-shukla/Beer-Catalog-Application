export function filterBeers(beers, searchTerm) {
  return beers.filter((beer) =>
    beer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
}