import { useContext } from "react";
import Image from "next/image";
import clsx from "clsx";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { LanguageContext } from "../context/LanguageContext";
import { webProjects, aiProjects } from "../data/projects";
import { SOCIALS } from "../data/site";
import SectionHeader from "./SectionHeader";

function Tags({ tags }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <li key={tag} className="px-2.5 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-md">
          {tag}
        </li>
      ))}
    </ul>
  );
}

export default function Projects() {
  const { t, lang } = useContext(LanguageContext);
  const p = t.projects;

  return (
    <section id="projects" aria-labelledby="projects-title" className="py-24 lg:py-32 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-white via-gray-50 to-white scroll-mt-16">
      <div className="max-w-7xl mx-auto">
        <SectionHeader id="projects-title" badge={p.badge} title={p.title} desc={p.desc} />

        {/* Websites */}
        <h3 className="text-2xl font-bold text-navy-900 mb-8 text-start">{p.webTitle}</h3>
        <ul className="grid md:grid-cols-2 gap-8 mb-20">
          {webProjects.map((project) => {
            const c = project[lang];
            const closed = project.status === 'closed';
            return (
              <li key={project.id} className={clsx(!project.image && "md:col-span-2")}>
                <article className="group h-full flex flex-col bg-white rounded-3xl overflow-hidden shadow-card border border-gray-100 hover:shadow-elegant transition-shadow duration-500">
                  {project.image ? (
                    <div className="overflow-hidden border-b border-gray-100">
                      <Image
                        src={project.image}
                        alt={p.screenshotAlt(c.name)}
                        width={1200}
                        height={750}
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="w-full h-auto group-hover:scale-[1.03] transition-transform duration-700"
                      />
                    </div>
                  ) : null}

                  <div className="flex flex-col flex-1 gap-4 p-6 sm:p-8 text-start">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="text-xl font-bold text-navy-900">{c.name}</h4>
                        <p className="text-gold-600 font-medium mt-1">{c.role}</p>
                      </div>
                      <span className={clsx(
                        "px-3 py-1 text-xs font-medium rounded-full whitespace-nowrap",
                        closed ? "bg-gray-100 text-gray-600" : "bg-emerald-50 text-emerald-700"
                      )}>
                        {closed ? p.closed : p.active}
                      </span>
                    </div>

                    <p className="text-gray-600 leading-relaxed flex-1">{c.description}</p>

                    <Tags tags={project.tags} />

                    {project.url ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener"
                        className="inline-flex items-center gap-2 self-start text-navy-900 font-semibold hover:text-gold-600 transition-colors duration-300"
                      >
                        <span>{p.visit}</span>
                        <span dir="ltr" className="font-normal text-gray-500">{project.domain}</span>
                        <FaExternalLinkAlt size={12} aria-hidden="true" />
                      </a>
                    ) : (
                      <p className="self-start text-gray-500 line-through">{project.domain}</p>
                    )}
                  </div>
                </article>
              </li>
            );
          })}
        </ul>

        {/* AI & open source */}
        <h3 className="text-2xl font-bold text-navy-900 mb-8 text-start">{p.aiTitle}</h3>
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiProjects.map((project) => {
            const c = project[lang];
            return (
              <li key={project.id}>
                <article className="h-full flex flex-col gap-4 bg-white rounded-3xl p-6 shadow-card border border-gray-100 hover:shadow-elegant transition-shadow duration-500 text-start">
                  <p className="text-sm font-medium text-gold-600">{c.category}</p>
                  <h4 className="text-lg font-bold text-navy-900 leading-relaxed">{c.name}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1">{c.description}</p>
                  <Tags tags={project.tags} />
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center gap-2 self-start text-sm text-navy-900 font-semibold hover:text-gold-600 transition-colors duration-300"
                  >
                    <FaGithub aria-hidden="true" />
                    <span>{p.viewCode}</span>
                    <span className="sr-only">: {c.name}</span>
                  </a>
                </article>
              </li>
            );
          })}
          <li>
            <a
              href={SOCIALS.github}
              target="_blank"
              rel="me noopener"
              className="h-full min-h-[160px] flex flex-col items-center justify-center gap-3 rounded-3xl border-2 border-dashed border-gray-200 text-gray-600 hover:border-gold-400 hover:text-navy-900 transition-colors duration-300"
            >
              <FaGithub size={28} aria-hidden="true" />
              <span className="font-semibold">{p.moreOnGithub}</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
