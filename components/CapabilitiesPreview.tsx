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
            tools: ["Miro", "Maze", "FigJam", "Google Forms", "Excel Sheets", "Hotjar"]
        },
        {
            title: "Design",
            description: "Clear, intuitive, accessible interfaces. My systems are built to scale and remain calm under complexity.",
            tools: ["Figma", "Canva", "Adobe XD", "Sketch"]
        },
        {
            title: "Development",
            description: "Structured and practical implementation. I write semantic, clean code that considers the future maintainer.",
            tools: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Python", "Java", "C", "MERN Stack"]
        },
        {
            title: "Testing",
            description: "Validation through real usage. I believe accessibility and reliability are non-negotiable baselines.",
            tools: ["Maze", "Hotjar", "Manual Testing"]
        }
    ];

    return (
        <section id="capabilities" className="min-h-[calc(100dvh-64px)] flex flex-col justify-center py-24 px-6 md:px-12 max-w-[1120px] mx-auto w-full">
            <div className="flex justify-between items-end mb-16">
                <h2 className="text-[48px] leading-[56px] font-medium">Capabilities</h2>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {capabilities.map((cap) => (
                    <Link
                        href="/capabilities"
                        key={cap.title}
                        className="block focus:outline-none"
                        onMouseEnter={() => setHoveredCapability(cap.title)}
                        onMouseLeave={() => setHoveredCapability(null)}
                    >
                        <div className="p-10 min-h-[240px] border border-border rounded-[24px] hover:border-primary/50 transition-all duration-300 bg-surface/50 backdrop-blur-sm group flex flex-col justify-between relative overflow-hidden shadow-sm hover:shadow-md">
                            <div className="flex justify-between items-start">
                                <h3 className="text-[28px] leading-[36px] font-medium mb-6 group-hover:text-primary transition-colors">{cap.title}</h3>
                                <ArrowUpRight className="w-6 h-6 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />
                            </div>

                            <div className="relative">
                                {/* Default Description */}
                                <div className={`transition-all duration-300 ease-in-out ${hoveredCapability === cap.title ? 'opacity-0 translate-y-4 absolute inset-0' : 'opacity-100 translate-y-0 relative'}`}>
                                    <p className="text-[18px] leading-[28px] text-muted-foreground">
                                        {cap.description}
                                    </p>
                                </div>

                                {/* Hover Tools Grid */}
                                <div className={`transition-all duration-300 ease-in-out ${hoveredCapability === cap.title ? 'opacity-100 translate-y-0 relative' : 'opacity-0 translate-y-4 absolute inset-0 pointer-events-none'}`}>
                                    <div className="flex flex-wrap gap-2">
                                        {cap.tools.map((tool) => (
                                            <span
                                                key={tool}
                                                className="px-3 py-1.5 pl-2 bg-background/80 border border-border rounded-lg text-[14px] font-medium text-foreground whitespace-nowrap shadow-sm flex items-center gap-2"
                                            >
                                                <BrandIcon name={tool} className="w-4 h-4" />
                                                {tool}
                                            </span>
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
