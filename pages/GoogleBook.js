import React, { useState } from 'react';
import Head from 'next/head';

const GoogleBooksSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState([]);

  const handleSearch = async () => {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`);
    const data = await response.json();
    setBooks(data.items);
  };

  const handleDemoRead = (bookId) => {
    window.open(`https://books.google.com/books?id=${bookId}&lpg=PP1&pg=PP1#v=onepage&q&f=false`, '_blank');
  };

  return (
    <div className="container mx-auto py-6">
      <Head>
        <title>Your Book Library Here</title>
      </Head>
      <h2 className="text-2xl font-bold text-center mb-4">Search Your Book Here</h2>
      <div className="flex">
        <input
          className="border rounded-l px-4 py-2 w-full"
          type="text"
          placeholder="Search for books"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white rounded-r px-4 py-2"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {books.map((book) => (
          <div key={book.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative pb-60">
              <img
                className="absolute inset-0 h-full w-full object-cover"
                src={book.volumeInfo.imageLinks?.thumbnail || '/book-placeholder.png'}
                alt={book.volumeInfo.title}
              />
            </div>
            <div className="px-4 py-3">
              <h3 className="text-lg font-semibold mb-1">{book.volumeInfo.title.slice(0, 30)}</h3>
              <p className="text-gray-600 text-sm mb-2">{book.volumeInfo.authors?.join(', ')}</p>
              <p className="text-gray-600 text-sm mb-2">{book.volumeInfo.description.split(' ').slice(0, 15).join(' ')}</p>
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 mr-2"
                onClick={() => handleDemoRead(book.id)}
              >
                Demo Read
              </button>
              <a
                href={book.volumeInfo.previewLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
              >
                Preview
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GoogleBooksSearch;
