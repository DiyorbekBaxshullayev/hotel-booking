import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">HotelBooking</h1>
      <div className="space-x-4">
        <button className="hover:underline">Login</button>
        <button className="hover:underline">Register</button>
      </div>
    </nav>
  );
};

export default Navbar;
