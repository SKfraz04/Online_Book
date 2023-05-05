import React from 'react';

const books = [
  { id: 1, title: 'Design Formula',  image: '/book-1.jpeg' },
  { id: 2, title: 'Blanket of Stars',  image: '/book-2.jpeg' },
  { id: 3, title: 'Mind Of The Leader',  image: '/book-3.png' },
  { id: 4, title: 'Storm',  image: '/book-4.jpeg' },
  { id: 5, title: 'Modern Space',  image: '/book-5.jpeg' },
  { id: 6, title: 'Deadly Keyholes',  image: '/book-6.jpeg' },
  { id: 7, title: 'Harry Porter',  image: '/book-7.jpeg' },
  { id: 8, title: 'Psyehology of Money',  image: '/book-8.jpeg' },
  { id: 9, title: 'Barrett the King',  image: '/book-9.jpeg' },
  { id: 10, title: 'Defferent Winter',  image: '/book-10.jpeg' },
  { id: 11, title: 'Crack The Code',  image: '/book-11.jpeg' },
  { id: 12, title: 'A Million to One',  image: '/book-12.jpeg' },
];

const TopBooks = () => {
  return (
    <div className="container mx-auto py-6">
      <h2 className="text-2xl font-bold mb-4">Top 10 Books in India</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <div key={book.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative pb-60">
              <img
                className="absolute inset-0 h-full w-full object-cover"
                src={book.image}
                alt={book.title}
              />
            </div>
            <div className="px-4 py-3">
              <h3 className="text-lg font-semibold mb-1">{book.title}</h3>
              <p className="text-gray-600 text-sm mb-2">{book.author}</p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
                Read Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBooks;
