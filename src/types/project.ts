export type ProjectCategory = 'Web' | 'Mobile' | 'AI' | 'Backend';

export interface Project {
    id: string;
    title: string;
    category: ProjectCategory;
    shortDescription: string;
    fullDescription: string;
    problem: string;
    technologies: string[];
    architecture: string;
    githubUrl: string;
    demoUrl: string;
    image: string; // gradient placeholder or URL
    screenshots: string[];
}
