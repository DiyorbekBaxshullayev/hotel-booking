import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import heroAnimation from "../assets/hero-animation.json";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src="/images/hero-bg.jpg"
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-sky-300 drop-shadow-[0_3px_6px_rgba(0,0,0,0.9)] mb-6">
          Welcome to Hotel Booking
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-yellow-300 font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] max-w-2xl mb-10">
          Explore luxury and book your perfect stay with just a few clicks!
        </p>

        {/* Lottie Animation */}
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
