"use client";
import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <header className="flex bg-[#333333] justify-center border-b-1  border-gray-500 m-0 font-sm p-2 bg-primary backdrop-blur-xl z-30 lg:rounded-2xl lg:mt-5 lg:mx-6 lg:py-1 lg:border-1 lg:shadow-md lg:shadow-purple-500/50">
      <nav className="flex justify-between items-center gap-5 w-full max-w-7xl px-2 md:px-6 h-[3.5rem] mx-auto">
        <h1 className="font-md text-white">Auvra AI</h1>

        <ul className="flex gap-6 text-gray-300">
          <li>
            <motion.a href="/" className="hover:text-purple-400" layout>
              Features
            </motion.a>
          </li>
          <li>
            <motion.a href="/" className="hover:text-purple-400" layout>
              Marketplace
            </motion.a>
          </li>
          <li>
            <motion.a href="/" className="hover:text-purple-400" layout>
              Contact
            </motion.a>
          </li>
        </ul>

        <div className="flex items-center gap-6">
          <motion.button
            className="border-b-1 cursor-pointer text-gray-100 px-1 py-1 hover:text-purple-500 hover:border-purple-400"
            layout
          >
            Log in
          </motion.button>
          <motion.button
            className="bg-purple-600 text-white px-4 cursor-pointer py-1 rounded-2xl flex items-center gap-2 hover:bg-[#101010] transition duration-300"
            whileHover="hover"
            variants={{
              hover: { scale: 1.0 },
            }}
            layout
          >
            Get Started
            <motion.span
              className="text-lg font-extralight"
              variants={{
                hover: {
                  x: 4,
                  transition: { type: "spring", stiffness: 400, damping: 10 },
                },
              }}
            >
              →
            </motion.span>
          </motion.button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
