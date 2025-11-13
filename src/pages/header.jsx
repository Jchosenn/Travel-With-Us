import { useEffect, useState } from "react";
import { Navbar } from "../components/navbar";
import { motion } from "framer-motion";
import "../css/header.css";

const useTypewriter = (text, speed = 90) => {
  const [output, setOutput] = useState("");

  useEffect(() => {
    if (window.innerWidth < 768) {
      setOutput(text);
      return;
    }

    let index = 0;
    const interval = setInterval(() => {
      setOutput(text.slice(0, index));
      index++;
      if (index > text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return output;
};

export const Header = () => {
  const fullText = "Travel around the world";
  const firstWord = "Travel";
  const restOfText = "around the world";

  const typedRest = useTypewriter(restOfText);

  return (
    <div className="hero-section relative text-white">
      <Navbar />

      <div className="absolute inset-0"></div>

      <section className="relative flex flex-col items-center justify-center text-center px-6 py-24 md:py-36 lg:py-38 z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight font-urbanist">
            <span className="text-[#25A59E]">{firstWord} </span>

            {window.innerWidth >= 768 ? typedRest : restOfText}
          </h1>

          <p className="mt-4 text-lg font-notch md:text-xl text-gray-200 max-w-2xl">
            Discover the beauty of nature safely and easily with Travel.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, delay: 0.3 }}
            className="bg-[#25A59E] text-white mt-10 rounded-2xl px-8 py-6 
            md:flex md:items-center md:justify-between md:gap-8 max-w-5xl w-full"
          >
            <p
              className="md:w-1/3 border-b md:border-b-0 md:border-r border-white/40 
              pb-4 md:pb-0 md:pr-6 text-sm md:text-base font-urbanist"
            >
              Travel around the world to see the beauty of nature easily and
              safely with Travel.
            </p>

            <p
              className="md:w-1/3 text-base md:text-lg font-semibold text-center 
              py-4 md:py-0 border-t md:border-t-0 md:border-x border-white/40"
            >
              We Are The Best Travel Agent
            </p>

            <p
              className="md:w-1/3 border-t md:border-t-0 md:border-l border-white/40 
              pt-4 md:pt-0 md:pl-6 text-sm md:text-base font-urbanist"
            >
              Everyone is young once, but not everyone has traveled the world!
            </p>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}
