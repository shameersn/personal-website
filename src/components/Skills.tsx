import React from "react";
import {
  Code,
  Database,
  Cloud,
  Smartphone,
  Settings,
  Users,
  Brain,
  Zap,
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming & markup",
      icon: Code,
      skills: ["JavaScript", "TypeScript", "PHP", "Python", "HTML5", "CSS3"],
    },
    {
      title: "Frameworks & libraries",
      icon: Zap,
      skills: [
        "ReactJS",
        "React Native",
        "NodeJS",
        "Angular",
        "ExpressJS",
        "NestJS",
        "NextJS",
      ],
    },
    {
      title: "Databases & storage",
      icon: Database,
      skills: [
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "Cassandra",
        "Redis",
        "Elasticsearch",
        "DynamoDB",
        "Snowflake",
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: [
        "AWS",
        "Lambda",
        "SNS/SQS",
        "SES",
        "Docker",
        "Kafka",
        "Apache Spark",
        "CI/CD",
      ],
    },
    {
      title: "Mobile",
      icon: Smartphone,
      skills: ["React Native", "jQuery Mobile", "Hybrid Apps"],
    },
    {
      title: "Architecture & design",
      icon: Settings,
      skills: [
        "Microservices",
        "System Design",
        "REST API",
        "Multi-tenant",
        "Event-driven",
        "Performance",
      ],
    },
    {
      title: "Leadership",
      icon: Users,
      skills: [
        "Team Leadership",
        "Mentoring",
        "Technical Strategy",
        "Code Reviews",
        "Agile",
      ],
    },
    {
      title: "AI/ML & emerging tech",
      icon: Brain,
      skills: ["Machine Learning", "AI Integration", "AI Agents", "MCP"],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Technical Expertise
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-muted-foreground max-w-xl mx-auto">
              13+ years across enterprise development and architecture
            </p>
          </div>

          <div className="space-y-8">
            {skillCategories.map((category) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.title}
                  className="animate-fade-in-up"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Icon
                      className="text-muted-foreground shrink-0"
                      size={20}
                    />
                    <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 bg-muted text-muted-foreground rounded-md text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
