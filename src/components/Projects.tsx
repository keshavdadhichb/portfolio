"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaGithub, FaExternalLinkAlt, FaTrophy } from "react-icons/fa";

const projects = [
    {
        number: "01",
        name: "GuardianAI",
        description: "Proactive Personal Safety System with Multi-Modal AI for distress detection. Features autonomous threat evaluation, blockchain evidence logging, and real-time emergency alerts.",
        tags: ["TensorFlow", "Node.js", "AWS S3", "Solidity", "Polygon", "Twilio"],
        github: "https://github.com/keshavdadhichb/GuardianAI",
        live: "https://guardianaipresentation.vercel.app",
        award: "1st Prize - InnovAct-2025 Hackathon at VIT | Patent Filed",
    },
    {
        number: "02",
        name: "Citadel",
        description: "Zero-Knowledge Loan Verification Protocol with hybrid microservices architecture. Features privacy-first NLP engine for PII redaction and immutable blockchain audit trail.",
        tags: ["Java Spring Boot", "Python FastAPI", "Microsoft Presidio", "Ethereum", "React", "Tailwind"],
        github: "https://github.com/keshavdadhichb/citadel",
        live: "https://v0-citadel-scrollytelling-experienc.vercel.app",
        award: "1st Prize - Vitality'25 National Level Hackathon by GeeksForGeeks",
    },
    {
        number: "03",
        name: "Unidash",
        description: "Peer-to-Peer Delivery Platform with real-time tracking. Robust PostgreSQL backend with secure JWT authentication and automated CI/CD deployment pipelines.",
        tags: ["Node.js", "PostgreSQL", "React", "JWT", "Vercel", "Heroku"],
        github: "https://github.com/keshavdadhichb/UniDash-Backend",
        live: "https://uni-dash-fe.vercel.app/",
        award: null,
    },
    {
        number: "04",
        name: "1up",
        description: "Community Book-Lending Platform with unique terminal-style UI. Unified REST API with Google OAuth 2.0 for university domain authentication. 200+ active users.",
        tags: ["Node.js", "Express", "PostgreSQL", "Prisma", "React", "OAuth 2.0"],
        github: "https://github.com/keshavdadhichb/lup",
        live: "https://1upweb.in",
        award: "200+ Active Users",
    },
];

export default function Projects() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="projects" className="py-32 px-6 bg-[#0a0a0a]" ref={ref}>
            <div className="max-w-7xl mx-auto">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="section-heading"
                >
                    Projects
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-3xl md:text-4xl font-bold mb-12"
                >
                    Selected Work
                </motion.h2>

                {/* Projects List */}
                <div className="projects-container space-y-0">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                            className="project-item border-t border-[#222] py-8 group"
                        >
                            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                                {/* Left - Number and Title */}
                                <div className="flex items-start gap-6">
                                    <span className="text-[#39ff14] font-mono text-sm">_{project.number}</span>
                                    <div>
                                        <div className="flex items-center gap-3 mb-2">
                                            <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-[#39ff14] transition-colors">
                                                {project.name}
                                            </h3>
                                            <div className="flex gap-2">
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-[#888] hover:text-[#39ff14] transition-colors"
                                                    aria-label="GitHub"
                                                >
                                                    <FaGithub size={18} />
                                                </a>
                                                <a
                                                    href={project.live}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-[#888] hover:text-[#39ff14] transition-colors"
                                                    aria-label="Live Demo"
                                                >
                                                    <FaExternalLinkAlt size={16} />
                                                </a>
                                            </div>
                                        </div>
                                        {project.award && (
                                            <p className="text-[#39ff14] text-sm flex items-center gap-2 mb-3">
                                                <FaTrophy size={12} />
                                                {project.award}
                                            </p>
                                        )}
                                        <p className="text-[#888] text-sm max-w-xl mb-4 leading-relaxed">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-3 py-1 bg-[#111] border border-[#222] rounded-full text-xs text-[#888]"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
