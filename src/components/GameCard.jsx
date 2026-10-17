import React from 'react';
import { Play, Heart, Code, Star, Sparkles } from 'lucide-react';

export const GameCard = ({
  game,
  isFavorite,
  onPlay,
  onToggleFavorite,
  onViewCode,
}) => {
  return (
    <div className="group relative flex flex-col justify-between bg-slate-900/90 border border-slate-800 rounded-xl overflow-hidden hover:border-slate-700 transition-all duration-200 hover:shadow-xl hover:shadow-sky-950/20">
      {/* Visual Canvas Banner */}
      <div 
        className="relative h-44 w-full flex flex-col justify-between p-4 cursor-pointer overflow-hidden"
        style={{
          background: `radial-gradient(circle at 80% 20%, ${game.accentColor}25 0%, #0b1120 75%)`
        }}
        onClick={() => onPlay(game)}
      >
        {/* Subtle Decorative Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

        {/* Top Badges / Actions */}
        <div className="relative z-10 flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            {game.badge && (
              <span className="text-[11px] font-bold text-sky-400 tracking-wider uppercase">
                {game.badge}
              </span>
            )}
            {game.isCustom && (
              <span className="text-[11px] font-bold text-amber-400 tracking-wider uppercase">
                Custom
              </span>
            )}
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite(game.id);
            }}
            className="p-1.5 rounded-md bg-slate-900/60 hover:bg-slate-800 text-slate-300 hover:text-rose-400 transition-colors border border-slate-700/60 cursor-pointer"
            title={isFavorite ? "Remove from favorites" : "Add to favorites"}
            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
          >
            <Heart className={`w-4 h-4 ${isFavorite ? "fill-rose-500 text-rose-500" : ""}`} />
          </button>
        </div>

        {/* Center Themed Graphic Emblem */}
        <div className="relative z-10 my-auto flex flex-col items-center justify-center transform group-hover:scale-105 transition-transform duration-200">
          <div 
            className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg border"
            style={{
              backgroundColor: '#0f172a',
              borderColor: `${game.accentColor}55`,
              color: game.accentColor
            }}
          >
            <Sparkles className="w-8 h-8" style={{ color: game.accentColor }} />
          </div>
        </div>

        {/* Floating Quick Play Overlay on Hover */}
        <div className="absolute inset-0 bg-slate-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-3 backdrop-blur-[2px]">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onPlay(game);
            }}
            className="flex items-center gap-2 px-4 py-2 bg-sky-500 hover:bg-sky-400 text-white font-semibold text-xs rounded-lg transition-colors cursor-pointer shadow-lg"
          >
            <Play className="w-4 h-4 fill-white" />
            <span>Play Now</span>
          </button>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-4 flex flex-col flex-1 justify-between bg-slate-900/80">
        <div>
          {/* Zero-Pill Metadata Discipline */}
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-1.5 font-medium">
            <span className="text-sky-400">{game.category}</span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400 inline" />
              <span className="text-slate-200 font-semibold">{game.rating ? game.rating.toFixed(1) : '5.0'}</span>
            </span>
            <span aria-hidden="true">·</span>
            <span className="font-mono tabular-nums">{game.plays ? game.plays.toLocaleString() : '0'} plays</span>
          </div>

          <h3 
            className="text-base font-bold text-white group-hover:text-sky-300 transition-colors cursor-pointer line-clamp-1"
            onClick={() => onPlay(game)}
          >
            {game.title}
          </h3>

          <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
            {game.description}
          </p>
        </div>

        {/* Card Footer Actions */}
        <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between">
          <button
            onClick={() => onViewCode(game)}
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-200 transition-colors font-mono cursor-pointer"
            title="Inspect stored iframe tag"
          >
            <Code className="w-3.5 h-3.5 text-sky-400" />
            <span>&lt;iframe/&gt;</span>
          </button>

          <button
            onClick={() => onPlay(game)}
            className="flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors cursor-pointer"
          >
            <span>Play</span>
            <Play className="w-3.5 h-3.5 fill-sky-400" />
          </button>
        </div>
      </div>
    </div>
  );
};
