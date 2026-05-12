"use client";

import { useLanguage } from "@/language-provider";
import { useRef } from "react";

export default function LandingSectionFive() {
    const { t, language } = useLanguage();

    const sliderRef = useRef<HTMLDivElement | null>(null);

    const updates = [
        {
            title: t.newsCardOneTitle,
            body: t.newsCardOneBody,
        },
        {
            title: t.newsCardTwoTitle,
            body: t.newsCardTwoBody,
        },
        {
            title: t.newsCardThreeTitle,
            body: t.newsCardThreeBody,
        },
    ];

    const scroll = (direction: "left" | "right") => {
        sliderRef.current?.scrollBy({
            left: direction === "left" ? -520 : 520,
            behavior: "smooth",
        });
    };

    return (
        <section className="w-full overflow-hidden bg-[#E3FFD8] py-12 md:py-16 lg:py-20">
            <div className="mx-auto flex flex-col gap-10 px-5 md:px-6 lg:flex-row lg:items-center lg:gap-16">
                <div className="w-full max-w-md shrink-0 lg:ml-0">
                    <h2 className="text-4xl font-normal leading-[0.95] tracking-[-0.04em] text-[#0B141A] sm:text-5xl md:text-6xl">
                        {t.landingTitle}
                    </h2>

                    <p className="mt-6 text-base leading-7 text-[#0B141A] md:mt-8 md:text-lg">
                        {t.landingDescription}
                    </p>

                    <div className="mt-10 hidden gap-4 lg:mt-52 lg:flex">
                        <button
                            onClick={() => scroll(language === 'ar' ? "right" : "left")}
                            className="flex cursor-pointer size-12 items-center justify-center rounded-full border border-[#0B141A] text-[#0B141A] transition hover:bg-[#0B141A] hover:text-white"
                        >
                            {language === 'ar' ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="24px"
                                    viewBox="0 -960 960 960"
                                    width="24px"
                                    fill="currentColor"
                                >
                                    <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="24px"
                                    viewBox="0 -960 960 960"
                                    width="24px"
                                    fill="currentColor"
                                >
                                    <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
                                </svg>
                            )}
                        </button>

                        <button
                            onClick={() => scroll(language === 'ar' ? "left" : "right")}
                            className="flex cursor-pointer size-12 items-center justify-center rounded-full border border-[#0B141A] text-[#0B141A] transition hover:border-[#0B141A] hover:bg-[#0B141A] hover:text-white"
                        >
                            {language === 'ar' ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="24px"
                                    viewBox="0 -960 960 960"
                                    width="24px"
                                    fill="currentColor"
                                >
                                    <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="24px"
                                    viewBox="0 -960 960 960"
                                    width="24px"
                                    fill="currentColor"
                                >
                                    <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                <div className="relative w-full overflow-visible lg:flex-1 lg:overflow-hidden">
                    <div
                        ref={sliderRef}
                        className="flex snap-x gap-4 overflow-x-auto scroll-smooth pr-5 scrollbar-none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden md:gap-6 lg:pr-6"
                    >
                        {updates.map((item, index) => (
                            <article
                                key={index}
                                className="flex h-107.5 w-[82vw] shrink-0 snap-start flex-col rounded-[28px] bg-white px-7 py-8 text-[#0B141A] sm:w-105 md:h-130 md:w-122.5 md:px-12 md:py-12"
                            >
                                <svg
                                    width="34"
                                    height="34"
                                    viewBox="0 0 34 34"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M20.0538 12.1374C20.2293 11.9491 20.5076 11.9446 20.6871 12.1272C20.859 12.302 20.8838 12.5914 20.7447 12.7995L15.8403 20.1301C15.4575 20.7023 14.7207 20.8112 14.2168 20.3701C13.6812 19.9013 13.6421 19.0201 14.1332 18.4928L20.0538 12.1374Z"
                                        fill="currentColor"
                                    />

                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M0.60061 12.6558C2.91868 3.65135 12.1555 -1.77703 21.2317 0.531222C30.3079 2.83948 35.7864 12.0103 33.4684 21.0147C31.1504 30.0192 21.9135 35.4475 12.8373 33.1393C11.0043 32.6731 9.3182 31.9268 7.81326 30.9587L0.996906 33.9377C0.410784 34.1939 -0.155823 33.6187 0.0391653 32.9656L2.34423 25.2452L2.34923 25.2442C0.208913 21.5679 -0.54134 17.0917 0.60061 12.6558ZM24.1156 8.62954C24.2141 7.63494 23.2651 6.9252 22.461 7.39204L7.30861 16.1888C6.43669 16.6951 6.52124 18.0989 7.44587 18.4687L10.9937 19.8878C11.2956 20.0086 11.4945 20.3267 11.4899 20.6808L11.4602 22.9659C11.4318 25.1545 13.8884 26.1964 15.2066 24.5548L16.6103 22.8066C16.8164 22.5501 17.1436 22.4578 17.4353 22.5741L21.1736 24.064C21.8652 24.3395 22.61 23.8273 22.6899 23.021L24.1156 8.62954Z"
                                        fill="currentColor"
                                    />
                                </svg>

                                <div className="my-auto text-start">
                                    <h3 className="text-2xl font-normal leading-[1.05] tracking-[-0.03em] md:text-3xl">
                                        {item.title}
                                    </h3>

                                    <p className="mt-6 max-w-sm text-sm leading-6 md:mt-8 md:text-base">
                                        {item.body}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>

                    <div className="mt-8 flex gap-4 lg:hidden">
                        <button
                            onClick={() => scroll("left")}
                            className="flex size-11 items-center justify-center rounded-full border border-[#0B141A] text-[#0B141A] transition hover:bg-[#0B141A] hover:text-white"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="22px"
                                viewBox="0 -960 960 960"
                                width="22px"
                                fill="currentColor"
                            >
                                <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
                            </svg>
                        </button>

                        <button
                            onClick={() => scroll("right")}
                            className="flex size-11 items-center justify-center rounded-full border border-[#0B141A]/30 text-[#0B141A]/50 transition hover:border-[#0B141A] hover:bg-[#0B141A] hover:text-white"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="22px"
                                viewBox="0 -960 960 960"
                                width="22px"
                                fill="currentColor"
                            >
                                <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}