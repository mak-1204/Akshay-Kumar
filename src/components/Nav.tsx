'use client';

import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, FileText, MessageSquare } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
];

export function Nav() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let currentSection = 'about';

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        // A standard 150px threshold. Because "scroll-mt-24" puts the top of the section at ~96px when clicked, 
        // 96px is less than 150px, meaning this section will accurately correctly capture the "active" state.
        // And because we iterate in DOM sequence, the lowest section intersecting the top viewport wins.
        if (rect.top <= 150) {
          currentSection = section.id;
        }
      });

      // Guaranteed fallback: If you reach the absolute bottom of the page, enforce 'projects'
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100) {
        currentSection = 'projects';
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Trigger once on mount
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-20">
      <div>
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-4xl sm:text-5xl tracking-tight text-foreground font-semibold">
              Akshay Kumar M
            </h1>
            <h2 className="mt-3 text-lg font-medium tracking-tight text-primary sm:text-xl">
              Consultant
            </h2>
          </div>
        </div>
        <p className="mt-4 max-w-xs leading-normal text-muted-foreground">
          I build end-to-end AI solutions that solve real business problems using full-stack dev, agentic AI, data analytics and automation
        </p>

        <a 
          href="https://darkwave-digital.vercel.app/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="mt-4 group inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 pr-4 pl-3 py-1.5 text-sm text-muted-foreground transition-all hover:bg-primary/10 hover:border-primary/40 hover:text-foreground"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
          </span>
          Running <span className="font-semibold text-foreground">Darkwave Digital</span> 
          <span className="opacity-50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
        </a>

        <nav className="hidden lg:block mt-8">
          <ul className="w-max">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`nav-link group flex items-center py-3 ${
                    activeSection === item.href.slice(1) ? 'active' : ''
                  }`}
                >
                  <span className="nav-link-line mr-4 group-hover:bg-primary"></span>
                  <span className="nav-link-text font-code text-xs font-bold uppercase tracking-widest text-muted-foreground group-hover:text-foreground">
                    {item.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="mt-8 flex flex-col gap-4 lg:mt-0">
        <div className="flex flex-wrap items-center gap-3">
          <a 
            href="https://wa.me/919994400311" 
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 bg-primary text-primary-foreground font-code text-xs px-4 py-2 rounded hover:opacity-90 transition-all h-10"
          >
            <MessageSquare size={14} />
            WhatsApp Me
          </a>
          <ThemeToggle />
        </div>
        
        <div className="flex items-center gap-6 mt-2">
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 text-xs font-code uppercase tracking-wider"
          >
            <FileText size={18} />
            Resume
          </a>
          <ul className="flex items-center gap-5 text-muted-foreground">
            <li>
              <a 
                href="https://github.com/mak-1204" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </li>
            <li>
              <a 
                href="https://www.linkedin.com/in/akshaykumarm04/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </li>
            <li>
              <a 
                href="mailto:akshay04.nitt@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
