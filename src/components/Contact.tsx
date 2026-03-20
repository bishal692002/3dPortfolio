'use client';

import { motion } from 'framer-motion';
import { ArrowTopRightOnSquareIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
};

export default function Contact() {
  return (
    <section id="contact" className="relative z-40 overflow-hidden bg-transparent py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(99,102,241,0.15),transparent_40%),radial-gradient(circle_at_80%_35%,rgba(14,165,233,0.1),transparent_45%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/10 via-transparent to-zinc-950/40" />
      </div>

      <div className="section-shell relative z-10">
        <motion.div {...fadeUp} viewport={{ once: true, amount: 0.35 }} className="mb-12 text-center md:mb-16">
          <p className="mb-4 text-xs uppercase tracking-[0.24em] text-zinc-400">Get in Touch</p>
          <h2 className="chapter-title mb-6 text-4xl text-zinc-100 sm:text-5xl">
            Let&apos;s build something <br className="hidden sm:inline" />
            impactful together.
          </h2>
          <p className="mx-auto max-w-lg text-lg text-zinc-300">
            I&apos;m always interested in hearing about new projects and opportunities.
          </p>
        </motion.div>

        <motion.div
          {...fadeUp}
          viewport={{ once: true, amount: 0.35 }}
          className="mx-auto grid max-w-3xl gap-6 md:grid-cols-2 lg:gap-8"
        >
          {/* Email */}
          <a
            href="mailto:bishal692002@gmail.com"
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/[0.08]"
          >
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-3">
                <EnvelopeIcon className="h-6 w-6 text-blue-400" />
              </div>
              <div className="flex-1">
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Email</p>
                <p className="mt-2 text-lg font-medium text-zinc-100 transition-colors group-hover:text-white">
                  bishal692002@gmail.com
                </p>
              </div>
            </div>
          </a>

          {/* Phone */}
          <a
            href="tel:+919531632450"
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/[0.08]"
          >
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-gradient-to-br from-emerald-500/20 to-teal-500/20 p-3">
                <PhoneIcon className="h-6 w-6 text-emerald-400" />
              </div>
              <div className="flex-1">
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Phone</p>
                <p className="mt-2 text-lg font-medium text-zinc-100 transition-colors group-hover:text-white">
                  +91-9531632450
                </p>
              </div>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/bishal2002"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/[0.08]"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20 p-3">
                  <svg className="h-6 w-6 text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">LinkedIn</p>
                  <p className="mt-2 text-lg font-medium text-zinc-100 transition-colors group-hover:text-white">
                    @bishal2002
                  </p>
                </div>
              </div>
              <ArrowTopRightOnSquareIcon className="h-5 w-5 text-zinc-500 transition-transform group-hover:translate-x-1 group-hover:text-zinc-300" />
            </div>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/bishal692002"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/[0.08]"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-gradient-to-br from-gray-500/20 to-slate-500/20 p-3">
                  <svg className="h-6 w-6 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">GitHub</p>
                  <p className="mt-2 text-lg font-medium text-zinc-100 transition-colors group-hover:text-white">
                    @bishal692002
                  </p>
                </div>
              </div>
              <ArrowTopRightOnSquareIcon className="h-5 w-5 text-zinc-500 transition-transform group-hover:translate-x-1 group-hover:text-zinc-300" />
            </div>
          </a>
        </motion.div>

        <motion.p
          {...fadeUp}
          viewport={{ once: true, amount: 0.35 }}
          className="mt-12 text-center text-sm text-zinc-400 md:mt-16"
        >
          I typically respond within 24 hours.
        </motion.p>
      </div>
    </section>
  );
}
