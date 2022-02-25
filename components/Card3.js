import React from "react";

const Card3 = () => {
  return (
    <div>
      {[0, 1, 2, 3, 4].map((e, idx) => (
        <div key={idx} className="grid grid-cols-4 gap-3 mb-2">
        <div>
          <img className="h-full w-full object-cover" src={"/img/img4.jpg"} />
        </div>
        <div className="col-span-3 flex flex-col justify-between">
          <h4 className="lg:text-lg text-2xl font-mono text-purple-500">Sport</h4>
          <p className=" text-xs lg:text-xs text-purple-500 md:text-lg">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi.
          </p>
          <div className="flex justify-between text-md text-purple-500 mt-2">
            <p>30 Dec 2021</p>
            <p>(05)</p>
          </div>
        </div>
      </div>
      ))}
    </div>
  );
};
export default Card3;

