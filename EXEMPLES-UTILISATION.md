# 💼 EXEMPLES D'UTILISATION - DONNÉES STRUCTURÉES

## 🎯 CAS D'USAGE CONCRETS POUR VISIBILITÉ LOCALE

---

## 1. ARTICLE "COMMENT OPTIMISER GMB" avec HowTo

### Code à ajouter dans l'article:

```tsx
import { HowToStructuredData } from '@/components/AdvancedStructuredData';

// Dans le composant Article, après BlogPostStructuredData
<HowToStructuredData
  name="Comment Optimiser Votre Fiche Google My Business en 5 Étapes"
  description="Guide complet pour optimiser votre fiche GMB et dominer les résultats locaux"
  totalTime="PT45M"
  supply={[
    "Compte Google",
    "Fiche Google My Business validée",
    "Photos professionnelles de votre établissement",
    "Logo de votre entreprise"
  ]}
  tool={[
    "Google My Business Dashboard",
    "Google Search Console",
    "Google Analytics"
  ]}
  steps={[
    {
      name: "Normaliser vos informations NAP",
      text: "Assurez-vous que votre Nom, Adresse et Téléphone soient exactement identiques sur tous les supports : site web, réseaux sociaux, annuaires en ligne. Cette cohérence est cruciale pour le référencement local.",
      url: "https://visibilite-locale.fr/article/optimiser-fiche-google-my-business-2024#etape-1"
    },
    {
      name: "Ajouter des photos de qualité",
      text: "Publiez régulièrement des visuels authentiques : extérieur du local, intérieur, équipe, produits. Privilégiez la lumière naturelle et des cadrages nets. Renouvelez vos photos tous les mois.",
      url: "https://visibilite-locale.fr/article/optimiser-fiche-google-my-business-2024#etape-2"
    },
    {
      name: "Gérer activement les avis clients",
      text: "Sollicitez des avis après chaque expérience positive et répondez systématiquement à tous les avis, même négatifs. Remerciez, contextualisez et proposez des solutions concrètes.",
      url: "https://visibilite-locale.fr/article/gestion-avis-google-my-business-strategie-complete"
    },
    {
      name: "Publier du contenu régulièrement",
      text: "Créez 2-3 publications par semaine : offres, événements, nouveautés, réalisations. Utilisez un format simple avec image claire, texte court et call-to-action précis.",
      url: "https://visibilite-locale.fr/article/strategie-contenu-gmb-publications-convertissent"
    },
    {
      name: "Exploiter les fonctionnalités avancées",
      text: "Activez la messagerie instantanée, structurez vos services avec détails et tarifs, ajoutez vos produits et complétez tous les attributs pertinents (modes de paiement, accessibilité, etc.).",
      url: "https://visibilite-locale.fr/article/optimiser-fiche-google-my-business-2024#etape-5"
    }
  ]}
/>
```

### Résultat attendu:
- ✅ Rich Snippet avec carrousel d'étapes
- ✅ "How-to" dans les résultats Google
- ✅ Possibilité d'apparaître en Position 0
- ✅ Citations facilitées par les IA

---

## 2. PAGE D'ACCUEIL - Avis Clients

### Code pour la section témoignages:

```tsx
import { ReviewStructuredData } from '@/components/AdvancedStructuredData';

// Dans le composant Index, avant Navigation
<ReviewStructuredData
  reviews={[
    {
      author: "Marie Dubois",
      rating: 5,
      reviewBody: "Résultats exceptionnels ! Ma fiche GMB est passée de la 15ème à la 2ème position en 6 semaines. Les appels ont triplé. L'équipe de Visibilité Locale est professionnelle et très réactive.",
      datePublished: "2025-10-10"
    },
    {
      author: "Thomas Lefebvre",
      rating: 5,
      reviewBody: "Enfin une agence qui comprend vraiment le référencement local. L'audit gratuit a révélé des erreurs critiques que j'ignorais complètement. Mon restaurant apparaît maintenant en premier sur Google Maps.",
      datePublished: "2025-09-28"
    },
    {
      author: "Sophie Martin",
      rating: 5,
      reviewBody: "ROI impressionnant. Pour 149€/mois, j'ai gagné 12 nouveaux clients en un mois. La gestion des avis et les publications régulières ont transformé ma présence en ligne.",
      datePublished: "2025-10-15"
    },
    {
      author: "Laurent Bernard",
      rating: 5,
      reviewBody: "Service haut de gamme à prix raisonnable. Sabri SEO maîtrise parfaitement Google My Business. Ma visibilité a augmenté de 320% en 2 mois. Je recommande sans hésitation.",
      datePublished: "2025-10-01"
    },
    {
      author: "Céline Rousseau",
      rating: 5,
      reviewBody: "Accompagnement personnalisé et résultats rapides. L'optimisation de mes citations locales a fait toute la différence. Je suis maintenant dans le top 3 de ma ville.",
      datePublished: "2025-09-20"
    }
  ]}
/>
```

### Résultat attendu:
- ⭐ Étoiles dans les résultats Google
- ✅ AggregateRating renforcé
- ✅ Trust signals pour les IA
- ✅ Crédibilité accrue

---

## 3. PAGE BLOG - Liste d'Articles

### Code pour la page /blog:

