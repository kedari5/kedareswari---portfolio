
import { NextResponse } from 'next/server';

const capabilitiesData = [
    {
        title: "Research",
        description: "Insight-driven understanding. I define problems by observing real usage patterns, not just guessing.",
        tools: ["Miro", "Maze", "FigJam", "Google Forms"]
    },
    {
        title: "Design",
        description: "Clear, intuitive, accessible interfaces. My systems are built to scale and remain calm under complexity.",
        tools: ["Figma", "Canva", "Adobe XD", "CSS"]
    },
    {
        title: "Development",
        description: "Structured and practical implementation. I write semantic, clean code that considers the future maintainer.",
        tools: ["HTML", "JavaScript", "React", "Node.js", "Python", "MongoDB", "Express"]
    },
    {
        title: "Testing & Validation",
        description: "Validation through real usage. I believe accessibility and reliability are non-negotiable baselines.",
        tools: ["Maze", "Manual Testing"]
    },
    {
        title: "Versioning & Deployment",
        description: "Seamless integration and delivery. I ensure code is safely versioned and efficiently deployed.",
        tools: ["GitHub", "Vercel"]
    },
];

export async function GET() {
    return NextResponse.json(capabilitiesData);
}
