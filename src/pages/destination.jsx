import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";

import mirrorLake from "../assets/Images/Mirror-Lake.png";
import hotAir from "../assets/Images/hot-air.png";
import oeschinen from "../assets/Images/oeschinen.png";
import rhinefalls from "../assets/Images/rhine-falls.png";
import sunter from "../assets/Images/sunter.png";
import negeri from "../assets/Images/negeri.png";

export const Destination = () => {
  const destinations = [
    {
      name: "Mirror Lake",
      location: "Jawa Tengah, Indonesia",
      image: mirrorLake,
    },
    {
      name: "Hot Air Balloon",
      location: "Cappadocia, Turkey",
      image: hotAir,
    },
    {
      name: "Oeschinen Lake",
      location: "Pasuruan, Indonesia",
      image: oeschinen,
    },
    {
      name: "Rhine Falls",
      location: "Zurich, Switzerland",
      image: rhinefalls,
    },
    {
      name: "Sunter Lake",
      location: "Jawa Tengah, Indonesia",
      image: sunter,
    },
    {
      name: "Negeri di atas Awan",
      location: "Jawa Tengah, Indonesia",
      image: negeri,
    },
  ];

  // handle mobile pagination (dots)
  const [current, setCurrent] = useState(0);

  return (
    <div className="py-10 px-6 md:px-8 lg:px-15 space-y-6">
        <div className="space-y-5 pb-5 md:flex justify-between">
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold font-urbanist">
        Find your best destination
      </h1>

      {/* Search bar */}
      <div className="space-y-6">
      <p className="font-urbanist text-gray-600 dark:text-gray-300">
        We have more than 1000+ destinations you can choose.
      </p>
      <div className="flex items-center justify-between py-3 px-3 rounded-3xl border font-urbanist dark:bg-[#161616]">
        <CiLocationOn className="text-2xl" />
        <input
          type="text"
          placeholder="Search destinations.."
          className="flex-1 mx-3 outline-none text-lg bg-transparent"
          />
        <div className="bg-orange-500 p-3 rounded-full cursor-pointer hover:bg-orange-600 transition">
          <FaSearch className="text-xl" />
        </div>
      </div>
          </div>
          </div>

      {/* Grid for Desktop / Carousel for Mobile */}
      <div className="relative">
        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-3 gap-x-10 gap-y-11">
          {destinations.map((place, index) => (
            <div
              key={index}
              className="group rounded-xs overflow-hidden shadow-lg dark:bg-white dark:text-black transition"
            >
              <img
                src={place.image}
                alt={place.name}
                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="p-4 space-y-2">
                <p className="font-urbanist font-bold text-2xl">
                  {place.name}
                </p>
                <div className="flex items-center gap-2 text-gray-600">
                  <FaLocationDot className="text-xl fill-[#25A59E]" />
                  <p className="text-lg font-medium font-urbanist">{place.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile view (single card + dots) */}
        <div className="md:hidden">
          <div className="rounded-xl overflow-hidden shadow-lg dark:bg-white dark:text-black">
            <img
              src={destinations[current].image}
              alt={destinations[current].name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4 space-y-2">
              <p className="font-urbanist font-bold text-2xl">
                {destinations[current].name}
              </p>
              <div className="flex items-center gap-2 text-gray-600">
                <FaLocationDot className="text-xl fill-[#25A59E]" />
                <p className="text-lg font-medium">
                  {destinations[current].location}
                </p>
              </div>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-4 space-x-3">
            {destinations.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  current === index
                    ? "bg-[#25A59E] scale-125"
                    : "bg-gray-400 hover:bg-gray-500"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
