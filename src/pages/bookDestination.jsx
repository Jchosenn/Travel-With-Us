import { useParams } from "react-router-dom"
import { destinations } from "../data/destinations"
import { useState } from "react"

export const BookDestination = () => {
  const { slug } = useParams()
  const destination = destinations.find((d) => d.slug === slug)

  const [guests, setGuests] = useState(1)

  const total = destination.price * guests

  return (
    <div className="dark:bg-[#0A0F14] dark:text-white min-h-screen px-6 md:px-12 py-16 font-urbanist">
      <h1 className="text-4xl font-bold mb-12 text-center md:text-left">
        Book Your Trip to {destination.name}
      </h1>

      <div className="flex flex-col md:flex-row gap-12 max-w-6xl mx-auto">
        <div className="flex-1 bg-white dark:bg-[#161616] p-8 rounded-2xl shadow-xl space-y-6">
          <h2 className="text-2xl font-semibold mb-4">Traveler Information</h2>

          <input
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-[#25A59E] transition"
            placeholder="Full Name"
          />
          <input
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-[#25A59E] transition"
            placeholder="Email"
          />
          <input
            type="tel"
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-[#25A59E] transition"
            placeholder="Phone Number"
          />

          <h2 className="text-2xl font-semibold mt-6 mb-4">Trip Details</h2>
          <input
            type="date"
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-[#25A59E] transition"
          />
          <label>
            Number of Guests
          </label>
          <select
            className="w-full border p-3 rounded-lg bg-black/10 dark:bg-[#222] focus:ring-2 focus:ring-[#25A59E] transition"
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
          >
            {[1, 2, 3, 4, 5].map((n) => (
              <option key={n}>{n}</option>
            ))}
          </select>

          <p className="text-xl font-semibold mt-4">
            Total: <span className="text-[#25A59E]">${total}</span>
          </p>

          <button className="w-full mt-4 bg-[#25A59E] text-white py-4 rounded-xl text-lg hover:shadow-lg transition">
            Proceed to Payment
          </button>
        </div>

        <div className="flex-1 bg-[#F3F3F3] dark:bg-[#111] p-8 rounded-2xl shadow-lg space-y-6">
          <h2 className="text-2xl font-semibold">Trip Summary</h2>

          <img
            src={destination.image}
            alt={destination.name}
            className="rounded-xl w-full h-64 object-cover shadow-md"
          />

          <div className="space-y-2">
            <p className="text-xl font-bold">{destination.name}</p>
            <p className="text-gray-600 dark:text-gray-300">{destination.location}</p>
            <p className="text-gray-700 dark:text-gray-400">{destination.duration}</p>
          </div>

          <div className="mt-4">
            <h3 className="font-semibold mb-2">Highlights</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-400">
              {destination.highlights.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
