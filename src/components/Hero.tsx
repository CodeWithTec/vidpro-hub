import { Button } from "@/components/ui/button";
import { PlayCircle, Award, Camera } from "lucide-react";
import heroImage from "@/assets/hero-video-production.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
      <div className="absolute inset-0 bg-black/40" />
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-6 animate-fade-in">
            <Camera className="w-6 h-6 text-primary" />
            <span className="text-primary font-medium tracking-wide">PROFESSIONAL VIDEO PRODUCTION</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight animate-slide-in-left">
            Creating <span className="gradient-accent bg-clip-text text-transparent">Cinematic Stories</span> That Captivate
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl leading-relaxed animate-fade-in">
            Professional video producer specializing in corporate videos, commercials, documentaries, and branded content that elevates your story.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-slide-in-left">
            <Button size="lg" className="bg-primary text-primary-foreground hover:shadow-glow transition-all duration-300">
              <PlayCircle className="mr-2 h-5 w-5" />
              Watch My Work
            </Button>
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
              Get In Touch
            </Button>
          </div>
          
          <div className="flex items-center gap-8 text-sm text-muted-foreground animate-fade-in">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-primary" />
              <span>Award Winning Producer</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-border"></div>
            <div>
              <span>500+ Projects Delivered</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-border"></div>
            <div>
              <span>10+ Years Experience</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;