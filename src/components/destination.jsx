import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { FaSearch } from "react-icons/fa"
import { CiLocationOn } from "react-icons/ci"
import { FaLocationDot } from "react-icons/fa6"
import { Link } from "react-router-dom"
import { destinations } from "../data/destinations"

export const Destination = () => {
  const allDestinations = destinations

  const [search, setSearch] = useState("")
  const [filteredDestinations, setFilteredDestinations] =
    useState(allDestinations)
  const [current, setCurrent] = useState(0)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  useEffect(() => {
    const results = allDestinations.filter((place) =>
      place.name.toLowerCase().includes(search.toLowerCase())
    )
    setFilteredDestinations(results)
    setCurrent(0)
  }, [search])

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        setCurrent((prev) =>
          prev === filteredDestinations.length - 1 ? 0 : prev + 1
        )
      } else {
        setCurrent((prev) =>
          prev === 0 ? filteredDestinations.length - 1 : prev - 1
        )
      }
    }
  }

  return (
    <div className="py-10 px-6 md:px-8 lg:px-15 space-y-6" id="destination">
      {/* Header + Search */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="space-y-5 pb-5 md:flex justify-between items-center"
      >
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold font-urbanist">
          Find your best destination
        </h1>

        <div className="space-y-6 md:w-[40%]">
          <p className="font-urbanist text-gray-600 dark:text-gray-300">
            We have more than 1000+ destinations you can choose.
          </p>

          <div className="flex items-center justify-between py-3 px-3 rounded-3xl border font-urbanist dark:bg-[#161616] bg-white dark:border-gray-800">
            <CiLocationOn className="text-2xl animate-bounce" />
            <input
              type="text"
              placeholder="Search destinations.."
              className="flex-1 mx-3 outline-none text-lg bg-transparent"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <div className="bg-orange-500 p-3 rounded-full cursor-pointer hover:bg-orange-600 transition">
              <FaSearch className="text-xl text-white" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Grid Desktop */}
      <div className="relative">
        <div className="hidden md:grid grid-cols-3 gap-x-10 gap-y-11">
          {filteredDestinations.length > 0 ? (
            filteredDestinations.map((place, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
                className="group rounded-xl overflow-hidden shadow-lg dark:bg-white dark:text-black 
        hover:shadow-xl transition-transform card-tilt cursor-pointer"
              >
                <Link to={`/destination/${place.slug}`}>
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
                      <p className="text-lg font-medium font-urbanist">
                        {place.location}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))
          ) : (
            <p className="col-span-3 text-center text-gray-500 dark:text-gray-400 text-lg">
              No destinations found.
            </p>
          )}
        </div>

        {/* Mobile Swipe Carousel */}
        <div
          className="md:hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {filteredDestinations.length > 0 ? (
            <>
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="group rounded-xl overflow-hidden shadow-lg dark:bg-white dark:text-black"
              >
                <Link to={`/destination/${filteredDestinations[current].slug}`}>
                  <img
                    src={filteredDestinations[current].image}
                    alt={filteredDestinations[current].name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="p-4 space-y-2">
                    <p className="font-urbanist font-bold text-2xl">
                      {filteredDestinations[current].name}
                    </p>
                    <div className="flex items-center gap-2 text-gray-600">
                      <FaLocationDot className="text-xl fill-[#25A59E]" />
                      <p className="text-lg font-medium font-urbanist">
                        {filteredDestinations[current].location}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>

              <div className="flex justify-center mt-4 space-x-3">
                {filteredDestinations.map((_, index) => (
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
            </>
          ) : (
            <p className="text-center text-gray-500 dark:text-gray-400 text-lg">
              No destinations found.
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
