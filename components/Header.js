import React from "react";
import { Ads } from "./layout/Ads";

const Header = () => {
  return (
    <div className="relative">
      <div>
        <div className=" overflow-hidden relative" style={{ height: "75vh" }}>
          <img className="object-cover h-full w-full" src={"/img/img1.jpg"} />
          <div className="opacity-30 bg-purple-600 absolute top-0 bottom-0 w-full"></div>
        </div>
      </div>
      <div className="mx-3">
      <div className="bg-purple-700 max-w-4xl w-full z-20 py-5 px-5 -translate-y-8 mx-auto text-center">
        <h1 className="text-2xl md:text-3xl text-white font-semibold font-mono">
          Place Your Ads
        </h1>
      </div>
      </div>
    </div>
  );
};

export default Header;