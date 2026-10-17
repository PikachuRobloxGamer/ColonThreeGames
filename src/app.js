/**
 * ArcadeVault - Pure JavaScript Unblocked Games Hub
 * Standalone, zero-build compatible for GitHub Pages & Local Dev
 */

const DEFAULT_GAMES = [
  {
    id: "2048",
    title: "2048 Classic",
    category: "Puzzle",
    description: "Combine numerical tiles strategically to reach the elusive 2048 tile in this timeless brain teaser.",
    iframeUrl: "./games/2048.html",
    iframeCode: '<iframe src="./games/2048.html" width="100%" height="600" frameborder="0" allowfullscreen sandbox="allow-scripts allow-same-origin allow-popups"></iframe>',
    accentColor: "#38bdf8",
    badge: "Popular",
    rating: 4.9,
    plays: 28450,
    controls: [
      "Arrow Keys / WASD: Slide tiles",
      "Mobile: Swipe in any direction",
      "R: Restart game"
    ]
  },
  {
    id: "snake",
    title: "Retro Snake",
    category: "Arcade",
    description: "Guide the glowing serpent, collect energy pellets, and grow as long as possible without hitting walls or your tail.",
    iframeUrl: "./games/snake.html",
    iframeCode: '<iframe src="./games/snake.html" width="100%" height="620" frameborder="0" allowfullscreen sandbox="allow-scripts allow-same-origin allow-popups"></iframe>',
    accentColor: "#22c55e",
    badge: "Classic",
    rating: 4.8,
    plays: 34120,
    controls: [
      "Arrow Keys / WASD: Steer snake",
      "Space: Pause or start match",
      "Mobile: On-screen directional buttons"
    ]
  },
  {
    id: "tetris",
    title: "Tetramino Blocks",
    category: "Puzzle",
    description: "Rotate, shift, and drop falling tetromino geometric blocks to clear rows and chase legendary high scores.",
    iframeUrl: "./games/tetris.html",
    iframeCode: '<iframe src="./games/tetris.html" width="100%" height="650" frameborder="0" allowfullscreen sandbox="allow-scripts allow-same-origin allow-popups"></iframe>',
    accentColor: "#06b6d4",
    badge: "Hot",
    rating: 4.95,
    plays: 45800,
    controls: [
      "Arrow Left / Right: Move block",
      "Arrow Up / W: Rotate block",
      "Arrow Down: Soft drop",
      "Space: Instant hard drop"
    ]
  },
  {
    id: "flappy",
    title: "Flappy Wing",
    category: "Action",
    description: "Test your reflexes through dangerous green pipe obstacles with rhythmic wing flapping physics.",
    iframeUrl: "./games/flappy.html",
    iframeCode: '<iframe src="./games/flappy.html" width="100%" height="620" frameborder="0" allowfullscreen sandbox="allow-scripts allow-same-origin allow-popups"></iframe>',
    accentColor: "#facc15",
    badge: "Addictive",
    rating: 4.7,
    plays: 39400,
    controls: [
      "Spacebar: Flap wings",
      "Left Click / Tap: Flap wings",
      "P: Pause game"
    ]
  },
  {
    id: "breakout",
    title: "Breakout DX",
    category: "Arcade",
    description: "Demolish colorful brick layers with high velocity paddle ball ricochets and test your reaction limits.",
    iframeUrl: "./games/breakout.html",
    iframeCode: '<iframe src="./games/breakout.html" width="100%" height="600" frameborder="0" allowfullscreen sandbox="allow-scripts allow-same-origin allow-popups"></iframe>',
    accentColor: "#38bdf8",
    badge: "Retro",
    rating: 4.8,
    plays: 19200,
    controls: [
      "Mouse / Touch: Move paddle horizontally",
      "A / D or Left / Right: Keyboard paddle control"
    ]
  },
  {
    id: "pong",
    title: "Table Tennis Pong",
    category: "Sports",
    description: "The origin of video games. Face off in a fast-paced 1v1 rally duel against an adaptive computer opponent.",
    iframeUrl: "./games/pong.html",
    iframeCode: '<iframe src="./games/pong.html" width="100%" height="520" frameborder="0" allowfullscreen sandbox="allow-scripts allow-same-origin allow-popups"></iframe>',
    accentColor: "#f43f5e",
    badge: "1v1 Duel",
    rating: 4.65,
    plays: 16800,
    controls: [
      "Mouse Movement: Slide paddle vertically",
      "W / S or Up / Down: Keyboard paddle control"
    ]
  },
  {
    id: "space-invaders",
    title: "Space Defender",
    category: "Action",
    description: "Defend humanity from descending waves of menacing alien invaders with laser cannons and precision dodging.",
    iframeUrl: "./games/space-invaders.html",
    iframeCode: '<iframe src="./games/space-invaders.html" width="100%" height="650" frameborder="0" allowfullscreen sandbox="allow-scripts allow-same-origin allow-popups"></iframe>',
    accentColor: "#8b5cf6",
    badge: "Shooter",
    rating: 4.85,
    plays: 22300,
    controls: [
      "Arrow Left / Right: Move ship",
      "Spacebar: Fire laser blasters",
      "Touch screen: On-screen buttons"
    ]
  },
  {
    id: "dino",
    title: "Dino Desert Run",
    category: "Action",
    description: "Sprint across the desert, vault over cacti, and stay alive as speed steadily increases in this legendary endless runner.",
    iframeUrl: "./games/dino.html",
    iframeCode: '<iframe src="./games/dino.html" width="100%" height="420" frameborder="0" allowfullscreen sandbox="allow-scripts allow-same-origin allow-popups"></iframe>',
    accentColor: "#f59e0b",
    badge: "Endless",
    rating: 4.9,
    plays: 51200,
    controls: [
      "Spacebar / Up Arrow: Jump",
      "Down Arrow: Duck under obstacles",
      "Tap Screen: Jump"
    ]
  },
  {
    id: "minesweeper",
    title: "Minesweeper Classic",
    category: "Puzzle",
    description: "Clear the grid without detonating hidden explosives using mathematical deduction and flag markers.",
    iframeUrl: "./games/minesweeper.html",
    iframeCode: '<iframe src="./games/minesweeper.html" width="100%" height="550" frameborder="0" allowfullscreen sandbox="allow-scripts allow-same-origin allow-popups"></iframe>',
    accentColor: "#ef4444",
    badge: "Brain",
    rating: 4.75,
    plays: 18400,
    controls: [
      "Left Click: Reveal cell",
      "Right Click: Place or remove flag",
      "Flag Toggle: Switch mode on mobile/touch"
    ]
  },
  {
    id: "connect4",
    title: "Connect Four Strategy",
    category: "Puzzle",
    description: "Drop discs into the vertical grid and outsmart the AI opponent by lining up 4 chips in a row.",
    iframeUrl: "./games/connect4.html",
    iframeCode: '<iframe src="./games/connect4.html" width="100%" height="550" frameborder="0" allowfullscreen sandbox="allow-scripts allow-same-origin allow-popups"></iframe>',
    accentColor: "#3b82f6",
    badge: "Turn-based",
    rating: 4.7,
    plays: 14200,
    controls: [
      "Left Click: Choose column to drop chip",
      "Restart Button: Start fresh game"
    ]
  }
];

