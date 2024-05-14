import React from "react";

function FeaturesPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-2xl font-bold text-center mb-8">Features</h1>

      {/* Feature 1: Trip Planning */}
      <div className="flex flex-col md:flex-row items-center justify-center mb-12">
        <div className="md:w-1/2 p-8 bg-gray-100 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Trip Planning</h2>
          <p className="text-gray-700 mb-4">
            Plan your next adventure with ease. Our intuitive interface allows
            you to create detailed itineraries, including destinations,
            activities, accommodations, and more.
          </p>
          {/* <img
            src="https://t3.ftcdn.net/jpg/06/11/33/86/360_F_611338656_EQHQ3mbT6dtKqXMQljyoY7gKGbxeONXs.jpg"
            alt="Trip Planning"
            className="rounded-lg shadow-md mb-4"
          /> */}
        </div>
      </div>

      {/* Feature 2: Photo Sharing */}
      <div className="flex flex-col md:flex-row items-center justify-center mb-12">
        <div className="md:w-1/2 order-2 md:order-1 p-8 bg-gray-100 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Photo Sharing</h2>
          <p className="text-gray-700 mb-4">
            Capture and share your travel memories with our photo-sharing
            feature. Create stunning albums and inspire others to explore new
            destinations.
          </p>
          {/* <img
            src="https://via.placeholder.com/400"
            alt="Photo Sharing"
            className="rounded-lg shadow-md mb-4"
          /> */}
        </div>
      </div>

      {/* Feature 3: Collaborative Planning */}
      <div className="flex flex-col md:flex-row items-center justify-center mb-12">
        <div className="md:w-1/2 p-8 bg-gray-100 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Collaborative Planning</h2>
          <p className="text-gray-700 mb-4">
            Coordinate your trip with friends and family members in real-time.
            Collaborate on itineraries, fine-tune plans, and ensure everyone's
            preferences are accounted for.
          </p>
          {/* <img
            src="https://via.placeholder.com/400"
            alt="Collaborative Planning"
            className="rounded-lg shadow-md mb-4"
          /> */}
        </div>
      </div>
    </div>
  );
}

export default FeaturesPage;
