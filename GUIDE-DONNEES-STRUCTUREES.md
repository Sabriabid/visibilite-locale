# 📘 GUIDE COMPLET DES DONNÉES STRUCTURÉES - VISIBILITÉ LOCALE

## 🎯 OBJECTIF
Maximiser la visibilité sur Google et les IA (ChatGPT, Claude, Perplexity) grâce aux données structurées JSON-LD optimales.

---

## ✅ SCHÉMAS DÉJÀ IMPLÉMENTÉS

### 1. **ProfessionalService** (Organisation principale)
**Fichier:** `src/components/StructuredData.tsx`
**Utilisation:** Page d'accueil
```tsx
<OrganizationStructuredData />
```

### 2. **WebSite** (avec SearchAction)
**Fichier:** `src/components/StructuredData.tsx`
**Utilisation:** Page d'accueil
```tsx
<WebsiteStructuredData />
```

### 3. **FAQPage**
**Fichier:** `src/components/StructuredData.tsx`
**Utilisation:** Page d'accueil
```tsx
<FAQStructuredData />
```

### 4. **Service** (3 offres)
**Fichier:** `src/components/StructuredData.tsx`
**Utilisation:** Page d'accueil
```tsx
<ServiceStructuredData />
```

### 5. **BlogPosting**
**Fichier:** `src/components/StructuredData.tsx`
**Utilisation:** Pages d'articles
```tsx
<BlogPostStructuredData
  title="Titre de l'article"
  description="Description"
  author="Sabri SEO"
  datePublished="2025-10-22"
  slug="slug-article"
/>
```

### 6. **BreadcrumbList**
**Fichier:** `src/components/StructuredData.tsx`
**Utilisation:** Toutes les pages
```tsx
<BreadcrumbStructuredData
  items={[
    { name: "Accueil", url: "https://visibilite-locale.fr" },
    { name: "Blog", url: "https://visibilite-locale.fr/blog" }
  ]}
/>
```

---

## 🚀 NOUVEAUX SCHÉMAS À AJOUTER

### 7. **Person** (Sabri SEO - Profil auteur)

**Pourquoi ?**
- Crée un Knowledge Panel Google pour l'auteur
- Les IA peuvent citer Sabri SEO comme source experte
- Améliore l'E-E-A-T (Experience, Expertise, Authority, Trust)

**Où l'ajouter ?**
- Page d'accueil
- Page À propos
- Articles de blog (lié via author)

**Code d'intégration:**
```tsx
import { PersonStructuredData } from '@/components/AdvancedStructuredData';

// Dans votre composant
<PersonStructuredData />
```

**JSON généré:**
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://visibilite-locale.fr/#sabri-seo",
  "name": "Sabri SEO",
  "jobTitle": "Expert SEO Local & Google My Business",
  "knowsAbout": ["Google My Business", "SEO Local"],
  "worksFor": {
    "@id": "https://visibilite-locale.fr/#organization"
  }
}
```

---

### 8. **HowTo** (Guides pratiques)

**Pourquoi ?**
- Apparaît dans les Rich Snippets Google (carrousel de résultats)
- Les IA peuvent extraire les étapes et les citer
- Augmente le CTR de 20-35%

**Où l'ajouter ?**
- Article "Comment optimiser GMB"
- Tous les articles tutoriels

**Exemple d'intégration:**

```tsx
import { HowToStructuredData } from '@/components/AdvancedStructuredData';

