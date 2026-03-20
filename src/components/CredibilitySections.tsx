'use client';

import { motion } from 'framer-motion';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
};

const tierOne = [
  { title: 'AWS Cloud Practitioner', issuer: 'AWS' },
  { title: 'Deloitte Technology Job Simulation', issuer: 'Forage' },
  { title: 'AI/ML Certification', issuer: 'YBI Foundation' },
  { title: 'Geoprocessing using Python', issuer: 'ISRO' },
];

const tierTwo = [
  { title: 'Problem Solving', issuer: 'HackerRank' },
  { title: 'Python', issuer: 'HackerRank' },
  { title: 'SE Intern', issuer: 'HackerRank' },
  { title: 'CodeClash 2025', issuer: 'Competition' },
  { title: 'Spark-Wars 4.0', issuer: 'Competition' },
];

const tierThree = [
  'HP Power Lab',
  'HackVega',
  'E-Commerce Unstop',
  'Internship Studio',
  'Great Learning Courses',
];

export default function CredibilitySections() {
  return (
    <section className="relative z-40 overflow-hidden bg-transparent pb-28 pt-14 md:pb-36 md:pt-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(99,102,241,0.18),transparent_46%),radial-gradient(circle_at_82%_30%,rgba(14,165,233,0.12),transparent_42%),radial-gradient(circle_at_60%_88%,rgba(124,58,237,0.14),transparent_52%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/20 via-zinc-900/45 to-zinc-950/60" />
      </div>

      <div id="education" className="section-shell relative z-10 scroll-mt-20 py-12 md:py-16">
        <motion.div {...fadeUp} viewport={{ once: true, amount: 0.35 }}>
          <p className="mb-3 text-xs uppercase tracking-[0.24em] text-zinc-400">Education</p>
          <h3 className="chapter-title text-3xl text-zinc-100 sm:text-4xl">A Foundation Built Upward</h3>
        </motion.div>

        <div className="mt-10 space-y-8">
          <motion.div
            {...fadeUp}
            viewport={{ once: true, amount: 0.35 }}
            className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm"
          >
            <span className="absolute -left-2 top-8 h-4 w-4 rounded-full border border-white/30 bg-zinc-900" />
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">MCA</p>
            <h4 className="mt-2 text-xl font-semibold text-zinc-100">VIT Bhopal</h4>
            <p className="mt-2 text-zinc-300">CGPA: 9.05</p>
          </motion.div>

          <motion.div
            {...fadeUp}
            viewport={{ once: true, amount: 0.35 }}
            className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm"
          >
            <span className="absolute -left-2 top-8 h-4 w-4 rounded-full border border-white/30 bg-zinc-900" />
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">BCA</p>
            <h4 className="mt-2 text-xl font-semibold text-zinc-100">Oxford College of Science</h4>
            <p className="mt-2 text-zinc-300">CGPA: 7.78</p>
          </motion.div>
        </div>
      </div>

      <div id="skills" className="section-shell relative z-10 scroll-mt-20 py-12 md:py-16">
        <motion.div {...fadeUp} viewport={{ once: true, amount: 0.35 }}>
          <p className="mb-3 text-xs uppercase tracking-[0.24em] text-zinc-400">Skills</p>
          <h3 className="chapter-title text-3xl text-zinc-100 sm:text-4xl">Technical Toolkit</h3>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {[
            {
              title: 'Cloud & DevOps',
              skills: ['AWS', 'Docker', 'Jenkins', 'Terraform', 'Ansible'],
              tint: 'from-sky-500/15 to-blue-500/5',
            },
            {
              title: 'Programming',
              skills: ['Python', 'JavaScript', 'Node.js'],
              tint: 'from-violet-500/15 to-indigo-500/5',
            },
            {
              title: 'Tools',
              skills: ['MongoDB', 'MySQL', 'Git', 'Postman'],
              tint: 'from-emerald-500/15 to-teal-500/5',
            },
          ].map((group) => (
            <motion.article
              key={group.title}
              {...fadeUp}
              viewport={{ once: true, amount: 0.35 }}
              className={`rounded-2xl border border-white/10 bg-gradient-to-br ${group.tint} p-5 backdrop-blur-sm transition-all hover:border-white/20`}
              whileHover={{ y: -2, scale: 1.01 }}
            >
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">{group.title}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="rounded-full border border-white/15 bg-black/25 px-3 py-1 text-sm text-zinc-200">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <div id="creations" className="section-shell relative z-10 scroll-mt-20 py-12 md:py-16">
        <motion.div {...fadeUp} viewport={{ once: true, amount: 0.35 }}>
          <p className="mb-3 text-xs uppercase tracking-[0.24em] text-zinc-400">Positions of Responsibility</p>
          <h3 className="chapter-title text-3xl text-zinc-100 sm:text-4xl">Leadership in Action</h3>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
          <motion.article
            {...fadeUp}
            viewport={{ once: true, amount: 0.35 }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all hover:border-white/20"
            whileHover={{ y: -2 }}
          >
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Tech Head</p>
            <p className="mt-3 text-lg text-zinc-100">Organized workshops and hackathon for 150+ students.</p>
          </motion.article>

          <motion.article
            {...fadeUp}
            viewport={{ once: true, amount: 0.35 }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all hover:border-white/20"
            whileHover={{ y: -2 }}
          >
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Team Lead</p>
            <p className="mt-3 text-lg text-zinc-100">Led a 4-member development team across build and delivery phases.</p>
          </motion.article>
        </div>
      </div>

      <div id="certifications" className="section-shell relative z-10 scroll-mt-20 py-12 md:py-16">
        <motion.div {...fadeUp} viewport={{ once: true, amount: 0.35 }}>
          <p className="mb-3 text-xs uppercase tracking-[0.24em] text-zinc-400">Certifications</p>
          <h3 className="chapter-title text-3xl text-zinc-100 sm:text-4xl">Validated Learning Journey</h3>
        </motion.div>

        <div className="mt-10 space-y-8">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-zinc-500">Tier 1</p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {tierOne.map((item) => (
                <motion.div
                  key={item.title}
                  {...fadeUp}
                  viewport={{ once: true, amount: 0.35 }}
                  className="rounded-2xl border border-white/15 bg-white/[0.04] p-5 backdrop-blur-sm"
                  whileHover={{ y: -2, boxShadow: '0 0 30px rgba(123,97,255,0.18)' }}
                >
                  <p className="text-base font-medium text-zinc-100">{item.title}</p>
                  <p className="mt-2 text-sm text-zinc-400">Issuer: {item.issuer}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-zinc-500">Tier 2</p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {tierTwo.map((item) => (
                <motion.div
                  key={item.title}
                  {...fadeUp}
                  viewport={{ once: true, amount: 0.35 }}
                  className="rounded-xl border border-white/10 bg-white/[0.03] p-4"
                  whileHover={{ y: -2 }}
                >
                  <p className="text-sm font-medium text-zinc-100">{item.title}</p>
                  <p className="mt-1 text-xs text-zinc-400">Issuer: {item.issuer}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-zinc-500">Tier 3</p>
            <div className="flex gap-3 overflow-x-auto pb-2">
              {tierThree.map((item) => (
                <motion.div
                  key={item}
                  {...fadeUp}
                  viewport={{ once: true, amount: 0.35 }}
                  className="shrink-0 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-zinc-200"
                  whileHover={{ y: -1 }}
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
