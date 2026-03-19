import { SectionHeader } from "./SectionHeader";
import { ExternalLink, ArrowRight } from "lucide-react";

const PROJECTS = [
  {
    title: "Sruthi Clinic Portal",
    type: "AI AUTOMATION",
    description: "A rural clinic struggling with bilingual patient management and voice records. Built a Next.js portal integrated with Sarvam AI for Tamil voice processing and Twilio SMS queues. 40% reduction in manual data entry.",
    tags: ["Next.js", "Sarvam AI", "Twilio", "Gemini API"],
    link: "#",
    pattern: (
      <svg className="absolute inset-0 h-full w-full opacity-20" fill="none" viewBox="0 0 400 400">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        <circle cx="200" cy="200" r="80" stroke="currentColor" strokeWidth="1" className="animate-pulse" />
        <circle cx="200" cy="200" r="120" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
      </svg>
    )
  },
  {
    title: "Acharya Group Website",
    type: "FULL-STACK DEV",
    description: "Designed and developed a modern, high-performance web presence for the Acharya Group. Focused on seamless navigation, responsive architecture, and optimised loading states for a premium user experience.",
    tags: ["Next.js", "Tailwind CSS", "Vercel"],
    link: "https://acharya-website.vercel.app/",
    pattern: (
      <svg className="absolute inset-0 h-full w-full opacity-20" fill="none" viewBox="0 0 400 400">
        <path d="M0 100h400M0 200h400M0 300h400M100 0v400M200 0v400M300 0v400" stroke="currentColor" strokeWidth="0.5" />
        <rect x="100" y="100" width="100" height="100" stroke="currentColor" strokeWidth="1" />
        <rect x="200" y="200" width="100" height="100" stroke="currentColor" strokeWidth="1" />
      </svg>
    )
  },
  {
    title: "Manpro Equipments Dashboard",
    type: "DATA ANALYTICS",
    description: "Delivered end-to-end Power BI dashboards tracking orders, routing cards, and goods inward data. Translated raw Excel data into actionable KPIs — enabling real-time visibility into production delays and bottlenecks.",
    tags: ["Power BI", "Excel", "DAX"],
    link: "#",
    pattern: (
      <svg className="absolute inset-0 h-full w-full opacity-20" fill="none" viewBox="0 0 400 400">
        <rect x="50" y="250" width="40" height="100" stroke="currentColor" strokeWidth="1" />
        <rect x="120" y="150" width="40" height="200" stroke="currentColor" strokeWidth="1" />
        <rect x="190" y="200" width="40" height="150" stroke="currentColor" strokeWidth="1" />
        <rect x="260" y="100" width="40" height="250" stroke="currentColor" strokeWidth="1" />
        <path d="M50 250l70-100 70 50 70-100" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
      </svg>
    )
  },
  {
    title: "COVID-19 Global Trend Analysis",
    type: "DATA ENGINEERING",
    description: "SQL-based data exploration using joins, CTEs, temp tables, and aggregations to analyse global trends in cases, deaths, and vaccinations across countries. Prepared datasets for Tableau KPI dashboards.",
    tags: ["SQL", "Tableau", "Data Analysis"],
    link: "#",
    pattern: (
      <svg className="absolute inset-0 h-full w-full opacity-20" fill="none" viewBox="0 0 400 400">
        <path d="M200 50v300M50 200h300" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="200" cy="200" r="150" stroke="currentColor" strokeWidth="0.5" />
        <path d="M100 100l200 200M300 100L100 200" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
        <rect x="180" y="180" width="40" height="40" stroke="currentColor" strokeWidth="1" />
      </svg>
    )
  },
  {
    title: "Predictive Maintenance System",
    type: "MACHINE LEARNING",
    description: "Analysed industrial machine sensor data to predict equipment failures. Trained Random Forest, SVM, and XGBoost models with SMOTE for class imbalance. Achieved 93% accuracy, reducing downtime by 25%.",
    tags: ["Python", "Scikit-learn", "XGBoost", "SMOTE"],
    link: "#",
    pattern: (
      <svg className="absolute inset-0 h-full w-full opacity-20" fill="none" viewBox="0 0 400 400">
        <circle cx="100" cy="100" r="5" fill="currentColor" />
        <circle cx="300" cy="100" r="5" fill="currentColor" />
        <circle cx="100" cy="300" r="5" fill="currentColor" />
        <circle cx="300" cy="300" r="5" fill="currentColor" />
        <circle cx="200" cy="200" r="10" stroke="currentColor" strokeWidth="1" />
        <path d="M100 100l100 100M300 100l-100 100M100 300l100-100M300 300l-100-100" stroke="currentColor" strokeWidth="0.5" />
      </svg>
    )
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
              <div className={`lg:col-span-7 relative h-72 rounded-md overflow-hidden bg-[#020c1b] border border-primary/10 ${isEven ? 'lg:order-last' : ''}`}>
                <div className="absolute inset-0 flex items-center justify-center text-primary/30">
                  {project.pattern}
                </div>
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
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-foreground hover:text-primary transition-colors p-1"
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
        <a href="https://github.com" target="_blank" className="inline-flex items-center gap-2 text-foreground font-code text-sm hover:text-primary transition-colors group">
          View Full Project Archive
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
}
