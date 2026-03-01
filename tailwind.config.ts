import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                accent: {
                    DEFAULT: "#0f172a", // slate-900
                    light: "#64748b",   // slate-500
                    dark: "#1e293b",    // slate-800
                },
            },
            fontFamily: {
                inter: ["var(--font-inter)"],
            },
        },
    },
    plugins: [],
};
export default config;
