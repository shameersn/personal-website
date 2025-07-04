import React from "react";
import { Card } from "@/components/ui/card";
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
      title: "Programming/Markup Languages",
      icon: <Code className="text-gray-600" size={32} />,
      skills: ["JavaScript/TypeScript", "PHP", "Python", "Go", "HTML/CSS"],
    },
    {
      title: "Frameworks & Libraries",
      icon: <Zap className="text-gray-600" size={32} />,
      skills: [
        "React/NextJS",
        "NodeJS",
        "ExpressJS",
        "NestJS",
        "Angular",
        "Go Fiber",
      ],
    },
    {
      title: "Databases",
      icon: <Database className="text-gray-600" size={32} />,
      skills: [
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "MySQL",
        "Elasticsearch",
        "Cassandra",
        "DynamoDB",
        "Firebase",
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="text-gray-600" size={32} />,
      skills: ["AWS", "Docker", "Kafka", "CI/CD", "Terraform"],
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="text-gray-600" size={32} />,
      skills: ["React Native", "Flutter"],
    },
    {
      title: "Architecture & Design",
      icon: <Settings className="text-gray-600" size={32} />,
      skills: [
        "Microservices",
        "System Design",
        "API Design",
        "Design Patterns",
        "Event-Driven Architecture",
        "Third-Party Integrations",
      ],
    },
    {
      title: "Leadership & Soft Skills",
      icon: <Users className="text-gray-600" size={32} />,
      skills: [
        "Team Leadership",
        "Mentoring",
        "Project Management",
        "Communication",
        "Problem Solving",
      ],
    },
    {
      title: "AI/ML & Emerging Tech",
      icon: <Brain className="text-gray-600" size={32} />,
      skills: ["Machine Learning", "AI Integration", "AI Agents", "MCP"],
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A comprehensive skill set built over 13+ years of hands-on
              experience in software development and architecture
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 animate-scale-in bg-white dark:bg-gray-800 border-none"
              >
                <div className="flex items-center mb-6">
                  {category.icon}
                  <h3 className="text-xl font-bold ml-3 text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
