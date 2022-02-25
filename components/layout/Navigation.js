import React from "react";

const Navigation = () => {
  return (
    <div className="flex mx-10 my-14">
      <div className="h-8 w-8 bg-gray-300 rounded-full mr-5 "></div>
      <div className="h-8 w-8 bg-gray-300 rounded-full mr-5 "></div>
      <div className="h-8 w-8 bg-gray-300 rounded-full mr-5 "></div>
      <div className="h-8 w-8 bg-gray-300 rounded-full mr-5 "></div>
      <div className="h-8 w-16 bg-purple-500 rounded-3xl text-white flex justify-center items-center">
       <a href="#">Next</a>
      </div>
    </div>
  );
};

export default Navigation;