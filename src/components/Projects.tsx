"use client";

import { useEffect, useRef } from "react";
import { SectionHeader } from "./SectionHeader";
import { ExternalLink, ArrowRight, Github } from "lucide-react";

const PROJECTS = [
  {
    title: "PackTogether",
    type: "FULL-STACK DEV",
    description: "A collaborative trip planning platform enabling groups to coordinate itineraries, shared expenses, and logistics in real-time with seamless synchronization.",
    tags: ["Next.js", "Firebase", "Tailwind CSS", "Real-time"],
    link: "https://packtogether.vercel.app/",
    github: "https://github.com/mak-1204/PackTogether",
    canIframe: true
  },
  {
    title: "Unscripted",
    type: "WEB PLATFORM",
    description: "A modern, fully-responsive website for the Unscripted club of NIT Trichy — the college's premier public speaking and debate club (an NIT Trichy version of Toastmasters). Features a secure Admin Portal, seamless event management, and mobile-optimized interfaces for smooth member interaction.",
    tags: ["React", "Website", "Tailwind CSS"],
    link: "https://unscripted-lemon.vercel.app/",
    github: "https://github.com/mak-1204/Unscripted",
    canIframe: false
  },
  {
    title: "Pratin Alagiri Portfolio",
    type: "FULL-STACK DEV",
    description: "A sleek, high-performance personal portfolio website built for a client. Features a modern aesthetic with smooth scrolling, responsive design, and optimized asset delivery.",
    tags: ["Next.js", "Tailwind CSS", "Vercel", "UI/UX"],
    link: "https://pratin-alagiri.vercel.app/",
    github: "https://github.com/mak-1204/Pratin-Alagiri",
    canIframe: true
  },
  {
    title: "Darkwave Digital",
    type: "AGENCY PROJECT",
    description: "Full-service digital marketing agency platform focusing on SEO, lead generation, and high-performance website building for growth-oriented brands.",
    tags: ["Digital Strategy", "Lead Gen", "Modern Web"],
    link: "https://darkwave-digital.vercel.app/",
    github: "https://github.com/mak-1204/darkwave-digital",
    canIframe: true
  },
  {
    title: "HiveHaven",
    type: "LEAD GEN WEBSITE",
    description: "A high-conversion website designed for an interior design and construction firm. Engineered specifically to capture leads from paid ad campaigns, featuring optimized performance, clear calls-to-action, and a premium portfolio showcase.",
    tags: ["Landing Page", "Lead Generation", "UI/UX"],
    link: "https://hivehaven.vercel.app/",
    github: "https://github.com/mak-1204/HiveHaven",
    canIframe: true
  },
  {
    title: "Masee's Footwear",
    type: "E-COMMERCE",
    description: "Premium handcrafted leather footwear store in Ambur — showcasing modern style with durable materials through a refined digital storefront.",
    tags: ["Web Design", "E-com Architecture", "UI/UX"],
    link: "https://maseesambur.vercel.app/",
    github: "https://github.com/mak-1204/masees-footwear",
    canIframe: true
  },
  {
    title: "Sruthi Clinic Portal",
    type: "WEB DEVELOPMENT",
    description: "A focused appointment booking portal for a rural clinic, streamlining patient scheduling and management to reduce manual overhead.",
    tags: ["Next.js", "Firebase", "Tailwind CSS", "Vercel"],
    link: "https://sruthiclinic.web.app",
    github: "https://github.com/akshaykumarm04/sruthi-clinic-portal",
    canIframe: true
  },
  {
    title: "Acharya Group Website",
    type: "FULL-STACK DEV",
    description: "Designed and developed a modern, high-performance web presence for the Acharya Group with optimized loading states.",
    tags: ["Next.js", "Tailwind CSS", "Firebase", "Vercel"],
    link: "https://acharya-website.vercel.app/",
    github: "https://github.com/mak-1204/acharya-website",
    canIframe: true
  },
  {
    title: "COVID-19 Global Trend Analysis",
    type: "DATA ENGINEERING",
    description: "SQL-based data exploration using joins, CTEs, and aggregations to analyse global trends. Prepared datasets for Tableau KPI dashboards.",
    tags: ["SQL", "Tableau", "Data Analysis"],
    link: "https://github.com/mak-1204/Covid_Data_Analytics",
    github: "https://github.com/mak-1204/Covid_Data_Analytics",
    canIframe: false
  },
  {
    title: "Predictive Maintenance System",
    type: "MACHINE LEARNING",
    description: "Analysed industrial sensor data to predict equipment failures using XGBoost. Achieved 93% accuracy, reducing downtime significantly.",
    tags: ["Python", "Scikit-learn", "XGBoost", "SMOTE"],
    link: "https://github.com/mak-1204/Predictive-Maintenance",
    github: "https://github.com/mak-1204/Predictive-Maintenance",
    canIframe: false
  }
];

