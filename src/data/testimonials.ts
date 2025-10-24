// Témoignages clients pour les données structurées Review

export interface Testimonial {
  id: number;
  author: string;
  rating: number;
  reviewBody: string;
  datePublished: string;
  avatar?: string;
  company?: string;
  position?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    author: "Marie Dubois",
    rating: 5,
    reviewBody: "Résultats exceptionnels ! Ma fiche GMB est passée de la 15ème à la 2ème position en 6 semaines. Les appels ont triplé. L'équipe de Visibilité Locale est professionnelle et très réactive.",
    datePublished: "2025-10-10",
    company: "Salon Marie Coiffure",
    position: "Gérante"
  },
  {
    id: 2,
    author: "Thomas Lefebvre",
    rating: 5,
    reviewBody: "Enfin une agence qui comprend vraiment le référencement local. L'audit gratuit a révélé des erreurs critiques que j'ignorais complètement. Mon restaurant apparaît maintenant en premier sur Google Maps.",
    datePublished: "2025-09-28",
    company: "Restaurant Le Gourmet",
    position: "Propriétaire"
  },
  {
    id: 3,
    author: "Sophie Martin",
    rating: 5,
    reviewBody: "ROI impressionnant. Pour 149€/mois, j'ai gagné 12 nouveaux clients en un mois. La gestion des avis et les publications régulières ont transformé ma présence en ligne.",
    datePublished: "2025-10-15",
    company: "Cabinet Dentaire Martin",
    position: "Dentiste"
  },
  {
    id: 4,
    author: "Laurent Bernard",
    rating: 5,
    reviewBody: "Service haut de gamme à prix raisonnable. Sabri SEO maîtrise parfaitement Google My Business. Ma visibilité a augmenté de 320% en 2 mois. Je recommande sans hésitation.",
    datePublished: "2025-10-01",
    company: "Plomberie Bernard & Fils",
    position: "Artisan Plombier"
  },
  {
    id: 5,
    author: "Céline Rousseau",
    rating: 5,
    reviewBody: "Accompagnement personnalisé et résultats rapides. L'optimisation de mes citations locales a fait toute la différence. Je suis maintenant dans le top 3 de ma ville.",
    datePublished: "2025-09-20",
    company: "Boulangerie Artisanale Rousseau",
    position: "Boulangère"
  },
  {
    id: 6,
    author: "Pierre Durand",
    rating: 5,
    reviewBody: "Après 3 mois de collaboration, mes demandes de devis ont été multipliées par 4. L'optimisation GMB est un investissement rentable. Merci pour votre expertise !",
    datePublished: "2025-09-12",
    company: "Électricité Durand",
    position: "Électricien"
  }
];

// Fonction pour obtenir tous les témoignages
export const getAllTestimonials = (): Testimonial[] => {
  return testimonials;
};

// Fonction pour obtenir les X premiers témoignages
export const getFeaturedTestimonials = (count: number = 3): Testimonial[] => {
  return testimonials.slice(0, count);
};
