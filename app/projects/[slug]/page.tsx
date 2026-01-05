
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";

// Data could be moved to a shared file later
import BrandIcon from "@/components/BrandIcon";

const projectsData: Record<string, {
    title: string;
    category: string;
    role?: string;
    content: { title: string; body: string }[];
    images?: { src: string; caption: string }[];
    timeline: string;
    imageAspectRatio?: "vertical" | "horizontal";
}> = {
    "hungry-hub": {
        title: "Hungry Hub",
        category: "UI/UX Case Study",
        role: "Product Design",
        content: [
            { title: "Project Overview", body: "A food delivery mobile application focused on speed, clarity, and hunger-driven decisions. The goal was to facilitate quick discovery, seamless menu browsing, and effortless ordering." },
            { title: "Design Concept", body: "The core concept revolves around instant craving satisfaction. We aimed to reduce effort from onboarding to checkout and established a strong visual hierarchy to enable fast decision-making." },
            { title: "Visual Identity & Logo Meaning", body: "The logo features a food cover representing freshness and readiness, combined with a delivery scooter to symbolize speed and accessibility. The form is simplified for instant recognition at small sizes." },
            { title: "Color Palette & Meaning", body: "Orange is used for appetite, warmth, and urgency. White backgrounds ensure cleanliness and readability, while Green accents highlight offers, savings, and positivity." },
            { title: "Typography", body: "We utilized bold headings for offers and restaurant names to grab attention, paired with clean fonts for descriptions, designed specifically for fast scanning." },
            { title: "UI & UX Decisions", body: "Key decisions included a location-first onboarding flow, large immersive food cards, and clear CTAs like 'Use current location' and 'Proceed to Pay'. Pop-ups were minimized to reduce user frustration." },
            { title: "Tools Used", body: "Figma, Canva" }
        ],
        timeline: "2024",
        images: [
            { src: "/images/hungry-hub/logo.png", caption: "Logo Design" },
            { src: "/images/hungry-hub/location.png", caption: "Location Permission" },
            { src: "/images/hungry-hub/home.png", caption: "Home & Offers" },
            { src: "/images/hungry-hub/menu.png", caption: "Restaurant Listing" },
            { src: "/images/hungry-hub/order.png", caption: "Order Confirmation" },
            { src: "/images/hungry-hub/closed.png", caption: "Store Closed State" }
        ]
    },
    "build-bond": {
        title: "Build Bond",
        category: "UI/UX Case Study",
        role: "UI/UX Design",
        content: [
            { title: "Project Overview", body: "A mobile application designed to strengthen emotional bonding between parents and children, focusing on connection over productivity. The goal was to act as an emotional bridge rather than a task manager." },
            { title: "Core Design Philosophy", body: "The philosophy was built on four pillars: Emotional Warmth, Trust, Meaningful Togetherness, and ensuring No Pressure-based interactions. Every pixel had to feel safe and inviting." },
            { title: "Logo & Symbol Meaning", body: "The outer circle represents a safe emotional space, while the infinity symbol signifies a long-lasting, unbreakable bond. Soft gradients were chosen to evoke care, balance, and fluidity." },
            { title: "Color Psychology", body: "We used Lavender and Soft Blue to induce calmness and trust. Peach and Warm Neutrals add a layer of love and care. Harsh, alert-style colors were strictly avoided." },
            { title: "UI Design Decisions", body: "We chose illustrations instead of photos to maintain a friendly, universal vibe. Rounded cards and buttons create a soft, non-threatening feel. Tasks, activities, journals, and challenges are clearly separated to ensure clarity without overwhelming the user." },
            { title: "UX Highlights", body: "Key features include a secure code-based parent–child onboarding, a simplified interface for task creation, and a guided journaling feature that encourages deep reflection and conversation." },
            { title: "Tools Used", body: "Figma, Canva" }
        ],
        timeline: "2025",
        images: [
            { src: "/images/build-bond/cover.png", caption: "App Visualization" },
            { src: "/images/build-bond/logo_splash.png", caption: "Logo Design" },
            { src: "/images/build-bond/onboarding.png", caption: "Onboarding Flow" },
            { src: "/images/build-bond/dashboard.png", caption: "Main Page" },
            { src: "/images/build-bond/tasks_list.png", caption: "Added Tasks" },
            { src: "/images/build-bond/create_task.png", caption: "Added Challenges" },
            { src: "/images/build-bond/activities_list.png", caption: "Added Journals" },
            { src: "/images/build-bond/create_activity.png", caption: "Added Activity" }
        ]
    },
    "krishi-sakhi": {
        title: "Krishi Sakhi",
        category: "Farmer-Focused Digital Platform",
        role: "Frontend UI",
        content: [
            { title: "Project Overview", body: "An AI-powered farming assistant providing market prices, weather updates, crop guidance, and multilingual support to farmers. It serves as a digital companion for agricultural decision-making." },
            { title: "My Role", body: "I contributed to the Frontend UI, focusing relentlessly on clarity, accessibility, and ease of use for rural users who may have limited digital literacy." },
            { title: "Problem Context", body: "Farmers faced fragmented information sources, leading to decision delays and uncertainty. There was a critical need for centralized, simple access to data like real-time market rates and weather forecasts." },
            { title: "Visual Identity & Meaning", body: "The Sprout/Leaf motif symbolizes agriculture and growth. We used rounded shapes to ensure approachability and kept visuals simple to be friendly for first-time users." },
            { title: "Color Rationale", body: "Green is the primary color, representing nature, growth, and trust. Light backgrounds were chosen for outdoor readability under bright sunlight. Accent colors are used sparingly to guide attention." },
            { title: "Interface Design Decisions", body: "We implemented card-based layouts for market prices to make them differentiable at a glance. Large readable text, simple navigation, and a chat interface similar to WhatsApp ensured familiarity." },
            { title: "Core Features", body: "Real-time Market Prices, Accurate Weather information, an AI chat assistant for queries, and robust Multilingual support for inclusivity." },
            { title: "Tools & Technologies Used", body: "Python, Flask, HTML, CSS, JavaScript" }
        ],
        timeline: "2025",
        imageAspectRatio: "horizontal",
        images: [
            { src: "/images/krishi-sakhi/landing_page.png", caption: "Dashboard" },
            { src: "/images/krishi-sakhi/login.png", caption: "Voice & Text based Login & Signup" },
            { src: "/images/krishi-sakhi/languages.png", caption: "Multi-lingual Support" },
            { src: "/images/krishi-sakhi/market_prices.png", caption: "Market Prices Dashboard" },
            { src: "/images/krishi-sakhi/weather.png", caption: "Weather Information" },
            { src: "/images/krishi-sakhi/chat_interface.png", caption: "AI Chat Assistant" }
        ]
    },
    "pm-ajay": {
        title: "PM-AJAY Portal",
        category: "Government Dashboard",
        role: "Frontend Developer",
        content: [
            { title: "Project Overview", body: "A digital portal for the Government of India to monitor fund allocation, utilization, and progress of the PM-AJAY scheme. It is used by central, state, and district agencies to ensure transparency and efficiency." },
            { title: "Design Objective", body: "The primary objective was to simplify complex government data into actionable insights, ensuring role-based clarity and predictability for officials at various administrative levels." },
            { title: "Visual Language & Layout Thinking", body: "We adopted a clean, card-based dashboard layout with structured grids. This established a clear hierarchy, allowing users to move naturally from high-level summaries to granular details." },
            { title: "Color & Meaning", body: "Green represents progress and growth, while Orange aligns with the governance identity. Neutral backgrounds were used to balance the density of information and maintain readability.Flag colors which represent nation." },
            { title: "UI & UX Decisions", body: "Key decisions included role-based navigation paths, visual progress bars with percentage indicators, GIS maps for geographic clarity, and visual based workflows for DPR uploads." },
            { title: "My Role", body: "I served as a Frontend Developer & UI Implementer, responsible for crafting the dashboard layouts, optimizing workflows, and ensuring data clarity across the portal." },
            { title: "Tools & Technologies Used", body: "MongoDB, Express, React, Node.js, PostgreSQL, Supabase" }
        ],
        timeline: "2025",
        imageAspectRatio: "horizontal",
        images: [
            { src: "/images/pm-ajay/home.png", caption: "Portal Homepage" },
            { src: "/images/pm-ajay/dashboard.png", caption: "National Overview" },
            { src: "/images/pm-ajay/login.png", caption: "Secure Login" },
            { src: "/images/pm-ajay/admin_dashboard.png", caption: "Admin Dashboard" },
            { src: "/images/pm-ajay/fund_status.png", caption: "District Fund Status" },
            { src: "/images/pm-ajay/agency_management.png", caption: "Agency Management" },
            { src: "/images/pm-ajay/dpr_upload.png", caption: "DPR Upload Workflow" },
            { src: "/images/pm-ajay/components.png", caption: "Scheme Components" },
            { src: "/images/pm-ajay/features.png", caption: "Key Features" }
        ]
    },
    "portfolio": {
        title: "Portfolio",
        category: "Product Case Study",
        role: "Design & Development",
        content: [
            { title: "Project Overview", body: "This portfolio was built not just as a gallery of work, but as a standalone product designed for creative show case. It prioritizes clarity, performance, and a premium user experience." },
            { title: "Design Intent", body: "The design philosophy focuses on a calm, editorial aesthetic. By respecting the user's attention with a clean structure and minimal distractions, the content takes center stage." },
            { title: "Logo & Symbol Meaning", body: "The bird symbol represents freedom of thought and perspective. Its upward trajectory signifies growth and curiosity, while the minimal form ensures scalability and memorability." },
            { title: "Color Meaning", body: "Blue tones were selected to evoke trust, calmness, and dependability. Neutral backgrounds provide focus and high readability, with accents used sparingly to guide the eye." },
            { title: "Experience Structure", body: "The site features a full-screen hero for impactful first impressions, a horizontal project showcase for easy browsing, and dedicated case study pages that dive deep without clutter." },
            { title: "Accessibility & Inclusivity", body: "Built with inclusivity in mind, including keyboard navigation support, contrast-aware light and dark themes, and reduced motion support." },
            { title: "Build & Deployment", body: "A modern frontend build using Next.js and Tailwind CSS, deployed publicly as a living, evolving product that demonstrates real-world readiness." },
            { title: "Outcome", body: "The final result demonstrates holistic product thinking, balancing aesthetic design with robust frontend engineering." },
            {
                title: "Tools Used",
                body: "Figma, React, Next.js, GitHub, Vercel, Spreadsheets, Google Apps Script"
            }
        ],
        timeline: "2026",
        imageAspectRatio: "horizontal",
        images: [
            { src: "/images/portfolio/home.png", caption: "Home Page" },
            { src: "/images/portfolio/projects.png", caption: "Explore projects" },
            { src: "/images/portfolio/case_study.png", caption: "Explore Designs" },
            { src: "/images/portfolio/about.png", caption: "collaboration" }
        ]
    }
};

