import { useEffect, useRef, useState } from 'react';
import { Send, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function Message({ role, content }) {
  return (
    <div className={`flex ${role === 'user' ? 'justify-end' : 'justify-start'}`}>
      <div className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm leading-relaxed shadow-sm ${
        role === 'user'
          ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900'
          : 'bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100'
      }`}>
        {content}
      </div>
    </div>
  );
}

export default function ChatWidget() {
  const [messages, setMessages] = useState(() => {
    const cached = localStorage.getItem('mindmate_messages');
    return cached ? JSON.parse(cached) : [
      { role: 'assistant', content: 'Hi! I\'m your MindMate. How are you feeling today?' }
    ];
  });
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const endRef = useRef(null);

  useEffect(() => {
    localStorage.setItem('mindmate_messages', JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const sendMessage = async (e) => {
    e?.preventDefault();
    if (!input.trim()) return;
    const userMsg = { role: 'user', content: input.trim() };
    setMessages((m) => [...m, userMsg]);
    setInput('');

    // Simulated AI for demo (offline-friendly)
    setLoading(true);
    setTimeout(() => {
      const reply = {
        role: 'assistant',
        content:
          "I hear you. Try a 4-7-8 breath: inhale 4s, hold 7s, exhale 8s. Want another tip?",
      };
      setMessages((m) => [...m, reply]);
      setLoading(false);
    }, 800);
  };

  return (
    <section id="chat" className="relative">
      <div className="mx-auto max-w-3xl rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/70 backdrop-blur p-4 sm:p-6">
        <div className="flex items-center gap-2 mb-3 text-zinc-700 dark:text-zinc-300">
          <Sparkles size={18} />
          <span className="font-medium">MindMate Chat</span>
        </div>
        <div className="h-[340px] overflow-y-auto space-y-3 pr-1">
          <AnimatePresence initial={false}>
            {messages.map((m, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                <Message role={m.role} content={m.content} />
              </motion.div>
            ))}
          </AnimatePresence>
          {loading && (
            <div className="text-xs text-zinc-500">MindMate is thinking…</div>
          )}
          <div ref={endRef} />
        </div>
        <form onSubmit={sendMessage} className="mt-4 flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message…"
            className="flex-1 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-4 py-3 text-sm outline-none focus:ring-2 ring-violet-400/50"
          />
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 px-4 py-3 text-sm font-medium hover:opacity-90 transition"
          >
            <Send size={16} />
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
