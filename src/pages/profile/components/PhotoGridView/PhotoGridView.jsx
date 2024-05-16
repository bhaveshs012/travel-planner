import React from "react";

const PhotoGridView = ({ photos }) => {
  return (
    <div className="overflow-y-scroll h-full">
      <div className="grid grid-cols-3 gap-4 p-4">
        {photos.map((photo, index) => (
          <div key={index} className="relative rounded-lg overflow-hidden">
            <img
              src={photo.url}
              alt={`Photo ${index + 1}`}
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGridView;
