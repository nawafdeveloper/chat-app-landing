"use client";

import { useLanguage } from "@/language-provider";

export default function LandingFooter() {
    const { language, setLanguage, t } = useLanguage();

    return (
        <div className="flex flex-col gap-5 px-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-12 bg-[#111b21] text-white">
            <div className="relative inline-flex w-fit items-center">
                <select
                    value={language}
                    onChange={(e) =>
                        setLanguage(e.target.value as "en" | "ar")
                    }
                    className="appearance-none rounded-full border-2 border-white bg-transparent py-3 pl-5 pr-14 text-base font-semibold text-white outline-none"
                >
                    <option value="en" className="text-black">
                        English
                    </option>

                    <option value="ar" className="text-black">
                        العربية
                    </option>
                </select>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="28px"
                    viewBox="0 -960 960 960"
                    width="28px"
                    fill="currentColor"
                    className="pointer-events-none absolute right-4"
                >
                    <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
                </svg>
            </div>

            <p className="text-sm sm:text-base">
                {t.footerText}
            </p>
        </div>
    );
}