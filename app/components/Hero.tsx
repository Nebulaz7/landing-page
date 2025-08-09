"use client";
import React from "react";
import { motion } from "framer-motion";
import { Play, Volume2, ChevronRight } from "lucide-react";
import AuvraHeroAnimation from "./HeroAnimation";

const Hero = () => {
  return (
    <section className="flex items-center justify-center min-h-[95vh] lg:px-6 py-1 pt-12 md:pt-20 lg:pt-24">
      <div className="max-w-7xl mx-auto w-full hero-font">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="pl-6 space-y-6"
          >
            <h1 className="text-5xl lg:text-7xl font-light hero-font leading-tight mb-6">
              Why Just{" "}
              <span className="relative">
                <br />
                <span className="underline-text font-bold">Generate</span>
                <br className="md:hidden" />
              </span>{" "}
              When You Can{" "}
              <span className="relative">
                <span className="highlight-text">Create</span>?
              </span>
            </h1>
            <p className="md:text-lg text-gray-300">
              Text-to-speech is just the beginning.{" "}
              <span className="relative">
                <span className="font-bold">
                  Auvra&apos;s node-based generative
                </span>
              </span>{" "}
              workflows empower you to transcend simple voice generation.
            </p>
            {/* Cta Buttons */}
            <div className="flex items-center gap-4 md:gap-6">
              <motion.button
                className="bg-purple-600 text-[12px] text-white md:text-[14px] px-4 py-2 md:px-6 cursor-pointer md:py-3 rounded-2xl flex items-center gap-1 hover:bg-purple-700/80 shadow-sm shadow-purple-400/50  hover:shadow-md hover:shadow-purple-400/50 transition duration-100"
                whileHover="hover"
                variants={{
                  hover: { scale: 1.0, y: -2 },
                }}
                layout
              >
                <Play className="text-gray-200 w-[14px] h-[14px] md:w-[20px] md:h-[20px]" />
                Start Creating
                <motion.span
                  className="text-lg font-extralight"
                  variants={{
                    hover: {
                      x: 4,
                      transition: { stiffness: 400, damping: 10 },
                    },
                  }}
                >
                  <ChevronRight className="w-3 h-3 md:w-4 md:h-4 " />
                </motion.span>
              </motion.button>

              <motion.button
                className="bg-[#222222] text-[12px] md:text-[14px] text-white border-2 border-gray-200 px-4 py-2 md:px-6 cursor-pointer md:py-3 rounded-2xl flex items-center gap-2 hover:bg-[#444444] shadow-sm shadow-purple-400/50  hover:shadow-md hover:shadow-purple-400/50 transition duration-100"
                whileHover={{ y: -2 }}
                layout
              >
                <Volume2 className="text-gray-300 w-[14px] h-[14px] md:w-[20px] md:h-[20px]" />{" "}
                Experience the Demo
              </motion.button>
            </div>
          </motion.div>

          {/* Right Side - SVG (Hidden on mobile) */}
          <div className="hidden lg:block lg:pr-4">
            {/* Your custom SVG animation goes here */}
            <AuvraHeroAnimation />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
