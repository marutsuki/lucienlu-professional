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

type Experience = {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
};

type ExperienceAtPosition =
  | Experience
  | {
      location: string;
      company: string;
      positions: Omit<Experience, "company" | "location">[];
    };

interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description?: string[];
}

const experiences: ExperienceAtPosition[] = [
  {
    company: "Qoria",
    location: "Melbourne, Australia",
    positions: [
      {
        title: "Software Engineer / Scrum Master",
        period: "Apr 2025 - Current",
        description: ["Description to be added"],
        technologies: [
          "Java",
          "Spring Web",
          "JOOQ",
          "Immutables",
          "Google OAuth2",
          "Angular",
          "TypeScript",
          "HTML/CSS/SASS",
          "JUnit 5",
          "Playwright",
          "Postgres SQL",
          "Terraform",
          "Docker",
        ],
      },
      {
        title: "Software Engineer - Project 2",
        period: "Feb 2025 - Apr 2025",
        description: [
          "Integral core member responsible for the full stack development of critical Postgres/Java Spring/Angular app",
          "Configured and addressed issues in the infrastructure of application systems through Terraform",
          "Protected the trust of customers by servicing and fixing production data malformations",
        ],
        technologies: [
          "Java",
          "Spring Web",
          "JOOQ",
          "Immutables",
          "Angular",
          "TypeScript",
          "HTML/CSS/SASS",
          "JUnit 5",
          "Mockito",
          "Postgres SQL",
          "Terraform",
        ],
      },
      {
        title: "Software Engineer - Project 1",
        period: "Oct 2024 - Feb 2025",
        description: [
          "Responsible alongside 2 other devs of a small team for kickstarting a brand new machine learning based web solution",
          "Carefully crafted an extensible yet compiler-safe frontend testing framework around playwright using smart TypeScript types",
        ],
        technologies: [
          "Golang",
          "Google OAuth2",
          "React",
          "React Router",
          "Zustand",
          "TypeScript",
          "HTML/CSS/SASS",
          "Playwright",
          "Postgres SQL",
          "Docker",
        ],
      },
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
    company: "National Australia Bank",
    location: "Melbourne, Australia",
    positions: [
      {
        title: "Software Engineer",
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
  {
    title: "University Tutor",
    company: "The University of Melbourne",
    location: "Melbourne, Australia",
    period: "Jan 2021 - Mar 2021",
    description: [
      "One of the core tutors for the university course COMP10001 - Foundations of Computing",
      "Led 4 one hour workshops per week via Zoom, catering to on average 30 students per session",
      "Provided personalized support to students by holding regular consultation sessions and responding to queries via email",
      "Drafted and alongside the rest of the teaching team, designed the assessment and examination content",
      "Marked and graded assessments and exams whilst providing constructive feedback to students",
    ],
    technologies: ["Python", "Zoom"],
  },
];

const education: Education[] = [
  {
    degree: "Bachelor of Science",
    institution: "The University of Melbourne",
    location: "Melbourne, Australia",
    period: "2019 - 2022",
    description: [
      "Dean's Honours List 2023",
      "Specialized in Computing and Software Systems",
      "Tutored VCE Mathematics Methods and Specialist Mathematics",
      "Member of the Competitive Programming Club",
      "Member of the Language Exchange Club",
    ],
  },
  {
    degree: "High School Graduate",
    institution: "Camberwell Grammar School",
    location: "Melbourne, Australia",
    period: "2013 - 2018",
    description: [
      "Studied VCE Mathematics Methods, Specialist Mathematics, Accounting, Chemistry and English",
      "Volunteered at a senior daycare centre",
      "Volunteered teaching various subjects to a local primary school",
    ],
  },
];

export function ExperienceSection() {
  return (
    <Section id="experience" title="Experience">
      <div className="space-y-10">
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">Work Experience</h3>
          {experiences.map((exp, index) =>
            "positions" in exp ? (
              <Card key={index} className="flex flex-col gap-4">
                <CardHeader>
                  <div>
                    <CardTitle className="text-base">{exp.company}</CardTitle>
                    <CardDescription className="text-base">
                      {exp.location}
                    </CardDescription>
                  </div>
                </CardHeader>
                {exp.positions.map((position) => (
                  <div>
                    <div className="flex justify-between mx-6">
                      <CardTitle>{position.title}</CardTitle>
                      <Badge variant="outline">{position.period}</Badge>
                    </div>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-1 mb-4">
                        {position.description.map((item, i) => (
                          <li key={i} className="text-muted-foreground">
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {position.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </div>
                ))}
              </Card>
            ) : (
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
            )
          )}
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
                <CardContent className="flex flex-col gap-1">
                  {edu.description.map((item, i) => (
                    <li
                      key={i}
                      className="text-muted-foreground list-disc pl-5"
                    >
                      {item}
                    </li>
                  ))}
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
