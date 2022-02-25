import React from "react";

const MostReadable = () => {
  return (
    <div className="bg-purple-700 max-w-4xl mx-auto text-white p-6 pb mt-6 shadow-lg">
      <div className="border-solid border-b border-white shadow-sm pb-4 font-semibold font-mono">
        Most Readable
      </div>
      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 pt-6 text-gray-100 ">
        {[0, 1, 2, 3, 4, 5].map((e, idx) => (
          <div key={idx} className="border-solid border-b border-gray-400 pb-5">
            <h5 className="text-xs pb-3">05 jan 2022</h5>
            <div className="text-sm">
              Here the Perfect Things To Say When Someone Is Rude
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostReadable;