import React from "react";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BloggerInfo = () => {
  return (
    <div className="flex justify-between">
      <div className="flex justify-center items-center">
        <div className="mr-4">
          <img
            src={"/img/img3.jpg"}
            className="h-8 w-8 object-cover rounded-full"
          />
        </div>
        <div className="mr-10 font-semibold text-,d">
          <p className="text-purple-500">Marken Loly</p>
        </div>
        <div className=" text-xs text-purple-500 mt-2">
          <p>30 Dec 2022 (05)</p>
        </div>
      </div>
      <div>
        <div className="text-purple-500 flex">
          <div className="place-item-end text-purple-500 pr-3">
            <FontAwesomeIcon icon={faShareNodes} />
          </div>
          <div>
            <a href="#">Share</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BloggerInfo;
