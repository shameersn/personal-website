import React from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Share2,
  Bookmark,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();

  // Blog post data (in a real app, this would come from an API or CMS)
  const blogPosts = {
    "microservices-architecture-guide": {
      title: "Complete Guide to Microservices Architecture",
      excerpt:
        "Learn how to design, implement, and scale microservices architecture for enterprise applications.",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=600&fit=crop",
      category: "Architecture",
      readTime: "12 min read",
      publishDate: "2024-06-15",
      author: "Shameer",
      content: `
        <h2>Introduction to Microservices</h2>
        <p>Microservices architecture has become the de facto standard for building scalable, maintainable enterprise applications. In this comprehensive guide, we'll explore the key concepts, benefits, and challenges of implementing microservices.</p>
        
        <h2>Key Benefits of Microservices</h2>
        <ul>
          <li><strong>Scalability:</strong> Scale individual services based on demand</li>
          <li><strong>Technology Diversity:</strong> Use different technologies for different services</li>
          <li><strong>Team Independence:</strong> Teams can work independently on different services</li>
          <li><strong>Fault Isolation:</strong> Failures in one service don't affect others</li>
        </ul>
        
        <h2>Implementation Strategy</h2>
        <p>When transitioning from a monolithic architecture to microservices, it's crucial to follow a strategic approach:</p>
        
        <h3>1. Domain-Driven Design</h3>
        <p>Start by identifying bounded contexts within your domain. Each microservice should represent a specific business capability.</p>
        
        <h3>2. Data Management</h3>
        <p>Each microservice should own its data. Avoid shared databases and implement eventual consistency where needed.</p>
        
        <h3>3. Communication Patterns</h3>
        <p>Use synchronous communication (REST, GraphQL) for real-time needs and asynchronous messaging for loose coupling.</p>
        
        <h2>Common Challenges</h2>
        <p>While microservices offer many benefits, they also introduce complexity:</p>
        <ul>
          <li>Distributed system complexity</li>
          <li>Network latency and reliability</li>
          <li>Data consistency challenges</li>
          <li>Testing and debugging complexity</li>
        </ul>
        
        <h2>Best Practices</h2>
        <p>To successfully implement microservices, follow these best practices:</p>
        <ul>
          <li>Start small and evolve gradually</li>
          <li>Implement proper monitoring and logging</li>
          <li>Use containerization and orchestration</li>
          <li>Implement circuit breakers and retry logic</li>
          <li>Maintain proper documentation</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Microservices architecture is a powerful approach for building scalable applications, but it requires careful planning and implementation. By following the principles and practices outlined in this guide, you can successfully transition to and maintain a microservices architecture.</p>
      `,
    },
    "react-performance-optimization": {
      title: "React Performance Optimization Techniques",
      excerpt:
        "Discover advanced techniques to optimize React applications for better performance.",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&h=600&fit=crop",
      category: "React",
      readTime: "8 min read",
      publishDate: "2024-06-10",
      author: "Shameer",
      content: `
        <h2>Introduction</h2>
        <p>React applications can become slow as they grow in complexity. This guide covers essential optimization techniques to keep your React apps fast and responsive.</p>
        
        <h2>React.memo for Component Memoization</h2>
        <p>Use React.memo to prevent unnecessary re-renders of functional components:</p>
        <pre><code>const MyComponent = React.memo(({ data }) => {
  return <div>{data.title}</div>;
});</code></pre>
        
        <h2>useMemo and useCallback Hooks</h2>
        <p>Optimize expensive calculations and prevent unnecessary function recreations:</p>
        <pre><code>const memoizedValue = useMemo(() => {
  return expensiveCalculation(data);
}, [data]);

const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);</code></pre>
        
        <h2>Code Splitting and Lazy Loading</h2>
        <p>Reduce initial bundle size by loading components only when needed:</p>
        <pre><code>const LazyComponent = React.lazy(() => import('./LazyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}</code></pre>
        
        <h2>Virtual Scrolling</h2>
        <p>For large lists, implement virtual scrolling to render only visible items and improve performance significantly.</p>
        
        <h2>Conclusion</h2>
        <p>By implementing these optimization techniques, you can ensure your React applications remain fast and provide excellent user experience even as they scale.</p>
      `,
    },
    // Add more blog posts as needed
  };

  const post = blogPosts[id as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link to="/">
            <Button>Go Back Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      <article className="pt-20">
        {/* Hero Section */}
        <div className="relative h-96 overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl px-4">
              <span className="inline-block px-3 py-1 bg-primary text-white text-sm font-medium rounded-full mb-4">
                {post.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {post.title}
              </h1>
              <p className="text-xl opacity-90">{post.excerpt}</p>
            </div>
          </div>
        </div>

        {/* Article Meta */}
        <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
          <div className="container mx-auto px-4 py-6">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-6 text-gray-600 dark:text-gray-400">
                  <div className="flex items-center">
                    <User size={16} className="mr-2" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-2" />
                    {new Date(post.publishDate).toLocaleDateString()}
                  </div>
                  <div className="flex items-center">
                    <Clock size={16} className="mr-2" />
                    {post.readTime}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <Share2 size={16} className="mr-2" />
                    Share
                  </Button>
                  <Button size="sm" variant="outline">
                    <Bookmark size={16} className="mr-2" />
                    Save
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <Link
              to="/"
              className="inline-flex items-center text-primary hover:text-primary/80 mb-8"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Home
            </Link>

            <div
              className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-600 dark:prose-p:text-gray-300"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div className="flex justify-between items-center">
                <Link to="/#blog">
                  <Button variant="outline">
                    <ArrowLeft size={16} className="mr-2" />
                    More Posts
                  </Button>
                </Link>

                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <Share2 size={16} className="mr-2" />
                    Share
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;
