"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";

import ProjectCarousel from "@/components/ProjectCarousel";
import DesignCarousel from "@/components/DesignCarousel";
import CapabilitiesPreview from "@/components/CapabilitiesPreview";
import ContactPopup from "@/components/ContactPopup";

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <main className="flex flex-col pt-[64px]">
      {/* Hero Section */}
      <section className="min-h-[calc(100dvh-64px)] flex flex-col justify-center items-center text-center px-6 md:px-24 w-full relative overflow-hidden bg-transparent selection:bg-[#9CC9FF]/30">

        {/* 2. Main Content Stack (Centered) */}
        <div className="relative z-10 max-w-[800px] mx-auto w-full flex flex-col items-center gap-8 animate-in fade-in zoom-in-95 duration-1000 slide-in-from-bottom-4 fill-mode-backwards">

          {/* Text Stack */}
          <div className="flex flex-col items-center gap-6">
            <p className="text-[20px] md:text-[22px] text-muted-foreground font-light tracking-wide">
              Hi, I'm
            </p>

            <h1 className="text-[56px] sm:text-[72px] md:text-[88px] leading-[1.1] font-medium tracking-tight hero-name">
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
              className="px-8 py-3.5 bg-primary text-white text-[16px] font-medium rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-primary/90 active:scale-[0.98]"
            >
              Explore Projects
            </Link>

            <a
              href="/docs/resume.docx"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-primary/10 backdrop-blur-md text-foreground text-[16px] font-medium rounded-full border-2 border-primary shadow-[inset_0_0_20px_rgba(111,174,255,0.2)] transition-all focus:outline-none hover:shadow-[inset_0_0_30px_rgba(111,174,255,0.4)] hover:bg-primary/20 active:scale-[0.98]"
            >
              Resume
            </a>
          </div>

        </div>
      </section>

      {/* About Preview */}
      <section id="about" className="min-h-[calc(100dvh-64px)] flex flex-col justify-center py-12 md:py-24 px-6 md:px-12">
        <div className="max-w-[1120px] mx-auto grid grid-cols-2 gap-4 md:gap-12 items-center">
          <div className="order-1">
            <h2 className="text-[24px] md:text-[40px] leading-[1.2] font-semibold md:font-medium mb-4 md:mb-6 text-foreground">
              Curiosity and clarity <br className="hidden md:block" /> shape every decision.
            </h2>
            <p className="text-[15px] md:text-[18px] leading-[1.5] md:leading-[1.6] text-foreground/90 md:text-muted-foreground font-normal md:font-light mb-4 md:mb-8 max-w-lg">
              Understanding the problem always comes before shaping solutions.
              Every screen is designed to feel calm, clear, and comfortable.
              <br className="hidden md:block mt-4" />
              <span className="hidden sm:inline">
                When something works without explanation, the design has done its job.
              </span>
            </p>
          </div>
          {/* Profile Image */}
          <div className="order-2 aspect-square bg-muted rounded-[16px] md:rounded-[24px] overflow-hidden relative border border-white/5 w-[85%] ml-auto md:w-3/4">
            <Image
              src="/images/profile-portrait.jpg"
              alt="Kedareswari"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 40vw, 300px"
            />
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="min-h-[calc(100dvh-64px)] flex flex-col justify-center py-24 w-full bg-transparent relative z-10 border-y border-white/5">
        <div className="max-w-[1280px] mx-auto w-full px-6 md:px-12 flex flex-col gap-12">
          {/* Header */}
          <div className="flex justify-between items-end border-b border-white/5 pb-6">
            <div>
              <h2 className="text-[48px] md:text-[40px] leading-[1.1] font-medium mb-2 w-fit">
                Projects
              </h2>
              <p className="text-[16px] text-muted-foreground font-light">Thoughtful digital experiences.</p>
            </div>
            {/* Link removed as per request */}
          </div>

          {/* Carousel */}
          <ProjectCarousel />
        </div>
      </section>

      {/* Design Preview */}
      {/* Design Preview */}
      <section id="designs" className="min-h-[calc(100dvh-64px)] flex flex-col justify-center py-24 w-full border-t border-white/5 bg-transparent relative z-10">
        <div className="max-w-[1280px] mx-auto w-full px-6 md:px-12 flex flex-col gap-12">
          {/* Header */}
          <div className="flex justify-between items-end border-b border-white/5 pb-6">
            <div>
              <h2 className="text-[32px] md:text-[48px] leading-[1.1] font-medium mb-2 w-fit">
                Designs
              </h2>
              <p className="text-[16px] text-muted-foreground font-light">Aesthetics with purpose.</p>
            </div>
          </div>

          {/* Design Carousel */}
          <DesignCarousel />
        </div>
      </section>

      {/* Capabilities Preview */}
      <section id="capabilities" className="w-full">
        <CapabilitiesPreview />
      </section>

      {/* CTA */}
      <section id="collaboration" className="min-h-[calc(100dvh-64px)] flex flex-col justify-center items-center py-32 px-6 md:px-12 max-w-[1120px] mx-auto w-full text-center">
        <h2 className="text-[48px] leading-[56px] font-medium mb-6">Ready to collaborate?</h2>
        <p className="text-[20px] leading-[30px] text-muted-foreground mb-8 max-w-xl mx-auto">
          I’m currently available for full-time roles and freelance projects.
        </p>
        <button
          onClick={() => setIsContactOpen(true)}
          className="inline-block px-10 py-4 bg-primary text-background text-[18px] font-semibold rounded-[16px] hover:brightness-110 active:scale-[0.98] transition-all focus:outline-none focus:ring-2 focus:ring-ring cursor-pointer"
        >
          Get in Touch
        </button>
      </section>

      {/* Popups */}
      <ContactPopup isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />

    </main>
  );
}
