"use client";

import { motion } from "framer-motion";
import { FaGraduationCap, FaTrophy, FaFileAlt } from "react-icons/fa";

const stats = [
    { icon: FaGraduationCap, value: "VIT '27", label: "B.Tech CSE" },
    { icon: FaTrophy, value: "2x", label: "Hackathon Wins" },
    { icon: FaFileAlt, value: "1", label: "Patent Filed" },
];

export default function Hero() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
            <div className="max-w-7xl mx-auto w-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-sm text-[#888] mb-4 tracking-widest uppercase"
                        >
                            Software Engineer
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6"
                        >
                            <span className="block">KESHAV</span>
                            <span className="block gradient-text">DADHICH</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg text-[#888] max-w-xl mb-8 leading-relaxed"
                        >
                            Computer Science undergraduate building scalable systems in{" "}
                            <span className="text-white">AI/ML</span>,{" "}
                            <span className="text-white">Blockchain</span>, and{" "}
                            <span className="text-white">Full-Stack Development</span>.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-wrap gap-4"
                        >
                            <a
                                href="#projects"
                                className="px-8 py-3 bg-[#39ff14] text-black font-semibold rounded-full hover:bg-[#32e612] transition-all glow-hover"
                            >
                                View Projects
                            </a>
                            <a
                                href="mailto:keshavdadhichb7@gmail.com"
                                className="px-8 py-3 border border-[#222] text-white rounded-full hover:border-[#39ff14] hover:text-[#39ff14] transition-all"
                            >
                                Get in Touch
                            </a>
                        </motion.div>
                    </div>

                    {/* Right Content - Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-col gap-6 lg:items-end"
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                                className="flex items-center gap-4 bg-[#111] border border-[#222] rounded-xl p-6 w-full max-w-xs"
                            >
                                <div className="w-12 h-12 bg-[#39ff14]/10 rounded-lg flex items-center justify-center">
                                    <stat.icon className="text-[#39ff14]" size={20} />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                                    <p className="text-sm text-[#888]">{stat.label}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:block"
                >
                    <div className="w-6 h-10 border-2 border-[#222] rounded-full flex items-start justify-center p-2">
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="w-1.5 h-1.5 bg-[#39ff14] rounded-full"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
