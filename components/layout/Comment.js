import React from "react";

const Comment = () => {
  return (
    <div className="md:grid md:grid-cols-5 p-16 bg-gray-200 my-8">
      <div className="col-span-1 place-self-center">
        <img
          src={"/img/img3.jpg"}
          className="h-28 w-28 object-cover rounded-full"
        />
      </div>
      <div className="col-span-4 place-items-start">
        <div>
          <div className="mb-3">
            <h3 className="text-lg text-gray-800 ">Wilson Charles</h3>
          </div>
          <div className="mb-3"> 
            <p className="text-gray-500">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi.vi mine od midsdfim veniam, qsgjgis nsdostrud exebrbcbitation
              ullamsscfo labgnczoris nisi.How To Watch The Supper Snow Moon
              Biggest.
            </p>
          </div>
          <div className="flex">
            <div className="h-8 w-8 rounded-full bg-gray-500 mr-2 "></div>
            <div className="h-8 w-8 rounded-full bg-gray-500 mr-2 "></div>
            <div className="h-8 w-8 rounded-full bg-gray-500 "></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
