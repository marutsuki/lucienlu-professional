import React from "react";
import { Section } from "@/components/layout/section";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
    title: "Main Portfolio",
    description:
      "My general portfolio, with a more creative and fun take on the UI.",
    image: "/main-portfolio.jpeg",
    technologies: ["React 18", "Redux", "TypeScript", "Tailwind"],
    liveUrl: "https://main.marutsuki.io",
    githubUrl: "https://github.com/marutsuki/lucienlu",
  },
  {
    title: "chirper.",
    description:
      "A simplified twitter like platform that enables users to chirp about their life and discover connections around the world and listen to their chirps.",
    image: "/chirper.jpeg",
    technologies: [
      "React 19",
      "React Router",
      "Redux",
      "React Hook Form",
      "TypeScript",
      "Tailwind CSS",
      "Radix UI/ShadCN",
      "Node.js",
      "Express.js",
      "Passport.js",
      "Knex.js",
      "Terraform",
      "AWS",
      "Docker",
      "PostgreSQL",
    ],
    githubUrl: "https://github.com/marutsuki/chirper",
  },
  {
    title: "A Small World",
    description:
      "A real-time graphical multiplayer lobby system with seamless interactions and smart input prediction to counterract packet loss.",
    image: "/a-small-world.jpeg",
    technologies: [
      "React 18",
      "Redux",
      "TypeScript",
      "WebGL2",
      "StompJS",
      "Tailwind CSS",
      "Java 21",
      "Spring Web",
      "Spring MongoDB",
      "Spring Messaging",
      "Spring WebSocket",
    ],
    githubUrl: "https://github.com/marutsuki/a-small-world",
  },
  {
    title: "Cucumber Reporting",
    description:
      "A performance optimised Cucumber HTML test report generator utilizing mustache for static templating.",
    image: "/cucumber-reporting.jpeg",
    technologies: ["Node.js", "TypeScript", "Mustache", "Stream-JSON", "Jest"],
    liveUrl: "https://marutsuki.github.io/cucumber-reportify-perf-test/",
    githubUrl: "https://github.com/marutsuki/cucumber-reporting",
  },
  {
    title: "Maru Game of Life",
    description:
      "A visual implementation of Conway's Game of Life using React.",
    image: "/maru-game-of-life.jpeg",
    technologies: ["React 18", "Redux", "TypeScript", "Reselect"],
    liveUrl: "https://marutsuki.github.io/maru-game-of-life/",
    githubUrl: "https://github.com/marutsuki/maru-game-of-life",
  },
  {
    title: "Maru GitHub Viewer",
    description:
      "SPA where you can view GitHub accounts in an aesthetic gaming theme.",
    image: "/maru-github-viewer.jpeg",
    technologies: [
      "React 18",
      "Next.js",
      "Redux",
      "TypeScript",
      "DaisyUI",
      "Storybook",
    ],
    liveUrl: "https://marutsuki.github.io/maru-github-viewer/",
    githubUrl: "https://github.com/marutsuki/maru-github-viewer",
  },
  {
    title: "Art Portfolio",
    description:
      "My art portfolio for showcasing my hobby as a digital artist. As an artist, I draw anime style art and have produced merchanise that have been sold at conventions.",
    image: "/art-portfolio.jpeg",
    technologies: ["React 18", "Redux", "TypeScript", "Tailwind"],
    liveUrl: "https://art.marutsuki.io/",
    githubUrl: "https://github.com/marutsuki/marutsuki-art",
  },
  {
    title: "Modelling Portfolio",
    description:
      "My my modelling portfolio, one of the things I wanted to try out a while back was professional modelling, this portfolio was used to apply to various different modelling agencies.",
    image: "/modelling-portfolio.jpeg",
    technologies: [
      "React 18",
      "Redux",
      "TypeScript",
      "Tailwind",
      "NextUI",
      "Swiper",
    ],
    liveUrl: "https://modelling.marutsuki.io/",
    githubUrl: "https://github.com/marutsuki/lucienlu-modelling",
  },
  {
    title: "Tutoring Portfolio",
    description:
      "My tutoring portfolio for advertising my services as a private tutor for aspiring young software engineers and developers. I offer a range of courses and materials prepared to meet the needs of different demographics.",
    image: "/tutoring-portfolio.jpeg",
    technologies: [
      "React 18",
      "React Router",
      "Redux",
      "TypeScript",
      "Tailwind",
      "Radix UI/ShadCN",
    ],
    liveUrl: "https://tutoring.marutsuki.io/",
    githubUrl: "https://github.com/marutsuki/lucienlu-tutoring",
  },
  {
    title: "MaruTable",
    description:
      "A generic configurable and customizable React table component.",
    image: "/marutable.jpeg",
    technologies: ["React 18", "TypeScript", "Storybook"],
    liveUrl: "https://marutsuki.github.io/marutable/",
    githubUrl: "https://github.com/marutsuki/marutable",
  },
  {
    title: "Marine 8080",
    description:
      "A university project - A 2.5d platformer shoot-em up game with an exciting finale.",
    image: "marine-8080.jpeg",
    technologies: ["C#", "Unity", "HLSL", "Blender"],
  },
  {
    title: "Fractal Landscape Generator",
    description:
      "A university project - A randomized landscape generator using the Diamond-Square algorithm with water physics and phong shading",
    image: "fractal-landscape-generator.png",
    technologies: ["C#", "Unity", "HLSL"],
  },
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
            <CardHeader className="mt-2">
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
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLinkIcon className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              )}
              {project.githubUrl && (
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
