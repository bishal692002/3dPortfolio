'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  tagline: string;
  description: string;
  image: string;
  tags: string[];
  color: string;
  caseStudy: {
    challenge: string;
    solution: string;
    impact: Array<{ stat: string; label: string }>;
    tech: string;
    result: string;
  };
}

interface ProjectCardProps {
  project: Project;
  onExpand: () => void;
}

const gradientBackgrounds: Record<string, string> = {
  'gradient-1': 'from-purple-600/30 via-purple-500/10 to-transparent',
  'gradient-2': 'from-red-600/30 via-red-500/10 to-transparent',
  'gradient-3': 'from-purple-600/30 via-purple-500/10 to-transparent',
  'gradient-4': 'from-red-600/30 via-red-500/10 to-transparent',
  'gradient-5': 'from-purple-600/30 via-purple-500/10 to-transparent',
};

export default function ProjectCard({ project, onExpand }: ProjectCardProps) {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    setMouseX(x * 0.1);
    setMouseY(y * 0.1);
  };

  const handleMouseLeave = () => {
    setMouseX(0);
    setMouseY(0);
    setIsHovering(false);
  };

  return (
    <motion.div
      ref={cardRef}
      className="group relative h-full cursor-pointer overflow-hidden rounded-[var(--radius-card)]"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={handleMouseLeave}
      onClick={onExpand}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      {/* Background gradient with parallax depth */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradientBackgrounds[project.image]} opacity-60`} />

      {/* Glass morphism base */}
      <div className="glass absolute inset-0 z-10 bg-gradient-to-br from-white/[0.08] to-white/[0.02]" />

      {/* Glow effect on hover */}
      <motion.div
        className="pointer-events-none absolute -inset-1/2 h-full w-full rounded-full blur-3xl opacity-0"
        style={{
          background: `radial-gradient(circle at center, ${project.color}20, transparent 60%)`,
        }}
        animate={{ opacity: isHovering ? 0.4 : 0 }}
        transition={{ duration: 0.4 }}
      />

      {/* Tilt effect on mouse move */}
      <motion.div
        className="relative h-full p-6 md:p-8"
        animate={{
          rotateX: mouseY * 0.5,
          rotateY: mouseX * 0.5,
        }}
        transition={{ type: 'spring', stiffness: 150, damping: 15 }}
        style={{
          transformStyle: 'preserve-3d',
          perspective: 1200,
        }}
      >
        {/* Content container */}
        <div className="relative z-20 flex h-full flex-col justify-between">
          {/* Header */}
          <div>
            {/* Icon/Badge */}
            <motion.div
              className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg"
              style={{ background: `${project.color}15`, border: `1px solid ${project.color}30` }}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <div className="h-6 w-6 rounded-full" style={{ background: project.color, opacity: 0.8 }} />
            </motion.div>

            {/* Title & Tagline */}
            <h3 className="chapter-title mb-2 text-2xl text-zinc-100">{project.title}</h3>
            <p className="text-sm font-medium" style={{ color: project.color }}>
              {project.tagline}
            </p>

            {/* Description */}
            <p className="mt-4 text-sm leading-relaxed text-zinc-300 line-clamp-2">{project.description}</p>
          </div>

          {/* Footer */}
          <div className="space-y-4">
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border text-[10px] uppercase tracking-[0.12em] px-2.5 py-1"
                  style={{
                    borderColor: `${project.color}40`,
                    color: project.color,
                    background: `${project.color}08`,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA Arrow */}
            <motion.div
              className="flex items-center gap-3 text-sm font-medium"
              style={{ color: project.color }}
              whileHover={{ x: 8 }}
            >
              <span>Explore Case Study</span>
              <motion.svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                whileHover={{ x: 4 }}
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </motion.svg>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Shine effect on hover */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-30 opacity-0"
        style={{
          background: 'linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
        }}
        animate={{ opacity: isHovering ? 0.3 : 0, x: isHovering ? 100 : -100 }}
        transition={{ duration: 0.6 }}
      />
    </motion.div>
  );
}
