export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-40 border-t border-white/10 bg-zinc-950/50 py-8 backdrop-blur-sm">
      <div className="section-shell flex flex-col items-center justify-between gap-4 text-center md:flex-row md:gap-8">
        <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-400">
          © {currentYear} Bishal Biswas. All rights reserved.
        </p>
        <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-500">
          Built with Next.js & Framer Motion
        </p>
      </div>
    </footer>
  );
}
