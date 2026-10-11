import Head from 'next/head';
import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { SITE_URL, LOCALES, localeUrl, EMAIL, SOCIALS, PROFILE_IMAGE } from '../data/site';
import { webProjects, aiProjects } from '../data/projects';

const PERSON_ID = `${SITE_URL}/#person`;
const WEBSITE_ID = `${SITE_URL}/#website`;

function buildJsonLd(lang, t) {
    const url = localeUrl(lang);
    const image = `${SITE_URL}${PROFILE_IMAGE}`;

    const person = {
        '@type': 'Person',
        '@id': PERSON_ID,
        name: t.name,
        alternateName: [
            'محمدحسین دادگستر نژاد',
            'محمدحسین دادگسترنژاد',
            'محمدحسین دادگستر',
            'محمد حسین دادگستر نژاد',
            'Mohammad Hosein Dadgostar Nezhad',
            'Mohammad Hosein Dadgostar',
            'Mohammad Hossein Dadgostar Nejad',
            'MH Dadgostar',
            'MHDadgostar',
        ],
        givenName: lang === 'fa' ? 'محمدحسین' : 'Mohammad Hosein',
        familyName: lang === 'fa' ? 'دادگستر نژاد' : 'Dadgostar Nezhad',
        url: `${SITE_URL}/`,
        image,
        email: `mailto:${EMAIL}`,
        jobTitle: t.role,
        description: t.seo.description,
        address: { '@type': 'PostalAddress', addressLocality: lang === 'fa' ? 'تهران' : 'Tehran', addressCountry: 'IR' },
        nationality: { '@type': 'Country', name: 'Iran' },
        knowsLanguage: ['fa', 'en'],
        sameAs: Object.values(SOCIALS),
        worksFor: [
            { '@type': 'Organization', name: lang === 'fa' ? 'شاهین گروه' : 'Shahin Group', url: 'https://shahin11group.com' },
            { '@type': 'Organization', name: lang === 'fa' ? 'دیاما اینتلیجنس' : 'Dyama Intelligence', url: 'https://dyama.ir' },
            { '@type': 'Organization', name: lang === 'fa' ? 'بالاس' : 'Balas Store', url: 'https://balasstore.com' },
        ],
        alumniOf: [
            {
                '@type': 'CollegeOrUniversity',
                name: lang === 'fa' ? 'دانشگاه بین‌المللی امام خمینی (ره)' : 'Imam Khomeini International University',
                sameAs: 'https://www.ikiu.ac.ir',
            },
            {
                '@type': 'CollegeOrUniversity',
                name: lang === 'fa' ? 'دانشگاه ملی مهارت' : 'National University of Skills',
            },
        ],
        knowsAbout: [
            'Full-stack web development', 'Next.js', 'React', 'TypeScript', 'Node.js', 'Django',
            'E-commerce development', 'Technical SEO', 'Artificial intelligence', 'Machine learning',
            'Deep learning', 'Computer vision', 'Object detection', 'PyTorch', 'OpenCV',
        ],
    };

    const website = {
        '@type': 'WebSite',
        '@id': WEBSITE_ID,
        url: `${SITE_URL}/`,
        name: t.seo.siteName,
        description: t.seo.description,
        inLanguage: LOCALES,
        publisher: { '@id': PERSON_ID },
    };

    const page = {
        '@type': 'ProfilePage',
        '@id': `${url}#profilepage`,
        url,
        name: t.seo.title,
        description: t.seo.description,
        inLanguage: lang,
        isPartOf: { '@id': WEBSITE_ID },
        about: { '@id': PERSON_ID },
        mainEntity: { '@id': PERSON_ID },
        primaryImageOfPage: { '@type': 'ImageObject', url: image },
    };

    const works = {
        '@type': 'ItemList',
        '@id': `${url}#projects`,
        name: t.projects.title,
        itemListElement: [
            ...webProjects.map((p) => ({
                '@type': 'WebSite',
                name: p[lang].name,
                description: p[lang].description,
                ...(p.url ? { url: p.url } : {}),
                ...(p.image ? { image: `${SITE_URL}${p.image}` } : {}),
                contributor: { '@id': PERSON_ID },
            })),
            ...aiProjects.map((p) => ({
                '@type': 'SoftwareSourceCode',
                name: p[lang].name,
                description: p[lang].description,
                codeRepository: p.url,
                url: p.url,
                keywords: p.tags.join(', '),
                author: { '@id': PERSON_ID },
            })),
        ].map((item, i) => ({ '@type': 'ListItem', position: i + 1, item })),
    };

    return { '@context': 'https://schema.org', '@graph': [person, website, page, works] };
}

export default function Seo() {
    const { lang, otherLang, t } = useContext(LanguageContext);
    const url = localeUrl(lang);
    const image = `${SITE_URL}${PROFILE_IMAGE}`;
    const jsonLd = JSON.stringify(buildJsonLd(lang, t)).replace(/</g, '\\u003c');

    return (
        <Head>
            <title>{t.seo.title}</title>
            <meta name="description" content={t.seo.description} />
            <meta name="keywords" content={t.seo.keywords} />
            <meta name="author" content={t.name} />
            <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#0f172a" />
            <link rel="icon" href="/favicon.ico" />

            <link rel="canonical" href={url} />
            {LOCALES.map((l) => (
                <link key={l} rel="alternate" hrefLang={l} href={localeUrl(l)} />
            ))}
            <link rel="alternate" hrefLang="x-default" href={localeUrl('fa')} />

            <meta property="og:type" content="profile" />
            <meta property="og:site_name" content={t.seo.siteName} />
            <meta property="og:title" content={t.seo.title} />
            <meta property="og:description" content={t.seo.description} />
            <meta property="og:url" content={url} />
            <meta property="og:image" content={image} />
            <meta property="og:image:width" content="800" />
            <meta property="og:image:height" content="800" />
            <meta property="og:image:alt" content={t.seo.imageAlt} />
            <meta property="og:locale" content={lang === 'fa' ? 'fa_IR' : 'en_US'} />
            <meta property="og:locale:alternate" content={otherLang === 'fa' ? 'fa_IR' : 'en_US'} />
            <meta property="profile:first_name" content={lang === 'fa' ? 'محمدحسین' : 'Mohammad Hosein'} />
            <meta property="profile:last_name" content={lang === 'fa' ? 'دادگستر نژاد' : 'Dadgostar Nezhad'} />
            <meta property="profile:username" content="MHDadgostar" />

            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content={t.seo.title} />
            <meta name="twitter:description" content={t.seo.description} />
            <meta name="twitter:image" content={image} />
            <meta name="twitter:image:alt" content={t.seo.imageAlt} />

            <link rel="alternate" type="text/plain" title="llms.txt" href={`${SITE_URL}/llms.txt`} />
            <link rel="me" href={SOCIALS.github} />
            <link rel="me" href={SOCIALS.linkedin} />

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
        </Head>
    );
}
