"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="about" className="py-32 px-6" ref={ref}>
            <div className="max-w-7xl mx-auto">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="section-heading"
                >
                    About Me
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-12 max-w-4xl"
                >
                    I build robust, scalable systems focused on{" "}
                    <span className="text-[#39ff14]">solving real-world problems</span>{" "}
                    through technology.
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h3 className="text-xl font-semibold mb-4 text-white">This is me.</h3>
                        <p className="text-[#888] leading-relaxed mb-6">
                            Hi, I&apos;m Keshav. A Computer Science undergraduate at{" "}
                            <span className="text-white">VIT Vellore</span> with a strong foundation in
                            full-stack engineering, blockchain protocols, and AI systems.
                        </p>
                        <p className="text-[#888] leading-relaxed">
                            I&apos;m passionate about building technology that makes a difference.
                            From winning national hackathons to filing a patent for a safety system,
                            I focus on creating solutions that are both innovative and impactful.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <h3 className="text-xl font-semibold mb-4 text-white">What I do.</h3>
                        <p className="text-[#888] leading-relaxed mb-6">
                            I specialize in architecting end-to-end solutions that leverage cutting-edge
                            technologies. My approach focuses on creating scalable, high-performing systems
                            tailored to both technical requirements and real user needs.
                        </p>
                        <p className="text-[#888] leading-relaxed">
                            By prioritizing clean architecture, security, and performance, I strive to
                            deliver solutions that not only work but excel in production environments.
                        </p>
                    </motion.div>
                </div>

                {/* Languages */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-12 pt-8 border-t border-[#222]"
                >
                    <p className="text-sm text-[#888] mb-4">Languages</p>
                    <div className="flex flex-wrap gap-4">
                        {["English (Fluent)", "Hindi (Native)", "Tamil (Intermediate)", "French (Basic)"].map((lang) => (
                            <span key={lang} className="px-4 py-2 bg-[#111] border border-[#222] rounded-full text-sm text-white">
                                {lang}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
