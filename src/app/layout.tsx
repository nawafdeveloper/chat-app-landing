import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_Arabic } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/language-provider";

const notoSansArabic = Noto_Sans_Arabic({
	weight: ["300", "400", "500", "700"],
	subsets: ["arabic"],
	variable: "--font-noto-sans-arabic",
});

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "YaHla | Simple Chat and Media Messaging",
	description: "YaHla is a simple messaging app for texts, photos, voice notes, files, and videos.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="/favicon.svg" type="image/svg+xml"></link>
			</head>
			<body className={`${notoSansArabic.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}>
				<LanguageProvider>
					{children}
				</LanguageProvider>
			</body>
		</html>
	);
}
