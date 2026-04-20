import React from 'react';
import { motion } from 'motion/react';
import { Download, Mail, Phone, MapPin, GraduationCap, Award, Languages } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function About() {
  return (
    <div className="space-y-32 pb-32">
      {/* Page Hero */}
      <section className="pt-20 px-6 md:px-12 max-w-7xl mx-auto">
        <span className="section-eyebrow">ABOUT FLUXFORGE</span>
        <h1 className="text-5xl md:text-7xl mb-6">Engineering with purpose.</h1>
        <p className="text-pale-mint/60 text-lg md:text-xl max-w-2xl leading-relaxed italic border-l-4 border-mint/20 pl-6">
          "Technology is not the goal — transformation is. We build interfaces that serve real people, solve real problems, and create lasting impact."
        </p>
      </section>

      {/* Main Narrative */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-20">
        <div className="space-y-8 text-pale-mint/80 text-lg leading-relaxed">
          <p>
            FluxForge is a front-end software engineering company founded by Muhammad Adeniyi Badmus — a developer and designer from Saki, Oyo, Nigeria, studying Computer Science (B.Tech) at Ladoke Akintola University of Technology (LAUTECH).
          </p>
          <p>
            From edtech platforms to luxury client websites, from corporate dashboards to non-profit digital campaigns — FluxForge builds things that work, and things that last.
          </p>
          
          <div className="pt-12 grid grid-cols-2 gap-8">
            <MetricItem number="10+" label="Live Projects" />
            <MetricItem number="5,000+" label="Weekly Users via BARHF" />
            <MetricItem number="98%" label="Client Satisfaction" />
            <MetricItem number="6 months" label="SIWES training" />
          </div>

          <div className="pt-12">
            <h3 className="section-eyebrow">COMMUNITY IMPACT</h3>
            <h4 className="text-3xl text-white mb-8">Beyond the screen.</h4>
            <div className="space-y-6">
              <ImpactCard 
                title="Lead Graphic Designer" 
                org="BARHF Foundation — 5,000+ weekly reach, 15+ volunteer hrs/month" 
              />
              <ImpactCard 
                title="Senate President" 
                org="NAOOS LAUTECH Chapter — legislative leadership, student welfare" 
              />
              <ImpactCard 
                title="Honourable" 
                org="NUSS LAUTECH Chapter — Saki indigenous student representation" 
              />
            </div>
          </div>
        </div>

        {/* Sticky Profile Card */}
        <aside className="lg:block">
          <div className="sticky top-24 card-surface p-8 bg-deep-moss border-forest-edge shadow-2xl rounded-2xl">
            <div className="flex flex-col items-center text-center mb-8">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-mint flex items-center justify-center text-void-black text-2xl font-display font-bold mb-4 shadow-[0_0_20px_rgba(0,168,107,0.3)]">
                MA
              </div>
              <h3 className="text-2xl font-display text-white">Muhammad Adeniyi Badmus</h3>
              <p className="text-primary text-xs font-mono tracking-widest mt-1 uppercase">Principal Engineer & Founder</p>
            </div>

            <div className="space-y-5 border-t border-forest-edge pt-8">
              <InfoRow icon={<MapPin size={16} />} text="Saki, Oyo, Nigeria" />
              <InfoRow icon={<GraduationCap size={16} />} text="B.Tech Computer Science — LAUTECH" />
              <InfoRow icon={<Award size={16} />} text="Professional Diploma, Front-End SE" />
              <InfoRow icon={<Languages size={16} />} text="English, Yoruba, Arabic" />
              <InfoRow icon={<Mail size={16} />} text="badmusa891@gmail.com" isLink />
              <InfoRow icon={<Phone size={16} />} text="+2348137496961" />
            </div>

            <a 
              href="#" 
              className="btn-primary w-full flex items-center justify-center gap-2 py-3 mt-8 text-sm"
            >
              <Download size={16} /> Download CV
            </a>
          </div>
        </aside>
      </section>
    </div>
  );
}

function MetricItem({ number, label }: { number: string; label: string }) {
  return (
    <div className="card-surface p-6 bg-deep-moss border-t-2 border-primary/30">
      <div className="text-3xl font-display font-bold text-mint mb-1">{number}</div>
      <div className="text-[11px] font-medium text-sage uppercase tracking-wider">{label}</div>
    </div>
  );
}

function ImpactCard({ title, org }: { title: string; org: string }) {
  return (
    <div className="flex gap-4 items-start group">
      <div className="text-primary mt-1 group-hover:translate-x-1 transition-transform">→</div>
      <div>
        <h5 className="text-mint font-medium">{title}</h5>
        <p className="text-pale-mint/60 text-sm">{org}</p>
      </div>
    </div>
  );
}

function InfoRow({ icon, text, isLink }: { icon: React.ReactNode; text: string; isLink?: boolean }) {
  return (
    <div className="flex items-center gap-3 text-pale-mint/70">
      <div className="text-primary/70">{icon}</div>
      {isLink ? (
        <a href={`mailto:${text}`} className="text-sm hover:text-primary transition-colors truncate">{text}</a>
      ) : (
        <span className="text-sm truncate">{text}</span>
      )}
    </div>
  );
}
