import { Card, CardContent } from "@/components/ui/card";
import { translations } from "@/data/translation";
import { Leaf, DollarSign, Zap, Shield } from "lucide-react";

interface WhySolarSectionProps {
  language: string;
}

export const WhySolarSection = ({ language }: WhySolarSectionProps) => {
  const t = translations[language as keyof typeof translations];

  const benefits = [
    {
      icon: Leaf,
      title: t.whySolar.environmental.title,
      description: t.whySolar.environmental.description,
      gradient: "earth-bg",
    },
    {
      icon: DollarSign,
      title: t.whySolar.savings.title,
      description: t.whySolar.savings.description,
      gradient: "bg-accent",
    },
    {
      icon: Zap,
      title: t.whySolar.independence.title,
      description: t.whySolar.independence.description,
      gradient: "bg-sky",
    },
    {
      icon: Shield,
      title: t.whySolar.reliable.title,
      description: t.whySolar.reliable.description,
      gradient: "solar-bg ",
    },
  ];

  return (
    <section id="why-solar" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              {t.whySolar.title}
            </h2>
            <p className="text-xl text-muted-foreground">
              {t.whySolar.subtitle}
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card
                  key={index}
                  className={`${benefit.gradient} group hover:shadow-solar p-0 transition-all duration-300 border-border/50 overflow-hidden`}
                >
                  <CardContent className="p-0">
                    <div
                      className={`${benefit.gradient} p-8 text-white h-full`}
                    >
                      <div className="flex items-center mb-4">
                        <div className="p-3 bg-white/20 rounded-lg mr-4">
                          <IconComponent className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-semibold">
                          {benefit.title}
                        </h3>
                      </div>
                      <p className="text-white/90 leading-relaxed text-lg">
                        {benefit.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Stats section */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">25+</div>
              <div className="text-sm text-muted-foreground">Year Warranty</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">90%</div>
              <div className="text-sm text-muted-foreground">
                Cost Reduction
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">30%</div>
              <div className="text-sm text-muted-foreground">Tax Credits</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">0</div>
              <div className="text-sm text-muted-foreground">Emissions</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
