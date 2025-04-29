import React from "react";
import heroImage from "./assets/hero-bg.jpg"; // E'tibor bering: yo‘l to‘g‘ri bo‘lishi shart

const App = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <img src={heroImage} alt="Hero Background" className="max-w-full max-h-full" />
    </div>
  );
};

export default App;
