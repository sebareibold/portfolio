import { categories, type ProjectCategory } from '../data/projects';
import { LayoutGrid, Layers } from 'lucide-react';

type ViewMode = 'carousel' | 'grid';

interface TopNavbarProps {
    activeFilter: ProjectCategory | 'All';
    onFilterChange: (filter: ProjectCategory | 'All') => void;
    viewMode: ViewMode;
    onViewModeChange: (mode: ViewMode) => void;
}

const TopNavbar = ({ activeFilter, onFilterChange, viewMode, onViewModeChange }: TopNavbarProps) => {
    const filters: (ProjectCategory | 'All')[] = ['All', ...categories];

    return (
        <nav className="flex items-center justify-between px-4 py-3 overflow-x-auto" id="project-filters">
            {/* Filtros de categoría */}
            <div className="flex items-center gap-2">
                {filters.map((filter) => (
                    <button
                        key={filter}
                        onClick={() => onFilterChange(filter)}
                        className={`filter-pill ${activeFilter === filter ? 'active' : ''}`}
                        id={`filter-${filter.toLowerCase()}`}
                    >
                        {filter === 'All' ? 'Todos' : filter}
                    </button>
                ))}
            </div>

            {/* Botones de vista */}
            <div className="flex items-center gap-1 flex-shrink-0">
                <button
                    onClick={() => onViewModeChange('carousel')}
                    className={`p-2 rounded-lg transition-all duration-300 ${
                        viewMode === 'carousel' ? 'bg-blue-500/20 border-blue-500/50' : 'hover:bg-white/10'
                    }`}
                    style={{
                        border: viewMode === 'carousel' ? '1px solid rgba(59,130,246,0.5)' : '1px solid transparent',
                    }}
                    title="Vista Carrusel"
                    aria-label="Vista Carrusel"
                >
                    <Layers
                        className={`w-4 h-4 transition-colors ${
                            viewMode === 'carousel' ? 'text-blue-400' : 'text-white/50'
                        }`}
                    />
                </button>
                <button
                    onClick={() => onViewModeChange('grid')}
                    className={`p-2 rounded-lg transition-all duration-300 ${
                        viewMode === 'grid' ? 'bg-blue-500/20 border-blue-500/50' : 'hover:bg-white/10'
                    }`}
                    style={{
                        border: viewMode === 'grid' ? '1px solid rgba(59,130,246,0.5)' : '1px solid transparent',
                    }}
                    title="Vista Grilla"
                    aria-label="Vista Grilla"
                >
                    <LayoutGrid
                        className={`w-4 h-4 transition-colors ${
                            viewMode === 'grid' ? 'text-blue-400' : 'text-white/50'
                        }`}
                    />
                </button>
            </div>
        </nav>
    );
};

export default TopNavbar;
