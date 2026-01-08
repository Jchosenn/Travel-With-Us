import { useParams } from "react-router-dom"
import { destinations } from "../data/destinations"
import { useState } from "react"

export const BookDestination = () => {
  const { slug } = useParams()
  const destination = destinations.find(d => d.slug === slug)

  const [guests, setGuests] = useState(1)

  const total = destination.price * guests

  return (
    <div className="dark:bg-[#0A0F14] dark:text-white min-h-screen px-6 md:px-12 py-16 font-urbanist">
      <h1 className="text-4xl font-bold mb-8">
        Book {destination.name}
      </h1>

      <div className="max-w-lg bg-white dark:bg-[#161616] p-6 rounded-2xl shadow-xl space-y-4">
        <input className="w-full border p-3 rounded-lg" placeholder="Full Name" />
        <input className="w-full border p-3 rounded-lg" placeholder="Email" />
        <input type="date" className="w-full border p-3 rounded-lg" />

        <select
          className="w-full border p-3 rounded-lg"
          value={guests}
          onChange={(e) => setGuests(Number(e.target.value))}
        >
          {[1,2,3,4,5].map(n => (
            <option key={n}>{n}</option>
          ))}
        </select>

        <p className="text-xl font-semibold">
          Total: <span className="text-[#25A59E]">${total}</span>
        </p>

        <button className="w-full bg-[#25A59E] text-white py-4 rounded-xl text-lg">
          Proceed to Payment (Demo)
        </button>
      </div>
    </div>
  )
}
