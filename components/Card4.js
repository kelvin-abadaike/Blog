import React from "react";
import Link from "next/link";

const Card4 = () => {
  return (
    <div className="grid grid-cols-10  ">
      <div className="col-span-2 md:col-span-1 place-self-center">
        <img
          src={"/img/img3.jpg"}
          className="h-16 w-16 object-cover rounded-full"
        />
      </div>
      <div className="md:col-span-9 col-span-8 place-items-start">
        <div>
          <div className="mb-3 flex">
            <div>
              <h3 className="text-lg pr-5 text-purple-500 ">Joshua Anegbe . </h3>
            </div>
            <div className="flex justify-center items-center text-gray-500">
              <p>05 Feb 2022</p>
            </div>
          </div>
          <div className="mb-3">
            <p className="text-gray-500">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi.vi mine od midsdfim veniam, qsgjgis nsdostrud exebrbcbitation
              ullamsscfo labgnczoris
            </p>
          </div>
          <div>
              <Link href='#'>
                  <a className="text-purple-500">Reply</a>
              </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card4;
