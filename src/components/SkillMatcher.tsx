
'use client';

import { useState } from 'react';
import { matchJobDescription, type JobDescriptionMatchOutput } from '@/ai/flows/ai-job-match-highlight';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Sparkles, Loader2, CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export function SkillMatcher() {
  const [jobDescription, setJobDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<JobDescriptionMatchOutput | null>(null);

  const handleMatch = async () => {
    if (!jobDescription.trim()) return;
    setLoading(true);
    try {
      const output = await matchJobDescription({ jobDescription });
      setResult(output);
    } catch (error) {
      console.error('Matching error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="bg-secondary/40 border-primary/20 mb-24">
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="text-primary h-5 w-5" />
          <span className="font-code text-primary text-xs uppercase tracking-widest">AI Matching</span>
        </div>
        <CardTitle className="text-foreground text-xl">Skill Matcher</CardTitle>
        <CardDescription>
          Paste a job description to see how my skills and projects align with the role.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <Textarea
          placeholder="Paste job description here..."
          className="bg-background/50 border-border focus-visible:ring-primary min-h-[120px]"
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
        />
        <Button 
          onClick={handleMatch} 
          disabled={loading || !jobDescription}
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
        >
          {loading ? <Loader2 className="animate-spin mr-2" /> : <Sparkles className="mr-2 h-4 w-4" />}
          Analyze Fit
        </Button>

        {result && (
          <div className="space-y-4 animate-in fade-in duration-500">
            {result.relevantSkills.length > 0 && (
              <div>
                <h4 className="text-foreground text-sm font-semibold mb-2 flex items-center gap-2">
                  <CheckCircle2 className="text-primary h-4 w-4" />
                  Matching Skills
                </h4>
                <div className="flex flex-wrap gap-2">
                  {result.relevantSkills.map((skill) => (
                    <span key={skill} className="bg-primary/20 text-primary font-code text-[11px] px-2 py-1 rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {result.relevantProjects.length > 0 && (
              <div>
                <h4 className="text-foreground text-sm font-semibold mb-2 flex items-center gap-2">
                  <CheckCircle2 className="text-primary h-4 w-4" />
                  Relevant Projects
                </h4>
                <ul className="space-y-1">
                  {result.relevantProjects.map((project) => (
                    <li key={project} className="text-muted-foreground text-sm list-disc list-inside">
                      {project}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {result.relevantSkills.length === 0 && result.relevantProjects.length === 0 && (
              <p className="text-muted-foreground text-sm italic">
                No direct matches found in current portfolio content. Try a different description!
              </p>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
