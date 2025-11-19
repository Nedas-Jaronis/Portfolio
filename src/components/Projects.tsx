import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Physics Visualizer",
      description: "An interactive visualization tool for physics simulations and calculations, making complex concepts easier to understand.",
      github: "#",
      color: "from-purple-500/20 to-pink-500/20",
    },
    {
      title: "Insure Sight",
      description: "An application designed to simplify the insurance claim process by enabling users to document their belongings before disasters occur.",
      github: "#",
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      title: "Mini-Casino",
      description: "A C++ based casino game simulation featuring multiple games with realistic probability and betting mechanics.",
      github: "#",
      color: "from-orange-500/20 to-red-500/20",
    },
    {
      title: "Sudoku",
      description: "An intelligent Sudoku solver and generator with multiple difficulty levels and hint system.",
      github: "#",
      color: "from-green-500/20 to-emerald-500/20",
    },
    {
      title: "Automatic Assignment Notification System",
      description: "Automated system for tracking and notifying students about new assignments and deadlines.",
      github: "#",
      color: "from-indigo-500/20 to-purple-500/20",
    },
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <p className="text-primary text-lg mb-2">Browse My Recent</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="glass-card border-primary/20 hover-lift group overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient Background */}
              <div className={`h-40 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                <div className="absolute inset-0 backdrop-blur-3xl" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl font-bold text-white/10">
                    {project.title.split(' ')[0]}
                  </div>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-muted-foreground leading-relaxed min-h-[80px]">
                  {project.description}
                </CardDescription>
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2 border-primary/50 hover:bg-primary/10 flex-1"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} />
                      GitHub
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="gap-2 bg-primary hover:bg-primary/90"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} />
                      View
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
