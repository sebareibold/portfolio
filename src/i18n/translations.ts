import type { Language } from '../context/LanguageContext';

interface UITranslations {
    // Sidebar
    experience: string;
    freelance: string;
    skills: string;
    downloadCV: string;
    
    // Projects
    projects: string;
    allProjects: string;
    viewProject: string;
    loadMore: string;
    noProjects: string;
    
    // Modal
    description: string;
    problem: string;
    architecture: string;
    technologies: string;
    viewCode: string;
    liveDemo: string;
    close: string;
    
    // View modes
    carousel: string;
    grid: string;
}

export const translations: Record<Language, UITranslations> = {
    es: {
        // Sidebar
        experience: 'Experiencia',
        freelance: 'Freelance',
        skills: 'Skills',
        downloadCV: 'Descargar CV',
        
        // Projects
        projects: 'Proyectos',
        allProjects: 'Todos',
        viewProject: 'Ver Proyecto',
        loadMore: 'Cargar más',
        noProjects: 'No hay proyectos en esta categoría.',
        
        // Modal
        description: 'Descripción',
        problem: 'Problema que resuelve',
        architecture: 'Arquitectura',
        technologies: 'Tecnologías',
        viewCode: 'Código fuente',
        liveDemo: 'Ver demo',
        close: 'Cerrar',
        
        // View modes
        carousel: 'Vista Carrusel',
        grid: 'Vista Grilla',
    },
    en: {
        // Sidebar
        experience: 'Experience',
        freelance: 'Freelance',
        skills: 'Skills',
        downloadCV: 'Download CV',
        
        // Projects
        projects: 'Projects',
        allProjects: 'All',
        viewProject: 'View Project',
        loadMore: 'Load More',
        noProjects: 'No projects in this category.',
        
        // Modal
        description: 'Description',
        problem: 'Problem Solved',
        architecture: 'Architecture',
        technologies: 'Technologies',
        viewCode: 'Source Code',
        liveDemo: 'Live Demo',
        close: 'Close',
        
        // View modes
        carousel: 'Carousel View',
        grid: 'Grid View',
    },
};

export const useTranslations = (language: Language) => translations[language];
