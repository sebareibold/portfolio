/**
 * Centralized environment configuration.
 * All env variables are read and typed here for clean consumption.
 */

export const ENV = {
    /** Whether to show the typewriter welcome animation on page load */
    SHOW_WELCOME_ANIMATION:
        import.meta.env.VITE_SHOW_WELCOME_ANIMATION === 'true',
} as const;
