export async function fetchBeers() {
  const response = await fetch('https://api.sampleapis.com/beers/ale');
  if (!response.ok) {
    throw new Error('Failed to fetch beers');
  }
  return response.json();
}