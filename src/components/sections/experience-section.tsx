import React from "react";
import { Section } from "@/components/layout/section";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
    title: "Software Engineer",
    company: "Qoria",
    location: "Melbourne, Australia",
    period: "Oct 2024 - Current",
    description: [
      "Responsible alongside 2 other devs of a small team for kickstarting a brand new machine learning based web solution",
      "Carefully crafted an extensible yet compiler-safe frontend testing framework around playwright using smart TypeScript types",
      "Integral core member responsible for the full stack development of critical Postgres/Java Spring/Angular app",
      "Configured and addressed issues in the infrastructure of application systems through Terraform",
      "Protected the trust of customers by servicing and fixing production data malformations",
    ],
    technologies: [
      "Java",
      "Spring Web",
      "JOOQ",
      "Immutables",
      "Golang",
      "Google OAuth2",
      "React",
      "React Router",
      "Zustand",
      "Angular",
      "TypeScript",
      "HTML/CSS/SASS",
      "JUnit 5",
      "Mockito",
      "Playwright",
      "Postgres SQL",
      "Terraform",
      "Docker",
    ],
  },
  {
    title: "Graduate Software Engineer",
    company: "Thales Australia",
    location: "Melbourne, Australia",
    period: "Feb 2023 - Oct 2024",
    description: [
      `Demonstrated expertise across both backend and frontend development, leading the successful 
        delivery of over 20+ validated features`,
      "Trusted as a core reviewer, I reviewed more than 160 pull requests, ensuring code quality and consistency",
      "Drafted and implemented software solution redesigns to address existing overengineered code and anti-patterns, enhancing the robustness and maintainability of the app",
      "Mitigated technical debt by resolving over 400 ESLint issues",
      "Migrated our BitBucket/Jenkins/Artifactory setup to a cloud-based GitLab solution, improving CI/CD scalability and cutting build times from 45 to 20 minutes through parallelized testing",
      "Revamping our CI pipeline for expedited delivery times by optimizing Jenkins parallelism and mitigating gradle inter-project dependencies",
    ],
    technologies: [
      "Java 8",
      "Spring Web",
      "Spring JDBC",
      "JUnit 5",
      "Mockito",
      "Oracle SQL",
      "Oracle DB",
      "Jenkins",
      "ServiceNow",
      "Microsoft Excel",
    ],
  },
  {
    title: "Software Engineer",
    company: "National Australia Bank",
    location: "Melbourne, Australia",
    period: "Dec 2021 - Apr 2022",
    description: [
      "Specialized in the development of robust Spring and Spring Boot applications, contributing to EOD batch projects spanning multiple areas within the organization",
      "Drafted QA testing plans and requirements via qTest",
      "Reactively supported the critical system through implementations of service requests and production changes",
      "Documentation of system architecture covering interactions with downstream & upstream",
    ],
    technologies: [
      "Java 8",
      "Spring Web",
      "Spring JDBC",
      "JUnit 5",
      "Mockito",
      "Oracle SQL",
      "Oracle DB",
      "Jenkins",
      "ServiceNow",
      "Microsoft Excel",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "National Australia Bank",
    location: "Melbourne, Australia",
    period: "July 2021 - Dec 2021",
    description: [
      "Self-autonomous development of Spring based applications",
      "Extended test coverage of the many microservices owned by the team",
      "Successfully led the migration of XML-based Spring applications to annotation-based Spring",
      "Documentation of system architecture covering interactions with downstream & upstream",
    ],
    technologies: [
      "Java 8",
      "Spring Web",
      "Spring JDBC",
      "JUnit 5",
      "Mockito",
      "Oracle SQL",
      "Oracle DB",
      "Jenkins",
      "Microsoft Excel",
    ],
  },
  {
    title: "Data Engineer Intern",
    company: "Tata Consultancy Services",
    location: "Melbourne, Australia",
    period: "June 2021 - July 2021",
    description: [
      "Developed a full stack development of Proof of Concept Node.js application",
      "Delivered a promising presentation to stakeholders leading to the acceptance of the POC",
      "Adopted a reactive mindset by frequently seeking application quality feedback from stakeholders",
    ],
    technologies: ["Node.js", "JavaScript", "HTML/CSS", "SAP HANA", "SAPUI5"],
  },
];

const education: Education[] = [
  {
    degree: "Bachelor of Science",
    institution: "The University of Melbourne",
    location: "Melbourne, Australia",
    period: "2019 - 2022",
    description:
      "Dean's Honours List 2023, Specialized in Computing and Software Systems",
  },
  {
    degree: "High School Graduate",
    institution: "Camberwell Grammar School",
    location: "Melbourne, Australia",
    period: "2013 - 2018",
  },
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
                    <CardDescription className="text-base">
                      {exp.company} • {exp.location}
                    </CardDescription>
                  </div>
                  <Badge
                    variant="outline"
                    className="md:self-start self-start w-fit"
                  >
                    {exp.period}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-muted-foreground">
                      {item}
                    </li>
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
                    <CardDescription className="text-base">
                      {edu.institution} • {edu.location}
                    </CardDescription>
                  </div>
                  <Badge
                    variant="outline"
                    className="md:self-start self-start w-fit"
                  >
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
