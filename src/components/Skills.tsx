import React, { useEffect, useRef, useState } from "react";
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
  Plug,
} from "lucide-react";
import { profileData } from "@/data/profile";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const iconMap: Record<string, React.ReactNode> = {
    "Programming Languages": (
      <Code className="text-blue-600 dark:text-blue-400" size={32} />
    ),
    "Frontend Frameworks & Libraries": (
      <Zap className="text-yellow-600 dark:text-yellow-400" size={32} />
    ),
    "Backend & APIs": (
      <Settings className="text-green-600 dark:text-green-400" size={32} />
    ),
    Databases: (
      <Database className="text-purple-600 dark:text-purple-400" size={32} />
    ),
    "Cloud & DevOps": (
      <Cloud className="text-orange-600 dark:text-orange-400" size={32} />
    ),
    "Mobile Development": (
      <Smartphone className="text-pink-600 dark:text-pink-400" size={32} />
    ),
    "Third-Party Integrations": (
      <Plug className="text-indigo-600 dark:text-indigo-400" size={32} />
    ),
    "Other Technologies": (
      <Brain className="text-teal-600 dark:text-teal-400" size={32} />
    ),
  };

  const skillCategories = profileData.skillCategories;

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A comprehensive skill set built over{" "}
              {profileData.yearsOfExperience}+ years of hands-on experience in
              software development and architecture
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => {
              const icon = iconMap[category.title] || (
                <Code className="text-gray-600 dark:text-gray-400" size={32} />
              );
              return (
                <Card
                  key={index}
                  className={`p-6 hover:shadow-2xl transition-all duration-500 border-none bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm group hover:scale-[1.02] ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center mb-6 group-hover:scale-105 transition-transform duration-300">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
                      {icon}
                    </div>
                    <h3 className="text-xl font-bold ml-4 text-gray-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-2 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium hover:scale-110 hover:shadow-md hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/30 dark:hover:to-purple-900/30 transition-all duration-300 cursor-default border border-gray-200 dark:border-gray-600"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
