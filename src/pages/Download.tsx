import { motion } from "framer-motion";

export default function Download() {
  return (
    <>
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
          Download the latest version of <strong>betterfetch</strong> and
          instantly upgrade your terminal aesthetic. It's fast, minimal, and
          open source.
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
    </>
  );
}
