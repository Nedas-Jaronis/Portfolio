import { Briefcase, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
      role: "Director of Technological Advancements",
      organization: "UF AI Club",
      period: "2023 - Present",
      description: "Leading technological initiatives and fostering innovation within the AI community at the University of Florida.",
    },
    {
      role: "Hackathon Participant",
      organization: "UF/IBM AI Days Hackathon",
      period: "2023",
      description: "Developed Insure Sight, an innovative application for simplifying insurance claims through AI-powered documentation.",
    },
    {
      role: "Project Developer",
      organization: "Personal Project",
      period: "2023",
      description: "Created Physics Visualizer, an interactive tool for visualizing complex physics concepts and simulations.",
    },
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <p className="text-primary text-lg mb-2">Explore My</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <Card
              key={exp.role}
              className="glass-card border-primary/20 hover-lift animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg mt-1">
                      <Briefcase className="text-primary" size={24} />
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-1 group-hover:text-primary transition-colors">
                        {exp.role}
                      </CardTitle>
                      <p className="text-muted-foreground">{exp.organization}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground md:ml-auto">
                    <Calendar size={16} />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
