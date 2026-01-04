"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

interface IconProps {
    className?: string;
    size?: number;
    type: string;
    style?: React.CSSProperties;
    delay?: string;
}

const Icon = ({ className, size = 16, type, style, delay = "0s" }: IconProps) => {
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

    return (
        <div
            className={`absolute select-none pointer-events-none bg-icon-transition ${className}`}
            style={{ ...style }}
        >
            {icons[type] || icons.circle}
        </div>
    );
};

const ParticleBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particles = useRef<any[]>([]);
    const mouse = useRef({ x: -1000, y: -1000 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;

        const init = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            particles.current = [];
            const count = Math.min(window.innerWidth / 4, 300); // Dynamic count based on screen size

            for (let i = 0; i < count; i++) {
                particles.current.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 1.5 + 0.5,
                    vx: (Math.random() - 0.5) * 0.2,
                    vy: (Math.random() - 0.5) * 0.2,
                    opacity: Math.random() * 0.5 + 0.2
                });
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.current.forEach(p => {
                // Background drift
                p.x += p.vx;
                p.y += p.vy;

                // Wrap around
                if (p.x < 0) p.x = canvas.width;
                if (p.x > canvas.width) p.x = 0;
                if (p.y < 0) p.y = canvas.height;
                if (p.y > canvas.height) p.y = 0;

                // Mouse interaction (Antigravity style attraction)
                const dx = mouse.current.x - p.x;
                const dy = mouse.current.y - p.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const maxDist = 300;

                let tx = 0;
                let ty = 0;

                if (distance < maxDist) {
                    const force = (maxDist - distance) / maxDist;
                    tx = dx * force * 0.05;
                    ty = dy * force * 0.05;
                }

                ctx.beginPath();
                ctx.arc(p.x + tx, p.y + ty, p.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(111, 174, 255, ${p.opacity})`;
                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouse.current = { x: e.clientX, y: e.clientY };
        };

        const handleResize = () => {
            init();
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('resize', handleResize);
        init();
        animate();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-20" />;
};

export default function BackgroundLayer() {
    const pathname = usePathname();
    const isHome = pathname === "/";
    const [mounted, setMounted] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // Mouse position ref for animation loop (no state to avoid re-renders)
    const mouseRef = useRef({ x: -1000, y: -1000 });

    // Icon state refs
    const iconsRef = useRef<any[]>([]);

    useEffect(() => {
        setMounted(true);
        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    // Generate icons programmatically for better distribution and count
    const generateIcons = (isHomePage: boolean) => {
        const columns = isHomePage ? 11 : 10;
        const rows = isHomePage ? 11 : 10;
        const widthPerCell = 100 / columns;
        const heightPerCell = 100 / rows;
        const iconTypes = [
            "code", "layers", "monitor", "accessibility", "type",
            "cursor", "pencil", "mobile", "palette", "grid",
            "lightning", "triangle", "component", "search", "circle", "square"
        ];

        const newIcons = [];
        let typeIndex = 0;

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < columns; c++) {
                // Base position center of cell
                const baseX = c * widthPerCell + widthPerCell / 2;
                const baseY = r * heightPerCell + heightPerCell / 2;

                // Randomize within cell (jitter), keeping padding
                const jitterX = (Math.random() - 0.5) * (widthPerCell * 0.6);
                const jitterY = (Math.random() - 0.5) * (heightPerCell * 0.6);

                newIcons.push({
                    type: iconTypes[typeIndex % iconTypes.length],
                    x: baseX + jitterX,
                    y: baseY + jitterY,
                    // Increased velocity range for faster movement
                    vx: (Math.random() - 0.5) * 0.8,
                    vy: (Math.random() - 0.5) * 0.8,
                });
                typeIndex++;
            }
        }
        return newIcons; // Simple shuffle could be added if needed, but sequential types is fine
    };

    // Initialize icon data with velocities
    const iconData = useRef<any[]>([]);

    // Update refs if path changes
    useEffect(() => {
        // Regenerate icons on path change to adapt density
        iconData.current = generateIcons(isHome);
        setMounted(true); // Trigger re-render to pick up new data
    }, [pathname, isHome]);

    // Animation Loop
    useEffect(() => {
        if (!mounted || !containerRef.current) return;

        let animationFrameId: number;
        // Initialize drift state for each icon
        // We ensure we map over the CURRENT iconData to setup state
        let iconState = iconData.current.map(icon => ({
            ...icon,
            driftX: 0,
            driftY: 0,
            currX: 0,
            currY: 0
        }));

        const animate = () => {
            if (!containerRef.current) return;

            const children = containerRef.current.children;
            const width = window.innerWidth;
            const height = window.innerHeight;

            // If children count mismatch (re-render pending), skip frame or just cap
            const count = Math.min(children.length, iconState.length);

            for (let i = 0; i < count; i++) {
                const icon = iconState[i];
                const el = children[i] as HTMLElement;
                if (!el) continue;

                // 1. Update Drift - INCREASED SPEED HERE (was 0.5)
                icon.driftX += icon.vx * 1.2;
                icon.driftY += icon.vy * 1.2;

                // Bounce drift off virtual walls (wider range allowed now)
                if (Math.abs(icon.driftX) > 150) icon.vx *= -1;
                if (Math.abs(icon.driftY) > 150) icon.vy *= -1;

                // 2. Calculate Base Position pixels
                const basePathX = (icon.x / 100) * width;
                const basePathY = (icon.y / 100) * height;

                // 3. Mouse Attraction calculation
                const totalX = basePathX + icon.driftX;
                const totalY = basePathY + icon.driftY;

                const dx = mouseRef.current.x - totalX;
                const dy = mouseRef.current.y - totalY;
                const dist = Math.sqrt(dx * dx + dy * dy);

                const maxDist = 400; // More localized interaction
                const pull = dist < maxDist ? (1 - dist / maxDist) : 0;

                // Mouse Target Offset
                const mouseOffsetX = dx * pull * 0.25;
                const mouseOffsetY = dy * pull * 0.25;

                // Transitioning the drift + attraction
                const targetTransformX = icon.driftX + mouseOffsetX;
                const targetTransformY = icon.driftY + mouseOffsetY;

                el.style.transform = `translate3d(${targetTransformX}px, ${targetTransformY}px, 0)`;
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();
        return () => cancelAnimationFrame(animationFrameId);
    }, [mounted, isHome]); // Re-run if page changes (isHome changes icon count)

    if (!mounted) return <div className="fixed inset-0 z-[-1] bg-background" />;

    // Use current ref data for rendering
    const activeIconData = iconData.current;

    return (
        <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden h-screen w-screen bg-transparent">
            {/* Base Background Gradient */}
            <div className="absolute inset-0 bg-background transition-colors duration-700" />

            {/* Antigravity Particle System */}
            <ParticleBackground />

            {/* Brand Icons Layer */}
            <div ref={containerRef} className="absolute inset-0 opacity-[0.35] dark:opacity-[0.5] text-[var(--icon-color)]">
                {activeIconData.map((icon, i) => (
                    <Icon
                        key={`${icon.type}-${i}`}
                        type={icon.type}
                        size={14}
                        style={{
                            left: `${icon.x}%`,
                            top: `${icon.y}%`,
                        }}
                    />
                ))}
            </div>
        </div>
    );
}
