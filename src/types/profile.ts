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
    freelanceExperience: Experience[];
    skills: Skill[];

    cvUrl: string;
    email: string;
    githubUrl: string;
    linkedinUrl: string;
}
