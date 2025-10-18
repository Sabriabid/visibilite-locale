import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Target, Shield, TrendingUp, Users, Award, Clock } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "On vous explique tout simplement",
    description: "On prend le temps d'écouter ce que vous voulez pour votre commerce. On vous explique tout ce qu'on fait dans des mots simples, sans termes compliqués. Vous comprenez exactement ce qui se passe.",
  },
  {
    icon: Target,
    title: "On vous lâche pas tant que ça marche pas",
    description: "On ne fait pas juste le boulot et on disparaît. On reste avec vous jusqu'à ce que vous ayez vraiment plus de clients. Votre réussite c'est ce qui compte pour nous, pas juste cocher des cases.",
  },
  {
    icon: Shield,
    title: "Tout est clair, pas de surprise",
    description: "Prix clair dès le début, pas de frais cachés. On vous montre exactement ce qu'on fait et les résultats chaque mois (combien de gens vous ont vu, combien ont cliqué, combien ont appelé). Vous savez toujours où vous en êtes.",
  },
];

const stats = [
  {
    icon: TrendingUp,
    value: "+50K",
    label: "Personnes qui ont cliqué",
    description: "C'est le nombre de personnes qu'on a amené vers nos clients en 6 mois.",
  },
  {
    icon: Award,
    value: "+500",
    label: "Commerces aidés",
    description: "Restaurants, salons, boutiques, artisans... on les a tous aidés.",
  },
  {
    icon: Users,
    value: "100%",
    label: "Clients contents",
    description: "Votre satisfaction c'est notre priorité numéro 1.",
  },
  {
    icon: Clock,
    value: "+2",
    label: "Ans d'expérience",
    description: "On fait ça tous les jours depuis plus de 2 ans.",
  },
];

const WhyUs = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Pourquoi nous choisir ?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            On aide les petits commerces à être trouvés sur Google. <strong>Plus de 500 commerces aidés</strong>, plus de 2 ans d'expérience à faire ce qu'on fait. On sait comment ça marche et on vous aide vraiment.
          </p>
          <Button
            variant="hero"
            size="xl"
            className="mt-6"
            onClick={() => window.open('https://calendly.com/sabriseo19/audit-gmb', '_blank')}
          >
            Je veux être contacté
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
