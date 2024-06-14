import React from "react";
import { FaHeart } from "react-icons/fa6";

function ImageContainer() {
  return (
    <div className="sticky w-1/2 h-full rounded-3xl">
      <img
        src="https://images.pexels.com/photos/7846476/pexels-photo-7846476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Background"
        className="object-fill w-full h-full rounded-3xl"
      />
      <div className="absolute top-0 left-0 m-4 bg-white p-4 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold text-yellow-400">300+</h2>
        <p>Itineraries posted</p>
      </div>
      <div className="absolute bottom-0 right-0 m-4 bg-white p-4 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold text-red-400">12k+</h2>
        <p>Tourists Visited</p>
      </div>
      <div className="absolute top-0 right-0 m-4 bg-white rounded-full p-3 text-center">
        <FaHeart className="text-red-500 text-3xl" />
      </div>
    </div>
  );
}

export default ImageContainer;
