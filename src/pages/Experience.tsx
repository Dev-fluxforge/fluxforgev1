import { Timeline } from '@/src/components/Timeline';
import { EXPERIENCE } from '@/src/constants';
import { GraduationCap, Award } from 'lucide-react';

export default function Experience() {
  return (
    <div className="space-y-32 pb-32">
      {/* Page Hero */}
      <section className="pt-20 px-6 md:px-12 max-w-7xl mx-auto">
        <span className="section-eyebrow">EXPERIENCE</span>
        <h1 className="text-5xl md:text-7xl mb-6">Built through doing.</h1>
        <p className="text-pale-mint/60 text-lg md:text-xl max-w-2xl leading-relaxed">
          A chronological journey through professional milestones, academic achievements, and community leadership roles.
        </p>
      </section>

      {/* Work Timeline */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto">
        <Timeline entries={EXPERIENCE} />
      </section>

      {/* Education & Certifications */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <div className="flex items-center gap-3 mb-10">
            <GraduationCap className="text-primary" size={32} />
            <h3 className="section-eyebrow mb-0">ACADEMIC BACKGROUND</h3>
          </div>
          <div className="space-y-6">
            <EducationItem 
              title="B.Tech Computer Science"
              org="LAUTECH, Ogbomosho"
              date="Dec 2023 – Apr 2028 (Expected)"
              meta="Matric No: 2023003609"
            />
            <EducationItem 
              title="Professional Diploma, Front-End SE"
              org="SQI College of ICT"
              date="Aug 2024 – Present"
            />
            <EducationItem 
              title="SSCE, Science Track"
              org="Nasfat College, Saki"
              date="Sep 2021 – Jun 2024"
            />
            <EducationItem 
              title="BECE"
              org="Ansar-ud-Deen Society Comprehensive College"
              date="Sep 2017 – Jun 2020"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-10">
            <Award className="text-primary" size={32} />
            <h3 className="section-eyebrow mb-0">CERTIFICATIONS</h3>
          </div>
          <div className="space-y-4">
            <CertCard title="Letter of Completion — SIWES, Dervac HUB" date="Dec 2025" />
            <CertCard title="Certificate of Completion — CodSoft Internship" date="Feb 2025" />
            <CertCard title="Codeliber HTML Certificate" date="2023" />
            <CertCard title="Graphic Design Certification — Okitech Cyber Cafe" date="2022" />
          </div>
        </div>
      </section>
    </div>
  );
}

function EducationItem({ title, org, date, meta }: { title: string; org: string; date: string; meta?: string }) {
  return (
    <div className="border-l-2 border-forest-edge pl-6 py-1">
      <div className="text-mint font-mono text-[11px] mb-1">{date}</div>
      <h4 className="text-lg text-white font-display mb-1">{title}</h4>
      <p className="text-pale-mint/60 text-sm">{org}</p>
      {meta && <p className="text-sage text-[10px] mt-2 font-mono uppercase tracking-wider">{meta}</p>}
    </div>
  );
}

function CertCard({ title, date }: { title: string; date: string }) {
  return (
    <div className="card-surface p-5 bg-deep-moss border-forest-edge hover:border-primary/40 transition-colors flex justify-between items-center group">
      <div>
        <h5 className="text-pale-mint font-medium group-hover:text-white transition-colors">{title}</h5>
        <p className="text-sage text-xs font-mono">{date}</p>
      </div>
      <div className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">→</div>
    </div>
  );
}
