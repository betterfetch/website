import { motion } from "framer-motion";

export default function Download() {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white px-6 py-12">
      <motion.div
        className="max-w-xl text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text">
          Get betterfetch
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Download the latest version of <strong>betterfetch</strong> and instantly upgrade your terminal aesthetic.
          It's fast, minimal, and open source.
        </p>

        <a
          href="https://github.com/betterfetch/betterfetch"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 hover:bg-blue-700 transition px-8 py-3 text-lg rounded-xl font-medium shadow-lg"
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