// Dans l'article "Comment optimiser GMB"
<HowToStructuredData
  name="Comment Optimiser Votre Fiche Google My Business"
  description="Guide complet pour optimiser votre fiche GMB en 5 étapes"
  totalTime="PT45M"
  supply={[
    "Compte Google",
    "Fiche Google My Business validée",
    "Photos de qualité"
  ]}
  tool={[
    "Google My Business Dashboard",
    "Google Search Console"
  ]}
  steps={[
    {
      name: "Normaliser vos informations NAP",
      text: "Vérifiez que le Nom, Adresse, Téléphone soit identique partout: site, réseaux sociaux, annuaires.",
      url: "https://visibilite-locale.fr/article/optimiser-fiche-google-my-business-2024#normaliser"
    },
    {
      name: "Ajouter des photos de qualité",
      text: "Publiez des visuels authentiques de l'extérieur, de l'intérieur, de l'équipe et des produits.",
      url: "https://visibilite-locale.fr/article/optimiser-fiche-google-my-business-2024#photos"
    },
    {
      name: "Gérer les avis clients",
      text: "Sollicitez des avis et répondez systématiquement, même aux retours mitigés.",
      url: "https://visibilite-locale.fr/article/optimiser-fiche-google-my-business-2024#avis"
    },
    {
      name: "Publier régulièrement du contenu",
      text: "Annoncez vos offres, événements, nouveautés avec un format simple et efficace.",
      url: "https://visibilite-locale.fr/article/optimiser-fiche-google-my-business-2024#publier"
    },
    {
      name: "Exploiter les fonctionnalités avancées",
      text: "Activez la messagerie, structurez vos services, ajoutez vos produits avec prix.",
      url: "https://visibilite-locale.fr/article/optimiser-fiche-google-my-business-2024#avancees"
    }
  ]}
/>
```

---

### 9. **Review** (Avis clients)

**Pourquoi ?**
- Affiche des étoiles dans les résultats Google
- Renforce la confiance et l'E-E-A-T
- Les IA citent les témoignages comme preuve sociale

**Où l'ajouter ?**
- Page d'accueil
- Page témoignages/avis
- Pages services

**Code d'intégration:**

```tsx
import { ReviewStructuredData } from '@/components/AdvancedStructuredData';

<ReviewStructuredData
  reviews={[
    {
      author: "Marie Dupont",
      rating: 5,
      reviewBody: "Service exceptionnel ! Ma visibilité locale a augmenté de 280% en 2 mois. L'équipe est réactive et professionnelle.",
      datePublished: "2025-09-15"
    },
    {
      author: "Thomas Martin",
      rating: 5,
      reviewBody: "Enfin une agence qui comprend le référencement local. Mes appels ont triplé grâce à l'optimisation GMB.",
      datePublished: "2025-09-20"
    },
    {
      author: "Sophie Bernard",
      rating: 5,
      reviewBody: "ROI impressionnant. L'audit gratuit a révélé des erreurs critiques que j'ignorais. Très recommandé !",
      datePublished: "2025-10-01"
    }
  ]}
/>
```

---

### 10. **VideoObject** (Vidéos tutorielles)

**Pourquoi ?**
- Apparaît dans les résultats vidéo Google
- Rich Snippet avec miniature et durée
- Les IA peuvent recommander vos vidéos

**Où l'ajouter ?**
- Articles avec vidéos intégrées
- Page de ressources

**Code d'intégration:**

```tsx
import { VideoStructuredData } from '@/components/AdvancedStructuredData';

<VideoStructuredData
  video={{
    name: "Comment Optimiser Google My Business en 10 Minutes",
    description: "Tutoriel complet pour optimiser votre fiche GMB rapidement et efficacement",
    thumbnailUrl: "https://visibilite-locale.fr/videos/gmb-tutorial-thumbnail.jpg",
    uploadDate: "2025-10-15",
    duration: "PT10M30S",
    contentUrl: "https://visibilite-locale.fr/videos/gmb-tutorial.mp4",
    embedUrl: "https://youtube.com/embed/ABC123"
  }}
/>
```

---

### 11. **Event** (Webinaires/Formations)

**Pourquoi ?**
- Apparaît dans Google Events
- Peut générer des inscriptions directes
- Crédibilité accrue

**Où l'ajouter ?**
- Page événements
- Landing pages webinaires

**Code d'intégration:**

```tsx
import { EventStructuredData } from '@/components/AdvancedStructuredData';

<EventStructuredData
  event={{
    name: "Masterclass: Dominer Google Maps en 2025",
    description: "Formation en ligne gratuite pour maîtriser Google My Business et le référencement local",
    startDate: "2025-11-15T18:00:00+01:00",
    endDate: "2025-11-15T20:00:00+01:00",
    eventAttendanceMode: "OnlineEventAttendanceMode",
    eventStatus: "EventScheduled",
    price: 0,
    priceCurrency: "EUR",
    url: "https://visibilite-locale.fr/webinaire-gmb-2025"
  }}
