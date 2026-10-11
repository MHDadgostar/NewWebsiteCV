import React, { useContext } from "react";
import {
    SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss, SiMui, SiHtml5, SiCss3,
    SiNodedotjs, SiExpress, SiDjango, SiMongodb, SiRedis,
    SiPython, SiPytorch, SiOpencv, SiScikitlearn, SiMediapipe, SiJupyter,
    SiGit, SiGithub, SiGitlab, SiDocker, SiPostman,
} from "react-icons/si";
import { LanguageContext } from "../context/LanguageContext";
import SectionHeader from "./SectionHeader";

const groups = [
    {
        key: 'frontend',
        items: [
            { name: "React", icon: SiReact },
            { name: "Next.js", icon: SiNextdotjs },
            { name: "TypeScript", icon: SiTypescript },
            { name: "JavaScript", icon: SiJavascript },
            { name: "Tailwind CSS", icon: SiTailwindcss },
            { name: "Material UI", icon: SiMui },
            { name: "HTML5", icon: SiHtml5 },
            { name: "CSS3", icon: SiCss3 },
        ],
    },
    {
        key: 'backend',
        items: [
            { name: "Node.js", icon: SiNodedotjs },
            { name: "Express", icon: SiExpress },
            { name: "Django", icon: SiDjango },
            { name: "Django REST Framework", icon: SiDjango },
            { name: "MongoDB", icon: SiMongodb },
            { name: "Redis", icon: SiRedis },
            { name: "REST API · JWT · WebSocket" },
        ],
    },
    {
        key: 'ai',
        items: [
            { name: "Python", icon: SiPython },
            { name: "PyTorch", icon: SiPytorch },
            { name: "YOLOv8 · RT-DETR" },
            { name: "OpenCV", icon: SiOpencv },
            { name: "scikit-learn", icon: SiScikitlearn },
            { name: "XGBoost" },
            { name: "MediaPipe", icon: SiMediapipe },
            { name: "Jupyter", icon: SiJupyter },
        ],
    },
    {
        key: 'tools',
        items: [
            { name: "Git", icon: SiGit },
            { name: "GitHub", icon: SiGithub },
            { name: "GitLab", icon: SiGitlab },
            { name: "Docker", icon: SiDocker },
            { name: "Postman", icon: SiPostman },
        ],
    },
];

const Skills = () => {
    const { t } = useContext(LanguageContext);
    const s = t.skills;

    return (
        <section id="skills" aria-labelledby="skills-title" className="py-24 lg:py-32 px-4 sm:px-8 lg:px-12 scroll-mt-16">
            <div className="max-w-7xl mx-auto">
                <SectionHeader id="skills-title" badge={s.badge} title={s.title} desc={s.desc} />

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {groups.map((group) => (
                        <div
                            key={group.key}
                            className="flex flex-col bg-white rounded-3xl p-6 shadow-card border border-gray-100 text-start"
                        >
                            <h3 className="text-xl font-bold text-navy-900 mb-5 pb-4 border-b border-gray-100">
                                {s.groups[group.key].title}
                            </h3>
                            <ul className="space-y-3 flex-1">
                                {group.items.map(({ name, icon: Icon }) => (
                                    <li key={name} className="flex items-center gap-3 text-gray-700">
                                        <span className="w-5 flex justify-center text-navy-800" aria-hidden="true">
                                            {Icon ? <Icon size={18} /> : <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />}
                                        </span>
                                        <span className="font-medium">{name}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-6 pt-4 border-t border-gray-100 text-sm text-gray-600 leading-relaxed">
                                <span className="font-medium text-gold-600">{s.usedIn}: </span>
                                {s.groups[group.key].usedIn}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
