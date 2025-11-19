import { Code2, Database } from "lucide-react";

const TechStack = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-muted-foreground text-lg">Technologies I work with</p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4" />
        </div>

        {/* Frontend Skills Row */}
        <div className="mb-12">
          <div className="flex items-center gap-3 justify-center mb-6">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Code2 className="text-primary" size={24} />
            </div>
            <h3 className="text-xl font-semibold gradient-text">Frontend Development</h3>
          </div>
          <div className="relative overflow-hidden py-8">
            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none" />
            
            {/* Scrolling Container */}
            <div className="flex animate-scroll">
              {/* First set of skills */}
              {["HTML", "CSS", "React", "JavaScript", "TypeScript"].map((skill, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 mx-6 glass-card px-8 py-6 rounded-xl border-primary/20 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 min-w-[200px]"
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold gradient-text mb-2">{skill}</div>
                    <div className="text-sm text-muted-foreground">Advanced</div>
                  </div>
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {["HTML", "CSS", "React", "JavaScript", "TypeScript"].map((skill, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 mx-6 glass-card px-8 py-6 rounded-xl border-primary/20 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 min-w-[200px]"
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold gradient-text mb-2">{skill}</div>
                    <div className="text-sm text-muted-foreground">Advanced</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Backend Skills Row - Scrolling Opposite Direction */}
        <div>
          <div className="flex items-center gap-3 justify-center mb-6">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Database className="text-primary" size={24} />
            </div>
            <h3 className="text-xl font-semibold gradient-text">Backend Development</h3>
          </div>
          <div className="relative overflow-hidden py-8">
            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none" />
            
            {/* Scrolling Container - Reverse Direction */}
            <div className="flex animate-scroll-reverse">
              {/* First set of skills */}
              {["Python", "C++", "Numpy", "TensorFlow", "Pandas"].map((skill, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 mx-6 glass-card px-8 py-6 rounded-xl border-primary/20 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 min-w-[200px]"
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold gradient-text mb-2">{skill}</div>
                    <div className="text-sm text-muted-foreground">Advanced</div>
                  </div>
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {["Python", "C++", "Numpy", "TensorFlow", "Pandas"].map((skill, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 mx-6 glass-card px-8 py-6 rounded-xl border-primary/20 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 min-w-[200px]"
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold gradient-text mb-2">{skill}</div>
                    <div className="text-sm text-muted-foreground">Advanced</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
