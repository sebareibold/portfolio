/**
 * Professional profile data.
 * Edit this file to update your portfolio sidebar information.
 */

export interface Experience {
    role: string;
    place: string;
    period: string;
    description: string;
    icon: string; // Lucide icon name
}

export interface Skill {
    name: string;
    icon: string; // Lucide icon name or tech abbreviation
}

export interface Profile {
    name: string;
    roles: string[];
    tagline: string;
    experience: Experience[];
    skills: Skill[];
    cvUrl: string;
    email: string;
    githubUrl: string;
    linkedinUrl: string;
}

export const profile: Profile = {
    name: 'Sebastian Alejandro Reibold',
    roles: [
        'Software Engineer',
        'Analista Programador Universitario',
    ],
    tagline:
        'Especializado en desarrollo end-to-end de sistemas de software: arquitecturas backend escalables, APIs de alto rendimiento y sistemas Multi-Agent con RAG orientados a producción.',
    experience: [
        {
            role: 'Software Engineer (AI Systems)',
            place: 'Ministerio de Gobierno',
            period: 'Diciembre 2025 – Actualidad',
            description:
                'Desarrollando soluciones Multi-Agent y RAG con LangChain/LangGraph, expuestas vía FastAPI. Construyendo la plataforma de control en TypeScript: API con Node.js/Express, dashboard React y widget Preact.',
            icon: 'Brain',
        },
        {
            role: 'Teaching Assistant',
            place: 'Universidad Nacional del Comahue',
            period: 'Septiembre 2025 – Actualidad',
            description:
                'Enseñando fundamentos de programación y algoritmos en Java: arreglos, recursión y métodos de ordenamiento. Acompañando clases prácticas y seguimiento académico.',
            icon: 'Code2',
        },
        {
            role: 'Full-Stack Developer',
            place: 'UNCo – Beca PPU',
            period: 'Agosto 2024 – Diciembre 2025',
            description:
                'Desarrollando la plataforma web del grupo G.I.L.I.A: frontend responsivo con React + Vite y API modular con NestJS.',
            icon: 'Layout',
        },
    ],
    skills: [
        { name: 'Python', icon: 'Terminal' },
        { name: 'TypeScript', icon: 'FileCode2' },
        { name: 'React.js', icon: 'Globe' },
        { name: 'Node.js', icon: 'Server' },
        { name: 'FastAPI', icon: 'Layout' },
        { name: 'LangChain', icon: 'Brain' },
        { name: 'LangGraph', icon: 'Brain' },
        { name: 'Docker', icon: 'Box' },
        { name: 'PostgreSQL', icon: 'Database' },
        { name: 'Preact.js', icon: 'Code2' },
    ],
    cvUrl: '/cv-sebastian-reibold.pdf',
    email: 'contacto@sebastianreibold.com',
    githubUrl: 'https://github.com/sebareibold',
    linkedinUrl: 'https://linkedin.com/in/sebastianreibold',
};
