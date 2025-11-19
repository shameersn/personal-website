import React, { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar, ExternalLink } from "lucide-react";
import { profileData } from "@/data/profile";

const Certifications = () => {
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

  const certifications = profileData.certifications;

  return (
    <section
      id="certifications"
      ref={sectionRef}
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-500"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Certifications
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Professional certifications that validate my expertise in cloud
              computing and artificial intelligence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className={`p-8 hover:shadow-2xl transition-all duration-500 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-none hover:scale-[1.02] ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex flex-col h-full">
                  {/* Certification Image */}
                  <div className="flex justify-center mb-4">
                    <div className="relative">
                      <img
                        src={cert.image}
                        alt={`${cert.title} Certificate`}
                        className="w-full h-32 object-contain rounded-lg shadow-md bg-white dark:bg-gray-700 p-2"
                        loading="lazy"
                      />
                      <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full p-2 shadow-lg">
                        <Award size={16} />
                      </div>
                    </div>
                  </div>

                  {/* Certification Details */}
                  <div className="flex-1 flex flex-col">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                          {cert.title}
                        </h3>
                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">
                          {cert.issuer}
                        </p>
                        <div className="flex items-center gap-4 mb-4">
                          <Badge
                            variant="secondary"
                            className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                          >
                            {cert.level}
                          </Badge>
                          <div className="flex items-center text-gray-500 dark:text-gray-400">
                            <Calendar size={16} className="mr-1" />
                            <span>{cert.year}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm flex-1">
                      {cert.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="text-xs font-semibold text-gray-900 dark:text-white mb-2">
                        Skills:
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {cert.skills.slice(0, 3).map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                        {cert.skills.length > 3 && (
                          <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded text-xs">
                            +{cert.skills.length - 3}
                          </span>
                        )}
                      </div>
                    </div>

                    {cert.verifyLink && (
                      <a
                        href={cert.verifyLink}
                        className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors duration-200 text-sm mt-auto"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Verify Certificate
                        <ExternalLink size={14} className="ml-1" />
                      </a>
                    )}
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

export default Certifications;
