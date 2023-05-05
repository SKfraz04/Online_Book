import { useState } from "react";
import Head from "next/head";
import books from "./Doc/booksData.json";
import Navbar from './UI/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';

const categories = [
  "All",
  "Romantic",
  "Thriller",
  "History",
  "Business",
  "Religion",
  "Science",
  "Kids",
  "Comedy",
  "Horror",
];

const Books = () => {
  let allData = categories.map((cat)=>books[cat.toLowerCase()]).flat().slice(1);
  console.log(allData)
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [booksData,setBooksData] = useState(allData);
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setBooksData(category == "All"?allData:books[category.toLowerCase()]);
  };

  return (
    <div>
      <Navbar />
    <div className="container mx-auto px-4">
      <Head>
        <title>Books Category</title>
      </Head>
      <div className="my-4 flex justify-between">
        <h1 className="text-4xl font-bold">Books</h1>
        <div className="relative">
          <select
            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            value={selectedCategory}
            onChange={(e) => handleCategoryChange(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-filteredBooksy-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M11.293 13.707a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414L10 11.586l2.293-2.293a1 1 0 011.414 1.414l-3 3z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap -mx-4">
        {Array.isArray(booksData) &&
          booksData?.map((book) => (
            <div
              key={book?.id}
              className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4"
            >
              <div className="border border-gray-300 p-4 rounded-lg">
                <img
                  src={book?.image}
                  alt={book?.title}
                  className="w-full h-48 object-cover mb-4 rounded-lg"
                />
                <h2 className="text-lg font-bold mb-2">{book?.title}</h2>
                <p className="text-gray-700 mb-4">{book?.author}</p>
                <p className="text-gray-700">{book?.description}</p>
              </div>
            </div>
          ))}
      </div>filteredBooks
    </div>
    </div>
  );
};

export default Books;

