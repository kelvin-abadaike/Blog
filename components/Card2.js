import React from "react";

export const Card2 = () => {
  return (
    <div className="grid grid-cols-4 gap-3 mb-2">
      <div>
        <img className="h-full w-full object-cover" src={"/img/img4.jpg"} />
      </div>
      <div className="col-span-3 flex flex-col justify-between">
        <h4 className="text-sm font-mono text-purple-500">Sport</h4>
        <p className="text-xs text-purple-500">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi.
        </p>
      </div>
    </div>
  );
};
