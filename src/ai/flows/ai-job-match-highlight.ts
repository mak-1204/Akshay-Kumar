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
  relevantExperience: z
    .array(z.string())
    .describe(
      "A list of professional experiences or roles from the candidate's portfolio highly relevant to the job description. Only return the exact role and company (e.g., 'Analyst Intern at ChampionX (SLB)'). If nothing is relevant, return an empty array."
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
Your task is to analyze a given job description and identify the most relevant skills, projects, and professional experiences from the candidate's provided portfolio.

Candidate's Portfolio:
Name: Akshay Kumar M
Tagline: I build end-to-end AI solutions that solve real business problems using full-stack dev, agentic AI, data analytics and automation.
Bio: Incoming Consultant at Deloitte USI. Final-year Engineering student at NIT Trichy. I operate with a consulting mindset—analyzing systems, optimizing processes, and executing end-to-end solutions. Combining Full-stack development, Agentic AI, Data Analytics and Data automation. I build high-impact, data-driven products.
Skills: Python, Alteryx, Power BI, Next.js, SQL, Firebase, Tableau, Tailwind CSS, Vercel, n8n, Sarvam AI, Twilio
Experience:
- Analyst Intern at ChampionX (SLB) — May 2025 – Jul 2025: Redesigned FTA qualification process using Python/Alteryx for 12+ U.S. Free Trade Agreements. Automated 70% of workflows, reducing time by 90%.
- Freelance Data Analyst at Manpro Equipments — Mar 2024 – Apr 2024: Delivered end-to-end Power BI dashboards tracking orders and production bottlenecks. Translated raw Excel data into actionable KPIs.
Projects:
- PackTogether — Collaborative trip planning platform with real-time sync.
- Unscripted — AI-driven storytelling and content generation platform, built for NIT Trichy's premier public speaking club (a college version of Toastmasters).
- Pratin Alagiri Portfolio — Modern personal portfolio with sleek UI/UX and Vercel optimization.
- Darkwave Digital — Full-service digital marketing agency platform focusing on SEO, lead generation, and high-performance website building for growth-oriented brands.
- HiveHaven — Community platform for enthusiasts and hobbyists.
- Masee's Footwear — Premium handcrafted leather footwear store in Ambur — showcasing modern style with durable materials through a refined digital storefront.
- Sruthi Clinic Portal — Next.js + Firebase appointment booking system.
- Acharya Group Website — Modern, responsive website built with Next.js, Tailwind CSS, Firebase, and Vercel.
- COVID-19 Global Trend Analysis — SQL, Tableau, Business Analysis
- Predictive Maintenance System — Python, Scikit-learn, XGBoost, SMOTE

Based on the following job description, identify the most relevant skills, projects, and professional experiences from the portfolio above.
Return only the exact items explicitly listed in the portfolio. Do not invent new skills, projects, or roles. If nothing in a category is relevant, return an empty array for that field.

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
