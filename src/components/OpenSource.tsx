"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaGithub } from "react-icons/fa";

const contributions = [
    {
        name: "OpenAlgo",
        description: "Backend Contributor - Architected real-time alert engine for market price monitoring. Fixed critical thread-safety issues and developed defensive REST endpoints.",
        tech: ["Python", "SQLAlchemy", "Flask"],
        highlights: [
            "Real-Time Alert Engine for live market price monitoring",
            "Concurrency optimization - fixed thread-safety crash in Telegram service",
            "O(1) crossover detection algorithms for bi-directional price moves",
        ],
    },
    {
        name: "GridCoin-Research",
        description: "C++/Qt Contributor - Engineered 'Subtract fee from amount' logic with iterative fee deduction. Enhanced Qt frontend with UI toggle for fee models.",
        tech: ["C++", "Qt"],
        highlights: [
            "Fee Logic Engine with iterative network fee deduction",
            "Frontend Integration with UI toggle for fee model selection",
            "State Persistence for fee-subtraction preferences",
        ],
    },
    {
        name: "awesome-react",
        description: "Library Integration - Integrated shadcn-ui recognizing its rapid adoption. Authored technical descriptions and modernized the UI Components index.",
        tech: ["Documentation", "React"],
        highlights: [
            "Integrated shadcn-ui as leading accessible design solution",
            "Technical documentation for Radix UI and Tailwind CSS architecture",
            "Modernized index reflecting industry shift to headless libraries",
        ],
    },
];

export default function OpenSource() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="py-32 px-6" ref={ref}>
            <div className="max-w-7xl mx-auto">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="section-heading"
                >
                    Open Source
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-3xl md:text-4xl font-bold mb-12"
                >
                    Contributions
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-6">
                    {contributions.map((contrib, index) => (
                        <motion.div
                            key={contrib.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                            className="bg-[#111] border border-[#222] rounded-xl p-6 hover:border-[#39ff14]/50 transition-all group"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-[#39ff14]/10 rounded-lg flex items-center justify-center">
                                    <FaGithub className="text-[#39ff14]" size={18} />
                                </div>
                                <h3 className="text-lg font-bold text-white group-hover:text-[#39ff14] transition-colors">
                                    {contrib.name}
                                </h3>
                            </div>

                            <p className="text-[#888] text-sm mb-4 leading-relaxed">
                                {contrib.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {contrib.tech.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-2 py-1 bg-[#0a0a0a] rounded text-xs text-[#39ff14]"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <ul className="space-y-2">
                                {contrib.highlights.map((highlight, i) => (
                                    <li key={i} className="text-[#888] text-xs flex items-start gap-2">
                                        <span className="text-[#39ff14] mt-0.5">•</span>
                                        {highlight}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
