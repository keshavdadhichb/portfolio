'use client';
import SectionTitle from '@/components/SectionTitle';
import { PROJECTS } from '@/lib/data';
import { cn } from '@/lib/utils';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';
import React, { useRef, useState } from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const ProjectList = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [hoveredProject, setHoveredProject] = useState<string | null>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top bottom',
                    end: 'top 80%',
                    toggleActions: 'restart none none reverse',
                    scrub: 1,
                },
            });

            tl.from(containerRef.current, {
                y: 150,
                opacity: 0,
            });
        },
        { scope: containerRef },
    );

    return (
        <section className="pb-section" id="selected-projects">
            <div className="container">
                <SectionTitle title="SELECTED PROJECTS" />

                <div className="group/projects relative" ref={containerRef}>
                    <div className="flex flex-col max-md:gap-10">
                        {PROJECTS.map((project, index) => (
                            <Link
                                href={project.liveUrl || project.sourceCode || '#'}
                                target="_blank"
                                rel="noopener noreferrer"
                                key={project.slug}
                                className={cn(
                                    'project-item group leading-none py-5 md:border-b first:!pt-0 last:pb-0 last:border-none transition-all duration-300',
                                    hoveredProject && hoveredProject !== project.slug
                                        ? 'opacity-30'
                                        : 'opacity-100'
                                )}
                                onMouseEnter={() => setHoveredProject(project.slug)}
                                onMouseLeave={() => setHoveredProject(null)}
                            >
                                <div className="flex gap-2 md:gap-5">
                                    <div className="font-anton text-muted-foreground">
                                        _{(index + 1).toString().padStart(2, '0')}.
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-4">
                                            <h4 className="text-3xl xs:text-4xl md:text-5xl lg:text-6xl font-anton transition-all duration-500 bg-gradient-to-r from-primary to-foreground from-[50%] to-[50%] bg-[length:200%] bg-right bg-clip-text text-transparent group-hover:bg-left">
                                                {project.title}
                                            </h4>
                                            <span className="text-foreground opacity-0 group-hover:opacity-100 transition-all">
                                                <ExternalLink size={24} />
                                            </span>
                                        </div>

                                        {project.award && (
                                            <p className="text-primary text-sm mt-2">
                                                {project.award}
                                            </p>
                                        )}

                                        <div className="mt-3 flex flex-wrap gap-3 text-muted-foreground text-xs">
                                            {project.techStack.slice(0, 4).map((tech, idx, arr) => (
                                                <div className="gap-3 flex items-center" key={tech}>
                                                    <span>{tech}</span>
                                                    {idx !== arr.length - 1 && (
                                                        <span className="inline-block size-1.5 rounded-full bg-background-light"></span>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectList;