// Safe storage utilities (prevents crashes in sandboxed iframes)
function safeGetStorage(key, fallback) {
  try {
    const val = localStorage.getItem(key);
    return val ? JSON.parse(val) : fallback;
  } catch (e) {
    return fallback;
  }
}

function safeSetStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {}
}

// Global App State
let state = {
  games: safeGetStorage('arcadevault_games', DEFAULT_GAMES),
  favorites: safeGetStorage('arcadevault_favs', ['2048', 'tetris']),
  selectedCategory: 'All',
  searchQuery: '',
  sortBy: 'popular',
  activeGame: null,
  isTheater: false,
  isCloaked: false,
  showIframeCode: false,
  isAddModalOpen: false,
  isJsonModalOpen: false,
  isEditingJson: false
};

// Fetch external games.json if available
fetch('./games.json')
  .then(res => res.json())
  .then(data => {
    if (Array.isArray(data) && data.length > 0) {
      const stored = safeGetStorage('arcadevault_games', null);
      if (!stored) {
        state.games = data;
        render();
      }
    }
  })
  .catch(() => {});

function toggleCloak() {
  state.isCloaked = !state.isCloaked;
  if (state.isCloaked) {
    document.title = 'Google Drive - My Drive';
    let link = document.querySelector("link[rel*='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    link.href = 'https://ssl.gstatic.com/docs/doclist/images/drive_2022q3_32dp.png';
  } else {
    document.title = 'ArcadeVault - Unblocked Games';
    let link = document.querySelector("link[rel*='icon']");
    if (link) link.href = './favicon.ico';
  }
  renderHeader();
  renderHeroStats();
}

function toggleFavorite(id) {
  if (state.favorites.includes(id)) {
    state.favorites = state.favorites.filter(fId => fId !== id);
  } else {
    state.favorites.push(id);
  }
  safeSetStorage('arcadevault_favs', state.favorites);
  render();
}

function selectGame(game) {
  state.activeGame = game;
  state.showIframeCode = false;
  state.isTheater = false;
  renderPlayer();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function closeGame() {
  state.activeGame = null;
  renderPlayer();
}

function playRandomGame() {
  if (state.games.length === 0) return;
  const rand = state.games[Math.floor(Math.random() * state.games.length)];
  selectGame(rand);
}

// Keyboard shortcuts
window.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    if (state.activeGame) closeGame();
    if (state.isAddModalOpen) closeModal('add-modal');
    if (state.isJsonModalOpen) closeModal('json-modal');
  }
  if (e.key === '`' || e.key === ']') {
    toggleCloak();
  }
});

