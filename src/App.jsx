import React, { useState, useEffect, useMemo } from 'react';
import { 
  Search, 
  Gamepad2, 
  Dices, 
  Code2, 
  Heart, 
  Sparkles, 
  Flame,
  ArrowUpDown
} from 'lucide-react';
import { DEFAULT_GAMES } from './data/defaultGames.js';
import { TopNav } from './components/TopNav.jsx';
import { GameCard } from './components/GameCard.jsx';
import { GamePlayer } from './components/GamePlayer.jsx';
import { AddGameModal } from './components/AddGameModal.jsx';
import { JsonViewerModal } from './components/JsonViewerModal.jsx';

export default function App() {
  const [games, setGames] = useState(() => {
    try {
      const stored = localStorage.getItem('arcadevault_games');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {}
    return DEFAULT_GAMES;
  });

  const [favorites, setFavorites] = useState(() => {
    try {
      const stored = localStorage.getItem('arcadevault_favs');
      return stored ? JSON.parse(stored) : ['2048', 'tetris'];
    } catch (e) {
      return ['2048', 'tetris'];
    }
  });

  const [selectedGame, setSelectedGame] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('popular');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isJsonModalOpen, setIsJsonModalOpen] = useState(false);
  const [isCloaked, setIsCloaked] = useState(false);

  // Sync games to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('arcadevault_games', JSON.stringify(games));
  }, [games]);

  // Sync favorites to localStorage
  useEffect(() => {
    localStorage.setItem('arcadevault_favs', JSON.stringify(favorites));
  }, [favorites]);

  // Also attempt fetch from ./games.json on first load if default
  useEffect(() => {
    fetch('./games.json')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          const stored = localStorage.getItem('arcadevault_games');
          if (!stored) {
            setGames(data);
          }
        }
      })
      .catch(() => {});
  }, []);

  // Stealth Cloak Handler
  const toggleCloak = () => {
    if (!isCloaked) {
      document.title = 'Google Drive - My Drive';
      let link = document.querySelector("link[rel*='icon']");
      if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.getElementsByTagName('head')[0].appendChild(link);
      }
      link.href = 'https://ssl.gstatic.com/docs/doclist/images/drive_2022q3_32dp.png';
      setIsCloaked(true);
    } else {
      document.title = 'ArcadeVault - Unblocked Games';
      let link = document.querySelector("link[rel*='icon']");
      if (link) {
        link.href = '/favicon.ico';
      }
      setIsCloaked(false);
    }
  };

  const toggleFavorite = (gameId) => {
    setFavorites(prev => 
      prev.includes(gameId) ? prev.filter(id => id !== gameId) : [...prev, gameId]
    );
  };

  const handleAddGame = (newGame) => {
    setGames(prev => [newGame, ...prev]);
    setSelectedGame(newGame);
  };

  const handleImportJson = (importedGames) => {
    setGames(importedGames);
    localStorage.setItem('arcadevault_games', JSON.stringify(importedGames));
  };

  const handleResetDefaults = () => {
    setGames(DEFAULT_GAMES);
    localStorage.removeItem('arcadevault_games');
  };

  const handleRandomGame = () => {
    if (games.length === 0) return;
    const randomIdx = Math.floor(Math.random() * games.length);
    setSelectedGame(games[randomIdx]);
  };

  // Keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && selectedGame) {
        setSelectedGame(null);
      }
      if (e.key === '`' || e.key === ']') {
        toggleCloak();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedGame, isCloaked]);

  // Categories list
  const categories = ['All', 'Favorites', 'Arcade', 'Puzzle', 'Action', 'Retro', 'Sports'];

  // Filter and sort games
  const filteredGames = useMemo(() => {
    return games
      .filter(game => {
        // Category filter
        if (selectedCategory === 'Favorites') {
          if (!favorites.includes(game.id)) return false;
        } else if (selectedCategory !== 'All') {
          if (game.category.toLowerCase() !== selectedCategory.toLowerCase()) return false;
        }

        // Search query
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchTitle = game.title.toLowerCase().includes(q);
          const matchDesc = game.description.toLowerCase().includes(q);
          const matchCat = game.category.toLowerCase().includes(q);
          const matchControls = (game.controls || []).some(c => c.toLowerCase().includes(q));
          if (!matchTitle && !matchDesc && !matchCat && !matchControls) return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'popular') return (b.plays || 0) - (a.plays || 0);
        if (sortBy === 'rating') return (b.rating || 0) - (a.rating || 0);
        return a.title.localeCompare(b.title);
      });
  }, [games, selectedCategory, searchQuery, sortBy, favorites]);

  const featuredGame = games[0] || DEFAULT_GAMES[0];

  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 flex flex-col selection:bg-sky-500 selection:text-white">
      {/* Top Bar adhering to Top Bar Contract */}
      <TopNav
        onOpenAddModal={() => setIsAddModalOpen(true)}
        onOpenJsonModal={() => setIsJsonModalOpen(true)}
        onToggleCloak={toggleCloak}
        isCloaked={isCloaked}
        onRandomGame={handleRandomGame}
        totalGames={games.length}
      />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-8">
        {/* Hero Section */}
        <div className="relative rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-6 sm:p-8 lg:p-10 overflow-hidden shadow-2xl">
          {/* Subtle grid backdrop */}
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              {/* Unboxed natural kicker */}
              <div className="flex items-center gap-2 text-xs font-semibold text-sky-400 mb-2">
                <span>Standalone HTML5 & Iframe Engine</span>
                <span aria-hidden="true">·</span>
                <span>Configured via games.json</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight text-balance">
                High-Performance Unblocked Gaming Portal
              </h1>

              <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed max-w-xl">
                Instant-loading arcade, puzzle, and retro games stored as direct iframe configurations in a lightweight JSON database. Zero blockers, no lag, pure fun.
              </p>

              {/* Action buttons */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setSelectedGame(featuredGame)}
                  className="flex items-center gap-2 px-5 py-2.5 bg-sky-500 hover:bg-sky-400 text-white font-bold text-xs sm:text-sm rounded-lg transition-colors shadow-lg shadow-sky-500/20 cursor-pointer"
                >
                  <Flame className="w-4 h-4 fill-white" />
                  <span>Play Featured ({featuredGame.title})</span>
                </button>

                <button
                  onClick={handleRandomGame}
                  className="flex items-center gap-2 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-semibold text-xs sm:text-sm rounded-lg border border-slate-700 transition-colors cursor-pointer"
                >
                  <Dices className="w-4 h-4 text-amber-400" />
                  <span>Random Game</span>
                </button>

                <button
                  onClick={() => setIsJsonModalOpen(true)}
                  className="flex items-center gap-2 px-4 py-2.5 bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white font-semibold text-xs sm:text-sm rounded-lg border border-slate-700 transition-colors cursor-pointer"
                >
                  <Code2 className="w-4 h-4 text-emerald-400" />
                  <span>Inspect games.json</span>
                </button>
              </div>
            </div>

            {/* Quick Metrics Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-3 shrink-0 lg:w-56">
              <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-3.5">
                <div className="text-xs text-slate-400 font-medium">Active Games</div>
                <div className="text-2xl font-extrabold text-white font-mono tabular-nums mt-0.5">
                  {games.length}
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5">Stored in JSON</div>
              </div>

              <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-3.5">
                <div className="text-xs text-slate-400 font-medium">Favorite Games</div>
                <div className="text-2xl font-extrabold text-rose-400 font-mono tabular-nums mt-0.5">
                  {favorites.length}
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5">Saved locally</div>
              </div>

              <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-3.5 col-span-2 sm:col-span-1">
                <div className="text-xs text-slate-400 font-medium">Stealth Hotkey</div>
                <div className="text-sm font-bold text-emerald-400 font-mono mt-1">
                  Press [ ` ] or [ ] ]
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5">Instant disguise</div>
              </div>
            </div>
          </div>
        </div>

        {/* Search & Category Filter Toolbar */}
        <div id="games" className="flex flex-col gap-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search games by name, controls, category..."
                className="w-full bg-slate-900 border border-slate-800 rounded-lg pl-10 pr-4 py-2 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Sort & Quick Filter Selector */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <ArrowUpDown className="w-3.5 h-3.5" />
                <span>Sort by:</span>
                <select
                  value={sortBy}
                  onChange={e => setSortBy(e.target.value)}
                  className="bg-slate-900 border border-slate-800 text-slate-200 text-xs rounded-md px-2 py-1.5 focus:outline-none focus:border-sky-500 cursor-pointer"
                >
                  <option value="popular">Most Played</option>
                  <option value="rating">Highest Rated</option>
                  <option value="title">Alphabetical</option>
                </select>
              </div>

              <button
                onClick={() => setIsAddModalOpen(true)}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-sky-400 hover:text-sky-300 text-xs font-semibold rounded-lg border border-slate-800 hover:border-slate-700 transition-colors cursor-pointer"
              >
                <span>+ Custom Game</span>
              </button>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1 overflow-x-auto pb-1 scrollbar-none">
            {categories.map(cat => {
              const isActive = selectedCategory === cat;
              const count = cat === 'All' 
                ? games.length 
                : cat === 'Favorites' 
                  ? favorites.length 
                  : games.filter(g => g.category.toLowerCase() === cat.toLowerCase()).length;

              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer border ${
                    isActive
                      ? 'bg-sky-500 text-white border-sky-400 shadow-sm shadow-sky-500/20'
                      : 'bg-slate-900/80 text-slate-400 border-slate-800 hover:text-slate-200 hover:border-slate-700'
                  }`}
                >
                  {cat === 'Favorites' && <Heart className="w-3 h-3 fill-current" />}
                  <span>{cat}</span>
                  <span className={`text-[10px] font-mono tabular-nums ${isActive ? 'text-sky-100' : 'text-slate-500'}`}>
                    ({count})
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Games Grid */}
        {filteredGames.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredGames.map(game => (
              <GameCard
                key={game.id}
                game={game}
                isFavorite={favorites.includes(game.id)}
                onPlay={g => setSelectedGame(g)}
                onToggleFavorite={toggleFavorite}
                onViewCode={g => {
                  setSelectedGame(g);
                }}
              />
            ))}
          </div>
        ) : (
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-12 text-center flex flex-col items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-slate-500 mb-3">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white">No games found</h3>
            <p className="text-xs text-slate-400 mt-1 max-w-sm">
              No games matched your search criteria. Try a different query or category filter.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="mt-4 px-4 py-2 text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}
      </main>

      {/* Active Game Console Overlay */}
      {selectedGame && (
        <GamePlayer
          game={selectedGame}
          isFavorite={favorites.includes(selectedGame.id)}
          onClose={() => setSelectedGame(null)}
          onToggleFavorite={toggleFavorite}
          onSelectGame={g => setSelectedGame(g)}
          allGames={games}
        />
      )}

      {/* Add Custom Game Modal */}
      <AddGameModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddGame={handleAddGame}
      />

      {/* JSON Viewer Modal */}
      <JsonViewerModal
        isOpen={isJsonModalOpen}
        onClose={() => setIsJsonModalOpen(false)}
        games={games}
        onImportJson={handleImportJson}
        onResetDefaults={handleResetDefaults}
      />

      {/* Footer */}
      <footer className="border-t border-slate-800/80 bg-slate-950 mt-16 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-400">ArcadeVault</span>
            <span aria-hidden="true">·</span>
            <span>All games stored as iframes in games.json</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsJsonModalOpen(true)}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Export games.json
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={toggleCloak}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Stealth Tab Cloak
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={handleRandomGame}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Play Random
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
