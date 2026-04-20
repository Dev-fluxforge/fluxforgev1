import React from 'react';
import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle2, ChevronRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { motion, AnimatePresence } from 'motion/react';

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('loading');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <div className="space-y-32 pb-32">
      {/* Page Hero */}
      <section className="pt-20 px-6 md:px-12 max-w-7xl mx-auto">
        <span className="section-eyebrow">GET IN TOUCH</span>
        <h1 className="text-5xl md:text-7xl mb-6">Let's build something together.</h1>
        <p className="text-pale-mint/60 text-lg md:text-xl max-w-2xl leading-relaxed">
          Have a project in mind or just want to say hi? We're available for new opportunities and collaborations.
        </p>
      </section>

      <section className="px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_500px] gap-20">
        {/* Left: Contact Info */}
        <div className="space-y-12">
          <div className="space-y-6">
             <div className="flex items-center gap-4 text-mint bg-mint/5 w-fit px-4 py-2 rounded-full border border-mint/10">
              <div className="w-2 h-2 rounded-full bg-mint animate-pulse" />
              <span className="text-[11px] font-mono tracking-wider uppercase">Available for new projects</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <ContactItem 
              icon={<Mail size={20} />} 
              label="Email" 
              value="badmusa891@gmail.com" 
              isLink
              link="mailto:badmusa891@gmail.com"
            />
            <ContactItem 
              icon={<Phone size={20} />} 
              label="Phone" 
              value="+2348137496961" 
            />
            <ContactItem 
              icon={<MapPin size={20} />} 
              label="Location" 
              value="Saki, Oyo, Nigeria (UTC+1)" 
            />
            <div className="space-y-3">
              <span className="section-eyebrow block">FOLLOW US</span>
              <div className="flex gap-4">
                <SocialIcon href="https://github.com/Dev-fluxforge" icon={<Github size={20} />} />
                <SocialIcon href="https://linkedin.com/in/muhammad-adeniyi-badmus-125692288" icon={<Linkedin size={20} />} />
                <SocialIcon href="mailto:badmusa891@gmail.com" icon={<Mail size={20} />} />
              </div>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="card-surface p-10 bg-deep-moss border-forest-edge shadow-2xl relative overflow-hidden">
          <AnimatePresence mode="wait">
            {formStatus === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center text-center py-12"
              >
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <CheckCircle2 size={48} />
                </div>
                <h3 className="text-2xl font-display text-white mb-2">Message sent!</h3>
                <p className="text-pale-mint/60">We'll respond within 24 hours.</p>
                <button 
                  onClick={() => setFormStatus('idle')}
                  className="mt-8 text-primary font-mono text-xs flex items-center gap-1 hover:underline"
                >
                  Send another message <ChevronRight size={14} />
                </button>
              </motion.div>
            ) : (
              <motion.form 
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit} 
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputField label="NAME" type="text" placeholder="Your name" required />
                  <InputField label="EMAIL" type="email" placeholder="email@example.com" required />
                </div>
                <InputField label="SUBJECT" type="text" placeholder="Project inquiry" required />
                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-sage tracking-widest uppercase">MESSAGE</label>
                  <textarea 
                    rows={5}
                    placeholder="Tell us about your project..."
                    required
                    className="w-full bg-void-black border border-forest-edge rounded-[--radius-button] p-4 text-pale-mint placeholder-sage focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all resize-none"
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={formStatus === 'loading'}
                  className="btn-primary w-full py-4 flex items-center justify-center gap-2 group disabled:opacity-50"
                >
                  {formStatus === 'loading' ? (
                    <div className="w-5 h-5 border-2 border-void-black border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>Send Message <Send size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></>
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}

function ContactItem({ icon, label, value, isLink, link }: { icon: React.ReactNode; label: string; value: string; isLink?: boolean; link?: string }) {
  return (
    <div className="flex flex-col gap-2">
      <span className="section-eyebrow text-[10px] mb-0 opacity-60">{label}</span>
      <div className="flex items-center gap-3 text-pale-mint/90 group">
        <div className="text-primary/70">{icon}</div>
        {isLink ? (
          <a href={link} className="hover:text-primary transition-colors">{value}</a>
        ) : (
          <span>{value}</span>
        )}
      </div>
    </div>
  );
}

function InputField({ label, type, placeholder, required }: { label: string; type: string; placeholder: string; required?: boolean }) {
  return (
    <div className="space-y-2 flex-1">
      <label className="text-[10px] font-mono text-sage tracking-widest uppercase">{label}</label>
      <input 
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full bg-void-black border border-forest-edge rounded-[--radius-button] px-4 py-3 text-pale-mint placeholder-sage focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all font-sans text-sm"
      />
    </div>
  );
}

function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 flex items-center justify-center bg-deep-moss border border-forest-edge text-primary/70 rounded-md transition-all hover:border-primary hover:text-primary hover:bg-primary/5"
    >
      {icon}
    </a>
  );
}
