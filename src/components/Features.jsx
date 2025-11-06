import { motion } from 'framer-motion';
import { MessageSquare, Notebook, Bell, WifiOff } from 'lucide-react';

const features = [
  {
    icon: MessageSquare,
    title: 'AI Chat Assistant',
    desc: 'Have thoughtful conversations with an AI designed for mindfulness and growth.',
  },
  {
    icon: Notebook,
    title: 'Daily Mood Journal',
    desc: 'Capture your mood and notes daily to see trends over time.',
  },
  {
    icon: WifiOff,
    title: 'Works Offline',
    desc: 'Continue journaling and chatting offline — we sync when you’re back online.',
  },
  {
    icon: Bell,
    title: 'Gentle Reminders',
    desc: 'Opt-in notifications to nudge you to check in with yourself.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white">What you get</h2>
          <p className="mt-2 text-neutral-700 dark:text-neutral-300">A focused set of tools to support your mental wellness journey.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-6 bg-white/60 dark:bg-neutral-900/60 backdrop-blur"
            >
              <div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-amber-400 mb-4 flex items-center justify-center">
                <Icon className="text-white" size={20} />
              </div>
              <h3 className="font-semibold text-neutral-900 dark:text-white">{title}</h3>
              <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-300">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
