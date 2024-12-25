# Beer Catalog

A modern React application that displays a searchable catalog of beers using data from the Sample APIs beer collection.

![Beer Catalog Screenshot](https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=800)

## Features

- 🍺 Display beer cards with images and details
- 🔍 Real-time search functionality
- 📱 Responsive grid layout
- ⚡ Fast and efficient filtering
- 💅 Modern UI with Tailwind CSS
- 🎨 Beautiful hover animations
- 🖼️ Fallback images for missing beer photos

## Tech Stack

- React
- Tailwind CSS
- Lucide React (for icons)
- Sample APIs (for beer data)

## Project Structure

```
src/
├── components/          # React components
│   ├── BeerCard.jsx    # Individual beer card
│   ├── BeerGrid.jsx    # Grid layout for beer cards
│   ├── Header.jsx      # App header with search
│   ├── SearchBar.jsx   # Search input component
│   ├── LoadingSpinner.jsx
│   └── ErrorMessage.jsx
├── utils/              # Utility functions
│   ├── api.js         # API calls
│   └── filterBeers.js # Search filtering logic
├── App.jsx            # Main application component
└── main.jsx          # Application entry point
```

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## API Reference

The application uses the Sample APIs beer collection:
- Endpoint: `https://api.sampleapis.com/beers/ale`
- Returns an array of beer objects with properties:
  - `id`: Unique identifier
  - `name`: Beer name
  - `price`: Price string
  - `rating`: Object containing `average` and `reviews`
  - `image`: URL to beer image
  - `description`: Beer description

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request
