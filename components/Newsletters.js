import React from "react";

const Newsletters = () => {
  return (
    <div className="bg-purple-500 text-white text-center py-8 px-3 max-w-3xl mx-auto mb-10 shadow-sm">
      <div className="mb-6">
        <h1 className="text-3xl">Sign Up Our Newsletters</h1>
      </div>
      <div className="mb-8">
        <p className="text-xs">
          Sign up to receive top stories you need to know now on politics,
          health,money and more
        </p>
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter Your Email"
          className="bg-purple-600 text-white text-xs"
          style={{
            padding: "12px 20px",
            boxSizing: "border-box",
            border: "none",
            outline: "none",
            resize: "vertical",
          }}
        />
      </div>
    </div>
  );
};

export default Newsletters;
