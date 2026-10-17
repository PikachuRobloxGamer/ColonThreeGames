import React, { useState } from 'react';
import { X, Copy, Check, Download, Upload, RotateCcw, Code2 } from 'lucide-react';

export const JsonViewerModal = ({
  isOpen,
  onClose,
  games,
  onImportJson,
  onResetDefaults,
}) => {
  const [copied, setCopied] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedJson, setEditedJson] = useState('');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const jsonString = JSON.stringify(games, null, 2);

  const handleCopy = () => {
    navigator.clipboard.writeText(jsonString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'games.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleStartEdit = () => {
    setEditedJson(jsonString);
    setIsEditing(true);
    setError('');
  };

  const handleSaveEdit = () => {
    try {
      const parsed = JSON.parse(editedJson);
      if (!Array.isArray(parsed)) {
        throw new Error('JSON root must be an array of games.');
      }
      onImportJson(parsed);
      setIsEditing(false);
      setError('');
    } catch (err) {
      setError(err.message || 'Invalid JSON format');
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target?.result);
        if (Array.isArray(parsed)) {
          onImportJson(parsed);
          setError('');
        } else {
          setError('Imported JSON must be an array of games.');
        }
      } catch (err) {
        setError('Error parsing JSON file: ' + err.message);
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
      <div className="bg-slate-900 border border-slate-800 rounded-xl max-w-3xl w-full max-h-[85vh] flex flex-col overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">games.json Database</h3>
              <p className="text-xs text-slate-400">
                {games.length} games configured with iframe embeddings
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-lg border border-slate-700 transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>

            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-lg border border-slate-700 transition-colors cursor-pointer"
              title="Download games.json"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export</span>
            </button>

            <label className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-lg border border-slate-700 transition-colors cursor-pointer">
              <Upload className="w-3.5 h-3.5" />
              <span>Import</span>
              <input
                type="file"
                accept=".json"
                onChange={handleFileUpload}
                className="hidden"
              />
            </label>

            <button
              onClick={onClose}
              className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors ml-2"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Action bar */}
        <div className="px-6 py-2.5 bg-slate-950/60 border-b border-slate-800 flex items-center justify-between text-xs">
          <div className="flex items-center gap-3">
            {!isEditing ? (
              <button
                onClick={handleStartEdit}
                className="text-sky-400 hover:text-sky-300 font-semibold cursor-pointer"
              >
                Edit JSON Directly
              </button>
            ) : (
              <div className="flex items-center gap-2">
                <button
                  onClick={handleSaveEdit}
                  className="px-2.5 py-1 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded cursor-pointer"
                >
                  Save JSON Changes
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className="px-2.5 py-1 bg-slate-800 text-slate-300 hover:text-white rounded cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            )}
          </div>

          <button
            onClick={() => {
              if (window.confirm('Reset games database to default 10 games?')) {
                onResetDefaults();
                setIsEditing(false);
              }
            }}
            className="flex items-center gap-1 text-slate-400 hover:text-rose-400 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Defaults</span>
          </button>
        </div>

        {error && (
          <div className="px-6 py-2 bg-rose-500/10 border-b border-rose-500/20 text-rose-400 text-xs">
            {error}
          </div>
        )}

        {/* Content Box */}
        <div className="flex-1 overflow-auto p-4 bg-slate-950">
          {isEditing ? (
            <textarea
              value={editedJson}
              onChange={e => setEditedJson(e.target.value)}
              className="w-full h-full min-h-[400px] bg-slate-900 border border-slate-800 rounded-lg p-4 font-mono text-xs text-emerald-400 focus:outline-none focus:border-sky-500 leading-relaxed"
            />
          ) : (
            <pre className="font-mono text-xs text-emerald-400 leading-relaxed overflow-x-auto select-all">
              {jsonString}
            </pre>
          )}
        </div>
      </div>
    </div>
  );
};
