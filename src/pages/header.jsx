import React from "react";
import { Navbar } from "../components/navbar";
import "../css/header.css"; 

export const Header = () => {
  return (
    <div className="hero-section relative text-white">
      <Navbar />

      <div className="absolute inset-0"></div>

      <section className="relative flex flex-col items-center justify-center text-center px-6 py-24 md:py-36 lg:py-38 z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight font-urbanist">
          <span className="text-[#25A59E]">Travel </span>
          around the world
        </h1>

        <p className="mt-4 text-lg font-notch md:text-xl text-gray-200 max-w-2xl">
          Discover the beauty of nature safely and easily with Travel.
        </p>

        {/* Info Box */}
        <div className="bg-[#25A59E] text-white mt-10 rounded-2xl px-8 py-6 md:flex md:items-center md:justify-between md:gap-8 max-w-5xl w-full">
          <p className="md:w-1/3 border-b md:border-b-0 md:border-r border-white/40 pb-4 md:pb-0 md:pr-6 text-sm md:text-base font-urbanist">
            Travel around the world to see the beauty of nature easily and safely with Travel.
          </p>

          <p className="md:w-1/3 text-base md:text-lg font-semibold text-center py-4 md:py-0 border-t md:border-t-0 md:border-x border-white/40">
            We Are The Best Travel Agent
          </p>

          <p className="md:w-1/3 border-t md:border-t-0 md:border-l border-white/40 pt-4 md:pt-0 md:pl-6 text-sm md:text-base font-urbanist">
            Everyone is young once, but not everyone has traveled the world!
          </p>
        </div>
      </section>
    </div>
  );
};
