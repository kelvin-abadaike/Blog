import React from "react";

const AboutUs = () => {
  return (
    <div className="text-white">
      <div className="mb-6">
        <h3 className="text-2xl ">About Us</h3>
      </div>
      <div>
        <p className="mb-4">
          dolor sit amet, consectetur adipiscing elit. Nulla malesuada magna sed
          ultricies vehicula.
        </p>
        <p className="mb-4">
          fonor kit of sit amet, consectetur adipiscing elit. Nulla kalusa sed
          ultricies vehicula.
        </p>
      </div>
      <div className="flex">
        <div className="h-10 w-10 rounded-full bg-gray-300 ml-1"></div>
        <div className="h-10 w-10 rounded-full bg-gray-300 ml-1"></div>
        <div className="h-10 w-10 rounded-full bg-gray-300 ml-1"></div>
        <div className="h-10 w-10 rounded-full bg-gray-300 ml-1"></div>
      </div>
    </div>
  );
};

export default AboutUs;