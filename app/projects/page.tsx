"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface Project {
    slug: string;
    title: string;
    category: string;
    desc: string;
}

export default function ProjectsPage() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await fetch('/api/projects');
                if (res.ok) {
                    const data = await res.json();
                    setProjects(data);
                }
            } catch (error) {
                console.error("Failed to fetch projects");
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    return (
        <div className="relative min-h-[calc(100dvh-64px)] overflow-hidden bg-transparent">
            <div className="relative z-10 max-w-[1120px] mx-auto px-6 md:px-12 py-24 select-none">
                <h1 className="text-[48px] leading-[56px] font-medium mb-16 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-muted-foreground">Projects</h1>

                {loading ? (
                    <div className="text-muted-foreground">Loading projects...</div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
                        {projects.map((project) => (
                            <Link key={project.slug} href={`/projects/${project.slug}`} className="group block focus:outline-none focus:ring-2 focus:ring-ring rounded-[16px]">
                                <div className="aspect-video bg-surface/50 backdrop-blur-sm rounded-[16px] mb-6 overflow-hidden relative border border-white/5 hover:border-primary/50 hover:shadow-[0_20px_40px_-15px_rgba(111,174,255,0.3)] transition-all duration-500">
                                    <div className="absolute inset-0 flex items-center justify-center text-muted-foreground font-light tracking-wide opacity-50">
                                        {project.title} Visual
                                    </div>
                                </div>
                                <h2 className="text-[24px] leading-[32px] font-medium mb-2 group-hover:text-primary transition-colors">{project.title}</h2>
                                <p className="text-[16px] leading-[26px] text-muted-foreground">{project.category} — {project.desc}</p>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
