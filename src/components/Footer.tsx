import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-deep-moss border-t border-primary/20 pt-16 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        {/* Left: Copyright & Socials */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <SocialIcon href="https://github.com/Dev-fluxforge" icon={<Github size={20} />} />
            <SocialIcon href="https://linkedin.com/in/muhammad-adeniyi-badmus-125692288" icon={<Linkedin size={20} />} />
            <SocialIcon href="mailto:badmusa891@gmail.com" icon={<Mail size={20} />} />
          </div>
          <p className="text-sage text-sm">
            © {currentYear} FluxForge Software Engineering Company · Saki, Nigeria
          </p>
        </div>

        {/* Right: Wordmark */}
        <Link to="/" className="flex items-center gap-1">
          <span className="font-display font-bold text-2xl text-white">Flux</span>
          <span className="font-display font-bold text-2xl text-primary">Forge</span>
        </Link>
      </div>
    </footer>
  );
}

function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 flex items-center justify-center bg-forest-edge border border-forest-edge text-primary rounded-md transition-all hover:border-primary hover:bg-primary/10 hover:shadow-[0_0_15px_rgba(0,168,107,0.2)]"
    >
      {icon}
    </a>
  );
}
