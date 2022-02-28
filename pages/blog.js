import React from "react";
import Jumbotron from "../components/layout/Jumbotron";
import Navbar1 from "../components/layout/Navbar1";
import Navbar2 from "../components/layout/Navbar2";
import Card5 from "../components/Card5";
import Section3 from "../components/layout/Section3";
import Newsletters2 from "../components/Newsletters2";
import MostVIsited from "../components/MostVIsited";
import FollowUs from "../components/FollowUs";
import Navigation from "../components/layout/Navigation";
import Footer from "../components/Footer";

const blog = () => {
  return (
    <div>
      <Navbar1 />
      <Navbar2 />
      <Jumbotron />

      <div className="grid grid-col-1 md:grid-col-3 lg:grid-cols-4 mx-5 md:mx-10 gap-5">
        <div className="col-span-3 grid grid-col-1 md:grid-cols-2">
          {[0, 1, 2, 3, 4, 5, 6, 7].map((e, idx) => (
            <Card5 key={idx} />
          ))}
        </div>
        <div className="col-span-3 lg:col-span-1 ">
            <div className="px-10 py-36 bg-gray-500 text-center text-white mb-3 ">
                Place Your Ads
            </div>
            <div>
                <Section3 />
            </div>
            <div>
                <Newsletters2 />
            </div>
            <div>
                <MostVIsited />
            </div>
            <div>
                <FollowUs />
            </div>
        </div>
      </div>
      <Navigation />
      <Footer />
    </div>
  );
};

export default blog;
