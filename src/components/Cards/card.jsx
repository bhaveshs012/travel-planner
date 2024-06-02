import React, { useState } from 'react';

function Card() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (  
    
    <div className="flex justify-center space-x-4">
      <div className="shadow-xl p-4 rounded-3xl m-2 inline-block relative">
        <img
          src="src/assets/image.jpg"
          className="h-88 w-80 rounded-3xl"
          alt="Sunset in the mountains"
        />
        <div className="absolute top-2 right-2">
          <button
            className={`px-2 py-2 h-10 w-10 rounded-full shadow-md 
            ${isClicked ? 'bg-white text-white' : 'bg-white text-black'
              }`}
            onClick={handleClick}
          >
            {<svg
              className="h-8 w-8"
              fill={isClicked ? "red" : "none"}
              viewBox="0  24 24"
              stroke={isClicked ? "red" : "currentColor"}>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>}
          </button>
        </div>
        <div className="px-6 py-4 ">
          <div className="font-bold text-xl mb-2">The Marina lake</div>
          <p className="text-gray-700 text-base">
            Best Place to view the Sunset
          </p>
        </div>
        <div className="pt-4 pb-2 px-1 inline-flex ">
          <span className="inline-flex items-center bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            <svg className="h-4 w-4 text-black mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>

            Mumbai</span>
          <span className="inline-flex items-center bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            <svg
              className="h-4 w-4 text-yellow-500 mr-1"
              viewBox="0 0 24 24"
              fill="gold"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            Rating
          </span>


        </div>
      </div>
    </div>
  );
}

export default Card;
