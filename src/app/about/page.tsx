export default function About() {
    return (
        <div className="max-w-4xl mx-auto px-6 py-20">
            <h1 className="text-4xl font-extrabold text-[#f2efe8] mb-12">About Me</h1>

            <div className="space-y-8 text-lg text-[#ccc8bf] leading-relaxed">
                <p>
                    My foundation is unusual for a data professional — a <strong className="text-[#f2efe8]">dual degree in Biotechnology and Biochemical Engineering from IIT Kharagpur</strong>. That background trained me to treat every business problem like a research problem: form a hypothesis, design the right experiment, and follow the data — not the other way around.
                </p>

                <p>
                    I started my career at <strong className="text-[#f2efe8]">Virtus Nutrition</strong>, where I built bioinformatics workflows and analytics infrastructure from scratch. Working with large-scale biological datasets taught me rigour — the kind where an error in your pipeline doesn&apos;t just hurt a dashboard, it affects a product people put in their bodies.
                </p>

                <p>
                    From there, I moved into consumer tech at <strong className="text-[#f2efe8]">Whitehat Jr and BYJU&apos;s</strong>, where I worked across Sales, Growth, Teacher Success, and Curriculum teams. This was my first real exposure to the pace of a scaling startup — shipping 50+ dashboard migrations, defining KPIs across business functions, and learning how to make data useful for stakeholders who aren&apos;t data people.
                </p>

                <p>
                    At <strong className="text-[#f2efe8]">Zepto</strong>, I stepped into one of India&apos;s fastest-growing quick commerce companies as a Senior Growth Analyst. I helped build the monetization analytics infrastructure — data pipelines for in-app campaigns, revenue views centralizing acquisition and funnel metrics, and attribution frameworks that improved tracking accuracy by 30%. The work was fast, impactful, and unforgiving. Enough so to earn a Zepto Superstar award in 2023.
                </p>

                <p>
                    Today, I lead Analytics at <strong className="text-[#f2efe8]">Mosaic Wellness</strong> — owning 20+ key business metrics across Marketing, Finance, Product, Logistics, and Growth. I&apos;ve built 100+ dashboards, developed churn prediction models, and established governance frameworks for metric consistency and data reliability across a 4-person analytics team.
                </p>

                <p>
                    My current focus is the intersection of <strong className="text-[#f2efe8]">AI and Revenue Operations</strong>. I&apos;m building LLM-to-SQL pipelines that let any stakeholder query customer and order data in plain English, and automated anomaly detection on the fact tables I&apos;ve built. Static dashboards tell you what happened — I&apos;m building systems that surface what matters, before anyone asks.
                </p>

                <div className="pt-8 border-t border-[#252320]">
                    <h2 className="text-xl font-bold text-[#f2efe8] mb-4">Core Principles</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-medium text-[#7d7870]">
                        <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-[#504c42] rounded-full"></span>
                            AI-Native Analytics Infrastructure
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-[#504c42] rounded-full"></span>
                            Technical Rigor over Surface Metrics
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-[#504c42] rounded-full"></span>
                            Strategic Alignment with P&amp;L
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-[#504c42] rounded-full"></span>
                            Scalable Analytics Governance
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
