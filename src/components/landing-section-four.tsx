"use client";

import { useLanguage } from "@/language-provider";


export default function LandingSectionFour() {
    const { t } = useLanguage();

    return (
        <div className="flex w-full min-w-0 flex-col overflow-x-hidden">
            <section
                id="privacy-encryption"
                className="px-4 py-14 sm:px-6 sm:py-20 lg:px-10"
            >
                <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.86fr]">
                    <div className="space-y-6">
                        <p className="text-sm font-semibold uppercase text-[#25d366]">
                            {t.sectionFourBadge}
                        </p>

                        <h2 className="max-w-4xl text-4xl font-normal leading-tight text-[#1c1e21] sm:text-6xl">
                            {t.sectionFourTitle}
                        </h2>

                        <p className="max-w-2xl text-lg leading-8 text-[#3b3129]">
                            {t.sectionFourDescription}
                        </p>
                    </div>

                    <video
                        src="Frame 239.webm"
                        className="h-auto w-full"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                    />
                </div>
            </section>
        </div>
    );
}