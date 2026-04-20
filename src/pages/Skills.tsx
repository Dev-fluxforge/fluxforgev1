import { SkillGroup } from '@/src/components/SkillGroup';
import { SKILL_GROUPS } from '@/src/constants';

export default function Skills() {
  return (
    <div className="space-y-32 pb-32">
      {/* Page Hero */}
      <section className="pt-20 px-6 md:px-12 max-w-7xl mx-auto">
        <span className="section-eyebrow">SKILLS & STACK</span>
        <h1 className="text-5xl md:text-7xl mb-6">Our technology stack.</h1>
        <p className="text-pale-mint/60 text-lg md:text-xl max-w-2xl leading-relaxed">
          Built on proven tools. Driven by modern standards. We specialize in building fast, scalable, and maintainable applications.
        </p>
      </section>

      {/* Skill Groups Grid */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILL_GROUPS.map((group) => (
            <SkillGroup 
              key={group.title} 
              title={group.title} 
              skills={group.skills} 
            />
          ))}
        </div>
      </section>

      {/* Office Tools & Competencies */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h3 className="section-eyebrow mb-8">OFFICE PROFICIENCY</h3>
          <div className="flex flex-wrap gap-3">
            <ToolPill name="Microsoft Word" />
            <ToolPill name="Excel" />
            <ToolPill name="PowerPoint" />
          </div>
        </div>

        <div>
          <h3 className="section-eyebrow mb-8">CORE COMPETENCIES</h3>
          <div className="flex flex-wrap gap-2">
            <Tag name="Responsive Web Design" />
            <Tag name="Full-Stack Web Apps" />
            <Tag name="UI/UX Implementation" />
            <Tag name="Brand Identity Design" />
            <Tag name="Client Communication" />
            <Tag name="Agile Collaboration" />
            <Tag name="Mobile-First Development" />
          </div>
        </div>
      </section>
    </div>
  );
}

function ToolPill({ name }: { name: string }) {
  return (
    <div className="bg-deep-moss border border-forest-edge px-5 py-2.5 rounded-full text-pale-mint text-sm font-medium hover:border-primary transition-colors">
      {name}
    </div>
  );
}

function Tag({ name }: { name: string }) {
  return (
    <div className="bg-primary/5 border border-primary/20 text-primary px-4 py-1.5 rounded-md text-[11px] font-mono whitespace-nowrap">
      {name}
    </div>
  );
}
