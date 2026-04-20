import { Hero } from '@/src/components/Hero';
import { ProjectCard } from '@/src/components/ProjectCard';
import { PROJECTS } from '@/src/constants';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Hexagon } from 'lucide-react';

export default function Home() {
  const featuredProjects = PROJECTS.filter(p => ["P-002", "P-003", "P-009"].includes(p.id));

  return (
    <div className="space-y-32 pb-32">
      {/* Hero Section */}
      <Hero />

      {/* Services Teaser */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="section-eyebrow">WHAT WE DO</span>
          <h2 className="text-4xl md:text-5xl">Built to perform. Designed to impress.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ServiceCard 
            title="Front-End Engineering" 
            desc="Angular SPAs, TypeScript, Tailwind CSS, responsive design built to perform."
          />
          <ServiceCard 
            title="UI/UX Implementation" 
            desc="Mobile-first layouts, accessible interfaces, brand identity translated to code."
          />
          <ServiceCard 
            title="Design Systems" 
            desc="Visual identity, graphic campaigns, and Figma-to-code delivery."
          />
        </div>
      </section>

      {/* Featured Projects */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
          <div>
            <span className="section-eyebrow">RECENT WORK</span>
            <h2 className="text-4xl">Featured Projects</h2>
          </div>
          <Link to="/projects" className="group flex items-center gap-2 text-primary hover:underline transition-all">
            See All Projects <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto">
        <div className="relative overflow-hidden bg-gradient-to-r from-deep-moss to-void-black border-l-4 border-primary rounded-r-[--radius-card] p-12 md:p-20 text-center md:text-left">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl mb-4">Ready to build something remarkable?</h2>
            <p className="text-pale-mint/70 text-lg mb-10 max-w-xl">Let's talk about your project.</p>
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2 px-8 py-4">
              Start a Project <ArrowRight size={20} />
            </Link>
          </div>
          {/* Subtle background element */}
          <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 opacity-10 pointer-events-none">
            <Hexagon size={400} className="text-primary" strokeWidth={1} />
          </div>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="card-surface p-10 bg-deep-moss border-forest-edge border-t-4 border-t-primary shadow-2xl transition-transform hover:-translate-y-1">
      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-8">
        <Hexagon className="text-primary" size={28} />
      </div>
      <h3 className="text-2xl font-display text-white mb-4">{title}</h3>
      <p className="text-pale-mint/60 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
