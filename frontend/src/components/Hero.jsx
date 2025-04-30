import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import heroAnimation from "../assets/hero-animation.json";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen">
      <img
        src="/images/hero-bg.jpg"
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="relative z-10 flex items-center justify-center h-full bg-black bg-opacity-50">
        <h1 className="text-white text-5xl font-bold text-center px-4">
          Welcome to Hotel Booking
        </h1>
      </div>

      <div className="absolute inset-0 z-20 flex justify-center items-center">
        <Player
          autoplay
          loop
          src={heroAnimation}
          style={{ height: "400px", width: "400px" }}
        />
      </div>
    </section>
  );
};

export default Hero;
