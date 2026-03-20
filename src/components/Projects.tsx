'use client';

import { motion } from 'framer-motion';
import ProjectShowcase from './ProjectShowcase';

const projects = [
  {
    id: 1,
    title: 'Visual Product Matcher',
    tagline: 'AI-powered fashion search at sub-second speed',
    hook: '44K fashion dataset with intelligent visual similarity',
    description: 'An intelligent fashion similarity search engine that leverages FashionCLIP embeddings and FAISS vector indexing. Users upload an image and receive instant visual matches across a curated 44K dataset. Built with a FastAPI backend and Streamlit frontend for seamless inference.',
    techStack: ['Python', 'FastAPI', 'Streamlit', 'FAISS', 'FashionCLIP', 'HuggingFace'],
    highlight: 'Sub-second similarity search on 44K images with 99.2% accuracy',
    github: 'https://github.com/bishal692002/Visual-Product-Matcher',
    live: 'https://huggingface.co/spaces/bishal692002/visual-product',
    color: '#7b61ff',
    bgGradient: 'from-purple-600/20 via-purple-500/5 to-transparent',
    imageUrl: '/project-visuals/visual.png',
    imageAlt: 'Visual Product Matcher dashboard with fashion similarity analysis',
  },
  {
    id: 2,
    title: 'VIT-Bolt',
    tagline: 'Campus delivery platform solving real logistics',
    hook: 'From manual chaos to automated same-day delivery',
    description: 'A full-stack delivery platform built for a 10,000+ student campus. Features domain-restricted authentication, real-time order tracking, driver assignment algorithms, and containerized deployment. Reduced delivery time by 60% with zero downtime.',
    techStack: ['Node.js', 'Express.js', 'MongoDB', 'Docker', 'Socket.io', 'AWS'],
    highlight: 'Live production usage with 50+ daily orders and 99.8% uptime',
    github: '',
    live: 'https://vit-bolt.onrender.com/',
    color: '#7b61ff',
    bgGradient: 'from-purple-600/20 via-purple-500/5 to-transparent',
    imageUrl: '/project-visuals/vit.png',
    imageAlt: 'VIT-Bolt logistics dashboard with route and delivery metrics',
  },
  {
    id: 3,
    title: 'GameZone',
    tagline: 'Scalable cloud gaming with full DevOps pipeline',
    hook: 'Enterprise-grade gaming infrastructure on AWS',
    description: 'A cloud-based gaming hub engineered for scale. Built with auto-scaling architecture, CDN optimization, and a complete CI/CD pipeline using Jenkins. Handles 100+ concurrent users with <50ms latency and intelligent cost optimization.',
    techStack: ['AWS EC2', 'CloudFront', 'Jenkins', 'Docker', 'Load Balancer', 'Terraform'],
    highlight: 'Full DevOps pipeline with auto-scaling + <50ms P95 latency at production scale',
    github: '',
    live: 'https://gamezone-tmlk.onrender.com',
    color: '#ff6b6b',
    bgGradient: 'from-red-600/20 via-red-500/5 to-transparent',
    imageUrl: '/project-visuals/gamezone.png',
    imageAlt: 'GameZone neon gaming dashboard with performance telemetry',
  },
  {
    id: 4,
    title: 'AWS VPC Project',
    tagline: 'Production infrastructure as reusable code',
    hook: 'Multi-AZ VPC with security-first architecture',
    description: 'Enterprise-grade AWS infrastructure provisioned entirely through Terraform. Features multi-AZ deployment, private subnets, NAT gateways, security group configurations, and automated backup strategies. Infrastructure is version-controlled, auditable, and reproducible.',
    techStack: ['AWS VPC', 'Terraform', 'Security Groups', 'IAM', 'RDS', 'Load Balancing'],
    highlight: '100% infrastructure-as-code with zero configuration drift across 3 regions',
    github: 'https://github.com/bishal692002/aws-project1',
    live: '',
    color: '#7b61ff',
    bgGradient: 'from-purple-600/20 via-purple-500/5 to-transparent',
    imageUrl: '/project-visuals/aws.png',
    imageAlt: 'AWS VPC architecture graph with subnets and gateways',
  },
  {
    id: 5,
    title: 'Typify',
    tagline: 'Premium typing test with real-time performance analytics',
    hook: 'Clean UI meets competitive speed testing',
    description: 'A modern typing speed test platform built with vanilla JavaScript. Features real-time WPM and accuracy tracking, difficulty levels, and a minimalist glassmorphism interface. Designed for both casual users and competitive typists.',
    techStack: ['JavaScript', 'HTML5', 'CSS3', 'LocalStorage', 'Analytics'],
    highlight: 'Real-time keystroke detection + performance analytics dashboard',
    github: 'https://github.com/bishal692002/Typify',
    live: 'https://bishal692002.github.io/Typify/',
    color: '#ff6b6b',
    bgGradient: 'from-red-600/20 via-red-500/5 to-transparent',
    imageUrl: '/project-visuals/typify.png',
    imageAlt: 'Typify typing test interface with accuracy and speed metrics',
  },
];

export default function Projects() {
  return (
    <section id="creations" className="relative z-40 overflow-hidden bg-transparent pt-24 pb-20 md:pt-28 md:pb-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(123,97,255,0.22),transparent_45%),radial-gradient(circle_at_80%_35%,rgba(255,107,107,0.16),transparent_42%),radial-gradient(circle_at_50%_85%,rgba(59,130,246,0.14),transparent_46%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/10 via-zinc-950/35 to-zinc-950/70" />
      </div>

      <div className="section-shell relative z-10 mb-20">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="mb-3 text-xs uppercase tracking-[0.24em] text-zinc-400">Engineering Showcase</p>
          <h2 className="chapter-title mb-6 text-3xl text-zinc-100 sm:text-4xl md:text-5xl">Projects That Define My Craft</h2>
          <p className="max-w-2xl text-base leading-relaxed text-zinc-300 md:text-lg">
            Real problems solved with real code. Each project showcases full-stack engineering, from AI systems to production DevOps.
          </p>
        </motion.div>
      </div>

      <div className="relative z-10">
        {projects.map((project, idx) => (
          <div key={project.id} className={idx === 0 ? '' : '-mt-14 md:-mt-20'}>
            <ProjectShowcase
              project={project}
              index={idx}
              total={projects.length}
              imageSide={idx % 2 === 0 ? 'right' : 'left'}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
