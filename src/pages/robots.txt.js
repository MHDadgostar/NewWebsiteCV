import { SITE_URL } from '@/data/site';

export default function Robots() {
    return null;
}

export function getServerSideProps({ res }) {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.setHeader('Cache-Control', 'public, max-age=86400');
    res.write(`User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);
    res.end();
    return { props: {} };
}