export function Projects() {
  const wrapperRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const width = entry.contentRect.width;
        // 1280 is our target layout width for the iframe
        const scale = width / 1280;
        const iframe = entry.target.querySelector('iframe');
        if (iframe) {
          iframe.style.transform = `scale(${scale})`;
        }
      }
    });

    wrapperRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="mb-24 scroll-mt-24">
      <SectionHeader number="04" title="Projects" />
      <div className="flex flex-col gap-32">
        {PROJECTS.map((project, idx) => {
          const isEven = idx % 2 !== 0;
          return (
            <div 
              key={idx} 
              className={`group relative grid grid-cols-1 lg:grid-cols-12 gap-6 items-center`}
            >
              {/* Image Side */}
              <div className={`lg:col-span-7 w-full ${isEven ? 'lg:order-last' : ''}`}>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="proj-img-link block h-full">
                  <div 
                    ref={(el) => {
                      if (el && !wrapperRefs.current.includes(el)) {
                        wrapperRefs.current[idx] = el;
                      }
                    }}
                    className="proj-img-wrapper h-full border border-primary/10"
                  >
                    {project.canIframe ? (
                      <iframe src={project.link} className="proj-iframe" scrolling="no" tabIndex={-1}></iframe>
                    ) : (
                      <div className="flex flex-col items-center justify-center h-full text-primary/30 p-8">
                        <span className="font-code text-[10px] mb-4 text-primary/50 tracking-tight break-all text-center">
                          {project.link.replace('https://', '')}
                        </span>
                        <ExternalLink size={32} className="opacity-20" />
                      </div>
                    )}
                    <div className="proj-img-overlay">
                      <span>Visit Site ↗</span>
                    </div>
                  </div>
                </a>
              </div>

              {/* Content Side */}
              <div className={`lg:col-span-5 flex flex-col ${isEven ? 'lg:items-start' : 'lg:items-end'} z-20`}>
                <p className="font-code text-primary text-[11px] font-bold uppercase tracking-widest mb-2">
                  {project.type}
                </p>
                <h3 className={`text-primary text-2xl font-bold mb-4 ${isEven ? 'text-left' : 'text-right'}`}>
                  {project.title}
                </h3>
                
                {/* Overlay Box */}
                <div className={`bg-card/95 p-6 rounded-md shadow-2xl border border-primary/5 mb-4 ${isEven ? 'lg:-mr-16' : 'lg:-ml-16'} ${isEven ? 'text-left' : 'text-right'}`}>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tags and Link */}
                <div className={`flex flex-wrap gap-x-4 gap-y-2 mb-4 ${isEven ? 'justify-start' : 'justify-end'}`}>
                  {project.tags.map(tag => (
                    <span key={tag} className="text-primary font-code text-[12px] lowercase tracking-tight">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className={`flex items-center gap-4 ${isEven ? 'justify-start' : 'justify-end'}`}>
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-foreground hover:text-primary transition-colors p-1"
                      title="View GitHub Repository"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-foreground hover:text-primary transition-colors p-1"
                    title="View Live Project"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="mt-24 text-center">
        <a href="https://github.com/mak-1204" target="_blank" className="inline-flex items-center gap-2 text-foreground font-code text-sm hover:text-primary transition-colors group">
          View Full Project Archive
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
}
