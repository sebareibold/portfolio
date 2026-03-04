/**
 * Projects data (bilingual).
 * Edit this file to add, remove, or update portfolio projects.
 */

import type { Project, ProjectCategory } from '../types';
import type { Language } from '../context/LanguageContext';


export const categoryColors: Record<ProjectCategory, string> = {
    Web: 'from-blue-400 to-sky-300',
    Mobile: 'from-sky-500 to-blue-300',
    AI: 'from-cyan-400 to-sky-400',
    Backend: 'from-blue-500 to-cyan-400',
};

export const categories: ProjectCategory[] = ['Web', 'Mobile', 'AI', 'Backend'];

export const projectsData: Record<Language, Project[]> = {
    es: [
        {
            id: 'chatbot-proteccion',
            title: 'Chatbot Protección al Consumidor',
            category: 'AI',
            shortDescription:
                'Agente conversacional inteligente con LangGraph para orientar consumidores en sus derechos.',
            fullDescription:
                'Sistema multi-agente basado en LangGraph que guía al usuario paso a paso para identificar su problema de consumo, recopilar información relevante y ofrecer rutas de resolución basadas en la legislación local. Incluye RAG para consultar normativas actualizadas.',
            problem:
                'Los consumidores no conocen sus derechos ni los pasos legales para realizar reclamos. El proceso manual es lento y confuso.',
            technologies: [
                'Python',
                'LangGraph',
                'FastAPI',
                'OpenAI GPT-4',
                'ChromaDB',
                'React',
                'TypeScript',
            ],
            architecture:
                'Arquitectura multi-agente con nodos de intake, router, referral y closer. Pipeline RAG con ChromaDB para consulta de normativas. Backend FastAPI con WebSocket para streaming.',
            githubUrl: 'https://github.com/sebareibold/chatbot-proteccion',
            demoUrl: 'https://chatbot-proteccion.vercel.app',
            image: '',
            screenshots: [],
        },
        {
            id: 'portfolio-web',
            title: 'Portfolio Personal',
            category: 'Web',
            shortDescription:
                'Sitio web personal con diseño glassmorphism, animaciones GSAP y arquitectura modular React.',
            fullDescription:
                'Portfolio profesional construido con React, TypeScript y Vite. Features incluyen animación typewriter controlada por variable de entorno, diseño glassmorphism con efectos de blur y transparencia, layout responsivo con sidebar de perfil y section de proyectos con modales interactivos.',
            problem:
                'Necesidad de presentar proyectos y experiencia de forma profesional, moderna e interactiva para destacar en el mercado tech.',
            technologies: [
                'React',
                'TypeScript',
                'Vite',
                'Tailwind CSS',
                'GSAP',
                'Lucide Icons',
            ],
            architecture:
                'Arquitectura modular basada en componentes reutilizables. Separación clara entre data layer, components, layouts y pages. Configuración centralizada vía variables de entorno.',
            githubUrl: 'https://github.com/sebareibold/portfolio',
            demoUrl: 'https://sebastianreibold.vercel.app',
            image: '',
            screenshots: [],
        },
        {
            id: 'api-rest-ecommerce',
            title: 'API REST E-Commerce',
            category: 'Backend',
            shortDescription:
                'API RESTful escalable para e-commerce con autenticación JWT, pagos y gestión de inventario.',
            fullDescription:
                'Backend completo para una plataforma de e-commerce que maneja autenticación de usuarios, catálogo de productos, carrito de compras, procesamiento de pagos con Stripe y gestión de inventario en tiempo real. Incluye documentación Swagger.',
            problem:
                'Las soluciones de e-commerce existentes son monolíticas y difíciles de escalar. Se necesitaba una API modular y performante.',
            technologies: [
                'Node.js',
                'Express',
                'TypeScript',
                'PostgreSQL',
                'Prisma',
                'JWT',
                'Stripe',
                'Docker',
            ],
            architecture:
                'Arquitectura en capas: Controllers → Services → Repositories. Base de datos PostgreSQL con Prisma ORM. Contenedores Docker para desarrollo y deploy. CI/CD con GitHub Actions.',
            githubUrl: 'https://github.com/sebareibold/ecommerce-api',
            demoUrl: 'https://ecommerce-api-docs.vercel.app',
            image: '',
            screenshots: [],
        },
        {
            id: 'fitness-tracker-app',
            title: 'Fitness Tracker App',
            category: 'Mobile',
            shortDescription:
                'Aplicación móvil para seguimiento de entrenamientos con métricas en tiempo real y gráficos.',
            fullDescription:
                'Aplicación móvil cross-platform para registrar entrenamientos, series, repeticiones y pesos. Incluye visualización de progreso con gráficos interactivos, rutinas predefinidas, temporizador integrado y sincronización con backend.',
            problem:
                'Las apps de fitness existentes son complejas o requieren suscripciones costosas. Se necesitaba algo simple, rápido y gratuito.',
            technologies: [
                'React Native',
                'Expo',
                'TypeScript',
                'Firebase',
                'React Navigation',
                'Victory Charts',
            ],
            architecture:
                'React Native con Expo para compilación cross-platform. Firebase para autenticación y base de datos real-time. State management con Context API + useReducer.',
            githubUrl: 'https://github.com/sebareibold/fitness-tracker',
            demoUrl: 'https://expo.dev/@sebareibold/fitness-tracker',
            image: '',
            screenshots: [],
        },
    ],
    en: [
        {
            id: 'chatbot-proteccion',
            title: 'Consumer Protection Chatbot',
            category: 'AI',
            shortDescription:
                'Intelligent conversational agent with LangGraph to guide consumers about their rights.',
            fullDescription:
                'Multi-agent system based on LangGraph that guides users step by step to identify their consumer issue, gather relevant information, and offer resolution paths based on local legislation. Includes RAG to query updated regulations.',
            problem:
                'Consumers don\'t know their rights or the legal steps to file claims. The manual process is slow and confusing.',
            technologies: [
                'Python',
                'LangGraph',
                'FastAPI',
                'OpenAI GPT-4',
                'ChromaDB',
                'React',
                'TypeScript',
            ],
            architecture:
                'Multi-agent architecture with intake, router, referral, and closer nodes. RAG pipeline with ChromaDB for regulation queries. FastAPI backend with WebSocket for streaming.',
            githubUrl: 'https://github.com/sebareibold/chatbot-proteccion',
            demoUrl: 'https://chatbot-proteccion.vercel.app',
            image: '',
            screenshots: [],
        },
        {
            id: 'portfolio-web',
            title: 'Personal Portfolio',
            category: 'Web',
            shortDescription:
                'Personal website with glassmorphism design, GSAP animations, and modular React architecture.',
            fullDescription:
                'Professional portfolio built with React, TypeScript, and Vite. Features include environment-controlled typewriter animation, glassmorphism design with blur and transparency effects, responsive layout with profile sidebar and projects section with interactive modals.',
            problem:
                'Need to present projects and experience in a professional, modern, and interactive way to stand out in the tech market.',
            technologies: [
                'React',
                'TypeScript',
                'Vite',
                'Tailwind CSS',
                'GSAP',
                'Lucide Icons',
            ],
            architecture:
                'Modular architecture based on reusable components. Clear separation between data layer, components, layouts, and pages. Centralized configuration via environment variables.',
            githubUrl: 'https://github.com/sebareibold/portfolio',
            demoUrl: 'https://sebastianreibold.vercel.app',
            image: '',
            screenshots: [],
        },
        {
            id: 'api-rest-ecommerce',
            title: 'E-Commerce REST API',
            category: 'Backend',
            shortDescription:
                'Scalable RESTful API for e-commerce with JWT authentication, payments, and inventory management.',
            fullDescription:
                'Complete backend for an e-commerce platform handling user authentication, product catalog, shopping cart, Stripe payment processing, and real-time inventory management. Includes Swagger documentation.',
            problem:
                'Existing e-commerce solutions are monolithic and hard to scale. A modular and performant API was needed.',
            technologies: [
                'Node.js',
                'Express',
                'TypeScript',
                'PostgreSQL',
                'Prisma',
                'JWT',
                'Stripe',
                'Docker',
            ],
            architecture:
                'Layered architecture: Controllers → Services → Repositories. PostgreSQL database with Prisma ORM. Docker containers for development and deployment. CI/CD with GitHub Actions.',
            githubUrl: 'https://github.com/sebareibold/ecommerce-api',
            demoUrl: 'https://ecommerce-api-docs.vercel.app',
            image: '',
            screenshots: [],
        },
        {
            id: 'fitness-tracker-app',
            title: 'Fitness Tracker App',
            category: 'Mobile',
            shortDescription:
                'Mobile app for workout tracking with real-time metrics and charts.',
            fullDescription:
                'Cross-platform mobile app for logging workouts, sets, reps, and weights. Includes progress visualization with interactive charts, predefined routines, integrated timer, and backend synchronization.',
            problem:
                'Existing fitness apps are complex or require expensive subscriptions. Something simple, fast, and free was needed.',
            technologies: [
                'React Native',
                'Expo',
                'TypeScript',
                'Firebase',
                'React Navigation',
                'Victory Charts',
            ],
            architecture:
                'React Native with Expo for cross-platform compilation. Firebase for authentication and real-time database. State management with Context API + useReducer.',
            githubUrl: 'https://github.com/sebareibold/fitness-tracker',
            demoUrl: 'https://expo.dev/@sebareibold/fitness-tracker',
            image: '',
            screenshots: [],
        },
    ],
};

export const getProjects = (language: Language): Project[] => projectsData[language];
