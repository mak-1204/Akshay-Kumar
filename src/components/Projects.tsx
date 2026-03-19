import { SectionHeader } from "./SectionHeader";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const PROJECTS = [
  {
    title: "Sruthi Clinic Portal",
    type: "AI Automation",
    description: "Problem: A rural clinic struggling with bilingual patient management and voice records. Solution: Built a Next.js portal integrated with Sarvam AI for Tamil voice processing and Twilio SMS queues. Result: 40% reduction in manual data entry.",
    tags: ["Next.js", "Sarvam AI", "Twilio", "Gemini API"],
    featured: true,
    image: PlaceHolderImages.find(img => img.id === 'project-hospital')?.imageUrl
  },
  {
    title: "SLB Field Ops Automation",
    type: "Data Engineering",
    description: "Problem: Fragmented reporting across multiple field operations. Solution: Designed Alteryx pipelines and Power BI dashboards. Result: Consolidated reporting reduced lead time for data insights by 60%.",
    tags: ["Python", "Alteryx", "Power BI"],
    featured: false
  },
  {
    title: "Leather Export Catalog System",
    type: "Full-Stack Dev",
    description: "Problem: Local leather exporters in Ambur needed a simple way to manage catalogs. Solution: Firebase-powered catalog with WhatsApp integration for instant inquiries.",
    tags: ["Firebase", "WhatsApp API", "React"],
    featured: false
  },
  {
    title: "CRM Analytics Suite",
    type: "Analytics",
    description: "Problem: Lack of visibility into sales funnels for an AI startup. Solution: SQL-driven Tableau dashboard mapping pipeline metrics from scratch.",
    tags: ["SQL", "Tableau", "Business Analysis"],
    featured: false
  }
];

export function Projects() {
  return (
    <section id="projects" className="mb-24 scroll-mt-24">
      <SectionHeader number="04" title="Projects" />
      <div className="grid grid-cols-1 gap-12">
        {PROJECTS.map((project, idx) => (
          project.featured ? (
            <div key={idx} className="group grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-7 relative h-64 rounded-md overflow-hidden bg-secondary">
                <Image
                  src={project.image || "https://picsum.photos/seed/project/800/600"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-50 group-hover:opacity-100"
                  data-ai-hint="medical dashboard"
                />
              </div>
              <div className="lg:col-span-5 flex flex-col lg:items-end">
                <p className="font-code text-primary text-[10px] uppercase tracking-widest mb-1">{project.type}</p>
                <h3 className="text-foreground text-xl font-bold mb-4 group-hover:text-primary transition-colors text-right">
                  {project.title}
                </h3>
                <div className="lg:bg-secondary lg:p-6 rounded-md lg:shadow-xl relative z-10 lg:-ml-12 lg:mb-4 lg:text-right">
                  <p className="text-muted-foreground text-sm whitespace-pre-line">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 lg:justify-end mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-muted-foreground font-code text-[11px]">{tag}</span>
                  ))}
                </div>
                <div className="flex items-center gap-4 lg:justify-end text-foreground">
                   <a href="#" className="hover:text-primary transition-colors"><ExternalLink size={18} /></a>
                </div>
              </div>
            </div>
          ) : (
            <div key={idx} className="group bg-secondary/30 p-8 rounded-md hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-primary/20">
              <div className="flex justify-between items-start mb-6">
                <div className="text-primary font-code text-[10px] uppercase tracking-widest">
                  {project.type}
                </div>
                <div className="flex gap-4">
                  <Github size={20} className="text-muted-foreground hover:text-primary cursor-pointer" />
                  <ExternalLink size={20} className="text-muted-foreground hover:text-primary cursor-pointer" />
                </div>
              </div>
              <h3 className="text-foreground text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-3 mt-auto">
                {project.tags.map(tag => (
                  <span key={tag} className="text-muted-foreground font-code text-[11px]">{tag}</span>
                ))}
              </div>
            </div>
          )
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <a href="https://github.com" target="_blank" className="inline-flex items-center gap-2 text-foreground font-code text-sm hover:text-primary transition-colors group">
          View Full Project Archive
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
}
