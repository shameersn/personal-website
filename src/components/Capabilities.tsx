import React from "react";
import { aiCapabilities } from "@/data/portfolio";
import { LayoutDashboard, GitBranch, Layers, Server, Cloud } from "lucide-react";

const iconList = [
  LayoutDashboard,
  GitBranch,
  Layers,
  Server,
  Cloud,
] as const;

const Capabilities = () => {
  return (
    <section id="capabilities" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              AI & Architecture Capabilities
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              What I design and build — from LLM systems to cloud-native backends
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {aiCapabilities.map((item, i) => {
              const Icon = iconList[i % iconList.length];
              return (
                <div
                  key={item.title}
                  className="flex gap-4 p-6 rounded-lg border border-border bg-card hover:border-primary/30 transition-colors duration-200 animate-fade-in-up"
                >
                  <span className="shrink-0 p-2 rounded-lg bg-muted text-foreground">
                    <Icon size={22} />
                  </span>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
