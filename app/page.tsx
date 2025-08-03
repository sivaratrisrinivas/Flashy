"use client";
import React, { useState, useRef } from "react";

type Suggestion = { item: string; score: number };

export default function Home() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const debounceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const fetchSuggestions = async (q: string) => {
    if (!q.trim()) {
      setSuggestions([]);
      setLoading(false);
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(`/api/suggestions?query=${encodeURIComponent(q)}&limit=7`);
      if (res.ok) {
        const data = await res.json();
        setSuggestions(data);
      } else {
        setSuggestions([]);
      }
    } catch {
      setSuggestions([]);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setQuery(val);
    setActive(-1);
    if (debounceTimer.current) clearTimeout(debounceTimer.current);
    debounceTimer.current = setTimeout(() => fetchSuggestions(val), 250);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!suggestions.length) return;
    if (e.key === "ArrowDown") {
      setActive(a => Math.min(a + 1, suggestions.length - 1));
      e.preventDefault();
    } else if (e.key === "ArrowUp") {
      setActive(a => Math.max(a - 1, 0));
      e.preventDefault();
    } else if (e.key === "Enter" && active >= 0) {
      setQuery(suggestions[active].item);
      setSuggestions([]);
      e.preventDefault();
    } else if (e.key === "Escape") {
      setSuggestions([]);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 animate-gradient-slow">
      {/* Polished, centered project name */}
      <h1 className="mb-10 text-5xl font-black tracking-wide text-white drop-shadow-lg select-none [text-shadow:0_3px_12px_rgba(0,0,0,0.18)]">
        Flash
      </h1>
      <div className="relative w-full max-w-lg bg-white/10 backdrop-blur-md shadow-2xl rounded-3xl p-8 ring-1 ring-white/20">
        <div className="relative">
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder="Type something…"
            className="w-full px-6 py-4 bg-white/5 border-none rounded-full text-white placeholder-white/50 focus:outline-none focus:ring-4 focus:ring-white/30 transition-all duration-300 shadow-inner text-lg"
            autoComplete="off"
            spellCheck={false}
          />
          <div className="absolute top-full left-0 w-full mt-2">
            {loading && (
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 text-white/70 animate-pulse text-center">
                Loading...
              </div>
            )}
            {!loading && suggestions.length > 0 && (
              <ul className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl ring-1 ring-white/20">
                {suggestions.map((sug, idx) => (
                  <li
                    key={sug.item}
                    onClick={() => {
                      setQuery(sug.item);
                      setSuggestions([]);
                      inputRef.current?.focus();

                      // New: Increment score on selection
                      fetch('/api/suggestions', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ item: sug.item, increment: 1 })
                      }).catch(() => console.error('Failed to update score'));
                    }}
                    className={`flex justify-between px-6 py-3 cursor-pointer transition-all duration-200 ${active === idx ? "bg-white/20 scale-105" : "hover:bg-white/10"
                      } text-white text-lg`}
                  >
                    <span className="font-light">{sug.item}</span>
                    <span className="text-sm opacity-70">(Score: {sug.score})</span>
                  </li>
                ))}
              </ul>
            )}
            {!loading && query.length > 0 && suggestions.length === 0 && (
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 text-white/70 text-center">
                No suggestions found
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
