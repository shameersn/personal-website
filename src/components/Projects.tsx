import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Users, Clock, Award } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Enterprise E-commerce Platform",
      description:
        "Architected and led development of a scalable e-commerce platform handling $50M+ in annual transactions. Built with microservices architecture supporting multiple vendors and complex inventory management.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: [
        "React",
        "Node.js",
        "PostgreSQL",
        "Redis",
        "AWS",
        "Kubernetes",
      ],
      achievements: [
        "Serves 100K+ daily active users",
        "99.9% uptime achieved",
        "50M+ annual transaction volume",
      ],
      type: "Enterprise",
    },
    {
      title: "AI-Powered Analytics Dashboard",
      description:
        "Developed an intelligent analytics platform that processes real-time data streams and provides predictive insights for business decision-making using machine learning algorithms.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: [
        "Python",
        "TensorFlow",
        "React",
        "D3.js",
        "Apache Kafka",
        "MongoDB",
      ],
      achievements: [
        "Processes 1M+ events per minute",
        "Improved decision accuracy by 40%",
        "Real-time insights delivery",
      ],
      type: "AI/ML",
    },
    {
      title: "Cross-Platform Mobile Banking App",
      description:
        "Led the development of a secure mobile banking application with biometric authentication, real-time notifications, and comprehensive financial management features.",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      technologies: [
        "React Native",
        "Node.js",
        "PostgreSQL",
        "JWT",
        "AWS",
        "Socket.io",
      ],
      achievements: [
        "500K+ app downloads",
        "Bank-grade security implemented",
        "4.8/5 app store rating",
      ],
      type: "Mobile",
    },
    {
      title: "Microservices Migration Project",
      description:
        "Successfully led the migration of a monolithic legacy system to microservices architecture, improving scalability, maintainability, and deployment velocity for a Fortune 500 company.",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
      technologies: [
        "Java",
        "Spring Boot",
        "Docker",
        "Kubernetes",
        "Jenkins",
        "Grafana",
      ],
      achievements: [
        "Reduced deployment time by 80%",
        "Improved system scalability by 300%",
        "Zero-downtime migration achieved",
      ],
      type: "Architecture",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-muted to-background"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of projects and solutions delivered throughout my
              career
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-scale-in bg-card border border-border group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                      {project.type}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-foreground mb-2 flex items-center text-sm">
                      <Award size={16} className="mr-2 text-yellow-500" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-1">
                      {project.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="text-muted-foreground text-xs flex items-start"
                        >
                          <span className="text-primary mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button size="sm" className="flex-1 text-xs">
                      View Details
                      <ExternalLink size={14} className="ml-2" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Interested in seeing more of my work or discussing potential
              collaborations?
            </p>
            <Button size="lg" className="px-8">
              <a href="#contact">Let's Connect</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
