
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t border-border py-12 bg-background transition-colors duration-200">
            <div className="max-w-[1120px] mx-auto px-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 text-sm text-muted-foreground">
                <div className="flex flex-col gap-2">
                    <span>&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</span>
                    <span>Designed with care and accessibility in mind.</span>
                </div>

                <nav className="flex gap-4 flex-wrap">
                    <a href="#" className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-ring rounded px-1">
                        LinkedIn
                    </a>
                    <a href="#" className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-ring rounded px-1">
                        GitHub
                    </a>
                    <a href="#" className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-ring rounded px-1">
                        Twitter
                    </a>
                </nav>
            </div>
        </footer>
    );
}

