import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Github, 
  ExternalLink, 
  CheckCircle2, 
  Code2, 
  Wind, 
  GitBranch, 
  Cpu, 
  Layers, 
  Terminal, 
  Zap, 
  Database, 
  Globe, 
  Layout, 
  FileCode, 
  Image as ImageIcon, 
  Palette 
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

type Project = {
  id: string;
  title: string;
  category: string;
  techStack: string[];
  image?: string;
  description: string;
  longDescription?: string;
  features?: string[];
  github: string;
  liveDemo: string | null;
  status?: string;
};

const techIconMap: Record<string, React.ElementType> = {
  "Angular": Cpu,
  "TypeScript": Code2,
  "Tailwind CSS": Wind,
  "Tailwind": Wind,
  "Vercel": Zap,
  "Git": GitBranch,
  "HTML5": FileCode,
  "HTML": FileCode,
  "CSS3": Layers,
  "CSS": Layers,
  "JavaScript": Terminal,
  "JS": Terminal,
  "MySQL": Database,
  "Oracle": Database,
  "PHP": Globe,
  "Bootstrap": Layout,
  "Adobe Photoshop": ImageIcon,
  "CorelDRAW": Palette,
  "Adobe Illustrator": Palette,
  "Canva": ImageIcon,
  "Figma": Layout,
  "PixelLab": ImageIcon,
  "Inkscape": Palette
};

const categoryStyles: Record<string, { badge: string; gradient: string }> = {
  "Company": { badge: "bg-[#002D62] text-[#60A5FA]", gradient: "from-[#002D62] to-[#1a4ab5]" },
  "Client": { badge: "bg-[#3a1500] text-[#FB923C]", gradient: "from-[#1a0a0a] to-[#5a2a1a]" },
  "Business": { badge: "bg-[#2a1f00] text-[#FBBF24]", gradient: "from-[#1a1a2e] to-[#2a2a4e]" },
  "Internship": { badge: "bg-[#0c1a4a] text-[#818CF8]", gradient: "from-[#003a70] to-[#1565a0]" },
  "Non-Profit": { badge: "bg-[#2a0a25] text-[#F472B6]", gradient: "from-[#2a0a3a] to-[#4a1a6a]" },
  "Training": { badge: "bg-[#002a2a] text-[#22D3EE]", gradient: "from-[#002D62] to-[#003d82]" },
  "Personal": { badge: "bg-[#1a0a2a] text-[#C084FC]", gradient: "from-[#1a1030] to-[#2a1a50]" },
};

type ProjectModalProps = {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
};

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  const style = categoryStyles[project.category] || categoryStyles.Personal;
  const initials = project.title.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-void-black/90 backdrop-blur-md z-[100] cursor-pointer"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 md:p-8 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-deep-moss border border-forest-edge w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl shadow-2xl pointer-events-auto flex flex-col md:flex-row"
            >
              {/* Left Side: Visual/Hero */}
              <div className={cn(
                "md:w-2/5 h-64 md:h-auto bg-gradient-to-br flex items-center justify-center relative overflow-hidden",
                style.gradient
              )}>
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="absolute inset-0 w-full h-full object-cover opacity-90"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <span className="font-display font-black text-6xl md:text-8xl text-white/90 tracking-tighter opacity-80 select-none">
                    {initials}
                  </span>
                )}

                {/* Overlays */}
                <div className="absolute inset-0 bg-void-black/20 md:hidden" />
                
                <button 
                  onClick={onClose}
                  className="absolute top-4 left-4 p-2 bg-void-black/40 hover:bg-void-black/60 rounded-full transition-colors text-white md:hidden z-20 backdrop-blur-md border border-forest-edge"
                >
                  <X size={20} />
                </button>

                {project.status && (
                  <span className="absolute top-4 right-4 bg-forest-edge/90 backdrop-blur-md text-sage text-[10px] px-2 py-0.5 rounded font-mono z-20">
                    {project.status}
                  </span>
                )}
              </div>

              {/* Right Side: Content */}
              <div className="md:w-3/5 p-6 md:p-10 overflow-y-auto no-scrollbar flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div className="space-y-1">
                    <span className={cn(
                      "font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-[--radius-badge]",
                      style.badge
                    )}>
                      {project.category}
                    </span>
                    <h2 className="text-2xl md:text-3xl text-white font-display leading-tight">
                      {project.title}
                    </h2>
                  </div>
                  <button 
                    onClick={onClose}
                    className="p-2 hover:bg-forest-edge rounded-full transition-colors text-sage hidden md:block"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="space-y-8">
                  {/* Detailed Description */}
                  <div>
                    <h4 className="text-primary font-mono text-[10px] uppercase tracking-[0.2em] mb-3">Project Narrative</h4>
                    <p className="text-pale-mint/80 leading-relaxed">
                      {project.longDescription || project.description}
                    </p>
                  </div>

                  {/* Key Features */}
                  {project.features && (
                    <div>
                      <h4 className="text-primary font-mono text-[10px] uppercase tracking-[0.2em] mb-4">Core Capabilities</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {project.features.map((feature, i) => (
                          <div key={i} className="flex items-start gap-2 text-sm text-pale-mint/70">
                            <CheckCircle2 size={16} className="text-mint shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Tech Stack Icons */}
                  <div>
                    <h4 className="text-primary font-mono text-[10px] uppercase tracking-[0.2em] mb-4">Engineering Stack</h4>
                    <div className="flex flex-wrap gap-3">
                      {project.techStack.map(tag => {
                        const IconComponent = techIconMap[tag] || Code2;
                        return (
                          <div 
                            key={tag} 
                            className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-mint/10 bg-mint/5 text-mint/90 group hover:border-mint/30 transition-all"
                          >
                            <IconComponent size={14} strokeWidth={1.5} />
                            <span className="text-xs font-mono">{tag}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-4 pt-4 border-t border-forest-edge">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 btn-primary py-3 text-sm"
                    >
                      <Github size={18} /> View Source Code
                    </a>
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 border border-forest-edge text-sage py-3 text-sm rounded-[--radius-button] hover:border-primary hover:text-primary transition-all"
                      >
                        <ExternalLink size={18} /> Visit Live Site
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};
