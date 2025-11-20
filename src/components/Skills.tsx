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
      icon: <Code className="text-gray-600 dark:text-gray-400" size={32} />,
      skills: ["JavaScript", "TypeScript", "PHP", "Python", "HTML5", "CSS3"],
    },
    {
      title: "Frameworks & Libraries",
      icon: <Zap className="text-gray-600 dark:text-gray-400" size={32} />,
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
      title: "Databases & Storage",
      icon: <Database className="text-gray-600 dark:text-gray-400" size={32} />,
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
      icon: <Cloud className="text-gray-600 dark:text-gray-400" size={32} />,
      skills: [
        "AWS",
        "AWS Lambda",
        "AWS SNS/SQS",
        "AWS SES",
        "Docker",
        "Kafka",
        "Apache Spark",
        "CI/CD",
      ],
    },
    {
      title: "Mobile Development",
      icon: (
        <Smartphone className="text-gray-600 dark:text-gray-400" size={32} />
      ),
      skills: ["React Native", "jQuery Mobile", "Hybrid Apps"],
    },
    {
      title: "Architecture & Design",
      icon: <Settings className="text-gray-600 dark:text-gray-400" size={32} />,
      skills: [
        "Microservices",
        "System Design",
        "REST API Design",
        "Multi-tenant Architecture",
        "Event-Driven Architecture",
        "Performance Optimization",
      ],
    },
    // {
    //   title: "Third-Party Integrations",
    //   icon: <Settings className="text-gray-600 dark:text-gray-400" size={32} />,
    //   skills: [
    //     "Zoom",
    //     "Stripe",
    //     "Twilio",
    //     "OneSignal",
    //     "Avalara",
    //     "Tokbox/WebRTC",
    //     "Facebook SDK",
    //   ],
    // },
    {
      title: "Leadership & Soft Skills",
      icon: <Users className="text-gray-600 dark:text-gray-400" size={32} />,
      skills: [
        "Team Leadership",
        "Mentoring & Training",
        "Technical Strategy",
        "Code Reviews",
        "Agile Methodology",
      ],
    },
    {
      title: "AI/ML & Emerging Tech",
      icon: <Brain className="text-gray-600" size={32} />,
      skills: ["Machine Learning", "AI Integration", "AI Agents", "MCP"],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Technical Expertise
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Comprehensive technical proficiency developed through 13+ years of
              progressive experience in enterprise software development and
              architecture
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-scale-in bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
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
