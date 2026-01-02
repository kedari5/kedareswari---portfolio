
import Link from "next/link";

const projects = [
    { slug: "hungry-hub", title: "Hungry Hub", category: "Research & Design", desc: "A food delivery platform focused on ethical delivery." },
    { slug: "build-bond", title: "Build Bond", category: "UI/UX Case Study", desc: "Construction management software for SME." },
    { slug: "krishi-sakhi", title: "Krishi Sakhi", category: "Frontend", desc: "Empowering rural women through agricultural tech." },
    { slug: "pm-ajay", title: "PM-AJAY", category: "Government Portal", desc: "Social welfare scheme tracking dashboard." },
    { slug: "personal-portfolio", title: "Personal Portfolio", category: "Product Design", desc: "This website, built with calmness." },
];

import BackgroundLayer from "@/components/BackgroundLayer";

export default function ProjectsPage() {
    return (
        <div className="relative min-h-[calc(100dvh-64px)] overflow-hidden">
            <BackgroundLayer />
            <div className="relative z-10 max-w-[1120px] mx-auto px-6 md:px-12 py-24 select-none">
                <h1 className="text-[48px] leading-[56px] font-medium mb-16">Projects</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
                    {projects.map((project) => (
                        <Link key={project.slug} href={`/projects/${project.slug}`} className="group block focus:outline-none focus:ring-2 focus:ring-ring rounded-[16px]">
                            <div className="aspect-video bg-surface/50 backdrop-blur-sm rounded-[16px] mb-6 overflow-hidden relative border border-border group-hover:border-primary/50 transition-colors">
                                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                                    {project.title} Visual
                                </div>
                            </div>
                            <h2 className="text-[24px] leading-[32px] font-medium mb-2 group-hover:text-primary transition-colors">{project.title}</h2>
                            <p className="text-[16px] leading-[26px] text-muted-foreground">{project.category} — {project.desc}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
