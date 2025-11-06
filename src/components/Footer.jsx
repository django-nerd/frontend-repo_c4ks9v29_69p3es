export default function Footer() {
  return (
    <footer className="py-10 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">© {new Date().getFullYear()} MindMate. Built for wellbeing.</p>
        <div className="flex items-center gap-6 text-sm">
          <a href="#settings" className="text-neutral-700 dark:text-neutral-300 hover:underline">Settings</a>
          <a href="#" className="text-neutral-700 dark:text-neutral-300 hover:underline">Privacy</a>
          <a href="#" className="text-neutral-700 dark:text-neutral-300 hover:underline">Terms</a>
        </div>
      </div>
    </footer>
  );
}
