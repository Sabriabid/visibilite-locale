import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Target, Shield, TrendingUp, Users, Award, Clock } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Approche humaine",
    description: "Nous prenons le temps de vous écouter, de comprendre votre réalité et de parler un langage clair. Pas de jargon technique incompréhensible, juste des échanges constructifs.",
  },
  {
    icon: Target,
    title: "Engagement pour votre succès",
    description: "Nous ne livrons pas un service pour ensuite disparaître. On vous accompagne pour que votre projet se réalise comme vous le souhaitez.",
  },
  {
    icon: Shield,
    title: "Transparence comme maître-mot",
    description: "Vous recevez une étude détaillée et un devis clair, sans frais cachés, et vous êtes tenu au courant de chaque étape.",
  },
];

const stats = [
  {
    icon: TrendingUp,
    value: "+50K",
    label: "Clics obtenus",
    description: "Nombre total de clics générés pour nos clients au cours des 6 derniers mois.",
  },
  {
    icon: Award,
    value: "+100",
    label: "Projets réalisés",
    description: "De la création de fiches GMB à l'optimisation complète.",
  },
  {
    icon: Users,
    value: "100%",
    label: "Clients satisfaits",
    description: "Votre satisfaction est et restera notre priorité.",
  },
  {
    icon: Clock,
    value: "+2",
    label: "Ans d'expérience",
    description: "Une expertise reconnue dans le référencement local.",
  },
];

const WhyUs = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Pourquoi confier votre fiche GMB à une agence spécialisée ?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Notre agence est née d'une volonté simple : <strong>rendre le digital accessible aux entreprises locales</strong>.
          </p>
          <Button 
            variant="hero" 
            size="xl" 
            className="mt-6"
            onClick={() => window.open('https://calendly.com/sabriseo19/audit-gmb', '_blank')}
          >
            Nous contacter
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <Card
              key={index}
              className="group hover:shadow-[var(--shadow-lg)] transition-all duration-300 hover:-translate-y-2 border-border/50 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8 space-y-4 text-center">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="group hover:shadow-[var(--shadow-lg)] transition-all duration-300 hover:scale-105 border-border/50 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 text-center space-y-3">
                <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="font-semibold">{stat.label}</div>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
