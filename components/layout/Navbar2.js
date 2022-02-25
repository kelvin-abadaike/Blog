import React from "react";
import Link from "next/link";

const Navbar2 = () => {
  return (
    <nav className="max-w-2xl py-5 mx-auto">
      <ul className="flex justify-center font-serif font-semibold">
        <li className="px-3">
          <Link href="/">
          <a className="text-purple-500">
            Home
          </a></Link>
        </li>
        <li className="px-3">
          <Link href="/blog">
          <a>Blogs</a>
          </Link>
        </li>
        <li className="px-3">
          <Link href="#">
          <a>Search</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar2;
