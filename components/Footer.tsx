
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t border-white/5 py-12 bg-background transition-colors duration-200">
            <div className="max-w-[1120px] mx-auto px-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 text-sm text-muted-foreground">
                <div className="flex flex-col gap-2">
                    <span>&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</span>
                    <span>Designed with care and accessibility in mind.</span>
                </div>

                <nav className="flex gap-6 items-center">
                    <a
                        href="https://www.linkedin.com/in/kedareswari-bolisetty-5781212ba/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
                        aria-label="LinkedIn"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                    </a>
                    <a
                        href="https://www.behance.net/kedaribolisetty"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
                        aria-label="Behance"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M7.74 8.01a3.63 3.63 0 0 0-1.12-.16H2.5v7.26h4.12c.56 0 1.07-.05 1.54-.16a2.82 2.82 0 0 0 1.25-.56 2.37 2.37 0 0 0 .8-1.02 3.86 3.86 0 0 0 .28-1.5c0-.62-.07-1.14-.23-1.56a2.6 2.6 0 0 0-.68-1.03 2.87 2.87 0 0 0-1.04-.6 4.3 4.3 0 0 0-.8-.17zm-.59 5.3c-.22.14-.52.22-.9.22H4.48v-1.85h1.77c.38 0 .68.08.9.22.21.14.32.38.32.72s-.11.55-.32.69zm-.27-3.13c.19.12.28.34.28.64s-.09.51-.28.64c-.19.12-.45.18-.79.18H4.48V8.98h1.39c.34 0 .6.06.79.18zm11.77-.37c-.55 0-1.04.11-1.46.32a2.87 2.87 0 0 0-1.08.9 4.34 4.34 0 0 0-.67 1.34 5.9 5.9 0 0 0-.22 1.63c0 .54.07 1.05.22 1.53a3.52 3.52 0 0 0 .63 1.22c.3.36.67.63 1.13.84.45.2.98.31 1.56.31 1.05 0 1.88-.31 2.48-.92.35-.36.61-.79.77-1.3h-1.92a1.32 1.32 0 0 1-.49.65 1.56 1.56 0 0 1-.9.24 1.5 1.5 0 0 1-1.2-.5 2.52 2.52 0 0 1-.52-1.4h5.18v-.22c0-.5-.06-.99-.18-1.47a3.86 3.86 0 0 0-.58-1.28 2.87 2.87 0 0 0-1.03-.94 3.03 3.03 0 0 0-1.43-.34zm-1.43 3.14a1.76 1.76 0 0 1 .45-1.12 1.48 1.48 0 0 1 1.08-.43 1.38 1.38 0 0 1 1.04.42c.31.28.47.65.51 1.13h-3.08zM15.1 6.55h5.48v1.17h-5.48z" />
                        </svg>
                    </a>
                    <a
                        href="https://github.com/kedari5"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
                        aria-label="GitHub"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                    </a>
                </nav>
            </div>
        </footer>
    );
}

