import React, { useState } from 'react';
import { X, Plus, Code, Globe } from 'lucide-react';

export const AddGameModal = ({
  isOpen,
  onClose,
  onAddGame,
}) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Arcade');
  const [description, setDescription] = useState('');
  const [inputMode, setInputMode] = useState('iframe');
  const [iframeCode, setIframeCode] = useState('');
  const [directUrl, setDirectUrl] = useState('');
  const [controlsText, setControlsText] = useState('Arrow Keys: Move\nSpace: Action');
  const [accentColor, setAccentColor] = useState('#38bdf8');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!title.trim()) {
      setError('Please provide a game title.');
      return;
    }

    let resolvedUrl = '';
    let resolvedIframeCode = '';

    if (inputMode === 'iframe') {
      if (!iframeCode.trim()) {
        setError('Please paste an iframe embed code.');
        return;
      }
      const srcMatch = iframeCode.match(/src=["']([^"']+)["']/i);
      if (!srcMatch || !srcMatch[1]) {
        setError('Could not parse a valid src attribute from the iframe code.');
        return;
      }
      resolvedUrl = srcMatch[1];
      resolvedIframeCode = iframeCode.trim();
    } else {
      if (!directUrl.trim()) {
        setError('Please provide a valid game URL or relative path.');
        return;
      }
      resolvedUrl = directUrl.trim();
      resolvedIframeCode = `<iframe src="${resolvedUrl}" width="100%" height="600" frameborder="0" allowfullscreen sandbox="allow-scripts allow-same-origin allow-popups"></iframe>`;
    }

    const newGame = {
      id: 'custom-' + Date.now(),
      title: title.trim(),
      category: category,
      description: description.trim() || 'Custom unblocked game embedded via iframe.',
      iframeUrl: resolvedUrl,
      iframeCode: resolvedIframeCode,
      accentColor: accentColor,
      badge: 'Custom',
      rating: 5.0,
      plays: 1,
      controls: controlsText.split('\n').filter(line => line.trim().length > 0),
      isCustom: true
    };

    onAddGame(newGame);
    onClose();

    // Reset form
    setTitle('');
    setDescription('');
    setIframeCode('');
    setDirectUrl('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
      <div className="bg-slate-900 border border-slate-800 rounded-xl max-w-lg w-full overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800">
          <div>
            <h3 className="text-base font-bold text-white">Add Game to JSON Database</h3>
            <p className="text-xs text-slate-400 mt-0.5">Embed any web game via iframe and store in catalog</p>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {error && (
            <div className="p-3 bg-rose-500/10 border border-rose-500/30 rounded-lg text-rose-400 text-xs">
              {error}
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">Game Title</label>
            <input
              type="text"
              required
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="e.g. Slope 3D, Super Mario, Cookie Clicker"
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-sky-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">Category</label>
              <select
                value={category}
                onChange={e => setCategory(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-sky-500"
              >
                <option value="Arcade">Arcade</option>
                <option value="Puzzle">Puzzle</option>
                <option value="Action">Action</option>
                <option value="Retro">Retro</option>
                <option value="Sports">Sports</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">Accent Color</label>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={accentColor}
                  onChange={e => setAccentColor(e.target.value)}
                  className="w-9 h-9 rounded bg-slate-950 border border-slate-800 cursor-pointer p-0.5"
                />
                <span className="text-xs font-mono text-slate-400">{accentColor}</span>
              </div>
            </div>
          </div>

          {/* Input Format Selector */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">Embed Method</label>
            <div className="grid grid-cols-2 gap-2 bg-slate-950 p-1 rounded-lg border border-slate-800">
              <button
                type="button"
                onClick={() => setInputMode('iframe')}
                className={`flex items-center justify-center gap-1.5 py-1.5 text-xs font-medium rounded-md transition-colors ${
                  inputMode === 'iframe'
                    ? 'bg-sky-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Code className="w-3.5 h-3.5" />
                <span>Raw &lt;iframe&gt; Code</span>
              </button>
              <button
                type="button"
                onClick={() => setInputMode('url')}
                className={`flex items-center justify-center gap-1.5 py-1.5 text-xs font-medium rounded-md transition-colors ${
                  inputMode === 'url'
                    ? 'bg-sky-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Globe className="w-3.5 h-3.5" />
                <span>Direct Game URL</span>
              </button>
            </div>
          </div>

          {inputMode === 'iframe' ? (
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-semibold text-slate-300">
                  Iframe HTML Snippet
                </label>
                <span className="text-[11px] text-slate-500">Stored in games.json</span>
              </div>
              <textarea
                rows={3}
                value={iframeCode}
                onChange={e => setIframeCode(e.target.value)}
                placeholder='<iframe src="https://..." width="100%" height="600" allowfullscreen></iframe>'
                className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-xs font-mono text-sky-300 placeholder-slate-600 focus:outline-none focus:border-sky-500"
              />
            </div>
          ) : (
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Game URL or File Path
              </label>
              <input
                type="text"
                value={directUrl}
                onChange={e => setDirectUrl(e.target.value)}
                placeholder="https://example.com/game or /games/mygame.html"
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-sky-500"
              />
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">Brief Description</label>
            <input
              type="text"
              value={description}
              onChange={e => setDescription(e.target.value)}
              placeholder="e.g. Fast arcade game playable directly in browser"
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-sky-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Controls (One instruction per line)
            </label>
            <textarea
              rows={2}
              value={controlsText}
              onChange={e => setControlsText(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-xs text-slate-300 placeholder-slate-600 focus:outline-none focus:border-sky-500"
            />
          </div>

          {/* Submit Actions */}
          <div className="pt-3 border-t border-slate-800 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex items-center gap-1.5 px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer shadow-md shadow-sky-600/30"
            >
              <Plus className="w-4 h-4" />
              <span>Save Game to Catalog</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
