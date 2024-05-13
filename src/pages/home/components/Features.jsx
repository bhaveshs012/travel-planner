import React from "react";

function Features() {
  return (
    <>
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-4">
            <h2 className="text-3xl font-extrabold text-gray-900">Features</h2>
            <p className="mt-4 text-lg text-gray-600">
              Discover what Wanderlog has to offer
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Itinerary Planning
              </h3>
              <p className="text-gray-600">
                Plan your trips with ease using our intuitive itinerary planning
                tools.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Collaboration
              </h3>
              <p className="text-gray-600">
                Collaborate with friends and family to create unforgettable
                travel experiences together.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Share Your Adventures
              </h3>
              <p className="text-gray-600">
                Share your travel plans and experiences with the world and
                inspire others.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Features;
