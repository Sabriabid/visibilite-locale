import { Card, CardContent } from "@/components/ui/card";
import { Search, Settings, Star, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Analyse complète de votre fiche et de vos concurrents",
    description: "Nous passons votre fiche et celle de vos concurrents au crible : informations, catégories, photos, avis.",
  },
  {
    number: "02",
    icon: Settings,
    title: "Optimisation pour maximiser votre visibilité",
    description: "Nous mettons à jour toutes les informations, choisissons les bonnes catégories, rédigeons des descriptions convaincantes.",
  },
  {
    number: "03",
    icon: Star,
    title: "Renforcez votre crédibilité grâce aux avis",
    description: "Nous vous aidons à recueillir des avis positifs, à répondre aux questions et commentaires.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Mesurez et améliorez vos performances",
    description: "Chaque trimestre, nous analysons vos performances locales et fournissons un rapport.",
  },
];

const Process = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-muted/30">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/50 to-background"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Notre processus d'optimisation de fiches Google My Business
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="group hover:shadow-[var(--shadow-lg)] transition-all duration-300 hover:-translate-y-2 border-border/50 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 space-y-4 relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold shadow-lg">
                  {step.number}
                </div>
                
                <div className="w-16 h-16 mx-auto mt-4 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-lg font-semibold text-center">{step.title}</h3>
                <p className="text-muted-foreground text-sm text-center">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
