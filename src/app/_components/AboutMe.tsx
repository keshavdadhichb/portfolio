'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const AboutMe = () => {
    const container = React.useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-in',
                    trigger: container.current,
                    start: 'top 70%',
                    end: 'bottom bottom',
                    scrub: 0.5,
                },
            });

            tl.from('.slide-up-and-fade', {
                y: 150,
                opacity: 0,
                stagger: 0.05,
            });
        },
        { scope: container },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-out',
                    trigger: container.current,
                    start: 'bottom 50%',
                    end: 'bottom 10%',
                    scrub: 0.5,
                },
            });

            tl.to('.slide-up-and-fade', {
                y: -150,
                opacity: 0,
                stagger: 0.02,
            });
        },
        { scope: container },
    );

    return (
        <section className="pb-section" id="about-me">
            <div className="container" ref={container}>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-thin mb-20 slide-up-and-fade">
                    I build robust, scalable systems focused on solving real-world
                    problems through cutting-edge technology in AI, Blockchain,
                    and Full-Stack Development.
                </h2>

                <p className="pb-3 border-b text-muted-foreground slide-up-and-fade">
                    This is me.
                </p>

                <div className="grid md:grid-cols-12 mt-9">
                    <div className="md:col-span-5">
                        <p className="text-4xl md:text-5xl slide-up-and-fade">
                            Hi, I&apos;m Keshav.
                        </p>
                    </div>
                    <div className="md:col-span-7">
                        <div className="text-lg text-muted-foreground max-w-[450px]">
                            <p className="slide-up-and-fade mt-4 md:mt-0">
                                I&apos;m a Computer Science undergraduate at VIT Vellore
                                with a strong foundation in full-stack engineering,
                                blockchain protocols, and AI systems.
                            </p>
                            <p className="mt-3 slide-up-and-fade">
                                My approach focuses on creating scalable,
                                high-performing solutions tailored to both technical
                                requirements and real user needs. From winning national
                                hackathons to filing a patent, I focus on creating
                                solutions that are both innovative and impactful.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
