import React from "react";
import Card from "../components/Card";
import BlogDetail from "../components/layout/BlogDetail";
import BloggerInfo from "../components/layout/BloggerInfo";
import BlogJumbotron from "../components/layout/BlogJumbotron";
import Navbar1 from "../components/layout/Navbar1";
import Navbar2 from "../components/layout/Navbar2";
import Section3 from "../components/layout/Section3";
import Newsletters2 from "../components/Newsletters2";
import Comment from "../components/layout/Comment";
import Comments from "../components/layout/Comments";
import LeaveReply from "../components/LeaveReply";
import Footer from "../components/Footer";
import Jumbotron from "../components/layout/Jumbotron";

const SingleBlogPage = () => {
  return (
    <div>
      <Navbar1 />
      <Navbar2 />
      <Jumbotron />
      <div className="grid grid-col-3 lg:grid-cols-4 px-5 gap-5 ">
        <div className="col-span-3">
          <div>
            <img src={"/img/img2.jpg"} />
          </div>
          <div className="py-10">
            <BloggerInfo />
          </div>
          <div>
            <BlogDetail />
          </div>
          <div className="text-white bg-purple-500 py-3 px-5 w-60">
            RELATED NEWS
          </div>
          <div className="flex flex-col md:flex-row ">
            {[0, 1].map((e, idx) => (
              <Card key={idx} />
            ))}
          </div>
          <div>
            <Comment />
          </div>
          <div>
            <Comments />
          </div>
          <div>
            <LeaveReply />
          </div>
        </div>
        <div className="col-span-3 lg:col-span-1 ">
          <div className="px-10 py-36 bg-gray-500 text-center text-white mb-3 ">
            Place An Advert
          </div>
          <div>
            <Section3 />
            <Newsletters2 />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SingleBlogPage;
