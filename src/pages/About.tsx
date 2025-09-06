import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';

const About = () => {
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
				<motion.h2
					className="text-4xl md:text-5xl font-bold text-white to-teal-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(0,255,255,0.5)]"
					initial={{opacity: 0, y: -20}}
					animate={{opacity: 1, y: 0}}
					transition={{delay: 0.2, duration: 0.8}}
				>
					About betterfetch
				</motion.h2>

				{/* Paragraph */}
				<motion.p
					className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed drop-shadow-[0_0_5px_rgba(0,255,255,0.3)]"
					initial={{opacity: 0, y: 20}}
					animate={{opacity: 1, y: 0}}
					transition={{delay: 0.4, duration: 0.8}}
				>
					<strong className="text-cyan-300">betterfetch</strong> is a sleek,
					minimalist system info tool for the terminal, inspired by projects
					like <code className="text-blue-300">neofetch</code> and{' '}
					<code className="text-blue-300">pfetch</code>, but designed with{' '}
					<span className="text-teal-300 font-semibold">simplicity</span> and{' '}
					<span className="text-cyan-300 font-semibold">speed</span> in mind.
					<br />
					<br />
					Whether you’re customizing your terminal setup or just want a quick
					look at your system specs, betterfetch provides just the essentials —
					clean, readable, and lightning fast ⚡.
				</motion.p>

				{/* CTA Button */}
				<motion.div
					className="mt-8"
					initial={{opacity: 0, scale: 0.95}}
					animate={{opacity: 1, scale: 1}}
					transition={{delay: 0.8, duration: 0.5}}
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
							initial={{opacity: 0}}
							whileHover={{opacity: 0.3}}
						/>
					</Link>
				</motion.div>
			</motion.div>
		</>
	);
};

export default About;
