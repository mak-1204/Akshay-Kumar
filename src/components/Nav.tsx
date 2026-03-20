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
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -30% 0px',
      threshold: [0, 0.25, 0.5, 0.75, 1],
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    const handleScroll = () => {
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;
      if (isAtBottom) {
        setActiveSection('projects');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-4xl sm:text-5xl tracking-tight text-foreground font-semibold">
              Akshay Kumar M
            </h1>
            <h2 className="mt-3 text-lg font-medium tracking-tight text-primary sm:text-xl">
              Technologist & Problem solver
            </h2>
          </div>
        </div>
        <p className="mt-4 max-w-xs leading-normal text-muted-foreground">
          I build end-to-end AI solutions that solve real business problems using full-stack dev, agentic AI, data analytics and automation
        </p>

        <nav className="hidden lg:block mt-16">
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
