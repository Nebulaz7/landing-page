"use client";
import React, { useEffect, useState } from "react";
import { Mic } from "lucide-react";
import { motion } from "framer-motion";

const Feature = () => {
  // Typewriter setup
  const fullText = `Our real-time processing engine generates high-quality audio in milliseconds.

Most requests are processed in under 200ms, making it perfect for live applications and interactive experiences.`;
  const [visibleChars, setVisibleChars] = useState(0);

  useEffect(() => {
    if (visibleChars >= fullText.length) return;
    const id = setTimeout(() => setVisibleChars((c) => c + 1), 18); // typing speed
    return () => clearTimeout(id);
  }, [visibleChars, fullText.length]);

  const displayed = fullText.slice(0, visibleChars);

  return (
    <section id="features" aria-labelledby="features-label" className="py-12">
      {/* Feature Intro */}
      <div className="flex justify-center mb-8">
        <span className="inline-flex px-3 font-light text-3xl lg:text-5xl hero-font leading-tight mb-6">
          The Future of&nbsp;
          <span className="highlight-text"> Voice Technology</span>
        </span>
      </div>
      <div className="flex flex-col lg:flex-row gap-8 items-center px-5 justify-center">
        <div className="px-3 pt-5 flex-1 w-full max-w-xl">
          <Mic className="w-14 h-14 text-purple-500 mb-4" />
          <h1 className="text-3xl lg:text-4xl font-light hero-font leading-tight mb-6">
            Natural Voice Synthesis
          </h1>
          <p className="text-gray-200">
            Advanced neural networks create voices that capture human emotion,
            tone, and personality with unprecedented realism.
          </p>
        </div>
        {/* Demo section */}
        <div className="flex-1 w-full max-w-xl">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 to-purple-600/20 rounded-2xl blur-2xl" />
            <div className="relative border-2 border-purple-500 bg-gray-900 rounded-xl p-6 overflow-hidden">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <div className="w-3 h-3 bg-green-500 rounded-full" />
                <span className="ml-4 text-gray-400 text-sm">Auvra AI</span>
              </div>
              <pre className="text-lg text-gray-300 whitespace-pre-wrap break-words leading-relaxed min-h-[10rem]">
                <code>
                  {displayed}
                  <motion.span
                    aria-hidden="true"
                    className="inline-block w-2 -mb-[2px] bg-gradient-to-r from-indigo-400 to-purple-400"
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 0.9, repeat: Infinity }}
                    style={{
                      height: "1em",
                      marginLeft: "2px",
                    }}
                  />
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
