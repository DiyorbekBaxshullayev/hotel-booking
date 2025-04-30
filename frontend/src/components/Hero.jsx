// src/components/Hero.jsx

import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen">
      <img
        src="/images/hero-bg.jpg"
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="relative z-10 flex items-center justify-center h-full bg-black bg-opacity-50">
        <motion.h1
          className="text-white text-5xl font-bold text-center px-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to Hotel Booking
        </motion.h1>
      </div>
    </section>
  );
};

export default Hero;
