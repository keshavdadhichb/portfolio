'use client';
import SectionTitle from '@/components/SectionTitle';
import { EDUCATION } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Education = () => {
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

            tl.from('.education-item', {
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
        <section className="py-20 lg:py-32" id="education">
            <div className="container" ref={containerRef}>
                <SectionTitle title="Education" />

                <div className="education-item">
                    <p className="text-lg md:text-xl text-muted-foreground">
                        {EDUCATION.institution} • {EDUCATION.location}
                    </p>
                    <p className="text-3xl md:text-4xl lg:text-5xl font-anton leading-none mt-3.5 mb-2.5">
                        {EDUCATION.degree}
                    </p>
                    <p className="text-base md:text-lg text-primary mb-4">
                        {EDUCATION.duration}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Education;
