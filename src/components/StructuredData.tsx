import { Helmet } from 'react-helmet-async';

interface StructuredDataProps {
  type?: 'organization' | 'website' | 'breadcrumb';
  data?: any;
}

// Ce schéma est maintenant dans index.html pour éviter les doublons
export const OrganizationStructuredData = () => {
  return null;
};

// Ce schéma est maintenant dans index.html pour éviter les doublons
export const WebsiteStructuredData = () => {
  return null;
};

interface BlogPostStructuredDataProps {
  title: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  slug: string;
}

export const BlogPostStructuredData = ({
  title,
  description,
  author,
  datePublished,
  dateModified,
  image,
  slug
}: BlogPostStructuredDataProps) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": description,
    "image": image || "https://visibilite-locale.fr/logo.png",
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "author": {
      "@type": "Person",
      "name": author,
      "url": "https://visibilite-locale.fr"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Visibilité Locale",
      "logo": {
        "@type": "ImageObject",
        "url": "https://visibilite-locale.fr/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://visibilite-locale.fr/article/${slug}`
    },
    "inLanguage": "fr-FR",
    "keywords": "Google My Business, référencement local, SEO local, GMB, optimisation locale"
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbStructuredDataProps {
  items: BreadcrumbItem[];
}

export const BreadcrumbStructuredData = ({ items }: BreadcrumbStructuredDataProps) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export const FAQStructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Qu'est-ce que Google My Business ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Google My Business (GMB) est un service gratuit de Google qui permet aux entreprises de gérer leur présence en ligne sur Google Search et Google Maps. Il permet d'afficher vos informations essentielles, de recueillir des avis clients et d'améliorer votre visibilité locale."
        }
      },
      {
        "@type": "Question",
        "name": "Pourquoi optimiser ma fiche Google My Business ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Une fiche GMB optimisée augmente votre visibilité locale de plus de 320%, génère plus d'appels, de visites en magasin et de demandes d'itinéraire. Elle apparaît avant votre site web sur mobile et dans Google Maps, créant un pont direct entre vous et vos clients potentiels."
        }
      },
      {
        "@type": "Question",
        "name": "Combien coûte l'optimisation Google My Business ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nos services d'optimisation GMB commencent à partir de 59€/mois pour l'offre Essentiel. Nous proposons également des formules Pro à 149€/mois et Premium à 299€/mois selon vos besoins et objectifs."
        }
      },
      {
        "@type": "Question",
        "name": "Combien de temps faut-il pour voir des résultats ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Les premiers résultats apparaissent généralement en 2 à 4 semaines. L'optimisation complète et la montée en puissance dans les résultats locaux prennent entre 2 et 3 mois pour atteindre leur plein potentiel."
        }
      },
      {
        "@type": "Question",
        "name": "Quelle est la différence entre GMB et le SEO classique ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Le SEO classique optimise votre site web pour les résultats organiques, tandis que GMB optimise votre fiche pour les recherches locales sur Google Maps et le Local Pack. Les deux sont complémentaires pour maximiser votre visibilité digitale."
        }
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export const ServiceStructuredData = () => {
  const services = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://visibilite-locale.fr/#service-essentiel",
      "serviceType": "Optimisation Google My Business",
      "name": "Pack Essentiel GMB",
      "description": "Optimisation complète de votre fiche GMB avec audit, configuration et optimisation mensuelle",
      "provider": {
        "@id": "https://visibilite-locale.fr/#organization"
      },
      "areaServed": {
        "@type": "Country",
        "name": "France"
      },
      "offers": {
        "@type": "Offer",
        "price": 59,
        "priceCurrency": "EUR",
        "priceValidUntil": "2025-12-31",
        "availability": "https://schema.org/InStock",
        "url": "https://visibilite-locale.fr/#pricing"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://visibilite-locale.fr/#service-pro",
      "serviceType": "Optimisation Google My Business",
      "name": "Pack Pro GMB",
      "description": "Offre complète incluant gestion des avis, publications GMB et reporting avancé",
      "provider": {
        "@id": "https://visibilite-locale.fr/#organization"
      },
      "areaServed": {
        "@type": "Country",
        "name": "France"
      },
      "offers": {
        "@type": "Offer",
        "price": 149,
        "priceCurrency": "EUR",
        "priceValidUntil": "2025-12-31",
        "availability": "https://schema.org/InStock",
        "url": "https://visibilite-locale.fr/#pricing"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://visibilite-locale.fr/#service-premium",
      "serviceType": "Optimisation Google My Business",
      "name": "Pack Premium GMB",
      "description": "Solution complète avec stratégie locale avancée, citations et suivi personnalisé",
      "provider": {
        "@id": "https://visibilite-locale.fr/#organization"
      },
      "areaServed": {
        "@type": "Country",
        "name": "France"
      },
      "offers": {
        "@type": "Offer",
        "price": 299,
        "priceCurrency": "EUR",
        "priceValidUntil": "2025-12-31",
        "availability": "https://schema.org/InStock",
        "url": "https://visibilite-locale.fr/#pricing"
      }
    }
  ];

  return (
    <Helmet>
      {services.map((service, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(service)}
        </script>
      ))}
    </Helmet>
  );
};
