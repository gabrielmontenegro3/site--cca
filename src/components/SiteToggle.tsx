type SiteMode = 'industrial' | 'institucional'

interface SiteToggleProps {
  mode: SiteMode
  onModeChange: (mode: SiteMode) => void
}

export function SiteToggle({ mode, onModeChange }: SiteToggleProps) {
  const isIndustrial = mode === 'industrial'

  return (
    <div
      className="relative flex rounded-full bg-slate-100/80 p-1.5 shadow-[inset_0_1px_2px_rgba(0,0,0,0.06)]"
      role="tablist"
      aria-label="Alternar modo do site"
    >
      {/* Pill deslizante - animação ao clicar (esquerda = Institucional, direita = Industrial) */}
      <div
        className="absolute top-1.5 bottom-1.5 rounded-full bg-[#137FEC] shadow-[0_1px_3px_rgba(19,127,236,0.35)] transition-[left] duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
        style={{
          width: 'calc(50% - 6px)',
          left: isIndustrial ? 'calc(50% + 3px)' : 6,
        }}
        aria-hidden
      />
      <button
        type="button"
        role="tab"
        aria-selected={!isIndustrial}
        onClick={() => onModeChange('institucional')}
        className={`relative z-10 min-w-[140px] flex-1 rounded-full px-4 py-2.5 text-sm font-medium transition-colors duration-200 active:scale-[0.98] sm:min-w-[160px] ${
          !isIndustrial ? 'text-white' : 'text-slate-500 hover:text-slate-800'
        }`}
      >
        Site Institucional
      </button>
      <button
        type="button"
        role="tab"
        aria-selected={isIndustrial}
        onClick={() => onModeChange('industrial')}
        className={`relative z-10 min-w-[140px] flex-1 rounded-full px-4 py-2.5 text-sm font-medium transition-colors duration-200 active:scale-[0.98] sm:min-w-[160px] ${
          isIndustrial ? 'text-white' : 'text-slate-500 hover:text-slate-800'
        }`}
      >
        Atuação Industrial
      </button>
    </div>
  )
}
