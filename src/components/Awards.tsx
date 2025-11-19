import React, { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Award, Calendar, Building } from "lucide-react";
import { profileData } from "@/data/profile";

const Awards = () => {
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

  const awards = profileData.awards || [];

  if (awards.length === 0) {
    return null;
  }

  return (
    <section
      id="awards"
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
              Awards & Recognition
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Recognition for excellence, commitment, and outstanding contributions
            </p>
          </div>

          {/* Awards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <Card
                key={index}
                className={`p-6 hover:shadow-2xl transition-all duration-500 border-none bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 backdrop-blur-sm group hover:scale-[1.02] ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-yellow-400 to-orange-400 dark:from-yellow-600 dark:to-orange-600">
                    <Award
                      className="text-white"
                      size={28}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                      {award.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-2">
                      {award.issuer && (
                        <div className="flex items-center">
                          <Building size={14} className="mr-1" />
                          {award.issuer}
                        </div>
                      )}
                      {award.year && (
                        <div className="flex items-center">
                          <Calendar size={14} className="mr-1" />
                          {award.year}
                        </div>
                      )}
                    </div>
                    {award.description && (
                      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                        {award.description}
                      </p>
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

export default Awards;

