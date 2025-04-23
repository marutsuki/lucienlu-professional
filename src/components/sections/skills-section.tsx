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
    name: "Languages",
    skills: ["TypeScript", "JavaScript", "Java 21", "Golang", "Python"],
  },
  {
    name: "Frontend",
    skills: [
      "React",
      "Redux",
      "React Router",
      "Angular",
      "Tailwind CSS",
      "HTML/CSS/SASS",
      "Vite",
      "Webpack",
    ],
  },
  {
    name: "Node.js Backend",
    skills: ["Express", "Passport", "Socket.io", "Axios", "Mongoose", "Lodash"],
  },
  {
    name: "Java Backend",
    skills: [
      "Spring",
      "Spring MVC",
      "Spring Data JPA",
      "Spring Data JDBC",
      "Spring Security",
      "Spring Kafka",
      "Jackson",
    ],
  },
  {
    name: "Database",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Firebase",
      "Amazon RDS",
      "Amazon S3",
      "GCP Cloud Storage",
      "GCP Cloud SQL",
    ],
  },
  {
    name: "Testing",
    skills: [
      "JUnit 5",
      "Mockito",
      "Jest",
      "Playwright",
      "React Testing Library",
      "Selenium",
    ],
  },
  {
    name: "DevOps & Tools",
    skills: [
      "Git",
      "GitHub Actions",
      "Docker",
      "Bash",
      "Terraform",
      "AWS",
      "GCP",
      "VSCode",
      "IntelliJ",
    ],
  },
  {
    name: "Design & Other",
    skills: [
      "UI/UX",
      "Responsive Design",
      "Accessibility",
      "SEO",
      "Agile/Scrum",
      "Jira",
      "Confluence",
    ],
  },
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
