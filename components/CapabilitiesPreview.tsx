"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import BrandIcon from "@/components/BrandIcon";

export default function CapabilitiesPreview() {
    const [hoveredCapability, setHoveredCapability] = useState<string | null>(null);

    const capabilities = [
        {
            title: "Research",
            description: "Insight-driven understanding. I define problems by observing real usage patterns, not just guessing.",
            tools: ["Miro", "Maze", "FigJam", "Google Forms", "Hotjar"]
        },
        {
            title: "Design",
            description: "Clear, intuitive, accessible interfaces. My systems are built to scale and remain calm under complexity.",
            tools: ["Figma", "Canva", "Adobe XD", "CSS"]
        },
        {
            title: "Development",
            description: "Structured and practical implementation. I write semantic, clean code that considers the future maintainer.",
            tools: ["HTML", "JavaScript", "React", "Node.js", "Python", "MongoDB", "Express"]
        },
        {
            title: "Testing",
            description: "Validation through real usage. I believe accessibility and reliability are non-negotiable baselines.",
            tools: ["Maze", "Hotjar", "GitHub", "Manual Testing"]
        }
    ];

    return (
        <section id="capabilities" className="min-h-[calc(100dvh-64px)] flex flex-col justify-center py-24 px-6 md:px-12 max-w-[1120px] mx-auto w-full">
            <div className="flex justify-between items-end mb-16">
                <h2 className="text-[48px] leading-[56px] font-medium w-fit">
                    Capabilities
                </h2>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {capabilities.map((cap) => (
                    <Link
                        href="/capabilities"
                        key={cap.title}
                        className="block focus:outline-none h-full"
                        onMouseEnter={() => setHoveredCapability(cap.title)}
                        onMouseLeave={() => setHoveredCapability(null)}
                    >
                        <div className="p-6 min-h-[180px] h-full border border-white/5 rounded-[24px] hover:border-primary/50 transition-all duration-500 bg-card group flex flex-col relative overflow-hidden shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(111,174,255,0.3)]">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-[24px] leading-[32px] font-medium group-hover:text-primary transition-colors">{cap.title}</h3>
                                <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />
                            </div>

                            <div className="flex-grow relative">
                                {/* Default Description - Anchored to top */}
                                <div className={`absolute top-0 left-0 w-full transition-all duration-300 ease-in-out ${hoveredCapability === cap.title ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
                                    <p className="text-[15px] leading-[24px] text-muted-foreground">
                                        {cap.description}
                                    </p>
                                </div>

                                {/* Hover Tools Grid - Centered in remaining space */}
                                <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out px-2 ${hoveredCapability === cap.title ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                                    <div className="flex flex-wrap gap-3 justify-center">
                                        {cap.tools.map((tool) => (
                                            <div
                                                key={tool}
                                                className="p-3 bg-background/90 backdrop-blur-sm border border-white/10 rounded-xl shadow-lg flex items-center justify-center group/icon"
                                                title={tool}
                                            >
                                                <BrandIcon name={tool} className="w-6 h-6" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
