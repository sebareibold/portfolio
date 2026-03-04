import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

export type Language = 'es' | 'en';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    isLanguageSelected: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguageState] = useState<Language>('es');
    const [isLanguageSelected, setIsLanguageSelected] = useState(false);

    useEffect(() => {
        const savedLang = localStorage.getItem('portfolio-language') as Language | null;
        if (savedLang) {
            setLanguageState(savedLang);
            setIsLanguageSelected(true);
        }
    }, []);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        setIsLanguageSelected(true);
        localStorage.setItem('portfolio-language', lang);
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, isLanguageSelected }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
