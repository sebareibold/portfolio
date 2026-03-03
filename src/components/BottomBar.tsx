import type { ProjectCategory } from '../data/projects';
import { Folder } from 'lucide-react';

interface BottomBarProps {
    total: number;
    activeFilter: ProjectCategory | 'All';
}

const BottomBar = ({ total, activeFilter }: BottomBarProps) => {
    return (
        <div className="flex items-center justify-between px-5 py-3">
            <div className="flex items-center gap-2">
                <Folder className="w-3.5 h-3.5" style={{ color: 'var(--text-muted)' }} />
                <span className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>
                    {total} {total === 1 ? 'proyecto' : 'proyectos'}
                    {activeFilter !== 'All' && (
                        <span className="ml-1">
                            en <span className="text-blue-400">{activeFilter}</span>
                        </span>
                    )}
                </span>
            </div>

            {/* Dot indicators */}
            <div className="flex items-center gap-1.5">
                {Array.from({ length: Math.min(total, 6) }).map((_, i) => (
                    <div
                        key={i}
                        className="w-1.5 h-1.5 rounded-full transition-all duration-300"
                        style={{
                            background:
                                i === 0
                                    ? 'linear-gradient(135deg, #3b82f6, #8b5cf6)'
                                    : 'rgba(255,255,255,0.15)',
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default BottomBar;
