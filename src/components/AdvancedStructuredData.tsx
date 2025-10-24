import { Helmet } from 'react-helmet-async';

/**
 * DONNÉES STRUCTURÉES AVANCÉES
 * Schémas supplémentaires pour maximiser la visibilité SEO et IA
 */

// 1. PERSON - Profil de l'auteur (Sabri SEO)
export const PersonStructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://visibilite-locale.fr/#sabri-seo",
    "name": "Sabri SEO",
    "jobTitle": "Expert SEO Local & Google My Business",
    "description": "Expert en référencement local et optimisation Google My Business, spécialisé dans l'amélioration de la visibilité des entreprises locales sur Google Maps.",
    "url": "https://visibilite-locale.fr",
    "image": {
      "@type": "ImageObject",
      "url": "https://visibilite-locale.fr/sabri-seo.jpg",
      "width": 400,
      "height": 400
    },
    "sameAs": [
      "https://www.linkedin.com/in/sabri-seo",
      "https://twitter.com/sabriseo"
    ],
    "knowsAbout": [
      "Google My Business",
      "Référencement Local",
      "SEO Local",
      "Google Maps Optimization",
      "Local Citations",
      "Online Reputation Management"
    ],
    "worksFor": {
      "@id": "https://visibilite-locale.fr/#organization"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Formation SEO Expert"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

// 2. HOWTO - Pour les articles guides pratiques
interface HowToProps {
  name: string;
  description: string;
  totalTime?: string;
  steps: Array<{
    name: string;
    text: string;
    image?: string;
    url?: string;
  }>;
  supply?: string[];
  tool?: string[];
}

export const HowToStructuredData = ({
  name,
  description,
  totalTime = "PT30M",
  steps,
  supply = [],
  tool = []
}: HowToProps) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": name,
    "description": description,
    "totalTime": totalTime,
    "supply": supply.map(item => ({
      "@type": "HowToSupply",
      "name": item
    })),
    "tool": tool.map(item => ({
      "@type": "HowToTool",
      "name": item
    })),
    "step": steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.text,
      "image": step.image,
      "url": step.url
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

// 3. REVIEW - Avis clients individuels
interface ReviewProps {
  author: string;
  rating: number;
  reviewBody: string;
  datePublished: string;
}

export const ReviewStructuredData = ({ reviews }: { reviews: ReviewProps[] }) => {
  const structuredData = reviews.map(review => ({
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "Service",
      "name": "Optimisation Google My Business",
      "provider": {
        "@id": "https://visibilite-locale.fr/#organization"
      }
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": review.rating,
      "bestRating": 5,
      "worstRating": 1
    },
    "author": {
      "@type": "Person",
      "name": review.author
    },
    "reviewBody": review.reviewBody,
    "datePublished": review.datePublished,
    "publisher": {
      "@id": "https://visibilite-locale.fr/#organization"
    }
  }));

  return (
    <Helmet>
      {structuredData.map((review, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(review)}
        </script>
      ))}
    </Helmet>
  );
};

// 4. VIDEOOBJECT - Pour les vidéos tutorielles
interface VideoProps {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  duration: string;
  contentUrl: string;
  embedUrl?: string;
}

export const VideoStructuredData = ({ video }: { video: VideoProps }) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": video.name,
    "description": video.description,
    "thumbnailUrl": video.thumbnailUrl,
    "uploadDate": video.uploadDate,
    "duration": video.duration,
    "contentUrl": video.contentUrl,
    "embedUrl": video.embedUrl,
    "publisher": {
      "@id": "https://visibilite-locale.fr/#organization"
    },
    "author": {
      "@id": "https://visibilite-locale.fr/#sabri-seo"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

// 5. EVENT - Pour webinaires et formations
interface EventProps {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  location?: {
    name: string;
    address?: string;
  };
  eventAttendanceMode: "OnlineEventAttendanceMode" | "OfflineEventAttendanceMode" | "MixedEventAttendanceMode";
  eventStatus: "EventScheduled" | "EventCancelled" | "EventPostponed";
  price?: number;
  priceCurrency?: string;
  url: string;
}

export const EventStructuredData = ({ event }: { event: EventProps }) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": event.name,
    "description": event.description,
    "startDate": event.startDate,
    "endDate": event.endDate,
    "eventAttendanceMode": `https://schema.org/${event.eventAttendanceMode}`,
    "eventStatus": `https://schema.org/${event.eventStatus}`,
    "location": event.location ? {
      "@type": "VirtualLocation",
      "url": event.url
    } : {
      "@type": "Place",
      "name": event.location?.name,
      "address": event.location?.address
    },
    "organizer": {
      "@id": "https://visibilite-locale.fr/#organization"
    },
    "offers": event.price !== undefined ? {
      "@type": "Offer",
      "price": event.price,
      "priceCurrency": event.priceCurrency || "EUR",
      "availability": "https://schema.org/InStock",
      "url": event.url,
      "validFrom": new Date().toISOString()
    } : undefined
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

// 6. COURSE - Pour formations en ligne
interface CourseProps {
  name: string;
  description: string;
  provider: string;
  courseCode?: string;
  hasCourseInstance?: {
    courseMode: "Online" | "Onsite" | "Blended";
    startDate: string;
    endDate: string;
    instructor: string;
  };
  offers?: {
    price: number;
    priceCurrency: string;
  };
}

export const CourseStructuredData = ({ course }: { course: CourseProps }) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": course.name,
    "description": course.description,
    "provider": {
      "@id": "https://visibilite-locale.fr/#organization"
    },
    "courseCode": course.courseCode,
    "hasCourseInstance": course.hasCourseInstance ? {
      "@type": "CourseInstance",
      "courseMode": course.hasCourseInstance.courseMode,
      "startDate": course.hasCourseInstance.startDate,
      "endDate": course.hasCourseInstance.endDate,
      "instructor": {
        "@id": "https://visibilite-locale.fr/#sabri-seo"
      }
    } : undefined,
    "offers": course.offers ? {
      "@type": "Offer",
      "price": course.offers.price,
      "priceCurrency": course.offers.priceCurrency
    } : undefined
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

// 7. ITEMLIST - Pour lister vos articles de blog
interface ItemListProps {
  items: Array<{
    position: number;
    name: string;
    url: string;
  }>;
}

export const ItemListStructuredData = ({ items }: ItemListProps) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": items.map(item => ({
      "@type": "ListItem",
      "position": item.position,
      "name": item.name,
      "url": item.url
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

// 8. SPEAKABLE - Pour optimisation vocale et IA
export const SpeakableStructuredData = ({ cssSelectors }: { cssSelectors: string[] }) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": cssSelectors
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};
