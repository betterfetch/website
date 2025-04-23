import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-4">
      <motion.h1
        className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        betterfetch
      </motion.h1>

      <motion.p
        className="mt-6 text-lg md:text-xl text-gray-300 max-w-xl text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        A minimal, lightning-fast terminal system info tool built for beauty and speed.
      </motion.p>

      <motion.div
        className="mt-10"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <a
          href="/download"
          className="bg-blue-600 hover:bg-blue-700 transition text-white font-medium py-3 px-6 rounded-xl shadow-lg"
        >
          Download Now
        </a>
      </motion.div>
    </div>
  );
}
