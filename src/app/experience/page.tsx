import { experiences } from "@/data/experience";
import ScrollProgress from "@/components/ui/ScrollProgress";

export default function Experience() {
    return (
        <>
        <ScrollProgress />
        <div className="max-w-5xl mx-auto px-6 py-20">
            <h1 className="text-4xl font-extrabold text-white mb-16">Professional Journey</h1>

            <div className="space-y-24">
                {experiences.map((exp, index) => (
                    <div key={index} className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12">
                        <div>
                            <h2 className="text-2xl font-bold text-white">{exp.role}</h2>
                            <div className="text-lg text-slate-400 font-medium">{exp.company}</div>
                            <div className="text-sm text-slate-500 mb-4">{exp.location}</div>
                            <div className="inline-block px-3 py-1 bg-slate-800 text-slate-300 text-xs font-bold rounded-full">
                                {exp.duration}
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-3">Strategic Scope</h3>
                                <p className="text-lg text-slate-300 leading-relaxed font-medium">{exp.strategicScope}</p>
                            </div>

                            <div>
                                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-3">Key Impact</h3>
                                <ul className="space-y-4">
                                    {exp.impact.map((item, i) => (
                                        <li key={i} className="flex gap-3 text-slate-300 leading-relaxed">
                                            <span className="text-slate-500 font-bold mt-1">•</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="pt-6 border-t border-slate-800">
                                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Tools Used</h3>
                                <div className="flex flex-wrap gap-2">
                                    {exp.tools.map((tool, i) => (
                                        <span
                                            key={i}
                                            className="px-2.5 py-1 bg-slate-800 text-slate-300 text-xs font-medium rounded-md"
                                        >
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>
    );
}
