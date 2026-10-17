import React, { useState, useRef, useEffect } from 'react';
import { 
  Maximize2, 
  Minimize2, 
  RotateCcw, 
  ExternalLink, 
  Heart, 
  X, 
  Code2, 
  Copy, 
  Check, 
  Keyboard, 
  Sparkles,
  ArrowLeft
} from 'lucide-react';

export const GamePlayer = ({
  game,
  isFavorite,
  onClose,
  onToggleFavorite,
  onSelectGame,
  allGames
}) => {
  const [isTheater, setIsTheater] = useState(false);
  const [iframeKey, setIframeKey] = useState(0);
  const [showJsonInspector, setShowJsonInspector] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef(null);

  // Handle Fullscreen change
  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => document.removeEventListener('fullscreenchange', handleFsChange);
  }, []);

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(game.iframeCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopyJson = () => {
    navigator.clipboard.writeText(JSON.stringify(game, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const openInNewTab = () => {
    window.open(game.iframeUrl, '_blank', 'noopener,noreferrer');
  };

  const otherGames = (allGames || []).filter(g => g.id !== game.id).slice(0, 4);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/95 backdrop-blur-md flex flex-col">
      {/* Top Console Bar */}
      <div className="border-b border-slate-800 bg-slate-900/90 px-4 sm:px-6 py-3 flex items-center justify-between gap-4 sticky top-0 z-20">
        <div className="flex items-center gap-3">
          <button
            onClick={onClose}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold transition-colors cursor-pointer border border-slate-700"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>All Games</span>
          </button>
          
          <div className="h-4 w-px bg-slate-800 hidden sm:block" />

          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-base font-bold text-white flex items-center gap-2">
                {game.title}
              </h2>
              <span className="text-xs text-sky-400 font-medium">({game.category})</span>
            </div>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {/* JSON / Iframe snippet Inspector */}
          <button
            onClick={() => setShowJsonInspector(!showJsonInspector)}
            className={`p-2 rounded-lg text-xs font-medium flex items-center gap-1.5 border transition-colors cursor-pointer ${
              showJsonInspector 
                ? 'bg-sky-500/20 text-sky-300 border-sky-500/40' 
                : 'bg-slate-800/80 hover:bg-slate-700 text-slate-300 border-slate-700'
            }`}
            title="Inspect stored iframe code and JSON"
          >
            <Code2 className="w-4 h-4" />
            <span className="hidden md:inline">Iframe Config</span>
          </button>

          {/* Favorite */}
          <button
            onClick={() => onToggleFavorite(game.id)}
            className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors cursor-pointer"
            title={isFavorite ? "Remove from favorites" : "Add to favorites"}
          >
            <Heart className={`w-4 h-4 ${isFavorite ? "fill-rose-500 text-rose-500" : ""}`} />
          </button>

          {/* Reload Iframe */}
          <button
            onClick={() => setIframeKey(k => k + 1)}
            className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors cursor-pointer"
            title="Reload game frame"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          {/* Theater Mode */}
          <button
            onClick={() => setIsTheater(!isTheater)}
            className={`p-2 rounded-lg border transition-colors cursor-pointer hidden sm:flex ${
              isTheater
                ? 'bg-sky-500/20 text-sky-300 border-sky-500/40'
                : 'bg-slate-800/80 hover:bg-slate-700 text-slate-300 border-slate-700'
            }`}
            title={isTheater ? "Normal Width" : "Theater Mode"}
          >
            {isTheater ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>

          {/* Fullscreen */}
          <button
            onClick={toggleFullscreen}
            className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors cursor-pointer"
            title="Toggle Fullscreen"
          >
            <Maximize2 className="w-4 h-4" />
          </button>

          {/* Open direct tab */}
          <button
            onClick={openInNewTab}
            className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors cursor-pointer"
            title="Open in separate tab"
          >
            <ExternalLink className="w-4 h-4" />
          </button>

          {/* Close */}
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800/80 hover:bg-rose-900/30 hover:text-rose-400 text-slate-400 border border-slate-700 transition-colors cursor-pointer ml-1"
            title="Close game"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Game Stage */}
      <div className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 flex flex-col gap-6">
        {/* Iframe Viewport Container */}
        <div 
          ref={containerRef}
          className={`relative mx-auto w-full transition-all duration-300 rounded-xl overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl flex flex-col ${
            isTheater ? 'max-w-6xl' : 'max-w-4xl'
          }`}
          style={{ minHeight: isFullscreen ? '100vh' : '560px' }}
        >
          {/* Actual Iframe Execution */}
          <iframe
            key={iframeKey}
            src={game.iframeUrl}
            title={game.title}
            className="w-full h-full flex-1 border-0"
            style={{
              minHeight: isFullscreen ? '100vh' : '580px',
              backgroundColor: '#0f172a'
            }}
            allowFullScreen
            allow="autoplay; gamepad; keyboard"
            sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
          />
        </div>

        {/* JSON / Iframe Code Drawer */}
        {showJsonInspector && (
          <div className={`mx-auto w-full bg-slate-900 border border-sky-500/30 rounded-xl p-5 ${isTheater ? 'max-w-6xl' : 'max-w-4xl'}`}>
            <div className="flex items-center justify-between mb-3 pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Code2 className="w-5 h-5 text-sky-400" />
                <h4 className="text-sm font-bold text-white">Stored JSON Iframe Record</h4>
                <span className="text-xs text-slate-400">(Source: games.json)</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono rounded border border-slate-700 transition-colors cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied Iframe!' : 'Copy <iframe/>'}</span>
                </button>
                <button
                  onClick={handleCopyJson}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono rounded border border-slate-700 transition-colors cursor-pointer"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy JSON</span>
                </button>
              </div>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div>
                <div className="text-slate-400 mb-1 font-sans text-xs">Raw Iframe Code:</div>
                <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 text-sky-300 break-all select-all">
                  {game.iframeCode}
                </div>
              </div>
              <div>
                <div className="text-slate-400 mb-1 font-sans text-xs">Full JSON Object:</div>
                <pre className="bg-slate-950 p-3 rounded-lg border border-slate-800 text-emerald-400 overflow-x-auto text-[11px] leading-relaxed">
                  {JSON.stringify(game, null, 2)}
                </pre>
              </div>
            </div>
          </div>
        )}

        {/* Game Details & Controls Strip */}
        <div className={`mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-6 ${isTheater ? 'max-w-6xl' : 'max-w-4xl'}`}>
          {/* About Game */}
          <div className="md:col-span-2 bg-slate-900/80 border border-slate-800 rounded-xl p-5">
            <h3 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-sky-400" />
              <span>About {game.title}</span>
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {game.description}
            </p>

            <div className="mt-4 pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-4 text-xs text-slate-400">
              <div>
                <span className="text-slate-500">Category: </span>
                <span className="text-slate-200 font-medium">{game.category}</span>
              </div>
              <span aria-hidden="true">·</span>
              <div>
                <span className="text-slate-500">Rating: </span>
                <span className="text-amber-400 font-bold">{game.rating} / 5.0</span>
              </div>
              <span aria-hidden="true">·</span>
              <div>
                <span className="text-slate-500">Plays: </span>
                <span className="font-mono tabular-nums text-slate-200">{game.plays ? game.plays.toLocaleString() : '0'}</span>
              </div>
              <span aria-hidden="true">·</span>
              <div>
                <span className="text-slate-500">Source: </span>
                <span className="font-mono text-sky-400">{game.iframeUrl}</span>
              </div>
            </div>
          </div>

          {/* Controls Reference */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-5 flex flex-col justify-between">
            <div>
              <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                <Keyboard className="w-4 h-4 text-emerald-400" />
                <span>Controls Guide</span>
              </h3>
              <ul className="space-y-2 text-xs text-slate-300">
                {(game.controls || []).map((ctrl, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">›</span>
                    <span>{ctrl}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] text-slate-500">
              Tip: Click inside the game screen once if keyboard controls aren't responding.
            </div>
          </div>
        </div>

        {/* More Games Strip */}
        <div className={`mx-auto w-full ${isTheater ? 'max-w-6xl' : 'max-w-4xl'} pt-4 border-t border-slate-800`}>
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-sm font-bold text-slate-300">More Unblocked Games</h4>
            <span className="text-xs text-slate-500">Stored in games.json</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {otherGames.map(g => (
              <div
                key={g.id}
                onClick={() => {
                  onSelectGame(g);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-slate-900/60 border border-slate-800 hover:border-sky-500/50 rounded-lg p-3 cursor-pointer transition-all hover:bg-slate-800/80 flex items-center gap-3"
              >
                <div 
                  className="w-8 h-8 rounded-md flex items-center justify-center font-bold text-xs shrink-0"
                  style={{ backgroundColor: `${g.accentColor}25`, color: g.accentColor }}
                >
                  ▶
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-semibold text-white truncate">{g.title}</div>
                  <div className="text-[10px] text-slate-400 truncate">{g.category}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
