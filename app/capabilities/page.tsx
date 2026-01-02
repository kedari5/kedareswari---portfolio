import BackgroundLayer from "@/components/BackgroundLayer";
import BrandIcon from "@/components/BrandIcon";

export default function CapabilitiesPage() {
    const capabilities = [
        {
            title: "Research",
            description: "Insight-driven understanding. I define problems by observing real usage patterns, not just guessing.",
            tools: ["Miro", "Maze", "FigJam", "Google Forms", "Excel Sheets", "Hotjar"]
        },
        {
            title: "Design",
            description: "Clear, intuitive, accessible interfaces. My systems are built to scale and remain calm under complexity.",
            tools: ["Figma", "Canva", "Adobe XD", "Sketch"]
        },
        {
            title: "Development",
            description: "Structured and practical implementation. I write semantic, clean code that considers the future maintainer.",
            tools: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Python", "Java", "C", "MERN Stack"]
        },
        {
            title: "Testing",
            description: "Validation through real usage. I believe accessibility and reliability are non-negotiable baselines.",
            tools: ["Maze", "Hotjar", "Manual Testing"]
        },
        {
            title: "Versioning & Deployment",
            description: "Seamless integration and delivery. I ensure code is safely versioned and efficiently deployed.",
            tools: ["GitHub", "Vercel"]
        },
    ];

    return (
        <div className="relative min-h-[calc(100dvh-64px)] overflow-hidden">
            <BackgroundLayer />
            <div className="relative z-10 max-w-[1120px] mx-auto px-6 md:px-12 py-24 select-none">
                <h1 className="text-[48px] leading-[56px] font-medium mb-16 text-foreground">Capabilities</h1>

                <div className="flex flex-col gap-20">
                    {capabilities.map((cap) => (
                        <section key={cap.title} className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 border-t border-border/40 pt-12 first:border-t-0 first:pt-0">
                            <div className="md:col-span-5">
                                <h2 className="text-[32px] leading-[40px] font-medium mb-6 text-foreground">{cap.title}</h2>
                                <p className="text-[18px] leading-[28px] text-muted-foreground">
                                    {cap.description}
                                </p>
                            </div>

                            <div className="md:col-span-7">
                                <div className="flex flex-wrap gap-4">
                                    {cap.tools.map((tool) => (
                                        <div key={tool} className="px-6 py-3 pl-4 bg-surface/40 hover:bg-surface/70 backdrop-blur-md border border-border/50 rounded-[12px] transition-colors cursor-default flex items-center gap-3">
                                            <BrandIcon name={tool} className="w-5 h-5" />
                                            <span className="text-[16px] font-medium text-foreground">{tool}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </div>
    );
}
