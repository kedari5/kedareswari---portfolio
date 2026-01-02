
import Link from "next/link";

import BackgroundLayer from "@/components/BackgroundLayer";

export default function ResumePage() {
    return (
        <div className="relative min-h-[calc(100dvh-64px)] overflow-hidden flex flex-col">
            <BackgroundLayer />
            <div className="relative z-10 max-w-[1120px] mx-auto px-6 md:px-12 py-24 select-none w-full flex-1 flex flex-col">
                <div className="flex justify-between items-center mb-12">
                    <h1 className="text-[48px] leading-[56px] font-medium text-foreground">Resume</h1>
                    <button
                        className="px-6 py-3 bg-primary text-background rounded-[10px] text-sm font-medium hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-ring"
                        aria-label="Download Resume PDF"
                    >
                        Download PDF
                    </button>
                </div>

                <div className="flex-1 bg-surface/80 backdrop-blur-md border border-border rounded-[16px] flex items-center justify-center min-h-[600px] text-muted-foreground relative overflow-hidden">
                    {/* Placeholder for PDF Viewer */}
                    <div className="text-center p-8">
                        <p className="mb-4 text-lg">Resume Viewer Placeholder</p>
                        <p className="text-sm opacity-70 mb-8">PDF embedding would go here.</p>

                        <Link href="/about" className="text-primary hover:underline underline-offset-4">
                            Read about my experience guidelines &rarr;
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
