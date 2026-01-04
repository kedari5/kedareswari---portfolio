"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function DesignCarousel() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const scrollAmount = 364; // Card width (340) + gap (24)
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

            {/* Design Carousel */}
            <div
                ref={scrollRef}
                className="flex gap-8 overflow-x-auto pb-12 -mx-6 px-6 md:-mx-12 md:px-12 scrollbar-none snap-x snap-mandatory scroll-smooth"
            >
                {/* Card 1: Kedareswari Identity */}
                <Link
                    href="/design/personal-identity"
                    className="flex-shrink-0 w-[300px] md:w-[340px] bg-card rounded-[24px] p-6 border border-white/10 flex flex-col transition-all duration-500 shadow-md hover:shadow-[0_25px_50px_-12px_rgba(111,174,255,0.4)] hover:border-primary/50 group snap-center"
                >
                    <div className="relative aspect-square w-full mb-6 rounded-[24px] overflow-hidden bg-transparent border border-white/5 flex items-center justify-center">
                        <div className="relative w-3/4 h-3/4 group-hover:scale-110 transition-transform duration-500">
                            <Image
                                src="/images/design/bird-logo.png"
                                alt="Kedareswari Identity"
                                fill
                                className="object-cover rounded-[24px]"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="bg-gradient-to-r from-[#0122a8] to-[#6FAEFF] bg-clip-text text-transparent text-[11px] font-bold uppercase tracking-wider block mb-2 w-fit">Visual Identity</span>
                        <h3 className="text-[20px] font-medium mb-1 group-hover:text-primary transition-colors">Kedareswari Identity</h3>
                        <p className="text-[14px] text-muted-foreground line-clamp-2 min-h-[40px]">Personal brand reflecting clarity and growth.</p>
                    </div>
                </Link>

                {/* Card 2: Build Bond */}
                <Link
                    href="/design/build-bond-identity"
                    className="flex-shrink-0 w-[300px] md:w-[340px] bg-card rounded-[24px] p-6 border border-white/10 flex flex-col transition-all duration-500 shadow-md hover:shadow-[0_25px_50px_-12px_rgba(111,174,255,0.4)] hover:border-primary/50 group snap-center"
                >
                    <div className="relative aspect-square w-full mb-6 rounded-[24px] overflow-hidden bg-transparent border border-white/5 flex items-center justify-center">
                        <div className="relative w-3/4 h-3/4 group-hover:scale-110 transition-transform duration-500">
                            <Image
                                src="/images/design/build-bond-logo-v2.png"
                                alt="Build Bond Identity"
                                fill
                                className="object-cover rounded-[24px]"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="bg-gradient-to-r from-[#0122a8] to-[#6FAEFF] bg-clip-text text-transparent text-[11px] font-bold uppercase tracking-wider block mb-2 w-fit">Brand Identity</span>
                        <h3 className="text-[20px] font-medium mb-1 group-hover:text-primary transition-colors">Build Bond</h3>
                        <p className="text-[14px] text-muted-foreground line-clamp-2 min-h-[40px]">Warm, family-focused visual language.</p>
                    </div>
                </Link>

                {/* Card 3: Creative Minds Poster */}
                <Link
                    href="/design/creative-minds-poster"
                    className="flex-shrink-0 w-[300px] md:w-[340px] bg-card rounded-[24px] p-6 border border-white/10 flex flex-col transition-all duration-500 shadow-md hover:shadow-[0_25px_50px_-12px_rgba(111,174,255,0.4)] hover:border-primary/50 group snap-center"
                >
                    <div className="relative aspect-square w-full mb-6 rounded-[24px] overflow-hidden bg-background border border-white/5">
                        <Image
                            src="/images/design/creative-minds-poster.png"
                            alt="Creative Minds 2025"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="bg-gradient-to-r from-[#0122a8] to-[#6FAEFF] bg-clip-text text-transparent text-[11px] font-bold uppercase tracking-wider block mb-2 w-fit">Event Poster</span>
                        <h3 className="text-[20px] font-medium mb-1 group-hover:text-primary transition-colors">Creative Minds 2025</h3>
                        <p className="text-[14px] text-muted-foreground line-clamp-2 min-h-[40px]">High-contrast layout for a creative event.</p>
                    </div>
                </Link>

                {/* Card 4: Kedareswari Wordmark */}
                <Link
                    href="/design/personal-identity"
                    className="flex-shrink-0 w-[300px] md:w-[340px] bg-card rounded-[24px] p-6 border border-white/10 flex flex-col transition-all duration-500 shadow-md hover:shadow-[0_25px_50px_-12px_rgba(111,174,255,0.4)] hover:border-primary/50 group snap-center"
                >
                    <div className="relative aspect-square w-full mb-6 rounded-[24px] overflow-hidden bg-transparent border border-white/5 flex items-center justify-center">
                        <div className="relative w-10/12 h-2/4 group-hover:scale-110 transition-transform duration-500">
                            <Image
                                src="/images/design/kedareswari-lightbulb.png"
                                alt="Kedareswari Wordmark"
                                fill
                                className="object-cover rounded-[24px]"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="bg-gradient-to-r from-[#0122a8] to-[#6FAEFF] bg-clip-text text-transparent text-[11px] font-bold uppercase tracking-wider block mb-2 w-fit">Typography</span>
                        <h3 className="text-[20px] font-medium mb-1 group-hover:text-primary transition-colors">Kedareswari Wordmark</h3>
                        <p className="text-[14px] text-muted-foreground line-clamp-2 min-h-[40px]">Integrated symbol and typographic lockup.</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}
