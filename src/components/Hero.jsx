import React from "react";
import { assets } from "../assets/frontend_assets/assets";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-10 py-14 md:py-24">
        <div className="flex flex-col items-start text-left max-w-xl">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
            Elevate Your <br />
            <span className="text-blue-600">
              Everyday Look
            </span>
          </h1>

          <p className="text-gray-600 mt-5 md:mt-7 text-base md:text-lg leading-relaxed">
            Step into comfort and confidence with our latest collection 
            designed for modern trendsetters who love effortless fashion and premium quality.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              to="/collection"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 shadow-md"
            >
              Shop Now
            </Link>
            <Link
              to="/about"
              className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>

        <div className="mt-10 md:mt-0">
          <img
            src={assets.hero_img}
            alt="Hero Banner"
            className="w-full max-w-md md:max-w-lg drop-shadow-xl rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
