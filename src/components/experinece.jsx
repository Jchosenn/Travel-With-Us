import React from "react"
import { motion } from "framer-motion"
import Customers from "/imageBg/travel-customers.jpg"
import { Link } from "react-router-dom"

export const Experinece = () => {
  return (
    <div
      className="font-urbanist py-16 px-6 md:px-10 lg:px-20 
      flex flex-col md:flex-row items-center md:items-start 
      md:gap-10 lg:gap-16 space-y-10 md:space-y-0
      transition-all duration-500"
    >
      {/* Left Text Section */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="space-y-6 md:w-[50%]"
      >
        <p className="text-4xl md:text-5xl lg:text-[50px] font-semibold leading-tight">
          <span className="text-[#25A59E]">Travel</span>, make the trip memorable
        </p>

        <p className="text-[17px] leading-relaxed">
          Thousands of our customers always recommend us because of the service
          we provide. Your trip will be very memorable with the best travel
          agent, <span className="text-[#25A59E] font-semibold">Travel!</span>
        </p>

        {/* Buttons */}
        <div className="flex gap-6 items-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="hidden md:block bg-[#25A59E] text-white py-2 px-6 rounded-md shadow-lg 
              hover:shadow-2xl transition-all"
          >
            See More
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="hidden md:block border-b border-[#25A59E] text-[#25A59E] dark:text-white font-medium cursor-pointer pb-1"
          >
            <Link
            to="/discovery">
            
            Discover More
            </Link>
          </motion.button>
        </div>
      </motion.div>

      {/* Right Image Section */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.9, ease: "easeOut" }}
        className="md:w-[50%] cursor-pointer"
      >
        <motion.img
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
          src={Customers}
          alt="Satisfied Customers"
          className="rounded-xl lg:rounded-2xl w-full shadow-xl"
        />
      </motion.div>
    </div>
  )
}
