import React from 'react';

export function ErrorMessage({ message }) {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-red-500 text-xl">{message}</div>
    </div>
  );
}