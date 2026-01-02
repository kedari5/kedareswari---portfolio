import Image from "next/image";
import { ClipboardCheck } from "lucide-react";

interface BrandIconProps {
    name: string;
    className?: string;
}

const BRAND_ICONS: Record<string, { url: string; invertDark?: boolean; isLucide?: boolean }> = {
    // Research
    "Miro": { url: "https://upload.wikimedia.org/wikipedia/commons/5/53/Miro_logo.svg" },
    "Maze": { url: "https://www.vectorlogo.zone/logos/maze/maze-icon.svg" },
    "FigJam": { url: "https://upload.wikimedia.org/wikipedia/commons/e/e4/FigJam_logo_icon.svg" },
    "Google Forms": { url: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Google_Forms_2020_Logo.svg" },
    "Excel Sheets": { url: "https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg" },
    "Hotjar": { url: "https://www.vectorlogo.zone/logos/hotjar/hotjar-icon.svg" },

    // Design
    "Figma": { url: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" },
    "Canva": { url: "https://upload.wikimedia.org/wikipedia/commons/0/08/Canva_icon_2021.svg" },
    "Adobe XD": { url: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Adobe_XD_CC_icon.svg" },
    "Sketch": { url: "https://upload.wikimedia.org/wikipedia/commons/5/59/Sketch_Logo.svg" },

    // Development
    "HTML": { url: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" },
    "CSS": { url: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg" },
    "JavaScript": { url: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" },
    "React": { url: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
    "Node.js": { url: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
    "Python": { url: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
    "Java": { url: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg" },
    "C": { url: "https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg" },

    // Testing
    "Manual Testing": { url: "", isLucide: true },

    // Versioning
    "GitHub": { url: "https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg", invertDark: true },
    "Vercel": { url: "https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png", invertDark: true },
};

export default function BrandIcon({ name, className = "" }: BrandIconProps) {
    // Handle MERN Stack specially
    if (name === "MERN Stack") {
        return (
            <div className="flex gap-1 items-center">
                <BrandIcon name="MongoDB" className={className} />
                <BrandIcon name="Express" className={className} />
                <BrandIcon name="React" className={className} />
                <BrandIcon name="Node.js" className={className} />
            </div>
        );
    }

    // Virtual MERN inputs
    const extraIcons: Record<string, { url: string; invertDark?: boolean }> = {
        "MongoDB": { url: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg" },
        "Express": { url: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png", invertDark: true },
    };

    const iconData = BRAND_ICONS[name] || extraIcons[name];

    if (!iconData) { return null; }

    if (iconData.isLucide) {
        return <ClipboardCheck className={`w-6 h-6 ${className} text-foreground`} />;
    }

    return (
        <div className={`relative w-6 h-6 flex-shrink-0 overflow-hidden ${className} ${iconData.invertDark ? 'dark:invert' : ''}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src={iconData.url}
                alt={`${name} icon`}
                className="w-full h-full object-contain p-[2px]"
                loading="lazy"
            />
        </div>
    );
}
