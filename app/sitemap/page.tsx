"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function SitemapPage() {
    const sections = [
        {
            title: "Main Pages",
            links: [
                { name: "Home", href: "/" },
                { name: "Projects", href: "/#projects" },
                { name: "Work & Design", href: "/#designs" },
                { name: "Capabilities", href: "/#capabilities" },
                { name: "About", href: "/#about" },
                { name: "Contact", href: "/#collaboration" },
            ]
        },
        {
            title: "Projects",
            links: [
                { name: "Hungry Hub", href: "/projects/hungry-hub" },
                { name: "Build Bond", href: "/projects/build-bond" },
                { name: "Krishi Sakhi", href: "/projects/krishi-sakhi" },
                { name: "PM-AJAY", href: "/projects/pm-ajay" },
                { name: "Personal Portfolio", href: "/projects/portfolio" },
            ]
        },
        {
            title: "Work & Design",
            links: [
                { name: "Personal Logo", href: "/design/personal-logo" },
                { name: "Build Bond Logo", href: "/design/build-bond-logo" },
                { name: "Posters & Visuals", href: "/design/posters" },
            ]
        },
        {
            title: "Resources",
            links: [
                { name: "Resume (Docs)", href: "/docs/resume.docx" },
                { name: "Source Code", href: "https://github.com/kedari5" },
            ]
        }
    ];

    return (
        <div className="min-h-[calc(100dvh-64px)] w-full flex flex-col pt-12 md:pt-24 pb-24 px-6 md:px-12 max-w-[1120px] mx-auto select-none">

            <div className="mb-16">
                <h1 className="text-[48px] leading-[1.1] font-medium mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#0122a8] to-[#6FAEFF] dark:from-white dark:to-[#38BDF8]">
                    Site Map
                </h1>
                <p className="text-[20px] text-muted-foreground font-light max-w-2xl">
                    An overview of the structure and content available across the portfolio.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
                {sections.map((section) => (
                    <div key={section.title} className="flex flex-col gap-6">
                        <h2 className="text-[20px] font-medium text-foreground border-b border-black/5 dark:border-white/5 pb-4">
                            {section.title}
                        </h2>
                        <ul className="flex flex-col gap-4">
                            {section.links.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-[16px]"
                                        target={link.href.startsWith("http") || link.href.endsWith("docx") ? "_blank" : undefined}
                                    >
                                        <span>{link.name}</span>
                                        <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

        </div>
    );
}
