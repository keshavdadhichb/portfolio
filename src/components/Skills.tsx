"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
    FaJava, FaPython, FaNodeJs, FaDocker, FaGit, FaReact, FaAws, FaCloud, FaBrain, FaDatabase, FaCube
} from "react-icons/fa";
import {
    SiCplusplus, SiDjango, SiSpringboot, SiPostgresql, SiMongodb, SiTensorflow, SiOpencv,
    SiSolidity, SiEthereum, SiNextdotjs, SiTypescript
} from "react-icons/si";

const skillCategories = [
    {
        name: "Web & Backend",
        skills: [
            { name: "Java", icon: FaJava },
            { name: "Python", icon: FaPython },
            { name: "C++", icon: SiCplusplus },
            { name: "Node.js", icon: FaNodeJs },
            { name: "Django", icon: SiDjango },
            { name: "Spring Boot", icon: SiSpringboot },
            { name: "PostgreSQL", icon: SiPostgresql },
            { name: "MongoDB", icon: SiMongodb },
            { name: "React", icon: FaReact },
            { name: "Next.js", icon: SiNextdotjs },
            { name: "TypeScript", icon: SiTypescript },
        ],
    },
    {
        name: "AI & ML",
        skills: [
            { name: "TensorFlow", icon: SiTensorflow },
            { name: "OpenCV", icon: SiOpencv },
            { name: "MediaPipe", icon: FaBrain },
            { name: "Scikit-learn", icon: FaBrain },
            { name: "Generative AI", icon: FaBrain },
            { name: "RAG Architectures", icon: FaBrain },
        ],
    },
    {
        name: "Blockchain & Web3",
        skills: [
            { name: "Solidity", icon: SiSolidity },
            { name: "Ethereum", icon: SiEthereum },
            { name: "Smart Contracts", icon: FaCube },
            { name: "Web3.js", icon: SiEthereum },
            { name: "Hardhat", icon: FaCube },
            { name: "Polygon", icon: SiEthereum },
        ],
    },
    {
        name: "Cloud & DevOps",
        skills: [
            { name: "AWS", icon: FaAws },
            { name: "Docker", icon: FaDocker },
            { name: "Git", icon: FaGit },
            { name: "CI/CD", icon: FaCloud },
            { name: "System Design", icon: FaDatabase },
            { name: "Microservices", icon: FaCloud },
        ],
    },
];

export default function Skills() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [activeCategory, setActiveCategory] = useState("Web & Backend");

    const activeSkills = skillCategories.find((cat) => cat.name === activeCategory)?.skills || [];

    return (
        <section className="py-32 px-6 bg-[#0a0a0a]" ref={ref}>
            <div className="max-w-7xl mx-auto">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="section-heading"
                >
                    Tech Stack
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-3xl md:text-4xl font-bold mb-12"
                >
                    My Skills
                </motion.h2>

                {/* Category Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-wrap gap-4 mb-12"
                >
                    {skillCategories.map((category) => (
                        <button
                            key={category.name}
                            onClick={() => setActiveCategory(category.name)}
                            className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${activeCategory === category.name
                                    ? "bg-[#39ff14] text-black"
                                    : "bg-[#111] text-[#888] border border-[#222] hover:border-[#39ff14] hover:text-white"
                                }`}
                        >
                            {category.name}
                        </button>
                    ))}
                </motion.div>

                {/* Skills Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                >
                    {activeSkills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className="flex items-center gap-4 p-4 bg-[#111] border border-[#222] rounded-xl hover:border-[#39ff14] transition-all group"
                        >
                            <div className="w-10 h-10 bg-[#1a1a1a] rounded-lg flex items-center justify-center group-hover:bg-[#39ff14]/10 transition-colors">
                                <skill.icon className="text-[#888] group-hover:text-[#39ff14] transition-colors" size={20} />
                            </div>
                            <span className="text-sm text-white font-medium">{skill.name}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
