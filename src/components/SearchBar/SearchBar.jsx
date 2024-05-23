import React from "react";
const SearchBar = () => {
  return (
    <div className="flex flex-row items-center space-x-2 my-4 px-8">
      <input
        className="w-full h-10 px-4 text-base text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
        type="text"
        placeholder="Search..."
      />
      <button className="flex items-center justify-center h-10 bg-gray-700 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50">
        <img src="src/assets/filter.png" className="w-4 h-5" alt="" />
        <span className="ml-2">Filter</span>
      </button>
    </div>
  );
};

export default SearchBar;
