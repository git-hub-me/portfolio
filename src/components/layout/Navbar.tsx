"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
    { name: "About",      anchor: "about" },
    { name: "AI Projects", anchor: "ai-projects" },
    { name: "Industries", anchor: "industries" },
    { name: "Skills",     anchor: "skills" },
    { name: "Education",  anchor: "education" },
    { name: "Contact",    anchor: "contact" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const href = (anchor: string) => pathname === "/" ? `#${anchor}` : `/#${anchor}`;

    return (
        <nav className="sticky top-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#1f1f1f]">
            <div className="max-w-[1080px] mx-auto px-8 h-[60px] flex items-center justify-between">
                <Link href="/" className="text-[19px] font-bold text-[#f0f0f0] tracking-tight" onClick={() => setIsOpen(false)}>
                    Bhushan Kamble
                </Link>

                {/* Desktop */}
                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={href(item.anchor)}
                            className="text-[13px] font-medium text-[#7a7a7a] hover:text-[#f0f0f0] transition-colors"
                        >
                            {item.name}
                        </a>
                    ))}
                    <span className="px-4 py-[6px] bg-[#1a1a1a] border border-[#2a2a2a] text-[#555] text-[12.5px] font-semibold rounded-md cursor-not-allowed">
                        CV — Coming Soon
                    </span>
                </div>

                {/* Hamburger */}
                <button
                    className="md:hidden p-2 text-[#7a7a7a] hover:text-[#f0f0f0] transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            {/* Mobile menu */}
            <div className={`md:hidden border-t border-[#1f1f1f] bg-[#0a0a0a] overflow-hidden transition-all duration-200 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="max-w-[1080px] mx-auto px-8 py-4 flex flex-col">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={href(item.anchor)}
                            onClick={() => setIsOpen(false)}
                            className="py-3 text-[14px] font-medium text-[#7a7a7a] hover:text-[#f0f0f0] border-b border-[#1f1f1f] transition-colors"
                        >
                            {item.name}
                        </a>
                    ))}
                    <span className="py-3 text-[14px] font-medium text-[#444] cursor-not-allowed">
                        CV — Coming Soon
                    </span>
                </div>
            </div>
        </nav>
    );
}
