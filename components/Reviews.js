import React from "react";

export const Reviews = () => {
  return (
    <div className="shadow-md">
      <div className="h-11 bg-gradient-to-r from-purple-300 to-purple-800 text-white flex justify-center items-center">
        CLIENT'S REVIEWS
      </div>
      <div className="p-5">
        <div className="py-6">
          <img
            src={"/img/img3.jpg"}
            className="h-32 w-32 mx-auto rounded-full object-cover"
          />
        </div>
        <div className="pb-5">
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            malesuada magna sed ultricies vehicula. Ut commodo dui vel eros
            scelerisque facilisis. Phasellus non blandit magna. Suspendisse sit
            amet arcu nec libero sagittis tempus
          </p>
        </div>
        <div className="text-center">
          <p className="font-bold">King Kelvin</p>
        </div>
      </div>
    </div>
  );
};
