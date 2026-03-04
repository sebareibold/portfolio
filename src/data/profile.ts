/**
 * Professional profile data (bilingual).
 * Edit this file to update your portfolio sidebar information.
 */

import type { Profile } from '../types';
import type { Language } from '../context/LanguageContext';

export const profileData: Record<Language, Profile> = {
    es: {
        name: 'Sebastian Alejandro Reibold',
        roles: [
            'Software Engineer',
            'Analista Programador Universitario',
        ],
        tagline:
            'Especializado en desarrollo end-to-end de sistemas de software: arquitecturas backend escalables, APIs de alto rendimiento y sistemas Multi-Agent con RAG orientados a producción.',
        experience: [
            {
                role: 'Software / AI Engineer',
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
        freelanceExperience: [
            {
                role: 'Desarrollador Full-Stack',
                place: 'Proyectos Independientes',
                period: '2023 – Actualidad',
                description:
                    'Desarrollo de landing pages de alto impacto, APIs personalizadas y automatizaciones de procesos para clientes locales e internacionales.',
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
    },
    en: {
        name: 'Sebastian Alejandro Reibold',
        roles: [
            'Software Engineer',
            'University Systems Analyst',
        ],
        tagline:
            'Specialized in end-to-end software systems development: scalable backend architectures, high-performance APIs, and production-ready Multi-Agent systems with RAG.',
        experience: [
            {
                role: 'Software / AI Engineer',
                place: 'Ministry of Government',
                period: 'December 2025 – Present',
                description:
                    'Developing Multi-Agent and RAG solutions with LangChain/LangGraph, exposed via FastAPI. Building the control platform in TypeScript: Node.js/Express API, React dashboard, and Preact widget.',
                icon: 'Brain',
            },
            {
                role: 'Teaching Assistant',
                place: 'National University of Comahue',
                period: 'September 2025 – Present',
                description:
                    'Teaching programming fundamentals and algorithms in Java: arrays, recursion, and sorting methods. Supporting practical classes and academic tracking.',
                icon: 'Code2',
            },
            {
                role: 'Full-Stack Developer',
                place: 'UNCo – PPU Scholarship',
                period: 'August 2024 – December 2025',
                description:
                    'Developing the G.I.L.I.A group web platform: responsive frontend with React + Vite and modular API with NestJS.',
                icon: 'Layout',
            },
        ],
        freelanceExperience: [
            {
                role: 'Full-Stack Developer',
                place: 'Independent Projects',
                period: '2023 – Present',
                description:
                    'Development of high-impact landing pages, custom APIs, and process automations for local and international clients.',
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
    },
};

export const getProfile = (language: Language): Profile => profileData[language];
