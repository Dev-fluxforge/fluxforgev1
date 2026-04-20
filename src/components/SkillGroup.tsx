import React from 'react';
import { motion } from 'motion/react';
import { useEffect, useState, useRef } from 'react';
import { cn } from '@/src/lib/utils';

type Skill = {
  name: string;
  level: number;
};

type SkillGroupProps = {
  title: string;
  skills: Skill[];
};

export const SkillGroup: React.FC<SkillGroupProps> = ({ title, skills }) => {
  return (
    <div className="card-surface p-7 bg-deep-moss border-forest-edge shadow-xl hover:border-primary/30 transition-all">
      <div className="flex items-center justify-between mb-8">
        <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{title}</h3>
        <div className="w-8 h-px bg-forest-edge" />
      </div>

      <div className="space-y-7">
        {skills.map((skill) => (
          <ProgressBar key={skill.name} name={skill.name} level={skill.level} />
        ))}
      </div>
    </div>
  );
}

const ProgressBar: React.FC<{ name: string; level: number }> = ({ name, level }) => {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWidth(level);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [level]);

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-end">
        <span className="text-sm font-medium text-pale-mint">{name}</span>
        <span className="text-[11px] font-mono text-sage">{level}%</span>
      </div>
      <div className="h-1 bg-forest-edge rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${width}%` }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-primary to-mint"
        />
      </div>
    </div>
  );
}
