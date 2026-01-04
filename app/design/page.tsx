"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

interface DesignItem {
    slug: string;
    title: string;
    category: string;
    image: string;
}

interface DesignData {
    logos: DesignItem[];
    posters: DesignItem[];
}

export default function WorkDesignPage() {
    const [data, setData] = useState<DesignData>({ logos: [], posters: [] });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/design');
                if (res.ok) {
                    const json = await res.json();
                    setData(json);
                }
            } catch (error) {
                console.error("Failed to fetch design data");
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="relative min-h-[calc(100dvh-64px)] overflow-hidden bg-transparent">
            <div className="relative z-10 max-w-[1120px] mx-auto px-6 md:px-12 py-24 select-none">
                <h1 className="text-[48px] leading-[56px] font-medium mb-16">Work & Design</h1>

                {loading ? (
                    <div className="text-muted-foreground">Loading designs...</div>
                ) : (
                    <div className="space-y-24">
                        {/* Logos Section */}
                        {data.logos.length > 0 && (
                            <section>
                                <div className="flex justify-between items-end mb-8 border-b border-white/5 pb-4">
                                    <h2 className="text-[32px] leading-[40px] font-medium">Logos</h2>
                                    <span className="text-muted-foreground text-sm">Symbolism & Identity</span>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {data.logos.map((item) => (
                                        <Link key={item.slug} href={`/design/${item.slug}`} className="group cursor-pointer">
                                            <div className="aspect-square bg-surface/50 backdrop-blur-sm rounded-[32px] border border-white/5 flex items-center justify-center overflow-hidden hover:shadow-2xl hover:border-white/20 transition-all duration-500 relative">
                                                <div className="relative w-3/4 h-3/4 group-hover:scale-110 transition-transform duration-500">
                                                    <Image
                                                        src={item.image}
                                                        alt={item.title}
                                                        fill
                                                        className="object-cover rounded-[24px]"
                                                    />
                                                </div>
                                            </div>
                                            <div className="mt-4">
                                                <h3 className="text-xl font-medium group-hover:text-primary transition-colors">{item.title}</h3>
                                                <p className="text-muted-foreground text-sm">{item.category}</p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Posters Section */}
                        {data.posters.length > 0 && (
                            <section>
                                <div className="flex justify-between items-end mb-8 border-b border-white/5 pb-4">
                                    <h2 className="text-[32px] leading-[40px] font-medium">Posters & Visuals</h2>
                                    <span className="text-muted-foreground text-sm">Exploration & Layout</span>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    {data.posters.map((item) => (
                                        <Link key={item.slug} href={`/design/${item.slug}`} className="group cursor-pointer">
                                            <div className="aspect-[2/3] bg-surface/50 backdrop-blur-sm rounded-[24px] border border-white/5 flex items-center justify-center overflow-hidden hover:shadow-2xl hover:border-white/20 transition-all duration-500 relative">
                                                <Image
                                                    src={item.image}
                                                    alt={item.title}
                                                    fill
                                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                            </div>
                                            <div className="mt-4">
                                                <h3 className="text-lg font-medium group-hover:text-primary transition-colors">{item.title}</h3>
                                                <p className="text-muted-foreground text-xs">{item.category}</p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </section>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
