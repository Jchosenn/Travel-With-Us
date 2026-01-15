import { destinations } from "../data/destinations"
import { Link } from "react-router-dom"
import { useState } from "react"
import { FaLocationDot } from "react-icons/fa6"

export const Discovery = () => {
  const [search, setSearch] = useState("")
  const [maxPrice, setMaxPrice] = useState(10000000)

  const filteredDestinations = destinations.filter((d) => {
    return (
      d.name.toLowerCase().includes(search.toLowerCase()) &&
      d.price <= maxPrice
    )
  })

  return (
    <div className="dark:bg-[#0A0F14] dark:text-white min-h-screen px-6 md:px-12 py-16 font-urbanist space-y-12">
      
      {/* Page Intro */}
      <div className="max-w-3xl space-y-4">
        <h1 className="text-4xl md:text-5xl font-semibold">
          Discover Your Next Trip
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          Browse through carefully curated travel experiences and choose what fits your mood, budget, and timeline.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-6 md:items-center bg-white dark:bg-[#161616] p-6 rounded-2xl shadow">
        <input
          type="text"
          placeholder="Search destination..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 border p-3 rounded-lg bg-transparent"
        />

        <div className="flex items-center gap-3">
          <span className="text-sm">Max Price:</span>
          <input
            type="range"
            min="600000"
            max="10000000"
            step="50"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
          <span className="font-semibold text-[#25A59E]">₦{maxPrice}</span>
        </div>
      </div>

      {/* Destinations Grid */}
      <div className="grid md:grid-cols-3 gap-10">
        {filteredDestinations.map((place) => (
          <div
            key={place.id}
            className="rounded-xl overflow-hidden shadow-lg bg-white dark:bg-[#161616] hover:shadow-2xl transition"
          >
            <img
              src={place.image}
              alt={place.name}
              className="h-56 w-full object-cover"
            />

            <div className="p-5 space-y-3">
              <h3 className="text-2xl font-semibold">{place.name}</h3>

              <div className="flex items-center gap-2 text-gray-500">
                <FaLocationDot className="text-[#25A59E]" />
                <span>{place.location}</span>
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-300">
                {place.description}
              </p>

              <div className="flex items-center justify-between pt-4">
                <span className="text-lg font-bold text-[#25A59E]">
                  ₦{place.price}
                </span>

                <Link
                  to={`/destination/${place.slug}`}
                  className="bg-[#25A59E] text-white px-4 py-2 rounded-lg text-sm"
                >
                  View Trip
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredDestinations.length === 0 && (
        <p className="text-center text-gray-500 text-lg">
          No trips match your search.
        </p>
      )}
    </div>
  )
}
