import Link from "next/link";
import Image from "next/image";
import BackgroundLayer from "@/components/BackgroundLayer";

export default function WorkDesignPage() {
    return (
        <div className="relative min-h-[calc(100dvh-64px)] overflow-hidden">
            <BackgroundLayer />
            <div className="relative z-10 max-w-[1120px] mx-auto px-6 md:px-12 py-24 select-none">
                <h1 className="text-[48px] leading-[56px] font-medium mb-16 text-foreground">Work & Design</h1>

                <div className="space-y-24">
                    {/* Logos Section */}
                    <section>
                        <div className="flex justify-between items-end mb-8 border-b border-border pb-4">
                            <h2 className="text-[32px] leading-[40px] font-medium">Logos</h2>
                            <span className="text-muted-foreground text-sm">Symbolism & Identity</span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <Link href="/design/personal-identity" className="group cursor-pointer">
                                <div className="aspect-square bg-surface/50 backdrop-blur-sm rounded-[32px] border border-border flex items-center justify-center overflow-hidden hover:shadow-2xl hover:border-border/80 transition-all duration-500 relative">
                                    <div className="relative w-3/4 h-3/4 group-hover:scale-110 transition-transform duration-500">
                                        <Image
                                            src="/images/design/bird-logo.png"
                                            alt="Kedareswari Identity"
                                            fill
                                            className="object-cover rounded-[24px]"
                                        />
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <h3 className="text-xl font-medium group-hover:text-primary transition-colors">Kedareswari Identity</h3>
                                    <p className="text-muted-foreground text-sm">Visual Identity • 2025</p>
                                </div>
                            </Link>

                            <Link href="/design/build-bond-identity" className="group cursor-pointer">
                                <div className="aspect-square bg-surface/50 backdrop-blur-sm rounded-[32px] border border-border flex items-center justify-center overflow-hidden hover:shadow-2xl hover:border-border/80 transition-all duration-500 relative">
                                    <div className="relative w-3/4 h-3/4 group-hover:scale-110 transition-transform duration-500">
                                        <Image
                                            src="/images/design/build-bond-logo-v2.png"
                                            alt="Build Bond Identity"
                                            fill
                                            className="object-cover rounded-[24px]"
                                        />
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <h3 className="text-xl font-medium group-hover:text-primary transition-colors">Build Bond</h3>
                                    <p className="text-muted-foreground text-sm">Brand Identity • 2025</p>
                                </div>
                            </Link>
                        </div>
                    </section>

                    {/* Posters Section */}
                    <section>
                        <div className="flex justify-between items-end mb-8 border-b border-border pb-4">
                            <h2 className="text-[32px] leading-[40px] font-medium">Posters & Visuals</h2>
                            <span className="text-muted-foreground text-sm">Exploration & Layout</span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <Link href="/design/creative-minds-poster" className="group cursor-pointer">
                                <div className="aspect-[2/3] bg-surface/50 backdrop-blur-sm rounded-[24px] border border-border flex items-center justify-center overflow-hidden hover:shadow-2xl hover:border-border/80 transition-all duration-500 relative">
                                    <Image
                                        src="/images/design/creative-minds-poster.png"
                                        alt="Creative Minds 2025"
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="mt-4">
                                    <h3 className="text-lg font-medium group-hover:text-primary transition-colors">Creative Minds 2025</h3>
                                    <p className="text-muted-foreground text-xs">Event Poster</p>
                                </div>
                            </Link>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
