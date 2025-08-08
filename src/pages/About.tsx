import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const About = () => {
  const [stars, setStars] = useState<{ id: number; x: number; y: number; size: number }[]>([]);
  const [icons, setIcons] = useState<{ id: number; x: number; y: number; char: string }[]>([]);

  const asciiIcons = ["[~]", ">", "$", "echo", "vim", "sudo", "nvim", "bash", "zsh"];

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
    <div className="relative h-screen w-screen overflow-hidden flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white px-6 py-12">

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

      {/* Content */}
      <motion.div
        className="relative max-w-3xl text-center z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Animated heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white to-teal-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(0,255,255,0.5)]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          About betterfetch
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed drop-shadow-[0_0_5px_rgba(0,255,255,0.3)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <strong className="text-cyan-300">betterfetch</strong> is a sleek, minimalist system info tool for the terminal, 
          inspired by projects like <code className="text-blue-300">neofetch</code> and <code className="text-blue-300">pfetch</code>, 
          but designed with <span className="text-teal-300 font-semibold">simplicity</span> and <span className="text-cyan-300 font-semibold">speed</span> in mind.
          <br /><br />
          Whether you’re customizing your terminal setup or just want a quick look at your system specs, 
          betterfetch provides just the essentials — clean, readable, and lightning fast ⚡.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <Link
            to="https://github.com/betterfetch/betterfetch"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-teal-400 hover:from-blue-400 hover:to-teal-300 text-white font-medium rounded-xl shadow-lg transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10">💻 View on GitHub</span>
            <motion.div
              className="absolute inset-0 bg-white/20 blur-lg"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.3 }}
            />
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
