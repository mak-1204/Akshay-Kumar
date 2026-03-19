'use client';

import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
];

export function Nav() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5, rootMargin: "-10% 0px -40% 0px" }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
          Akshay V.
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-foreground sm:text-xl">
          I build, analyse, and advise.
        </h2>
        <p className="mt-4 max-w-xs leading-normal text-muted-foreground">
          Final-year Production Engineering student at NIT Trichy. Building digital products and data-driven solutions.
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
                  <span className="nav-link-line mr-4 bg-muted-foreground group-hover:bg-primary"></span>
                  <span className="nav-link-text font-code text-xs font-bold uppercase tracking-widest text-muted-foreground group-hover:text-foreground">
                    {item.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="mt-8 flex flex-col gap-6 lg:mt-0">
        <a 
          href="/resume.pdf" 
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 text-primary font-code text-sm w-fit border border-primary/20 px-4 py-2 rounded hover:bg-primary/10 transition-colors"
        >
          <FileText size={16} />
          View Resume
        </a>
        <ul className="flex items-center gap-5 text-muted-foreground">
          <li>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
          </li>
          <li>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </li>
          <li>
            <a 
              href="mailto:hello@akshay.v" 
              className="hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