/>
```

---

### 12. **ItemList** (Liste d'articles)

**Pourquoi ?**
- Crée des carrousels dans Google
- Améliore la navigation pour les IA
- Structure le contenu de façon claire

**Où l'ajouter ?**
- Page blog

**Code d'intégration:**

```tsx
import { ItemListStructuredData } from '@/components/AdvancedStructuredData';

<ItemListStructuredData
  items={blogArticles.map((article, index) => ({
    position: index + 1,
    name: article.title,
    url: `https://visibilite-locale.fr/article/${article.slug}`
  }))}
/>
```

---

### 13. **Speakable** (Optimisation vocale & IA)

**Pourquoi ?**
- Optimise pour Google Assistant, Alexa, Siri
- Les IA savent quelles parties lire à voix haute
- Améliore l'accessibilité

**Où l'ajouter ?**
- Articles de blog
- Pages importantes

**Code d'intégration:**

```tsx
import { SpeakableStructuredData } from '@/components/AdvancedStructuredData';

<SpeakableStructuredData
  cssSelectors={[
    ".article-content h1",
    ".article-content h2",
    ".article-content p:first-of-type"
  ]}
/>
```

---

## 📋 PLAN D'IMPLÉMENTATION PRIORITAIRE

### Phase 1 - IMMÉDIAT (Impact SEO majeur)
1. ✅ **Person** → Ajouter sur page d'accueil et articles
2. ✅ **HowTo** → Article "Comment optimiser GMB"
3. ✅ **Review** → Page d'accueil (testimonials)

### Phase 2 - COURT TERME (1-2 semaines)
4. **VideoObject** → Si/quand vous créez des vidéos
5. **ItemList** → Page blog
6. **Speakable** → Articles principaux

### Phase 3 - MOYEN TERME (optionnel)
7. **Event** → Si webinaires/formations
8. **Course** → Si formations payantes

---

## 🧪 VALIDATION ET TESTS

### Outils de test obligatoires:

1. **Google Rich Results Test**
   - URL: https://search.google.com/test/rich-results
   - Test chaque page après modification

2. **Schema.org Validator**
   - URL: https://validator.schema.org/
   - Vérification de conformité

3. **Google Search Console**
   - Onglet "Améliorations" → Rich Results
   - Monitoring des erreurs

---

## 📊 MONITORING POST-IMPLÉMENTATION

### Métriques à suivre:

- **CTR** (Click-Through Rate) dans Google Search Console
- **Impressions** des Rich Snippets
- **Position moyenne** sur requêtes cibles
- **Erreurs** dans Search Console > Améliorations

### Délais d'impact:

- **2-7 jours**: Indexation des nouveaux schémas
- **2-4 semaines**: Premiers Rich Snippets visibles
- **2-3 mois**: Impact SEO complet

---

## 🎁 CHECKLIST FINALE

### Avant le déploiement:

- [ ] Tous les schémas validés sur Schema.org
- [ ] Pas d'erreurs dans Google Rich Results Test
- [ ] @id corrects pour les références croisées
- [ ] Images avec dimensions spécifiées
- [ ] Dates au format ISO 8601
- [ ] Prix en nombre (pas en string)
- [ ] URLs absolues (pas relatives)

### Après le déploiement:

- [ ] Demander ré-indexation dans Search Console
- [ ] Vérifier l'affichage dans les 7 jours
- [ ] Monitorer erreurs dans Search Console
- [ ] Tester sur ChatGPT/Perplexity après 2 semaines

---

## 💡 BONNES PRATIQUES

### DO ✅
- Utiliser des @id pour référencer entre schémas
- Minifier le JSON en production
- Valider avant chaque déploiement
- Mettre à jour les dates régulièrement
- Utiliser des images de qualité

### DON'T ❌
- Ne pas dupliquer les schémas
- Ne pas inventer de propriétés
- Ne pas mettre de prix en string
- Ne pas oublier le @context
- Ne pas omettre les propriétés requises

---

## 📞 SUPPORT

En cas de problème:
1. Vérifier les logs dans la console navigateur
2. Tester le JSON sur https://jsonlint.com
3. Relire la doc Schema.org officielle
4. Consulter les exemples Google

---

**Dernière mise à jour:** 24 octobre 2025
**Version:** 2.0
