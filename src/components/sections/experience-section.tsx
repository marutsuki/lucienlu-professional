import React from "react";
import { Section } from "@/components/layout/section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
}

interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description?: string;
}

const experiences: Experience[] = [
  {
    title: "Senior Frontend Developer",
    company: "Tech Innovations Inc.",
    location: "Sydney, Australia",
    period: "2022 - Present",
    description: [
      "Led the development of a complex SaaS platform used by over 50,000 users",
      "Implemented performance optimizations that reduced load times by 40%",
      "Mentored junior developers and conducted code reviews",
      "Collaborated with design and product teams to create intuitive user experiences"
    ],
    technologies: ["React", "TypeScript", "Next.js", "GraphQL", "Tailwind CSS"]
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions Co.",
    location: "Melbourne, Australia",
    period: "2019 - 2022",
    description: [
      "Developed and maintained multiple client projects from concept to deployment",
      "Built RESTful APIs and microservices for various business applications",
      "Implemented CI/CD pipelines that reduced deployment time by 60%",
      "Participated in agile development processes and sprint planning"
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "Docker"]
  },
  {
    title: "Junior Web Developer",
    company: "WebCraft Agency",
    location: "Brisbane, Australia",
    period: "2017 - 2019",
    description: [
      "Created responsive websites for small to medium-sized businesses",
      "Collaborated with designers to implement pixel-perfect UI components",
      "Optimized websites for SEO and accessibility",
      "Maintained and updated existing client websites"
    ],
    technologies: ["JavaScript", "HTML/CSS", "WordPress", "PHP", "jQuery"]
  }
];

const education: Education[] = [
  {
    degree: "Master of Computer Science",
    institution: "University of Technology",
    location: "Sydney, Australia",
    period: "2015 - 2017",
    description: "Specialized in Web Technologies and Software Engineering"
  },
  {
    degree: "Bachelor of Information Technology",
    institution: "National University",
    location: "Brisbane, Australia",
    period: "2012 - 2015",
    description: "Graduated with First Class Honours"
  }
];

export function ExperienceSection() {
  return (
    <Section id="experience" title="Experience">
      <div className="space-y-10">
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">Work Experience</h3>
          {experiences.map((exp, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                  <div>
                    <CardTitle>{exp.title}</CardTitle>
                    <CardDescription className="text-base">{exp.company} • {exp.location}</CardDescription>
                  </div>
                  <Badge variant="outline" className="md:self-start self-start w-fit">
                    {exp.period}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-muted-foreground">{item}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <Separator />
        
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">Education</h3>
          {education.map((edu, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                  <div>
                    <CardTitle>{edu.degree}</CardTitle>
                    <CardDescription className="text-base">{edu.institution} • {edu.location}</CardDescription>
                  </div>
                  <Badge variant="outline" className="md:self-start self-start w-fit">
                    {edu.period}
                  </Badge>
                </div>
              </CardHeader>
              {edu.description && (
                <CardContent>
                  <p className="text-muted-foreground">{edu.description}</p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
