"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, Handshake, Send } from "lucide-react";
import { useTheme } from "next-themes";

interface ContactPopupProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ContactPopup({ isOpen, onClose }: ContactPopupProps) {
    const [submissionStatus, setSubmissionStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [isAnimating, setIsAnimating] = useState(false);
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (isOpen) {
            setIsAnimating(true);
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
            const timer = setTimeout(() => {
                setIsAnimating(false);
                setSubmissionStatus("idle");
                setFormData({ name: "", email: "", message: "" });
            }, 300);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    useEffect(() => {
        if (submissionStatus === "success") {
            const timer = setTimeout(() => {
                onClose();
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [submissionStatus, onClose]);

    if (!mounted) return null;
    if (!isOpen && !isAnimating) return null;

    const isDark = resolvedTheme === "dark";

    return (
        <div className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-all duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/40 backdrop-blur-[12px]"
                onClick={onClose}
            />

            {/* Popup Container */}
            <div className={`relative w-full max-w-lg backdrop-blur-3xl border rounded-[32px] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] transition-all duration-300 ${isOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-4"} ${isDark ? 'bg-[#010a2e]/70 border-white/10' : 'bg-[#FAFAF8] border-black/5'}`}>

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className={`absolute top-6 right-6 p-2.5 rounded-full transition-colors text-primary hover:text-primary/80 z-20 group ${isDark ? 'hover:bg-white/10' : 'hover:bg-black/5'}`}
                >
                    <X className="w-5 h-5" />
                </button>

                {submissionStatus === "idle" || submissionStatus === "submitting" ? (
                    <div className="p-8 md:p-10 pt-12">
                        <div className="mb-8">
                            <h3 className={`text-3xl font-medium mb-3 tracking-tight ${isDark ? 'bg-gradient-to-b from-white to-[#6FAEFF] bg-clip-text text-transparent' : 'bg-gradient-to-b from-[#0122a8] to-[#3A7BEF] bg-clip-text text-transparent'}`}>Get in touch</h3>
                            <p className={`${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>Tell me about your project or just say hi. I'm usually quick to respond.</p>
                        </div>

                        <form
                            onSubmit={async (e) => {
                                e.preventDefault();
                                setSubmissionStatus("submitting");
                                try {
                                    await fetch(
                                        "https://script.google.com/macros/s/AKfycbzFUlXxWpu-kAXVFFvBKqtCz1Y6C0IatsKVu52UTLRlMGBpHa4DUhC36TFjp2WqnTYG/exec",
                                        {
                                            method: "POST",
                                            headers: { "Content-Type": "application/json" },
                                            body: JSON.stringify(formData),
                                            mode: "no-cors"
                                        }
                                    );
                                    setSubmissionStatus("success");
                                } catch (err) {
                                    setSubmissionStatus("error");
                                }
                            }}
                            className="space-y-4"
                        >
                            <div className="space-y-1.5">
                                <label className={`text-xs font-bold ml-1 uppercase tracking-wider ${isDark ? 'text-primary' : 'bg-gradient-to-b from-[#0122a8] to-[#3A7BEF] bg-clip-text text-transparent'}`}>Name</label>
                                <input
                                    required
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className={`w-full h-13 px-4 rounded-2xl focus:border-primary/60 focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium ${isDark ? 'bg-black/20 border-white/10 placeholder:text-zinc-500 text-primary' : 'bg-black/5 border-black/5 placeholder:text-zinc-400 text-zinc-800'}`}
                                    placeholder="Your name"
                                />
                            </div>
                            <div className="space-y-1.5">
                                <label className={`text-xs font-bold ml-1 uppercase tracking-wider ${isDark ? 'text-primary' : 'bg-gradient-to-b from-[#0122a8] to-[#3A7BEF] bg-clip-text text-transparent'}`}>Email</label>
                                <input
                                    required
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className={`w-full h-13 px-4 rounded-2xl focus:border-primary/60 focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium ${isDark ? 'bg-black/20 border-white/10 placeholder:text-zinc-500 text-primary' : 'bg-black/5 border-black/5 placeholder:text-zinc-400 text-zinc-800'}`}
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div className="space-y-1.5">
                                <label className={`text-xs font-bold ml-1 uppercase tracking-wider ${isDark ? 'text-primary' : 'bg-gradient-to-b from-[#0122a8] to-[#3A7BEF] bg-clip-text text-transparent'}`}>Message</label>
                                <textarea
                                    required
                                    rows={4}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className={`w-full p-4 rounded-2xl focus:border-primary/60 focus:ring-4 focus:ring-primary/10 outline-none transition-all resize-none font-medium ${isDark ? 'bg-black/20 border-white/10 placeholder:text-zinc-500 text-primary' : 'bg-black/5 border-black/5 placeholder:text-zinc-400 text-zinc-800'}`}
                                    placeholder="How can I help you?"
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={submissionStatus === "submitting"}
                                className="w-full h-14 bg-primary text-[#0122a8] font-medium rounded-full hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-3 group mt-6 shadow-lg shadow-blue-500/25 disabled:opacity-50 disabled:cursor-wait"
                            >
                                <span>{submissionStatus === "submitting" ? "Sending..." : "Send Message"}</span>
                                <Send className={`w-5 h-5 transition-transform ${submissionStatus === "submitting" ? "animate-pulse" : "group-hover:translate-x-1 group-hover:-translate-y-1"}`} />
                            </button>
                        </form>
                    </div>
                ) : submissionStatus === "success" ? (
                    <div className="p-10 md:p-14 pt-24 flex flex-col items-center text-center relative w-full h-full animate-in fade-in zoom-in duration-300">
                        <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full flex items-center justify-center shadow-lg z-20 border-4 ${isDark ? 'bg-[#0b1221] border-white/10' : 'bg-white border-black/5'}`}>
                            <div className="relative w-24 h-24">
                                <Image src="/logo-bird.png" alt="Logo" fill className="object-contain" />
                            </div>
                        </div>

                        <div className="mt-4 space-y-3">
                            <h2 className={`text-3xl md:text-[34px] font-bold tracking-tight ${isDark ? 'text-white' : 'bg-gradient-to-b from-[#0122a8] to-[#3A7BEF] bg-clip-text text-transparent'}`}>
                                Glad to hear from you!
                            </h2>
                            <p className={`text-[18px] font-medium leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                                We'll connect with you soon.
                            </p>
                        </div>

                        <div className="my-8">
                            <Handshake className="w-20 h-20 text-primary opacity-90" strokeWidth={1} />
                        </div>
                    </div>
                ) : (
                    <div className="p-10 md:p-14 pt-24 flex flex-col items-center text-center relative w-full h-full animate-in fade-in zoom-in duration-300">
                        <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full flex items-center justify-center shadow-lg z-20 border-4 bg-red-500/10 border-red-500/20`}>
                            <X className="w-12 h-12 text-red-500" />
                        </div>

                        <div className="mt-4 space-y-3">
                            <h2 className={`text-3xl font-bold tracking-tight text-red-500`}>
                                Oops! Something went wrong.
                            </h2>
                            <p className={`text-[18px] font-medium leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                                We couldn't send your message. Please try again.
                            </p>
                        </div>

                        <div className="my-8 py-4">
                            <p className="text-sm text-muted-foreground italic border-l-2 border-red-500/30 pl-4">
                                Network error or service interruption.
                            </p>
                        </div>

                        <button
                            onClick={() => setSubmissionStatus("idle")}
                            className="w-full max-w-[240px] h-14 bg-red-500 hover:bg-red-600 text-white font-bold text-[18px] rounded-full shadow-lg shadow-red-500/20 active:scale-[0.98] transition-all uppercase tracking-wider"
                        >
                            Try Again
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
