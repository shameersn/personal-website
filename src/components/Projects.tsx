import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowUpRight, Sparkles, Database, Smartphone, Server } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Enterprise E-commerce Platform",
      description:
        "Architected and led development of a scalable e-commerce platform handling $50M+ in annual transactions. Built with microservices architecture supporting multiple vendors.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "AWS", "K8s"],
      type: "Enterprise",
      icon: <Sparkles className="w-6 h-6 text-amber-500" />,
      className: "md:col-span-2",
    },
    {
      title: "AI Analytics Dashboard",
      description:
        "Intelligent analytics platform processing real-time data streams for predictive business insights.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["Python", "TensorFlow", "React"],
      type: "AI/ML",
      icon: <Database className="w-6 h-6 text-blue-500" />,
      className: "md:col-span-1",
    },
    {
      title: "Mobile Banking App",
      description:
        "Secure mobile banking application with biometric authentication and real-time notifications.",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      technologies: ["React Native", "Node.js"],
      type: "Mobile",
      icon: <Smartphone className="w-6 h-6 text-green-500" />,
      className: "md:col-span-1",
    },
    {
      title: "Microservices Migration",
      description:
        "Migration of monolithic legacy system to microservices architecture, improving scalability by 300%.",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
      technologies: ["Java", "Spring Boot", "Docker"],
      type: "Architecture",
      icon: <Server className="w-6 h-6 text-purple-500" />,
      className: "md:col-span-2",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white tracking-tight">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl">
              A selection of mission-critical systems and innovative solutions delivered for enterprise clients.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`group relative overflow-hidden border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:shadow-2xl transition-all duration-500 ${project.className}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-slate-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

                <div className="h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-slate-900 dark:text-white z-20">
                      {project.type}
                    </div>
                  </div>

                  <div className="p-8 flex-1 flex flex-col relative z-20">
                    <div className="mb-4 flex items-center justify-between">
                      <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-300">
                        {project.icon}
                      </div>
                      <ArrowUpRight className="w-6 h-6 text-slate-400 group-hover:text-primary transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                    </div>

                    <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed flex-1">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-md text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
