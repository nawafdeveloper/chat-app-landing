"use client";

import { useLanguage } from '@/language-provider';
import Image from 'next/image';
import Link from 'next/link';

export default function LandingHeader() {
    const { t, language } = useLanguage();

    return (
        <header className='bg-[#fcf5eb]/90 px-4 py-3 backdrop-blur-md sm:px-6 lg:px-10'>
            <div className='mx-auto flex max-w-7xl min-w-0 flex-row items-center justify-between gap-3'>
                <Link href="/" aria-label="YaHla home" className="shrink-0">
                    <Image
                        src={'/yahla-english-brand.svg'}
                        width={506}
                        height={137}
                        alt='YaHla Logo'
                        priority
                        className='h-7 w-auto sm:h-9'
                    />
                </Link>

                <style>{`
  .btn-ink {
    position: relative;
    overflow: hidden;
    isolation: isolate;
  }

  .btn-ink::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: -10%;
    transform: translate(-50%, 0) scale(0);
    width: 120%;
    padding-bottom: 120%;
    border-radius: 50%;
    background-color: #1c1e21;
    transition: transform 0.45s cubic-bezier(0.23, 1, 0.32, 1);
    z-index: 0;
  }

  .btn-ink:hover::after {
    transform: translate(-50%, 0) scale(2.2);
  }

  .btn-ink > * {
    position: relative;
    z-index: 1;
    transition: color 0.25s ease;
  }

  .btn-ink:hover > * {
    color: #ffffff;
  }
`}</style>

                <div className='flex flex-row items-center gap-2 sm:gap-3'>
                    <Link
                        href="https://web.yahla.org"
                        className='btn-ink hidden flex-row items-center gap-2 rounded-full border border-[#1c1e21] bg-white px-5 py-3 text-sm font-semibold text-[#1c1e21] sm:flex'
                    >
                        <span>{t.headerLogin}</span>

                        <svg
                            aria-hidden="true"
                            className={`h-4 w-4 ${language === 'ar' ? 'rotate-180' : ''}`}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M5 12h14" />
                            <path d="m12 5 7 7-7 7" />
                        </svg>
                    </Link>

                    <Link
                        href="#download"
                        className='btn-ink flex shrink-0 flex-row items-center gap-2 rounded-full border border-[#1c1e21] bg-[#25d366] px-4 py-3 text-sm font-semibold text-[#1c1e21] sm:px-5'
                    >
                        <span className='hidden sm:inline'>
                            {t.headerDownloadAndroid}
                        </span>

                        <span className='sm:hidden'>
                            {t.headerGetApp}
                        </span>

                        <svg
                            aria-hidden="true"
                            className="h-4 w-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M12 3v12" />
                            <path d="m7 10 5 5 5-5" />
                            <path d="M5 21h14" />
                        </svg>
                    </Link>
                </div>
            </div>
        </header>
    );
}