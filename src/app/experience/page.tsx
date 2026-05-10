import { experiences } from "@/data/experience";
import ScrollProgress from "@/components/ui/ScrollProgress";

export default function Experience() {
    return (
        <>
        <ScrollProgress />
        <div className="max-w-5xl mx-auto px-6 py-20">
            <h1 className="text-4xl font-extrabold text-[#f2efe8] mb-16">Professional Journey</h1>

            <div className="space-y-6">
                {experiences.map((exp, index) => (
                    <div key={index} className="bg-white/[0.02] border border-white/[0.07] rounded-2xl p-8 md:p-10 hover:border-white/[0.11] transition-all duration-300">
                        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10">
                            <div>
                                <h2 className="text-xl font-bold text-[#f2efe8]">{exp.role}</h2>
                                <div className="text-[15px] text-indigo-400 font-medium mt-0.5">{exp.company}</div>
                                <div className="text-sm text-[#504c42] mt-0.5 mb-4">{exp.location}</div>
                                <div className="inline-block px-3 py-1 bg-[#1e1c18] text-[#9d9990] text-xs font-bold rounded-full border border-[#302e26]">
                                    {exp.duration}
                                </div>
                            </div>

                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-[10.5px] font-bold uppercase tracking-[0.15em] text-[#504c42] mb-3">Strategic Scope</h3>
                                    <p className="text-[15px] text-[#ccc8bf] leading-relaxed font-medium">{exp.strategicScope}</p>
                                </div>

                                <div>
                                    <h3 className="text-[10.5px] font-bold uppercase tracking-[0.15em] text-[#504c42] mb-3">Key Impact</h3>
                                    <ul className="space-y-3">
                                        {exp.impact.map((item, i) => (
                                            <li key={i} className="flex gap-3 text-[14px] text-[#ccc8bf] leading-relaxed">
                                                <span className="text-amber-500/60 font-bold mt-1 shrink-0">•</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="pt-5 border-t border-[#222018]">
                                    <h3 className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#504c42] mb-3">Tools Used</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {exp.tools.map((tool, i) => (
                                            <span
                                                key={i}
                                                className="px-2.5 py-1 bg-[#1e1c18] text-[#9d9990] text-xs font-medium rounded-md border border-[#302e26]"
                                            >
                                                {tool}
                                            </span>
                                        ))}
                                    </div>
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
