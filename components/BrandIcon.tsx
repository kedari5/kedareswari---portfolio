import Image from "next/image";
import { ClipboardCheck, FlaskConical, Database, Zap, PenTool, Image as ImageIcon, Blocks, Table2, Code2 } from "lucide-react";

interface BrandIconProps {
    name: string;
    className?: string;
}

const BRAND_ICONS: Record<string, { url: string; invertDark?: boolean; isLucide?: boolean; iconName?: string }> = {
    // Research
    "Miro": { url: "/brand-icons/miro.svg" },
    "Maze": { url: "/brand-icons/maze.svg" },
    "FigJam": { url: "/brand-icons/figma-custom.png?v=3" },
    "Figma": { url: "/brand-icons/figma-custom.png?v=3" },
    "Google Forms": { url: "/brand-icons/google-forms-custom.png?v=1" },
    "Hotjar": { url: "/brand-icons/hotjar.svg" },

    // Design
    "Canva": { url: "/brand-icons/canva-custom.png?v=3" },
    "Adobe XD": { url: "/brand-icons/adobexd-custom.png?v=3" },
    "Sketch": { url: "/brand-icons/sketch-custom.svg?v=1" },
    "Framer": { url: "/brand-icons/framer-custom.png?v=1" },
    "Photo": { url: "/brand-icons/photoshop-custom.svg?v=1" },
    "Adobe Illustrator": { url: "/brand-icons/illustrator-custom.svg" },
    "Adobe Photoshop": { url: "/brand-icons/photoshop-custom.svg" },

    // Development
    "HTML": { url: "/brand-icons/html-custom.svg?v=1" },
    "CSS": { url: "/brand-icons/css-custom.png?v=1" },
    "JavaScript": { url: "/brand-icons/javascript-custom.svg?v=1" },
    "React": { url: "/brand-icons/react-custom.svg?v=1" },
    "Node.js": { url: "/brand-icons/nodejs-custom.svg?v=1" },
    "Python": { url: "/brand-icons/python-custom.svg?v=1" },
    "Java": { url: "/brand-icons/java-custom.svg?v=1" },
    "C": { url: "/brand-icons/c.svg" },
    "MongoDB": { url: "/brand-icons/mongodb-custom.svg?v=1" },
    "Express": { url: "/brand-icons/express-custom.png?v=1" },
    "Postman": { url: "/brand-icons/postman.svg" },

    // Testing
    "Manual Testing": { url: "/brand-icons/manual-testing.svg" },

    // Versioning
    "GitHub": { url: "/brand-icons/github-custom.png?v=1", invertDark: false },
    "Vercel": { url: "/brand-icons/vercel-custom.png?v=1", invertDark: true },

    // Custom Assets (Converted from Lucide/Missing)
    "Flask": { url: "/brand-icons/flask-custom.svg", invertDark: true },
    "PostgreSQL": { url: "/brand-icons/postgresql-custom.svg" },
    "Supabase": { url: "/brand-icons/supabase-custom.svg" },
    "Next.js": { url: "/brand-icons/nextjs-custom.svg?v=2", invertDark: true },
    "Spreadsheets": { url: "", isLucide: true, iconName: "Table2" },
    "Google Apps Script": { url: "", isLucide: true, iconName: "Code2" },
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

    // Virtual MERN inputs (now integrated above, but kept as fallback or for special logic)
    const iconData = BRAND_ICONS[name];

    if (!iconData) { return null; }

    if (iconData.isLucide) {
        const IconComponent = iconData.iconName === "FlaskConical" ? FlaskConical :
            iconData.iconName === "Database" ? Database :
                iconData.iconName === "Zap" ? Zap :
                    iconData.iconName === "PenTool" ? PenTool :
                        iconData.iconName === "Image" ? ImageIcon :
                            iconData.iconName === "Blocks" ? Blocks :
                                iconData.iconName === "Table2" ? Table2 :
                                    iconData.iconName === "Code2" ? Code2 :
                                        ClipboardCheck;

        return <IconComponent className={`w-5 h-5 ${className} text-foreground`} />;
    }

    return (
        <div className={`relative w-5 h-5 flex-shrink-0 overflow-hidden ${className} ${iconData.invertDark ? 'dark:invert' : ''}`}>
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
