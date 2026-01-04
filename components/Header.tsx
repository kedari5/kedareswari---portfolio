"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Handshake, Map } from "lucide-react";

import AccessibilityMenu from "@/components/AccessibilityMenu";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLogoModalOpen, setIsLogoModalOpen] = useState(false);
    const { theme, setTheme, resolvedTheme } = useTheme();

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Prevent scrolling when menu or modal is open
    useEffect(() => {
        if (isMenuOpen || isLogoModalOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isMenuOpen, isLogoModalOpen]);

    return (
        <>
            <header className="fixed top-0 left-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-white/5 transition-colors duration-200">
                <div className="w-full px-6 md:px-12 h-[64px] flex items-center justify-between relative">
                    {/* Logo - Click to Open Lightbox */}
                    <button
                        onClick={() => setIsLogoModalOpen(true)}
                        className="relative h-14 w-14 flex items-center justify-center focus:outline-none hover:opacity-80 transition-opacity"
                        aria-label="View Logo Full Screen"
                    >
                        {/* Bird Logo (Static) */}
                        <div className="relative w-full h-full">
                            <Image
                                src="/logo-bird.png"
                                alt="Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </button>

                    {/* Right Controls */}
                    <div className="flex items-center gap-3">
                        {/* Accessibility Menu */}
                        <AccessibilityMenu />

                        {/* Theme Toggle Button */}
                        {mounted && (
                            <button
                                onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
                                className="flex items-center justify-center w-12 h-12 rounded-full border border-white/5 bg-surface shadow-sm text-foreground hover:bg-muted transition-all focus:outline-none focus:ring-2 focus:ring-primary"
                                aria-label="Toggle Theme"
                            >
                                {resolvedTheme === 'dark' ? (
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg>
                                ) : (
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
                                )}
                            </button>
                        )}

                        {/* Menu Button (Hamburger) */}
                        <button
                            onClick={() => setIsMenuOpen(true)}
                            className="flex items-center justify-center w-12 h-12 rounded-full text-foreground hover:bg-muted transition-all focus:outline-none focus:ring-2 focus:ring-primary"
                            aria-label="Open Menu"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="3" y1="12" x2="21" y2="12" />
                                <line x1="3" y1="6" x2="21" y2="6" />
                                <line x1="3" y1="18" x2="21" y2="18" />
                            </svg>
                        </button>
                    </div>
                </div>
            </header>

            {/* Logo Lightbox Modal */}
            {isLogoModalOpen && (
                <div
                    className="fixed inset-0 z-[70] bg-black/5 backdrop-blur-md flex items-center justify-center p-6 animate-in fade-in duration-500 cursor-zoom-out"
                    onClick={() => setIsLogoModalOpen(false)}
                >
                    {/* Close Button */}
                    <button
                        className="absolute top-8 right-8 text-white/40 hover:text-white transition-colors"
                        onClick={() => setIsLogoModalOpen(false)}
                    >
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>

                    {/* Premium Glassmorphic Card */}
                    <div
                        className="relative p-12 md:p-20 rounded-[40px] bg-white/[0.03] border border-white/20 shadow-2xl animate-in zoom-in-95 duration-500 backdrop-blur-3xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Subtle Inner Glow */}
                        <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-white/[0.05] to-transparent pointer-events-none" />

                        <div className="relative w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] md:w-[480px] md:h-[480px]">
                            <Image
                                src="/logo-full.png"
                                alt="Kedareswari Full Logo"
                                fill
                                className="object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                                priority
                            />
                        </div>
                    </div>
                </div>
            )}

            {/* Side Drawer Menu */}
            {isMenuOpen && (
                <>
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm animate-in fade-in duration-300"
                        onClick={() => setIsMenuOpen(false)}
                    />

                    {/* Drawer Content */}
                    <div className="fixed top-0 right-0 h-full w-[85%] sm:w-[400px] z-[70] bg-background shadow-2xl flex flex-col animate-in slide-in-from-right duration-500 ease-out border-l border-white/5">

                        {/* 1. Header Area (Clean Close Button) */}
                        <div className="px-6 pt-8 pb-4">
                            <div className="flex items-center justify-between mb-8">
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => setTheme('light')}
                                        className={`px-3 py-1.5 rounded-full text-[12px] font-medium transition-all ${resolvedTheme === 'light' ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:bg-muted/80'}`}
                                    >
                                        Light Theme
                                    </button>
                                    <button
                                        onClick={() => setTheme('dark')}
                                        className={`px-3 py-1.5 rounded-full text-[12px] font-medium transition-all ${resolvedTheme === 'dark' ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:bg-muted/80'}`}
                                    >
                                        Dark Theme
                                    </button>
                                </div>
                                <button
                                    onClick={() => setIsMenuOpen(false)}
                                    className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-foreground border border-transparent hover:border-white/5"
                                    aria-label="Close Menu"
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                                </button>
                            </div>
                        </div>

                        {/* 2. Navigation Area */}
                        <nav className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-1">
                            <MenuLink href="/" label="Home" icon="dashboard" onClick={() => setIsMenuOpen(false)} />
                            <MenuLink href="/#projects" label="Projects" icon="projects" onClick={() => setIsMenuOpen(false)} />
                            <MenuLink href="/#designs" label="Designs" icon="design" onClick={() => setIsMenuOpen(false)} />
                            <MenuLink href="/#capabilities" label="Capabilities" icon="sparkles" onClick={() => setIsMenuOpen(false)} />
                            <MenuLink href="/#about" label="About" icon="users" onClick={() => setIsMenuOpen(false)} />

                            <div className="h-px bg-border/50 my-4 mx-2" />

                            <MenuLink href="/docs/resume.docx" label="Resume" icon="file" onClick={() => setIsMenuOpen(false)} target="_blank" />
                            <MenuLink href="/sitemap" label="Site Map" icon="map" onClick={() => setIsMenuOpen(false)} />
                            <MenuLink href="/#collaboration" label="Contact" icon="handshake" onClick={() => setIsMenuOpen(false)} />
                        </nav>

                        {/* 3. Footer Area (Profile) */}
                        <div className="p-4 border-t border-white/5">
                            <Link
                                href="/contact"
                                onClick={() => setIsMenuOpen(false)}
                                className="flex items-center justify-between p-3 rounded-2xl bg-muted/30 border border-transparent hover:border-border transition-all group"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="relative w-16 h-16 flex-shrink-0">
                                        <Image
                                            src="/logo-bird.png"
                                            alt="Profile Logo"
                                            fill
                                            className="object-contain"
                                            priority
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-sm font-semibold text-foreground">Kedareswari</span>
                                        <span className="text-[11px] text-muted-foreground uppercase tracking-wider font-medium">Designer and Developer</span>
                                    </div>
                                </div>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground group-hover:translate-x-0.5 transition-transform"><polyline points="9 18 15 12 9 6" /></svg>
                            </Link>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}

// Helper component for menu links with icons
function MenuLink({ href, label, icon, onClick, isActive, target }: { href: string; label: string; icon: string; onClick: () => void; isActive?: boolean; target?: string }) {
    const icons: Record<string, React.ReactNode> = {
        dashboard: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>,
        projects: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg>,
        design: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="13.5" cy="6.5" r=".5" /><circle cx="17.5" cy="10.5" r=".5" /><circle cx="8.5" cy="7.5" r=".5" /><circle cx="6.5" cy="12.5" r=".5" /><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" /></svg>,
        sparkles: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" /></svg>,
        users: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
        handshake: <Handshake size={20} />,
        map: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 4L19 7.5V19L14.5 22L10 19V7.5L14.5 4Z" /><polyline points="14.5 4 14.5 19 19 19" /><polyline points="14.5 7.5 10 7.5 10 19" /></svg>,
        file: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14.5 2 14.5 7 20 7" /></svg>,
    };

    return (
        <Link
            href={href}
            onClick={onClick}
            target={target}
            rel={target === "_blank" ? "noopener noreferrer" : undefined}
            className={`flex items-center gap-3.5 px-4 py-3 rounded-xl transition-all group ${isActive
                ? 'bg-primary/10 text-primary'
                : 'text-muted-foreground hover:bg-muted/60 hover:text-foreground'
                }`}
        >
            <div className={`transition-transform group-hover:scale-110 ${isActive ? 'text-primary' : 'text-muted-foreground group-hover:text-primary'}`}>
                {icons[icon] || icons.dashboard}
            </div>
            <span className="text-[14px] font-medium tracking-tight">{label}</span>
        </Link>
    );
}

// Helper component for icon links (aliased for settings etc)
function IconLink({ href, label, icon, onClick }: { href: string; label: string; icon: string; onClick: () => void }) {
    return <MenuLink href={href} label={label} icon={icon} onClick={onClick} />;
}
