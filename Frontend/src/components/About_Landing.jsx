import React from "react";
import './about_landing.css'
import { NavLink } from "react-router-dom";
export default function About_Landing() {
  return (
    <div className="w-full min-h-screen bg-black text-white overflow-x-hidden">

      {/* HERO SECTION */}
      <section className="mt-20 flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-gradient">
          Save Your Code. Anywhere. Anytime.
        </h1>

        <p className="mt-6 text-base lg:text-xl xl:text-xl max-w-3xl opacity-80 animate-fadeUp">
          A simple, secure cloud-based code saving platform.
          Access your code from any device with full privacy & encryption.
        </p>

        <NavLink to={'/login'} className="mt-10 px-5 md:px-8 py-3 md:py-4 text-sm sm:text-base md:text-lg bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-600/50">
          Get Started
        </NavLink>

        {/* Floating Code Block */}
        <div className="mt-16 w-full flex justify-center items-center sm:w-[70%] md:w-[60%] bg-[#0f0f0f] rounded-xl p-6 border border-white/10 shadow-lg shadow-purple-500/30 floating-box">
          <pre className="text-left text-xs sm:text-base md:text-lg lg:text-xl text-green-400">
            {`function saveCode(code) {
  return cloud.store(code)
}`}
          </pre>
        </div>
      </section>

      {/* ABOUT US */}
      <section className="py-20 lg:py-24 xl:py-24 px-6 bg-black">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
          What We Do
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-5 xl:gap-10 max-w-6xl sm:max-w-4xl md:max-w-2xl lg:max-w-6xl mx-auto">

          {/* CARD 1 */}
          <div className="p-4 sm:p-8 bg-[#111] rounded-2xl border border-white/10 hover:shadow-[0_0_25px_#6EE7FF] transition-all duration-0 animate-zoomIn">
            <h3 className="text-xl lg:text-2xl font-semibold mb-4">Cloud Code Storage</h3>
            <p className="text-sm sm:text-base md:text-base opacity-70">
              Save your code online and access it from any browser or device with automatic sync.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="p-4 sm:p-8 bg-[#111] rounded-2xl border border-white/10 hover:shadow-[0_0_25px_#A855F7] transition-all duration-0 animate-zoomIn">
            <h3 className="text-xl lg:text-2xl font-semibold mb-4">Secure & Private</h3>
            <p className="text-sm sm:text-base md:text-base opacity-70">
              All code is protected - only YOU can access it by logging into your account.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="p-4 sm:p-8 bg-[#111] rounded-2xl border border-white/10 hover:shadow-[0_0_25px_#22D3EE] transition-all duration-0 animate-zoomIn">
            <h3 className="text-xl lg:text-2xl font-semibold mb-4">Simple for Everyone</h3>
            <p className="text-sm sm:text-base md:text-base opacity-70">
              Whether you're a beginner or a pro, our interface makes saving and managing code effortless.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-5 lg:py-10 xl:py-12 px-6">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-4xl font-bold text-center mb-5 lg:mb-10 xl:mb-10 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
          Why Developers Love Us
        </h2>

        <div className="max-w-4xl mx-auto text-center animate-fadeUp">
          <p className="text-sm sm:text-base md:text-lg xl:text-lg opacity-80 leading-relaxed">
            Fast, secure, and accessible from anywhere - our platform ensures your code is always safe
            and always available. With powerful tools and a minimalist experience, we keep your workflow smooth.
          </p>
        </div>
      </section>

    </div>
  );
}
