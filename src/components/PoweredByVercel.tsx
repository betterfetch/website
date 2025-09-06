import React from "react";
import { motion } from "framer-motion";
import v from "/vercel.svg";

const PoweredByVercel: React.FC = () => (
	<motion.div
	initial={{ opacity: 0, y: 20 }}
	animate={{ opacity: 1, y: 0 }}>
    <a
        href="https://vercel.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 text-gray-400 hover:text-white text-sm mt-4"
    >
        <img
            src={v}
            alt="Vercel"
            style={{ verticalAlign: "middle" }}
        />
    </a>
	</motion.div>
);

export default PoweredByVercel;
