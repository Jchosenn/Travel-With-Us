import { useParams, Link } from "react-router-dom"
import { destinations } from "../data/destinations"
import { FaLocationDot } from "react-icons/fa6"
import { motion } from "framer-motion"

export const DestinationDetails = () => {
  const { slug } = useParams()

  const destination = destinations.find((d) => d.slug === slug)

  if (!destination) {
    return <p className="text-center mt-20">Destination not found</p>
  }

  return (
    <div className="dark:bg-[#0A0F14] dark:text-white px-6 md:px-12 lg:px-20 py-12 space-y-12 font-urbanist">
      {/* HERO */}
      <motion.img
        src={destination.image}
        alt={destination.name}
        className="w-full h-[60vh] object-cover rounded-3xl shadow-xl"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
      />

      {/* INFO */}
      <div className="max-w-4xl flex flex-col space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold">{destination.name}</h1>

        <div className="flex items-center gap-2 text-gray-600">
          <FaLocationDot className="fill-[#25A59E]" />
          <p>{destination.location}</p>
        </div>

        <p className="text-lg text-gray-700 dark:text-gray-300">
          {destination.description}
        </p>

        {/* TRUST SIGNALS */}
        <ul className="grid md:grid-cols-3 gap-4 pt-4">
          {destination.highlights.map((item, i) => (
            <li
              key={i}
              className="bg-[#EAFAF9] text-[#25A59E] px-4 py-3 rounded-xl text-center font-medium"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* BOOKING CARD */}
      <div className="bg-white dark:bg-[#161616] shadow-2xl rounded-2xl p-6 max-w-md">
        <p className="text-lg">{destination.duration}</p>
        <p className="text-3xl font-bold text-[#25A59E] mt-2">
          ₦{destination.price}
        </p>

        <Link to={`/destination/${slug}/book`}>
          <button className="w-full mt-6 bg-[#25A59E] text-white py-4 rounded-xl text-lg hover:opacity-90 transition">
            Book Now
          </button>
        </Link>
      </div>
    </div>
  )
}
