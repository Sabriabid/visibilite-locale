import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const blogArticles = [
  {
    id: 1,
    title: "Comment Optimiser Votre Fiche Google My Business en 2024 : Guide Complet",
    excerpt: "Découvrez les stratégies les plus efficaces pour optimiser votre fiche GMB et dominer les recherches locales. Guide étape par étape avec exemples concrets.",
    content: `
      <h2>Pourquoi l'Optimisation GMB est Cruciale en 2024</h2>
      <p>Google My Business reste l'outil le plus puissant pour la visibilité locale. Avec plus de 8 milliards de recherches locales par jour, une fiche GMB optimisée peut transformer votre entreprise.</p>
      
      <h3>Les 5 Piliers de l'Optimisation GMB</h3>
      <h4>1. Informations Complètes et Exactes</h4>
      <p>Votre fiche doit contenir toutes les informations essentielles : nom exact, adresse, téléphone, site web, horaires d'ouverture. Google favorise les fiches complètes et vérifiées.</p>
      
      <h4>2. Photos de Qualité Professionnelle</h4>
      <p>Les photos représentent 90% de la première impression. Investissez dans des photos professionnelles de votre établissement, produits et équipe.</p>
      
      <h4>3. Gestion Active des Avis</h4>
      <p>Répondez à tous les avis, positifs comme négatifs. Cela montre votre engagement client et améliore votre réputation locale.</p>
      
      <h4>4. Publications Régulières</h4>
      <p>Publiez du contenu hebdomadaire : promotions, événements, nouveautés. Cela maintient votre fiche active et engageante.</p>
      
      <h4>5. Utilisation des Fonctionnalités Avancées</h4>
      <p>Exploitez les questions/réponses, les produits/services, les événements et les attributs spécifiques à votre secteur.</p>
      
      <h3>Métriques Clés à Surveiller</h3>
      <p>Surveillez régulièrement : vues de recherche, clics sur le site, demandes d'itinéraire, appels téléphoniques et interactions avec les publications.</p>
      
      <h3>Erreurs Courantes à Éviter</h3>
      <p>Évitez les informations contradictoires, les photos de mauvaise qualité, l'absence de réponse aux avis et les publications irrégulières.</p>
    `,
    author: "Sabri SEO",
    date: "2024-01-15",
    readTime: "8 min",
    category: "Optimisation",
    featured: true
  },
  {
    id: 2,
    title: "Les 7 Erreurs Mortelles qui Détruisent Votre Visibilité Google My Business",
    excerpt: "Identifiez et corrigez les erreurs les plus courantes qui nuisent à votre fiche GMB. Découvrez pourquoi vos concurrents vous dépassent et comment reprendre l'avantage.",
    content: `
      <h2>L'Impact des Erreurs GMB sur Votre Business</h2>
      <p>Une seule erreur sur votre fiche GMB peut coûter des milliers d'euros de chiffre d'affaires perdus. Voici les erreurs les plus destructrices et comment les éviter.</p>
      
      <h3>Erreur #1 : Informations Incohérentes</h3>
      <p>Votre nom d'entreprise doit être identique partout : GMB, site web, réseaux sociaux, cartes de visite. Google pénalise les incohérences.</p>
      
      <h3>Erreur #2 : Catégorie Principale Mal Choisie</h3>
      <p>La catégorie principale détermine votre visibilité. Choisissez la catégorie la plus spécifique possible à votre activité principale.</p>
      
      <h3>Erreur #3 : Absence de Photos Professionnelles</h3>
      <p>Les fiches sans photos ou avec des photos de mauvaise qualité perdent 70% de leur crédibilité. Investissez dans la photographie professionnelle.</p>
      
      <h3>Erreur #4 : Horaires Non Mis à Jour</h3>
      <p>Des horaires erronés frustrent les clients et nuisent à votre réputation. Mettez à jour immédiatement tout changement d'horaires.</p>
      
      <h3>Erreur #5 : Ignorer les Avis Négatifs</h3>
      <p>Ne pas répondre aux avis négatifs aggrave la situation. Répondez professionnellement et proposez une solution.</p>
      
      <h3>Erreur #6 : Publications Irrégulières</h3>
      <p>Google favorise les fiches actives. Publiez au moins une fois par semaine pour maintenir votre engagement.</p>
      
      <h3>Erreur #7 : Ne Pas Utiliser les Attributs</h3>
      <p>Les attributs (WiFi gratuit, parking, accessible aux fauteuils roulants) améliorent votre visibilité et votre attractivité.</p>
      
      <h3>Comment Corriger Ces Erreurs</h3>
      <p>Commencez par un audit complet de votre fiche actuelle. Identifiez chaque erreur et corrigez-la méthodiquement. La cohérence est la clé du succès.</p>
    `,
    author: "Sabri SEO",
    date: "2024-01-10",
    readTime: "6 min",
    category: "Erreurs",
    featured: true
  },
  {
    id: 3,
    title: "Stratégie de Contenu GMB : Comment Créer des Publications qui Convertissent",
    excerpt: "Apprenez à créer du contenu engageant pour vos publications GMB. Découvrez les types de contenu qui génèrent le plus d'interactions et de conversions.",
    content: `
      <h2>L'Importance du Contenu dans GMB</h2>
      <p>Les publications GMB sont votre vitrine digitale. Un contenu bien pensé peut doubler vos interactions et améliorer significativement votre visibilité locale.</p>
      
      <h3>Types de Contenu Performants</h3>
      
      <h4>1. Offres et Promotions</h4>
      <p>Les offres limitées dans le temps génèrent l'urgence et stimulent l'action. Utilisez des visuels attractifs et des call-to-action clairs.</p>
      
      <h4>2. Contenu Éducatif</h4>
      <p>Partagez vos conseils d'expert pour établir votre autorité. Les "Comment faire" et "Conseils" sont très appréciés.</p>
      
      <h4>3. Témoignages Clients</h4>
      <p>Les témoignages authentiques renforcent la confiance. Demandez l'autorisation avant de publier et mentionnez toujours le client.</p>
      
      <h4>4. Événements et Actualités</h4>
      <p>Annoncez vos événements, nouveautés, arrivages. Cela maintient votre fiche dynamique et intéressante.</p>
      
      <h3>Structure d'une Publication Optimisée</h3>
      <p><strong>Titre accrocheur :</strong> Maximum 30 caractères, actionnable<br>
      <strong>Description :</strong> 150-300 mots, valeur ajoutée<br>
      <strong>Call-to-action :</strong> Clair et direct<br>
      <strong>Visuel :</strong> Haute qualité, format carré recommandé</p>
      
      <h3>Calendrier de Publication Optimal</h3>
      <p>Publiez 2-3 fois par semaine aux heures de pointe : mardi-jeudi entre 10h-14h et 17h-19h. Évitez les weekends pour la plupart des secteurs.</p>
      
      <h3>Mesurer l'Impact de Vos Publications</h3>
      <p>Surveillez les vues, clics, interactions et conversions générées par chaque publication. Adaptez votre stratégie selon les performances.</p>
      
      <h3>Erreurs à Éviter</h3>
      <p>Évitez le contenu générique, les publications trop commerciales, les visuels de mauvaise qualité et les textes trop longs.</p>
    `,
    author: "Sabri SEO",
    date: "2024-01-05",
    readTime: "7 min",
    category: "Contenu",
    featured: false
  },
  {
    id: 4,
    title: "Gestion des Avis Google My Business : Stratégie Complète pour Améliorer Votre Réputation",
    excerpt: "Maîtrisez l'art de la gestion des avis GMB. Découvrez comment obtenir plus d'avis positifs, répondre aux critiques et transformer votre réputation en avantage concurrentiel.",
    content: `
      <h2>L'Impact des Avis sur Votre Business Local</h2>
      <p>88% des consommateurs font confiance aux avis en ligne autant qu'aux recommandations personnelles. Une gestion stratégique des avis peut transformer votre entreprise.</p>
      
      <h3>Pourquoi les Avis sont Cruciaux</h3>
      <p>Les avis influencent directement : votre position dans les résultats Google, la décision d'achat des clients, votre crédibilité locale, et votre réputation digitale.</p>
      
      <h3>Stratégie pour Obtenir Plus d'Avis Positifs</h3>
      
      <h4>1. Timing Optimal</h4>
      <p>Demandez un avis immédiatement après une expérience positive : livraison réussie, service satisfaisant, problème résolu.</p>
      
      <h4>2. Processus Simplifié</h4>
      <p>Créez un lien direct vers votre fiche GMB. Envoyez-le par SMS ou email avec des instructions claires.</p>
      
      <h4>3. Formation de l'Équipe</h4>
      <p>Formez votre équipe à demander poliment des avis sans être insistante. La qualité du service reste la priorité.</p>
      
      <h4>4. Suivi Personnalisé</h4>
      <p>Personnalisez vos demandes d'avis. Mentionnez des détails spécifiques de l'interaction pour montrer votre attention.</p>
      
      <h3>Répondre aux Avis Négatifs</h3>
      
      <h4>Stratégie de Réponse</h4>
      <p><strong>Reconnaissez :</strong> Le problème soulevé par le client<br>
      <strong>Excusez-vous :</strong> De manière sincère et professionnelle<br>
      <strong>Proposez :</strong> Une solution concrète<br>
      <strong>Invitez :</strong> À reprendre contact en privé</p>
      
      <h4>Exemple de Réponse Professionnelle</h4>
      <p>"Nous sommes désolés que votre expérience n'ait pas été à la hauteur de vos attentes. Votre satisfaction est notre priorité. Nous aimerions discuter de votre situation en privé pour trouver une solution. Merci de nous contacter au [numéro]."</p>
      
      <h3>Gérer les Avis Faux ou Malveillants</h3>
      <p>Signalez les avis qui violent les politiques Google : faux avis, avis de concurrents, avis non liés à l'expérience client.</p>
      
      <h3>Mesurer l'Impact de Votre Stratégie</h3>
      <p>Surveillez : le nombre d'avis, la note moyenne, les réponses aux avis négatifs, et l'évolution de votre position dans les résultats.</p>
    `,
    author: "Sabri SEO",
    date: "2024-01-01",
    readTime: "9 min",
    category: "Avis",
    featured: false
  },
  {
    id: 5,
    title: "Google My Business vs Site Web : Quelle Stratégie pour Dominer le Référencement Local ?",
    excerpt: "Comparez l'efficacité GMB vs site web pour le SEO local. Découvrez comment combiner les deux stratégies pour maximiser votre visibilité et vos conversions.",
    content: `
      <h2>Le Débat : GMB ou Site Web pour le SEO Local ?</h2>
      <p>La question divise les experts SEO : faut-il privilégier l'optimisation GMB ou investir dans un site web performant ? La réponse : les deux, mais avec une stratégie coordonnée.</p>
      
      <h3>Avantages de Google My Business</h3>
      
      <h4>Visibilité Immédiate</h4>
      <p>GMB apparaît directement dans les résultats locaux, souvent avant les sites web. Google favorise ses propres services pour les recherches locales.</p>
      
      <h4>Simplicité d'Optimisation</h4>
      <p>Une fiche GMB bien optimisée peut surpasser un site web complexe en quelques semaines. L'investissement est moindre pour des résultats rapides.</p>
      
      <h4>Fonctionnalités Intégrées</h4>
      <p>Réservation, messagerie, avis, photos, horaires : tout est centralisé et optimisé pour les recherches locales.</p>
      
      <h3>Avantages d'un Site Web Optimisé</h3>
      
      <h4>Contrôle Total</h4>
      <p>Vous contrôlez entièrement le contenu, le design, les fonctionnalités et la stratégie SEO de votre site web.</p>
      
      <h4>Contenu Illimité</h4>
      <p>Un site web permet de créer du contenu approfondi, des landing pages spécifiques et une stratégie de contenu complète.</p>
      
      <h4>Analytics Avancés</h4>
      <p>Google Analytics offre des insights détaillés sur le comportement des visiteurs, les conversions et l'optimisation.</p>
      
      <h3>Stratégie Gagnante : Combiner GMB + Site Web</h3>
      
      <h4>1. Cohérence des Informations</h4>
      <p>Assurez-vous que NAP (Nom, Adresse, Téléphone) soit identique sur GMB et site web. Les incohérences nuisent aux deux.</p>
      
      <h4>2. Stratégie de Contenu Coordonnée</h4>
      <p>Créez du contenu complémentaire : articles de blog sur le site, publications courtes sur GMB, liens croisés entre les deux.</p>
      
      <h4>3. Optimisation Technique</h4>
      <p>Optimisez votre site pour les recherches locales : schema markup, Google Business Profile, optimisation mobile.</p>
      
      <h4>4. Mesure des Performances</h4>
      <p>Surveillez les métriques des deux canaux : vues GMB, trafic site web, conversions, et ROI global.</p>
      
      <h3>Quand Privilégier GMB</h3>
      <p>Si vous avez un budget limité, une activité très locale, ou besoin de résultats rapides, concentrez-vous d'abord sur GMB.</p>
      
      <h3>Quand Privilégier le Site Web</h3>
      <p>Si vous visez un marché plus large, avez besoin de fonctionnalités complexes, ou vendez en ligne, investissez dans un site web optimisé.</p>
      
      <h3>Conclusion : L'Approche Hybride</h3>
      <p>La stratégie optimale combine les deux : GMB pour la visibilité locale immédiate, site web pour la crédibilité et les conversions approfondies. L'investissement dans les deux maximise votre ROI.</p>
    `,
    author: "Sabri SEO",
    date: "2023-12-28",
    readTime: "10 min",
    category: "Stratégie",
    featured: false
  }
];

