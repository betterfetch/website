import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const asciiIcons = ["[~]", ">", "$", "echo", "vim", "sudo", "nvim", "bash", "zsh"];

export default function Download() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [icons, setIcons] = useState<{ id: number; x: number; y: number; char: string; fontSize: number }[]>([]);

  useEffect(() => {
    setIcons(
      asciiIcons.map((char, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        char,
        fontSize: Math.random() * 1.2 + 0.8,
      }))
    );

    const handleMouseMove = (e: any) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
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

      {/* Floating ASCII icons */}
      {icons.map(({ id, x, y, char, fontSize }) => (
        <motion.div
          key={id}
          className="absolute font-mono text-[#00ff99] opacity-50 select-none"
          style={{ top: `${y}%`, left: `${x}%`, fontSize: `${fontSize}rem` }}
          animate={{
            y: ["0%", "-10%", "0%"],
            opacity: [0.4, 0.8, 0.4],
            rotate: [0, 360],
            x: mousePos.x / 2,
          }}
          transition={{
            duration: Math.random() * 6 + 4,
            repeat: Infinity,
            repeatType: "mirror",
            rotate: { duration: 60, repeat: Infinity, ease: "linear" },
          }}
        >
          {char}
        </motion.div>
      ))}

      {/* Content */}
      <motion.div
        className="relative max-w-xl text-center z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text text-white  to-teal-400 drop-shadow-[0_0_15px_rgba(0,255,255,0.5)]">
          Get betterfetch
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed drop-shadow-[0_0_5px_rgba(0,255,255,0.3)]">
          Download the latest version of <strong>betterfetch</strong> and instantly upgrade your terminal aesthetic.
          It's fast, minimal, and open source.
        </p>

        <a
          href="https://github.com/betterfetch/betterfetch"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-blue-500 to-teal-400 hover:from-blue-400 hover:to-teal-300 transition px-8 py-3 text-lg rounded-xl font-medium shadow-lg text-black"
        >
          Download from GitHub
        </a>

        <div className="mt-6 text-sm text-gray-500">
          Compatible with Linux & WSL. Requires a POSIX-compliant shell.
        </div>
      </motion.div>
    </div>
  );
}
