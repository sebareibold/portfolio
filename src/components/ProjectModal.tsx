import { useEffect, useCallback, useState } from 'react';
import { type Project, categoryColors } from '../data/projects';
import {
    X,
    ExternalLink,
    Github,
    Globe,
    Cpu,
    Smartphone,
    Server,
    Layers,
    Lightbulb,
    Wrench,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface ProjectModalProps {
    project: Project;
    onClose: () => void;
}

const categoryIcons: Record<string, LucideIcon> = {
    Web: Globe,
    Mobile: Smartphone,
    AI: Cpu,
    Backend: Server,
};

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
    const [isClosing, setIsClosing] = useState(false);
    const Icon = categoryIcons[project.category] || Globe;
    const gradientClass = categoryColors[project.category];

    const handleClose = useCallback(() => {
        setIsClosing(true);
        setTimeout(() => {
            onClose();
        }, 250);
    }, [onClose]);

    // Close on Escape
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') handleClose();
        };
        document.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
        };
    }, [handleClose]);

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 ${isClosing ? 'modal-overlay closing' : 'modal-overlay'
                }`}
            onClick={handleClose}
            id="project-modal-overlay"
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />

            {/* Modal Content */}
            <div
                className={`relative w-full max-w-2xl max-h-[85vh] overflow-y-auto glass-card-static ${isClosing ? 'modal-content closing' : 'modal-content'
                    }`}
                onClick={(e) => e.stopPropagation()}
                id="project-modal-content"
            >
                {/* ===== HEADER ===== */}
                <div className="sticky top-0 z-10 flex items-start justify-between p-6 pb-4" style={{ background: 'rgba(12, 18, 34, 0.85)', backdropFilter: 'blur(16px)' }}>
                    <div className="flex items-start gap-4 flex-1 min-w-0">
                        {/* Category icon */}
                        <div
                            className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br ${gradientClass}`}
                            style={{ opacity: 0.8 }}
                        >
                            <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="min-w-0">
                            <span
                                className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold mb-2 bg-gradient-to-r ${gradientClass} text-white`}
                            >
                                {project.category}
                            </span>
                            <h2 className="font-display font-bold text-xl text-white leading-tight">
                                {project.title}
                            </h2>
                        </div>
                    </div>

                    {/* Close button */}
                    <button
                        onClick={handleClose}
                        className="p-2 rounded-lg transition-all duration-300 hover:scale-110 flex-shrink-0 ml-3"
                        style={{
                            background: 'rgba(255,255,255,0.06)',
                            border: '1px solid rgba(255,255,255,0.1)',
                        }}
                        id="modal-close-btn"
                        aria-label="Cerrar modal"
                    >
                        <X className="w-5 h-5 text-white/60 hover:text-white" />
                    </button>
                </div>

                {/* ===== BODY ===== */}
                <div className="px-6 pb-6 space-y-6">
                    {/* Description */}
                    <section>
                        <div className="flex items-center gap-2 mb-2">
                            <Lightbulb className="w-4 h-4 text-blue-400" />
                            <h3 className="text-sm font-semibold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                                Descripción
                            </h3>
                        </div>
                        <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                            {project.fullDescription}
                        </p>
                    </section>

                    {/* Problem */}
                    <section>
                        <div className="flex items-center gap-2 mb-2">
                            <Lightbulb className="w-4 h-4 text-purple-400" />
                            <h3 className="text-sm font-semibold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                                Problema que resuelve
                            </h3>
                        </div>
                        <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                            {project.problem}
                        </p>
                    </section>

                    {/* Technologies */}
                    <section>
                        <div className="flex items-center gap-2 mb-3">
                            <Wrench className="w-4 h-4 text-cyan-400" />
                            <h3 className="text-sm font-semibold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                                Tecnologías
                            </h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, i) => (
                                <span
                                    key={i}
                                    className="text-xs px-3 py-1.5 rounded-lg font-medium transition-all duration-300 hover:scale-105"
                                    style={{
                                        background: 'rgba(59, 130, 246, 0.12)',
                                        border: '1px solid rgba(59, 130, 246, 0.2)',
                                        color: '#93c5fd',
                                    }}
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </section>

                    {/* Architecture */}
                    <section>
                        <div className="flex items-center gap-2 mb-2">
                            <Layers className="w-4 h-4 text-emerald-400" />
                            <h3 className="text-sm font-semibold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                                Arquitectura
                            </h3>
                        </div>
                        <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                            {project.architecture}
                        </p>
                    </section>

                    {/* ===== ACTION BUTTONS ===== */}
                    <div className="flex flex-wrap gap-3 pt-2">
                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="glass-button flex-1 min-w-[140px]"
                                id="modal-github-link"
                            >
                                <Github className="w-4 h-4" />
                                Código fuente
                            </a>
                        )}
                        {project.demoUrl && (
                            <a
                                href={project.demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="glass-button flex-1 min-w-[140px]"
                                style={{
                                    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.35), rgba(139, 92, 246, 0.35))',
                                }}
                                id="modal-demo-link"
                            >
                                <ExternalLink className="w-4 h-4" />
                                Ver demo
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
