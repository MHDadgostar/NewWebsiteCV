import Image from 'next/image';
import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { FaDownload, FaArrowDown } from 'react-icons/fa';
import { RESUME_FILES, PROFILE_IMAGE } from '../data/site';

export default function TopBody({ resumes = {} }) {
    const { t, lang, otherLang } = useContext(LanguageContext);
    const h = t.hero;

    // Current language first, so the visitor gets the matching résumé by default.
    const resumeLinks = [lang, otherLang]
        .filter((l) => resumes[l])
        .map((l) => ({ lang: l, href: RESUME_FILES[l], label: l === 'fa' ? h.resumeFa : h.resumeEn }));

    return (
        <section className="relative min-h-screen overflow-hidden" id="home" aria-labelledby="hero-title">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-slate-800" />

            {/* Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
                <div className="absolute top-20 right-10 w-72 h-72 bg-gold-400/10 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 min-h-screen flex items-center">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full pt-36 md:pt-28 pb-24">

                    {/* Text Content */}
                    <div className="space-y-8 text-start">

                        {/* Badge */}
                        <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 animate-fade-in">
                            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" aria-hidden="true" />
                            <span className="text-sm text-gray-300">{h.available}</span>
                        </p>

                        {/* Heading */}
                        <div className="space-y-4 animate-slide-up">
                            <h1 id="hero-title" className="text-4xl sm:text-5xl xl:text-6xl font-bold text-white leading-tight">
                                <span className="block text-gold-400 font-medium text-base sm:text-lg mb-3">{h.greeting}</span>
                                <span className="block xl:whitespace-nowrap">{h.name1}</span>
                                <span className="block xl:whitespace-nowrap bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 bg-clip-text text-transparent pb-2">
                                    {h.name2}
                                </span>
                                {h.suffix && <span className="sr-only"> {h.suffix}</span>}
                            </h1>
                            <p className="text-xl sm:text-2xl text-gray-300 font-light">
                                {t.role}
                            </p>
                        </div>

                        {/* Description */}
                        <p className="text-gray-400 text-lg leading-relaxed max-w-xl animate-slide-up" style={{ animationDelay: '0.2s' }}>
                            {h.description}
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                            <a
                                href="#projects"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gold-400 to-gold-500 text-navy-900 font-semibold rounded-xl transition-all duration-300 hover:shadow-glow hover:scale-105"
                            >
                                {h.viewProjects}
                            </a>
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white/20 text-white font-medium rounded-xl hover:bg-white/10 transition-all duration-300 hover:border-white/40"
                            >
                                {h.contactMe}
                            </a>
                        </div>

                        {/* Résumé downloads */}
                        {resumeLinks.length > 0 && (
                            <ul className="flex flex-wrap gap-x-6 gap-y-2 animate-slide-up" style={{ animationDelay: '0.5s' }}>
                                {resumeLinks.map((r) => (
                                    <li key={r.lang}>
                                        <a
                                            href={r.href}
                                            download
                                            hrefLang={r.lang}
                                            className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-gold-400 underline underline-offset-4 decoration-white/20 transition-colors duration-300"
                                        >
                                            <FaDownload aria-hidden="true" />
                                            <span>{r.label}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        )}

                        {/* Stats */}
                        <dl className="flex gap-8 sm:gap-12 pt-8 border-t border-white/10 animate-slide-up" style={{ animationDelay: '0.6s' }}>
                            {h.stats.map((stat) => (
                                <div key={stat.label} className="flex flex-col-reverse">
                                    <dt className="text-sm text-gray-400 mt-1">{stat.label}</dt>
                                    <dd className="text-3xl sm:text-4xl font-bold text-white">{stat.value}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>

                    {/* Profile Image */}
                    <div className="relative flex justify-center lg:justify-end animate-fade-in">
                        <div className="relative">
                            {/* Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-gold-400/30 to-blue-500/30 rounded-full blur-3xl scale-110" aria-hidden="true" />

                            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                                <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                                    <Image
                                        src={PROFILE_IMAGE}
                                        alt={h.photoAlt}
                                        fill
                                        sizes="(min-width: 1024px) 384px, 320px"
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <a href="#about" aria-label={t.nav.about} className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white animate-bounce">
                <FaArrowDown aria-hidden="true" />
            </a>
        </section>
    );
}
