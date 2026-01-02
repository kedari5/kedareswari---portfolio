
import Link from "next/link";

const sitemapData = [
    {
        title: "Home",
        url: "/",
        children: [
            { title: "Intro / Philosophy" },
            { title: "About Preview" },
            { title: "Selected Projects" },
            { title: "Design Explorations Preview" },
            { title: "Capabilities Preview" },
            { title: "Collaboration Call-to-Action" },
        ],
    },
    {
        title: "Projects",
        url: "/projects",
        children: [
            {
                title: "Hungry Hub",
                url: "/projects/hungry-hub",
                children: ["Overview", "Problem & Goal", "Design Decisions", "Key Screens", "Outcome"],
            },
            {
                title: "Build Bond",
                url: "/projects/build-bond",
                children: ["Overview", "Concept & Values", "Parent–Child Flow", "Logo & Visual Meaning", "Activities, Tasks, Journals", "Learnings"],
            },
            {
                title: "Krishi Sakhi",
                url: "/projects/krishi-sakhi",
                children: ["Overview", "Farmer Challenges", "Market Prices", "Weather Guidance", "Chat Interface", "Multilingual Support", "Role (Frontend)"],
            },
            {
                title: "PM-AJAY",
                url: "/projects/pm-ajay",
                children: ["Overview (Government Platform)", "User Roles", "Dashboards", "GIS Maps", "Fund Tracking", "Workflow Screens", "DPR Upload", "Role (Frontend Development)"],
            },
            {
                title: "Personal Portfolio",
                url: "/projects/personal-portfolio",
                children: ["Concept", "Design System", "Accessibility Decisions", "Build & Deployment"],
            },
        ],
    },
    {
        title: "Work & Design",
        url: "/design",
        children: [
            {
                title: "Logos",
                children: ["Personal Logo", "Build Bond Logo"],
            },
            {
                title: "Posters & Visuals",
                children: ["Poster Collection", "Layout & Visual Rationale"],
            },
        ],
    },
    {
        title: "Capabilities",
        url: "/capabilities",
        children: [
            { title: "Research" },
            { title: "Design" },
            { title: "Development" },
            { title: "Testing" },
        ],
    },
    {
        title: "About",
        url: "/about",
        children: [
            { title: "Profile Image" },
            { title: "Design Philosophy" },
            { title: "Way of Working" },
            { title: "Values & Mindset" },
        ],
    },
    {
        title: "Resume",
        url: "/resume",
        children: [
            { title: "View Resume" },
            { title: "Download Resume (PDF)" },
        ],
    },
    {
        title: "Contact",
        url: "/contact",
        children: [
            { title: "Contact Form" },
            { title: "Quick Links (Call, Message, LinkedIn, GitHub, Behance)" },
        ],
    },
];

import BackgroundLayer from "@/components/BackgroundLayer";

export default function SitemapPage() {
    return (
        <div className="relative min-h-[calc(100dvh-64px)] overflow-hidden">
            <BackgroundLayer />
            <div className="relative z-10 max-w-[1120px] mx-auto px-6 md:px-12 py-24 select-none">
                <h1 className="text-[48px] leading-[56px] font-medium mb-16 text-foreground">Site Map</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {sitemapData.map((section) => (
                        <div key={section.title} className="space-y-4">
                            <h2 className="text-[24px] leading-[32px] font-medium text-foreground">
                                {section.url ? (
                                    <Link href={section.url} className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-ring rounded px-1">
                                        {section.title}
                                    </Link>
                                ) : (
                                    section.title
                                )}
                            </h2>

                            <ul className="space-y-3 border-l-2 border-border pl-6">
                                {section.children.map((child: any, index) => (
                                    <li key={index} className="text-[16px] leading-[26px] text-muted-foreground">
                                        {typeof child === 'string' ? (
                                            child
                                        ) : (
                                            <div className="flex flex-col gap-2">
                                                {child.url ? (
                                                    <Link href={child.url} className="font-medium text-foreground hover:text-primary transition-colors inline-block focus:outline-none focus:ring-2 focus:ring-ring rounded px-1">
                                                        {child.title}
                                                    </Link>
                                                ) : (
                                                    <span className={child.children ? "font-medium text-foreground" : ""}>{child.title}</span>
                                                )}

                                                {child.children && (
                                                    <ul className="space-y-2 border-l border-border pl-4 mt-1">
                                                        {child.children.map((subChild: string, subIndex: number) => (
                                                            <li key={subIndex} className="text-[14px] leading-[22px] text-muted-foreground">
                                                                {subChild}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </div>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
