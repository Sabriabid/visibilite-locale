import { MapPin, Star, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import visibilityImage from "@/assets/service-visibility.jpg";
import reviewsImage from "@/assets/service-reviews.jpg";
import optimizationImage from "@/assets/service-optimization.jpg";

const services = [
  {
    icon: MapPin,
    title: "Optimisation GMB",
    description: "Création ou optimisation : nous adaptons votre fiche pour séduire Google et améliorer votre visibilité.",
    image: visibilityImage,
  },
  {
    icon: Star,
    title: "Gestion des Avis",
    description: "Nous vous aidons à obtenir de bons avis grâce à notre système de collecte, pour générer des évaluations de 4 à 5 étoiles.",
    image: reviewsImage,
  },
  {
    icon: TrendingUp,
    title: "Veille Concurrentielle",
    description: "En analysant vos concurrents, nous mettons en place les optimisations qu'ils oublient pour vous positionner en tête.",
    image: optimizationImage,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Nos services d'agence de référencement local
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Le meilleur retour sur investissement pour votre entreprise
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-[var(--shadow-lg)] transition-all duration-300 hover:-translate-y-2 border-border/50 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 space-y-4">
                <div className="relative h-48 -mx-6 -mt-6 mb-4 overflow-hidden rounded-t-lg">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-semibold">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