// Render Functions
function getFilteredGames() {
  return state.games
    .filter(g => {
      if (state.selectedCategory === 'Favorites') {
        if (!state.favorites.includes(g.id)) return false;
      } else if (state.selectedCategory !== 'All') {
        if (g.category.toLowerCase() !== state.selectedCategory.toLowerCase()) return false;
      }
      if (state.searchQuery.trim()) {
        const q = state.searchQuery.toLowerCase();
        const matchTitle = g.title.toLowerCase().includes(q);
        const matchDesc = (g.description || '').toLowerCase().includes(q);
        const matchCat = (g.category || '').toLowerCase().includes(q);
        const matchControls = (g.controls || []).some(c => c.toLowerCase().includes(q));
        if (!matchTitle && !matchDesc && !matchCat && !matchControls) return false;
      }
      return true;
    })
    .sort((a, b) => {
      if (state.sortBy === 'popular') return (b.plays || 0) - (a.plays || 0);
      if (state.sortBy === 'rating') return (b.rating || 0) - (a.rating || 0);
      return a.title.localeCompare(b.title);
    });
}

function renderHeader() {
  const cloakBtn = document.getElementById('btn-cloak');
  if (cloakBtn) {
    cloakBtn.innerHTML = `
      <svg class="w-3.5 h-3.5 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
      <span>${state.isCloaked ? 'Cloak: Active' : 'Stealth Tab'}</span>
    `;
    cloakBtn.className = `flex items-center text-xs font-semibold px-2.5 py-1 rounded transition-colors whitespace-nowrap shrink-0 border cursor-pointer ${
      state.isCloaked
        ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
        : 'bg-slate-800/60 text-slate-300 border-slate-700 hover:border-slate-600'
    }`;
  }
}

function renderHeroStats() {
  const countEl = document.getElementById('stat-active-count');
  const favEl = document.getElementById('stat-fav-count');
  if (countEl) countEl.textContent = state.games.length;
  if (favEl) favEl.textContent = state.favorites.length;
}

function renderCategories() {
  const container = document.getElementById('category-tabs');
  if (!container) return;

  const categories = ['All', 'Favorites', 'Arcade', 'Puzzle', 'Action', 'Retro', 'Sports'];
  container.innerHTML = categories.map(cat => {
    const isActive = state.selectedCategory === cat;
    const count = cat === 'All' 
      ? state.games.length 
      : cat === 'Favorites' 
        ? state.favorites.length 
        : state.games.filter(g => g.category.toLowerCase() === cat.toLowerCase()).length;

    return `
      <button
        onclick="setCategory('${cat}')"
        class="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer border ${
          isActive
            ? 'bg-sky-500 text-white border-sky-400 shadow-sm shadow-sky-500/20'
            : 'bg-slate-900/80 text-slate-400 border-slate-800 hover:text-slate-200 hover:border-slate-700'
        }"
      >
        ${cat === 'Favorites' ? '<svg class="w-3 h-3 fill-current inline" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>' : ''}
        <span>${cat}</span>
        <span class="text-[10px] font-mono tabular-nums ${isActive ? 'text-sky-100' : 'text-slate-500'}">(${count})</span>
      </button>
    `;
  }).join('');
}

