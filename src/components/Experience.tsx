"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaBriefcase, FaExternalLinkAlt } from "react-icons/fa";

const experiences = [
    {
        company: "DataClap Digital Ventures LLP",
        location: "Coimbatore, India",
        role: "AI/ML Engineer Intern",
        period: "May 2025 – Jun 2025",
        certificateUrl: "https://drive.google.com/file/d/1gxe412y8V3BVM8D_T_wiG6jEjee_Kx2i/view?usp=drive_link",
        highlights: [
            "Engineered high-accuracy OCR data extraction pipelines using Tesseract and EasyOCR, optimizing character recognition rates by 20%",
            "Architected real-time computer vision applications utilizing OpenCV and MediaPipe for gesture recognition and posture analysis",
            "Orchestrated annotation and management of large-scale image datasets using Voxel51 and CVAT",
            "Collaborated in Agile environment, translating client requirements into deployable technical solutions",
        ],
    },
];

const education = [
    {
        institution: "Vellore Institute of Technology",
        location: "Vellore, India",
        degree: "Bachelor of Technology in Computer Science and Engineering",
        period: "2023 – 2027",
    },
];

const leadership = [
    {
        organization: "Association For Computing Machinery (ACM)",
        role: "Senior Core Member",
        period: "Apr 2024 – Present",
        highlights: [
            "Contributed to Cryptic Hunt 3.0, assisting in logistics for 500+ participants",
            "Coordinated the Reverse Coding event",
            "Supported sponsorship initiatives for chapter activities",
        ],
    },
    {
        organization: "Indian Society for Technical Education (ISTE)",
        role: "Core Member (ML and IoT Domains)",
        period: "May 2024 – Dec 2024",
        highlights: [
            "Collaborated on multidisciplinary technical projects in ML and IoT",
            "Actively engaged in internal hackathons and workshops",
        ],
    },
    {
        organization: "Team Garuda",
        role: "Founding Member",
        period: "Mar 2024 – Jun 2024",
        highlights: [
            "Contributed to innovative engineering solutions as a founding member",
            "Worked on hands-on computer and electrical projects",
        ],
    },
];

export default function Experience() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="experience" className="py-32 px-6" ref={ref}>
            <div className="max-w-7xl mx-auto">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="section-heading"
                >
                    Experience
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-3xl md:text-4xl font-bold mb-12"
                >
                    My Journey
                </motion.h2>

                {/* Work Experience */}
                <div className="space-y-8 mb-16">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.company}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                            className="bg-[#111] border border-[#222] rounded-xl p-6 hover:border-[#39ff14]/50 transition-all"
                        >
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-[#39ff14]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <FaBriefcase className="text-[#39ff14]" size={20} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                                        <p className="text-[#888]">{exp.company} • {exp.location}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="text-sm text-[#888] whitespace-nowrap">{exp.period}</span>
                                    {exp.certificateUrl && (
                                        <a
                                            href={exp.certificateUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[#39ff14] hover:underline text-sm flex items-center gap-1"
                                        >
                                            Certificate <FaExternalLinkAlt size={10} />
                                        </a>
                                    )}
                                </div>
                            </div>
                            <ul className="space-y-2 ml-16">
                                {exp.highlights.map((highlight, i) => (
                                    <li key={i} className="text-[#888] text-sm flex items-start gap-2">
                                        <span className="text-[#39ff14] mt-1.5">•</span>
                                        {highlight}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Education */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mb-16"
                >
                    <h3 className="text-xl font-bold mb-6 text-white">Education</h3>
                    {education.map((edu) => (
                        <div
                            key={edu.institution}
                            className="bg-[#111] border border-[#222] rounded-xl p-6"
                        >
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                                <div>
                                    <h4 className="text-lg font-semibold text-white">{edu.institution}</h4>
                                    <p className="text-[#888]">{edu.degree}</p>
                                </div>
                                <span className="text-sm text-[#888]">{edu.period}</span>
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Leadership */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <h3 className="text-xl font-bold mb-6 text-white">Leadership & Activities</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        {leadership.map((item, index) => (
                            <motion.div
                                key={item.organization}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                                className="bg-[#111] border border-[#222] rounded-xl p-6 hover:border-[#39ff14]/50 transition-all"
                            >
                                <h4 className="text-lg font-semibold text-white mb-1">{item.organization}</h4>
                                <p className="text-[#39ff14] text-sm mb-1">{item.role}</p>
                                <p className="text-[#888] text-xs mb-3">{item.period}</p>
                                <ul className="space-y-1">
                                    {item.highlights.slice(0, 2).map((h, i) => (
                                        <li key={i} className="text-[#888] text-xs flex items-start gap-2">
                                            <span className="text-[#39ff14] mt-0.5">•</span>
                                            {h}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
