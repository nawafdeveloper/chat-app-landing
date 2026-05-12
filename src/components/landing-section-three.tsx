"use client";

import { useLanguage } from "@/language-provider";


export default function LandingSectionThree() {
    const { t } = useLanguage();

    const mediaTypes = [
        {
            label: t.mediaPhotos,
            detail: t.mediaPhotosDetail,
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="32px"
                    viewBox="0 -960 960 960"
                    width="32px"
                    fill="currentColor"
                >
                    <path d="M120-200q-33 0-56.5-23.5T40-280v-400q0-33 23.5-56.5T120-760h400q33 0 56.5 23.5T600-680v400q0 33-23.5 56.5T520-200H120Zm0-80h400v-400H120v400Zm40-80h320L376-500l-76 100-56-74-84 114Zm520 160v-560h80v560h-80Zm160 0v-560h80v560h-80Zm-720-80v-400 400Z" />
                </svg>
            ),
        },
        {
            label: t.mediaVoice,
            detail: t.mediaVoiceDetail,
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="32px"
                    viewBox="0 -960 960 960"
                    width="32px"
                    fill="currentColor"
                >
                    <path d="M395-435q-35-35-35-85v-240q0-50 35-85t85-35q50 0 85 35t35 85v240q0 50-35 85t-85 35q-50 0-85-35Zm85-205Zm-40 520v-123q-104-14-172-93t-68-184h80q0 83 58.5 141.5T480-320q83 0 141.5-58.5T680-520h80q0 105-68 184t-172 93v123h-80Zm68.5-371.5Q520-503 520-520v-240q0-17-11.5-28.5T480-800q-17 0-28.5 11.5T440-760v240q0 17 11.5 28.5T480-480q17 0 28.5-11.5Z" />
                </svg>
            ),
        },
        {
            label: t.mediaFiles,
            detail: t.mediaFilesDetail,
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="32px"
                    viewBox="0 -960 960 960"
                    width="32px"
                    fill="currentColor"
                >
                    <path d="M760-200H320q-33 0-56.5-23.5T240-280v-560q0-33 23.5-56.5T320-920h280l240 240v400q0 33-23.5 56.5T760-200ZM560-640v-200H320v560h440v-360H560ZM160-40q-33 0-56.5-23.5T80-120v-560h80v560h440v80H160Zm160-800v200-200 560-560Z" />
                </svg>
            ),
        },
        {
            label: t.mediaVideos,
            detail: t.mediaVideosDetail,
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="32px"
                    viewBox="0 -960 960 960"
                    width="32px"
                    fill="currentColor"
                >
                    <path d="M170-228q-38-44-61-98T80-440h82q6 44 22 83.5t42 72.5l-56 56ZM80-520q8-60 30-114t60-98l56 56q-26 33-42 72.5T162-520H80ZM438-82q-60-6-113.5-29T226-170l56-58q35 26 73.5 43t82.5 23v80ZM284-732l-58-58q45-36 98.5-59T440-878v80q-45 6-84 23t-72 43Zm96 432v-360l280 180-280 180ZM520-82v-80q121-17 200.5-107T800-480q0-121-79.5-211T520-798v-80q154 17 257 130t103 268q0 155-103 268T520-82Z" />
                </svg>
            ),
        },
    ];

    return (
        <div className="flex w-full min-w-0 flex-col overflow-x-hidden">
            <section
                id="media"
                className="bg-[#111b21] px-4 py-14 text-white sm:px-6 sm:py-20 lg:px-10"
            >
                <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.88fr_1fr]">
                    <div className="grid gap-3 sm:grid-cols-2">
                        {mediaTypes.map((item) => (
                            <div key={item.label} className="p-5">
                                <span className="flex flex-row items-center gap-x-4">
                                    <div className="text-[#25d366]">
                                        {item.icon}
                                    </div>

                                    <p className="text-2xl font-normal text-[#25d366]">
                                        {item.label}
                                    </p>
                                </span>

                                <p className="mt-3 text-sm leading-6 text-white/75">
                                    {item.detail}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="space-y-6 lg:pl-10">
                        <p className="text-sm font-semibold uppercase text-[#25d366]">
                            {t.sectionThreeBadge}
                        </p>

                        <h2 className="max-w-3xl text-4xl font-normal leading-tight sm:text-6xl">
                            {t.sectionThreeTitle}
                        </h2>

                        <p className="max-w-xl text-lg leading-8 text-white/75">
                            {t.sectionThreeDescription}
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}