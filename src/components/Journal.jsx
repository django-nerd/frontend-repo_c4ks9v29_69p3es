import { useEffect, useState } from 'react';
import { Calendar, Save } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Journal() {
  const todayKey = new Date().toISOString().slice(0, 10);
  const [mood, setMood] = useState('🙂');
  const [entry, setEntry] = useState('');
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('mindmate_journal') || '{}');
    if (data[todayKey]) {
      setMood(data[todayKey].mood);
      setEntry(data[todayKey].entry);
    }
  }, []);

  const save = () => {
    const data = JSON.parse(localStorage.getItem('mindmate_journal') || '{}');
    data[todayKey] = { mood, entry, updatedAt: new Date().toISOString() };
    localStorage.setItem('mindmate_journal', JSON.stringify(data));
    setSaved(true);
    setTimeout(() => setSaved(false), 1200);
  };

  return (
    <section id="journal" className="relative">
      <div className="mx-auto max-w-3xl rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/70 backdrop-blur p-4 sm:p-6">
        <div className="flex items-center gap-2 mb-3 text-zinc-700 dark:text-zinc-300">
          <Calendar size={18} />
          <span className="font-medium">Today\'s Journal</span>
        </div>
        <div className="grid gap-3">
          <label className="text-sm text-zinc-600 dark:text-zinc-300">Mood</label>
          <div className="flex gap-2">
            {['🙂','😀','😐','😟','😢','😤'].map((m) => (
              <button
                key={m}
                onClick={() => setMood(m)}
                className={`text-xl rounded-lg border px-3 py-2 transition ${mood === m ? 'border-violet-400 bg-violet-50 dark:bg-violet-950' : 'border-zinc-200 dark:border-zinc-800'}`}
              >
                {m}
              </button>
            ))}
          </div>
          <label className="text-sm text-zinc-600 dark:text-zinc-300 mt-2">Entry</label>
          <textarea
            rows={5}
            value={entry}
            onChange={(e) => setEntry(e.target.value)}
            placeholder="Write a few lines about your day…"
            className="w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-4 py-3 text-sm outline-none focus:ring-2 ring-violet-400/50"
          />
          <motion.button
            whileTap={{ scale: 0.98 }}
            onClick={save}
            className="inline-flex items-center gap-2 w-fit rounded-xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 px-4 py-2 text-sm font-medium hover:opacity-90 transition"
          >
            <Save size={16} /> Save
          </motion.button>
          {saved && <div className="text-xs text-emerald-600 dark:text-emerald-400">Saved!</div>}
        </div>
      </div>
    </section>
  );
}
