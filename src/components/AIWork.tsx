import React, { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { caseStudies } from "@/data/portfolio";
import type { CaseStudy } from "@/data/portfolio";
import { Brain, ChevronRight } from "lucide-react";

const aiStudies = caseStudies.filter((s) => s.isAiHighlight);

const CaseStudyModal = ({
  study,
  open,
  onOpenChange,
}: {
  study: CaseStudy | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) => {
  if (!study) return null;
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <Badge variant="secondary" className="w-fit text-xs">
            {study.tag}
          </Badge>
          <DialogTitle className="text-xl pt-2">{study.title}</DialogTitle>
        </DialogHeader>
        <div className="space-y-6 text-sm">
          <div>
            <h4 className="font-semibold text-foreground mb-1">Problem</h4>
            <p className="text-muted-foreground leading-relaxed">
              {study.problem}
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-1">Solution</h4>
            <p className="text-muted-foreground leading-relaxed">
              {study.solution}
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-1">Architecture</h4>
            <p className="text-muted-foreground leading-relaxed">
              {study.architecture}
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-2">Tech stack</h4>
            <div className="flex flex-wrap gap-2">
              {study.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 bg-muted rounded-md text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-2">Impact</h4>
            <ul className="space-y-1">
              {study.impact.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-muted-foreground">
                  <span className="text-primary mt-0.5">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const AIWork = () => {
  const [selected, setSelected] = useState<CaseStudy | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleSelect = (study: CaseStudy) => {
    setSelected(study);
    setModalOpen(true);
  };

  return (
    <section
      id="ai-work"
      className="py-24 bg-background border-y border-border"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div className="animate-fade-in-up">
              <div className="flex items-center gap-2 mb-4">
                <span className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Brain size={24} />
                </span>
                <span className="text-sm font-medium uppercase tracking-wide text-primary">
                  AI & automation
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                AI Work
              </h2>
              <div className="w-24 h-1 bg-primary mt-4" />
            </div>
            <p className="text-muted-foreground max-w-md animate-fade-in-up">
              RAG, multi-agent systems, and LLM-powered workflows — designed for production, not demos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiStudies.map((study) => (
              <Card
                key={study.id}
                className="group cursor-pointer border-2 border-primary/20 bg-card hover:border-primary/50 hover:shadow-lg transition-all duration-200 animate-fade-in-up"
                onClick={() => handleSelect(study)}
              >
                <CardHeader className="pb-2">
                  <Badge variant="secondary" className="w-fit text-xs mb-2">
                    {study.tag}
                  </Badge>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors flex items-center justify-between gap-2">
                    {study.title}
                    <ChevronRight size={20} className="shrink-0 text-muted-foreground group-hover:text-primary" />
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                    {study.problem}
                  </p>
                  <p className="text-primary text-sm font-medium mt-3">
                    View case study
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <CaseStudyModal
        study={selected}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </section>
  );
};

export default AIWork;
