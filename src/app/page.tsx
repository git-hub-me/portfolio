import { caseStudies } from "@/data/case-studies";
import { projects } from "@/data/projects";
import CompanyLogo from "@/components/ui/CompanyLogo";


const companyMeta: Record<string, { domain: string; initial: string; color: string }> = {
    "Mosaic Wellness": { domain: "mosaicwellness.in", initial: "M", color: "#7c3aed" },
    "Zepto":           { domain: "zeptonow.com",      initial: "Z", color: "#d97706" },
};

const industries = [
    {
        domain: "mosaicwellness.in", initial: "M", color: "#7c3aed",
        label: "D2C / Health & Wellness",
        sub: "manmatters · bebodywise · ourlittlejoys",
        caps: [
            "SKU-level P&L and multi-brand revenue systems",
            "Subscription and repeat-purchase analytics",
            "Churn prediction and retention modelling",
            "Marketing attribution and channel ROI",
            "Org-wide data governance and fact tables",
        ],
    },
    {
        domain: "zeptonow.com", initial: "Z", color: "#d97706",
        label: "Quick Commerce",
        sub: "10-minute delivery",
        caps: [
            "Mobile attribution across AppsFlyer, Mixpanel, CleverTap",
            "In-app monetisation analytics and inventory fill rates",
            "Performance marketing channel ROI",
            "Brand campaign measurement (150+ campaigns)",
            "Top-of-funnel and mid-funnel conversion diagnostics",
        ],
    },
    {
        domain: "whitehatjr.com", initial: "W", color: "#2563eb",
        label: "EdTech",
        sub: "Whitehat Jr / BYJU's — coding for kids",
        caps: [
            "Sales funnel and conversion analytics",
            "Student lifecycle and engagement tracking",
            "Revenue and growth reporting",
        ],
    },
    {
        domain: "virtusnutrition.com", initial: "V", color: "#059669",
        label: "Nutrition / Biotech",
        sub: "Virtus Nutrition — early-stage startup",
        caps: [
            "Early-stage analytics infrastructure",
            "Revenue and customer data foundation",
            "Growth and operations reporting",
        ],
    },
];

const skills = [
    { label: "AI & Automation",        items: "LLM-to-SQL Pipelines · RAG on Structured Data · Prompt Engineering · Google Gemini API · LangChain · Firecrawl · Claude Code · Agent Workflows · n8n Orchestration" },
    { label: "Analytics & Modelling",  items: "SQL · Python · R · JavaScript · Cohort Analysis · Regression Models · A/B Testing · Funnel Analytics · Forecasting · Planning · Anomaly Detection" },
    { label: "Attribution & Tracking", items: "AppsFlyer · Mixpanel · CleverTap · Amplitude · Branch · Firebase · GTM · Google Analytics · Mobile Event Pipelines" },
    { label: "Data Infrastructure",    items: "Redshift · Snowflake · BigQuery · DBMS · Google Cloud Platform · Python ETL · Google Sheets API · n8n · cron" },
    { label: "BI & Reporting",         items: "Looker · Tableau · Power BI · Metabase · Superset · Google Sheets · Excel" },
    { label: "Cross-functional",       items: "Finance & P&L · Product · Marketing & Growth · Logistics · Operations · Sales · Data Governance · Stakeholder Alignment" },
];

