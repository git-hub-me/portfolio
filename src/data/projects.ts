export type ProjectStatus = "live" | "coming-soon" | "in-progress";

export interface Project {
    title: string;
    description: string;
    problem: string;
    whyAI: string;
    architecture: string;
    implementation: string;
    value: string;
    status: ProjectStatus;
    featured?: boolean;
    githubUrl?: string;
    demoUrl?: string;
}

export const projects: Project[] = [
    {
        title: "ExpenseManager — AI-Powered iOS Expense Tracker",
        description: "iOS app that parses natural language expense entries using Google Gemini.",
        problem: "Manual expense logging is tedious — users forget entries or input them inconsistently, making categories unreliable for reporting.",
        whyAI: "Gemini extracts amount, category, date, and notes from a single sentence, handling varied phrasing without regex patterns or structured input forms.",
        architecture: `User types: "spent ₹450 on groceries"
      ↓
Gemini API (Flash / Flash Lite)
      ↓
{ amount: 450, category: "Groceries", date: today, note: "" }
      ↓
@capacitor/preferences (iOS UserDefaults)
      ↓
Recharts dashboard + searchable history`,
        implementation: "React 18 + Vite · Capacitor 8 (iOS) · Google Gemini API (2.5 Flash / Flash Lite) · Recharts · @capacitor/preferences · Tailwind CSS + Framer Motion",
        value: "Shipped a production iOS app solo using AI-assisted development from idea to App Store.",
        status: "live",
        featured: false,
        githubUrl: "https://github.com/git-hub-me/expense-manager",
    },
    {
        title: "Price Parity Monitor — Cross-Channel SKU Price Tracker",
        description: "POC tool that crawls Amazon and Instamart product listings via Firecrawl and surfaces price parity violations against internal D2C prices — per SKU, across channels.",
        problem: "Price discrepancies across Amazon, Instamart, and D2C are common and go unnoticed without automated monitoring. Manual checks don't scale past a handful of SKUs.",
        whyAI: "Firecrawl extracts price data from dynamically rendered ecommerce pages via a single API — no CSS selectors to maintain across Amazon, Instamart, and D2C layouts.",
        architecture: `User adds product URLs (Amazon, Instamart, internal D2C)
      ↓
Firecrawl API (AI-powered web extraction)
      ↓
{ price, title, availability } per channel
      ↓
Side-by-side price comparison dashboard
      ↓
Parity status: in-range / violation flagged`,
        implementation: "Lovable (AI-assisted app builder) · Firecrawl API (AI web extraction) · React · Tailwind CSS",
        value: "Gives visibility into cross-channel price gaps per SKU without manual checks. Built and deployed as a working POC using Lovable + Firecrawl.",
        status: "in-progress",
        featured: true,
        demoUrl: "https://val-vigil-bot.lovable.app/",
    },
    {
        title: "Conversational Analytics — Natural Language Querying on Customer & Order Data",
        description: "POC that takes plain English questions about customer behavior and order trends, translates them into SQL, executes the queries, and returns a structured summary answer.",
        problem: "Ad hoc questions about customer behavior and order trends require SQL knowledge or analyst time — creating a bottleneck for every stakeholder who wants to understand the data.",
        whyAI: "An LLM translates a conversational question into one or more SQL queries, executes them against customer and order-level data, and synthesizes the results into a short, readable answer — no SQL required from the user.",
        architecture: `User asks: "Which cohort has the highest second-order rate this quarter?"
      ↓
LLM generates SQL query plan
      ↓
Executes queries against customer / order-level data
      ↓
LLM synthesizes query results
      ↓
Returns structured summary answer`,
        implementation: "Python · LLM (in progress)",
        value: "Lets any stakeholder ask data questions in plain English and get a grounded, data-backed answer — without writing SQL or waiting for an analyst.",
        status: "in-progress",
        featured: true,
    },
];
