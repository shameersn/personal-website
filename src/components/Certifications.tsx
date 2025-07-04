import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar, ExternalLink } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "AWS AI Cloud Practitioner",
      issuer: "Amazon Web Services",
      level: "Beginner",
      year: "2025",
      description:
        "Foundational understanding of AWS AI/ML services, cloud computing concepts, and artificial intelligence implementations on AWS platform.",
      skills: [
        "AWS AI Services",
        "Machine Learning Basics",
        "Cloud Computing",
        "AI Implementation",
      ],
      image: "/aws-ai.png",
      verifyLink:
        "https://www.credly.com/badges/239d00fa-1b4f-43b8-a3fa-5f3a922a6268/public_url",
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Certifications
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Professional certifications that validate my expertise in cloud
              computing and artificial intelligence
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-lg transition-all duration-300 animate-scale-in bg-white dark:bg-gray-800 border-none"
              >
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  {/* Certification Image */}
                  <div className="flex justify-center">
                    <div className="relative">
                      <img
                        src={cert.image}
                        alt={`${cert.title} Certificate`}
                        className="object-contain rounded-lg shadow-md"
                      />
                      <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full p-2">
                        <Award size={20} />
                      </div>
                    </div>
                  </div>

                  {/* Certification Details */}
                  <div className="md:col-span-2">
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

                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {cert.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                        Key Skills Covered:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <a
                      href={cert.verifyLink}
                      className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors duration-200"
                      target="_blank"
                    >
                      Verify Certificate
                      <ExternalLink size={16} className="ml-1" />
                    </a>
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
