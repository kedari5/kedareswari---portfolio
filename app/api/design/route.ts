
import { NextResponse } from 'next/server';

const designData = {
    logos: [
        { slug: "personal-identity", title: "Kedareswari Identity", category: "Visual Identity • 2025", image: "/images/design/bird-logo.png" },
        { slug: "build-bond-identity", title: "Build Bond", category: "Brand Identity • 2025", image: "/images/design/build-bond-logo-v2.png" }
    ],
    posters: [
        { slug: "creative-minds-poster", title: "Creative Minds 2025", category: "Event Poster", image: "/images/design/creative-minds-poster.png" }
    ]
};

export async function GET() {
    return NextResponse.json(designData);
}
