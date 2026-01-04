"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
    {
        id: "hungry-hub",
        title: "Hungry Hub",
        category: "Food Delivery",
        role: "UI/UX Case Study",
        description: "Food delivery focused on speed, clarity, and hunger-driven decisions.",
        image: "/images/projects/hungry-hub.jpg",
        link: "/projects/hungry-hub",
    },
    {
        id: "build-bond",
        title: "Build Bond",
        category: "Family App",
        role: "UI/UX Case Study",
        description: "Strengthening parent-child emotional connection through shared activities.",
        image: "/images/projects/build-bond-mockup.png",
        link: "/projects/build-bond",
    },
    {
        id: "krishi-sakhi",
        title: "Krishi Sakhi",
        category: "AgriTech",
        role: "Frontend UI",
        description: "AI farming assistant providing market prices and weather guidance.",
        image: "/images/projects/krishi-sakhi-mockup.png",
        link: "/projects/krishi-sakhi",
    },
    {
        id: "pm-ajay",
        title: "PM-AJAY Portal",
        category: "GovTech",
        role: "UI Contribution",
        description: "Government dashboard for monitoring fund allocation and social progress.",
        image: "/images/projects/pm-ajay-mockup.png",
        link: "/projects/pm-ajay",
    },
    {
        id: "portfolio",
        title: "Personal Portfolio",
        category: "Product Design",
        role: "Case Study",
        description: "A calm, structured digital garden built for recruiters and peers.",
        image: "/images/projects/personal-portfolio-mockup.png",
        link: "/projects/personal-portfolio",
    },
];

export default function ProjectCarousel() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const scrollAmount = 404; // Card width (380) + gap (24)
            scrollRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="relative group/carousel">
            {/* Left Navigation Button */}
            <button
                onClick={() => scroll("left")}
                className="absolute left-[-20px] md:left-[-40px] top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-background border border-white/5 rounded-full flex items-center justify-center text-foreground hover:scale-110 active:scale-95 transition-all shadow-sm opacity-0 group-hover/carousel:opacity-100 disabled:opacity-0 focus:opacity-100"
                aria-label="Scroll left"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Right Navigation Button */}
            <button
                onClick={() => scroll("right")}
                className="absolute right-[-20px] md:right-[-40px] top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-background border border-white/5 rounded-full flex items-center justify-center text-foreground hover:scale-110 active:scale-95 transition-all shadow-sm opacity-0 group-hover/carousel:opacity-100 disabled:opacity-0 focus:opacity-100"
                aria-label="Scroll right"
            >
                <ChevronRight className="w-6 h-6" />
            </button>

            {/* Scrollable Container */}
            <div
                ref={scrollRef}
                className="flex gap-6 overflow-x-auto pb-12 -mx-6 px-6 md:-mx-12 md:px-12 scrollbar-none snap-x snap-mandatory scroll-smooth"
            >
                {projects.map((project) => (
                    <Link
                        key={project.id}
                        href={project.link}
                        className="flex-shrink-0 w-[320px] md:w-[380px] bg-card rounded-[24px] p-8 border border-white/10 flex flex-col transition-all duration-500 shadow-md hover:shadow-[0_25px_50px_-12px_rgba(111,174,255,0.4)] hover:border-primary/50 group snap-center"
                    >
                        <div className="relative aspect-square w-full mb-8 rounded-[16px] overflow-hidden bg-background">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="bg-gradient-to-r from-[#0122a8] to-[#6FAEFF] bg-clip-text text-transparent text-[12px] font-bold uppercase tracking-wider block mb-2 w-fit">
                                {project.category}
                            </span>
                            <h3 className="text-[24px] font-medium mb-2 group-hover:text-primary transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-[15px] text-muted-foreground leading-relaxed line-clamp-2 min-h-[48px]">
                                {project.description}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
