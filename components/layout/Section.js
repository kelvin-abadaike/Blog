import React from "react";
import ConnectUs from "../ConnectUs";
import WhatsNew from "../WhatsNew";

const Section = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 m-6">
      <div className="col-span-2">
        <WhatsNew />
      </div>
      <div className="shadow-md">
        <ConnectUs />
      </div>
    </div>
  );
};

export default Section;