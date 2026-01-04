"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Send, CheckCircle2, XCircle } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="relative min-h-[calc(100dvh-64px)] overflow-hidden bg-transparent">
            <div className="relative z-10 max-w-[1120px] mx-auto px-6 md:px-12 py-24 select-none">
                <div className="max-w-xl mx-auto text-center mb-16">
                    <h1 className="text-[48px] leading-[56px] font-medium mb-6">Let's Connect</h1>
                    <p className="text-[20px] leading-[30px] text-muted-foreground">
                        Open to new opportunities.
                        Feel free to get in touch!
                    </p>
                </div>

                <div className="max-w-lg mx-auto bg-surface/80 backdrop-blur-md p-8 rounded-[32px] border border-white/5 shadow-xl">
                    <ContactForm />

                    <div className="mt-8 pt-8 border-t border-white/5 flex justify-center gap-8 text-muted-foreground">
                        <a
                            href="https://www.linkedin.com/in/kedareswari-bolisetty-5781212ba/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary transition-all hover:scale-110"
                            aria-label="LinkedIn"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                        </a>
                        <a
                            href="https://www.behance.net/kedaribolisetty"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary transition-all hover:scale-110"
                            aria-label="Behance"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M7.74 8.01a3.63 3.63 0 0 0-1.12-.16H2.5v7.26h4.12c.56 0 1.07-.05 1.54-.16a2.82 2.82 0 0 0 1.25-.56 2.37 2.37 0 0 0 .8-1.02 3.86 3.86 0 0 0 .28-1.5c0-.62-.07-1.14-.23-1.56a2.6 2.6 0 0 0-.68-1.03 2.87 2.87 0 0 0-1.04-.6 4.3 4.3 0 0 0-.8-.17zm-.59 5.3c-.22.14-.52.22-.9.22H4.48v-1.85h1.77c.38 0 .68.08.9.22.21.14.32.38.32.72s-.11.55-.32.69zm-.27-3.13c.19.12.28.34.28.64s-.09.51-.28.64c-.19.12-.45.18-.79.18H4.48V8.98h1.39c.34 0 .6.06.79.18zm11.77-.37c-.55 0-1.04.11-1.46.32a2.87 2.87 0 0 0-1.08.9 4.34 4.34 0 0 0-.67 1.34 5.9 5.9 0 0 0-.22 1.63c0 .54.07 1.05.22 1.53a3.52 3.52 0 0 0 .63 1.22c.3.36.67.63 1.13.84.45.2.98.31 1.56.31 1.05 0 1.88-.31 2.48-.92.35-.36.61-.79.77-1.3h-1.92a1.32 1.32 0 0 1-.49.65 1.56 1.56 0 0 1-.9.24 1.5 1.5 0 0 1-1.2-.5 2.52 2.52 0 0 1-.52-1.4h5.18v-.22c0-.5-.06-.99-.18-1.47a3.86 3.86 0 0 0-.58-1.28 2.87 2.87 0 0 0-1.03-.94 3.03 3.03 0 0 0-1.43-.34zm-1.43 3.14a1.76 1.76 0 0 1 .45-1.12 1.48 1.48 0 0 1 1.08-.43 1.38 1.38 0 0 1 1.04.42c.31.28.47.65.51 1.13h-3.08zM15.1 6.55h5.48v1.17h-5.48z" />
                            </svg>
                        </a>
                        <a
                            href="https://github.com/kedari5"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary transition-all hover:scale-110"
                            aria-label="GitHub"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ContactForm() {
    const router = useRouter();
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    useEffect(() => {
        if (status === "success") {
            const timer = setTimeout(() => {
                router.push("/");
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [status, router]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            await fetch(
                "https://script.google.com/macros/s/AKfycbzFUlXxWpu-kAXVFFvBKqtCz1Y6C0IatsKVu52UTLRlMGBpHa4DUhC36TFjp2WqnTYG/exec",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                    mode: "no-cors"
                }
            );

            setStatus("success");
            setFormData({ name: "", email: "", message: "" });

        } catch (error) {
            console.error("Submission error:", error);
            setStatus("error");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    if (status === "success") {
        return (
            <div className="flex flex-col items-center text-center py-8 animate-in fade-in zoom-in duration-300">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-6 border border-green-500/20">
                    <CheckCircle2 className="w-8 h-8 text-green-500" />
                </div>
                <h2 className="text-2xl font-bold mb-2">Message Sent!</h2>
                <p className="text-muted-foreground mb-4">
                    Thank you for reaching out. We'll be in touch soon.
                </p>
                <p className="text-sm text-muted-foreground animate-pulse">Redirecting to home...</p>
            </div>
        );
    }

    if (status === "error") {
        return (
            <div className="flex flex-col items-center text-center py-8 animate-in fade-in zoom-in duration-300">
                <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mb-6 border border-red-500/20">
                    <XCircle className="w-8 h-8 text-red-500" />
                </div>
                <h2 className="text-2xl font-bold mb-2 text-red-500">Submission Failed</h2>
                <p className="text-muted-foreground mb-8">
                    We're sorry, but we couldn't process your request right now.
                </p>
                <button
                    onClick={() => setStatus("idle")}
                    className="px-8 py-3 bg-red-500 text-white font-bold rounded-full hover:bg-red-600 transition-all shadow-lg shadow-red-500/20"
                >
                    Try Again
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-foreground">Name</label>
                <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full h-[44px] px-4 rounded-[12px] bg-black/10 dark:bg-black/20 border border-white/10 focus:border-primary/60 outline-none transition-all text-zinc-800 dark:text-foreground font-medium placeholder:text-muted-foreground/50"
                    placeholder="Your name"
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-foreground">Email</label>
                <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full h-[44px] px-4 rounded-[12px] bg-black/10 dark:bg-black/20 border border-white/10 focus:border-primary/60 outline-none transition-all text-zinc-800 dark:text-foreground font-medium placeholder:text-muted-foreground/50"
                    placeholder="name@example.com"
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-foreground">Message</label>
                <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full p-4 rounded-[12px] bg-black/10 dark:bg-black/20 border border-white/10 focus:border-primary/60 outline-none transition-all resize-none text-zinc-800 dark:text-foreground font-medium placeholder:text-muted-foreground/50"
                    placeholder="How can we collaborate?"
                />
            </div>

            <button
                type="submit"
                disabled={status === "loading"}
                className="w-full h-[48px] bg-primary text-background font-bold rounded-full hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20 disabled:opacity-50 disabled:cursor-wait"
            >
                {status === "loading" ? "Sending..." : (
                    <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                    </>
                )}
            </button>
        </form>
    );
}
