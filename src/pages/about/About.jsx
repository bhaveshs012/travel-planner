import React from "react";
import { DeveloperCard } from "./components";

function About() {
  return (
    <div className="container mx-auto p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-center ">Our Website</h2>

        <p className="text-gray-700 mb-2 text-justify">
          Our travel planning platform is designed to simplify the process of
          organizing and sharing your travel adventures. Whether you're
          embarking on a solo journey, planning a family vacation, or
          coordinating a group trip with friends, our website provides the tools
          and resources you need to create unforgettable experiences.
        </p>
        <p className="text-gray-700 mb-2 text-justify">
          With our intuitive interface, you can easily create detailed
          itineraries, including destinations, activities, accommodations, and
          more. Collaborate with friends and family members in real-time to
          fine-tune your plans and ensure everyone's preferences are accounted
          for.
        </p>
        <p className="text-gray-700 mb-2 text-justify">
          Our platform also features a photo-sharing feature, allowing users to
          document their travel memories and share them with the community. From
          stunning landscapes to memorable moments, our photo albums capture the
          essence of your adventures and inspire others to explore new
          destinations.
        </p>
        <p className="text-gray-700 mb-2 text-justify">
          Whether you're a seasoned traveler or embarking on your first journey,
          our website is your go-to destination for seamless trip planning and
          unforgettable travel experiences. Join our community today and start
          turning your travel dreams into reality!
        </p>
      </div>
      <h2 className="text-2xl font-bold mb-4 text-center ">Our Team</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <DeveloperCard name="Bhavesh Sengunthar" role="Full Stack Developer" />
        <DeveloperCard name="Vishesh Karan" role="Full Stack Developer" />
        <DeveloperCard name="Rohit Mourya" role="Cloud Architect" />
      </div>
    </div>
  );
}

export default About;
