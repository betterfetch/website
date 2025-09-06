import React from 'react';
import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';

const Home: React.FC = () => {
	return (
        <>
			{/* Content */}
			<motion.div
				className="relative max-w-3xl text-center z-10"
				initial={{opacity: 0, y: 30}}
				animate={{opacity: 1, y: 0}}
				transition={{duration: 0.8}}
			>
				{/* Animated heading */}
				<motion.h1
					className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text text-white to-teal-400 drop-shadow-[0_0_15px_rgba(0,255,255,0.5)]"
					initial={{opacity: 0, y: -20}}
					animate={{opacity: 1, y: 0}}
					transition={{delay: 0.2, duration: 0.8}}
				>
					betterfetch
				</motion.h1>

				{/* Subtitle */}
				<motion.p
					className="mt-6 text-lg md:text-xl text-gray-300 max-w-xl text-center"
					initial={{opacity: 0}}
					animate={{opacity: 1}}
					transition={{delay: 0.5, duration: 1}}
				>
					A minimal, lightning-fast terminal system info tool built for beauty
					and speed.
				</motion.p>

				{/* Download button */}
				<motion.div
					className="mt-8"
					initial={{opacity: 0, scale: 0.95}}
					animate={{opacity: 1, scale: 1}}
					transition={{delay: 0.8, duration: 0.5}}
				>
					<Link
						to="/download"
						rel="noopener noreferrer"
						className="relative inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-teal-400 hover:from-blue-400 hover:to-teal-300 text-white font-medium rounded-xl shadow-lg transition-all duration-300 overflow-hidden"
					>
						<span className="relative z-10">Download now</span>
						<motion.div
							className="absolute inset-0 bg-white/20 blur-lg"
							initial={{opacity: 0}}
							whileHover={{opacity: 0.3}}
						/>
					</Link>
				</motion.div>
			</motion.div>
		</>
	);
};

export default Home;
