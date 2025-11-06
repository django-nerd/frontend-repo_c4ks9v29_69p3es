import { useState, useEffect } from 'react';
import { Moon, Sun, Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [theme, setTheme] = useState('light');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = stored || (prefersDark ? 'dark' : 'light');
    setTheme(initial);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Chat', href: '#chat' },
    { label: 'Journal', href: '#features' },
    { label: 'Settings', href: '#settings' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur bg-white/60 dark:bg-neutral-900/60 border-b border-neutral-200/60 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-amber-400" />
          <span className="font-semibold text-neutral-900 dark:text-white">MindMate</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition"
            >
              {item.label}
            </a>
          ))}
          <button
            aria-label="Toggle theme"
            onClick={toggleTheme}
            className="p-2 rounded-full border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
          >
            {theme === 'dark' ? (
              <Sun size={18} className="text-yellow-400" />
            ) : (
              <Moon size={18} className="text-indigo-600" />
            )}
          </button>
        </nav>
        <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md border border-neutral-200 dark:border-neutral-800"
          onClick={() => setOpen((o) => !o)}
          aria-label="Open menu"
        >
          <Menu size={20} />
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden px-4 pb-4 space-y-3 border-t border-neutral-200 dark:border-neutral-800"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-neutral-700 dark:text-neutral-300"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => {
                toggleTheme();
                setOpen(false);
              }}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-neutral-200 dark:border-neutral-800"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              <span>Toggle theme</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
