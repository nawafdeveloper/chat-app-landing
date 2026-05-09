"use client";

import Image from 'next/image';
import Link from 'next/link';

export default function LandingHeader() {
    return (
        <div className='flex flex-row items-center justify-between px-8 py-4'>
            <Link href="/">
                <Image
                    src={'./yahla-english-brand.svg'}
                    width={200}
                    height={200}
                    alt='YaHla Logo'
                    className='w-auto h-8'
                />
            </Link>
            <div className='flex flex-row items-center gap-x-4'>
                <button className='flex flex-row font-semibold items-center gap-x-2 pr-4 cursor-pointer pl-6 py-3 rounded-full border border-neutral-900 text-neutral-900 bg-white hover:bg-neutral-50 duration-200'>
                    <p>Login</p>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
                        <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
                    </svg>
                </button>
                <button className='flex flex-row font-semibold items-center gap-x-2 pr-4 cursor-pointer pl-6 py-3 rounded-full border border-neutral-900 text-neutral-900 bg-[#25d366] hover:bg-[#21c05b] duration-200'>
                    <p>Download Android</p>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
                        <path d="M440-800v487L216-537l-56 57 320 320 320-320-56-57-224 224v-487h-80Z" />
                    </svg>
                </button>
            </div>
        </div>
    )
}