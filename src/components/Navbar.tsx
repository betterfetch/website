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
      className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md shadow-md px-6 py-3 flex justify-between items-center"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Link to="/" className="text-2xl font-bold text-white">
        betterfetch
      </Link>
      <div className="space-x-6">
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`text-white text-lg hover:text-blue-400 transition ${
              location.pathname === link.path ? "underline underline-offset-4" : ""
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </motion.nav>
  );
}
