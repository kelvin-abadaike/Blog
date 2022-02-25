import React from "react";
import { Card2 } from "./Card2";

const WhatsNew = () => {
  return (
    <div className="bg-white shadow-md">
      <div className="h-11 bg-gradient-to-r from-purple-300 to-purple-800 flex justify-center items-center">
        <h4 className="text-white">WHAT'S NEW</h4>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <div className="p-6">
            <img className="w-full object-cover" src={"/img/img4.jpg"} />
          </div>
          <div className=" px-6">
            <h5 className="text-gray-500 text-xs pb-3">Sports</h5>
            <p className="text-sm text-gray-700 pb-3">
              Chicago Police Release Police in Empire Actor Kelvin Brown Atttack
            </p>
            <p className="text-xs text-purple-500 pb-3 ">
              lorem isamp donor i aesfw jonhar pomm gradresonl yesdres
            </p>
          </div>
        </div>
        <div className="p-5">
          {[0, 1, 2].map((e) => (
            <Card2 />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatsNew;