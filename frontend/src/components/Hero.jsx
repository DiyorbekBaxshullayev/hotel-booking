// src/components/Hero.jsx

import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      <img
        src="/images/hero-bg.jpg"
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Gradient Animated Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10" />

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.h1
          className="text-white text-5xl md:text-6xl font-extrabold mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          Welcome to <br /> Your Dream Hotel
        </motion.h1>

        <motion.p
          className="text-white text-lg md:text-xl mb-8 max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Discover luxury, comfort, and unforgettable moments with our hotel booking platform.
        </motion.p>

        <motion.a
          href="#"
          className="bg-white text-black px-6 py-3 rounded-full font-semibold shadow-md hover:bg-gray-100 transition"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          Book Now
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
