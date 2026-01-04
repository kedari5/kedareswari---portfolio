import Link from "next/link";
import Image from "next/image";
import BrandIcon from "@/components/BrandIcon";

interface DesignProject {
    title: string;
    category: string;
    heroImage: string;
    concept: string;
    symbolMeaning: string;
    colorRationale: string;
    visualLanguage: string;
    usageVariations: string;
    tools: string;
    gallery?: { src: string; caption: string }[];
}

const designData: Record<string, DesignProject> = {
    "personal-identity": {
        title: "Kedareswari — Visual Identity",
        category: "Visual Identity",
        heroImage: "/images/design/bird-logo.png",
        concept: "This visual identity was designed to reflect clarity, growth, and thoughtful movement. The logo aims to represent a calm yet forward-looking personal brand, focused on trust, adaptability, and continuous learning.",
        symbolMeaning: "The bird represents direction, curiosity, and progress. Its upward posture reflects a forward mindset and a willingness to explore new ideas. The flowing form suggests adaptability and movement, rather than rigidity.\n\nThe open curves communicate openness and approachability, while maintaining a sense of balance and control.",
        colorRationale: "Blue was chosen to convey calmness, trust, and reliability. The gradient variation adds depth while maintaining softness, reflecting growth and flexibility rather than sharp contrast.\n\nThe restrained palette ensures the identity remains professional and adaptable across different contexts.",
        visualLanguage: "Rounded shapes and smooth curves were used to avoid sharp edges and visual tension. This supports the idea of comfort, continuity, and approachability.\n\nThe identity avoids excessive detail to remain clear and recognizable at different sizes.",
        usageVariations: "The logo was designed to work across light and dark backgrounds. Alternate versions ensure clarity and consistency in different placements such as headers, loading states, and branding moments.",
        tools: "Canva, Adobe Illustrator",
        gallery: [
            { src: "/images/design/bird-logo.png", caption: "Primary Logo" },
            { src: "/images/design/kedareswari-lightbulb.png", caption: "Alt Wordmark" }
        ]
    },
    "build-bond-identity": {
        title: "Build Bond — Brand Identity",
        category: "Brand Identity",
        heroImage: "/images/design/build-bond-logo-v2.png",
        concept: "A warm and inviting identity for a parenting-focused emotional connection app. The core idea was to create a visual bridge that feels safe, stable, and enduring.",
        symbolMeaning: "The circular form represents unity and togetherness, symbolizing the connection between parents and children. A circle has no beginning or end, reinforcing the idea of continuous support and care.\n\nThe infinity symbol at the center represents a long-lasting bond — emotional connection that grows over time rather than fading. Together, these elements communicate stability, trust, and enduring relationships.",
        colorRationale: "Soft, balanced colors were selected to create a sense of warmth and emotional safety. The palette avoids harsh contrast, supporting a reassuring and friendly tone suitable for family-focused interaction.",
        visualLanguage: "Rounded shapes and smooth curves were used to avoid sharp edges and visual tension. This supports the idea of comfort, continuity, and approachability.",
        usageVariations: "The Build Bond identity includes variations for app icons, dark-mode adaptive colors, and print-ready monochrome versions for potential merchandise.",
        tools: "Canva, Adobe Illustrator",
        gallery: [
            { src: "/images/design/build-bond-logo-v2.png", caption: "Main Symbol" }
        ]
    },
    "creative-minds-poster": {
        title: "Creative Minds 2025",
        category: "Poster Design",
        heroImage: "/images/design/creative-minds-poster.png",
        concept: "This poster was designed to communicate creativity through contrast and structure. Dark backgrounds establish depth and focus, while gold accents add a sense of premium value.",
        symbolMeaning: "The use of organic leaf patterns interleaved with geometric gold frames represents the intersection of natural creativity and structured execution.",
        colorRationale: "The deep black background provides a stage for the gold and natural green elements to emerge, symbolizing ideas 'shaping the future' from a blank canvas.",
        visualLanguage: "Typography remains clear and centered to maintain readability. Decorative elements are used sparingly to frame the content without overwhelming it.",
        usageVariations: "The layout was adapted for social media announcements, registration pages, and large-scale physical printing for event venues.",
        tools: "Canva, Adobe Photoshop",
        gallery: [
            { src: "/images/design/creative-minds-poster.png", caption: "Event Poster" }
        ]
    }
};