const Blog = () => {
  const featuredArticles = blogArticles.filter(article => article.featured);
  const regularArticles = blogArticles.filter(article => !article.featured);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-background via-background to-muted pt-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Blog <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">GMB Expert</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Découvrez nos conseils d'experts pour optimiser votre visibilité locale et dominer Google My Business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="hero" 
                size="xl"
                onClick={() => window.open('https://calendly.com/sabriseo19/audit-gmb', '_blank')}
              >
                <Calendar className="w-5 h-5 mr-2" />
                Audit GMB Gratuit
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Articles à la Une</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {featuredArticles.map((article) => (
              <Card key={article.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">{article.category}</span>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {article.readTime}
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {article.author}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between pt-4">
                      <span className="text-sm text-muted-foreground">{article.date}</span>
                      <Button variant="ghost" size="sm" className="group">
                        Lire l'article
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Tous les Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {blogArticles.map((article) => (
              <Card key={article.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">{article.category}</span>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {article.readTime}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between pt-4">
                      <span className="text-xs text-muted-foreground">{article.date}</span>
                      <Button variant="ghost" size="sm" className="group">
                        Lire
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
              Prêt à Optimiser Votre Fiche GMB ?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Recevez un audit gratuit de votre fiche Google My Business et découvrez comment améliorer votre visibilité locale
            </p>
            <Button 
              variant="secondary" 
              size="xl"
              onClick={() => window.open('https://calendly.com/sabriseo19/audit-gmb', '_blank')}
            >
              <Calendar className="w-5 h-5 mr-2" />
              Réserver Mon Audit Gratuit
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
