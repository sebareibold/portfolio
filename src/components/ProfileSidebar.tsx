import { getProfile } from '@/data/profile';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/i18n/translations';
import {
    Brain,
    Download,
    Github,
    Linkedin,
    Mail,
} from 'lucide-react';
import {
    SiReact,
    SiTypescript,
    SiPython,
    SiNodedotjs,
    SiFastapi,
    SiDocker,
    SiPostgresql,
    SiPreact,
    SiLangchain,
} from 'react-icons/si';
import type { IconType } from 'react-icons';
import type { Experience } from '@/types';

interface SkillBrand { Icon: IconType; color: string; }
const skillBrandMap: Record<string, SkillBrand> = {
    'React.js': { Icon: SiReact, color: '#61DAFB' },
    'TypeScript': { Icon: SiTypescript, color: '#3178C6' },
    'Python': { Icon: SiPython, color: '#3776AB' },
    'Node.js': { Icon: SiNodedotjs, color: '#339933' },
    'FastAPI': { Icon: SiFastapi, color: '#009688' },
    'Docker': { Icon: SiDocker, color: '#2496ED' },
    'PostgreSQL': { Icon: SiPostgresql, color: '#4169E1' },
    'Preact.js': { Icon: SiPreact, color: '#673AB8' },
    'LangChain': { Icon: SiLangchain, color: '#1C3C3C' },
};

const ExperienceItem = ({ exp }: { exp: Experience }) => {
    return (

        <div className="experience-item">
            <div className="flex gap-2 mb-0.5">
                <h3 className="text-sm font-semibold text-white leading-tight">{exp.role}</h3>
            </div>
            <p className="text-[11px] font-semibold mb-0 tracking-wide" style={{ color: '#7dd3fc' }}>
                {exp.place}
            </p>
            <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {exp.description}
            </p>
        </div>

    );
};

const ProfileSidebar = () => {
    const { language } = useLanguage();
    const profile = getProfile(language);
    const t = translations[language];
    
    return (
        <aside className="p-6 flex flex-col gap-6 h-full overflow-y-auto">
            {/* ===== NAME & ROLES ===== */}
            <div className="space-y-3">
                <h1 className="font-display font-bold text-2xl text-white leading-tight">
                    {profile.name}
                </h1>
                <div className="space-y-1">
                    {profile.roles.map((role, i) => (
                        <p
                            key={i}
                            className="text-sm font-medium"
                            style={{
                                color:
                                    i === 0
                                        ? '#93c5fd'
                                        : i === 1
                                            ? '#7dd3fc'
                                            : 'rgba(255,255,255,0.6)',
                            }}
                        >
                            {role}
                        </p>
                    ))}
                </div>
            </div>



            {/* ===== EXPERIENCE LABORAL ===== */}
            <div className="space-y-3">
                <h2 className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
                    {t.experience}
                </h2>
                <div className="space-y-4">
                    {profile.experience.map((exp, i) => (
                        <ExperienceItem key={i} exp={exp} />
                    ))}
                </div>
            </div>

            {/* ===== EXPERIENCE FREELANCE ===== */}
            <div className="space-y-3">
                <h2 className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--accent-sky)' }}>
                    {t.freelance}
                </h2>
                <div className="space-y-3">
                    {profile.freelanceExperience.map((exp, i) => (
                        <p key={i} className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                            {exp.description}
                        </p>
                    ))}
                </div>
            </div>


            {/* ===== SKILLS ===== */}
            <div className="space-y-3 overflow-hidden">
                <h2 className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
                    {t.skills}
                </h2>
                {/* Carrusel automático infinito */}
                <div className="relative overflow-hidden">
                    {/* Fade izquierdo */}
                    <div
                        className="absolute left-0 top-0 bottom-0 w-8 z-10 pointer-events-none"
                        style={{ background: 'linear-gradient(to right, var(--glass-bg), transparent)' }}
                    />
                    {/* Contenedor animado */}
                    <div
                        className="flex gap-6 animate-skills-scroll"
                        style={{ width: 'max-content' }}
                    >
                        {/* Duplicamos los skills para efecto infinito */}
                        {[...profile.skills, ...profile.skills].map((skill, i) => {
                            const brand = skillBrandMap[skill.name];
                            return (
                                <div
                                    key={`${skill.name}-${i}`}
                                    className="inline-flex flex-col items-center gap-1.5 transition-all duration-300 hover:scale-110 flex-shrink-0"
                                >
                                    {brand ? (
                                        <brand.Icon size={20} color={brand.color} />
                                    ) : (
                                        <Brain className="w-5 h-5 text-blue-400" />
                                    )}
                                    <span className="text-[10px] font-medium whitespace-nowrap" style={{ color: 'rgba(255,255,255,0.92)' }}>{skill.name}</span>
                                </div>
                            );
                        })}
                    </div>
                    {/* Fade derecho */}
                    <div
                        className="absolute right-0 top-0 bottom-0 w-8 z-10 pointer-events-none"
                        style={{ background: 'linear-gradient(to left, var(--glass-bg), transparent)' }}
                    />
                </div>
            </div>

            {/* ===== SOCIAL LINKS ===== */}
            <div className="flex items-center gap-2 pt-2">
                <a
                    href={profile.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg transition-all duration-300 hover:scale-110"
                    style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}
                    aria-label="GitHub"
                >
                    <Github className="w-4 h-4 text-white/70 hover:text-white" />
                </a>
                <a
                    href={profile.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg transition-all duration-300 hover:scale-110"
                    style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}
                    aria-label="LinkedIn"
                >
                    <Linkedin className="w-4 h-4 text-white/70 hover:text-white" />
                </a>
                <a
                    href={`mailto:${profile.email}`}
                    className="p-2 rounded-lg transition-all duration-300 hover:scale-110"
                    style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}
                    aria-label="Email"
                >
                    <Mail className="w-4 h-4 text-white/70 hover:text-white" />
                </a>
            </div>

            {/* ===== DOWNLOAD CV ===== */}
            <a
                href={profile.cvUrl}
                download
                className="glass-button w-full text-center"
            >
                <Download className="w-4 h-4" />
                {t.downloadCV}
            </a>
        </aside>
    );
};

export default ProfileSidebar;

