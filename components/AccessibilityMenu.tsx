
"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function AccessibilityMenu({ onClose }: { onClose: () => void }) {
    // Placeholder states for UI demonstration
    const [textSize, setTextSize] = useState(100);
    const [isDyslexic, setIsDyslexic] = useState(false);
    const [isHighContrast, setIsHighContrast] = useState(false);

    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <div className="absolute top-[80px] right-8 w-80 bg-surface border border-white/5 rounded-[16px] shadow-xl p-6 z-50 animate-in fade-in slide-in-from-top-2">
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-white/5">
                <h3 className="font-medium text-lg text-foreground">Accessibility</h3>
                <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            </div>

            <div className="space-y-6 max-h-[60vh] overflow-y-auto pr-2">
                {/* Text to Speech */}
                <div className="flex justify-between items-center">
                    <span className="text-sm text-foreground">Text to Speech</span>
                    <ToggleSwitch />
                </div>

                {/* Text Size */}
                <div className="flex flex-col gap-2">
                    <span className="text-sm text-foreground">Text Size: {textSize}%</span>
                    <div className="flex gap-2">
                        <button
                            onClick={() => setTextSize(Math.max(80, textSize - 10))}
                            className="flex-1 py-1 bg-muted rounded-[8px] hover:bg-border transition-colors text-sm"
                        >
                            A-
                        </button>
                        <button
                            onClick={() => setTextSize(Math.min(150, textSize + 10))}
                            className="flex-1 py-1 bg-muted rounded-[8px] hover:bg-border transition-colors text-sm"
                        >
                            A+
                        </button>
                    </div>
                </div>

                {/* Text Spacing & Line Height */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                        <span className="text-sm text-foreground">Line Height</span>
                        <div className="flex gap-1">
                            <button className="flex-1 py-1 bg-muted rounded-[8px] hover:bg-border">1x</button>
                            <button className="flex-1 py-1 bg-muted rounded-[8px] hover:bg-border">1.5x</button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="text-sm text-foreground">Spacing</span>
                        <div className="flex gap-1">
                            <button className="flex-1 py-1 bg-muted rounded-[8px] hover:bg-border">-</button>
                            <button className="flex-1 py-1 bg-muted rounded-[8px] hover:bg-border">+</button>
                        </div>
                    </div>
                </div>

                {/* Toggles */}
                <div className="space-y-4">
                    <div className="flex justify-between items-center">
                        <span className="text-sm text-foreground">Highlight Links</span>
                        <ToggleSwitch />
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-sm text-foreground">Dyslexia-Friendly</span>
                        <ToggleSwitch />
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-sm text-foreground">Hide Images</span>
                        <ToggleSwitch />
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-sm text-foreground">Invert Colors</span>
                        <ToggleSwitch />
                    </div>
                </div>

                {/* Cursor Options */}
                <div className="flex flex-col gap-2">
                    <span className="text-sm text-foreground">Cursor</span>
                    <div className="flex gap-2 text-xs">
                        <button className="flex-1 py-2 bg-primary text-background rounded-[8px]">Default</button>
                        <button className="flex-1 py-2 bg-muted rounded-[8px] hover:bg-border">Large</button>
                        <button className="flex-1 py-2 bg-muted rounded-[8px] hover:bg-border">Guide</button>
                    </div>
                </div>

                {/* Theme */}
                <div className="flex justify-between items-center pt-4 border-t border-white/5">
                    <span className="text-sm text-foreground">Theme</span>
                    <div className="flex gap-2">
                        <button
                            onClick={() => setTheme("light")}
                            className={`px-3 py-1 rounded-[8px] text-xs transition-colors ${theme === 'light' ? 'bg-primary text-background' : 'bg-muted hover:bg-border'}`}
                        >
                            Light
                        </button>
                        <button
                            onClick={() => setTheme("dark")}
                            className={`px-3 py-1 rounded-[8px] text-xs transition-colors ${theme === 'dark' ? 'bg-primary text-background' : 'bg-muted hover:bg-border'}`}
                        >
                            Dark
                        </button>
                        <button
                            onClick={() => setTheme("system")}
                            className={`px-3 py-1 rounded-[8px] text-xs transition-colors ${theme === 'system' ? 'bg-primary text-background' : 'bg-muted hover:bg-border'}`}
                        >
                            System
                        </button>
                    </div>
                </div>

                <button className="w-full py-2 text-primary hover:underline text-sm font-medium">
                    Reset Settings
                </button>
            </div>
        </div>
    );
}

function ToggleSwitch({ active }: { active?: boolean }) {
    return (
        <button className={`w-10 h-6 rounded-full p-1 transition-colors ${active ? 'bg-primary' : 'bg-muted'}`}>
            <div className={`w-4 h-4 bg-background rounded-full shadow-sm transition-transform ${active ? 'translate-x-4' : ''}`} />
        </button>
    );
}
