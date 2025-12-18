'use client';
import Button from '@/components/Button';
import { GENERAL_INFO } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useEffect, useState } from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Banner = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // Mouse parallax effect
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 20;
            const y = (e.clientY / window.innerHeight - 0.5) * 20;
            setMousePosition({ x, y });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 70%',
                    end: 'bottom 10%',
                    scrub: 1,
                },
            });

            tl.fromTo(
                '.slide-up-and-fade',
                { y: 0 },
                { y: -150, opacity: 0, stagger: 0.02 },
            );
        },
        { scope: containerRef },
    );

    return (
        <section className="relative overflow-hidden" id="banner">
            <div
                className="container h-[100svh] min-h-[530px] max-md:pb-10 flex justify-between items-center max-md:flex-col"
                ref={containerRef}
            >
                <div
                    className="max-md:grow max-md:flex flex-col justify-center items-start max-w-[544px] transition-transform duration-200 ease-out"
                    style={{
                        transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
                    }}
                >
                    <h1 className="banner-title slide-up-and-fade leading-[.95] text-5xl sm:text-[70px] md:text-[80px] font-anton">
                        {/* Gradient text effect */}
                        <span className="bg-gradient-to-r from-primary via-green-400 to-primary bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent">
                            SOFTWARE
                        </span>
                        <br /> <span className="ml-4">ENGINEER</span>
                    </h1>
                    <p className="banner-description slide-up-and-fade mt-6 text-lg text-muted-foreground">
                        Hi! I&apos;m{' '}
                        <span className="font-medium text-foreground">
                            Keshav Dadhich
                        </span>
                        . A Computer Science undergraduate at VIT Vellore building
                        scalable systems in AI/ML, Blockchain, and Full-Stack
                        Development.
                    </p>
                    <Button
                        as="link"
                        target="_blank"
                        rel="noopener noreferrer"
                        href={`mailto:${GENERAL_INFO.email}`}
                        variant="primary"
                        className="mt-9 banner-button slide-up-and-fade"
                    >
                        Get in Touch
                    </Button>
                </div>

                <div
                    className="md:absolute bottom-[10%] right-[4%] flex md:flex-col gap-4 md:gap-8 text-center md:text-right transition-transform duration-200 ease-out"
                    style={{
                        transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px)`,
                    }}
                >
                    <div className="slide-up-and-fade">
                        <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                            VIT &apos;27
                        </h5>
                        <p className="text-muted-foreground">
                            B.Tech CSE
                        </p>
                    </div>
                    <div className="slide-up-and-fade">
                        <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                            2x
                        </h5>
                        <p className="text-muted-foreground">
                            Hackathon Winner
                        </p>
                    </div>
                    <div className="slide-up-and-fade">
                        <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                            1
                        </h5>
                        <p className="text-muted-foreground">Patent Filed</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
