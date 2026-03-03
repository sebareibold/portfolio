import { useState, useMemo, useEffect } from 'react';
import TopNavbar from './TopNavbar';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import BottomBar from './BottomBar';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
    projects,
    type Project,
    type ProjectCategory,
} from '../data/projects';

type ViewMode = 'carousel' | 'grid';
const GRID_INITIAL_COUNT = 4;

const ProjectsSection = () => {
    const [activeFilter, setActiveFilter] = useState<ProjectCategory | 'All'>('All');
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [viewMode, setViewMode] = useState<ViewMode>('carousel');
    const [visibleCount, setVisibleCount] = useState(GRID_INITIAL_COUNT);

    const filteredProjects = useMemo(() => {
        if (activeFilter === 'All') return projects;
        return projects.filter((p) => p.category === activeFilter);
    }, [activeFilter]);

    // Reset cuando cambia el filtro
    useEffect(() => {
        setCurrentIndex(0);
        setVisibleCount(GRID_INITIAL_COUNT);
    }, [activeFilter]);

    const handlePrev = () => setCurrentIndex((i) => Math.max(0, i - 1));
    const handleNext = () => setCurrentIndex((i) => Math.min(filteredProjects.length - 1, i + 1));
    const handleLoadMore = () => setVisibleCount((c) => Math.min(c + 4, filteredProjects.length));

    const currentProject = filteredProjects[currentIndex] ?? null;
    const visibleProjects = filteredProjects.slice(0, visibleCount);
    const hasMore = visibleCount < filteredProjects.length;

    return (
        <section className="flex h-full min-h-0" id="projects-section">
            {/* ===== MAIN CONTENT ===== */}
            <div className="flex-1 flex flex-col min-h-0">
                {/* ===== TOP NAVBAR / FILTERS ===== */}
                <div
                    className="flex-shrink-0 border-b"
                    style={{ borderColor: 'var(--glass-border)' }}
                >
                    <TopNavbar 
                    activeFilter={activeFilter} 
                    onFilterChange={setActiveFilter}
                    viewMode={viewMode}
                    onViewModeChange={setViewMode}
                />
                </div>

                {/* ===== PROJECTS AREA ===== */}
                <div className="flex-1 overflow-hidden flex items-center justify-center px-5 pt-3 pb-6">
                    {filteredProjects.length > 0 ? (
                        viewMode === 'carousel' ? (
                            /* ===== CAROUSEL VIEW ===== */
                            <div className="flex items-center gap-6 w-full max-w-6xl h-[90%] mb-3 relative">
                                {/* Floating Dots Card - positioned above the project card */}
                                <div 
                                    className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10 flex items-center gap-1.5 px-3  rounded-lg"
                                    style={{
                                        background: 'rgba(0,0,0,0.4)',
                                        backdropFilter: 'blur(12px)',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                    }}
                                >
                                    {filteredProjects.map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setCurrentIndex(i)}
                                            className="rounded-full transition-all duration-300 hover:scale-125"
                                            style={{
                                                width: i === currentIndex ? '16px' : '6px',
                                                height: '6px',
                                                background:
                                                    i === currentIndex
                                                        ? 'var(--accent-blue)'
                                                        : 'rgba(255,255,255,0.3)',
                                            }}
                                            aria-label={`Ir al proyecto ${i + 1}`}
                                        />
                                    ))}
                                </div>

                                {/* Prev Button - Floating Icon */}
                                <button
                                    onClick={handlePrev}
                                    disabled={currentIndex === 0}
                                    className="flex-shrink-0 transition-all duration-300 disabled:opacity-20 hover:scale-125 hover:text-blue-400"
                                    aria-label="Anterior"
                                >
                                    <ChevronLeft className="w-8 h-8 text-white/60 hover:text-white transition-colors" />
                                </button>

                                {/* Card Container */}
                                <div
                                    className="flex-1 h-full transition-all duration-500 ease-out"
                                    style={{
                                        transform: `translateX(0)`,
                                        opacity: 1,
                                    }}
                                >
                                    {currentProject && (
                                        <ProjectCard
                                            key={`${activeFilter}-${currentIndex}`}
                                            project={currentProject}
                                            onSeeMore={setSelectedProject}
                                            index={0}
                                        />
                                    )}
                                </div>

                                {/* Next Button - Floating Icon */}
                                <button
                                    onClick={handleNext}
                                    disabled={currentIndex === filteredProjects.length - 1}
                                    className="flex-shrink-0 transition-all duration-300 disabled:opacity-20 hover:scale-125 hover:text-blue-400"
                                    aria-label="Siguiente"
                                >
                                    <ChevronRight className="w-8 h-8 text-white/60 hover:text-white transition-colors" />
                                </button>
                            </div>
                        ) : (
                            /* ===== GRID VIEW ===== */
                            <div className="w-full h-full overflow-y-auto">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                    {visibleProjects.map((project, i) => (
                                        <ProjectCard
                                            key={project.id}
                                            project={project}
                                            onSeeMore={setSelectedProject}
                                            index={i}
                                        />
                                    ))}
                                </div>
                                {hasMore && (
                                    <div className="flex justify-center mt-5">
                                        <button
                                            onClick={handleLoadMore}
                                            className="glass-button px-6 py-2 text-sm"
                                        >
                                            Cargar más
                                        </button>
                                    </div>
                                )}
                            </div>
                        )
                    ) : (
                        <div className="flex items-center justify-center w-full h-full">
                            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                                No hay proyectos en esta categoría.
                            </p>
                        </div>
                    )}
                </div>

                {/* ===== BOTTOM BAR (only for grid view) ===== */}
                {viewMode === 'grid' && (
                    <div
                        className="flex-shrink-0 border-t"
                        style={{ borderColor: 'var(--glass-border)' }}
                    >
                        <BottomBar total={filteredProjects.length} activeFilter={activeFilter} />
                    </div>
                )}
            </div>

            {/* ===== PROJECT MODAL ===== */}
            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </section>
    );
};

export default ProjectsSection;
