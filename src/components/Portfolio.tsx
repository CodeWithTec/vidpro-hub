import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlayCircle, ExternalLink, Award, Clock } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "Tech Innovation Summit",
      category: "Corporate Event",
      description: "Complete coverage of a 3-day technology conference featuring keynote speakers and interactive sessions.",
      duration: "45 min",
      awards: "Best Corporate Video 2023",
      year: "2023"
    },
    {
      title: "Sustainable Future",
      category: "Documentary",
      description: "An inspiring documentary about renewable energy innovations and their impact on climate change.",
      duration: "28 min", 
      awards: "Environmental Film Award",
      year: "2023"
    },
    {
      title: "Brand Revolution Campaign",
      category: "Commercial",
      description: "A series of dynamic commercials for a tech startup's product launch across multiple platforms.",
      duration: "30 sec",
      awards: "Creative Excellence Award",
      year: "2024"
    },
    {
      title: "Heritage Stories",
      category: "Documentary Series",
      description: "A touching series exploring cultural heritage and traditions in urban communities.",
      duration: "6 episodes",
      awards: "Cultural Impact Award",
      year: "2022"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Featured <span className="gradient-accent bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of recent projects that demonstrate the power of compelling visual storytelling.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card key={project.title} className="gradient-card border-border overflow-hidden shadow-card hover:shadow-glow transition-all duration-300 group">
              <div className="aspect-video bg-gradient-to-br from-accent to-accent/50 flex items-center justify-center relative overflow-hidden">
                <PlayCircle className="w-16 h-16 text-primary group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute top-4 right-4">
                  <div className="bg-black/50 px-2 py-1 rounded text-xs text-foreground">
                    {project.category}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-heading font-semibold">{project.title}</h3>
                  <span className="text-sm text-muted-foreground">{project.year}</span>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{project.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-primary" />
                    <span>{project.awards}</span>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Button className="flex-1 bg-primary text-primary-foreground hover:shadow-glow transition-all duration-300">
                    <PlayCircle className="mr-2 h-4 w-4" />
                    Watch Now
                  </Button>
                  <Button variant="outline" size="icon" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
            View Complete Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;