"use client";

import ScrollProgress from "@/components/ui/ScrollProgress";

export default function Work() {
    return (
        <>
            <ScrollProgress />
            <div className="max-w-5xl mx-auto px-6 py-20">
                <header className="mb-16 text-center">
                    <h1 className="text-5xl font-extrabold text-white mb-6 tracking-tight">Case Studies</h1>
                    <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
                        Coming soon — currently reviewing and refining case study content.
                    </p>
                </header>
            </div>
        </>
    );
}
