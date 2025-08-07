"use client";
import React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="flex items-center justify-center h-[80vh] px-6 py-1">
      <div className="max-w-7xl mx-auto w-full hero-font">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-7xl font-light hero-font leading-tight mb-6">
              Why Just{" "}
              <span className="relative">
                <span className="underline-text">Generate</span>
              </span>{" "}
              When You Can{" "}
              <span className="relative">
                <span className="highlight-text">Create</span>?
              </span>
            </h1>
            <p className="text-lg text-gray-300">
              Text-to-speech is just the beginning.{" "}
              <span className="relative">
                <span className="font-bold">Auvra's</span>
              </span>{" "}
              node-based generative workflows empower you to transcend simple
              voice generation.
            </p>
            {/* Cta Buttons */}
            <div className="flex items-center gap-6">
              <motion.button
                className="bg-purple-600 text-white px-4 cursor-pointer py-2 rounded-2xl flex items-center gap-2 hover:bg-purple-700 shadow-sm shadow-purple-400/50  hover:shadow-md hover:shadow-purple-400/50 transition duration-100"
                whileHover="hover"
                variants={{
                  hover: { scale: 1.0, y: -2 },
                }}
                layout
              >
                <Play size={18} className="text-gray-200" />
                {""}Start Creating
                <motion.span
                  className="text-lg font-extralight"
                  variants={{
                    hover: {
                      x: 4,
                      transition: { stiffness: 400, damping: 10 },
                    },
                  }}
                >
                  →
                </motion.span>
              </motion.button>

              <motion.button
                className="bg-transparent text-white border-2 border-gray-200 px-4 cursor-pointer py-2 rounded-2xl flex items-center gap-2 hover:bg-[#333333] shadow-sm shadow-purple-400/50  hover:shadow-md hover:shadow-purple-400/50 transition duration-100"
                layout
              >
                Experience the Demo
              </motion.button>
            </div>
          </div>

          {/* Right Side - SVG (Hidden on mobile) */}
          <div className="hidden lg:block">
            {/* Your custom SVG animation goes here */}
            <div className="w-full h-96 bg-gray-800 rounded-lg flex items-center justify-center">
              <span className="text-gray-400">SVG Placeholder</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
