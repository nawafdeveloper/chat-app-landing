"use client";

function DownloadIcon() {
    return (
        <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3v12" />
            <path d="m7 10 5 5 5-5" />
            <path d="M5 21h14" />
        </svg>
    );
}

function ArrowIcon() {
    return (
        <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
        </svg>
    );
}

export default function LandingSectionOne() {
    return (
        <div className="flex w-full min-w-0 flex-col overflow-x-hidden">
            <section className="px-4 py-4 sm:px-6 lg:px-10">
                <div
                    className="relative isolate min-h-160 w-full overflow-hidden rounded-4xl bg-cover bg-bottom bg-no-repeat sm:min-h-175"
                    style={{ backgroundImage: "url('/hero-banner-yahla-en.png')" }}
                >
                    <div className="absolute inset-0" />
                    <div className="relative z-10 mx-auto flex min-h-160 w-full max-w-7xl flex-col justify-center px-6 py-16 sm:min-h-175 sm:px-10 lg:px-14">
                        <div className="w-full max-w-xl space-y-7">
                            <p className="text-sm font-semibold uppercase text-[#25d366]">YaHla Messenger</p>
                            <div className="space-y-5">
                                <h1 className="text-5xl font-normal leading-[1.02] text-white sm:text-7xl lg:text-8xl">
                                    Chat simply,
                                    <br />
                                    share freely
                                </h1>
                                <p className="max-w-md text-lg leading-8 text-white sm:text-xl">
                                    Send texts, photos, voice notes, files, and videos in a simple chat made for everyday moments.
                                </p>
                            </div>
                            <div className="flex w-full flex-col gap-3 sm:flex-row">
                                <a
                                    href="#download"
                                    className="inline-flex items-center justify-center gap-2 rounded-full border border-[#1c1e21] bg-[#25d366] px-6 py-3.5 text-sm font-semibold text-[#1c1e21] transition hover:bg-[#20bd5a]"
                                >
                                    <span>Download Android</span>
                                    <DownloadIcon />
                                </a>
                                <a
                                    href="#messages"
                                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
                                >
                                    <span>Start messaging</span>
                                    <ArrowIcon />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
