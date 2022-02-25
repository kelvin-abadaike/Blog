import React from "react";

const MostVIsited = () => {
  return (
    <div className="mb-5">
      <div className="h-11 bg-gradient-to-r from-purple-300 to-purple-800 font-semibold text-white mb-5 flex justify-center items-center">
        Most Visited
      </div>

      <div className="mb-3">
        <img src={"/img/img3.jpg"} />
      </div>
      <div>
          <p className="pb-3  text-purple-500 text-xs">03 Jan 2022, comments (03)</p>
          <p className="text-sm text-gray-700">Megan back founding figure being named rugby league immortal</p>
      </div>
    </div>
  );
};

export default MostVIsited;