export default function Home() {
    return (
        <>
            {/* ── Hero ── */}
            <section id="hero" className="py-[120px] border-b border-[#1f1f1f]">
                <div className="max-w-[1080px] mx-auto px-8">
                    <p className="text-[10.5px] font-bold text-[#444] tracking-[0.18em] uppercase mb-7">
                        Analytics &middot; AI &middot; Cross-functional
                    </p>
                    <h1 className="text-4xl md:text-5xl lg:text-[68px] font-extrabold tracking-[-0.04em] leading-[1.05] text-[#f0f0f0] mb-7 max-w-[780px]">
                        Building AI systems that make analytics self-serve.
                    </h1>
                    <p className="text-[17px] text-[#7a7a7a] leading-[1.75] max-w-[580px] mb-11">
                        Analytics lead with 8 years across D2C, quick commerce, and edtech &mdash; now building LLM-powered tools that automate reporting, detect anomalies, and turn natural language into SQL.
                    </p>
                    <div className="flex gap-3 flex-wrap">
                        <a href="#work" className="inline-flex items-center gap-1.5 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md text-sm font-semibold transition-colors">
                            View Work &rarr;
                        </a>
                        <a href="#contact" className="inline-flex items-center px-6 py-3 border border-[#2a2a2a] hover:border-[#3a3a3a] text-[#7a7a7a] hover:text-[#f0f0f0] rounded-md text-sm font-medium transition-colors">
                            Get in touch
                        </a>
                    </div>
                </div>
            </section>

            {/* ── About ── */}
            <section id="about" className="py-24 border-b border-[#1f1f1f]">
                <div className="max-w-[1080px] mx-auto px-8">
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_1.6fr] gap-16 md:gap-20 items-start">
                        <div>
                            <p className="text-[10.5px] font-bold text-[#444] tracking-[0.16em] uppercase mb-4">About</p>
                            <h2 className="text-[36px] font-extrabold tracking-[-0.03em] text-[#f0f0f0] leading-none">What I do</h2>
                        </div>
                        <div className="space-y-5 text-[15px] text-[#7a7a7a] leading-[1.85]">
                            <p>
                                I work across the full analytics stack — from <span className="text-[#f0f0f0] font-semibold">fixing broken event pipelines</span> and rebuilding misaligned fact tables to <span className="text-[#f0f0f0] font-semibold">modelling customer churn</span> and building self-serve data infrastructure for 20+ stakeholders. My focus is on making revenue data reliable, accessible, and decision-ready for every function that needs it.
                            </p>
                            <p>
                                Most of my work starts with a data problem that looks like a business problem — or a business problem that turns out to be a data problem. After <span className="text-[#f0f0f0] font-semibold">8 years across D2C, quick commerce, edtech, and biotech</span>, I&apos;ve learned to diagnose the difference quickly and fix it at the source, not the dashboard.
                            </p>
                            <p>
                                I&apos;m now applying that foundation to AI — building <span className="text-[#f0f0f0] font-semibold">LLM-to-SQL pipelines</span> for self-serve analytics, <span className="text-[#f0f0f0] font-semibold">survival models for churn prediction</span>, and automated anomaly detection on the revenue systems I&apos;ve built. The goal: make the analyst&apos;s pattern-recognition work programmable.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Work / Case Studies ── */}
            <section id="work" className="py-24 border-b border-[#1f1f1f]">
                <div className="max-w-[1080px] mx-auto px-8">
                    <div className="flex justify-between items-end mb-12 flex-wrap gap-3">
                        <div>
                            <p className="text-[10.5px] font-bold text-[#444] tracking-[0.16em] uppercase mb-4">Work</p>
                            <h2 className="text-[36px] font-extrabold tracking-[-0.03em] text-[#f0f0f0] leading-none">Selected Case Studies</h2>
                        </div>
                        <a href="/work" className="text-[13px] font-medium text-[#7a7a7a] hover:text-[#f0f0f0] transition-colors whitespace-nowrap">
                            See full breakdowns &rarr;
                        </a>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-[#1f1f1f] border border-[#1f1f1f] rounded-xl overflow-hidden">
                        {caseStudies.map((cs) => {
                            const meta = companyMeta[cs.company];
                            return (
                                <div key={cs.title} className="bg-[#0a0a0a] hover:bg-[#111111] p-8 flex flex-col transition-colors">
                                    <div className="flex items-center gap-2.5 mb-5">
                                        {meta && (
                                            <CompanyLogo
                                                domain={meta.domain}
                                                name={cs.company}
                                                initial={meta.initial}
                                                color={meta.color}
                                                size={28}
                                            />
                                        )}
                                        <span className="text-[11.5px] font-semibold text-[#444] tracking-[0.05em] uppercase">
                                            {cs.company}
                                        </span>
                                        {cs.status === "in-progress" && (
                                            <span className="ml-auto text-[10px] font-semibold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded-full uppercase tracking-wide">
                                                In Progress
                                            </span>
                                        )}
                                    </div>
                                    <h3 className="text-[15px] font-bold text-[#f0f0f0] tracking-[-0.015em] leading-snug mb-2.5">
                                        {cs.title}
                                    </h3>
                                    <p className="text-[13px] text-[#7a7a7a] leading-[1.65] flex-1 mb-5">
                                        {cs.results}
                                    </p>
                                    <div className="flex flex-wrap gap-1.5">
                                        {cs.tools.split(",").map((t) => (
                                            <span key={t} className="px-2 py-0.5 bg-[#161616] border border-[#2a2a2a] rounded text-[10.5px] font-mono text-[#555] uppercase tracking-wide">
                                                {t.trim()}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── AI Projects ── */}
            <section id="ai-projects" className="py-24 border-b border-[#1f1f1f]">
                <div className="max-w-[1080px] mx-auto px-8">
                    <div className="flex justify-between items-end mb-12 flex-wrap gap-3">
                        <div>
                            <p className="text-[10.5px] font-bold text-[#444] tracking-[0.16em] uppercase mb-4">AI</p>
                            <h2 className="text-[36px] font-extrabold tracking-[-0.03em] text-[#f0f0f0] leading-none">AI Projects</h2>
                        </div>
                        <a href="/projects" className="text-[13px] font-medium text-[#7a7a7a] hover:text-[#f0f0f0] transition-colors whitespace-nowrap">
                            See all projects &rarr;
                        </a>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-[#1f1f1f] border border-[#1f1f1f] rounded-xl overflow-hidden">
                        {projects.filter((p) => p.featured).map((project) => (
                            <div key={project.title} className="bg-[#0a0a0a] hover:bg-[#111111] p-8 flex flex-col transition-colors">
                                <div className="flex items-center gap-2.5 mb-5">
                                    <span className="text-[11.5px] font-semibold text-indigo-400 tracking-[0.05em] uppercase">
                                        {project.status === "live" ? "Shipped" : "In Progress"}
                                    </span>
                                </div>
                                <h3 className="text-[15px] font-bold text-[#f0f0f0] tracking-[-0.015em] leading-snug mb-2.5">
                                    {project.title}
                                </h3>
                                <p className="text-[13px] text-[#7a7a7a] leading-[1.65] flex-1 mb-3">
                                    {project.description}
                                </p>
                                <p className="text-[12px] text-[#555] leading-[1.65] mb-5">
                                    <span className="text-[#7a7a7a] font-medium">Why AI:</span> {project.whyAI}
                                </p>
                                <div className="flex flex-wrap gap-1.5">
                                    {project.implementation.split("·").map((t) => (
                                        <span key={t} className="px-2 py-0.5 bg-[#161616] border border-[#2a2a2a] rounded text-[10.5px] font-mono text-[#555] uppercase tracking-wide">
                                            {t.trim()}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Industries ── */}
            <section id="industries" className="py-24 border-b border-[#1f1f1f]">
                <div className="max-w-[1080px] mx-auto px-8">
                    <p className="text-[10.5px] font-bold text-[#444] tracking-[0.16em] uppercase mb-4">Industries</p>
                    <h2 className="text-[36px] font-extrabold tracking-[-0.03em] text-[#f0f0f0] leading-none mb-12">Where I&apos;ve worked</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-[#1f1f1f] border border-[#1f1f1f] rounded-xl overflow-hidden">
                        {industries.map((ind) => (
                            <div key={ind.label} className="bg-[#0a0a0a] hover:bg-[#111111] p-8 transition-colors">
                                <div className="flex items-center gap-3 mb-4">
                                    <CompanyLogo
                                        domain={ind.domain}
                                        name={ind.label}
                                        initial={ind.initial}
                                        color={ind.color}
                                        size={34}
                                    />
                                    <div>
                                        <div className="text-[13px] font-bold text-[#f0f0f0]">{ind.label}</div>
                                        <div className="text-[11px] text-[#444]">{ind.sub}</div>
                                    </div>
                                </div>
                                <ul className="space-y-1.5">
                                    {ind.caps.map((cap) => (
                                        <li key={cap} className="text-[13px] text-[#7a7a7a] pl-4 relative before:absolute before:left-0 before:content-['•'] before:text-[#444]">
                                            {cap}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Skills ── */}
            <section id="skills" className="py-24 border-b border-[#1f1f1f]">
                <div className="max-w-[1080px] mx-auto px-8">
                    <p className="text-[10.5px] font-bold text-[#444] tracking-[0.16em] uppercase mb-4">Skills</p>
                    <h2 className="text-[36px] font-extrabold tracking-[-0.03em] text-[#f0f0f0] leading-none mb-12">Technical skills</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {skills.map((sg) => (
                            <div key={sg.label} className="bg-[#111111] border border-[#1f1f1f] rounded-xl p-6">
                                <p className="text-[10.5px] font-bold text-indigo-400 tracking-[0.12em] uppercase mb-4">{sg.label}</p>
                                <p className="text-[13.5px] text-[#7a7a7a] leading-[2]">{sg.items}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Education ── */}
            <section id="education" className="py-24 border-b border-[#1f1f1f]">
                <div className="max-w-[1080px] mx-auto px-8">
                    <p className="text-[10.5px] font-bold text-[#444] tracking-[0.16em] uppercase mb-4">Education</p>
                    <h2 className="text-[36px] font-extrabold tracking-[-0.03em] text-[#f0f0f0] leading-none mb-12">Background</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-[#111111] border border-[#1f1f1f] rounded-xl p-8">
                            <p className="text-[11px] font-bold text-[#444] tracking-[0.1em] uppercase mb-3">2011 – 2016</p>
                            <p className="text-[15px] font-bold text-[#f0f0f0] tracking-[-0.015em] leading-snug mb-1.5">M.Tech – B.Tech Dual Degree</p>
                            <p className="text-[13px] font-semibold text-[#7a7a7a] mb-3">IIT Kharagpur</p>
                            <p className="text-[12.5px] text-[#444] leading-[1.7]">
                                Biotechnology &amp; Biochemical Engineering. One of India&apos;s premier technical institutions. The scientific foundation informs how I approach measurement, model design, and drawing conclusions from data.
                            </p>
                        </div>
                        <div className="flex items-center p-8">
                            <div>
                                <p className="text-[10.5px] font-bold text-[#444] tracking-[0.16em] uppercase mb-3">Currently building</p>
                                <p className="text-[14px] text-[#7a7a7a] leading-[1.75] mb-4">
                                    Using LLMs to automate revenue analytics — natural language querying on order and customer data, anomaly detection, and AI-generated insight delivery.
                                </p>
                                <a href="/work#ai-projects" className="text-[13px] text-[#444] hover:text-[#7a7a7a] transition-colors">
                                    See AI projects &rarr;
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Contact ── */}
            <section id="contact" className="py-[100px] text-center">
                <div className="max-w-[1080px] mx-auto px-8">
                    <p className="text-[10.5px] font-bold text-[#444] tracking-[0.16em] uppercase mb-4">Contact</p>
                    <h2 className="text-[36px] font-extrabold tracking-[-0.03em] text-[#f0f0f0] leading-none mb-4">Get in touch</h2>
                    <p className="text-[16px] text-[#7a7a7a] max-w-[480px] mx-auto leading-[1.75] mb-10">
                        Open to analytics roles, advisory conversations, and collaborations. If you&apos;re working on an interesting revenue or growth problem — let&apos;s talk.
                    </p>
                    <div className="flex justify-center gap-7 flex-wrap">
                        <a href="mailto:bhushankamble2393@gmail.com" className="flex items-center gap-2 text-[14px] font-medium text-[#7a7a7a] hover:text-[#f0f0f0] transition-colors">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="2" y="4" width="20" height="16" rx="2"/>
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                            </svg>
                            bhushankamble2393@gmail.com
                        </a>
                        <a href="https://linkedin.com/in/bhushan-kamble/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[14px] font-medium text-[#7a7a7a] hover:text-[#f0f0f0] transition-colors">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                                <rect x="2" y="9" width="4" height="12"/>
                                <circle cx="4" cy="4" r="2"/>
                            </svg>
                            linkedin.com/in/bhushan-kamble
                        </a>
                    </div>
                </div>
            </section>

            {/* ── Footer ── */}
            <footer className="py-6 border-t border-[#1f1f1f]">
                <div className="max-w-[1080px] mx-auto px-8 flex justify-between items-center flex-wrap gap-2">
                    <span className="text-xs text-[#444]">&copy; 2026 Bhushan Kamble &middot; Mumbai, India</span>
                    <a href="#hero" className="text-xs text-[#444] hover:text-[#7a7a7a] transition-colors">Back to top &uarr;</a>
                </div>
            </footer>
        </>
    );
}
