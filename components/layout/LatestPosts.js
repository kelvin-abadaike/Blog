import React from "react";

const LatestPosts = () => {
  return (
    <div className="text-white">
      <div className="mb-6">
        <h3 className="text-2xl ">Latest Posts</h3>
      </div>

      {[0, 1, 2].map((e, idx) => (
        <div key={idx} className="grid grid-cols-4 gap-3 mb-2">
          <div>
            <img className="h-full w-full object-cover" src={"/img/img6.jpg"} />
          </div>
          <div className="col-span-3 flex flex-col justify-between">
            <h4 className="text-sm font-mono text-white mb-3 font-bold">
              Robet Kraft Be Charged With Soliciting Prost
            </h4>
            <p className="text-xs text-gray-100">07 Feb 2022</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LatestPosts;
