import { ReactNode } from 'react';
import PixelBlast from '../components/PixelBlast';

interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <div className="min-h-screen ">
            {/* Fondo de Plasma */}

            <div style={{ width: '100%', backgroundColor: 'black', height: '100%', position: 'relative' }}>
                {/*
                <PixelBlast
                    variant="circle"
                    pixelSize={1}
                    color="#ffffff"
                    patternScale={3}
                    patternDensity={0.7}
                    pixelSizeJitter={0.5}
                    enableRipples
                    rippleSpeed={0.1}
                    rippleThickness={0.12}
                    rippleIntensityScale={0.04}
                    speed={0.6}
                    edgeFade={0.25}
                    transparent
                />
                */}

            </div>
            <div className="relative z-10 min-h-screen">
                {children}
            </div>
        </div>
    );
};

export default MainLayout;