import React from "react";
import Link from "next/link";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = () => {
  return (
    <div>
      <div className="shadow-sm bg-white flex-wrap">
        <div className="p-6">
          <Link href="/SingleBlogPage">
            <a>
              <img src={"/img/img2.jpg"} />
            </a>
          </Link>
        </div>
        <div className=" pl-6">
          <div className="text-gray-500 pb-3">
            <span className="font-mono">05 Feb 2021</span>.Comments
            <span className="font-mono">(05)</span>
          </div>
          <div>
            <p className="text-gray-600">
              <Link href="/SingleBlogPage">
                <a>
                  New tools tell you if your password have been hacked. Twitter
                  CEO gives the site a C for combatting Abuses Online
                </a>
              </Link>
            </p>
          </div>
        </div>
        <div className="p-6 flex justify-between">
          <div className="flex justify-between">
            <div>
              <img
                src={"/img/img3.jpg"}
                className="h-8 w-8 object-cover rounded-full"
              />
            </div>
            <div>
              <p className="text-gray-600">Marken Loly</p>
            </div>
          </div>
          <div className="text-gray-600 flex">
            <div className="place-item-end text-purple-500 pr-3">
              <FontAwesomeIcon icon={faShareNodes} />
            </div>
            <div>
              <a href="#">Share</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
