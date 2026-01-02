"use client";

import React from "react";

interface IconProps {
    className?: string;
    size?: number;
    type: string;
}

const Icon = ({ className, size = 24, type }: IconProps) => {
    const icons: Record<string, React.ReactNode> = {
        code: (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
            </svg>
        ),
        palette: (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="13.5" cy="6.5" r=".5" /><circle cx="17.5" cy="10.5" r=".5" /><circle cx="8.5" cy="7.5" r=".5" /><circle cx="6.5" cy="12.5" r=".5" />
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
            </svg>
        ),
        cursor: (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" /><path d="M13 13l6 6" />
            </svg>
        ),
        grid: (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" />
            </svg>
        ),
        layers: (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" />
            </svg>
        ),
        mobile: (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12" y2="18" />
            </svg>
        ),
        component: (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19.439 15.424a1 1 0 0 0-1.609-1.306 6 6 0 1 1-5.914-7.275 1 1 0 0 0 .125-2 8 8 0 1 0 7.399 10.58z" /><circle cx="12" cy="12" r="10" />
            </svg>
        ),
        monitor: (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
            </svg>
        ),
        type: (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="4 7 4 4 20 4 20 7" /><line x1="9" y1="20" x2="15" y2="20" /><line x1="12" y1="4" x2="12" y2="20" />
            </svg>
        ),
        search: (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
        ),
        lightning: (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
        ),
        pencil: (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
            </svg>
        ),
        accessibility: (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="7" r="4" /><path d="M10 15v4a2 2 0 0 0 4 0v-4" /><path d="M16 11h-8" />
            </svg>
        ),
        circle: (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
            </svg>
        ),
        square: (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            </svg>
        ),
        triangle: (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
            </svg>
        ),
    };

    return <div className={`absolute select-none pointer-events-none ${className}`}>{icons[type] || icons.circle}</div>;
};

export default function BackgroundLayer() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden h-full">
            {/* Soft Blue Gradients */}
            <div className="absolute inset-x-0 top-0 h-[50dvh] bg-gradient-to-b from-primary/5 to-transparent opacity-60 dark:opacity-40" />
            <div className="absolute inset-x-0 bottom-0 h-[50dvh] bg-gradient-to-t from-primary/5 to-transparent opacity-60 dark:opacity-40" />

            {/* Icons Layer */}
            <div className="absolute inset-0 z-0 opacity-[0.10] dark:opacity-[0.15] text-foreground">
                <Icon className="top-[4%] left-[12%]" size={18} type="code" />
                <Icon className="top-[6%] left-[34%]" size={20} type="circle" />
                <Icon className="top-[3%] left-[56%]" size={20} type="palette" />
                <Icon className="top-[8%] left-[78%]" size={18} type="cursor" />
                <Icon className="top-[5%] left-[92%]" size={20} type="grid" />

                <Icon className="top-[15%] left-[7%]" size={22} type="layers" />
                <Icon className="top-[18%] left-[22%]" size={18} type="mobile" />
                <Icon className="top-[14%] left-[45%]" size={18} type="square" />
                <Icon className="top-[16%] left-[65%]" size={20} type="component" />
                <Icon className="top-[22%] left-[85%]" size={18} type="triangle" />

                <Icon className="top-[28%] left-[15%]" size={20} type="monitor" />
                <Icon className="top-[32%] left-[38%]" size={18} type="type" />
                <Icon className="top-[25%] left-[60%]" size={20} type="search" />
                <Icon className="top-[30%] left-[80%]" size={20} type="lightning" />
                <Icon className="top-[35%] left-[95%]" size={18} type="pencil" />

                <Icon className="top-[45%] left-[18%]" size={20} type="accessibility" />
                <Icon className="top-[42%] left-[42%]" size={18} type="code" />
                <Icon className="top-[48%] left-[65%]" size={18} type="circle" />
                <Icon className="top-[40%] left-[82%]" size={20} type="palette" />

                <Icon className="top-[52%] left-[5%]" size={18} type="cursor" />
                <Icon className="top-[58%] left-[28%]" size={20} type="grid" />
                <Icon className="top-[62%] left-[52%]" size={22} type="layers" />
                <Icon className="top-[54%] left-[75%]" size={18} type="mobile" />
                <Icon className="top-[60%] left-[94%]" size={18} type="square" />

                <Icon className="top-[72%] left-[12%]" size={20} type="square" />
                <Icon className="top-[75%] left-[38%]" size={22} type="component" />
                <Icon className="top-[68%] left-[62%]" size={18} type="monitor" />
                <Icon className="top-[80%] left-[82%]" size={20} type="type" />
                <Icon className="top-[75%] left-[95%]" size={18} type="search" />

                <Icon className="top-[88%] left-[8%]" size={22} type="search" />
                <Icon className="top-[85%] left-[25%]" size={18} type="lightning" />
                <Icon className="top-[92%] left-[48%]" size={20} type="pencil" />
                <Icon className="top-[85%] left-[72%]" size={22} type="accessibility" />
            </div>
        </div>
    );
}
