import { useState, useEffect, useCallback } from 'react';
import TextType from './TextType';

interface WelcomeAnimationProps {
    onComplete: () => void;
}

const welcomeTexts = [
    '¡Bienvenido a mi portafolio!',
    'Aquí podrás observar mis diferentes proyectos',
    'Apps web, Apps móviles, IA y más',
    'Vamos a eso . . .',
];

const WelcomeAnimation = ({ onComplete }: WelcomeAnimationProps) => {
    const [isExiting, setIsExiting] = useState(false);
    const [completedSentences, setCompletedSentences] = useState(0);

    const handleSentenceComplete = useCallback(
        (_sentence: string, index: number) => {
            setCompletedSentences(index + 1);
        },
        []
    );

    useEffect(() => {
        if (completedSentences >= welcomeTexts.length) {
            // Last sentence typed — wait, then begin exit
            const exitTimer = setTimeout(() => {
                setIsExiting(true);
            }, 1200);
            return () => clearTimeout(exitTimer);
        }
    }, [completedSentences]);

    useEffect(() => {
        if (isExiting) {
            const completeTimer = setTimeout(() => {
                onComplete();
            }, 800); // match CSS exit duration
            return () => clearTimeout(completeTimer);
        }
    }, [isExiting, onComplete]);

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center ${isExiting ? 'welcome-screen exiting' : 'welcome-screen'
                }`}
            style={{ background: 'var(--bg-primary)' }}
        >
            {/* Aurora background for welcome too */}
            <div className="aurora-bg">
                <div className="aurora-orb aurora-orb--cyan" />
            </div>

            <div className="relative z-10 text-center px-8 max-w-3xl">
                <TextType
                    text={welcomeTexts}
                    typingSpeed={80}
                    pauseDuration={1200}
                    deletingSpeed={40}
                    showCursor={true}
                    cursorCharacter="_"
                    loop={false}
                    className="text-white font-display font-extrabold text-4xl sm:text-5xl md:text-6xl leading-tight"
                    textColors={['#ffffff', '#93c5fd', '#c4b5fd', '#67e8f9']}
                    onSentenceComplete={handleSentenceComplete}
                />
            </div>
        </div>
    );
};

export default WelcomeAnimation;
