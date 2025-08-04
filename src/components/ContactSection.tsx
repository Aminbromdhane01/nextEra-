import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { translations } from "@/data/translation";

interface ContactSectionProps {
  language: string;
}

export const ContactSection = ({ language }: ContactSectionProps) => {
  const t = translations[language as keyof typeof translations];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              {t.contact.title}
            </h2>
            <p className="text-xl text-muted-foreground">
              {t.contact.subtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-border/50">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      name="name"
                      placeholder={t.contact.name}
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="h-12"
                    />
                  </div>

                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder={t.contact.email}
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="h-12"
                    />
                  </div>

                  <div>
                    <Input
                      name="phone"
                      type="tel"
                      placeholder={t.contact.phone}
                      value={formData.phone}
                      onChange={handleChange}
                      className="h-12"
                    />
                  </div>

                  <div>
                    <Textarea
                      name="message"
                      placeholder={t.contact.message}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="h-30"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 h-12 text-lg font-semibold"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    {t.contact.submit}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="border-border/50 solar-bg  text-white">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <MapPin className="h-6 w-6 mr-3" />
                    <h3 className="text-xl font-semibold">
                      {t.contact.address}
                    </h3>
                  </div>
                  <p className="mb-6 opacity-90">
                    Mahdia - Tunisia
                    <br />
                    <br />
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-center">
                      <div className="p-3 bg-primary/10 rounded-lg mr-4">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">
                          {t.contact.phone_label}
                        </h4>
                        <p className="text-muted-foreground">+216 98 000 000</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="p-3 bg-secondary/10 rounded-lg mr-4">
                        <Mail className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">
                          {t.contact.email_label}
                        </h4>
                        <p className="text-muted-foreground">
                          energiesnextera@gmail.com
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Business Hours */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
