"use client";

import { caseStudies } from "@/data/case-studies";
import { projects } from "@/data/projects";
import ScrollProgress from "@/components/ui/ScrollProgress";
import { ChevronDown, Database, Github, Lightbulb, Target, Wrench } from "lucide-react";
import { useState } from "react";

const featuredProjects = projects.filter((p) => p.featured);

export default function Work() {
    const [expanded, setExpanded] = useState<number | null>(null);

    return (
        <>
            <ScrollProgress />
            <div className="max-w-5xl mx-auto px-6 py-20">

                {/* Case Studies */}
                <header className="mb-16">
                    <h1 className="text-5xl font-extrabold text-white mb-6 tracking-tight">Case Studies</h1>
                    <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
                        Structured breakdowns of real problems, approaches, and outcomes — from D2C revenue systems to quick commerce analytics infrastructure.
                    </p>
                </header>

                <div className="space-y-4">
                    {caseStudies.map((cs, index) => {
                        const isExpanded = expanded === index;
                        return (
                            <article
                                key={index}
                                className="border border-slate-800 rounded-2xl overflow-hidden transition-shadow hover:shadow-sm"
                            >
                                {/* Always visible: clickable header */}
                                <button
                                    onClick={() => setExpanded(isExpanded ? null : index)}
                                    className="w-full text-left p-8 hover:bg-slate-800/60 transition-colors"
                                >
                                    <div className="flex items-start justify-between gap-6">
                                        <div className="flex-1 min-w-0">
                                            <div className="flex flex-wrap items-center gap-2 mb-4">
                                                <span className="px-3 py-1 bg-slate-800 text-slate-300 text-xs font-bold rounded-full uppercase tracking-widest">
                                                    {cs.company}
                                                </span>
                                                {cs.status === "in-progress" && (
                                                    <span className="px-3 py-1 bg-amber-900/30 text-amber-400 text-xs font-bold rounded-full uppercase tracking-widest">
                                                        In Progress
                                                    </span>
                                                )}
                                            </div>
                                            <h2 className="text-xl md:text-2xl font-bold text-white mb-2 leading-snug">
                                                {cs.title}
                                            </h2>
                                            {cs.tagline && (
                                                <p className="text-sm text-slate-400 mb-4 leading-relaxed">{cs.tagline}</p>
                                            )}
                                            <div className="flex items-center gap-2 text-slate-400 mb-2">
                                                <Target size={14} />
                                                <span className="text-xs font-bold uppercase tracking-widest">Business Context</span>
                                            </div>
                                            <p className="text-slate-400 leading-relaxed text-sm">
                                                {cs.context}
                                            </p>
                                        </div>
                                        <ChevronDown
                                            size={20}
                                            className={`text-slate-400 shrink-0 mt-1 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                                        />
                                    </div>
                                </button>

                                {/* Expandable content */}
                                {isExpanded && (
                                    <div className="px-8 pb-10 border-t border-slate-800">
                                        {/* Tech Stack */}
                                        <div className="pt-8 mb-10">
                                            <div className="flex items-center gap-2 text-slate-400 mb-3">
                                                <Wrench size={14} />
                                                <span className="text-xs font-bold uppercase tracking-widest">Tech Stack</span>
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                {cs.tools.split(",").map((tool, i) => (
                                                    <span
                                                        key={i}
                                                        className="px-2.5 py-1 bg-slate-800 text-slate-300 text-[11px] font-mono rounded border border-slate-700 uppercase"
                                                    >
                                                        {tool.trim()}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Data Strategy + Technical Approach */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                            <div className="p-6 bg-slate-800 rounded-xl">
                                                <div className="flex items-center gap-2 mb-4">
                                                    <Database size={14} className="text-slate-400" />
                                                    <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Data Strategy</span>
                                                </div>
                                                <p className="text-slate-300 leading-relaxed text-sm">{cs.data}</p>
                                            </div>
                                            <div className="p-6 bg-slate-800 rounded-xl">
                                                <div className="flex items-center gap-2 mb-4">
                                                    <Lightbulb size={14} className="text-slate-400" />
                                                    <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Technical Approach</span>
                                                </div>
                                                <p className="text-slate-300 leading-relaxed text-sm">{cs.approach}</p>
                                            </div>
                                        </div>

                                        {/* Results */}
                                        <div className="bg-white/5 backdrop-blur text-white p-8 rounded-2xl mb-8">
                                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-white/70 text-[10px] font-bold uppercase tracking-widest rounded-full mb-5">
                                                Impact & Outcomes
                                            </div>
                                            <p className="text-base leading-relaxed text-slate-200">
                                                {cs.results}
                                            </p>
                                        </div>

                                        {/* Retrospective */}
                                        <div className="pl-5 border-l-2 border-slate-700">
                                            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
                                                Retrospective Improvement
                                            </h3>
                                            <p className="text-sm text-slate-500 italic leading-relaxed">
                                                {cs.improvement}
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </article>
                        );
                    })}
                </div>

                {/* AI Projects */}
                <section id="ai-projects" className="mt-32 pt-16 border-t border-slate-800">
                    <div className="mb-16">
                        <h2 className="text-3xl font-extrabold text-white mb-4 tracking-tight">AI Projects</h2>
                        <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
                            Work in progress — adding as projects ship.
                        </p>
                    </div>

                    <div className="space-y-32">
                        {featuredProjects.map((project, index) => (
                            <div key={index}>
                                <div className="mb-8">
                                    <div className="flex flex-wrap items-center gap-2 mb-4">
                                        {project.status === "in-progress" && (
                                            <span className="px-3 py-1 bg-amber-900/30 text-amber-400 text-xs font-bold rounded-full uppercase tracking-widest">
                                                In Progress
                                            </span>
                                        )}
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                                    <p className="text-lg text-slate-400 font-medium">{project.description}</p>
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12">
                                    <div className="space-y-8">
                                        <div>
                                            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-3">Business Problem</h4>
                                            <p className="text-slate-300 leading-relaxed italic">{project.problem}</p>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-3">Why AI vs Traditional</h4>
                                            <p className="text-slate-300 leading-relaxed font-medium">{project.whyAI}</p>
                                        </div>

                                        <div className="p-6 bg-slate-800 rounded-lg">
                                            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Architecture</h4>
                                            <pre className="text-xs font-mono overflow-x-auto leading-relaxed text-slate-300">
                                                {project.architecture}
                                            </pre>
                                        </div>
                                    </div>

                                    <div className="space-y-8">
                                        <div>
                                            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-3">Implementation</h4>
                                            <p className="text-slate-300 leading-relaxed font-mono text-sm">{project.implementation}</p>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-3">Business Value</h4>
                                            <p className="text-xl font-bold text-white leading-tight">{project.value}</p>
                                        </div>

                                        <div className="flex gap-4 pt-4">
                                            {project.githubUrl ? (
                                                <a
                                                    href={project.githubUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-white transition-colors"
                                                >
                                                    <Github size={18} /> View on GitHub
                                                </a>
                                            ) : project.demoUrl ? (
                                                <a
                                                    href={project.demoUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-white transition-colors"
                                                >
                                                    View Demo →
                                                </a>
                                            ) : null}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

            </div>
        </>
    );
}