function renderGames() {
  const container = document.getElementById('games-grid');
  if (!container) return;

  const filtered = getFilteredGames();

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full bg-slate-900/60 border border-slate-800 rounded-xl p-12 text-center flex flex-col items-center justify-center">
        <div class="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-slate-500 mb-3">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <h3 class="text-base font-bold text-white">No games found</h3>
        <p class="text-xs text-slate-400 mt-1 max-w-sm">
          No games matched your search criteria. Try a different query or category filter.
        </p>
        <button
          onclick="resetFilters()"
          class="mt-4 px-4 py-2 text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg transition-colors cursor-pointer"
        >
          Reset Filters
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(game => {
    const isFav = state.favorites.includes(game.id);
    const color = game.accentColor || '#38bdf8';
    const plays = (game.plays || 0).toLocaleString();
    const rating = (game.rating || 5.0).toFixed(1);

    return `
      <div class="group relative flex flex-col justify-between bg-slate-900/90 border border-slate-800 rounded-xl overflow-hidden hover:border-slate-700 transition-all duration-200 hover:shadow-xl hover:shadow-sky-950/20">
        <!-- Visual Canvas Banner -->
        <div 
          class="relative h-44 w-full flex flex-col justify-between p-4 cursor-pointer overflow-hidden"
          style="background: radial-gradient(circle at 80% 20%, ${color}25 0%, #0b1120 75%);"
          onclick="selectGameById('${game.id}')"
        >
          <div class="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

          <div class="relative z-10 flex items-center justify-between w-full">
            <div class="flex items-center gap-2">
              ${game.badge ? `<span class="text-[11px] font-bold text-sky-400 tracking-wider uppercase">${game.badge}</span>` : ''}
              ${game.isCustom ? `<span class="text-[11px] font-bold text-amber-400 tracking-wider uppercase">Custom</span>` : ''}
            </div>
            <button
              onclick="event.stopPropagation(); toggleFavorite('${game.id}')"
              class="p-1.5 rounded-md bg-slate-900/60 hover:bg-slate-800 text-slate-300 hover:text-rose-400 transition-colors border border-slate-700/60 cursor-pointer"
              title="${isFav ? 'Remove from favorites' : 'Add to favorites'}"
            >
              <svg class="w-4 h-4 ${isFav ? 'fill-rose-500 text-rose-500' : 'fill-none stroke-currentColor'}" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
            </button>
          </div>

          <div class="relative z-10 my-auto flex flex-col items-center justify-center transform group-hover:scale-105 transition-transform duration-200">
            <div 
              class="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg border"
              style="background-color: #0f172a; border-color: ${color}55; color: ${color};"
            >
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>
            </div>
          </div>

          <div class="absolute inset-0 bg-slate-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-3 backdrop-blur-[2px]">
            <button 
              onclick="event.stopPropagation(); selectGameById('${game.id}')"
              class="flex items-center gap-2 px-4 py-2 bg-sky-500 hover:bg-sky-400 text-white font-semibold text-xs rounded-lg transition-colors cursor-pointer shadow-lg"
            >
              <svg class="w-4 h-4 fill-white" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              <span>Play Now</span>
            </button>
          </div>
        </div>

        <!-- Card Body -->
        <div class="p-4 flex flex-col flex-1 justify-between bg-slate-900/80">
          <div>
            <div class="flex items-center gap-2 text-xs text-slate-400 mb-1.5 font-medium">
              <span class="text-sky-400">${game.category}</span>
              <span aria-hidden="true">·</span>
              <span class="flex items-center gap-1">
                <svg class="w-3.5 h-3.5 fill-amber-400 text-amber-400 inline" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <span class="text-slate-200 font-semibold">${rating}</span>
              </span>
              <span aria-hidden="true">·</span>
              <span class="font-mono tabular-nums">${plays} plays</span>
            </div>

            <h3 
              class="text-base font-bold text-white group-hover:text-sky-300 transition-colors cursor-pointer line-clamp-1"
              onclick="selectGameById('${game.id}')"
            >
              ${game.title}
            </h3>

            <p class="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
              ${game.description}
            </p>
          </div>

          <div class="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between">
            <button
              onclick="event.stopPropagation(); inspectIframe('${game.id}')"
              class="flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-200 transition-colors font-mono cursor-pointer"
              title="Inspect stored iframe tag"
            >
              <svg class="w-3.5 h-3.5 text-sky-400 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
              <span>&lt;iframe/&gt;</span>
            </button>

            <button
              onclick="selectGameById('${game.id}')"
              class="flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors cursor-pointer"
            >
              <span>Play</span>
              <svg class="w-3.5 h-3.5 fill-sky-400 inline" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function renderPlayer() {
  const container = document.getElementById('player-overlay');
  if (!container) return;

  if (!state.activeGame) {
    container.classList.add('hidden');
    container.innerHTML = '';
    return;
  }

  const game = state.activeGame;
  const isFav = state.favorites.includes(game.id);
  const otherGames = state.games.filter(g => g.id !== game.id).slice(0, 4);

  container.classList.remove('hidden');
  container.innerHTML = `
    <div class="fixed inset-0 z-50 overflow-y-auto bg-slate-950/95 backdrop-blur-md flex flex-col">
      <!-- Top Console Bar -->
      <div class="border-b border-slate-800 bg-slate-900/90 px-4 sm:px-6 py-3 flex items-center justify-between gap-4 sticky top-0 z-20">
        <div class="flex items-center gap-3">
          <button
            onclick="closeGame()"
            class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold transition-colors cursor-pointer border border-slate-700"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
            <span>All Games</span>
          </button>
          
          <div class="h-4 w-px bg-slate-800 hidden sm:block"></div>

          <div>
            <div class="flex items-center gap-2">
              <h2 class="text-base font-bold text-white flex items-center gap-2">
                ${game.title}
              </h2>
              <span class="text-xs text-sky-400 font-medium">(${game.category})</span>
            </div>
          </div>
        </div>

        <!-- Action Controls -->
        <div class="flex items-center gap-2">
          <button
            onclick="toggleIframeInspector()"
            class="p-2 rounded-lg text-xs font-medium flex items-center gap-1.5 border transition-colors cursor-pointer ${
              state.showIframeCode 
                ? 'bg-sky-500/20 text-sky-300 border-sky-500/40' 
                : 'bg-slate-800/80 hover:bg-slate-700 text-slate-300 border-slate-700'
            }"
            title="Inspect stored iframe code and JSON"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
            <span class="hidden md:inline">Iframe Config</span>
          </button>

          <button
            onclick="toggleFavorite('${game.id}'); renderPlayer();"
            class="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors cursor-pointer"
            title="${isFav ? 'Remove from favorites' : 'Add to favorites'}"
          >
            <svg class="w-4 h-4 ${isFav ? 'fill-rose-500 text-rose-500' : 'fill-none stroke-currentColor'}" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
          </button>

          <button
            onclick="reloadIframe()"
            class="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors cursor-pointer"
            title="Reload game frame"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
          </button>

          <button
            onclick="toggleTheater()"
            class="p-2 rounded-lg border transition-colors cursor-pointer hidden sm:flex ${
              state.isTheater
                ? 'bg-sky-500/20 text-sky-300 border-sky-500/40'
                : 'bg-slate-800/80 hover:bg-slate-700 text-slate-300 border-slate-700'
            }"
            title="${state.isTheater ? 'Normal Width' : 'Theater Mode'}"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/></svg>
          </button>

          <button
            onclick="togglePlayerFullscreen()"
            class="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors cursor-pointer"
            title="Toggle Fullscreen"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/></svg>
          </button>

          <button
            onclick="window.open('${game.iframeUrl}', '_blank')"
            class="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors cursor-pointer"
            title="Open in separate tab"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
          </button>

          <button
            onclick="closeGame()"
            class="p-2 rounded-lg bg-slate-800/80 hover:bg-rose-900/30 hover:text-rose-400 text-slate-400 border border-slate-700 transition-colors cursor-pointer ml-1"
            title="Close game"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
        </div>
      </div>

      <!-- Main Game Stage -->
      <div class="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 flex flex-col gap-6">
        <div 
          id="iframe-box"
          class="relative mx-auto w-full transition-all duration-300 rounded-xl overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl flex flex-col ${
            state.isTheater ? 'max-w-6xl' : 'max-w-4xl'
          }"
          style="min-height: 580px;"
        >
          <iframe
            id="active-game-iframe"
            src="${game.iframeUrl}"
            title="${game.title}"
            class="w-full h-full flex-1 border-0"
            style="min-height: 580px; background-color: #0f172a;"
            allowfullscreen
            allow="autoplay; gamepad; keyboard"
            sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
          ></iframe>
        </div>

        ${state.showIframeCode ? `
          <div class="mx-auto w-full bg-slate-900 border border-sky-500/30 rounded-xl p-5 ${state.isTheater ? 'max-w-6xl' : 'max-w-4xl'}">
            <div class="flex items-center justify-between mb-3 pb-3 border-b border-slate-800">
              <div class="flex items-center gap-2">
                <svg class="w-5 h-5 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
                <h4 class="text-sm font-bold text-white">Stored JSON Iframe Record</h4>
                <span class="text-xs text-slate-400">(Source: games.json)</span>
              </div>
              <button
                onclick="copyText(\`${game.iframeCode.replace(/`/g, '\\`')}\`)"
                class="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono rounded border border-slate-700 transition-colors cursor-pointer"
              >
                Copy &lt;iframe/&gt;
              </button>
            </div>
            <div class="bg-slate-950 p-3 rounded-lg border border-slate-800 text-sky-300 font-mono text-xs break-all select-all">
              ${escapeHtml(game.iframeCode)}
            </div>
          </div>
        ` : ''}

        <!-- Details Strip -->
        <div class="mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-6 ${state.isTheater ? 'max-w-6xl' : 'max-w-4xl'}">
          <div class="md:col-span-2 bg-slate-900/80 border border-slate-800 rounded-xl p-5">
            <h3 class="text-sm font-bold text-white mb-2 flex items-center gap-2">
              <svg class="w-4 h-4 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              <span>About ${game.title}</span>
            </h3>
            <p class="text-sm text-slate-300 leading-relaxed">${game.description}</p>
            <div class="mt-4 pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-4 text-xs text-slate-400">
              <div><span class="text-slate-500">Category: </span><span class="text-slate-200 font-medium">${game.category}</span></div>
              <span aria-hidden="true">·</span>
              <div><span class="text-slate-500">Rating: </span><span class="text-amber-400 font-bold">${game.rating} / 5.0</span></div>
              <span aria-hidden="true">·</span>
              <div><span class="text-slate-500">Source: </span><span class="font-mono text-sky-400">${game.iframeUrl}</span></div>
            </div>
          </div>

          <div class="bg-slate-900/80 border border-slate-800 rounded-xl p-5 flex flex-col justify-between">
            <div>
              <h3 class="text-sm font-bold text-white mb-3 flex items-center gap-2">
                <svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/></svg>
                <span>Controls Guide</span>
              </h3>
              <ul class="space-y-2 text-xs text-slate-300">
                ${(game.controls || []).map(c => `
                  <li class="flex items-start gap-2">
                    <span class="text-emerald-400 font-bold">›</span>
                    <span>${c}</span>
                  </li>
                `).join('')}
              </ul>
            </div>
            <div class="mt-4 pt-3 border-t border-slate-800/80 text-[11px] text-slate-500">
              Tip: Click inside the game window once if keyboard controls aren't responding.
            </div>
          </div>
        </div>

        <!-- More Games Strip -->
        <div class="mx-auto w-full ${state.isTheater ? 'max-w-6xl' : 'max-w-4xl'} pt-4 border-t border-slate-800">
          <div class="flex items-center justify-between mb-4">
            <h4 class="text-sm font-bold text-slate-300">More Unblocked Games</h4>
            <span class="text-xs text-slate-500">Stored in games.json</span>
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
            ${otherGames.map(g => `
              <div
                onclick="selectGameById('${g.id}')"
                class="bg-slate-900/60 border border-slate-800 hover:border-sky-500/50 rounded-lg p-3 cursor-pointer transition-all hover:bg-slate-800/80 flex items-center gap-3"
              >
                <div 
                  class="w-8 h-8 rounded-md flex items-center justify-center font-bold text-xs shrink-0"
                  style="background-color: ${g.accentColor}25; color: ${g.accentColor};"
                >▶</div>
                <div class="min-w-0">
                  <div class="text-xs font-semibold text-white truncate">${g.title}</div>
                  <div class="text-[10px] text-slate-400 truncate">${g.category}</div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `;
}

function escapeHtml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}

