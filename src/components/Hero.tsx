import React from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { hero } from "@/data/portfolio";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden pt-16"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted via-background to-muted dark:from-background dark:via-background dark:to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-muted/20 via-transparent to-transparent dark:from-muted/10" />

      <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row lg:items-center lg:gap-16">
        {/* Left: Copy */}
        <div className="flex-1 max-w-2xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-4">
            {hero.headline}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            {hero.valueProposition}
          </p>
          <ul className="space-y-3 mb-10">
            {hero.bullets.map((bullet, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-muted-foreground"
              >
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-4 mb-12">
            <Button
              size="lg"
              className="text-base px-6 py-6 transition-transform duration-150 active:scale-[0.98] hover:scale-[1.02]"
              asChild
            >
              <a href="#projects">{hero.ctaPrimary}</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base px-6 py-6"
              asChild
            >
              <a href="#contact">{hero.ctaSecondary}</a>
            </Button>
          </div>
          <div className="flex gap-4">
            <a
              href="https://github.com/shameersn"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github size={22} className="text-foreground" />
            </a>
            <a
              href="https://www.linkedin.com/in/shameersn/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} className="text-foreground" />
            </a>
            <a
              href="mailto:shameersalnaz@gmail.com"
              className="p-3 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors duration-200"
              aria-label="Email"
            >
              <Mail size={22} className="text-foreground" />
            </a>
          </div>
        </div>

        {/* Right: Abstract visual — AI/architecture themed */}
        <div
          className="hidden lg:flex flex-1 max-w-lg h-[420px] items-center justify-center animate-fade-in"
          aria-hidden
        >
          <div className="relative w-full h-full">
            {/* Layered abstract shapes */}
            <div className="absolute inset-0 rounded-2xl border border-border bg-card/50 overflow-hidden">
              <div className="absolute top-1/4 left-1/4 w-24 h-24 rounded-xl bg-primary/10 rotate-12" />
              <div className="absolute top-1/3 right-1/4 w-32 h-32 rounded-full bg-muted border border-border" />
              <div className="absolute bottom-1/3 left-1/3 w-20 h-20 rounded-lg bg-primary/5 -rotate-6" />
              <div className="absolute bottom-1/4 right-1/3 w-28 h-28 rounded-xl border border-primary/30 bg-background/80" />
              {/* Connection lines (diagram feel) */}
              <svg
                className="absolute inset-0 w-full h-full text-border"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                viewBox="0 0 400 400"
                preserveAspectRatio="none"
              >
                <path d="M80 100 L200 160 L320 100" />
                <path d="M200 160 L200 280 L120 340" />
                <path d="M200 280 L280 340" />
              </svg>
              {/* Small nodes */}
              <div className="absolute top-[22%] left-[22%] w-2 h-2 rounded-full bg-primary" />
              <div className="absolute top-[38%] left-[48%] w-2 h-2 rounded-full bg-primary" />
              <div className="absolute top-[22%] right-[28%] w-2 h-2 rounded-full bg-primary" />
              <div className="absolute bottom-[32%] left-[48%] w-2 h-2 rounded-full bg-primary" />
              <div className="absolute bottom-[18%] left-[32%] w-2 h-2 rounded-full bg-primary" />
              <div className="absolute bottom-[18%] right-[36%] w-2 h-2 rounded-full bg-primary" />
            </div>
            <div className="relative">
              {/* Soft gradient ring and frame */}
              <div
                className="absolute -inset-1 rounded-lg bg-gradient-to-br from-primary/20 via-transparent to-muted/30 dark:from-primary/15 dark:to-muted/20 blur-sm"
                aria-hidden
              />
              <div className="relative rounded-lg p-1.5 bg-background/80 dark:bg-background/90 shadow-xl ring-1 ring-border/50 ring-offset-4 ring-offset-background dark:ring-offset-background">
                <img
                  src="/avatar.png"
                  alt=""
                  className="w-full h-full object-contain rounded-lg shadow-inner grayscale"
                  style={{
                    boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.05)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-scroll-hint motion-reduce:animate-none"
        aria-hidden
      >
        <a
          href="#about"
          className="inline-block text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowDown size={28} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
