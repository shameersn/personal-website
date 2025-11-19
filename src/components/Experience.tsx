import React, { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Building, Zap, ExternalLink } from "lucide-react";
import { profileData } from "@/data/profile";

const Experience = () => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(
              entry.target.getAttribute("data-index") || "0"
            );
            setVisibleItems((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll("[data-index]");
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const experiences = profileData.experiences;

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-500"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Professional Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              {profileData.yearsOfExperience}+ years of progressive experience
              in software development and architecture
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 hidden md:block rounded-full"></div>

            {experiences.map((exp, index) => {
              const isVisible = visibleItems.has(index);
              return (
                <div
                  key={index}
                  data-index={index}
                  className={`relative mb-12 transition-all duration-1000 ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-10"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg hidden md:block z-10 animate-pulse"></div>

                  <Card className="ml-0 md:ml-20 p-8 hover:shadow-2xl transition-all duration-500 border-none bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm group hover:scale-[1.02]">
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div className="mb-4 lg:mb-0 flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                              {exp.title}
                            </h3>
                            <div className="flex items-center text-gray-700 dark:text-gray-300 font-semibold mb-3">
                              <Building
                                size={18}
                                className="mr-2 text-primary"
                              />
                              {exp.company}
                              {exp.companyUrl && (
                                <a
                                  href={exp.companyUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="ml-2 text-primary hover:underline"
                                >
                                  <ExternalLink size={14} />
                                </a>
                              )}
                            </div>
                            <div className="flex flex-col sm:flex-row sm:items-center text-gray-600 dark:text-gray-400 text-sm gap-4">
                              <div className="flex items-center">
                                <Calendar size={16} className="mr-2" />
                                {exp.period}
                              </div>
                              <div className="flex items-center">
                                <MapPin size={16} className="mr-2" />
                                {exp.location}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-base">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center text-lg">
                        <Zap
                          size={20}
                          className="mr-2 text-yellow-500 dark:text-yellow-400"
                        />
                        Key Achievements
                      </h4>
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="text-gray-600 dark:text-gray-400 flex items-start group/item"
                          >
                            <span className="text-primary mr-3 mt-1 font-bold group-hover/item:scale-125 transition-transform">
                              ▸
                            </span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-4 text-lg">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1.5 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium border border-blue-200 dark:border-blue-800 hover:scale-105 hover:shadow-md transition-all duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
