"use client";

import BrandIcon from "@/components/BrandIcon";
import { useEffect, useState } from "react";

interface Capability {
    title: string;
    description: string;
    tools: string[];
}

export default function CapabilitiesPage() {
    const [capabilities, setCapabilities] = useState<Capability[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCapabilities = async () => {
            try {
                const res = await fetch('/api/capabilities');
                if (res.ok) {
                    const data = await res.json();
                    setCapabilities(data);
                }
            } catch (error) {
                console.error("Failed to fetch capabilities");
            } finally {
                setLoading(false);
            }
        };
        fetchCapabilities();
    }, []);

    return (
        <div className="relative min-h-[calc(100dvh-64px)] overflow-hidden">
            <div className="relative z-10 max-w-[1120px] mx-auto px-6 md:px-12 py-24 select-none">
                <h1 className="text-[48px] leading-[56px] font-medium mb-16">Capabilities</h1>

                {loading ? (
                    <div className="text-muted-foreground">Loading capabilities...</div>
                ) : (
                    <div className="flex flex-col gap-20">
                        {capabilities.map((cap) => (
                            <section key={cap.title} className="grid grid-cols-2 md:grid-cols-12 gap-4 md:gap-16 border-t border-white/5 pt-12 first:border-t-0 first:pt-0">
                                <div className="md:col-span-5 flex flex-col gap-2">
                                    <h2 className="text-[24px] md:text-[32px] leading-[1.2] font-semibold md:font-medium text-foreground">{cap.title}</h2>
                                    <p className="text-[14px] md:text-[20px] leading-[1.5] md:leading-[32px] font-normal md:font-medium text-muted-foreground/90">
                                        {cap.description}
                                    </p>
                                </div>

                                <div className="md:col-span-7">
                                    <div className="flex flex-wrap gap-2 md:gap-4 justify-end md:justify-start">
                                        {cap.tools.map((tool) => (
                                            <div
                                                key={tool}
                                                className="w-10 h-10 md:w-14 md:h-14 bg-slate-100 dark:bg-white/5 border border-black/5 dark:border-white/10 hover:bg-slate-200 dark:hover:bg-white/10 backdrop-blur-md rounded-[12px] md:rounded-[16px] transition-all hover:scale-105 active:scale-95 cursor-default flex items-center justify-center group relative shadow-sm"
                                                title={tool}
                                            >
                                                <BrandIcon name={tool} className="w-5 h-5 md:w-6 h-6" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
