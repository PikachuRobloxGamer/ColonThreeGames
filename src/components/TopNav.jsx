import React from 'react';
import { Gamepad2, Shield, Plus, Code2, Dices } from 'lucide-react';

export const TopNav = ({
  onOpenAddModal,
  onOpenJsonModal,
  onToggleCloak,
  isCloaked,
  onRandomGame
}) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a href="#" className="flex items-center gap-2.5 text-lg font-extrabold tracking-tight text-white whitespace-nowrap shrink-0 hover:opacity-90 transition-opacity">
          <div className="w-8 h-8 rounded-lg bg-sky-500/20 border border-sky-500/40 flex items-center justify-center text-sky-400">
            <Gamepad2 className="w-5 h-5" />
          </div>
          <span>ArcadeVault</span>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
          <a href="#games" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
            All Games
          </a>
          <button
            onClick={onRandomGame}
            className="flex items-center gap-1.5 hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer text-slate-300"
          >
            <Dices className="w-4 h-4 text-amber-400" />
            <span>Random Game</span>
          </button>
          <button
            onClick={onOpenJsonModal}
            className="flex items-center gap-1.5 hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer text-slate-300"
          >
            <Code2 className="w-4 h-4 text-emerald-400" />
            <span>JSON Database</span>
          </button>
          <button
            onClick={onToggleCloak}
            className={`flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded transition-colors whitespace-nowrap shrink-0 border cursor-pointer ${
              isCloaked
                ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                : 'bg-slate-800/60 text-slate-300 border-slate-700 hover:border-slate-600'
            }`}
            title="Disguise tab as Google Drive/Classroom for stealth browsing"
          >
            <Shield className="w-3.5 h-3.5" />
            <span>{isCloaked ? 'Cloak: Active' : 'Stealth Tab'}</span>
          </button>
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenAddModal}
            className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-white bg-sky-600 rounded-lg hover:bg-sky-500 transition-colors whitespace-nowrap shrink-0 cursor-pointer shadow-sm shadow-sky-600/20"
          >
            <Plus className="w-4 h-4" />
            <span>Add Iframe Game</span>
          </button>
        </div>
      </div>
    </header>
  );
};
