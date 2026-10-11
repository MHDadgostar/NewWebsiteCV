// Single source of truth for identity, contact and SEO data.
// Set NEXT_PUBLIC_SITE_URL in the deploy environment if the domain changes.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://mhdadgostar.ir').replace(/\/$/, '');

export const LOCALES = ['fa', 'en'];
export const DEFAULT_LOCALE = 'fa';

export const localeUrl = (locale) => (locale === DEFAULT_LOCALE ? `${SITE_URL}/` : `${SITE_URL}/${locale}`);

export const EMAIL = 'mohammadhoseindadgostr@gmail.com';

export const SOCIALS = {
    github: 'https://github.com/MHDadgostar',
    linkedin: 'https://www.linkedin.com/in/mh-dadgostar',
    telegram: 'https://t.me/Terminal2002',
    instagram: 'https://www.instagram.com/mh.fullstack.dev',
};

export const RESUME_FILES = {
    fa: '/resume-fa.pdf',
    en: '/resume-en.pdf',
};

export const PROFILE_IMAGE = '/profile.jpg';
