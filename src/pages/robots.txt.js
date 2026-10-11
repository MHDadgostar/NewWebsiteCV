import { SITE_URL } from '@/data/site';

export default function Robots() {
    return null;
}

export function getServerSideProps({ res }) {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.setHeader('Cache-Control', 'public, max-age=86400');
    // AI crawlers are welcomed explicitly so assistants can read the site and /llms.txt.
    const aiBots = ['GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-User', 'Claude-SearchBot', 'PerplexityBot', 'Perplexity-User', 'Google-Extended', 'Applebot-Extended', 'CCBot'];
    const aiRules = aiBots.map((bot) => `User-agent: ${bot}\nAllow: /\n`).join('\n');
    res.write(`User-agent: *\nAllow: /\n\n${aiRules}\nSitemap: ${SITE_URL}/sitemap.xml\n`);
    res.end();
    return { props: {} };
}
