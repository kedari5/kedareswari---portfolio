import BackgroundLayer from "@/components/BackgroundLayer";

export default function ContactPage() {
    return (
        <div className="relative min-h-[calc(100dvh-64px)] overflow-hidden">
            <BackgroundLayer />
            <div className="relative z-10 max-w-[1120px] mx-auto px-6 md:px-12 py-24 select-none">
                <div className="max-w-xl mx-auto text-center mb-16">
                    <h1 className="text-[48px] leading-[56px] font-medium mb-6 text-foreground">Let's Connect</h1>
                    <p className="text-[20px] leading-[30px] text-muted-foreground">
                        I’m currently open to new opportunities. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
                    </p>
                </div>

                <div className="max-w-lg mx-auto bg-surface/80 backdrop-blur-md p-8 rounded-[16px] border border-border shadow-sm">
                    <form className="space-y-6">
                        <div className="space-y-2">
                            <label htmlFor="name" className="block text-sm font-medium text-foreground">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full h-[44px] px-4 rounded-[8px] bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                placeholder="Your name"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm font-medium text-foreground">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full h-[44px] px-4 rounded-[8px] bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                placeholder="name@example.com"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="block text-sm font-medium text-foreground">Message</label>
                            <textarea
                                id="message"
                                rows={5}
                                className="w-full p-4 rounded-[8px] bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                                placeholder="How can we collaborate?"
                            />
                        </div>

                        <button
                            type="button" // Change to submit when connected
                            className="w-full h-[44px] bg-primary text-background font-medium rounded-[10px] hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-ring"
                        >
                            Send Message
                        </button>
                    </form>

                    <div className="mt-8 pt-8 border-t border-border flex justify-center gap-6 text-muted-foreground text-sm">
                        <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
                        <a href="#" className="hover:text-primary transition-colors">GitHub</a>
                        <a href="#" className="hover:text-primary transition-colors">Behance</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
