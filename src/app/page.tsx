import { Nav } from '@/components/Nav';
import { Experience } from '@/components/Experience';
import { Projects } from '@/components/Projects';
import { Services } from '@/components/Services';
import { SkillMatcher } from '@/components/SkillMatcher';
import { GlowEffect } from '@/components/GlowEffect';
import { SectionHeader } from '@/components/SectionHeader';

export default function Home() {
  return (
    <div className="relative bg-background font-body">
      <GlowEffect />
      
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          
          {/* Left Panel - Fixed on Desktop */}
          <Nav />

          {/* Right Panel - Scrollable */}
          <main className="pt-24 lg:w-1/2 lg:py-24">
            
            {/* About Section */}
            <section id="about" className="mb-24 scroll-mt-24">
              <div className="lg:hidden mb-8">
                <SectionHeader number="01" title="About" />
              </div>
              <div className="space-y-4 text-muted-foreground text-base leading-relaxed">
                <p>
                  I'm a final-year Engineering student at <span className="text-foreground">NIT Trichy</span>. 
                  My journey is defined by a blend of engineering rigor and a passion for building AI-powered digital products.
                </p>
                <p>
                  I have a "consulting mindset" — always looking to analyze, optimize, and then execute. 
                  Whether it's building a bilingual hospital portal or automating field operation reporting pipelines, 
                  I focus on creating high-impact, data-driven solutions.
                </p>
                <p>
                  I am excited to be joining <span className="text-foreground font-semibold">Deloitte</span> as an Analyst starting August 2026.
                </p>

                {/* Statistics Grid */}
                <div className="grid grid-cols-3 gap-4 pt-8 pb-4">
                  <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-secondary/40 border border-border/50 hover:border-primary/30 transition-colors">
                    <span className="text-2xl font-bold text-foreground">1+</span>
                    <span className="text-[10px] text-muted-foreground uppercase tracking-widest text-center mt-1">Years Experience</span>
                  </div>
                  <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-secondary/40 border border-border/50 hover:border-primary/30 transition-colors">
                    <span className="text-2xl font-bold text-foreground">10+</span>
                    <span className="text-[10px] text-muted-foreground uppercase tracking-widest text-center mt-1">Projects</span>
                  </div>
                  <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-secondary/40 border border-border/50 hover:border-primary/30 transition-colors">
                    <span className="text-2xl font-bold text-foreground">2+</span>
                    <span className="text-[10px] text-muted-foreground uppercase tracking-widest text-center mt-1">Clients</span>
                  </div>
                </div>

                <div className="pt-4">
                  <p className="text-foreground mb-4">A few technologies I've been working with recently:</p>
                  <ul className="grid grid-cols-2 gap-2 font-code text-sm">
                    <li className="flex items-center gap-2"><span className="text-primary">▹</span> Next.js (Full-Stack)</li>
                    <li className="flex items-center gap-2"><span className="text-primary">▹</span> Python (Data Science)</li>
                    <li className="flex items-center gap-2"><span className="text-primary">▹</span> Firebase & LLMs</li>
                    <li className="flex items-center gap-2"><span className="text-primary">▹</span> SQL & Tableau</li>
                    <li className="flex items-center gap-2"><span className="text-primary">▹</span> Power BI / Alteryx</li>
                    <li className="flex items-center gap-2"><span className="text-primary">▹</span> Sarvam AI / Twilio</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* AI Skill Matcher - Interactive Widget */}
            <SkillMatcher />

            {/* Services Section */}
            <Services />

            {/* Experience Section */}
            <Experience />

            {/* Projects Section */}
            <Projects />

            {/* Footer */}
            <footer className="max-w-md pb-16 text-sm text-muted-foreground sm:pb-0">
              <p>
                Built with <a href="#" className="text-foreground hover:text-primary transition-colors">Next.js</a> and <a href="#" className="text-foreground hover:text-primary transition-colors">Tailwind CSS</a>. 
                Focusing on the intersection of Data, AI, and Business.
              </p>
            </footer>

          </main>
        </div>
      </div>
    </div>
  );
}
