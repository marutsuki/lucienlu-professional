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
  accomplishments: string[];
  prelude?: string;
  technologies: string[];
};

type ExperienceAtPosition =
  | Experience
  | (Omit<
      Experience,
      "period" | "technologies" | "title" | "accomplishments"
    > & {
      positions: Omit<Experience, "company" | "location">[];
    });

interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  accomplishments?: string[];
}

const experiences: ExperienceAtPosition[] = [
  {
    company: "Qoria",
    location: "Melbourne, Australia",
    title: "Software Engineer",
    period: "Oct 2024 - Current",
    prelude:
      "Core developer and the scrum master of a small agile team fully managing the development, testing and deployment of a B2B micro-services and micro-frontend system.",
    accomplishments: [
      "Engineered a smart partitioning system using Gradle and the JUnit Platform to create parallel isolated testing environments for a bottleneck test suite, which reduced the pipeline time from 45 mins to just 16 mins",
      "Single-handedly scaffolded and implemented the first version of our CI/CD pipeline with SonarQube support using GCP Cloud Build, Cloud Deploy, Skaffold and Terraform, reducing developer overhead per release from over 2 hrs to under 5 mins",
      "Designed an extremely compiler-safe and type smart UI based testing framework built around Playwright which was the catalyst for frontend test coverage being increased from 0% to 81%",
      "Developed 6 unique Jira automations and 3 Google App Scripts to streamline team processes, saving an estimated 8 hrs of manual work per week across the team",
    ],
    technologies: [
      "Java",
      "Spring Web",
      "JOOQ",
      "Golang",
      "Immutables",
      "Google OAuth2",
      "Angular",
      "React",
      "React Router",
      "Zustand",
      "TypeScript",
      "Chakra UI",
      "HTML/CSS/SASS",
      "JUnit 5",
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
    prelude:
      "A long-serving full-stack developer on a multi-backend, graphical frontend web application. Known for single-handedly creating the core WebGL graphics engine.",
    accomplishments: [
      "Migrated our BitBucket/Jenkins/Artifactory setup to a cloud-based GitLab solution, improving CI/CD scalability and cutting build times from 45 to 20 minutes through parallelized testing",
      "Ensured every owned initiative/feature had above 90% integration test coverage and 0 SonarQube warnings, leading to a low QA fail rate of 10%",
      "Proposed and owned a code quality improvement initiative targeted at over-engineered code and anti-patterns, which reduced the backend binary size from 3.5MB to 2MB, frontend bundle size from 1.2MB to 0.9MB and brought down SonarQube warnings from (5 CRITICAL, 40 HIGH, 120 MEDIUM) to (0 CRITICAL, 0 HIGH, 0 MEDIUM)",
      "Improved the average FPS of a CPU bound WebGL application from 45 to 55 through an innovative optimization using bit manipulations, allowing for a noticeably smoother user experience",
      "Single-handledly developed and maintained the application's main WebGL graphics engine, which has become the fundamental core dependency and building block for over 25+ graphical features",
    ],
    technologies: [
      "React",
      "Redux",
      "WebGL",
      "TypeScript",
      "Styled Components",
      "HTML/CSS/SASS",
      "Java 17",
      "Spring Web",
      "Spring Kafka",
      "gRPC",
      "Protobuf",
      "JUnit 5",
      "Mockito",
      "Cucumber",
      "Selenium",
      "Jenkins",
      "GitLab CI",
      "Artifactory",
      "Docker",
    ],
  },
  {
    company: "National Australia Bank",
    location: "Melbourne, Australia",
    prelude:
      "A multi-faceted role with a primary focus on backend system development and support. I was promoted pre-emptively from the internship and became a critical team member.",
    positions: [
      {
        title: "Software Engineer",
        period: "Dec 2021 - Apr 2022",
        accomplishments: [
          "Spearheaded the development of a third party integration with our EOD batch job applications, resulting in an expansion of the functional capability of the software and reduced manual workload by 1 hr per week",
          "Elevated automation test coverage from 80% to 95%, significantly boosting application reliability and reducing post-deployment defects",
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
        period: "Jul 2021 - Dec 2021",
        accomplishments: [
          "Upgraded legacy of XML-based configurational Spring applications to the latest Spring version, clearing over 15+ security vulnerabilities in the process",
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
    period: "Jun 2021 - Jul 2021",
    prelude:
      "A fast-paced internship working for a major client in the electric power industry.",
    accomplishments: [
      "Solo-developed a complete Proof of Concept Node.js application over a tight timeline of 2 months with full ownership of the entire stack, which validated the feasibility of moving critical legacy data ingestion flows to a modern stack",
    ],
    technologies: ["Node.js", "JavaScript", "HTML/CSS", "SAP HANA", "SAPUI5"],
  },
  {
    title: "University Tutor",
    company: "The University of Melbourne",
    location: "Melbourne, Australia",
    period: "Jan 2021 - Mar 2021",
    prelude:
      "The role that sparked my passion in tutoring and teaching software development.",
    accomplishments: [
      "Designed and authored subject content and high-stakes assessments (mid-semester and final exams) for an introductory computing course",
      "Responsible for teaching 4 workshop sessions a week with 15-30 students per class, guiding them through their journey learning Python",
    ],
    technologies: ["Python", "Zoom"],
  },
];

const education: Education[] = [
  {
    degree: "Bachelor of Science - Computing and Software Systems",
    institution: "The University of Melbourne",
    location: "Melbourne, Australia",
    period: "2019 - 2022",
    accomplishments: [
      "Dean's Honours List (Third Year) - Awarded to undergraduate students in the top 3% of their year level",
      "New Colombo Plan Scholarship - an Australian Government initiative for high-achieving undergraduate students to study, intern, and undertake courses in the Indo-Pacific region",
      "Competitive Programming Club",
      "Language Exchange Club",
    ],
  },
  {
    degree: "High School Graduate",
    institution: "Camberwell Grammar School",
    location: "Melbourne, Australia",
    period: "2013 - 2018",
    accomplishments: [
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
                    {exp.prelude && (
                      <CardDescription className="mt-2 text-sm italic">
                        {exp.prelude}
                      </CardDescription>
                    )}
                  </div>
                </CardHeader>
                {exp.positions.map((position) => (
                  <div>
                    <div className="flex justify-between mx-6">
                      <CardTitle>{position.title}</CardTitle>
                      <Badge variant="outline">{position.period}</Badge>
                    </div>
                    <CardContent className="max-w-10/12">
                      <ul className="list-disc pl-5 space-y-1 mb-4">
                        {position.accomplishments.map((item, i) => (
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
                      {exp.prelude && (
                        <CardDescription className="mt-2 text-sm italic">
                          {exp.prelude}
                        </CardDescription>
                      )}
                    </div>
                    <Badge
                      variant="outline"
                      className="md:self-start self-start w-fit"
                    >
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="max-w-10/12">
                  <ul className="list-disc pl-5 space-y-1 mb-4">
                    {exp.accomplishments.map((item, i) => (
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
              {edu.accomplishments && (
                <CardContent className="px-6">
                  <ul className="list-disc pl-5 space-y-1 mb-4">
                    {edu.accomplishments.map((item, i) => (
                      <li key={i} className="text-muted-foreground list-disc">
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
