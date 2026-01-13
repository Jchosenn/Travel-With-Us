import { useParams, useNavigate } from "react-router-dom"
import { destinations } from "../data/destinations"
import { useState, useEffect } from "react"
import {toast} from "react-toastify"


export const BookDestination = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const destination = destinations.find((d) => d.slug === slug)

  const [guests, setGuests] = useState(1)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [date, setDate] = useState("")
  const [paystackLoaded, setPaystackLoaded] = useState(false)

  const total = destination.price * guests

  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://js.paystack.co/v1/inline.js"
    script.async = true
    script.onload = () => setPaystackLoaded(true)
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  const handlePayment = () => {
    if (!paystackLoaded) {
      toast.error("Payment gateway not loaded yet. Please try again in a moment.")
      return
    }

    if (!name || !email || !date) {
      toast.error("Please fill in all details")
      return
    }

    const handler = window.PaystackPop.setup({
      key: "pk_test_c0acef4dacb3c6dd2201ae7b5842a379cfb1429b",
      email,
      amount: total * 100,
      currency: "NGN",
      ref: `TRAVEL-${Math.floor(Math.random() * 1000000000)}`,
      metadata: {
        custom_fields: [
          { display_name: "Full Name", variable_name: "full_name", value: name },
          { display_name: "Destination", variable_name: "destination", value: destination.name },
        ],
      },
      callback: function (response) {
        toast.success(`Payment Successful! Reference: ${response.reference}`)
        navigate("/success", { state: { destination, total, guests } })
      },
      onClose: function () {
        toast.error("Payment cancelled.")
      },
    })

    handler.openIframe()
  }

  return (
    <div className="dark:bg-[#0A0F14] dark:text-white min-h-screen px-6 md:px-12 py-16 font-urbanist">
      <h1 className="text-4xl font-bold mb-8">Book {destination.name}</h1>

      <div className="max-w-lg bg-white dark:bg-[#161616] p-6 rounded-2xl shadow-xl space-y-4">
        <input
          className="w-full border p-3 rounded-lg"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="w-full border p-3 rounded-lg"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="date"
          className="w-full border p-3 rounded-lg"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <select
          className="w-full border p-3 rounded-lg bg-black/20"
          value={guests}
          onChange={(e) => setGuests(Number(e.target.value))}
        >
          {[1, 2, 3, 4, 5].map((n) => (
            <option key={n}>{n}</option>
          ))}
        </select>

        <p className="text-xl font-semibold">
          Total: <span className="text-[#25A59E]">₦{total}</span>
        </p>

        <button
          onClick={handlePayment}
          className="w-full bg-[#25A59E] text-white py-4 rounded-xl text-lg"
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  )
}
