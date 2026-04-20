import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

type TimelineProps = {
  entries: {
    id: number;
    role: string;
    org: string;
    location: string;
    period: string;
    bullets: string[];
  }[];
};

export function Timeline({ entries }: TimelineProps) {
  return (
    <div className="relative pl-8 md:pl-0">
      {/* Vertical Line */}
      <div className="absolute left-[7px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-mint to-forest-edge transform md:-translate-x-1/2" />

      <div className="space-y-12">
        {entries.map((entry, index) => (
          <motion.div
            key={entry.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className={cn(
              "relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16",
              index % 2 === 0 ? "md:text-right" : "md:text-left"
            )}
          >
            {/* Dot */}
            <div className={cn(
              "absolute left-[-32px] md:left-1/2 top-1 w-3.5 h-3.5 rounded-full border-2 border-void-black z-10 transform md:-translate-x-1/2",
              index % 2 === 0 ? "bg-primary" : "bg-mint"
            )} />

            {/* Content Side */}
            <div className={cn(
              "card-surface p-6 bg-deep-moss border-forest-edge shadow-lg group hover:border-primary/50 transition-colors",
              index % 2 === 0 ? "md:col-start-1" : "md:col-start-2"
            )}>
              <div className="flex flex-col gap-1 mb-4">
                <span className="font-mono text-[10px] text-primary tracking-widest uppercase">
                  {entry.period}
                </span>
                <h3 className="text-xl md:text-2xl font-display text-white">
                  {entry.role}
                </h3>
                <p className="text-sage text-sm font-medium">
                  {entry.org} · <span className="text-forest-edge opacity-0 group-hover:opacity-100 transition-opacity">{entry.location}</span>
                </p>
              </div>

              <ul className={cn(
                "space-y-2 mt-4",
                index % 2 === 0 ? "md:items-end" : "md:items-start"
              )}>
                {entry.bullets.map((bullet, i) => (
                  <li key={i} className="flex gap-2 text-pale-mint/80 text-sm leading-relaxed items-start">
                    <span className="text-primary mt-1 flex-shrink-0">→</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Empty Side for alignment */}
            <div className="hidden md:block" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
