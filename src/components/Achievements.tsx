"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaTrophy, FaFileAlt, FaCertificate, FaMedal } from "react-icons/fa";

const achievements = [
    {
        icon: FaFileAlt,
        title: "Patent Filed",
        description: "Intellectual Property filed for GuardianAI (Proactive Personal Safety System)",
        type: "innovation",
    },
    {
        icon: FaTrophy,
        title: "1st Prize - Vitality'25",
        description: "National Level Hackathon conducted by GeeksForGeeks",
        type: "award",
    },
    {
        icon: FaTrophy,
        title: "1st Prize - InnovAct-2025",
        description: "Hackathon at VIT Vellore",
        type: "award",
    },
    {
        icon: FaCertificate,
        title: "Oracle Cloud Certified",
        description: "OCI 2025 Certified Generative AI Professional",
        type: "certification",
    },
    {
        icon: FaMedal,
        title: "Top 1% - DevJams'25",
        description: "Competing against 4000+ participants",
        type: "award",
    },
];

export default function Achievements() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="contact" className="py-32 px-6 bg-[#0a0a0a]" ref={ref}>
            <div className="max-w-7xl mx-auto">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="section-heading"
                >
                    Achievements
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-3xl md:text-4xl font-bold mb-12"
                >
                    Recognition
                </motion.h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {achievements.map((achievement, index) => (
                        <motion.div
                            key={achievement.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                            className="bg-[#111] border border-[#222] rounded-xl p-6 hover:border-[#39ff14]/50 transition-all group"
                        >
                            <div className="w-12 h-12 bg-[#39ff14]/10 rounded-lg flex items-center justify-center mb-4">
                                <achievement.icon className="text-[#39ff14]" size={20} />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#39ff14] transition-colors">
                                {achievement.title}
                            </h3>
                            <p className="text-[#888] text-sm leading-relaxed">
                                {achievement.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
