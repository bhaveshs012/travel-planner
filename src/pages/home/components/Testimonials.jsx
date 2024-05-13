import React from "react";

function Testimonials() {
  return (
    <>
      <section className="bg-gray-200 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
            Testiomonials
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-white shadow-md rounded-lg">
              <div className="flex items-center mb-4">
                <img
                  src={"https://via.placeholder.com/50"}
                  alt="John Doe"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="text-gray-700">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam commodo urna eget elit dapibus, vel dapibus sem
                    consectetur. Praesent euismod ligula ut velit accumsan, vel
                    scelerisque enim feugiat."
                  </p>
                  <p className="text-gray-900 font-semibold mt-1">John Doe</p>
                  <p className="text-gray-600">CEO, Company Name</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white shadow-md rounded-lg">
              <div className="flex items-center mb-4">
                <img
                  src={"https://via.placeholder.com/50"}
                  alt="John Doe"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="text-gray-700">
                    "Integer volutpat nisl id nunc iaculis, nec ullamcorper
                    risus scelerisque. Maecenas nec sem in lectus posuere
                    euismod non ac justo."
                  </p>
                  <p className="text-gray-900 font-semibold mt-1">Jane Smith</p>
                  <p className="text-gray-600">Designer, Company Name</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white shadow-md rounded-lg">
              <div className="flex items-center mb-4">
                <img
                  src={"https://via.placeholder.com/50"}
                  alt="John Doe"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="text-gray-700">
                    "Fusce euismod neque id velit dictum tempor. Integer euismod
                    velit vel nisi fermentum, vitae pharetra mi laoreet."
                  </p>
                  <p className="text-gray-900 font-semibold mt-1">
                    David Johnson
                  </p>
                  <p className="text-gray-600">
                    Marketing Manager, Company Name
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonials;
