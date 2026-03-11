import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div
      className=" min-h-screen mb-4 bg-center bg-cover items-center w-full overflow-hidden"
      style={{ backgroundImage: "url('/header_img.png')" }}
      id="Header"
    >
      <Navbar />
      <div className="container text-center mx-auto py-60 px-6 md:px-20 lg:px-32 text-white">
        <h2
          className="
            text-6xl
            sm:text-7xl
            md:text-8xl
            lg:text-[96px]
            xl:text-[110px]
            inline-block
            max-w-4xl
            font-semibold
            pt-20
            leading-tight"
        >
          Explore home that fit your dreams
        </h2>
        <div className="space-x-6 mt-16">
          <a
            href="#Projects"
            className="border border-white bg-blue-700 text-white px-8 py-3 rounded"
          >
            Projects
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