function selectGameById(id) {
  const g = state.games.find(x => x.id === id);
  if (g) selectGame(g);
}

function inspectIframe(id) {
  const g = state.games.find(x => x.id === id);
  if (g) {
    selectGame(g);
    state.showIframeCode = true;
    renderPlayer();
  }
}

function toggleIframeInspector() {
  state.showIframeCode = !state.showIframeCode;
  renderPlayer();
}

function toggleTheater() {
  state.isTheater = !state.isTheater;
  renderPlayer();
}

function togglePlayerFullscreen() {
  const box = document.getElementById('iframe-box');
  if (!box) return;
  if (!document.fullscreenElement) {
    box.requestFullscreen().catch(() => {});
  } else {
    document.exitFullscreen().catch(() => {});
  }
}

function reloadIframe() {
  const ifr = document.getElementById('active-game-iframe');
  if (ifr && state.activeGame) {
    ifr.src = state.activeGame.iframeUrl;
  }
}

function setCategory(cat) {
  state.selectedCategory = cat;
  renderCategories();
  renderGames();
}

function resetFilters() {
  state.searchQuery = '';
  state.selectedCategory = 'All';
  const input = document.getElementById('search-input');
  if (input) input.value = '';
  renderCategories();
  renderGames();
}

function copyText(txt) {
  navigator.clipboard.writeText(txt).then(() => {
    alert('Copied to clipboard!');
  }).catch(() => {});
}

