import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Bhushan Kamble — Analytics & AI",
    description: "Analytics lead with 8 years across D2C, quick commerce, and edtech — building AI systems that make analytics self-serve.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={`${inter.className} antialiased text-[#f0f0f0]`}>
                <Navbar />
                <main>{children}</main>
            </body>
        </html>
    );
}
