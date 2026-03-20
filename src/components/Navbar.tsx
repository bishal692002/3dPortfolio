'use client';

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const links = [
  { label: 'About', id: 'about' },
  { label: 'Education', id: 'education' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'creations' },
  { label: 'Certifications', id: 'certifications' },
  { label: 'Contact', id: 'contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState('about');
  const { scrollY } = useScroll();
  const blurOpacity = useTransform(scrollY, [0, 100], [0, 1]);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Use Intersection Observer for accurate section detection
    observerRef.current = new IntersectionObserver(
      (entries) => {
        // Find the section that is most visible in viewport
        let mostVisibleEntry = entries[0];
        for (const entry of entries) {
          if (entry.isIntersecting && entry.intersectionRatio > (mostVisibleEntry?.intersectionRatio || 0)) {
            mostVisibleEntry = entry;
          }
        }
        if (mostVisibleEntry?.isIntersecting) {
          setActiveId(mostVisibleEntry.target.id);
        }
      },
      {
        threshold: [0.3, 0.5, 0.7], // Multiple thresholds for smooth detection
        rootMargin: '-64px 0px -50% 0px', // Account for fixed header (64px) and viewport center
      }
    );

    // Observe all section elements
    links.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element && observerRef.current) {
        observerRef.current.observe(element);
      }
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setOpen(false);
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div style={{ opacity: blurOpacity }} className="absolute inset-0 border-b border-white/10 bg-black/35 backdrop-blur-xl" />

      <nav className="section-shell relative flex h-16 items-center justify-between text-sm uppercase tracking-[0.16em] text-zinc-200">
        <a href="#about" className="chapter-title text-base tracking-[0.2em] text-zinc-100">
          BB
        </a>

        <div className="hidden items-center gap-2 md:flex">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`rounded-full px-3 py-1.5 text-[11px] tracking-[0.14em] transition-all ${
                activeId === link.id
                  ? 'bg-white/10 text-zinc-100'
                  : 'text-zinc-300 hover:bg-white/5 hover:text-zinc-100'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/5 md:hidden"
        >
          {open ? <XMarkIcon className="h-5 w-5" /> : <Bars3Icon className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="section-shell md:hidden">
          <div className="glass mb-4 rounded-2xl p-4">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`block w-full rounded-xl px-3 py-3 text-xs uppercase tracking-[0.18em] transition-colors text-left ${
                  activeId === link.id ? 'bg-white/10 text-zinc-100' : 'text-zinc-200 hover:bg-white/10'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
