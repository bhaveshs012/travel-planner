import React from "react";
import ImageContainer from "./ImageContainer";
import { FaCirclePlay } from "react-icons/fa6";

function HeroSection() {
  return (
    <div className="flex gap-x-8 justify-center items-center">
      <div className="flex flex-col gap-y-8 h-1/2 w-1/2">
        <div>
          <p className="flex flex-col gap-y-8 text-8xl pacifico-regular font-bold text-transparent bg-clip-text bg-[url('https://images.pexels.com/photos/7846476/pexels-photo-7846476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center">
            <span className="block bg-clip-text text-transparent">
              Discover
            </span>
            <span className="text-end block ml-12 bg-clip-text text-transparent">
              Kashmir
            </span>
          </p>
        </div>
        <div className="flex flex-col gap-y-8">
          <p className="text-lg font-medium text-justify text-gray-500 font-mono">
            Kashmir, often referred to as "Paradise on Earth," is a
            breathtakingly beautiful region in northern India. Renowned for its
            stunning landscapes, Kashmir boasts lush green valleys, serene
            lakes, and snow-capped mountains. The region is famous for its
            charming houseboats on Dal Lake, vibrant gardens, and rich cultural
            heritage. Whether you're exploring the scenic meadows of Gulmarg,
            taking a shikara ride, or experiencing the warmth of Kashmiri
            hospitality, Kashmir offers an unforgettable and serene retreat.
          </p>
          <div className="flex justify-start items-center gap-x-8">
            <div className="px-6 py-3 w-max bg-black rounded-xl text-white font-bold">
              Plan a Trip Now
            </div>
            <div className="flex items-center gap-x-4 font-bold text-lg">
              <span className="text-4xl text-red-500">
                <FaCirclePlay />
              </span>
              <span className="">Watch Videos</span>
            </div>
          </div>
        </div>
      </div>
      <ImageContainer />
    </div>
  );
}

export default HeroSection;
