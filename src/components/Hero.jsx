import React from "react";
import heroImage from "../assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      className="h-[80vh] bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="bg-black bg-opacity-50 p-10 rounded-lg text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Hotel Booking</h1>
        <p className="text-lg">Book your perfect stay with us today!</p>
      </div>
    </section>
  );
};

export default Hero;
