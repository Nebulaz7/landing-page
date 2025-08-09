import React from "react";
import { SparklesIcon } from "lucide-react";

const Feature = () => {
  return (
    <section id="features" aria-labelledby="features-label" className="py-12">
      {/* <div className="flex justify-center">
        <span className="inline-flex rounded-full bg-gradient-to-r from-[#9810fa] via-[#7182ff] to-[#3cff52] p-[2px]">
          <span
            id="features-label"
            className="inline-flex items-center inset-3 shadow-purple-500 shadow-2xl gap-2 rounded-full px-5 py-1.5 text-sm font-medium text-purple-100 bg-[var(--background)]"
          >
            <SparklesIcon className="w-5 h-5 text-[#9810fa]" />
            Features
          </span>
        </span>
      </div> */}
      <div className="flex">
        <div className="px-3">
          <h1 className="text-3xl lg:text-4xl font-light hero-font leading-tight mb-6">
            Natural Voice Synthesis
          </h1>
          <p>
            Advanced neural networks create voices that capture human emotion,
            tone, and personality with unprecedented realism.
          </p>
        </div>
        <div>{/* illustation */}</div>
      </div>
    </section>
  );
};

export default Feature;
