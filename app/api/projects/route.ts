
import { NextResponse } from 'next/server';

// Temporary data storage - in a real app, this would be a database query
const projectsData = [
    { slug: "hungry-hub", title: "Hungry Hub", category: "Research & Design", desc: "A food delivery platform focused on ethical delivery." },
    { slug: "build-bond", title: "Build Bond", category: "UI/UX Case Study", desc: "Construction management software for SME." },
    { slug: "krishi-sakhi", title: "Krishi Sakhi", category: "Frontend", desc: "Empowering rural women through agricultural tech." },
    { slug: "pm-ajay", title: "PM-AJAY", category: "Government Portal", desc: "Social welfare scheme tracking dashboard." },
    { slug: "personal-portfolio", title: "Personal Portfolio", category: "Product Design", desc: "This website, built with calmness." },
];

export async function GET() {
    // Simulate database latency
    // await new Promise(resolve => setTimeout(resolve, 500));

    return NextResponse.json(projectsData);
}
