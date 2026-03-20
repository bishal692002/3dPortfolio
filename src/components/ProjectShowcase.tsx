'use client';

import { motion } from 'framer-motion';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

interface ProjectShowcaseProps {
  project: {
    id: number;
    title: string;
    tagline: string;
    hook: string;
    description: string;
    techStack: string[];
    highlight: string;
    github: string;
    live: string;
    color: string;
    bgGradient: string;
    imageUrl?: string;
    imageAlt?: string;
  };
  index: number;
  total: number;
  imageSide: 'left' | 'right';
}

const contentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function ProjectShowcase({ project, index, total, imageSide }: ProjectShowcaseProps) {
  const imageOrderClass = imageSide === 'right' ? 'order-1 lg:order-2' : 'order-1 lg:order-1';
  const textOrderClass = imageSide === 'right' ? 'order-2 lg:order-1' : 'order-2 lg:order-2';
  const imageEnterX = imageSide === 'right' ? 72 : -72;
  const textEnterX = imageSide === 'right' ? -56 : 56;

  return (
    <section className="relative min-h-[92svh] py-4 md:min-h-screen md:py-8">
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at ${imageSide === 'right' ? '78%' : '22%'} 38%, ${project.color}22, transparent 46%)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/35 to-black/55" />
      </div>

      <div className="section-shell relative z-10">
        <motion.div
          className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.45, margin: '-4% 0px -6% 0px' }}
        >
          <motion.div
            className={`${imageOrderClass} group relative overflow-hidden rounded-2xl border border-zinc-700/40`}
            initial={{ opacity: 0, x: imageEnterX, scale: 0.96, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, x: 0, scale: 1, filter: 'blur(0px)' }}
            viewport={{ once: false, amount: 0.45, margin: '-4% 0px -6% 0px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.01, rotateZ: -0.4 }}
          >
            <div className="relative aspect-[16/10] w-full">
              {project.imageUrl ? (
                <motion.div
                  className="absolute inset-0"
                  initial={{ scale: 1.06, y: 12, filter: 'blur(6px)' }}
                  whileInView={{ scale: 1, y: 0, filter: 'blur(0px)' }}
                  viewport={{ once: false, amount: 0.45, margin: '-4% 0px -6% 0px' }}
                  transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Image
                    src={project.imageUrl}
                    alt={project.imageAlt || project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    quality={90}
                    priority={index < 4}
                    unoptimized={project.title === 'Typify'}
                  />
                </motion.div>
              ) : (
                <div className={`absolute inset-0 bg-gradient-to-br ${project.bgGradient}`} />
              )}

              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/15 to-black/60" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-transparent to-black/30" />
              <div
                className="absolute inset-0 opacity-[0.12] mix-blend-soft-light"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.7) 0.4px, transparent 0.6px), radial-gradient(circle at 80% 60%, rgba(255,255,255,0.5) 0.4px, transparent 0.6px)',
                  backgroundSize: '3px 3px, 4px 4px',
                }}
              />
            </div>

            <motion.div
              className="pointer-events-none absolute inset-0 rounded-2xl"
              animate={{
                boxShadow: [
                  `inset 0 0 20px ${project.color}1f, 0 0 30px ${project.color}2f`,
                  `inset 0 0 28px ${project.color}2f, 0 0 46px ${project.color}3f`,
                  `inset 0 0 20px ${project.color}1f, 0 0 30px ${project.color}2f`,
                ],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>

          <motion.div
            className={`${textOrderClass} space-y-7`}
            variants={contentVariants}
            initial={{ opacity: 0, x: textEnterX, scale: 0.98 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.45, margin: '-4% 0px -6% 0px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div variants={itemVariants}>
              <p className="text-xs uppercase tracking-[0.32em] text-zinc-400">
                {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h2 className="chapter-title mb-2 text-4xl text-zinc-100 sm:text-5xl md:text-6xl">
                {project.title}
              </h2>
              <p className="text-base font-medium sm:text-lg" style={{ color: project.color }}>
                {project.tagline}
              </p>
            </motion.div>

            <motion.p variants={itemVariants} className="text-lg leading-relaxed text-zinc-200 sm:text-xl">
              {project.hook}
            </motion.p>

            <motion.p variants={itemVariants} className="text-base leading-relaxed text-zinc-300">
              {project.description}
            </motion.p>

            <motion.div variants={itemVariants} className="space-y-3">
              <p className="text-xs uppercase tracking-[0.16em] text-zinc-400">Technology</p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <motion.span
                    key={tech}
                    className="rounded-full border px-3 py-1.5 text-xs font-medium sm:text-sm"
                    style={{
                      borderColor: `${project.color}70`,
                      background: 'rgba(0,0,0,0.25)',
                      color: '#e7e9ff',
                    }}
                    whileHover={{ scale: 1.05, borderColor: `${project.color}` }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="rounded-xl border border-white/15 bg-black/20 p-4 backdrop-blur-sm">
              <p className="mb-2 text-xs uppercase tracking-[0.12em] text-zinc-400">Key Highlight</p>
              <p className="text-sm leading-relaxed text-zinc-100">{project.highlight}</p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 pt-2 sm:gap-4">
              {project.github && (
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-lg border px-5 py-2.5 font-medium text-white transition-all"
                  style={{
                    borderColor: `${project.color}90`,
                    background: 'rgba(0,0,0,0.28)',
                  }}
                  whileHover={{
                    scale: 1.04,
                    y: -2,
                    boxShadow: `0 0 24px ${project.color}66`,
                    backgroundColor: 'rgba(0,0,0,0.46)',
                  }}
                  whileTap={{ scale: 0.97 }}
                >
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  Source Code
                </motion.a>
              )}

              {project.live && (
                <motion.a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-lg px-5 py-2.5 font-medium text-white transition-all"
                  style={{
                    background: `linear-gradient(120deg, ${project.color}, #ffffff24)`,
                  }}
                  whileHover={{
                    scale: 1.04,
                    y: -2,
                    boxShadow: `0 0 24px ${project.color}7f`,
                    filter: 'brightness(1.07)',
                  }}
                  whileTap={{ scale: 0.97 }}
                >
                  <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                  View Live
                </motion.a>
              )}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