```tsx
import { ItemListStructuredData } from '@/components/AdvancedStructuredData';
import { getAllArticles } from '@/data/blogArticles';

// Dans le composant Blog
const allArticles = getAllArticles();

<ItemListStructuredData
  items={allArticles.map((article, index) => ({
    position: index + 1,
    name: article.title,
    url: `https://visibilite-locale.fr/article/${article.slug}`
  }))}
/>
```

### Résultat attendu:
- 📋 Carrousel d'articles dans Google
- ✅ Navigation facilitée pour les IA
- ✅ Structure claire du blog

---

## 4. ARTICLE avec SPEAKABLE (Optimisation vocale)

### Pour articles principaux:

```tsx
import { SpeakableStructuredData } from '@/components/AdvancedStructuredData';

// Dans le composant Article
<SpeakableStructuredData
  cssSelectors={[
    "h1",
    "h2:first-of-type",
    ".article-content > p:first-of-type",
    ".article-content > p:nth-of-type(2)"
  ]}
/>
```

### Résultat attendu:
- 🔊 Optimisation pour Google Assistant
- ✅ Meilleure lecture par les IA vocales
- ✅ Featured Snippets possibles

---

## 5. FUTURE: Webinaire (quand disponible)

### Code pour page événement:

```tsx
import { EventStructuredData } from '@/components/AdvancedStructuredData';

<EventStructuredData
  event={{
    name: "Masterclass Gratuite : Dominer Google Maps en 2025",
    description: "Formation en ligne complète pour maîtriser Google My Business et le référencement local. Accès à vie aux replays et bonus exclusifs.",
    startDate: "2025-11-20T19:00:00+01:00",
    endDate: "2025-11-20T21:00:00+01:00",
    eventAttendanceMode: "OnlineEventAttendanceMode",
    eventStatus: "EventScheduled",
    price: 0,
    priceCurrency: "EUR",
    url: "https://visibilite-locale.fr/masterclass-gmb-2025"
  }}
/>
```

### Résultat attendu:
- 📅 Apparition dans Google Events
- ✅ Inscription directe possible
- ✅ Rich Snippet avec date/heure

---

## 6. FUTURE: Vidéo Tutorielle (quand disponible)

### Code pour article avec vidéo:

```tsx
import { VideoStructuredData } from '@/components/AdvancedStructuredData';

<VideoStructuredData
  video={{
    name: "Optimiser Google My Business en 10 Minutes - Tutoriel Complet 2025",
    description: "Découvrez comment optimiser votre fiche GMB rapidement et efficacement avec notre guide vidéo étape par étape",
    thumbnailUrl: "https://visibilite-locale.fr/videos/gmb-tutorial-thumb.jpg",
    uploadDate: "2025-10-24",
    duration: "PT10M45S",
    contentUrl: "https://visibilite-locale.fr/videos/gmb-tutorial.mp4",
    embedUrl: "https://www.youtube.com/embed/ABC123XYZ"
  }}
/>
```

### Résultat attendu:
- 🎥 Miniature vidéo dans Google
- ✅ Durée affichée
- ✅ Meilleur CTR

---

## 📊 PRIORITÉS D'IMPLÉMENTATION

### PHASE 1 - IMMÉDIAT (Cette semaine)

1. ✅ **Person** → Déjà ajouté sur page d'accueil
2. 🔲 **HowTo** → À ajouter sur article "Optimiser GMB"
3. 🔲 **Review** → À ajouter sur page d'accueil

**Action requise:**
```bash
# 1. Créer le fichier pour les reviews
src/data/testimonials.ts

# 2. Intégrer HowTo dans Article.tsx
src/pages/Article.tsx (conditionnel selon le slug)

# 3. Ajouter Reviews dans Index.tsx
src/pages/Index.tsx
```

### PHASE 2 - COURT TERME (2 semaines)

4. 🔲 **ItemList** → Page blog
5. 🔲 **Speakable** → Articles principaux

### PHASE 3 - MOYEN TERME (Optionnel)

6. 🔲 **Event** → Quand webinaire prévu
7. 🔲 **Video** → Quand vidéos créées

---

## 🧪 TESTS À EFFECTUER

### Après chaque ajout:

1. **Google Rich Results Test**
   ```
   https://search.google.com/test/rich-results
   ```

2. **Schema Validator**
   ```
   https://validator.schema.org/
   ```

3. **Console Browser**
   - Vérifier absence d'erreurs JavaScript
   - Valider le JSON dans l'inspecteur

---

## 💡 CONSEILS PRATIQUES

### DO ✅
- Tester chaque schéma individuellement
- Valider avant de commit
- Monitorer Search Console après 7 jours
- Mettre à jour régulièrement les données

### DON'T ❌
- Ne pas ajouter tous les schémas d'un coup
- Ne pas négliger les tests
- Ne pas copier-coller sans adapter les URLs
- Ne pas oublier de mettre à jour les dates

---

## 📞 CHECKLIST DE DÉPLOIEMENT

Avant de déployer en production:

- [ ] Tous les schémas validés sur Schema.org
- [ ] Pas d'erreurs dans Google Rich Results Test
- [ ] URLs absolues (pas relatives)
- [ ] Dates au format ISO correct
- [ ] @id cohérents entre schémas
- [ ] Images avec dimensions
- [ ] Prix en nombre (pas string)
- [ ] Tests navigateur (Chrome, Firefox, Safari)
- [ ] Console sans erreurs
- [ ] Build production OK

---

**Prochaine étape:** Implémenter Phase 1 (HowTo + Review)
