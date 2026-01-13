import { useLocation, Link } from "react-router-dom"

export const Success = () => {
  const { state } = useLocation()
  const { destination, total, guests } = state || {}

  if (!state) {
    return (
      <div className="dark:bg-[#0A0F14] dark:text-white min-h-screen flex items-center justify-center">
        <p>Invalid access. Go back to <Link to="/">Home</Link></p>
      </div>
    )
  }

  return (
    <div className="dark:bg-[#0A0F14] dark:text-white min-h-screen flex flex-col items-center justify-center space-y-6 font-urbanist px-6">
      <h1 className="text-5xl font-bold text-[#25A59E]">Payment Successful!</h1>
      <p className="text-xl">
        You have booked <strong>{destination.name}</strong> for <strong>{guests}</strong> guest(s).
      </p>
      <p className="text-lg">Total Paid: <strong>₦{total}</strong></p>
      <Link to="/" className="bg-[#25A59E] text-white py-3 px-6 rounded-lg hover:bg-[#1e8e81] transition">
        Go Back Home
      </Link>
    </div>
  )
}
