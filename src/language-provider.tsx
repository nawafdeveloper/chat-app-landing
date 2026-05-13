"use client";

import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useMemo,
    useState,
} from "react";

import { Language, translations } from "./translations";

// Fix: Make t a union type of all possible translations
type LanguageContextType = {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (typeof translations)[Language]; // This allows either 'en' or 'ar' translations
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({
    children,
}: {
    children: ReactNode;
}) {
    const [language, setLanguage] = useState<Language>(() => {
        if (typeof window === "undefined") {
            return "ar";
        }

        const saved = localStorage.getItem("language");

        if (saved === "en" || saved === "ar") {
            return saved;
        }

        return "ar";
    });

    useEffect(() => {
        localStorage.setItem("language", language);

        document.documentElement.lang = language;
        document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    }, [language]);

    const value = useMemo(
        () => ({
            language,
            setLanguage,
            t: translations[language],
        }),
        [language]
    );

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);

    if (!context) {
        throw new Error("useLanguage must be used inside LanguageProvider");
    }

    return context;
}
