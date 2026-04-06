'use client';
import SectionTitle from '@/components/SectionTitle';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';
import Link from 'next/link';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Startup = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                    end: 'bottom 50%',
                    toggleActions: 'restart none none reverse',
                    scrub: 1,
                },
            });

            tl.from('.startup-item', {
                y: 50,
                opacity: 0,
            });
        },
        { scope: containerRef },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 50%',
                    end: 'bottom 20%',
                    scrub: 1,
                },
            });

            tl.to(containerRef.current, {
                y: -150,
                opacity: 0,
            });
        },
        { scope: containerRef },
    );

    return (
        <section className="py-20 lg:py-32" id="startup">
            <div className="container" ref={containerRef}>
                <SectionTitle title="Startup" />

                <div className="startup-item">
                    <Link
                        href="https://www.snapcatalog.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-block"
                    >
                        <p className="text-3xl md:text-4xl lg:text-5xl font-anton leading-none mb-2.5 transition-all duration-500 bg-gradient-to-r from-primary to-foreground from-[50%] to-[50%] bg-[length:200%] bg-right bg-clip-text text-transparent group-hover:bg-left">
                            SnapCatalog
                        </p>
                    </Link>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mt-4">
                        A catalog generation platform where businesses create professional catalogs and fashion editorials for marketing campaigns, prints, and websites. Currently operating as a live product generating side revenue.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Startup;
