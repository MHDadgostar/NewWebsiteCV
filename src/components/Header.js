import React, { useContext, useState, useEffect } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { FaInstagram, FaLinkedin, FaTelegramPlane, FaGithub, FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import clsx from 'clsx';

export default function Header() {
    const { toggleLang, t, lang, dir } = useContext(LanguageContext);
    const [scrolled, setScrolled] = useState(false);
    const isRtl = dir === 'rtl';

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const socialLinks = [
        { href: "https://www.instagram.com/mh.fullstack.dev", icon: FaInstagram, label: "Instagram" },
        { href: "https://www.linkedin.com/in/mh-dadgostar", icon: FaLinkedin, label: "LinkedIn" },
        { href: "https://t.me/Terminal2002", icon: FaTelegramPlane, label: "Telegram" },
        { href: "https://github.com/MHDadgostar", icon: FaGithub, label: "GitHub" },
        { href: "mailto:mohammadhoseindadgostr@gmail.com", icon: MdEmail, label: "Email" },
        { href: "tel:09366606536", icon: FaPhoneAlt, label: "Phone" },
    ];

    return (
        <header
            className={clsx(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                scrolled
                    ? "bg-white/90 backdrop-blur-xl shadow-elegant py-3"
                    : "bg-transparent py-5"
            )}
            dir={dir}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
                <div className="flex items-center justify-between">

                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <div className={clsx(
                            "w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg transition-all duration-300",
                            scrolled ? "bg-navy-900 text-white" : "bg-white text-navy-900 shadow-md"
                        )}>
                            MH
                        </div>
                        <div className={clsx(
                            "hidden sm:block transition-colors duration-300",
                            scrolled ? "text-navy-900" : "text-white"
                        )}>
                            <p className="font-semibold text-sm tracking-wide">Mohammad Hosein</p>
                            <p className="text-xs opacity-70">Full-Stack Developer</p>
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {['about', 'skills', 'experience', 'contact'].map((item) => (
                            <a
                                key={item}
                                href={`#${item}`}
                                className={clsx(
                                    "relative text-sm font-medium transition-colors duration-300 group",
                                    scrolled ? "text-gray-600 hover:text-navy-900" : "text-white/80 hover:text-white"
                                )}
                            >
                                {t.nav?.[item] || item}
                                <span className={clsx(
                                    "absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full",
                                    scrolled ? "bg-gold-500" : "bg-white"
                                )} />
                            </a>
                        ))}
                    </nav>

                    {/* Actions */}
                    <div className="flex items-center gap-4">

                        {/* Social Icons */}
                        <div className="hidden lg:flex items-center gap-2">
                            {socialLinks.slice(0, 4).map(({ href, icon: Icon, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={clsx(
                                        "w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110",
                                        scrolled
                                            ? "text-gray-500 hover:text-navy-900 hover:bg-gray-100"
                                            : "text-white/70 hover:text-white hover:bg-white/10"
                                    )}
                                >
                                    <Icon size={16} />
                                </a>
                            ))}
                        </div>

                        {/* Divider */}
                        <div className={clsx(
                            "hidden lg:block w-px h-6 transition-colors duration-300",
                            scrolled ? "bg-gray-200" : "bg-white/30"
                        )} />

                        {/* Language Toggle */}
                        <button
                            onClick={toggleLang}
                            className={clsx(
                                "relative px-4 py-2 rounded-xl text-sm font-medium overflow-hidden transition-all duration-300 group",
                                scrolled
                                    ? "bg-navy-900 text-white hover:bg-navy-800"
                                    : "bg-white text-navy-900 hover:bg-gray-100"
                            )}
                        >
                            <span className="relative z-10">{lang === 'fa' ? 'EN' : 'فارسی'}</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-gold-400 to-gold-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
                                {lang === 'fa' ? 'EN' : 'فارسی'}
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}