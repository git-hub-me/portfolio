import { FileText } from "lucide-react";

export default function Resume() {
    return (
        <div className="max-w-4xl mx-auto px-6 py-20">
            <h1 className="text-4xl font-extrabold text-white mb-4">Resume</h1>
            <p className="text-xl text-slate-400 mb-16">Download tailored versions of my resume based on your specific requirements.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 border border-slate-800 rounded-2xl flex flex-col items-start gap-6 opacity-60">
                    <div className="p-4 bg-slate-800 rounded-lg">
                        <FileText className="text-slate-400" size={32} />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-2">BI & Analytics Focus</h2>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Tailored for traditional leadership roles in Business Intelligence, Data Governance, and Growth Analytics.
                        </p>
                    </div>
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 text-slate-400 rounded-md text-sm font-medium border border-slate-700">
                        Coming Soon
                    </span>
                </div>

                <div className="p-8 border border-slate-800 rounded-2xl flex flex-col items-start gap-6 opacity-60">
                    <div className="p-4 bg-slate-800 rounded-lg">
                        <FileText className="text-slate-400" size={32} />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-2">Analytics & AI Focus</h2>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Tailored for AI-integrated roles, focusing on LLM-agents, autonomous systems, and predictive revenue ops.
                        </p>
                    </div>
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 text-slate-400 rounded-md text-sm font-medium border border-slate-700">
                        Coming Soon
                    </span>
                </div>
            </div>

            <div className="mt-20 p-8 bg-slate-900 rounded-2xl">
                <h3 className="text-lg font-bold text-white mb-4">Quick Contact</h3>
                <p className="text-slate-400 mb-6">Interested in discussing a potential partnership or leadership role?</p>
                <div className="flex flex-wrap gap-8 text-sm font-medium text-slate-400">
                    <a href="mailto:bhushankamble2393@gmail.com" className="hover:text-white transition-colors">
                        EMAIL: bhushankamble2393@gmail.com
                    </a>
                    <a
                        href="https://linkedin.com/in/bhushan-kamble/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors"
                    >
                        LINKEDIN: /in/bhushan-kamble
                    </a>
                    <span>LOCATION: Mumbai, India</span>
                </div>
            </div>
        </div>
    );
}
