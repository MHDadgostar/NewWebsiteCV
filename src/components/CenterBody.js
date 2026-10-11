import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import SectionHeader from "./SectionHeader";

export default function CenterBody() {
  const { t } = useContext(LanguageContext);
  const a = t.about;

  return (
    <section id="about" aria-labelledby="about-title" className="py-24 lg:py-32 px-4 sm:px-8 lg:px-12 scroll-mt-16">
      <div className="max-w-7xl mx-auto">
        <SectionHeader id="about-title" badge={a.badge} title={a.title} />

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">

          {/* Text Side */}
          <div className="lg:col-span-3 space-y-6 text-start">
            <p className="text-2xl sm:text-3xl font-bold text-navy-900 leading-relaxed">
              {a.lead}
            </p>
            <div className="space-y-4 text-gray-600 text-lg leading-loose">
              {a.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>

          {/* Facts Side */}
          <aside className="lg:col-span-2 bg-white rounded-3xl shadow-card border border-gray-100 p-8 text-start">
            <h3 className="text-xl font-bold text-navy-900 mb-6 pb-4 border-b border-gray-100">{a.factsTitle}</h3>
            <dl className="space-y-5">
              {a.facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="text-sm font-medium text-gold-600">{fact.label}</dt>
                  <dd className="text-navy-900 mt-1 leading-relaxed">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}
