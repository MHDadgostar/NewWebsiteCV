import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import clsx from "clsx";
import { FaInstagram, FaLinkedin, FaTelegram, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt, FaHeart } from "react-icons/fa";

export default function AccessMe() {
    const { t, dir } = useContext(LanguageContext);
    const isRtl = dir === 'rtl';

    const socialLinks = [
        { icon: FaInstagram, href: "https://www.instagram.com/mh.fullstack.dev", label: "Instagram", color: "hover:bg-pink-500" },
        { icon: FaLinkedin, href: "https://www.linkedin.com/in/mh-dadgostar/", label: "LinkedIn", color: "hover:bg-blue-600" },
        { icon: FaTelegram, href: "https://t.me/Terminal2002", label: "Telegram", color: "hover:bg-sky-500" },
        { icon: FaGithub, href: "https://github.com/MHDadgostar", label: "GitHub", color: "hover:bg-gray-700" },
        { icon: FaEnvelope, href: "mailto:mohammadhoseindadgostr@gmail.com", label: "Email", color: "hover:bg-red-500" },
    ];

    const contactInfo = [
        { icon: FaPhone, value: t.accessMe?.phone || "0936-660-6536", href: `tel:${t.accessMe?.phone}` },
        { icon: FaEnvelope, value: t.accessMe?.email || "mohammadhoseindadgostr@gmail.com", href: `mailto:${t.accessMe?.email}` },
        { icon: FaMapMarkerAlt, value: t.accessMe?.location || "Tehran, Iran", href: null },
    ];

    return (
        <footer id="contact" className="relative overflow-hidden" dir={dir}>
            {/* Main Footer */}
            <div className="bg-navy-900 pt-24 pb-12">
                {/* Background Decorations */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-gold-400/10 rounded-full blur-3xl" />
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">

                    {/* CTA Section */}
                    <div className="text-center mb-20">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                            {t.accessMe?.ctaTitle || "Let's Work Together"}
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
                            {t.accessMe?.ctaDesc || "Have a project in mind? Let's discuss how we can bring your ideas to life."}
                        </p>
                        <a
                            href="mailto:mohammadhoseindadgostr@gmail.com"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gold-400 to-gold-500 text-navy-900 font-semibold rounded-xl hover:shadow-glow transition-all duration-300 hover:scale-105"
                        >
                            <FaEnvelope />
                            <span>{t.accessMe?.ctaBtn || "Get In Touch"}</span>
                        </a>
                    </div>

                    {/* Footer Grid */}
                    <div className="grid md:grid-cols-3 gap-12 pb-12 border-b border-white/10">

                        {/* Brand */}
                        <div className={clsx(isRtl ? "text-right" : "text-left")}>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-400 to-gold-500 flex items-center justify-center font-bold text-navy-900 text-lg">
                                    MH
                                </div>
                                <div>
                                    <p className="font-semibold text-white">Mohammad Hosein</p>
                                    <p className="text-sm text-gray-400">Full-Stack Developer</p>
                                </div>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {t.accessMe?.brand || "Building modern web applications with passion and precision."}
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div className={clsx(isRtl ? "text-right" : "text-left")}>
                            <h4 className="text-white font-semibold mb-6">{t.accessMe?.quickLinks || "Quick Links"}</h4>
                            <nav className="space-y-3">
                                {['About', 'Skills', 'Experience', 'Contact'].map((link) => (
                                    <a
                                        key={link}
                                        href={`#${link.toLowerCase()}`}
                                        className="block text-gray-400 hover:text-gold-400 transition-colors duration-300 text-sm"
                                    >
                                        {link}
                                    </a>
                                ))}
                            </nav>
                        </div>

                        {/* Contact Info */}
                        <div className={clsx(isRtl ? "text-right" : "text-left")}>
                            <h4 className="text-white font-semibold mb-6">{t.accessMe?.contact || "Contact Info"}</h4>
                            <div className="space-y-4">
                                {contactInfo.map((item, i) => (
                                    <div key={i} className={clsx("flex items-center gap-3", isRtl && "flex-row-reverse")}>
                                        <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                                            <item.icon className="text-gold-400" />
                                        </div>
                                        {item.href ? (
                                            <a href={item.href} className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                                                {item.value}
                                            </a>
                                        ) : (
                                            <span className="text-gray-400 text-sm">{item.value}</span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8">
                        <div className="flex items-center gap-3">
                            {socialLinks.map(({ icon: Icon, href, label, color }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={clsx(
                                        "w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300",
                                        color
                                    )}
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>

                        <p className="text-gray-500 text-sm text-center">
                            © 2024 Mohammad Hosein. {t.accessMe?.rights || "All Rights Reserved."}
                        </p>
                    </div>
                </div>
            </div>

            {/* Credit Line */}
            <div className="bg-navy-950 py-4">
                <p className="text-center text-gray-600 text-xs flex items-center justify-center gap-2">
                    Made with <FaHeart className="text-red-500" /> | UI Design by <span className="text-gold-400">Zi Zi</span>
                </p>
            </div>
        </footer>
    );
}