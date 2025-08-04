import { Card, CardContent } from "@/components/ui/card";
import { Home, Building, Wrench, MessageCircle } from "lucide-react";
import { translations } from "@/data/translation";

interface ServicesSectionProps {
  language: string;
}

export const ServicesSection = ({ language }: ServicesSectionProps) => {
  const t = translations[language as keyof typeof translations];

  const services = [
    {
      icon: Home,
      title: t.services.residential.title,
      description: t.services.residential.description,
      color: "bg-primary",
    },
    {
      icon: Building,
      title: t.services.commercial.title,
      description: t.services.commercial.description,
      color: "bg-primary-light",
    },
    {
      icon: Wrench,
      title: t.services.maintenance.title,
      description: t.services.maintenance.description,
      color: "bg-secondary",
    },
    {
      icon: MessageCircle,
      title: t.services.consultation.title,
      description: t.services.consultation.description,
      color: "bg-accent",
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              {t.services.title}
            </h2>
            <p className="text-xl text-muted-foreground">
              {t.services.subtitle}
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-solar transition-all duration-300 hover:-translate-y-2 border-border/50"
                >
                  <CardContent className="p-8 text-center">
                    <div
                      className={`inline-flex p-4 rounded-2xl ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
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
