import { useLanguage } from '@/context/LanguageContext';

const LanguageSelector = () => {
    const { setLanguage } = useLanguage();

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop blur overlay */}
            <div 
                className="absolute inset-0 backdrop-blur-md bg-black/40"
                style={{ backdropFilter: 'blur(8px)' }}
            />
            
            {/* Language selection */}
            <div className="relative z-10 flex items-center gap-8">
                {/* English */}
                <button
                    onClick={() => setLanguage('en')}
                    className="text-3xl font-bold text-white/90 hover:text-white transition-all duration-300 hover:scale-110"
                    style={{ fontFamily: 'var(--font-display, Inter)' }}
                >
                    English
                </button>

                {/* Diagonal line */}
                <div 
                    className="w-px h-32 bg-white/30 rotate-[25deg]"
                    style={{ transform: 'rotate(25deg)' }}
                />

                {/* Español */}
                <button
                    onClick={() => setLanguage('es')}
                    className="text-3xl font-bold text-white/90 hover:text-white transition-all duration-300 hover:scale-110"
                    style={{ fontFamily: 'var(--font-display, Inter)' }}
                >
                    Español
                </button>
            </div>
        </div>
    );
};

export default LanguageSelector;
