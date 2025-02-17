"use client"

import React from 'react'

export default function Error() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center p-6 bg-white shadow-lg rounded-2xl">
        <h1 className="text-6xl font-bold text-red-500">404</h1>
        <h2 className="text-xl font-semibold text-gray-700 mt-4">Page Not Found</h2>
        <p className="text-gray-500 mt-2">The page you are looking for does not exist.</p>
        <a
          href="/"
          className="mt-4 inline-block px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
        >
          Go Home
        </a>
      </div>
    </div>
  );
}
