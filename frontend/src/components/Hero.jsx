import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import heroAnimation from "../assets/hero-animation.json";
import { useNavigate } from "react-router-dom"; // React Router uchun

const Hero = () => {
  const navigate = useNavigate(); // Routing uchun hook

  // Kirish va Ro‘yxatdan o‘tish sahifalariga yo‘naltirish funksiyalari
  const goToLogin = () => {
    navigate("/login");
  };

  const goToRegister = () => {
    navigate("/register");
  };

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

        {/* Buttons */}
        <div className="mt-8 space-x-4">
          <button
            onClick={goToLogin}
            className="px-6 py-3 text-lg bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none transition-all duration-300"
          >
            Login
          </button>
          <button
            onClick={goToRegister}
            className="px-6 py-3 text-lg bg-yellow-400 text-white rounded-lg shadow-lg hover:bg-yellow-500 focus:outline-none transition-all duration-300"
          >
            Register
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
