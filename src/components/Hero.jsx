import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] flex items-center">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/10 to-white dark:from-neutral-900/80 dark:via-neutral-900/10 dark:to-neutral-900" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white">
            MindMate
          </h1>
          <p className="mt-4 text-lg text-neutral-700 dark:text-neutral-300">
            Your AI-powered mental wellness companion. Reflect, chat, and grow — even offline.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#chat" className="px-5 py-3 rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 font-medium shadow">
              Start chatting
            </a>
            <a href="#features" className="px-5 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200">
              Explore features
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
