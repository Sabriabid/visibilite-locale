import { MapPin, Star, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import visibilityImage from "@/assets/service-visibility.jpg";
import reviewsImage from "@/assets/service-reviews.jpg";
import optimizationImage from "@/assets/service-optimization.jpg";

const services = [
  {
    icon: MapPin,
    title: "On vous met sur Google Maps",
    description: "On crée ou améliore votre profil Google avec de belles photos, une description claire et toutes les infos utiles. Comme ça, quand les gens vous cherchent, ils vous trouvent facilement.",
    image: visibilityImage,
  },
  {
    icon: Star,
    title: "On vous aide à avoir plein d'avis 5 étoiles",
    description: "On met en place un système simple pour que vos clients contents laissent des avis. On répond aussi aux avis négatifs pour vous. Plus vous avez d'avis positifs, plus les nouveaux clients ont confiance.",
    image: reviewsImage,
  },
  {
    icon: TrendingUp,
    title: "On surveille vos concurrents",
    description: "On regarde ce que font vos concurrents sur Google Maps et on fait en sorte que vous soyez toujours mieux placé qu'eux. Objectif : que les clients viennent chez vous plutôt que chez eux.",
    image: optimizationImage,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Ce qu'on fait pour vous
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            On s'occupe de tout pour que vous soyez <strong>facile à trouver sur Google</strong> et que ça vous ramène plus de clients
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
