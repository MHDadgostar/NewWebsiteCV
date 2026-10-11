import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { FaEnvelope, FaMapMarkerAlt, FaTelegramPlane } from "react-icons/fa";
import { EMAIL, SOCIALS } from "../data/site";
import { socialLinks, navItems } from "./Header";

export default function AccessMe() {
    const { t, lang } = useContext(LanguageContext);
    const year = new Intl.NumberFormat(lang === 'fa' ? 'fa-IR' : 'en-US', { useGrouping: false }).format(new Date().getFullYear());
    const c = t.contact;

    return (
        <footer id="contact" aria-labelledby="contact-title" className="relative overflow-hidden bg-navy-900 pt-24 pb-10 scroll-mt-16">
            {/* Background Decorations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gold-400/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">

                {/* CTA Section */}
                <div className="text-center mb-20">
                    <h2 id="contact-title" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                        {c.title}
                    </h2>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                        {c.desc}
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a
                            href={`mailto:${EMAIL}`}
                            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gold-400 to-gold-500 text-navy-900 font-semibold rounded-xl hover:shadow-glow transition-all duration-300 hover:scale-105"
                        >
                            <FaEnvelope aria-hidden="true" />
                            <span>{c.emailBtn}</span>
                        </a>
                        <a
                            href={SOCIALS.telegram}
                            target="_blank"
                            rel="me noopener noreferrer"
                            className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white/20 text-white font-medium rounded-xl hover:bg-white/10 hover:border-white/40 transition-all duration-300"
                        >
                            <FaTelegramPlane aria-hidden="true" />
                            <span>{c.telegramBtn}</span>
                        </a>
                    </div>
                </div>

                {/* Footer Grid */}
                <div className="grid md:grid-cols-3 gap-12 pb-12 border-b border-white/10 text-start">

                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <span dir="ltr" aria-hidden="true" className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-400 to-gold-500 flex items-center justify-center font-bold text-navy-900 text-lg">
                                MH
                            </span>
                            <div>
                                <p className="font-semibold text-white">{t.name}</p>
                                <p className="text-sm text-gray-400">{t.role}</p>
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">{c.brand}</p>
                    </div>

                    {/* Quick Links */}
                    <nav aria-labelledby="footer-links-title">
                        <h3 id="footer-links-title" className="text-white font-semibold mb-6">{c.quickLinks}</h3>
                        <ul className="space-y-3">
                            {navItems.map((item) => (
                                <li key={item}>
                                    <a href={`#${item}`} className="text-gray-400 hover:text-gold-400 transition-colors duration-300 text-sm">
                                        {t.nav[item]}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">{c.contactInfo}</h3>
                        <address className="space-y-4 not-italic">
                            <div className="flex items-center gap-3">
                                <span className="w-10 h-10 shrink-0 rounded-lg bg-white/5 flex items-center justify-center" aria-hidden="true">
                                    <FaEnvelope className="text-gold-400" />
                                </span>
                                <a href={`mailto:${EMAIL}`} dir="ltr" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm break-all">
                                    {EMAIL}
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="w-10 h-10 shrink-0 rounded-lg bg-white/5 flex items-center justify-center" aria-hidden="true">
                                    <FaMapMarkerAlt className="text-gold-400" />
                                </span>
                                <span className="text-gray-400 text-sm">{c.location}</span>
                            </div>
                        </address>
                    </div>
                </div>

                {/* Social Links */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8">
                    <ul aria-label={c.socialLabel} className="flex items-center gap-3">
                        {socialLinks.map(({ key, href, icon: Icon }) => (
                            <li key={key}>
                                <a
                                    href={href}
                                    target="_blank"
                                    rel="me noopener noreferrer"
                                    aria-label={t.social[key]}
                                    title={t.social[key]}
                                    className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 hover:text-navy-900 hover:bg-gold-400 transition-all duration-300"
                                >
                                    <Icon size={18} aria-hidden="true" />
                                </a>
                            </li>
                        ))}
                    </ul>

                    <p className="text-gray-400 text-sm text-center">
                        © {year} {t.name}. {c.rights}
                    </p>
                </div>
            </div>
        </footer>
    );
}
