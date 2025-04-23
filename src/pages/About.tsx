import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white px-6 py-12">
      <motion.div
        className="max-w-3xl text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text">
          About betterfetch
        </h2>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          <strong>betterfetch</strong> is a sleek, minimalist system info tool for the terminal, inspired by projects like <code>neofetch</code> and <code>pfetch</code>, but designed with simplicity and speed in mind.
          <br /><br />
          Whether you're customizing your terminal setup or just want a quick look at your system specs, betterfetch provides just the essentials — clean, readable, and fast.
        </p>
        <div className="mt-8">
          <Link
            to="https://github.com/betterfetch/betterfetch"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition"
          >
            View on GitHub
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
