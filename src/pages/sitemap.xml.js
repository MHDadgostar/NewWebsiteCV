import { LOCALES, localeUrl } from '@/data/site';

export default function Sitemap() {
    return null;
}

export function getServerSideProps({ res }) {
    const lastmod = new Date().toISOString().slice(0, 10);
    const alternates = [
        ...LOCALES.map((l) => `<xhtml:link rel="alternate" hreflang="${l}" href="${localeUrl(l)}"/>`),
        `<xhtml:link rel="alternate" hreflang="x-default" href="${localeUrl('fa')}"/>`,
    ].join('');
    const urls = LOCALES.map(
        (l) => `<url><loc>${localeUrl(l)}</loc><lastmod>${lastmod}</lastmod><changefreq>monthly</changefreq><priority>${l === 'fa' ? '1.0' : '0.9'}</priority>${alternates}</url>`
    ).join('');

    res.setHeader('Content-Type', 'application/xml; charset=utf-8');
    res.setHeader('Cache-Control', 'public, max-age=86400');
    res.write(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${urls}</urlset>`);
    res.end();
    return { props: {} };
}
