import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
    return (
        <main className="min-h-[calc(100dvh-64px)] w-full flex items-center bg-transparent relative overflow-hidden pt-[32px] md:pt-0">

            <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12 py-12 md:py-24 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">

                    {/* Left: Text Content */}
                    <div className="flex flex-col gap-8 order-2 md:order-1 animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-backwards">
                        <h1 className="text-[40px] sm:text-[48px] md:text-[56px] lg:text-[64px] leading-[1.1] font-medium tracking-tight">
                            Curiosity and clarity <br className="hidden md:block" /> shape every decision.
                        </h1>

                        <div className="space-y-6 max-w-lg">
                            <p className="text-[18px] md:text-[20px] leading-[1.6] text-muted-foreground font-light text-pretty">
                                Understanding the problem always comes before shaping solutions.
                                Every screen is designed to feel calm, clear, and comfortable.
                            </p>
                            <p className="text-[18px] md:text-[20px] leading-[1.6] text-muted-foreground font-light text-pretty">
                                When something works without explanation, the design has done its job.
                            </p>
                        </div>

                        <div className="pt-4">
                            <Link
                                href="/projects"
                                className="inline-flex items-center text-[16px] font-medium text-foreground hover:text-primary transition-colors group"
                            >
                                Explore projects
                                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                            </Link>
                        </div>
                    </div>

                    {/* Right: Profile Image */}
                    <div className="order-1 md:order-2 flex justify-center md:justify-end animate-in fade-in zoom-in-95 duration-1000 delay-200 fill-mode-backwards">
                        <div className="relative w-full max-w-[400px] aspect-square rounded-[24px] overflow-hidden bg-muted shadow-sm">
                            <Image
                                src="/images/profile-portrait.jpg"
                                alt="Kedareswari"
                                fill
                                className="object-cover object-center"
                                priority
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}