// Global scope bindings for inline HTML handlers
window.toggleCloak = toggleCloak;
window.toggleFavorite = toggleFavorite;
window.selectGameById = selectGameById;
window.inspectIframe = inspectIframe;
window.closeGame = closeGame;
window.playRandomGame = playRandomGame;
window.setCategory = setCategory;
window.resetFilters = resetFilters;
window.toggleIframeInspector = toggleIframeInspector;
window.toggleTheater = toggleTheater;
window.togglePlayerFullscreen = togglePlayerFullscreen;
window.reloadIframe = reloadIframe;
window.copyText = copyText;

// Modal functions
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.remove('hidden');
    if (id === 'json-modal') {
      const preview = document.getElementById('json-preview');
      if (preview) preview.textContent = JSON.stringify(state.games, null, 2);
    }
  }
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.add('hidden');
}
window.openModal = openModal;
window.closeModal = closeModal;

// Initialize app when DOM is ready
function render() {
  renderHeader();
  renderHeroStats();
  renderCategories();
  renderGames();
  renderPlayer();
}

document.addEventListener('DOMContentLoaded', () => {
  render();

  // Search listener
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', e => {
      state.searchQuery = e.target.value;
      renderGames();
    });
  }

  // Sort listener
  const sortSelect = document.getElementById('sort-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', e => {
      state.sortBy = e.target.value;
      renderGames();
    });
  }

  // Add Game Form
  const addForm = document.getElementById('add-game-form');
  if (addForm) {
    addForm.addEventListener('submit', e => {
      e.preventDefault();
      const title = document.getElementById('add-title').value.trim();
      const category = document.getElementById('add-cat').value;
      const accentColor = document.getElementById('add-color').value;
      const iframeCode = document.getElementById('add-iframe').value.trim();
      const desc = document.getElementById('add-desc').value.trim();

      const srcMatch = iframeCode.match(/src=["']([^"']+)["']/i);
      const url = srcMatch ? srcMatch[1] : './games/2048.html';

      const newGame = {
        id: 'custom-' + Date.now(),
        title,
        category,
        description: desc || 'Custom game embedded via iframe.',
        iframeUrl: url,
        iframeCode: iframeCode || `<iframe src="${url}" width="100%" height="600" allowfullscreen></iframe>`,
        accentColor: accentColor || '#38bdf8',
        badge: 'Custom',
        rating: 5.0,
        plays: 1,
        controls: ['Standard controls'],
        isCustom: true
      };

      state.games.unshift(newGame);
      safeSetStorage('arcadevault_games', state.games);
      closeModal('add-modal');
      render();
      selectGame(newGame);
    });
  }

  // Export JSON
  window.exportJson = () => {
    const jsonStr = JSON.stringify(state.games, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'games.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Reset Default Games
  window.resetDefaultGames = () => {
    if (confirm('Reset games database to default 10 games?')) {
      state.games = DEFAULT_GAMES;
      safeSetStorage('arcadevault_games', DEFAULT_GAMES);
      closeModal('json-modal');
      render();
    }
  };
});
