import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, Film, Megaphone, FileText, Users, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Briefcase,
      title: "Corporate Videos",
      description: "Professional corporate content including training videos, company profiles, and internal communications.",
      features: ["Executive Interviews", "Company Culture", "Training Content", "Investor Relations"]
    },
    {
      icon: Megaphone,
      title: "Commercial Production",
      description: "High-impact commercials and advertisements that drive engagement and conversions.",
      features: ["TV Commercials", "Social Media Ads", "Product Launches", "Brand Campaigns"]
    },
    {
      icon: Film,
      title: "Documentary Films",
      description: "Compelling documentary storytelling that captures authentic human experiences and important narratives.",
      features: ["Feature Documentaries", "Short Films", "Interview Series", "Event Coverage"]
    },
    {
      icon: FileText,
      title: "Branded Content",
      description: "Strategic branded content that builds authentic connections between your brand and audience.",
      features: ["Brand Stories", "Behind the Scenes", "Testimonials", "Case Studies"]
    },
    {
      icon: Users,
      title: "Event Production",
      description: "Complete event coverage from intimate gatherings to large-scale conferences and celebrations.",
      features: ["Live Streaming", "Conference Coverage", "Wedding Films", "Corporate Events"]
    },
    {
      icon: Zap,
      title: "Post-Production",
      description: "Professional editing, color grading, and post-production services to bring your vision to life.",
      features: ["Video Editing", "Color Grading", "Motion Graphics", "Sound Design"]
    }
  ];

  return (
    <section className="py-20 gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Professional <span className="gradient-accent bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive video production services tailored to meet your unique storytelling needs and business objectives.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={service.title} className="gradient-card border-border p-8 hover:shadow-glow transition-all duration-300 group">
              <service.icon className="w-12 h-12 text-primary mb-6 group-hover:animate-glow-pulse" />
              <h3 className="text-xl font-heading font-semibold mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="text-sm text-muted-foreground flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                Learn More
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;