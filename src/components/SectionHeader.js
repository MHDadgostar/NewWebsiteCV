export default function SectionHeader({ id, badge, title, desc }) {
    return (
        <div className="text-center mb-16">
            <p className="inline-block px-4 py-2 bg-navy-900/5 text-navy-900 text-sm font-medium rounded-full mb-4">
                {badge}
            </p>
            <h2 id={id} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-4">
                {title}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-gold-400 to-gold-500 mx-auto rounded-full" aria-hidden="true" />
            {desc && <p className="text-gray-600 max-w-2xl mx-auto mt-6 leading-relaxed">{desc}</p>}
        </div>
    );
}
