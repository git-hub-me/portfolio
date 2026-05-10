"use client";

import { useState } from "react";

const localLogos: Record<string, string> = {
    "mosaicwellness.in":   "/logos/mw.png",
    "zeptonow.com":        "/logos/zp.png",
    "whitehatjr.com":      "/logos/wh.png",
    "virtusnutrition.com": "/logos/vn.png",
};

interface Props {
    domain: string;
    name: string;
    initial: string;
    color: string;
    size?: number;
}

export default function CompanyLogo({ domain, name, initial, color, size = 28 }: Props) {
    const [failed, setFailed] = useState(false);

    const dim = `${size}px`;
    const localSrc = localLogos[domain];

    if (!localSrc || failed) {
        return (
            <div
                className="rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0"
                style={{ width: dim, height: dim, background: color, fontSize: size * 0.45 }}
            >
                {initial}
            </div>
        );
    }

    return (
        <img
            src={localSrc}
            alt={name}
            className="rounded-lg object-contain bg-white flex-shrink-0"
            style={{ width: dim, height: dim, padding: size * 0.08 }}
            onError={() => setFailed(true)}
        />
    );
}
