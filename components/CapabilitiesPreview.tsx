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
            tools: ["Miro", "Maze", "FigJam", "Google Forms"]
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
            tools: ["Maze", "GitHub", "Manual Testing"]
        }
    ];

    return (
        <section id="capabilities" className="min-h-[calc(100dvh-64px)] flex flex-col justify-center py-24 px-6 md:px-12 max-w-[1120px] mx-auto w-full">
            <div className="flex justify-between items-end mb-16">
                <h2 className="text-[48px] leading-[56px] font-medium w-fit">
                    Capabilities
                </h2>

            </div>

            <div className="flex flex-col gap-12 md:gap-16">
                {capabilities.map((cap) => (
                    <Link
                        href="/capabilities"
                        key={cap.title}
                        className="group block"
                    >
                        <div className="grid grid-cols-2 gap-4 md:gap-12 items-start md:items-center">
                            {/* Left: Content */}
                            <div className="flex flex-col gap-2 md:gap-4">
                                <h3 className="text-[20px] md:text-[28px] font-semibold md:font-medium group-hover:text-primary transition-colors flex items-center gap-2">
                                    {cap.title}
                                    <ArrowUpRight className="w-4 h-4 md:w-5 h-5 text-muted-foreground opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                                </h3>
                                <p className="text-[14px] md:text-[16px] leading-[1.5] text-muted-foreground/90 font-normal md:font-light max-w-sm">
                                    {cap.description}
                                </p>
                            </div>

                            {/* Right: Tools Icons */}
                            <div className="flex flex-wrap gap-2 md:gap-3 justify-end md:justify-start">
                                {cap.tools.map((tool) => (
                                    <div
                                        key={tool}
                                        className="w-10 h-10 md:w-12 md:h-12 bg-surface/50 backdrop-blur-sm border border-border/30 rounded-xl flex items-center justify-center shadow-sm group-hover:border-primary/30 transition-colors"
                                        title={tool}
                                    >
                                        <BrandIcon name={tool} className="w-5 h-5 md:w-6 h-6" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
