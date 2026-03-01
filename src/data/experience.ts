export interface Experience {
    role: string;
    company: string;
    location: string;
    duration: string;
    strategicScope: string;
    impact: string[];
    tools: string[];
}

export const experiences: Experience[] = [
    {
        role: "Analytics Lead",
        company: "Mosaic Wellness",
        location: "Mumbai",
        duration: "Nov 2023 – Present",
        strategicScope: "Own the analytics function across Finance, Product, Logistics, and Growth for a 3-brand D2C wellness company.",
        impact: [
            "Led development of 50+ self-serve revenue and sales trackers across all brands, actively used by 20+ stakeholders for daily planning.",
            "Cut reconciliation cycle time from 6 months to 3 days by building automation workflows with root-cause diagnostic logic.",
            "Saved 500+ man-hours annually by automating reporting and building scalable data systems across product, ops, and marketing.",
            "Designed analytics foundations for doctor-ops and multi-channel SKUs — covering metric definitions, data validation pipelines, and real-time dashboards.",
            "Implemented SKU-level data quality systems (99%+ accuracy), resolved long-standing logic bugs in bundle and discount calculations, and established formal PII governance.",
            "Mentored two junior analysts from onboarding to full independence — both now own their respective domains end-to-end.",
            "Documented data models and metric definitions, reducing analyst onboarding time."
        ],
        tools: ["SQL", "Tableau", "Mixpanel", "Python", "Metabase", "Redshift", "n8n"],
    },
    {
        role: "Senior Growth Analyst",
        company: "Zepto",
        location: "Mumbai",
        duration: "Jun 2022 – Nov 2023",
        strategicScope: "Built the monetization analytics infrastructure at Zepto — covering in-app campaign tracking, attribution, and performance reporting for 150+ brand campaigns.",
        impact: [
            "Built data pipelines connecting booking records to campaign performance data for 150+ brand campaigns — inventory fill rates, daily revenue by property and brand, campaign ROI.",
            "Built and maintained revenue dashboards centralizing acquisition, funnel, and performance metrics across all growth functions.",
            "Conducted 50+ root cause analyses and real-time performance reports to diagnose traffic and conversion drops and guide campaign optimization.",
            "Improved attribution accuracy by 30% — diagnosed and fixed broken AppsFlyer event flows across Mixpanel and CleverTap.",
            "Awarded 'Zepto Superstar', June 2023.",
        ],
        tools: ["SQL (Redshift)", "Python", "Looker", "Advanced Excel", "Mixpanel", "Facebook Ads", "Google Analytics", "AppsFlyer"],
    },
    {
        role: "Senior Business Analyst",
        company: "Whitehat Jr and BYJU's",
        location: "Mumbai / Bengaluru",
        duration: "Jul 2020 – Jun 2022",
        strategicScope: "Cross-functional analytics partner across Sales, Growth, Teacher Success, Student Success, and Curriculum — validating hypotheses and defining metrics across business functions.",
        impact: [
            "Embedded as a data partner across Sales, Growth, Teacher Success, and Curriculum teams — defining KPIs, validating hypotheses, and surfacing findings to drive operational decisions.",
            "Built automated dashboards for consistent performance monitoring across revenue functions — used for weekly forecasting and leadership reporting.",
            "Contributed to migration of 50+ dashboards and queries across two database transitions (MySQL → Redshift → Snowflake), ensuring query optimization and data integrity throughout.",
        ],
        tools: ["SQL", "MySQL", "Redshift", "Snowflake", "Tableau", "Excel"],
    },
    {
        role: "Data Lead",
        company: "Virtus Nutrition Pvt Ltd",
        location: "Mumbai",
        duration: "Nov 2017 – Jun 2020",
        strategicScope: "Built the data and analytics function at a nutrition startup — bioinformatics workflows, database analytics, and reporting infrastructure.",
        impact: [
            "Established bioinformatics workflows using open-source tools and databases to support product R&D.",
            "Developed data quality and analytics solutions including core database analytics and RShiny reporting tools.",
            "Delivered analysis across product, customer engagement, and operations teams.",
        ],
        tools: ["R", "RShiny", "Python", "SQL", "Bioinformatics tools"],
    },
];
