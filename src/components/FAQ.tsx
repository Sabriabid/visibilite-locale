import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "Comment une agence Google My Business peut-elle m'aider ?",
    answer: "Nous optimisons votre fiche pour maximiser votre visibilité, gérer vos avis clients, publier des actualités et vous aider à convertir plus de prospects en clients.",
  },
  {
    question: "Combien de temps pour voir les résultats de ma fiche Google My Business ?",
    answer: "Les premiers résultats peuvent apparaître quelques semaines après l'optimisation, mais un suivi régulier et des mises à jour sont essentiels pour maintenir et améliorer votre positionnement.",
  },
  {
    question: "Pourquoi une fiche GMB est importante pour mon entreprise ?",
    answer: "Créer une fiche Google pour votre entreprise permet d'améliorer votre visibilité locale sur Google et Google Maps. C'est essentiel pour attirer des clients proches de votre localisation.",
  },
  {
    question: "Combien coûte une création et optimisation de ma fiche ?",
    answer: "La création et l'optimisation de votre fiche Google My Business sont facturées 200 €, et notre accompagnement mensuel démarre à 59 € selon votre engagement.",
  },
];

const FAQ = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Questions fréquentes sur Google My Business
            </h2>
            <p className="text-xl text-muted-foreground">
              Tout savoir sur les fiches GMB
            </p>
            <p className="text-muted-foreground mt-4">
              Vous avez des questions ? Nous avons les réponses ! Consultez notre FAQ pour trouver des informations utiles sur nos services, notre processus et bien plus.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4 animate-scale-in">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border/50 rounded-lg px-6 hover:shadow-[var(--shadow-lg)] transition-shadow"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold text-lg">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-8">
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.open('https://calendly.com/sabriseo19/audit-gmb', '_blank')}
            >
              Je ne trouve pas ma réponse
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
