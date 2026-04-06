'use client';
import SectionTitle from '@/components/SectionTitle';
import { ACHIEVEMENTS } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Hackathons = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const hackathons = ACHIEVEMENTS.filter(a => a.title.includes('Prize'));
    const patent = ACHIEVEMENTS.find(a => a.title.includes('Patent'));

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

            tl.from('.hackathon-item', {
                y: 50,
                opacity: 0,
                stagger: 0.2,
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
        <section className="py-20 lg:py-32" id="hackathons">
            <div className="container" ref={containerRef}>
                <SectionTitle title="Hackathons & Patent" />

                <div className="grid gap-10">
                    {patent && (
                        <div className="hackathon-item">
                            <p className="text-3xl md:text-4xl lg:text-5xl font-anton leading-none mb-2.5">
                                {patent.title}
                            </p>
                            <p className="text-lg md:text-xl text-muted-foreground border-l-2 border-primary pl-4">
                                {patent.description}
                            </p>
                        </div>
                    )}
                    {hackathons.map((hackathon) => (
                        <div key={hackathon.title} className="hackathon-item">
                            <p className="text-3xl md:text-4xl lg:text-5xl font-anton leading-none mb-2.5">
                                {hackathon.title}
                            </p>
                            <p className="text-lg md:text-xl text-muted-foreground border-l-2 border-primary/40 pl-4">
                                {hackathon.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hackathons;
