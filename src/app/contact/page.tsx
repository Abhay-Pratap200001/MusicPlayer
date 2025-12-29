"use client";

import React from "react";
import { Meteors } from "@/components/ui/meteors";

const page = () => {
  return (
    <div className="relative min-h-screen w-full bg-gray-950 overflow-hidden flex items-center justify-center px-4 text-white">
      
      {/* Meteors Background */}
      <Meteors number={120} className="hidden sm:block" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-xl flex flex-col items-center text-center">
        
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mt-20 sm:mt-28">
          Contact Us
        </h2>

        <p className="text-gray-400 text-sm sm:text-base mt-6 max-w-md">
          We’re here to help with any questions about our courses, programs, or
          events. Reach out and let us know how we can assist you in your musical
          journey.
        </p>

        <div className="w-full space-y-5 mt-8">
          <input
            type="email"
            placeholder="Your email address"
            className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl bg-black/60 border border-white/10 focus:outline-none focus:border-white/30 placeholder-gray-500 text-sm sm:text-base"
          />

          <textarea
            placeholder="Your message"
            rows={4}
            className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl bg-black/60 border border-white/10 focus:outline-none focus:border-white/30 placeholder-gray-500 resize-none text-sm sm:text-base"
          />
        </div>
      </div>
      <Meteors number={100}/>
    </div>
  );
};

export default page;
