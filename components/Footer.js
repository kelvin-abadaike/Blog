import React from "react";
import AboutUs from "./layout/AboutUs";
import LatestPosts from "./layout/LatestPosts";
import QuickLinks from "./layout/QuickLinks";
import RecentComments from "./layout/RecentComments";

const Footer = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 bg-purple-500 p-10">
      <div>
        <AboutUs />
      </div>
      <div>
        <LatestPosts />
      </div>
      <div>
          <RecentComments />
      </div>
      <div>
          <QuickLinks />
      </div>
    </div>
  );
};

export default Footer;