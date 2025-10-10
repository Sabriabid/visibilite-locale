import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Eye, Phone } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: "+320%",
    label: "Augmentation moyenne du trafic",
    color: "text-primary",
  },
  {
    icon: Eye,
    value: "+250%",
    label: "Vues de profil en plus",
    color: "text-accent",
  },
  {
    icon: Phone,
    value: "+180%",
    label: "Appels entrants supplémentaires",
    color: "text-primary",
  },
  {
    icon: Users,
    value: "+500",
    label: "Entreprises accompagnées",
    color: "text-accent",
  },
];

const Results = () => {
  return (
    <section id="results" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Résultats Google My Business : +320% de Visibilité en Moyenne
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Nos clients constatent des <strong>résultats mesurables</strong> dès les premières semaines : plus de vues, plus d'appels, plus de clients. <strong>Performance prouvée</strong> sur 500+ entreprises locales.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-[var(--shadow-lg)] transition-all duration-300 hover:scale-105 border-border/50 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="border-border/50 shadow-lg">
            <CardContent className="p-8">
              <blockquote className="text-center space-y-4">
                <p className="text-xl italic text-muted-foreground">
                  "En <strong>3 mois seulement</strong>, notre <strong>fiche Google My Business</strong> est passée de la 15ème à la <strong>1ère position sur Google Maps</strong>. Les appels entrants ont <strong>triplé</strong>, notre trafic en magasin a explosé et notre <strong>chiffre d'affaires local a augmenté de 45%</strong>. Une équipe professionnelle qui maîtrise parfaitement le référencement local et des résultats exceptionnels qui dépassent nos attentes !"
                </p>
                <footer className="font-semibold text-foreground">
                  — Marie L., Gérante de restaurant à Paris 11ème
                </footer>
              </blockquote>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Results;
