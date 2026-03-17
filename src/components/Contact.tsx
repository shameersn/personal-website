import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ctaSection } from "@/data/portfolio";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Send,
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
          title: "Message sent",
          description: "Thanks for reaching out. I'll get back to you within 24 hours.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch(() => {
        toast({
          title: "Message couldn't be sent",
          description:
            "Please check your connection and try again, or email me directly at shameersalnaz@gmail.com.",
          variant: "destructive",
        });
      });
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
      icon: <Mail className="text-primary" size={24} />,
      title: "Email",
      value: "shameersalnaz@gmail.com",
      link: "mailto:shameersalnaz@gmail.com",
    },
    {
      icon: <Phone className="text-primary" size={24} />,
      title: "Phone",
      value: "+91 90******89",
      link: "tel:+9190******89",
    },
    {
      icon: <MapPin className="text-primary" size={24} />,
      title: "Location",
      value: "Thiruvananthapuram, Kerala, India",
      link: null,
    },
    {
      icon: <Linkedin className="text-primary" size={24} />,
      title: "LinkedIn",
      value: "/in/shameersn",
      link: "https://linkedin.com/in/shameersn",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* CTA block */}
          <div className="text-center mb-16 p-8 md:p-10 rounded-xl border border-border bg-card animate-fade-in-up">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {ctaSection.title}
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              {ctaSection.subtitle}
            </p>
            <Button size="lg" className="mb-2" asChild>
              <a href="#contact-form-section">{ctaSection.ctaText}</a>
            </Button>
            <p className="text-sm text-muted-foreground">{ctaSection.ctaSubtext}</p>
          </div>

          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Open to senior backend, AI engineer, and solution architect roles. Consultation and architecture review for startups and scale-ups.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Information */}
            <div className="animate-fade-in-up space-y-8">
              <p className="text-muted-foreground leading-relaxed">
                I respond within 24 hours. Available for full-time roles, consulting, and architecture review.
              </p>

              <ul className="space-y-3">
                {contactInfo.map((info) => (
                  <li key={info.title} className="flex items-center gap-3">
                    {info.icon}
                    <div>
                      <span className="font-semibold text-foreground text-sm">
                        {info.title}
                      </span>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-primary hover:underline text-sm ml-1.5"
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
                        <span className="text-muted-foreground text-sm ml-1.5">
                          {info.value}
                        </span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <div>
                <h4 className="font-semibold text-foreground mb-2">
                  What I can help with
                </h4>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  {[
                    "AI systems (LLMs, RAG, agents) and backend architecture",
                    "Scalable APIs, microservices, and cloud-native design",
                    "Technical leadership and system design reviews",
                    "Consulting and architecture for startups and scale-ups",
                  ].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div id="contact-form-section" className="animate-fade-in-up p-6 md:p-8 border border-border rounded-lg bg-card scroll-mt-24">
              <form
                  id="contact-form"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  netlify
                  name="contact"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-foreground mb-2"
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
                        className="block text-sm font-medium text-foreground mb-2"
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
                      className="block text-sm font-medium text-foreground mb-2"
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
                      className="block text-sm font-medium text-foreground mb-2"
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
