import React from "react";

const Newsletters2 = () => {
  return (
    <div className="bg-gray-200 p-10 flex flex-col md:60 mb-5 md:text-center lg: text-left">
      <div className="mb-3">
        <h1 className="text-gray-700 text-2xl">Subscribe To Our Newsletters</h1>
      </div>
      <div className="mb-5">
        <p className="text-gray-500 text-lg lg:text-md">
          Subscribe to our email newsletter to receive articles
        </p>
      </div>
      <div className="mb-3">
        <input
          type="text"
          placeholder="Enter Your Email"
          className="bg-white text-purple-500 text-lg lg:text-md w-full md:w-80 lg:w-full "
          style={{
            padding: "12px 8px",
            boxSizing: "border-box",
            border: "none",
            outline: "none",
            resize: "vertical",
          }}
        />
      </div>
      <div>
        <button className="bg-purple-500 py-2 px-10 text-white text-sm font-semibold">
          SUBSCRIBE
        </button>
      </div>
    </div>
  );
};
export default Newsletters2;