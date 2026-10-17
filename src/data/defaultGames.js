export const DEFAULT_GAMES = [
  {
    id: "2048",
    title: "2048 Classic",
    category: "Puzzle",
    description: "Combine numerical tiles strategically to reach the elusive 2048 tile in this timeless brain teaser.",
    iframeUrl: "/games/2048.html",
    iframeCode: "<iframe src=\"/games/2048.html\" width=\"100%\" height=\"600\" frameborder=\"0\" allowfullscreen sandbox=\"allow-scripts allow-same-origin allow-popups\"></iframe>",
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
    iframeUrl: "/games/snake.html",
    iframeCode: "<iframe src=\"/games/snake.html\" width=\"100%\" height=\"620\" frameborder=\"0\" allowfullscreen sandbox=\"allow-scripts allow-same-origin allow-popups\"></iframe>",
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
    iframeUrl: "/games/tetris.html",
    iframeCode: "<iframe src=\"/games/tetris.html\" width=\"100%\" height=\"650\" frameborder=\"0\" allowfullscreen sandbox=\"allow-scripts allow-same-origin allow-popups\"></iframe>",
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
    iframeUrl: "/games/flappy.html",
    iframeCode: "<iframe src=\"/games/flappy.html\" width=\"100%\" height=\"620\" frameborder=\"0\" allowfullscreen sandbox=\"allow-scripts allow-same-origin allow-popups\"></iframe>",
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
    iframeUrl: "/games/breakout.html",
    iframeCode: "<iframe src=\"/games/breakout.html\" width=\"100%\" height=\"600\" frameborder=\"0\" allowfullscreen sandbox=\"allow-scripts allow-same-origin allow-popups\"></iframe>",
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
    iframeUrl: "/games/pong.html",
    iframeCode: "<iframe src=\"/games/pong.html\" width=\"100%\" height=\"520\" frameborder=\"0\" allowfullscreen sandbox=\"allow-scripts allow-same-origin allow-popups\"></iframe>",
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
    iframeUrl: "/games/space-invaders.html",
    iframeCode: "<iframe src=\"/games/space-invaders.html\" width=\"100%\" height=\"650\" frameborder=\"0\" allowfullscreen sandbox=\"allow-scripts allow-same-origin allow-popups\"></iframe>",
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
    iframeUrl: "/games/dino.html",
    iframeCode: "<iframe src=\"/games/dino.html\" width=\"100%\" height=\"420\" frameborder=\"0\" allowfullscreen sandbox=\"allow-scripts allow-same-origin allow-popups\"></iframe>",
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
    iframeUrl: "/games/minesweeper.html",
    iframeCode: "<iframe src=\"/games/minesweeper.html\" width=\"100%\" height=\"550\" frameborder=\"0\" allowfullscreen sandbox=\"allow-scripts allow-same-origin allow-popups\"></iframe>",
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
    iframeUrl: "/games/connect4.html",
    iframeCode: "<iframe src=\"/games/connect4.html\" width=\"100%\" height=\"550\" frameborder=\"0\" allowfullscreen sandbox=\"allow-scripts allow-same-origin allow-popups\"></iframe>",
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
