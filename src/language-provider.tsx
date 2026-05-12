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

type LanguageContextType = {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (typeof translations)["en"];
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({
    children,
}: {
    children: ReactNode;
}) {
    const [language, setLanguage] = useState<Language>("ar");

    useEffect(() => {
        const saved = localStorage.getItem("language");

        if (saved === "en" || saved === "ar") {
            setLanguage(saved);
        }
    }, []);

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