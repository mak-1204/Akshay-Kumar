import { SectionHeader } from "./SectionHeader";
import { Brain, Code, BarChart3, Rocket } from "lucide-react";

const SERVICES = [
  {
    title: "AI Automation",
    description: "I build AI-native workflows that replace manual labor. From LLM chatbots to voice-enabled systems for local businesses.",
    icon: <Brain className="text-primary h-6 w-6" />,
    tags: ["LLMs", "Sarvam AI", "Process Automation"]
  },
  {
    title: "Data Analytics & Strategy",
    description: "Transforming raw data into consulting-grade insights. I build pipelines and dashboards that drive business decisions.",
    icon: <BarChart3 className="text-primary h-6 w-6" />,
    tags: ["Power BI", "SQL", "Funnel Analysis", "Alteryx", "Python", "ML"]
  },
  {
    title: "Full-Stack Development",
    description: "Crafting high-performance digital products. Focused on Next.js architectures with seamless Firebase backends.",
    icon: <Code className="text-primary h-6 w-6" />,
    tags: ["Next.js", "Firebase", "Scalable Apps", "HTML", "CSS", "Vercel"]
  }
];

export function Services() {
  return (
    <section id="services" className="mb-24 scroll-mt-24">
      <SectionHeader number="02" title="Services" />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-1">
        {SERVICES.map((service, idx) => (
          <div 
            key={idx} 
            className="group p-6 rounded-lg bg-secondary/30 border border-border/50 hover:border-primary/30 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-md bg-secondary/50 group-hover:bg-primary/10 transition-colors">
                {service.icon}
              </div>
              <div>
                <h3 className="text-foreground text-lg font-bold group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {service.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-code text-primary uppercase tracking-widest bg-primary/5 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
        
        <div className="mt-4 p-6 rounded-lg border border-dashed border-primary/20 flex flex-col items-center justify-center text-center">
          <Rocket className="text-primary/40 h-8 w-8 mb-3" />
          <h4 className="text-foreground font-semibold">Ready to scale your business with AI?</h4>
          <p className="text-muted-foreground text-xs mt-1">Let's talk about your specific challenges.</p>
          <a href="https://wa.me/919994400311" target="_blank" rel="noopener noreferrer" className="mt-4 text-xs font-code text-primary hover:underline uppercase tracking-widest">
            Start a Conversation →
          </a>
        </div>
      </div>
    </section>
  );
}
