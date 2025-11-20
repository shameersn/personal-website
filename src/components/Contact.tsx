import React, { useState } from "react";
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

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { toast } = useToast();

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
      icon: <Mail className="text-blue-600" size={24} />,
      title: "Email",
      value: "shameersalnaz@gmail.com",
      link: "mailto:shameersalnaz@gmail.com",
    },
    {
      icon: <Phone className="text-green-600" size={24} />,
      title: "Phone",
      value: "+91 90******89",
      link: "tel:+9190******89",
    },
    {
      icon: <MapPin className="text-red-600" size={24} />,
      title: "Location",
      value: "Thiruvananthapuram, Kerala, India",
      link: null,
    },
    {
      icon: <Linkedin className="text-blue-700" size={24} />,
      title: "LinkedIn",
      value: "/in/shameersn",
      link: "https://linkedin.com/in/shameersn",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Open to discussing technical consultation, architecture review,
              and leadership opportunities. Please feel free to reach out for
              professional inquiries.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="animate-fade-in-up">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center">
                  <MessageCircle className="mr-3 text-primary" size={28} />
                  Professional Consultation
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  I am available for consultation on enterprise architecture,
                  technical leadership, and software development initiatives.
                  Whether you are building new systems, modernizing existing
                  infrastructure, or seeking technical guidance, I am here to
                  provide strategic insights and practical solutions.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  I respond to all professional inquiries within 24 hours and
                  welcome opportunities to discuss complex technical challenges.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    className="p-4 hover:shadow-lg transition-all duration-300 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800"
                  >
                    <div className="flex items-center">
                      {info.icon}
                      <div className="ml-3">
                        <div className="font-semibold text-gray-900 dark:text-white text-sm">
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
                          <div className="text-gray-600 dark:text-gray-300 text-sm">
                            {info.value}
                          </div>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <Card className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-700 border border-blue-100 dark:border-slate-700">
                <h4 className="font-bold text-gray-900 dark:text-white mb-3">
                  Areas of Expertise
                </h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1">•</span>
                    Enterprise Software Architecture & System Design
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1">•</span>
                    Technical Leadership & Engineering Team Development
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1">•</span>
                    Full-Stack Application Development & Modernization
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1">•</span>
                    Cloud Infrastructure & DevOps Strategy
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1">•</span>
                    Technical Consulting & Architecture Review
                  </li>
                </ul>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-in-up">
              <Card className="p-8 border border-slate-200 dark:border-slate-700 shadow-xl bg-white dark:bg-slate-800">
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

                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                    <Send size={18} className="ml-2" />
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
