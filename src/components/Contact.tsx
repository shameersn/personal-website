import React, { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Send,
  MessageCircle,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { profileData } from "@/data/profile";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const myForm = document.getElementById("contact-form");
    const formData = new FormData(myForm);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        toast({
          title: "Message Sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
      })
      .catch((error) => alert(error));
    // Simulate form submission

    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="text-blue-600 dark:text-blue-400" size={24} />,
      title: "Email",
      value: profileData.email,
      link: `mailto:${profileData.email}`,
    },
    {
      icon: <Phone className="text-green-600 dark:text-green-400" size={24} />,
      title: "Phone",
      value: profileData.phone || "",
      link: profileData.phone
        ? `tel:${profileData.phone.replace(/\s/g, "")}`
        : null,
    },
    {
      icon: <MapPin className="text-red-600 dark:text-red-400" size={24} />,
      title: "Location",
      value: profileData.location,
      link: null,
    },
    {
      icon: <Linkedin className="text-blue-700 dark:text-blue-400" size={24} />,
      title: "LinkedIn",
      value:
        profileData.socialLinks
          .find((s) => s.platform === "LinkedIn")
          ?.url.split("/")
          .pop() || "",
      link:
        profileData.socialLinks.find((s) => s.platform === "LinkedIn")?.url ||
        null,
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-500"
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
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Ready to discuss your next project or explore collaboration
              opportunities? I'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div
              className={`transition-all duration-1000 delay-200 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 flex items-center">
                  <MessageCircle className="mr-3 text-primary" size={28} />
                  Let's Start a Conversation
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Whether you're looking to build something new, scale existing
                  systems, or need technical leadership for your team, I'm here
                  to help turn your vision into reality.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  I typically respond within 24 hours and am always excited to
                  discuss new challenges and opportunities.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    className="p-4 hover:shadow-xl hover:scale-105 transition-all duration-300 border-none bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm group"
                  >
                    <div className="flex items-center">
                      {info.icon}
                      <div className="ml-3">
                        <div className="font-semibold text-gray-900 text-sm">
                          {info.title}
                        </div>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-primary hover:underline text-sm"
                            target={
                              info.link.startsWith("http")
                                ? "_blank"
                                : undefined
                            }
                            rel={
                              info.link.startsWith("http")
                                ? "noopener noreferrer"
                                : undefined
                            }
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-gray-600 text-sm">
                            {info.value}
                          </div>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <Card className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-none shadow-lg">
                <h4 className="font-bold text-gray-900 mb-3">
                  What I Can Help With
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1">•</span>
                    Software Architecture & System Design
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1">•</span>
                    Technical Leadership & Team Building
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1">•</span>
                    Full-Stack Development Projects
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1">•</span>
                    Cloud Migration & DevOps Strategy
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1">•</span>
                    Technology Consulting & Code Reviews
                  </li>
                </ul>
              </Card>
            </div>

            {/* Contact Form */}
            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <Card className="p-8 border-none shadow-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  netlify
                  id="contact-form"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Your Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Discussion / Consultation"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, challenges, or how I can help..."
                      rows={5}
                      className="w-full resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full group hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl"
                  >
                    Send Message
                    <Send
                      size={18}
                      className="ml-2 group-hover:translate-x-1 transition-transform"
                    />
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
