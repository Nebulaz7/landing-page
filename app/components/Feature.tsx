"use client";
import React, { useEffect, useState } from "react";
import { Mic, Zap, Clock } from "lucide-react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

// Define variants for the blinking cursor
const cursorVariants: Variants = {
  hidden: { opacity: 0 },
  blink: {
    opacity: [0, 1, 0],
    transition: {
      duration: 0.9,
      repeat: Infinity,
      repeatType: "loop",
      ease: "linear",
    },
  },
};

// Container animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const Feature = () => {
  // Typewriter setup
  const fullText = `Our real-time processing engine generates high-quality audio in milliseconds.

Most requests are processed in under 200ms, making it perfect for live applications and interactive experiences.`;

  const [visibleChars, setVisibleChars] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    if (visibleChars >= fullText.length) {
      setIsTypingComplete(true);
      return;
    }
    const id = setTimeout(() => setVisibleChars((c) => c + 1), 18);
    return () => clearTimeout(id);
  }, [visibleChars, fullText.length]);

  const displayedText = fullText.slice(0, visibleChars);

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Side - Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600/10 border border-purple-600/20 rounded-full text-purple-400 text-sm font-medium">
              <Zap className="w-4 h-4" />
              Real-Time Processing
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Lightning Fast
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
                Audio Generation
              </span>
            </h2>

            {/* Typewriter Text */}
            <div className="text-lg text-gray-300 leading-relaxed min-h-[120px]">
              <span>{displayedText}</span>
              <motion.span
                variants={cursorVariants}
                initial="hidden"
                animate={isTypingComplete ? "hidden" : "blink"}
                className="inline-block w-0.5 h-6 bg-purple-400 ml-1"
              />
            </div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-6 pt-6"
            >
              <div className="text-center p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                <div className="text-3xl font-bold text-purple-400">
                  &lt;200ms
                </div>
                <div className="text-sm text-gray-400">Average Response</div>
              </div>
              <div className="text-center p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                <div className="text-3xl font-bold text-indigo-400">99.9%</div>
                <div className="text-sm text-gray-400">Uptime</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Interactive Demo */}
          <motion.div variants={itemVariants} className="relative">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700">
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-gray-400 text-sm ml-4">
                  Audio Generator
                </span>
              </div>

              {/* Input Area */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-gray-700/50 rounded-lg">
                  <Mic className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300">
                    "Hello, this is a sample text for generation..."
                  </span>
                </div>

                {/* Processing Animation */}
                <motion.div
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="flex items-center gap-2 p-4 bg-purple-600/10 border border-purple-600/20 rounded-lg"
                >
                  <Clock className="w-5 h-5 text-purple-400" />
                  <span className="text-purple-400 text-sm">
                    Processing... 127ms
                  </span>
                </motion.div>

                {/* Audio Waveform Visualization */}
                <div className="p-4 bg-gray-700/30 rounded-lg">
                  <div className="flex items-center justify-center gap-1 h-16">
                    {Array.from({ length: 20 }, (_, i) => (
                      <motion.div
                        key={i}
                        className="w-2 bg-gradient-to-t from-purple-600 to-indigo-400 rounded-full"
                        animate={{
                          height: [8, 32, 8],
                        }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          delay: i * 0.1,
                          ease: "easeInOut",
                        }}
                      />
                    ))}
                  </div>
                  <div className="text-center text-gray-400 text-sm mt-2">
                    Audio generated in 158ms
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Feature;
