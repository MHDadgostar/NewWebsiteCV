import { createContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { translations } from '../data/translations';

export const LanguageContext = createContext();

// The language comes from the URL (/ = fa, /en = en) so both versions are crawlable.
export function LanguageProvider({ children }) {
    const { locale } = useRouter();
    const lang = translations[locale] ? locale : 'fa';
    const dir = lang === 'fa' ? 'rtl' : 'ltr';

    useEffect(() => {
        document.documentElement.lang = lang;
        document.documentElement.dir = dir;
    }, [lang, dir]);

    return (
        <LanguageContext.Provider value={{ lang, dir, otherLang: lang === 'fa' ? 'en' : 'fa', t: translations[lang] }}>
            {children}
        </LanguageContext.Provider>
    );
}
