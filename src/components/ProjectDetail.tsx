'use client';

import { motion } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface ProjectDetailProps {
  project: {
    id: number;
    title: string;
    tagline: string;
    tags: string[];
    color: string;
    caseStudy: {
      challenge: string;
      solution: string;
      impact: Array<{ stat: string; label: string }>;
      tech: string;
      result: string;
    };
  };
  onClose: () => void;
}

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] },
  },
  exit: { opacity: 0, scale: 0.95, y: 20, transition: { duration: 0.3 } },
};

const contentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function ProjectDetail({ project, onClose }: ProjectDetailProps) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-end md:items-center justify-center p-4 backdrop-blur-sm"
      style={{ background: 'rgba(5, 5, 5, 0.7)' }}
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={onClose}
    >
      {/* Modal Container */}
      <motion.div
        className="glass relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl p-8 md:p-12"
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <motion.button
          className="absolute top-6 right-6 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-zinc-200 hover:bg-white/20"
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.95 }}
          onClick={onClose}
          aria-label="Close modal"
        >
          <XMarkIcon className="h-5 w-5" />
        </motion.button>

        {/* Content */}
        <motion.div className="space-y-12" variants={contentVariants} initial="hidden" animate="visible">
          {/* Header */}
          <motion.div className="space-y-3" variants={itemVariants}>
            <div className="flex items-baseline gap-3">
              <h2 className="chapter-title text-3xl md:text-4xl text-zinc-100">{project.title}</h2>
              <span className="text-sm font-medium" style={{ color: project.color }}>
                {project.tagline}
              </span>
            </div>
            <p className="text-zinc-400 text-sm">{project.tags.join(' • ')}</p>
          </motion.div>

          {/* Challenge */}
          <motion.div className="space-y-3" variants={itemVariants}>
            <h3 className="chapter-title text-lg text-zinc-100">The Challenge</h3>
            <p className="leading-relaxed text-zinc-300">{project.caseStudy.challenge}</p>
          </motion.div>

          {/* Solution */}
          <motion.div className="space-y-3" variants={itemVariants}>
            <h3 className="chapter-title text-lg text-zinc-100">The Solution</h3>
            <p className="leading-relaxed text-zinc-300">{project.caseStudy.solution}</p>
          </motion.div>

          {/* Impact Stats */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <h3 className="chapter-title text-lg text-zinc-100">Impact</h3>
            <div className="grid grid-cols-3 gap-4">
              {project.caseStudy.impact.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="rounded-xl p-4 border"
                  style={{
                    borderColor: `${project.color}40`,
                    background: `${project.color}08`,
                  }}
                  whileHover={{ scale: 1.05, borderColor: `${project.color}80` }}
                >
                  <p className="chapter-title text-2xl md:text-3xl mb-1" style={{ color: project.color }}>
                    {item.stat}
                  </p>
                  <p className="text-xs uppercase tracking-[0.08em] text-zinc-400">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Technology Stack */}
          <motion.div className="space-y-3" variants={itemVariants}>
            <h3 className="chapter-title text-lg text-zinc-100">Technology Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.caseStudy.tech.split(', ').map((tech) => (
                <span
                  key={tech}
                  className="rounded-full px-4 py-2 text-sm border"
                  style={{
                    borderColor: `${project.color}30`,
                    background: `${project.color}10`,
                    color: project.color,
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Result */}
          <motion.div className="space-y-3 border-t border-white/10 pt-8" variants={itemVariants}>
            <h3 className="chapter-title text-lg text-zinc-100">Result</h3>
            <p className="leading-relaxed text-zinc-300">{project.caseStudy.result}</p>
          </motion.div>

          {/* CTA */}
          <motion.div className="flex gap-4 pt-4" variants={itemVariants}>
            <button
              onClick={onClose}
              className="flex-1 px-6 py-3 rounded-lg border border-white/20 text-zinc-300 hover:border-white/40 hover:bg-white/5 transition-all"
            >
              Close
            </button>
            <motion.button
              className="flex-1 px-6 py-3 rounded-lg font-medium text-white transition-all"
              style={{ background: project.color }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View Project
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
