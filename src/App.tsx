import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Download from "./pages/Download";
import Footer from "./components/Footer";
import { motion } from "framer-motion";
import PoweredByVercel from "./components/PoweredByVercel";

const App: React.FC = () => {
  const [stars, setStars] = useState<
    { id: number; x: number; y: number; size: number }[]
  >([]);
  const [icons, setIcons] = useState<
    { id: number; x: number; y: number; char: string }[]
  >([]);

  const asciiIcons = [
    "[~]",
    ">",
    "$",
    "echo",
    "vim",
    "sudo",
    "nvim",
    "bash",
    "zsh",
  ];

  useEffect(() => {
    const starArray = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
    }));
    setStars(starArray);

    const iconArray = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      char: asciiIcons[Math.floor(Math.random() * asciiIcons.length)],
    }));
    setIcons(iconArray);
  }, []);
  return (
    <div className="relative h-screen w-screen overflow-hidden flex flex-col justify-center items-center bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white px-6 py-12">
      {/* Animated gradient blobs */}
      <motion.div
        className="absolute top-0 left-0 w-[120%] h-[120%] bg-gradient-to-tr from-blue-900 via-purple-900 to-black blur-3xl opacity-30"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[120%] h-[120%] bg-gradient-to-tr from-teal-900 via-green-900 to-black blur-3xl opacity-30"
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 70, ease: "linear" }}
      />

      {/* Starfield */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            width: star.size,
            height: star.size,
            top: `${star.y}%`,
            left: `${star.x}%`,
          }}
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{
            duration: Math.random() * 2 + 1,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />
      ))}

      {/* Floating ASCII terminal icons */}
      {icons.map((icon) => (
        <motion.div
          key={icon.id}
          className="absolute font-mono text-[#00ff99] opacity-50 select-none"
          style={{
            top: `${icon.y}%`,
            left: `${icon.x}%`,
            fontSize: `${Math.random() * 1.2 + 0.8}rem`,
          }}
          animate={{ y: ["0%", "-10%", "0%"], opacity: [0.4, 0.8, 0.4] }}
          transition={{
            duration: Math.random() * 6 + 4,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        >
          {icon.char}
        </motion.div>
      ))}

      <Router>
        <Navbar />
        <div className="p-0 text-white">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/download" element={<Download />} />
          </Routes>
        </div>
      </Router>
      <div className="absolute bottom-7 left-0 w-full flex justify-center pointer-events-none">
        <div className="pointer-events-auto">
          <PoweredByVercel />
        </div>
      </div>
    </div>
  );
}

export default App;