export default async function DesignDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = designData[slug];

    // Define custom hero heights per design slug
    const heroSizeMap: Record<string, string> = {
        "personal-identity": "h-[500px] md:h-[800px]",
        "build-bond-identity": "h-[400px] md:h-[600px]",
        "creative-minds-poster": "h-[300px] md:h-[500px]",
    };
    const heroImageClass = slug === "personal-identity" ? "object-contain w-full h-full drop-shadow-2xl" : "object-contain w-full h-full drop-shadow-2xl";
    const heroSizeClass = heroSizeMap[slug] ?? "h-[400px] md:h-[600px]";

    if (!project) {
        // notFound(); // Removed as per instruction
        return (
            <div className="relative min-h-screen bg-transparent flex items-center justify-center">
                <p className="text-2xl text-muted-foreground">Project not found.</p>
            </div>
        );
    }

    return (
        <div className="relative min-h-screen bg-transparent">

            <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-12 py-16">
                {/* Back Button */}
                <Link
                    href="/design"
                    className="inline-flex items-center gap-2 text-[14px] font-medium text-muted-foreground hover:text-foreground transition-colors mb-12 group"
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                    Design
                </Link>

                {/* Title Section */}
                <div className="flex flex-col gap-4 mb-20">
                    <h1 className="text-[40px] md:text-[56px] leading-[1.1] font-medium tracking-tight select-none">
                        {project.title}
                    </h1>
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">{project.category}</span>
                </div>

                {/* Content Sections */}
                <div className="max-w-[800px] flex flex-col gap-20">
                    {/* 1. Concept Overview */}
                    <section className="flex flex-col gap-8">
                        <h2 className="text-[28px] md:text-[32px] leading-[1.2] font-medium tracking-tight">Concept Overview</h2>
                        <p className="text-[20px] md:text-[24px] leading-[1.5] text-muted-foreground font-light text-pretty">
                            {project.concept}
                        </p>
                    </section>

                    {/* 2. Symbol Meaning */}
                    <section className="flex flex-col gap-8">
                        <h2 className="text-[28px] md:text-[32px] leading-[1.2] font-medium tracking-tight">Symbol Meaning</h2>
                        <div className="space-y-6">
                            {project.symbolMeaning.split("\n\n").map((para, i) => (
                                <p key={i} className="text-[17px] md:text-[19px] leading-[1.7] text-muted-foreground whitespace-pre-line">
                                    {para}
                                </p>
                            ))}
                        </div>
                    </section>

                    {/* 3. Color Rationale */}
                    <section className="flex flex-col gap-8">
                        <h2 className="text-[28px] md:text-[32px] leading-[1.2] font-medium tracking-tight">Color Rationale</h2>
                        <div className="space-y-6">
                            {project.colorRationale.split("\n\n").map((para, i) => (
                                <p key={i} className="text-[17px] md:text-[19px] leading-[1.7] text-muted-foreground whitespace-pre-line">
                                    {para}
                                </p>
                            ))}
                        </div>
                    </section>

                    {/* 4. Form & Visual Language */}
                    <section className="flex flex-col gap-8">
                        <h2 className="text-[28px] md:text-[32px] leading-[1.2] font-medium tracking-tight">Form & Visual Language</h2>
                        <div className="space-y-6">
                            {project.visualLanguage.split("\n\n").map((para, i) => (
                                <p key={i} className="text-[17px] md:text-[19px] leading-[1.7] text-muted-foreground whitespace-pre-line">
                                    {para}
                                </p>
                            ))}
                        </div>
                    </section>

                    {/* 5. Usage & Variations */}
                    <section className="flex flex-col gap-8">
                        <h2 className="text-[28px] md:text-[32px] leading-[1.2] font-medium tracking-tight">Usage & Variations</h2>
                        <p className="text-[17px] md:text-[19px] leading-[1.7] text-muted-foreground">
                            {project.usageVariations}
                        </p>
                    </section>

                    {/* 6. Tools Used */}
                    <section className="flex flex-col gap-8">
                        <h2 className="text-[28px] md:text-[32px] leading-[1.2] font-medium tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#0122a8] to-[#3A7BEF] dark:from-white dark:to-[#6FAEFF]">Tools Used</h2>
                        <div className="flex flex-wrap gap-4">
                            {project.tools.split(/[,.\n]+/).map((toolName) => toolName.trim()).filter(Boolean).map((tool) => (
                                <div
                                    key={tool}
                                    className="w-14 h-14 bg-slate-100 dark:bg-white/5 border border-black/5 dark:border-white/10 hover:bg-slate-200 dark:hover:bg-white/10 backdrop-blur-md rounded-[16px] transition-all hover:scale-105 active:scale-95 cursor-default flex items-center justify-center group relative shadow-sm"
                                    title={tool}
                                >
                                    <BrandIcon name={tool} className="w-6 h-6" />
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* 9. Image Gallery */}
                {project.gallery && project.gallery.length > 0 && (
                    <section className="mt-32 pt-24 border-t border-white/5">
                        <h2 className="text-[28px] md:text-[32px] leading-[1.2] font-medium mb-12 tracking-tight">Gallery</h2>

                        {slug === "creative-minds-poster" ? (
                            // Vertical layout for Creative Minds poster
                            <div className="flex flex-col gap-12 max-w-[400px]">
                                {project.gallery.map((img, idx) => (
                                    <div key={idx} className="space-y-4">
                                        <div className="relative w-full border border-white/5 rounded-[16px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500" style={{ aspectRatio: '9/16' }}>
                                            <Image
                                                src={img.src}
                                                alt={img.caption}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <p className="text-[14px] text-muted-foreground text-center font-bold tracking-[0.1em] uppercase">{img.caption}</p>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            // Horizontal scrolling layout for other projects
                            <div className="flex gap-8 md:gap-12 overflow-x-auto pb-12 scrollbar-none snap-x snap-mandatory -mx-6 px-6 md:-mx-12 md:px-12">
                                {project.gallery.map((img, idx) => (
                                    <div key={idx} className="flex-shrink-0 w-[300px] md:w-[500px] lg:w-[600px] space-y-4 snap-center">
                                        <div className="relative aspect-video w-full border border-white/5 rounded-[16px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500">
                                            <Image
                                                src={img.src}
                                                alt={img.caption}
                                                fill
                                                className="object-contain p-8 md:p-12"
                                            />
                                        </div>
                                        <p className="text-[14px] text-muted-foreground text-center font-bold tracking-[0.1em] uppercase">{img.caption}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </section>
                )}
            </div>
        </div>
    );
}
