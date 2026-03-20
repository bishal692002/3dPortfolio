'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

export default function Overlay() {
  const { scrollYProgress } = useScroll();

  // Chapter One: Name + Role — exits first (fade out + slide up)
  const chapterOneOpacity = useTransform(scrollYProgress, [0, 0.2, 0.26], [1, 1, 0]);
  const chapterOneY = useTransform(scrollYProgress, [0, 0.26], [0, -60]);

  // Chapter Two: Engineering + Designing — enters after delay (fade in + slide from sides)
  const chapterTwoOpacity = useTransform(scrollYProgress, [0.26, 0.38, 0.55, 0.62], [0, 1, 1, 0]);
  const chapterTwoX = useTransform(scrollYProgress, [0.26, 0.55], [-90, 0]);


  return (
    <div className="pointer-events-none absolute inset-0 z-30">
      <div className="sticky top-0 h-screen w-full">
        <div className="section-shell relative h-full">
          <motion.div
            style={{ opacity: chapterOneOpacity, y: chapterOneY }}
            className="absolute inset-0 flex items-center px-6 sm:px-10 md:px-12"
          >
            <div className="w-full">
              <div className="flex items-center justify-between gap-8">
                <h1 className="chapter-title flex-1 max-w-md text-left text-4xl leading-tight text-zinc-100 sm:text-5xl md:text-6xl lg:text-7xl">
                  Bishal Biswas
                </h1>
                <h1 className="chapter-title flex-1 max-w-md text-right text-4xl leading-tight text-zinc-100 sm:text-5xl md:text-6xl lg:text-7xl">
                  Software Developer
                </h1>
              </div>
            </div>
          </motion.div>

          <motion.div
            style={{ opacity: chapterTwoOpacity, x: chapterTwoX }}
            className="absolute inset-0 flex items-center px-6 sm:px-10"
          >
            <div className="w-full">
              <h2 className="chapter-title max-w-xl text-left text-3xl leading-tight text-zinc-100 sm:text-5xl md:text-6xl">
                Engineering systems.
              </h2>
              <h2 className="chapter-title mt-2 ml-auto max-w-xl translate-x-8 text-right text-3xl leading-tight text-zinc-100 sm:translate-x-12 sm:text-5xl md:translate-x-20 md:text-6xl lg:translate-x-28">
                Designing experiences.
              </h2>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            style={{
              opacity: useTransform(scrollYProgress, [0, 0.1, 0.82, 0.92], [0, 1, 1, 0]),
            }}
            className="pointer-events-none fixed bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
          >
            <p className="text-xs uppercase tracking-[0.16em] text-zinc-400">Scroll to explore</p>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
              className="flex flex-col items-center"
            >
              <svg
                className="h-5 w-5 text-zinc-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
