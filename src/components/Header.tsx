"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { HiMenu, HiX } from "react-icons/hi";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

const socialLinks = [
    { icon: FaGithub, href: "https://github.com/keshavdadhichb", label: "GitHub" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/keshav-dadhich-2652611a9/", label: "LinkedIn" },
    { icon: SiLeetcode, href: "https://leetcode.com/u/keshavdadhichb/", label: "LeetCode" },
    { icon: FaInstagram, href: "https://instagram.com/keshavdb", label: "Instagram" },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Desktop Header */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-[#222]">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="#home" className="text-xl font-bold gradient-text">
                        KD
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm text-[#888] hover:text-white transition-colors link-underline"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Social Links - Desktop */}
                    <div className="hidden md:flex items-center gap-4">
                        {socialLinks.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#888] hover:text-[#39ff14] transition-colors"
                                aria-label={social.label}
                            >
                                <social.icon size={18} />
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white p-2"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
                    </button>
                </div>
            </header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-[#0a0a0a] pt-20 md:hidden"
                    >
                        <nav className="flex flex-col items-center gap-8 py-12">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        className="text-2xl font-medium text-white hover:text-[#39ff14] transition-colors"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <div className="flex gap-6 mt-8">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#888] hover:text-[#39ff14] transition-colors"
                                        aria-label={social.label}
                                    >
                                        <social.icon size={24} />
                                    </a>
                                ))}
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Vertical Email - Desktop Only */}
            <div className="hidden lg:flex fixed left-6 bottom-0 flex-col items-center gap-6 z-50">
                <a
                    href="mailto:keshavdadhichb7@gmail.com"
                    className="text-xs text-[#888] hover:text-[#39ff14] transition-colors tracking-widest"
                    style={{ writingMode: "vertical-rl" }}
                >
                    keshavdadhichb7@gmail.com
                </a>
                <div className="w-[1px] h-24 bg-[#222]" />
            </div>
        </>
    );
}
