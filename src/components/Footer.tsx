import React from "react";
import { Heart, Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-footer text-footer-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Shameer</h3>
              <p className="text-footer-muted leading-relaxed mb-4">
                Software Architect & Technology Leader with 13+ years of
                experience building scalable solutions and leading development
                teams.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/shameersn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-footer-border/50 rounded-full hover:bg-footer-muted/30 transition-colors"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/shameersn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-footer-border/50 rounded-full hover:bg-footer-muted/30 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:shameersalnaz@gmail.com"
                  className="p-2 bg-footer-border/50 rounded-full hover:bg-footer-muted/30 transition-colors"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#about"
                    className="text-footer-muted hover:text-footer-foreground transition-colors"
                  >
                    About Me
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    className="text-footer-muted hover:text-footer-foreground transition-colors"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="#experience"
                    className="text-footer-muted hover:text-footer-foreground transition-colors"
                  >
                    Experience
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="text-footer-muted hover:text-footer-foreground transition-colors"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-footer-muted hover:text-footer-foreground transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-footer-muted">
                <li>Software Architecture</li>
                <li>Technical Leadership</li>
                <li>Full-Stack Development</li>
                <li>Cloud Migration</li>
                <li>Technology Consulting</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-footer-border pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-footer-muted mb-4 md:mb-0">
              <span>Made with</span>
              <Heart size={16} className="mx-2 text-destructive" />
              <span>by Shameer S N © {new Date().getFullYear()}</span>
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center text-footer-muted hover:text-footer-foreground transition-colors group"
            >
              <span className="mr-2">Back to top</span>
              <ArrowUp
                size={16}
                className="group-hover:-translate-y-1 transition-transform"
              />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
