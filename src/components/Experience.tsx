import { SectionHeader } from "./SectionHeader";

const EXPERIENCE_DATA = [
  {
    company: "ChampionX (SLB)",
    role: "Analyst Intern",
    period: "May 2025 — Jul 2025",
    location: "Chennai, TN",
    description: "Redesigned the entire FTA qualification process using Python and Alteryx by extracting rules from 12+ U.S. Free Trade Agreements, clustering them into 8 logical groups, and scripting tariff shift logic for each cluster.\n\nBuilt a Power BI dashboard incorporating HTS codes, component costs, EEL costs, tariff shifts, polymer percentages, and process types — eliminating manual qualification errors.\n\nAutomated 70% of the process end-to-end, reducing qualification time by 90% and significantly improving accuracy and decision-making efficiency.",
    skills: ["Python", "Alteryx", "Power BI", "Automation"]
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
                {exp.role} @ {exp.company}
              </h3>
              <p className="text-sm text-primary/80 font-code mb-2">{exp.location}</p>
              <p className="mt-2 text-muted-foreground text-sm leading-relaxed whitespace-pre-line">
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
