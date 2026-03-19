import { SectionHeader } from "./SectionHeader";
import { ExternalLink, ArrowRight, Github } from "lucide-react";

const PROJECTS = [
  {
    title: "Sruthi Clinic Portal",
    type: "WEB DEVELOPMENT",
    description: "A focused appointment booking portal for a rural clinic, streamlining patient scheduling and management. Designed to improve patient accessibility and reduce manual booking overhead.",
    tags: ["Next.js", "Firebase", "Web Design"],
    link: "https://sruthiclinic.web.app",
    github: "https://github.com/akshaykumarm04/sruthi-clinic-portal",
    canIframe: true
  },
  {
    title: "Acharya Group Website",
    type: "FULL-STACK DEV",
    description: "Designed and developed a modern, high-performance web presence for the Acharya Group. Focused on seamless navigation, responsive architecture, and optimised loading states for a premium user experience.",
    tags: ["Next.js", "Tailwind CSS", "Vercel"],
    link: "https://acharya-website.vercel.app/",
    github: "https://github.com/mak-1204/acharya-website",
    canIframe: true
  },
  {
    title: "Manpro Equipments Dashboard",
    type: "DATA ANALYTICS",
    description: "Delivered end-to-end Power BI dashboards tracking orders, routing cards, and goods inward data. Translated raw Excel data into actionable KPIs — enabling real-time visibility into production delays and bottlenecks.",
    tags: ["Power BI", "Excel", "DAX"],
    link: "https://app.powerbi.com/",
    github: "https://github.com/akshaykumarm04/manpro-equipments-dashboard",
    canIframe: false
  },
  {
    title: "COVID-19 Global Trend Analysis",
    type: "DATA ENGINEERING",
    description: "SQL-based data exploration using joins, CTEs, temp tables, and aggregations to analyse global trends in cases, deaths, and vaccinations across countries. Prepared datasets for Tableau KPI dashboards.",
    tags: ["SQL", "Tableau", "Data Analysis"],
    link: "https://github.com/mak-1204/Covid_Data_Analytics",
    github: "https://github.com/mak-1204/Covid_Data_Analytics",
    canIframe: false
  },
  {
    title: "Predictive Maintenance System",
    type: "MACHINE LEARNING",
    description: "Analysed industrial machine sensor data to predict equipment failures. Trained Random Forest, SVM, and XGBoost models with SMOTE for class imbalance. Achieved 93% accuracy, reducing downtime by 25%.",
    tags: ["Python", "Scikit-learn", "XGBoost", "SMOTE"],
    link: "https://github.com/mak-1204/Predictive-Maintenance",
    github: "https://github.com/mak-1204/Predictive-Maintenance",
    canIframe: false
  }
];

export function Projects() {
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
              <div className={`lg:col-span-7 h-72 ${isEven ? 'lg:order-last' : ''}`}>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="proj-img-link block h-full">
                  <div className="proj-img-wrapper h-full border border-primary/10 bg-[#020c1b]">
                    {project.canIframe ? (
                      <iframe src={project.link} className="proj-iframe" scrolling="no" tabIndex={-1}></iframe>
                    ) : (
                      <div className="flex flex-col items-center justify-center h-full text-primary/30 p-8">
                        <span className="font-code text-[10px] mb-4 text-primary/50 tracking-tight break-all">
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
                <div className={`bg-[#0a192f]/95 p-6 rounded-md shadow-2xl border border-primary/5 mb-4 ${isEven ? 'lg:-mr-16' : 'lg:-ml-16'} ${isEven ? 'text-left' : 'text-right'}`}>
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
                      <button aria-label="Github Repo"><Github size={20} /></button>
                    </a>
                  )}
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-foreground hover:text-primary transition-colors p-1"
                    title="View Live Project"
                  >
                    <button aria-label="Live Project"><ExternalLink size={20} /></button>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="mt-24 text-center">
        <a href="https://github.com/akshaykumarm04" target="_blank" className="inline-flex items-center gap-2 text-foreground font-code text-sm hover:text-primary transition-colors group">
          View Full Project Archive
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
}
