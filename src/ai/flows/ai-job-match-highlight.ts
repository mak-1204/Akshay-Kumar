'use server';
/**
 * @fileOverview An AI agent that analyzes job descriptions against a candidate's portfolio to highlight relevant skills and projects.
 *
 * - matchJobDescription - A function that handles the job description matching process.
 * - JobDescriptionMatchInput - The input type for the matchJobDescription function.
 * - JobDescriptionMatchOutput - The return type for the matchJobDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const JobDescriptionMatchInputSchema = z.object({
  jobDescription: z
    .string()
    .describe('The job description to analyze for relevant skills and projects.'),
});
export type JobDescriptionMatchInput = z.infer<
  typeof JobDescriptionMatchInputSchema
>;

const JobDescriptionMatchOutputSchema = z.object({
  relevantSkills: z
    .array(z.string())
    .describe(
      "A list of skills from the candidate's portfolio that are highly relevant to the job description. Only return skills explicitly listed in the portfolio. If no skills are relevant, return an empty array."
    ),
  relevantProjects: z
    .array(z.string())
    .describe(
      "A list of project titles from the candidate's portfolio that are highly relevant to the job description. Only return project titles explicitly listed in the portfolio. If no projects are relevant, return an empty array."
    ),
});
export type JobDescriptionMatchOutput = z.infer<
  typeof JobDescriptionMatchOutputSchema
>;

export async function matchJobDescription(
  input: JobDescriptionMatchInput
): Promise<JobDescriptionMatchOutput> {
  return aiJobMatchHighlightFlow(input);
}

const aiJobMatchHighlightPrompt = ai.definePrompt({
  name: 'aiJobMatchHighlightPrompt',
  input: {schema: JobDescriptionMatchInputSchema},
  output: {schema: JobDescriptionMatchOutputSchema},
  prompt: `You are an AI assistant designed to help recruiters quickly assess a candidate's fit for a role based on their portfolio.
Your task is to analyze a given job description and identify the most relevant skills and projects from the candidate's provided portfolio.

Candidate's Portfolio:
Name: Akshay Kumar M
Tagline: I build, analyse, and advise.
Bio: Final-year Production Engineering student at NIT Trichy (Data Analytics major). Building digital products and data-driven solutions with a consulting mindset.
Skills: Python, Alteryx, Power BI, Next.js, SQL, Firebase, Tableau, Tailwind CSS, Vercel
Experience:
- Analyst Intern @ ChampionX (SLB) — May 2025 – Jul 2025: Redesigned FTA qualification process using Python/Alteryx for 12+ U.S. Free Trade Agreements. Built Power BI dashboards for HTS codes and component costs. Automated 70% of workflows, reducing time by 90%.
Projects:
- Sruthi Clinic Portal — Next.js + Firebase appointment booking system.
- Acharya Group Website — Modern, responsive website built with Next.js, Tailwind CSS, and Vercel.
- SLB Field Ops Automation — Python, Alteryx, Power BI
- Leather Export Catalog System — Firebase catalog with WhatsApp integration
- CRM Analytics Suite — SQL, Tableau, Business Analysis

Based on the following job description, identify the most relevant skills and projects from the portfolio above.
Return only the exact skills and project titles as listed in the portfolio. Do not invent new skills or projects. If no skills or projects are relevant, return an empty array for that field.

Job Description:
{{{jobDescription}}}`,
});

const aiJobMatchHighlightFlow = ai.defineFlow(
  {
    name: 'aiJobMatchHighlightFlow',
    inputSchema: JobDescriptionMatchInputSchema,
    outputSchema: JobDescriptionMatchOutputSchema,
  },
  async (input) => {
    const {output} = await aiJobMatchHighlightPrompt(input);
    return output!;
  }
);