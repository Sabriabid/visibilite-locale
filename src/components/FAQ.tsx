import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "Pourquoi faire appel à une agence Google My Business plutôt que l'optimiser soi-même ?",
    answer: "Une agence spécialisée en GMB maîtrise les algorithmes de référencement local Google et connaît les bonnes pratiques qui évoluent constamment. Nous optimisons chaque détail technique (catégories, mots-clés locaux, structure des données, photos géolocalisées) que les non-experts négligent. Résultat : vous gagnez des mois de tâtonnements et atteignez rapidement la première page Google Maps. Notre expertise transforme votre fiche en véritable aimant à clients locaux.",
  },
  {
    question: "Combien de temps avant de voir des résultats concrets sur ma visibilité locale ?",
    answer: "Les premiers résultats apparaissent généralement sous 2-4 semaines après l'optimisation initiale : augmentation des vues de profil, des clics vers votre site et des demandes d'itinéraire. Pour un positionnement stable en première page Google Maps, comptez 2-3 mois d'optimisation continue. Les résultats dépendent de votre secteur, votre zone géographique et l'intensité concurrentielle. Notre suivi mensuel et nos ajustements réguliers garantissent une amélioration constante de votre référencement local.",
  },
  {
    question: "Quelle est l'importance réelle d'une fiche Google My Business pour mon entreprise locale ?",
    answer: "Cruciale : 93% des consommateurs cherchent des services locaux sur Google avant d'acheter. Une fiche GMB optimisée vous fait apparaître dans le Local Pack (les 3 premiers résultats) et sur Google Maps, là où vos clients potentiels cherchent activement. C'est votre vitrine numérique gratuite : horaires, téléphone cliquable, avis clients, photos, itinéraire GPS. Sans fiche optimisée, vous êtes invisible pour la majorité de votre marché local pendant que vos concurrents captent VOS clients.",
  },
  {
    question: "Quels sont vos tarifs pour l'optimisation et la gestion d'une fiche GMB ?",
    answer: "Création/Optimisation complète : 200€ en paiement unique (audit, optimisation technique, contenu SEO, veille concurrentielle). Gestion mensuelle : 65€/mois sans engagement ou 59€/mois avec engagement 6 mois (posts hebdomadaires, gestion avis, optimisation continue, reporting). Des tarifs transparents, sans frais cachés, pour un ROI exceptionnel comparé aux autres canaux d'acquisition client.",
  },
  {
    question: "Comment mesurez-vous les résultats de votre optimisation Google My Business ?",
    answer: "Nous suivons des KPIs précis via Google Business Profile : nombre de vues du profil, clics vers votre site web, demandes d'itinéraire GPS, appels téléphoniques directs, messages. Chaque mois, vous recevez un rapport détaillé montrant l'évolution de ces métriques, votre positionnement sur vos mots-clés locaux cibles et des recommandations stratégiques. Transparence totale sur l'impact de notre travail sur votre visibilité et vos conversions.",
  },
  {
    question: "Puis-je optimiser ma fiche GMB si j'ai déjà un site web ?",
    answer: "Absolument, et c'est même recommandé ! Une fiche Google My Business et un site web sont complémentaires. GMB vous donne une visibilité immédiate sur les recherches locales et Google Maps, souvent plus rapide qu'un référencement naturel classique. Votre site web apporte de la crédibilité et des informations détaillées. L'idéal : les deux optimisés et interconnectés. Nous pouvons lier votre fiche GMB à votre site pour créer un écosystème digital cohérent qui maximise votre présence locale.",
  },
];

const FAQ = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              FAQ Google My Business : Vos Questions sur le SEO Local
            </h2>
            <p className="text-xl text-muted-foreground">
              Tout savoir sur l'<strong>optimisation de votre fiche GMB</strong> et le <strong>référencement local</strong>
            </p>
            <p className="text-muted-foreground mt-4">
              Les réponses d'experts à vos questions sur Google My Business, l'optimisation locale et nos prestations. Consultez notre FAQ complète pour comprendre comment dominer les résultats locaux.
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
