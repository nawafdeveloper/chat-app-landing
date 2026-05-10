"use client";

import Image from "next/image";

export default function LandingSectionTwo() {
    return (
        <div className="flex w-full min-w-0 flex-col overflow-x-hidden">
            <section id="messages" className="px-4 py-14 sm:px-6 sm:py-20 lg:px-10">
                <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.86fr]">
                    <div className="space-y-6">
                        <p className="text-sm font-semibold uppercase text-[#25d366]">Messaging first</p>
                        <h2 className="max-w-4xl text-4xl font-normal leading-tight text-[#1c1e21] sm:text-6xl">
                            A calm place for the messages that matter today.
                        </h2>
                        <p className="max-w-2xl text-lg leading-8 text-[#3b3129]">
                            YaHla keeps you focused: start a chat, type what you need, and send the media your conversation calls for.
                        </p>
                    </div>

                    <Image
                        src={'/hero-2-yahla.png'}
                        alt="Hero 2"
                        width={500}
                        height={500}
                        className="w-100 h-auto ml-auto"
                    />
                </div>
            </section>
        </div>
    )
}