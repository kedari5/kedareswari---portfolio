"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import {
    Eye,
    Type,
    MoveHorizontal,
    MoveVertical,
    MousePointer2,
    Image as ImageIcon,
    RotateCcw,
    Sun,
    Moon,
    Contrast,
    BookOpen
} from "lucide-react";

export default function AccessibilityMenu() {
    const { theme, setTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    // Accessibility States
    const [textSize, setTextSize] = useState(100);
    const [lineHeight, setLineHeight] = useState(150);
    const [letterSpacing, setLetterSpacing] = useState(0);
    const [isDyslexiaFont, setIsDyslexiaFont] = useState(false);
    const [isHighContrast, setIsHighContrast] = useState(false);
    const [highlightLinks, setHighlightLinks] = useState(false);
    const [hideImages, setHideImages] = useState(false);
    const [largeCursor, setLargeCursor] = useState(false);
    const [textToSpeech, setTextToSpeech] = useState(false);

    useEffect(() => {
        // Apply changes to document root
        const root = document.documentElement;

        // Text Size
        root.style.fontSize = `${textSize}%`;

        // Line Height
        root.style.setProperty("--acc-line-height", `${lineHeight}%`);
        document.body.style.lineHeight = `${lineHeight}%`;

        // Letter Spacing
        document.body.style.letterSpacing = `${letterSpacing}px`;

        // Dyslexia Font
        if (isDyslexiaFont) {
            document.body.classList.add("font-dyslexia");
        } else {
            document.body.classList.remove("font-dyslexia");
        }

        // High Contrast / Invert
        if (isHighContrast) {
            document.body.classList.add("filter-invert");
        } else {
            document.body.classList.remove("filter-invert");
        }

        // Highlight Links
        if (highlightLinks) {
            document.body.classList.add("highlight-links");
        } else {
            document.body.classList.remove("highlight-links");
        }

        // Hide Images
        if (hideImages) {
            document.body.classList.add("hide-images");
        } else {
            document.body.classList.remove("hide-images");
        }

        // Large Cursor
        if (largeCursor) {
            document.body.classList.add("cursor-large");
        } else {
            document.body.classList.remove("cursor-large");
        }

    }, [textSize, lineHeight, letterSpacing, isDyslexiaFont, isHighContrast, highlightLinks, hideImages, largeCursor]);

    const resetSettings = () => {
        setTextSize(100);
        setLineHeight(150);
        setLetterSpacing(0);
        setIsDyslexiaFont(false);
        setIsHighContrast(false);
        setHighlightLinks(false);
        setHideImages(false);
        setLargeCursor(false);
        setTextToSpeech(false);
        setTheme("light");
    };

    if (!isOpen) {
        return (
            <button
                onClick={() => setIsOpen(true)}
                className="flex items-center justify-center w-12 h-12 rounded-full border border-white/5 bg-surface shadow-sm text-foreground hover:bg-muted transition-all focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label="Open Accessibility Menu"
            >
                <Eye className="w-5 h-5" />
            </button>
        );
    }

    return (
        <div className="fixed top-20 right-6 z-50 w-[320px] bg-background/95 backdrop-blur-md border border-border shadow-2xl rounded-2xl overflow-hidden flex flex-col max-h-[calc(100vh-100px)] animate-in fade-in zoom-in-95 duration-200">

            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border bg-muted/30">
                <div className="flex items-center gap-2">
                    <Eye className="w-5 h-5 text-primary" />
                    <h2 className="font-semibold text-foreground">Accessibility</h2>
                </div>
                <button
                    onClick={() => setIsOpen(false)}
                    className="p-1.5 hover:bg-muted rounded-full transition-colors"
                >
                    <span className="sr-only">Close</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" /></svg>
                </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-6">

                {/* Text Adjustments */}
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Type className="w-4 h-4 text-muted-foreground" />
                            <span className="text-sm font-medium">Text Size</span>
                        </div>
                        <div className="flex items-center bg-muted rounded-lg p-1">
                            <button onClick={() => setTextSize(prev => Math.max(80, prev - 10))} className="w-8 h-8 flex items-center justify-center hover:bg-background rounded">-</button>
                            <span className="w-12 text-center text-sm font-mono">{textSize}%</span>
                            <button onClick={() => setTextSize(prev => Math.min(150, prev + 10))} className="w-8 h-8 flex items-center justify-center hover:bg-background rounded">+</button>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <MoveVertical className="w-4 h-4 text-muted-foreground" />
                            <span className="text-sm font-medium">Line Height</span>
                        </div>
                        <div className="flex items-center bg-muted rounded-lg p-1">
                            <button onClick={() => setLineHeight(prev => Math.max(100, prev - 10))} className="w-8 h-8 flex items-center justify-center hover:bg-background rounded">-</button>
                            <span className="w-12 text-center text-sm font-mono">{lineHeight}%</span>
                            <button onClick={() => setLineHeight(prev => Math.min(250, prev + 10))} className="w-8 h-8 flex items-center justify-center hover:bg-background rounded">+</button>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <MoveHorizontal className="w-4 h-4 text-muted-foreground" />
                            <span className="text-sm font-medium">Spacing</span>
                        </div>
                        <div className="flex items-center bg-muted rounded-lg p-1">
                            <button onClick={() => setLetterSpacing(prev => Math.max(0, prev - 1))} className="w-8 h-8 flex items-center justify-center hover:bg-background rounded">-</button>
                            <span className="w-12 text-center text-sm font-mono">{letterSpacing}</span>
                            <button onClick={() => setLetterSpacing(prev => Math.min(10, prev + 1))} className="w-8 h-8 flex items-center justify-center hover:bg-background rounded">+</button>
                        </div>
                    </div>
                </div>

                <div className="h-px bg-border my-2" />

                {/* Toggles */}
                <div className="grid grid-cols-2 gap-3">
                    <button
                        onClick={() => setIsDyslexiaFont(!isDyslexiaFont)}
                        className={`flex flex-col items-center justify-center p-3 rounded-xl border transition-all gap-2 ${isDyslexiaFont ? 'bg-primary/10 border-primary text-primary' : 'bg-background border-border hover:bg-muted'}`}
                    >
                        <BookOpen className="w-5 h-5" />
                        <span className="text-xs font-medium">Dyslexia Font</span>
                    </button>

                    <button
                        onClick={() => setHighlightLinks(!highlightLinks)}
                        className={`flex flex-col items-center justify-center p-3 rounded-xl border transition-all gap-2 ${highlightLinks ? 'bg-primary/10 border-primary text-primary' : 'bg-background border-border hover:bg-muted'}`}
                    >
                        <span className="font-bold underline">Link</span>
                        <span className="text-xs font-medium">Highlight Links</span>
                    </button>

                    <button
                        onClick={() => setHideImages(!hideImages)}
                        className={`flex flex-col items-center justify-center p-3 rounded-xl border transition-all gap-2 ${hideImages ? 'bg-primary/10 border-primary text-primary' : 'bg-background border-border hover:bg-muted'}`}
                    >
                        <ImageIcon className="w-5 h-5" />
                        <span className="text-xs font-medium">Hide Images</span>
                    </button>

                    <button
                        onClick={() => setLargeCursor(!largeCursor)}
                        className={`flex flex-col items-center justify-center p-3 rounded-xl border transition-all gap-2 ${largeCursor ? 'bg-primary/10 border-primary text-primary' : 'bg-background border-border hover:bg-muted'}`}
                    >
                        <MousePointer2 className="w-5 h-5" />
                        <span className="text-xs font-medium">Big Cursor</span>
                    </button>

                    <button
                        onClick={() => setIsHighContrast(!isHighContrast)}
                        className={`flex flex-col items-center justify-center p-3 rounded-xl border transition-all gap-2 ${isHighContrast ? 'bg-primary/10 border-primary text-primary' : 'bg-background border-border hover:bg-muted'}`}
                    >
                        <Contrast className="w-5 h-5" />
                        <span className="text-xs font-medium">Invert Colors</span>
                    </button>

                    <button
                        onClick={() => setTextToSpeech(!textToSpeech)}
                        className={`flex flex-col items-center justify-center p-3 rounded-xl border transition-all gap-2 ${textToSpeech ? 'bg-primary/10 border-primary text-primary' : 'bg-background border-border hover:bg-muted'}`}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M2 12h5l7 7V5L7 12H2Z" /><path d="M15.54 8.46a5 5 0 0 1 0 7.07" /></svg>
                        <span className="text-xs font-medium">Read Aloud</span>
                    </button>
                </div>

                <div className="h-px bg-border my-2" />

                {/* Theme */}
                <div className="flex bg-muted p-1 rounded-xl">
                    <button
                        onClick={() => setTheme('light')}
                        className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-medium transition-all ${theme === 'light' ? 'bg-background shadow text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
                    >
                        <Sun className="w-4 h-4" /> Light
                    </button>
                    <button
                        onClick={() => setTheme('dark')}
                        className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-medium transition-all ${theme === 'dark' ? 'bg-background shadow text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
                    >
                        <Moon className="w-4 h-4" /> Dark
                    </button>
                </div>

                {/* Reset */}
                <button
                    onClick={resetSettings}
                    className="w-full py-3 flex items-center justify-center gap-2 text-red-500 hover:bg-red-500/10 rounded-xl transition-colors font-medium text-sm"
                >
                    <RotateCcw className="w-4 h-4" /> Reset Settings
                </button>

            </div>
        </div>
    );
}
