export type CaseStudyStatus = "live" | "coming-soon" | "in-progress";

export interface CaseStudy {
    tagline?: string;
    company: string;
    title: string;
    context: string;
    data: string;
    approach: string;
    tools: string;
    results: string;
    improvement: string;
    status: CaseStudyStatus;
}

export const caseStudies: CaseStudy[] = [
    {
        company: "Mosaic Wellness",
        title: "Building a Unified SKU-Level Revenue Intelligence System",
        context: "Mosaic Wellness (manmatters.com, bebodywise.com, ourlittlejoys.com) had no single source of truth for business performance. Sales and spends data sat in silos across D2C website, app, and marketplace channels. The official P&L MIS was generated only at month-end by finance — leaving leadership making category investment decisions on lagged data and incorrect assumptions. Key ratios like RTO and tax were estimated at aggregate level rather than calculated at SKU level, quietly distorting every profitability conversation.",
        data: "Multi-channel order data from D2C website, app, Amazon, Flipkart, and other marketplaces. Marketing spends from marketplace ad platforms (incomplete and ambiguous — required assumption documentation at multiple levels). Logistics and operations data. Finance MIS as the ground-truth benchmark for validation.",
        approach: "Built automated data pipelines on Redshift combining automated feeds with manual data sources. Standardized and denormalized all inputs to a common SKU-level grain. Corrected broken cross-channel SKU mappings and fixed systemic ratio errors — RTO ratio, tax calculations, bundle and discount logic — that had been assumed at aggregate level for years. Worked with data engineering to build validated spends pipelines, documented all assumptions for stakeholder sign-off, and delivered via a phased rollout: category-level view first, then full SKU-level, then a daily emailer to leadership. Trained one analyst over three quarters to own the pipeline independently.",
        tools: "SQL (Redshift), Python, Metabase, n8n, Excel",
        results: "Achieved <1% variance with the month-end finance MIS — giving leadership daily visibility that previously required a 6-month reconciliation cycle. Built an actuals-vs-AOP (Annual Operating Plan) layer so channel managers could track performance against plan in real time. SKU-level P&L visibility enabled concrete decisions: identified that Shilajit, despite strong GMV growth, was underperforming on contribution margin versus Hair and Beard on manmatters. Category teams started interrogating sell-through rates by subcategory and shifting focus based on data.",
        improvement: "With the pipeline now stable, the next step is to layer anomaly detection — flagging when a category's daily sell-through rate or margin deviates beyond a threshold, so the insight surfaces automatically rather than requiring someone to go look for it.",
        status: "live",
    },
    {
        company: "Mosaic Wellness",
        title: "Survival Analysis for Second-Order Churn",
        context: "77% of customers at Mosaic Wellness never place a second order. In a D2C health and wellness business where product efficacy depends on consistent use, this is a retention problem with direct revenue impact. The existing approach was broad-brush communication campaigns sent to all post-first-order users — no differentiation by likelihood, no timing intelligence, and a communications budget treating all churners as equal.",
        data: "Historical order data with timestamps, user demographic and acquisition signals, product category and SKU of first order, time-between-orders distributions across cohorts, and communication engagement data.",
        approach: "Applied a Cox Proportional Hazards model (survival analysis) to model the probability and timing of a user placing their second order — rather than a simple binary churn flag. Unlike logistic regression, the Cox model accounts for the time dimension: when is a user most at risk, and how long does the business have to intervene? Users were segmented into high, medium, and low second-order probability groups based on their survival curves. The segmentation enabled experiments with differentiated communication strategies — timing, messaging, and channel — per segment, and prompted discussions on reallocation of the communications budget toward higher-probability segments.",
        tools: "Python (lifelines library), SQL (Redshift), Metabase",
        results: "Segmented the full user base into actionable retention groups with distinct survival curves. Initiated targeted communication experiments per segment. Triggered leadership discussions on communications budget allocation based on predicted second-order probability rather than uniform spend. Model is live, segments are defined, and the business is running differentiated experiments across groups.",
        improvement: "The next step is to enrich the feature set with product usage signals (e.g., doctor consultation completion, app engagement) and first-order experience data (delivery time, returns) to improve early-signal prediction — catching at-risk users within the first 7 days post-purchase rather than after the standard reorder window.",
        status: "in-progress",
    },
    {
        company: "Mosaic Wellness",
        title: "Establishing a Single Source of Truth: Org-Wide Fact Tables for a Multi-Brand D2C Company",
        tagline: "Established a single source of truth — one metric definition, every team, all three brands.",
        context: "Mosaic Wellness had a metric consistency problem. Analysts and stakeholders across Marketing, Finance, Product, and Logistics were all querying the same raw Redshift tables — but rebuilding the same business logic independently in each query, often with different interpretations. How to count subtotal vs. payment amount, how to apply cashback and discount, how to handle bundle pricing, what constitutes a 'new' vs. 'repeat' customer, how to tag an order to a category — every team had their own version. No one was wrong per se, but no two numbers agreed.",
        data: "Raw Redshift tables spanning three brands (manmatters, bebodywise, ourlittlejoys): order-level data, order-product-level data, and user-level data. Custom product mappings, bundle and kit configurations, discount and cashback logs, logistics records, and demographic data.",
        approach: "Designed and built a set of aggregated fact tables in Redshift — order-level meta, order-product-level meta, and user-level meta — covering 50+ pre-computed columns that encoded all the business logic in one place. This included: standardized financial fields (subtotal, payment amount, cashback used, discount applied), correct bundle discount interpretation, kit vs. kit+product distinction, order classification logic (new/repeat, order number, first order date), logistics metrics (RTO flags, delivery status), and custom category tagging per brand. Worked with data engineering to validate and deploy the tables, documented every definition, and migrated all downstream queries and Tableau dashboards to read from the new tables. The process also served as a full audit of the Redshift schema — surfacing and fixing inconsistencies that had accumulated across systems.",
        tools: "SQL (Redshift), Tableau, Metabase, Python",
        results: "Eliminated metric disagreement across functions — every team now queries the same pre-computed columns with identical definitions. All Tableau dashboards, Metabase reports, Google Sheets automator feeds, and AI-generated reports read from these tables. New analysts onboard directly onto the fact layer without needing to reverse-engineer raw table logic. The tables also became the foundation for alerting systems and are used as structured inputs for AI-based insight generation.",
        improvement: "The natural next step is to version the metric definitions formally — so when a definition changes (e.g., how a bundle discount is split across SKUs), there's a clear changelog and downstream consumers are notified automatically rather than discovering the change when a number shifts.",
        status: "live",
    },
    {
        company: "Mosaic Wellness",
        title: "Self-Serve Analytics Infrastructure: Google Sheets-Powered ETL Orchestrator",
        tagline: "Cut ETL wait times to zero — self-serve data feeds for 20+ stakeholders, no analyst in the loop.",
        context: "The analytics team at Mosaic Wellness was a constant bottleneck. Every new data feed required a separate request, a one-off database dump, and manual effort from an analyst. Teams across Marketing, Finance, Product, and Logistics either waited days for Tableau reports or flooded the team with ad hoc requests. There was no way for stakeholders to self-serve fresh data, and no scalable system to manage the growing number of reporting needs across 3 brands.",
        data: "Redshift data warehouse as the query source. Google Sheets as both the config layer (registry of feeds) and the delivery layer (where results land). 50+ downstream dashboards and reports across all business functions.",
        approach: "Built a service account-based ETL orchestrator using Google Sheets as a lightweight config registry. Each row in the master sheet defines one data feed: the target Google Sheet where results should land, a linked query document containing the SQL, and the scheduled run slot. A central Python script runs on a cron server, reads the registry, executes each query against Redshift at the designated time using the service account, and writes results directly to the target sheet. Adding a new data feed requires no code — just a new row in the config sheet. Built and maintained the system while scaling the analytics team from 0 to 4 analysts.",
        tools: "Python, Google Sheets API, Google Drive service accounts, SQL (Redshift), cron",
        results: "Powers 50+ live dashboards and data feeds actively used by 20+ stakeholders across Marketing, Finance, Product, Logistics, and Growth. Eliminated the need for ad hoc dump requests — teams self-serve data on a schedule without analyst involvement. The system is now also used as the data layer for AI-generated reports, where the freshly populated sheets serve as inputs to automated insight pipelines.",
        improvement: "The next step is replacing the Google Sheet config with a lightweight web UI, adding run-status monitoring and failure alerts, and integrating LLM-based query generation — so stakeholders can describe the data they want in plain English and the system writes the SQL.",
        status: "live",
    },
    {
        company: "Zepto",
        title: "Fixing Attribution Accuracy Across a Multi-Platform Mobile Stack",
        context: "Zepto's performance marketing team was allocating budget across Google, Meta, and affiliate channels without reliable attribution data. AppsFlyer events were firing with incomplete properties, attributed installs weren't flowing into Mixpanel, and there was no clean way to reconcile channel performance across three tracking platforms. Channel ROI calculations were unreliable — and budget decisions were being made on broken data.",
        data: "AppsFlyer (install attribution and campaign-level data), Mixpanel (in-app funnel events and engagement), CleverTap (user lifecycle and retention data). Cross-platform event reconciliation as the primary diagnostic method.",
        approach: "Diagnosed the attribution gap by systematically cross-checking event flows across all three platforms — identifying where event properties were incomplete, where attribution events were being dropped, and where Mixpanel was failing to receive AppsFlyer attributed events. Worked with product and data engineering to create a dedicated attribution event that correctly piped AppsFlyer campaign data into Mixpanel. Set up dashboards on the cleaned attribution data to give the performance marketing team reliable channel-level ROI measurement. Also supported daily root cause analysis workflows — diagnosing top-of-funnel drops (CPM, CTR, spend anomalies) from paid channels versus mid-funnel conversion drops tracked through Mixpanel.",
        tools: "AppsFlyer, Mixpanel, CleverTap, SQL (Redshift), Looker",
        results: "Improved attribution accuracy by 30%. The performance marketing team could reliably measure channel ROI at the campaign level, diagnose daily traffic and conversion anomalies by channel, and make budget allocation decisions based on accurate data. Also built out reporting for offline marketing and bank alliance teams, extending the attribution and performance framework beyond digital channels.",
        improvement: "The structural gap that remains is post-ATT signal loss on iOS — the 30% improvement from fixing the event pipeline is real, but probabilistic attribution or incrementality testing would be needed to close the measurement gap that rules-based attribution can't address.",
        status: "live",
    },
    {
        company: "Zepto",
        title: "Building the Analytics Foundation for Zepto's In-App Monetization Business",
        context: "Zepto was setting up its in-app monetization function from scratch — selling banner slots, order screen placements, and other app real estate to consumer brands like Red Bull, P&G, and Reckitt. With 100+ brands actively booking inventory and KAMs managing those relationships, there was no analytical system to track what was available, what was booked, or how campaigns performed. Commercial data lived in spreadsheets; performance data sat in Redshift. Nothing connected the two.",
        data: "Redshift data warehouse for campaign performance metrics (impressions, clicks, conversions, orders). Manual booking spreadsheets tracking which brands booked which app properties at what cost. Output delivered across Looker, Superset, and Google Sheets automations.",
        approach: "Connected Redshift performance data with spreadsheet-based booking records to create a unified view of the monetization business. Built property-level tracking covering inventory fill rates (sold vs. unsold), daily revenue by property and brand, KAM portfolio performance, and campaign ROI by brand. Worked with product managers and data engineers to resolve systemic tracking gaps and ensure performance events were accurately captured in the data warehouse. Delivered visibility across multiple surfaces — Looker and Superset dashboards for internal teams, automated Google Sheets reports for KAMs.",
        tools: "SQL (Redshift), Looker, Superset, Google Sheets, Python",
        results: "Gave Zepto's monetization team a connected view of what inventory was booked, at what price, and how it performed. KAMs shifted from relationship-based selling to data-backed pitches: identifying which properties had the strongest ROI for specific brand categories and using that to drive repeat bookings. Supported campaign planning and performance reviews across 150+ brand campaigns.",
        improvement: "The next step is moving from booking spreadsheets to a purpose-built inventory management layer — with real-time fill rate visibility, unsold inventory alerts, and pricing recommendations based on historical property performance.",
        status: "live",
    },
];
