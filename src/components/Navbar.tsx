import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  const location = useLocation();

  const links = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/download", label: "Download" },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-black-40 backdrop-blur-lg shadow-[0_0_15px_rgba(0,255,255,0.3)] px-6 py-3 flex justify-between items-center"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Link
        to="/"
        className="text-3xl font-extrabold text-transparent bg-clip-text text-white to-teal-400 drop-shadow-[0_0_10px_rgba(0,255,255,0.7)]"
      >
        betterfetch
      </Link>
      <div className="space-x-8">
        {links.map(({ path, label }) => {
          const isActive = location.pathname === path;
          return (
            <Link
              key={path}
              to={path}
              className={`relative text-lg font-medium text-cyan-300 transition-all duration-300
                hover:text-teal-400
                ${isActive ? "underline underline-offset-4 decoration-teal-400" : "decoration-transparent"}
                drop-shadow-[0_0_8px_rgba(0,255,255,0.6)]`}
            >
              {label}
              {isActive && (
                <motion.span
                  layoutId="underline"
                  className="absolute bottom-[-6px] left-0 right-0 h-[2px] bg-teal-400 rounded"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </Link>
          );
        })}
      </div>
    </motion.nav>
  );
}
