import { Card } from "@/components/ui/card";
import { Video, Users, Trophy, Clock } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Video, label: "Videos Produced", value: "500+" },
    { icon: Users, label: "Happy Clients", value: "150+" },
    { icon: Trophy, label: "Awards Won", value: "25+" },
    { icon: Clock, label: "Years Experience", value: "10+" },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Bringing Your <span className="gradient-accent bg-clip-text text-transparent">Vision</span> to Life
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm Alex Rivera, a passionate video producer with over a decade of experience creating compelling visual stories. From corporate narratives to artistic documentaries, I specialize in transforming ideas into cinematic experiences.
              </p>
              <p>
                My approach combines technical expertise with creative storytelling, ensuring every frame serves your message. Whether it's a brand commercial or a documentary film, I deliver content that resonates with your audience.
              </p>
              <p>
                Based in Los Angeles, I work with clients globally, bringing a Hollywood-level production quality to projects of all scales.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={stat.label} className="gradient-card border-border p-6 text-center shadow-card hover:shadow-glow transition-all duration-300">
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <div className="text-2xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;