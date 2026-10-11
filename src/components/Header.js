import React, { useContext, useState, useEffect } from 'react';
import Link from 'next/link';
import { LanguageContext } from '../context/LanguageContext';
import { FaInstagram, FaLinkedin, FaTelegramPlane, FaGithub } from 'react-icons/fa';
import clsx from 'clsx';
import { SOCIALS } from '../data/site';

export const socialLinks = [
    { key: 'github', href: SOCIALS.github, icon: FaGithub },
    { key: 'linkedin', href: SOCIALS.linkedin, icon: FaLinkedin },
    { key: 'telegram', href: SOCIALS.telegram, icon: FaTelegramPlane },
    { key: 'instagram', href: SOCIALS.instagram, icon: FaInstagram },
];

export const navItems = ['about', 'projects', 'skills', 'experience', 'contact'];

export default function Header() {
    const { t, lang, otherLang } = useContext(LanguageContext);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={clsx(
                "fixed top-0 inset-x-0 z-50 transition-all duration-500",
                scrolled
                    ? "bg-white/90 backdrop-blur-xl shadow-elegant py-3"
                    : "bg-transparent py-5"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
                <div className="flex items-center justify-between gap-4">

                    {/* Logo */}
                    <a href="#home" className="flex items-center gap-3">
                        <span
                            aria-hidden="true"
                            dir="ltr"
                            className={clsx(
                                "w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg transition-all duration-300",
                                scrolled ? "bg-navy-900 text-white" : "bg-white text-navy-900 shadow-md"
                            )}
                        >
                            MH
                        </span>
                        <span className={clsx(
                            "hidden sm:block transition-colors duration-300",
                            scrolled ? "text-navy-900" : "text-white"
                        )}>
                            <span className="block font-semibold text-sm">{t.shortName}</span>
                            <span className="block text-xs opacity-70">{t.role}</span>
                        </span>
                    </a>

                    {/* Navigation */}
                    <nav aria-label={t.nav.label} className="hidden md:flex items-center gap-6 lg:gap-8">
                        {navItems.map((item) => (
                            <a
                                key={item}
                                href={`#${item}`}
                                className={clsx(
                                    "relative text-sm font-medium transition-colors duration-300 group",
                                    scrolled ? "text-gray-600 hover:text-navy-900" : "text-white/80 hover:text-white"
                                )}
                            >
                                {t.nav[item]}
                                <span className={clsx(
                                    "absolute -bottom-1 start-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full",
                                    scrolled ? "bg-gold-500" : "bg-white"
                                )} />
                            </a>
                        ))}
                    </nav>

                    {/* Actions */}
                    <div className="flex items-center gap-4">

                        {/* Social Icons */}
                        <ul className="hidden xl:flex items-center gap-2">
                            {socialLinks.map(({ key, href, icon: Icon }) => (
                                <li key={key}>
                                    <a
                                        href={href}
                                        target="_blank"
                                        rel="me noopener noreferrer"
                                        aria-label={t.social[key]}
                                        title={t.social[key]}
                                        className={clsx(
                                            "w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110",
                                            scrolled
                                                ? "text-gray-500 hover:text-navy-900 hover:bg-gray-100"
                                                : "text-white/70 hover:text-white hover:bg-white/10"
                                        )}
                                    >
                                        <Icon size={16} aria-hidden="true" />
                                    </a>
                                </li>
                            ))}
                        </ul>

                        {/* Divider */}
                        <div aria-hidden="true" className={clsx(
                            "hidden xl:block w-px h-6 transition-colors duration-300",
                            scrolled ? "bg-gray-200" : "bg-white/30"
                        )} />

                        {/* Language Switch */}
                        <Link
                            href="/"
                            locale={otherLang}
                            hrefLang={otherLang}
                            lang={otherLang}
                            aria-label={t.langSwitch.aria}
                            className={clsx(
                                "px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300",
                                scrolled
                                    ? "bg-navy-900 text-white hover:bg-gold-500 hover:text-navy-900"
                                    : "bg-white text-navy-900 hover:bg-gold-400"
                            )}
                        >
                            {t.langSwitch.label}
                        </Link>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <nav aria-label={t.nav.label} className="md:hidden flex items-center justify-between gap-3 mt-3 overflow-x-auto">
                    {navItems.map((item) => (
                        <a
                            key={item}
                            href={`#${item}`}
                            className={clsx(
                                "text-xs font-medium whitespace-nowrap py-1 transition-colors duration-300",
                                scrolled ? "text-gray-600" : "text-white/80"
                            )}
                        >
                            {t.nav[item]}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
}
