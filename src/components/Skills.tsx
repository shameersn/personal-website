import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { skillGroups } from "@/data/portfolio";
import {
  Brain,
  Server,
  Cloud,
  LayoutDashboard,
} from "lucide-react";

const iconMap = {
  ai: Brain,
  backend: Server,
  cloud: Cloud,
  architecture: LayoutDashboard,
} as const;

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Capabilities
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              What I do — grouped by domain, not buzzwords
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {skillGroups.map((group) => {
              const Icon = iconMap[group.id as keyof typeof iconMap] ?? Brain;
              return (
                <Card
                  key={group.id}
                  className="border border-border bg-card hover:border-primary/30 transition-colors duration-200 animate-fade-in-up group"
                >
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-3">
                      <span className="p-2 rounded-lg bg-muted text-foreground group-hover:bg-primary/10 transition-colors">
                        <Icon size={20} />
                      </span>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">
                          {group.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {group.subtitle}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {group.description}
                    </p>
                    <ul className="flex flex-wrap gap-2">
                      {group.capabilities.map((cap) => (
                        <li
                          key={cap}
                          className="px-2.5 py-1 bg-muted rounded-md text-xs text-muted-foreground"
                        >
                          {cap}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
