import Link from "next/link";
import Image from "next/image";

import BackgroundLayer from "@/components/BackgroundLayer";
import ProjectCarousel from "@/components/ProjectCarousel";
import DesignCarousel from "@/components/DesignCarousel";
import CapabilitiesPreview from "@/components/CapabilitiesPreview";

export default function Home() {
  return (
    <main className="flex flex-col pt-[64px]">
      {/* Hero Section */}
      <section className="min-h-[calc(100dvh-64px)] flex flex-col justify-center items-center text-center px-6 md:px-24 w-full relative overflow-hidden bg-background selection:bg-primary/20">

        {/* Background Layers */}
        <BackgroundLayer />

        {/* 2. Main Content Stack (Centered) */}
        <div className="relative z-10 max-w-[800px] mx-auto w-full flex flex-col items-center gap-8 animate-in fade-in zoom-in-95 duration-1000 slide-in-from-bottom-4 fill-mode-backwards">

          {/* Text Stack */}
          <div className="flex flex-col items-center gap-6">
            <p className="text-[20px] md:text-[22px] text-muted-foreground font-light tracking-wide">
              Hi, I'm
            </p>

            <h1 className="text-[56px] sm:text-[72px] md:text-[88px] leading-[1.1] font-medium tracking-tight text-foreground">
              Kedareswari
            </h1>

            <p className="text-[20px] sm:text-[24px] md:text-[28px] leading-[1.5] text-muted-foreground/90 font-light max-w-2xl text-pretty">
              Designing and building thoughtful <br className="hidden sm:block" /> digital experiences
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-6 mt-8">
            <Link
              href="#projects"
              className="px-8 py-3.5 bg-primary text-primary-foreground text-[16px] font-medium rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-primary/90 active:scale-[0.98]"
            >
              Explore Projects
            </Link>

            <div className="group relative cursor-default">
              <span className="text-[16px] text-muted-foreground font-medium transition-colors border-b border-transparent group-hover:text-foreground pb-0.5">
                Explore Website
              </span>
              <span className="absolute left-full top-1/2 -translate-y-1/2 ml-3 w-max opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-xs text-muted-foreground bg-surface/80 backdrop-blur px-2 py-1 rounded border border-border pointer-events-none">
                Identify the features which are in this website
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* About Preview */}
      <section className="min-h-[calc(100dvh-64px)] flex flex-col justify-center py-24 px-6 md:px-12 bg-surface">
        <div className="max-w-[1120px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-[32px] md:text-[40px] leading-[1.2] font-medium mb-6">
              Curiosity and clarity <br className="hidden md:block" /> shape every decision.
            </h2>
            <p className="text-[18px] leading-[1.6] text-muted-foreground font-light mb-8 max-w-lg">
              Understanding the problem always comes before shaping solutions.
              Every screen is designed to feel calm, clear, and comfortable.
              <br className="block mt-4" />
              When something works without explanation, the design has done its job.
            </p>
          </div>
          {/* Profile Image */}
          <div className="order-1 md:order-2 aspect-[4/5] bg-muted rounded-[24px] overflow-hidden relative border border-border md:w-3/4 md:ml-auto">
            <Image
              src="/images/profile-portrait.jpg"
              alt="Kedareswari"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw,300px"
            />
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="min-h-[calc(100dvh-64px)] flex flex-col justify-center py-24 w-full">
        <div className="max-w-[1280px] mx-auto w-full px-6 md:px-12 flex flex-col gap-12">
          {/* Header */}
          <div className="flex justify-between items-end border-b border-border/50 pb-6">
            <div>
              <h2 className="text-[32px] md:text-[48px] leading-[1.1] font-medium mb-2">Projects</h2>
              <p className="text-[16px] text-muted-foreground font-light">Thoughtful digital experiences.</p>
            </div>
            {/* Link removed as per request */}
          </div>

          {/* Carousel */}
          <ProjectCarousel />
        </div>
      </section>

      <section className="min-h-[calc(100dvh-64px)] flex flex-col justify-center py-24 w-full bg-surface border-t border-border">
        <div className="max-w-[1280px] mx-auto w-full px-6 md:px-12 flex flex-col gap-12">
          {/* Header */}
          <div className="flex justify-between items-end border-b border-border/50 pb-6">
            <div>
              <h2 className="text-[32px] md:text-[48px] leading-[1.1] font-medium mb-2">Designs</h2>
              <p className="text-[16px] text-muted-foreground font-light">Aesthetics with purpose.</p>
            </div>
          </div>

          {/* Design Carousel */}
          <DesignCarousel />
        </div>
      </section>

      {/* Capabilities Preview */}
      <CapabilitiesPreview />

      {/* CTA */}
      <section className="min-h-[calc(100dvh-64px)] flex flex-col justify-center items-center py-32 px-6 md:px-12 max-w-[1120px] mx-auto w-full text-center">
        <h2 className="text-[48px] leading-[56px] font-medium mb-6">Ready to collaborate?</h2>
        <p className="text-[20px] leading-[30px] text-muted-foreground mb-8 max-w-xl mx-auto">
          I’m currently available for full-time roles and freelance projects.
        </p>
        <Link
          href="#contact"
          className="inline-block px-8 py-3 bg-primary text-background text-[16px] font-medium rounded-[10px] hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-ring"
        >
          Get in Touch
        </Link>
      </section>

    </main>
  );
}
