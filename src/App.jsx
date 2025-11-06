import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import { motion } from 'framer-motion';

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 selection:bg-fuchsia-200/60 dark:selection:bg-fuchsia-400/30">
      <Navbar />
      <main>
        <Hero />
        <section id="chat" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 bg-white/60 dark:bg-neutral-900/60 backdrop-blur"
            >
              <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">Chat preview</h2>
              <p className="mt-2 text-neutral-700 dark:text-neutral-300">Talk to your AI companion. Offline-ready chat syncs when you’re back online.</p>
              <div className="mt-4 grid gap-3">
                <div className="self-start max-w-[80%] rounded-2xl px-4 py-3 bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100">
                  Hey MindMate, I feel a bit overwhelmed today.
                </div>
                <div className="self-end max-w-[80%] rounded-2xl px-4 py-3 bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-amber-400 text-white">
                  Thanks for sharing. Let’s take a deep breath together. What’s one small thing we can focus on right now?
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        <Features />
      </main>
      <Footer />
    </div>
  );
}
