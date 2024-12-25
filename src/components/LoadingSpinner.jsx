import React from 'react';

export function LoadingSpinner() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-indigo-500"></div>
    </div>
  );
}