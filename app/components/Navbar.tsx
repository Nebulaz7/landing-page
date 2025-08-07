"use client";

import { motion } from "framer-motion";
import Link from "next/link";

// Create motion Link component
const MotionLink = motion(Link);

const Navbar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="fixed top-0 left-0 right-0 flex bg-[#333333]/70 justify-center border-b-1 border-gray-500 m-0 font-sm p-2 bg-primary backdrop-blur-xl z-30 lg:rounded-2xl lg:mt-5 lg:mx-6 lg:py-1 lg:border-1 lg:shadow-md lg:shadow-purple-500/50"
    >
      <nav className="flex justify-between items-center gap-5 w-full max-w-7xl px-2 md:px-6 h-[3.5rem] mx-auto">
        <h1 className="font-md text-white">Auvra AI</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-gray-300">
          <li>
            <MotionLink
              href="/"
              className="hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
              layout
            >
              Features
            </MotionLink>
          </li>
          <li>
            <MotionLink
              href="/"
              className="hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
              layout
            >
              Marketplace
            </MotionLink>
          </li>
          <li>
            <MotionLink
              href="/"
              className="hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
              layout
            >
              Contact
            </MotionLink>
          </li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-6">
          <motion.button
            className="border-b-1 cursor-pointer text-gray-100 px-1 py-1 hover:text-purple-500 hover:border-purple-400 transition-colors"
            whileHover={{ scale: 1.05 }}
            layout
          >
            Sign In
          </motion.button>
          {/* Add more buttons here */}
        </div>
      </nav>
    </motion.div>
  );
};

export default Navbar;
