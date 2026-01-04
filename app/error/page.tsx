
"use client";

import Link from "next/link";
import { AlertCircle, ArrowLeft } from "lucide-react";

export default function ErrorPage() {
    return (
        <div className="relative min-h-[calc(100dvh-64px)] overflow-hidden bg-transparent flex items-center justify-center">
            <div className="relative z-10 max-w-[1120px] mx-auto px-6 md:px-12 py-24 select-none text-center">
                <div className="bg-surface/80 backdrop-blur-md p-10 md:p-16 rounded-[32px] border border-white/5 shadow-2xl flex flex-col items-center max-w-2xl mx-auto">

                    <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center mb-8 border border-red-500/20">
                        <AlertCircle className="w-10 h-10 text-red-500" />
                    </div>

                    <h1 className="text-[40px] md:text-[48px] leading-[1.1] font-medium mb-6 bg-gradient-to-b from-white to-red-400 bg-clip-text text-transparent">
                        Something went wrong
                    </h1>

                    <p className="text-[18px] md:text-[20px] leading-[1.6] text-muted-foreground mb-10 max-w-md">
                        We couldn't process your request. This might be due to a network error or a temporary issue with the submission service.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                        <Link
                            href="/contact"
                            className="px-8 py-4 bg-primary text-background font-bold rounded-full hover:brightness-110 transition-all flex items-center justify-center gap-2 group"
                        >
                            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                            Try Again
                        </Link>

                        <Link
                            href="/"
                            className="px-8 py-4 bg-white/5 hover:bg-white/10 text-foreground font-medium rounded-full border border-white/10 transition-all flex items-center justify-center"
                        >
                            Go Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
