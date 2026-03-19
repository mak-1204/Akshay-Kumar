
import { SectionHeader } from "./SectionHeader";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const PROJECTS = [
  {
    title: "Sruthi Clinic & Speciality Hospital Portal",
    description: "A comprehensive Next.js & Firebase solution for a real client in Ambur, TN. Features Sarvam AI (Tamil voice), Twilio SMS, and a Gemini-powered chatbot. Manages bilingual interfaces and token-based appointment queues.",
    tags: ["Next.js", "Firebase", "Sarvam AI", "Twilio", "Gemini API"],
    featured: true,
    image: PlaceHolderImages.find(img => img.id === 'project-hospital')?.imageUrl
  },
  {
    title: "SLB Field Ops Automation",
    description: "Python, Alteryx, and Power BI powered automation for field operations reporting.",
    tags: ["Python", "Alteryx", "Power BI"],
    featured: false
  },
  {
    title: "Freelance Web Dev (Local Business)",
    description: "Firebase catalog and WhatsApp inquiry sites for Ambur leather exporters.",
    tags: ["Firebase", "WhatsApp API", "React"],
    featured: false
  },
  {
    title: "Expedify CRM Analytics Dashboard",
    description: "SQL and Tableau based business analysis dashboard for funnel tracking.",
    tags: ["SQL", "Tableau", "Business Analysis"],
    featured: false
  }
];

export function Projects() {
  return (
    <section id="projects" className="mb-24 scroll-mt-24">
      <SectionHeader number="03" title="Projects" />
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
                <p className="font-code text-primary text-xs mb-1">Featured Project</p>
                <h3 className="text-foreground text-xl font-bold mb-4 group-hover:text-primary transition-colors text-right">
                  {project.title}
                </h3>
                <div className="lg:bg-secondary lg:p-6 rounded-md lg:shadow-xl relative z-10 lg:-ml-12 lg:mb-4 lg:text-right">
                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 lg:justify-end mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-muted-foreground font-code text-[11px]">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div key={idx} className="group bg-secondary/30 p-8 rounded-md hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-primary/20">
              <div className="flex justify-between items-start mb-6">
                <div className="text-primary">
                  <ExternalLink size={24} />
                </div>
                <div className="flex gap-4">
                  <Github size={20} className="text-muted-foreground hover:text-primary cursor-pointer" />
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
    </section>
  );
}
