import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import heroAnimation from "../assets/hero-animation.json";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src="/images/hero-bg.jpg"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />

      {/* ✅ TUGMALAR – YUQORI O‘NG BURCHAKDA */}
      <div className="absolute top-4 right-6 z-50 flex gap-4">
        <Link
          to="/login"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded shadow"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded shadow"
        >
          Register
        </Link>
      </div>

      {/* Matn */}
      <div className="relative z-20 flex items-center justify-center h-full text-center">
        <h1 className="text-white text-5xl md:text-6xl font-extrabold px-4 drop-shadow-xl">
          Welcome to Hotel Booking
        </h1>
      </div>

      {/* Animatsiya */}
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
