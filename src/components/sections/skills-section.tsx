import React from "react";
import { Section } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface SkillCategory {
  name: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML/CSS", "JavaScript", "Redux", "Vite"]
  },
  {
    name: "Backend",
    skills: ["Node.js", "Express", "NestJS", "GraphQL", "REST API", "PostgreSQL", "MongoDB", "Firebase"]
  },
  {
    name: "DevOps & Tools",
    skills: ["Git", "GitHub Actions", "Docker", "AWS", "CI/CD", "Jest", "Cypress", "Webpack"]
  },
  {
    name: "Design & Other",
    skills: ["Figma", "UI/UX", "Responsive Design", "Accessibility", "Performance Optimization", "SEO", "Agile/Scrum"]
  }
];

export function SkillsSection() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category) => (
          <Card key={category.name} className="overflow-hidden">
            <CardHeader className="pb-3">
              <CardTitle>{category.name}</CardTitle>
            </CardHeader>
            <Separator />
            <CardContent className="pt-4">
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
