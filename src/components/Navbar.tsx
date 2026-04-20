import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Skills', path: '/skills' },
  { name: 'Projects', path: '/projects' },
  { name: 'Experience', path: '/experience' },
  { name: 'Contact', path: '/contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "glass-nav transition-all duration-300 px-6 md:px-12 flex items-center justify-between",
      scrolled ? "h-16 bg-deep-moss/95 border-forest-edge/50 shadow-lg" : "h-20 bg-transparent border-transparent"
    )}>
      {/* Brand */}
      <Link to="/" className="flex items-center gap-1 group">
        <span className="font-display font-bold text-2xl text-white group-hover:text-primary transition-colors">Flux</span>
        <span className="font-display font-bold text-2xl text-primary group-hover:text-mint transition-colors">Forge</span>
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-2">
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) => cn(
              "px-4 py-2 text-sm font-medium transition-all rounded-md",
              isActive 
                ? "text-primary bg-primary/10" 
                : "text-pale-mint hover:text-mint hover:bg-forest-edge/30"
            )}
          >
            {link.name}
          </NavLink>
        ))}
      </div>

      {/* Hire Us Button */}
      <Link 
        to="/contact" 
        className="hidden md:block btn-primary text-sm font-medium px-5 py-2"
      >
        Hire Us
      </Link>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-primary p-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-16 bg-deep-moss border-b border-forest-edge p-6 flex flex-col gap-4 md:hidden z-50"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => cn(
                  "text-lg font-medium transition-colors",
                  isActive ? "text-primary" : "text-pale-mint hover:text-mint"
                )}
              >
                {link.name}
              </NavLink>
            ))}
            <Link 
              to="/contact" 
              onClick={() => setIsOpen(false)}
              className="btn-primary w-full text-center mt-2"
            >
              Hire Us
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
