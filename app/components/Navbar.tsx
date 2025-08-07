"use client";
import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const MotionLink = motion(Link);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="fixed top-0 left-0 right-0 flex bg-[121212]/70 lg:bg-[#333333]/70 justify-center border-gray-500 m-0 font-sm p-2 bg-primary backdrop-blur-xl z-30 lg:rounded-2xl lg:mt-5 lg:mx-6 lg:py-1 lg:border-1 lg:shadow-md lg:shadow-purple-500/50"
    >
      <nav className="flex justify-between items-center gap-5 w-full max-w-7xl px-2 md:px-6 h-[3.5rem] mx-auto">
        <h1 className="font-md text-white">Auvra AI</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-gray-300">
          <li>
            <MotionLink href="/" className="hover:text-white" layout>
              Features
            </MotionLink>
          </li>
          <li>
            <MotionLink href="/" className="hover:text-white" layout>
              Marketplace
            </MotionLink>
          </li>
          <li>
            <MotionLink href="/" className="hover:text-white" layout>
              Contact
            </MotionLink>
          </li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-6">
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

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="md:hidden lg:hidden text-white p-2 cursor-pointer"
        >
          <Menu size={24} />
        </button>
      </nav>

      {/* Mobile Fullscreen Menu */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isMenuOpen ? 0 : "-100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed top-0 left-0 w-full md:hidden min-h-screen bg-transparent z-50 flex flex-col"
      >
        {/* Menu Header */}
        <div className="flex justify-between bg-[#121212] items-center p-6">
          <h1 className="font-md text-white text-xl">Auvra AI</h1>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-white p-2 cursor-pointer"
          >
            <X size={24} />
          </button>
        </div>

        {/* Menu Content */}
        <div className="flex-1 flex flex-col justify-center mt-0 items-center bg-[#121212] gap-8 pt-0 px-6">
          <ul className="flex flex-col gap-8 text-center">
            <li>
              <Link
                href="/"
                className="text-3xl text-gray-300 hover:text-white transition-colors"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-3xl text-gray-300 hover:text-white transition-colors"
              >
                Marketplace
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-3xl text-gray-300 hover:text-white transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>

          <div className="flex flex-col gap-4 w-full max-w-xs mt-8">
            <button className="border-2 border-gray-200 text-gray-100 px-4 py-2 cursor-pointer rounded-2xl hover:text-purple-500 hover:border-purple-400 transition-colors">
              Log in
            </button>
            <button className="bg-purple-600 text-white px-4 py-2 cursor-pointer rounded-2xl hover:bg-purple-700 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Navbar;
