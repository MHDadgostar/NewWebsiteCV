import fs from 'fs'
import path from 'path'
import Seo from '@/components/Seo'
import Header from '@/components/Header'
import TopBody from '@/components/TopBody'
import CenterBody from '@/components/CenterBody'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import BottomBody from '@/components/BottomBody'
import AccessMe from '@/components/AccessMe'
import { useContext } from 'react'
import { LanguageContext } from '@/context/LanguageContext'
import { RESUME_FILES } from '@/data/site'

export default function Index({ resumes }) {
  const { t } = useContext(LanguageContext)

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 text-gray-800 antialiased">
      <Seo />

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:start-3 focus:z-[60] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-white focus:text-navy-900 focus:shadow-card"
      >
        {t.skipToContent}
      </a>

      <Header />
      <main id="main">
        <TopBody resumes={resumes} />
        <CenterBody />
        <Projects />
        <Skills />
        <BottomBody />
      </main>
      <AccessMe />
    </div>
  )
}

// A résumé button is only rendered for the PDFs that actually exist in /public.
export function getStaticProps() {
  const resumes = Object.fromEntries(
    Object.entries(RESUME_FILES).map(([lang, file]) => [
      lang,
      fs.existsSync(path.join(process.cwd(), 'public', file)),
    ])
  )
  return { props: { resumes } }
}
