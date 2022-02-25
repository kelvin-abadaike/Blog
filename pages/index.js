import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar1 from "../components/layout/Navbar1";
import Navbar2 from "../components/layout/Navbar2";
import Header from "../components/Header";
import Card from "../components/Card";
import MostReadable from "../components/MostReadable";
import Section from "../components/layout/Section";
import Newsletters from "../components/Newsletters";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar1 />
      <Navbar2 />
      <Header />
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-5">
          <div>
            <div className="bg-gradient-to-r py-3 font-semibold from-purple-300 to-purple-800 flex justify-center items-center">
              <h4 className="text-white uppercase">LATEST NEWS</h4>
            </div>
            {[0, 1].map((e) => (
              <Card />
            ))}
          </div>
          <div>
            <div className="bg-gradient-to-r py-3 font-semibold from-purple-300 to-purple-800 flex justify-center items-center">
              <h4 className="text-white uppercase">Most read NEWS</h4>
            </div>
            {[0, 1].map((e) => (
              <Card />
            ))}
          </div>
          <div>
            <div className="bg-gradient-to-r py-3 font-semibold from-purple-300 to-purple-800 flex justify-center items-center">
              <h4 className="text-white uppercase">trendy NEWS</h4>
            </div>
            {[0, 1].map((e) => (
              <Card />
            ))}
          </div>
        </div>
      </div>
      <MostReadable />
      <Section />
      {/* <Newsletters /> */}
      <Footer />
    </div>
  );
}
