import { useState, useMemo } from 'react';
import { ProjectCard } from '@/src/components/ProjectCard';
import { PROJECTS } from '@/src/constants';
import { cn } from '@/src/lib/utils';
import { motion, AnimatePresence } from 'motion/react';

const categories = ["All", "Company", "Client", "Business", "Internship", "Non-Profit", "Training", "Personal"];

export default function Projects() {
  const [activeTab, setActiveTab] = useState("All");
  const [activeTech, setActiveTech] = useState("All");

  const techStacks = useMemo(() => {
    const stacks = new Set<string>();
    PROJECTS.forEach(p => p.techStack.forEach(s => stacks.add(s)));
    return ["All", ...Array.from(stacks).sort()];
  }, []);

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter(p => {
      const categoryMatch = activeTab === "All" || p.category === activeTab;
      const techMatch = activeTech === "All" || p.techStack.includes(activeTech);
      return categoryMatch && techMatch;
    });
  }, [activeTab, activeTech]);

  return (
    <div className="space-y-16 pb-32">
      {/* Page Hero */}
      <section className="pt-20 px-6 md:px-12 max-w-7xl mx-auto">
        <span className="section-eyebrow">PROJECT CATALOGUE</span>
        <h1 className="text-5xl md:text-7xl mb-6">10 projects. Real code.</h1>
        <p className="text-pale-mint/60 text-lg md:text-xl max-w-2xl leading-relaxed">
          A curated selection of work spanning corporate websites, interactive tools, and community-focused platforms. All source code and live demos available.
        </p>
      </section>

      {/* Filter Tabs */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto space-y-8">
        {/* Category Filter */}
        <div className="space-y-4">
          <h3 className="text-xs font-mono text-primary uppercase tracking-[0.2em]">Filter by Category</h3>
          <div className="flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={cn(
                  "px-6 py-2 rounded-full font-mono text-[11px] transition-all border whitespace-nowrap",
                  activeTab === cat
                    ? "bg-primary border-primary text-void-black"
                    : "bg-deep-moss border-forest-edge text-sage hover:border-mint hover:text-mint"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Tech Stack Filter */}
        <div className="space-y-4">
          <h3 className="text-xs font-mono text-primary uppercase tracking-[0.2em]">Filter by Tech Stack</h3>
          <div className="flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar">
            {techStacks.map((tech) => (
              <button
                key={tech}
                onClick={() => setActiveTech(tech)}
                className={cn(
                  "px-6 py-2 rounded-full font-mono text-[11px] transition-all border whitespace-nowrap",
                  activeTech === tech
                    ? "bg-primary border-primary text-void-black"
                    : "bg-deep-moss border-forest-edge text-sage hover:border-mint hover:text-mint"
                )}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto">
        <div className="mb-8 flex justify-between items-center">
          <p className="text-sage font-mono text-xs uppercase tracking-wider">
            Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
          </p>
          {(activeTab !== "All" || activeTech !== "All") && (
            <button 
              onClick={() => { setActiveTab("All"); setActiveTech("All"); }}
              className="text-mint hover:text-primary text-xs font-mono transition-colors"
            >
              Reset Filters
            </button>
          )}
        </div>
        
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredProjects.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 border-2 border-dashed border-forest-edge rounded-xl"
          >
            <p className="text-sage font-mono">No projects match the selected filters.</p>
          </motion.div>
        )}
      </section>
    </div>
  );
}
