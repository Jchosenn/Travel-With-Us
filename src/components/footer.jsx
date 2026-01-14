import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link"
import { motion } from "framer-motion"
import logo from "../assets/Images/Travel.svg"
import { FaInstagram, FaYoutube, FaXTwitter } from "react-icons/fa6"

export const Footer = () => {
  const navLinks = [
    {name:"Home", path: "/#home"}, 
    {name:"Destination", path: "/#destination"}, 
    {name:"Guide", path: "/"}, 
    {name:"Contact Us", path: "/"},]

    const socials = [
      {icon: FaInstagram, url: "https://www.instagram.com/jchosenn09/" },
      {icon: FaYoutube, url: "https://www.instagram.com/jchosenn09/" },
      {icon: FaXTwitter, url: "https://www.instagram.com/jchosenn09/" },
    ]

  return (
    <div className="py-14 px-6 md:px-10 lg:px-20 font-urbanist">
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
      >
        <h2 className="text-[32px] md:text-5xl lg:text-6xl font-semibold leading-tight">
          Get our best offer now!
        </h2>

        <Link to="/">
          <motion.button
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#25A59E] text-white rounded-md py-3 px-6 text-lg font-medium shadow-sm hover:shadow-lg transition"
          >
            Click here!
          </motion.button>
        </Link>
      </motion.div>

      <div className="border-t border-gray-300 dark:border-gray-700 mt-12 pt-10" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
        className="space-y-8"
      >
        <div className="space-y-3">
          <img src={logo} alt="Travel Logo" className="w-16" />
          <p className="text-gray-600 dark:text-gray-300 max-w-md">
            The best travel agent in the world. Contact us immediately and start your journey today.
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between gap-10 pt-4">

          <div className="flex gap-5">
            {socials.map((Icon, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-[#EAFAF9] text-[#25A59E] rounded-full flex items-center justify-center shadow-sm cursor-pointer"
              ><a href={Icon.url} target="_blank" rel="noopener noreferrer">
                <Icon.icon className="text-xl" />
              </a>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex gap-6 text-lg"
          >
            {navLinks.map((link, index) => (
              <motion.p
                key={index}
                whileHover={{ x: 4, opacity: 0.7 }}
                className="cursor-pointer transition"
              >
                <HashLink smooth to={link.path}>{link.name}</HashLink>
              </motion.p>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
