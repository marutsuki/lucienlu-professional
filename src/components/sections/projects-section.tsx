import React from "react";
import { Section } from "@/components/layout/section";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLinkIcon, GithubIcon } from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with product listings, cart functionality, user authentication, and payment processing.",
    image: "https://via.placeholder.com/600x400",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com"
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "https://via.placeholder.com/600x400",
    technologies: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com"
  },
  {
    title: "Weather Dashboard",
    description: "A weather dashboard that displays current conditions and forecasts for multiple locations with interactive maps and charts.",
    image: "https://via.placeholder.com/600x400",
    technologies: ["React", "OpenWeather API", "Chart.js", "Leaflet"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com"
  },
  {
    title: "Personal Finance Tracker",
    description: "A personal finance application that helps users track expenses, set budgets, and visualize spending patterns.",
    image: "https://via.placeholder.com/600x400",
    technologies: ["Vue.js", "Express", "PostgreSQL", "D3.js"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com"
  }
];

export function ProjectsSection() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Card key={project.title} className="overflow-hidden flex flex-col">
            <div className="aspect-video overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
              />
            </div>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex gap-2">
              {project.liveUrl && (
                <Button variant="default" size="sm" asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLinkIcon className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              )}
              {project.githubUrl && (
                <Button variant="outline" size="sm" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <GithubIcon className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </Section>
  );
}
