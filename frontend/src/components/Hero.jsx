import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import heroAnimation from "../assets/hero-animation.json";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
      {/* Parallax effect background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay with gradient */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />

      {/* Buttons at the top right */}
      <div className="absolute top-6 right-8 z-50 flex gap-6">
        <Link
          to="/login"
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105"
        >
          Register
        </Link>
      </div>

      {/* Main heading */}
      <div className="relative z-20 flex items-center justify-center h-full text-center">
        <h1 className="text-white text-5xl md:text-6xl font-extrabold px-6 drop-shadow-lg">
          Welcome to Hotel Booking
        </h1>
        <p className="text-white mt-4 text-lg md:text-2xl font-medium">
          Book your dream stay with just a click
        </p>
      </div>

      {/* Lottie animation at the bottom left */}
      <div className="absolute bottom-10 left-10 z-20 hidden md:block">
        <Player
          autoplay
          loop
          src={heroAnimation}
          style={{ height: "300px", width: "300px" }}
        />
      </div>
    </section>
  );
};

export default Hero;