export function generateStaticParams() {
    return Object.keys(projectsData).map((slug) => ({ slug }));
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = projectsData[slug];

    if (!project) {
        notFound();
    }

    return (
        <div className="relative min-h-[calc(100dvh-64px)] overflow-hidden bg-transparent">
            <div className="relative z-10 max-w-[1120px] mx-auto px-6 md:px-12 py-24 select-none">
                {/* Header */}
                <div className="mb-24">
                    <Link href="/#projects" className="text-muted-foreground hover:text-primary transition-colors mb-8 inline-block focus:outline-none">&larr; Back to Projects</Link>
                    <h1 className="text-[48px] sm:text-[56px] md:text-[64px] leading-[1.1] font-medium mb-4 tracking-tight">{project.title}</h1>
                    <p className="text-[20px] md:text-[24px] leading-[32px] text-muted-foreground font-light">{project.category}</p>
                </div>

                {/* Content Sections Grid */}
                {/* Content Sections Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-12 items-start">
                    {/* Main Content */}
                    <div className="md:col-span-8 flex flex-col gap-12 md:gap-24">
                        {/* First Section with Side-by-Side Details on Mobile */}
                        <div className="grid grid-cols-[1fr_150px] md:grid-cols-1 gap-6 md:gap-0">
                            <section className="group">
                                <h2 className="text-[24px] md:text-[32px] leading-[1.2] font-semibold md:font-medium mb-4 md:mb-6 tracking-tight">
                                    {project.content[0].title}
                                </h2>
                                <p className="text-[20px] md:text-[24px] leading-[1.5] md:leading-[1.8] text-muted-foreground text-pretty font-light">
                                    {project.content[0].body}
                                </p>
                            </section>

                            {/* Project Details Box (Mobile Only - visible side by side) */}
                            <div className="md:hidden">
                                <div className="p-4 bg-surface dark:bg-[#2e54a5]/10 backdrop-blur-md rounded-[16px] border border-primary/50 dark:border-[#2e54a5] shadow-[inset_0_0_10px_rgba(111,174,255,0.1)]">
                                    <h3 className="text-[9px] font-bold uppercase tracking-widest mb-4 text-primary">Project Details</h3>
                                    <ul className="space-y-3">
                                        <li className="flex flex-col gap-0.5">
                                            <span className="text-[9px] text-muted-foreground font-bold uppercase">Category</span>
                                            <span className="font-medium text-foreground text-[12px] leading-tight line-clamp-2">{project.category}</span>
                                        </li>
                                        <li className="flex flex-col gap-0.5">
                                            <span className="text-[9px] text-muted-foreground font-bold uppercase">Role</span>
                                            <span className="font-medium text-foreground text-[12px] leading-tight">{project.role || "Design & Code"}</span>
                                        </li>
                                        <li className="flex flex-col gap-0.5">
                                            <span className="text-[9px] text-muted-foreground font-bold uppercase">Timeline</span>
                                            <span className="font-medium text-foreground text-[12px] leading-tight">{project.timeline}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Remaining Sections */}
                        {project.content.slice(1).map((section, idx) => (
                            <section key={idx} className="group">
                                <h2 className="text-[28px] md:text-[32px] leading-[1.2] font-medium mb-6 tracking-tight">
                                    {section.title}
                                </h2>
                                <div className="space-y-10">
                                    {section.body.split('\n\n').map((block, bIdx) => {
                                        if (section.title.toLowerCase().includes('tools')) {
                                            return (
                                                <div key={bIdx} className="flex flex-wrap gap-3 md:gap-4">
                                                    {block.split(/[,/\n]+/).map((toolName) => toolName.trim()).filter(Boolean).map((tool) => (
                                                        <div
                                                            key={tool}
                                                            className="w-12 h-12 md:w-14 md:h-14 bg-card border border-white/10 hover:bg-card/80 backdrop-blur-md rounded-[12px] md:rounded-[16px] transition-all hover:scale-105 active:scale-95 cursor-default flex items-center justify-center group relative shadow-sm"
                                                            title={tool}
                                                        >
                                                            <BrandIcon name={tool} className="w-5 h-5 md:w-6 h-6" />
                                                        </div>
                                                    ))}
                                                </div>
                                            );
                                        }

                                        return (
                                            <p key={bIdx} className="text-[17px] md:text-[19px] leading-[1.7] md:leading-[1.8] text-muted-foreground text-pretty font-light whitespace-pre-wrap">
                                                {block}
                                            </p>
                                        );
                                    })}
                                </div>
                            </section>
                        ))}
                    </div>

                    {/* Sidebar Details (Desktop Only) */}
                    <div className="hidden md:block md:col-span-4 lg:pl-12">
                        <div className="p-8 bg-surface dark:bg-[#2e54a5]/10 backdrop-blur-md rounded-[28px] border-2 border-primary dark:border-[#2e54a5] sticky top-24 shadow-[inset_0_0_20px_rgba(111,174,255,0.2)] dark:shadow-[inset_0_0_30px_rgba(46,84,165,0.3)] hover:shadow-[inset_0_0_30px_rgba(111,174,255,0.4)] dark:hover:shadow-[inset_0_0_40px_rgba(46,84,165,0.5)] transition-all duration-500">
                            <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-10">Project Details</h3>
                            <ul className="space-y-8">
                                <li className="flex flex-col gap-2">
                                    <span className="text-[12px] text-muted-foreground font-bold uppercase tracking-[0.1em]">Category</span>
                                    <span className="font-medium text-foreground text-[19px] leading-tight">{project.category}</span>
                                </li>
                                <li className="flex flex-col gap-2">
                                    <span className="text-[12px] text-muted-foreground font-bold uppercase tracking-[0.1em]">Role</span>
                                    <span className="font-medium text-foreground text-[19px] leading-tight">{project.role || "Design & Code"}</span>
                                </li>
                                <li className="flex flex-col gap-2">
                                    <span className="text-[12px] text-muted-foreground font-bold uppercase tracking-[0.1em]">Timeline</span>
                                    <span className="font-medium text-foreground text-[19px] leading-tight">{project.timeline}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Final Screens Gallery - Moved outside grid to use full right space */}
                {project.images && project.images.length > 0 && (
                    <section className="pt-24 mt-24 border-t border-white/5">
                        <h2 className="text-[28px] md:text-[32px] leading-[1.2] font-medium mb-12 tracking-tight">Final Screens</h2>
                        <div className="flex gap-8 md:gap-12 overflow-x-auto pb-12 scrollbar-none snap-x snap-mandatory -mx-6 px-6 md:-mx-12 md:px-12">
                            {project.images.map((img, idx) => (
                                <div key={idx} className={`flex-shrink-0 space-y-4 snap-center ${project.imageAspectRatio === "horizontal" ? "w-[400px] md:w-[600px] lg:w-[800px]" : "w-[280px] md:w-[320px] lg:w-[360px]"}`}>
                                    <div className={`relative w-full bg-card border border-white/5 rounded-[24px] md:rounded-[32px] overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ${project.imageAspectRatio === "horizontal" ? "aspect-video" : "aspect-[9/19.5]"}`}>
                                        <Image
                                            src={img.src}
                                            alt={img.caption}
                                            fill
                                            className="object-contain p-1 md:p-2"
                                        />
                                    </div>
                                    <p className="text-[14px] text-muted-foreground text-center font-bold tracking-[0.1em] uppercase">{img.caption}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </div>
    );
}
