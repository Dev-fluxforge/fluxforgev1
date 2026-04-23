import React from 'react';
import { motion } from 'motion/react';
import { 
  Github, 
  ExternalLink, 
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

type ProjectProps = {
  project: {
    id: string;
    title: string;
    category: string;
    techStack: string[];
    image?: string;
    description: string;
    github: string;
    liveDemo: string | null;
    status?: string;
  };
  onClick?: () => void;
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

export const ProjectCard: React.FC<ProjectProps> = ({ project, onClick }) => {
  const style = categoryStyles[project.category] || categoryStyles.Personal;
  const initials = project.title.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();

  return (
    <motion.div
      layout
      onClick={onClick}
      whileHover={{ y: -6, scale: 1.01 }}
      className="card-surface overflow-hidden group hover:shadow-[0_20px_60px_rgba(0,168,107,0.15)] hover:border-primary/40 transition-all duration-300 flex flex-col h-full cursor-pointer"
    >
      {/* Thumbnail */}
      <div className={cn(
        "h-40 bg-gradient-to-br flex items-center justify-center relative overflow-hidden",
        style.gradient
      )}>
        {project.image ? (
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
        ) : (
          <span className="font-display font-black text-4xl text-white/90 tracking-tighter opacity-80 select-none">
            {initials}
          </span>
        )}
        
        {project.status && (
          <span className="absolute top-3 right-3 bg-forest-edge/90 backdrop-blur-sm text-sage text-[10px] px-2 py-0.5 rounded font-mono z-10">
            {project.status}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-3">
          <span className={cn(
            "font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-[--radius-badge]",
            style.badge
          )}>
            {project.category}
          </span>
          <span className="text-sage text-[10px] font-mono">{project.id}</span>
        </div>

        <h3 className="text-lg text-white font-display mb-2 group-hover:text-primary transition-colors leading-tight">
          {project.title}
        </h3>
        
        <p className="text-pale-mint/70 text-sm mb-4 line-clamp-2 leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack Icons */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map(tag => {
            const IconComponent = techIconMap[tag] || Code2;
            return (
              <div 
                key={tag} 
                title={tag}
                className="w-8 h-8 flex items-center justify-center rounded-md border border-mint/10 bg-mint/5 text-mint/90 transition-all hover:bg-mint/10 hover:border-mint/30 hover:scale-110"
              >
                <IconComponent size={16} strokeWidth={1.5} />
              </div>
            );
          })}
        </div>

        {/* Actions */}
        <div className="mt-auto flex items-center gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex-1 flex items-center justify-center gap-2 btn-primary py-2 text-xs"
          >
            <Github size={14} /> GitHub
          </a>
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex-1 flex items-center justify-center gap-2 border border-forest-edge text-sage py-2 text-xs rounded-[--radius-button] hover:border-primary hover:text-primary transition-all"
            >
              <ExternalLink size={14} /> Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};
