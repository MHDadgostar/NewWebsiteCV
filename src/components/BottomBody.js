import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import clsx from "clsx";
import { FaBriefcase, FaGraduationCap, FaExternalLinkAlt } from "react-icons/fa";
import SectionHeader from "./SectionHeader";

function Timeline({ children }) {
  return <ol className="relative ps-8 border-s-2 border-gray-200 space-y-8">{children}</ol>;
}

function TimelineItem({ dotClass, children }) {
  return (
    <li className="relative">
      <span
        aria-hidden="true"
        className={clsx("absolute top-2 -start-[41px] w-4 h-4 rounded-full border-4 border-white shadow-md", dotClass)}
      />
      <div className="bg-white rounded-2xl p-6 shadow-card border border-gray-100 hover:shadow-elegant transition-shadow duration-300 text-start">
        {children}
      </div>
    </li>
  );
}

export default function BottomBody() {
  const { t } = useContext(LanguageContext);
  const e = t.experience;

  return (
    <section id="experience" aria-labelledby="experience-title" className="py-24 lg:py-32 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-white via-gray-50 to-white scroll-mt-16">
      <div className="max-w-7xl mx-auto">
        <SectionHeader id="experience-title" badge={e.badge} title={e.title} />

        <div className="grid lg:grid-cols-5 gap-16 lg:gap-20">

          {/* Work Experience */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold-400 to-gold-500 flex items-center justify-center shadow-glow" aria-hidden="true">
                <FaBriefcase className="text-white text-xl" />
              </div>
              <h3 className="text-2xl font-bold text-navy-900">{e.workTitle}</h3>
            </div>

            <Timeline>
              {e.jobs.map((job) => (
                <TimelineItem key={job.company} dotClass="bg-gold-400">
                  <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2 mb-4">
                    <div>
                      <h4 className="text-lg font-bold text-navy-900">{job.role}</h4>
                      {job.url ? (
                        <a
                          href={job.url}
                          target="_blank"
                          rel="noopener"
                          className="inline-flex items-center gap-2 text-gold-600 font-medium hover:text-navy-900 transition-colors duration-300"
                        >
                          <span>{job.company}</span>
                          <FaExternalLinkAlt size={11} aria-hidden="true" />
                        </a>
                      ) : (
                        <p className="text-gold-600 font-medium">{job.company}</p>
                      )}
                    </div>
                    <span className="px-3 py-1 bg-gold-50 text-gold-700 text-xs font-medium rounded-full whitespace-nowrap">
                      {job.period}
                    </span>
                  </div>

                  <ul className="space-y-2 text-gray-600 text-sm leading-relaxed">
                    {job.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-gold-500" aria-hidden="true">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </TimelineItem>
              ))}
            </Timeline>
          </div>

          {/* Education */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-navy-800 to-navy-900 flex items-center justify-center shadow-lg" aria-hidden="true">
                <FaGraduationCap className="text-white text-xl" />
              </div>
              <h3 className="text-2xl font-bold text-navy-900">{e.educationTitle}</h3>
            </div>

            <Timeline>
              {e.education.map((item) => (
                <TimelineItem key={item.degree} dotClass="bg-navy-900">
                  <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2 mb-4">
                    <div>
                      <h4 className="text-lg font-bold text-navy-900">{item.degree}</h4>
                      <p className="text-navy-700 font-medium">{item.school}</p>
                    </div>
                    <span className="px-3 py-1 bg-navy-50 text-navy-700 text-xs font-medium rounded-full whitespace-nowrap">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </TimelineItem>
              ))}
            </Timeline>
          </div>
        </div>
      </div>
    </section>
  );
}
