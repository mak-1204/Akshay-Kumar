
import { SectionHeader } from "./SectionHeader";

const EXPERIENCE_DATA = [
  {
    company: "",
    role: "Analyst",
    period: "Aug 2026 — Future",
    description: "Confirmed offer. Joining as an Analyst to leverage production engineering and data analytics background for strategic consulting and business optimization.",
    skills: ["Consulting", "Analysis", "Data Strategy"]
  },
  {
    company: "",
    role: "Business Analyst Intern",
    period: "2025",
    description: "AI-native CRM startup. Analyzed complex sales funnels and automated lead scoring workflows using AI-native CRM metrics.",
    skills: ["CRM", "SQL", "Tableau", "Python"]
  },
  {
    company: "SLB (ChampionX)",
    role: "Data & Automation Intern",
    period: "2024",
    description: "Spearheaded the automation of field operation reporting. Built Alteryx pipelines that streamlined data collection for multi-regional operations.",
    skills: ["Alteryx", "Power BI", "Python", "Automation"]
  }
];

export function Experience() {
  return (
    <section id="experience" className="mb-24 scroll-mt-24">
      <SectionHeader number="03" title="Experience" />
      <div className="space-y-12">
        {EXPERIENCE_DATA.map((exp, idx) => (
          <div key={idx} className="group relative grid grid-cols-1 md:grid-cols-8 gap-4 transition-all duration-300">
            <div className="md:col-span-2 text-muted-foreground font-code text-sm pt-1">
              {exp.period}
            </div>
            <div className="md:col-span-6">
              <h3 className="text-foreground font-semibold group-hover:text-primary transition-colors text-lg">
                {exp.role}
              </h3>
              {exp.company && (
                <p className="text-sm text-primary/80 font-code mb-2">{exp.company}</p>
              )}
              <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                {exp.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <span key={skill} className="bg-primary/10 text-primary font-code text-[11px] px-2 py-1 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
