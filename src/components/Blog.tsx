import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogPosts = [
    {
      id: "microservices-architecture-guide",
      title: "Complete Guide to Microservices Architecture",
      excerpt:
        "Learn how to design, implement, and scale microservices architecture for enterprise applications. This comprehensive guide covers best practices, common pitfalls, and real-world examples.",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
      category: "Architecture",
      readTime: "12 min read",
      publishDate: "2024-06-15",
      author: "Shameer",
    },
    {
      id: "react-performance-optimization",
      title: "React Performance Optimization Techniques",
      excerpt:
        "Discover advanced techniques to optimize React applications for better performance. From memo to useMemo, learn when and how to apply these optimization strategies effectively.",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop",
      category: "React",
      readTime: "8 min read",
      publishDate: "2024-06-10",
      author: "Shameer",
    },
    {
      id: "aws-cloud-migration-strategy",
      title: "AWS Cloud Migration: A Strategic Approach",
      excerpt:
        "A step-by-step guide to migrating enterprise applications to AWS cloud. Learn about assessment, planning, execution, and optimization phases of cloud migration.",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
      category: "Cloud",
      readTime: "15 min read",
      publishDate: "2024-06-05",
      author: "Shameer",
    },
    {
      id: "ai-development-best-practices",
      title: "AI Development Best Practices for Developers",
      excerpt:
        "Essential best practices for integrating AI and machine learning into your applications. Learn about data handling, model deployment, and ethical considerations.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      category: "AI/ML",
      readTime: "10 min read",
      publishDate: "2024-05-28",
      author: "Shameer",
    },
    {
      id: "devops-automation-pipeline",
      title: "Building Robust DevOps Automation Pipelines",
      excerpt:
        "Create efficient CI/CD pipelines that scale with your team. Learn about automated testing, deployment strategies, and infrastructure as code implementation.",
      image:
        "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=400&fit=crop",
      category: "DevOps",
      readTime: "14 min read",
      publishDate: "2024-05-20",
      author: "Shameer",
    },
    {
      id: "database-design-patterns",
      title: "Modern Database Design Patterns",
      excerpt:
        "Explore modern database design patterns for scalable applications. From CQRS to event sourcing, learn when and how to apply these patterns effectively.",
      image:
        "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600&h=400&fit=crop",
      category: "Database",
      readTime: "11 min read",
      publishDate: "2024-05-15",
      author: "Shameer",
    },
  ];

  return (
    <section id="blog" className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white tracking-tight">
              Tech <span className="text-primary">Blog</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl">
              Insights, tutorials, and thoughts on software architecture, development best practices, and emerging technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card
                key={post.id}
                className="group overflow-hidden border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm text-slate-900 dark:text-white text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4 text-xs text-slate-500 dark:text-slate-400">
                    <div className="flex items-center">
                      <User size={14} className="mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {new Date(post.publishDate).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      {post.readTime}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed text-sm line-clamp-3">
                    {post.excerpt}
                  </p>

                  <Link to={`/blog/${post.id}`}>
                    <Button
                      variant="ghost"
                      className="w-full justify-between group-hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-800"
                    >
                      Read Article
                      <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
