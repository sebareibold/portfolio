import { type ReactNode } from 'react';

interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <div className="min-h-screen flex items-center justify-center p-3 sm:p-4 lg:p-6">
            {/* ===== AURORA ANIMATED BACKGROUND ===== */}
            <div className="aurora-bg">
                <div className="aurora-orb aurora-orb--cyan" />
            </div>

            {/* ===== MAIN CONTAINER - Glass Card ===== */}
            <div
                className="relative z-10 w-full max-w-[1600px] overflow-hidden"
                style={{
                    height: 'calc(100vh - 3rem)',
                    maxHeight: '900px',
                    display: 'grid',
                    gridTemplateColumns: '360px 1fr',
                    gap: '1rem',
                    overflow: 'visible',
                }}
                id="portfolio-container"
            >
                {children}
            </div>
        </div>
    );
};

export default MainLayout;