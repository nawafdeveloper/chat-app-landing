"use client";

export default function LandingSectionOne() {
    return (
        <div className="px-8 py-4">
            <div
                className="relative bg-cover bg-center bg-no-repeat min-h-165 rounded-4xl"
                style={{ backgroundImage: "url('/hero-banner-yahla-en.png')" }}
            >
                <div className="relative z-10 flex flex-col items-start justify-center min-h-165 max-w-7xl mx-auto space-y-8">
                    <div className="flex flex-col items-start justify-start space-y-3">
                        <h1 className="text-white text-7xl font-normal">Your Messages <br />are private</h1>
                        <p className="font-normal text-lg max-w-96 text-white">Your words, your business. No calls, no leaks, no drama — just private texts.</p>
                    </div>
                    <button className='flex flex-row font-semibold items-center gap-x-2 pr-4 cursor-pointer pl-6 py-3 rounded-full text-neutral-900 bg-[#25d366] hover:bg-[#21c05b] duration-200'>
                        <p>Download Android</p>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
                            <path d="M440-800v487L216-537l-56 57 320 320 320-320-56-57-224 224v-487h-80Z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}