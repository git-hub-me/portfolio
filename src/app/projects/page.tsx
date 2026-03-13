import { projects } from "@/data/projects";
import { Github } from "lucide-react";

export default function AIProjects() {
    if (projects.length === 0) {
        return (
            <div className="max-w-5xl mx-auto px-6 py-20">
                <div className="flex justify-between items-end mb-16">
                    <div>
                        <h1 className="text-4xl font-extrabold text-white mb-4">AI Projects</h1>
                        <p className="text-xl text-slate-400 max-w-2xl">
                            Shipped AI products and tools — from personal experiments to autonomous systems for revenue and growth.
                        </p>
                    </div>
                </div>

                <div className="border border-dashed border-slate-700 rounded-2xl p-16 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-800 text-slate-300 text-xs font-bold rounded-full uppercase tracking-widest mb-6">
                        Coming Soon
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-4">Projects being documented</h2>
                    <p className="text-slate-400 leading-relaxed max-w-lg mx-auto">
                        Working on writeups for churn prediction systems, revenue anomaly detection agents,
                        and campaign auto-diagnosis tooling built at Mosaic Wellness and Zepto.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-5xl mx-auto px-6 py-20">
            <div className="flex justify-between items-end mb-16">
                <div>
                    <h1 className="text-4xl font-extrabold text-white mb-4">AI Projects</h1>
                    <p className="text-xl text-slate-400 max-w-2xl">Shipped AI products and tools — from personal experiments to autonomous systems for revenue and growth.</p>
                </div>
            </div>

            <div className="space-y-32">
                {projects.map((project, index) => (
                    <div key={index} className="group">
                        <div className="mb-8">
                            <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
                            <p className="text-lg text-slate-400 font-medium">{project.description}</p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12">
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-3">Business Problem</h3>
                                    <p className="text-slate-300 leading-relaxed italic">{project.problem}</p>
                                </div>

                                <div>
                                    <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-3">Why AI vs Traditional</h3>
                                    <p className="text-slate-300 leading-relaxed font-medium">{project.whyAI}</p>
                                </div>

                                <div className="p-6 bg-slate-800 rounded-lg">
                                    <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Architecture</h3>
                                    <pre className="text-xs font-mono overflow-x-auto leading-relaxed text-slate-300">
                                        {project.architecture}
                                    </pre>
                                </div>
                            </div>

                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-3">Implementation</h3>
                                    <p className="text-slate-300 leading-relaxed font-mono text-sm">{project.implementation}</p>
                                </div>

                                <div>
                                    <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-3">Business Value</h3>
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
                                    ) : (
                                        <div className="flex items-center gap-2 text-sm font-bold text-slate-400 cursor-not-allowed">
                                            <Github size={18} /> Internal Repo
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}
