import { Card, CardContent } from "@/components/ui/card";
import { translations } from "@/data/translation";
import { Target, Eye, Users, MapPin, Mail, Phone } from "lucide-react";
import ceo from "../assets/ceo.jpg"; // adjust the path

interface CompanySectionProps {
  language: string;
}

export const CompanySection = ({ language }: CompanySectionProps) => {
  const t = translations[language as keyof typeof translations];

  return (
    <section id="company" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              {t.company.title}
            </h2>
            <p className="text-xl text-muted-foreground">
              {t.company.subtitle}
            </p>
          </div>

          {/* Main content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-lg text-foreground leading-relaxed mb-8">
                {t.company.content}
              </p>
            </div>

            <div className="solar-bg rounded-2xl p-8 text-white shadow-solar">
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold mb-2">5+</div>
                  <div className="text-sm opacity-90">
                    {t.company.stats.yearsExperience}
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">50+</div>
                  <div className="text-sm opacity-90">
                    {t.company.stats.projectsCompleted}
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">98%</div>
                  <div className="text-sm opacity-90">
                    {t.company.stats.clientSatisfaction}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg mr-4">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-primary">
                    {t.company.mission}
                  </h3>
                </div>
                <p className="text-foreground leading-relaxed">
                  {t.company.missionText}
                </p>
              </CardContent>
            </Card>

            <Card className="border-secondary/20 hover:border-secondary/40 transition-colors">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-secondary/10 rounded-lg mr-4">
                    <Eye className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-secondary">
                    {t.company.vision}
                  </h3>
                </div>
                <p className="text-foreground leading-relaxed">
                  {t.company.visionText}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Our Staff Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Users className="h-8 w-8 text-primary" />
                <h3 className="text-3xl md:text-4xl font-bold text-primary">
                  {t.company.ourStaff || "Our Staff"}
                </h3>
              </div>
              <p className="text-lg text-muted-foreground">
                {t.company.staffSubtitle ||
                  "Meet the talented team behind our success"}
              </p>
            </div>

            {/* Meet Our CEO */}
            <div className="max-w-4xl mx-auto">
              <Card className="border-primary/20 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h4 className="text-2xl font-bold text-primary mb-2">
                      {t.company.meetCEO || "Meet Our CEO"}
                    </h4>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-8 items-center">
                    {/* CEO Image */}
                    <div className="flex justify-center">
                      <div className="relative">
                        <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 p-1">
                          <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                            {/* Placeholder for CEO image - you'll replace this with your actual image */}
                            <img
                              src={ceo}
                              alt="CEO"
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                // Fallback if image doesn't load
                                const target = e.target as HTMLImageElement;
                                target.style.display = "none";
                                target.parentElement!.innerHTML =
                                  '<div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10"><Users class="h-20 w-20 text-primary/40" /></div>';
                              }}
                            />
                          </div>
                        </div>
                        <div className="absolute -bottom-2 -right-2 bg-primary text-white rounded-full p-2">
                          <Target className="h-4 w-4" />
                        </div>
                      </div>
                    </div>

                    {/* CEO Info */}
                    <div className="md:col-span-2 text-center md:text-left">
                      <h5 className="text-2xl font-bold text-foreground mb-2">
                        {t.company.ceoName || "Houdhayfa Belhaj"}
                      </h5>
                      <p className="text-primary font-semibold mb-4">
                        {t.company.ceoTitle ||
                          "Chief Executive Officer & Founder"}
                      </p>
                      <p className="text-foreground leading-relaxed mb-6">
                        {t.company.ceoDescription ||
                          "With over 10 years of experience in renewable energy, our CEO leads the company with a vision for sustainable future and innovative solar solutions."}
                      </p>

                      {/* CEO Contact Info */}
                      <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          <span>
                            {t.company.ceoLocation || "Sfax, Tunisia"}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Mail className="h-4 w-4" />
                          <span>{t.company.ceoEmail || "ceo@company.com"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Phone className="h-4 w-4" />
                          <span>{t.company.ceoPhone || "+216 XX XXX XXX"}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
