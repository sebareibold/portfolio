import { categoryColors } from '@/data/projects';
import type { Project } from '@/types';


import { ArrowRight, Globe, Cpu, Smartphone, Server } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface ProjectCardProps {
    project: Project;
    onSeeMore: (project: Project) => void;
    index: number;
}

const categoryIcons: Record<string, LucideIcon> = {
    Web: Globe,
    Mobile: Smartphone,
    AI: Cpu,
    Backend: Server,
};

const ProjectCard = ({ project, onSeeMore, index }: ProjectCardProps) => {
    const Icon = categoryIcons[project.category] || Globe;
    const gradientClass = categoryColors[project.category];

    return (
        <div
            className="glass-card group cursor-pointer"

            style={{
                animationDelay: `${index * 0.1}s`,
                opacity: 0,
                animation: `slideUp 0.6s ease-out ${index * 0.1}s forwards`,
            }}
            onClick={() => onSeeMore(project)}
            id={`project-card-${project.id}`}
        >
            {/* ===== IMAGE AREA ===== */}
            <div className="project-image-area relative">
                {/* Gradient background placeholder */}
                <div
                    className={`absolute inset-0 bg-gradient-to-br ${gradientClass} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
                />

                {/* Floating icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                        style={{
                            background: 'rgba(255,255,255,0.08)',
                            border: '1px solid rgba(255,255,255,0.12)',
                            backdropFilter: 'blur(12px)',
                        }}
                    >
                        <Icon className="w-8 h-8 text-white/50 group-hover:text-white/80 transition-colors duration-500" />
                    </div>
                </div>

                {/* Category badge */}
                <div className="absolute top-3 right-3">
                    <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${gradientClass} text-white shadow-lg`}
                    >
                        <Icon className="w-3 h-3" />
                        {project.category}
                    </span>
                </div>

                {/* See more button - bottom right */}
                <div className="absolute bottom-3 right-3 transition-transform duration-300 group-hover:scale-105">
                    <button
                        className="glass-button px-3 py-2 text-xs font-semibold flex items-center gap-1.5"
                        onClick={(e) => {
                            e.stopPropagation();
                            onSeeMore(project);
                        }}
                        id={`see-more-${project.id}`}
                    >
                        Ver más
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </button>
                </div>
            </div>

            {/* ===== CONTENT ===== */}
            <div className="p-5 space-y-3">
                <h3 className="font-display font-semibold text-lg text-white group-hover:text-blue-200 transition-colors duration-300 leading-tight">
                    {project.title}
                </h3>
                <p className="text-sm leading-relaxed line-clamp-2" style={{ color: 'var(--text-secondary)' }}>
                    {project.shortDescription}
                </p>
            </div>
        </div>
    );
};

export default ProjectCard;
