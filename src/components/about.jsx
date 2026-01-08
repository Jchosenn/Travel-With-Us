import { FaArrowRight } from "react-icons/fa"
import { motion } from "framer-motion"

export const About = () => {
  const cardVariant = {
    hidden: { opacity: 0, y: 60 },
    show: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.25,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  }

  return (
    <div className="pt-16 pb-14 px-4 font-urbanist md:px-12 lg:px-24 
        transition-all duration-500">

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-5xl lg:text-6xl font-semibold text-center"
      >
        Why Choose Us
      </motion.h2>

      {/* Sub text */}
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-center mx-auto text-[17px] font-medium py-6 
        md:w-[65%] lg:w-[55%] leading-relaxed text-gray-700 dark:text-gray-300"
      >
        For over 10 years, we’ve been helping travelers explore the world with
        confidence. Our clients trust us because we deliver unforgettable
        experiences, exceptional service, and reliable guidance every single
        time.
      </motion.p>

      {/* Cards */}
      <div className="grid max-sm:space-y-6 md:grid-cols-3 md:gap-7 py-10">

        {/* Card 1 */}
        <motion.div
          custom={0}
          variants={cardVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="py-8 px-6 border-t-4 border-[#25A59E] shadow-lg 
          bg-white text-black rounded-xl 
          transition-all duration-300 cursor-pointer
          hover:scale-[1.03] hover:shadow-2xl"
        >
          <p className="text-[26px] md:text-[28px] font-semibold leading-tight">
            Best Guide, Best Experience.
          </p>
          <p className="pt-3 pb-6 text-[15px] text-black">
            Your trips become unforgettable with our experienced, friendly guides.
          </p>
          <div className="flex items-center text-[#25A59E] justify-end space-x-2 font-semibold">
            <button>More details</button>
            <FaArrowRight />
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          custom={1}
          variants={cardVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="py-8 px-6 border-t-4 border-[#25A59E] shadow-lg 
          bg-[#25A59E] text-white rounded-xl 
          transition-all duration-300 cursor-pointer
          hover:scale-[1.03] hover:shadow-2xl"
        >
          <p className="text-[26px] md:text-[28px] font-semibold leading-tight">
            Exclusive Special Tickets.
          </p>
          <p className="pt-3 pb-6 text-[15px] text-white/90">
            Enjoy exclusive travel tickets and offers available only to our customers.
          </p>
          <div className="flex items-center justify-end space-x-2 font-semibold">
            <button>More details</button>
            <FaArrowRight />
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          custom={2}
          variants={cardVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="py-8 px-6 border-t-4 border-[#25A59E] shadow-lg 
          bg-white text-black rounded-xl 
          transition-all duration-300 cursor-pointer
          hover:scale-[1.03] hover:shadow-2xl"
        >
          <p className="text-[26px] md:text-[28px] font-semibold leading-tight">
            24/7 Customer Support.
          </p>
          <p className="pt-3 pb-6 text-[15px] text-black">
            Got questions? We’re always available anytime, anywhere.
          </p>
          <div className="flex items-center text-[#25A59E] justify-end space-x-2 font-semibold">
            <button>More details</button>
            <FaArrowRight />
          </div>
        </motion.div>

      </div>
    </div>
  )
}
