# 🚀 SCHÉMAS JSON-LD PRODUCTION - VISIBILITÉ LOCALE

## 📦 CODE MINIFIÉ PRÊT À L'EMPLOI

### 1️⃣ ORGANIZATION (ProfessionalService)
**À placer sur:** Page d'accueil

```json
{"@context":"https://schema.org","@type":"ProfessionalService","@id":"https://visibilite-locale.fr/#organization","name":"Visibilité Locale","alternateName":"Agence Google My Business","description":"Agence spécialisée en référencement local et optimisation Google My Business. Nous aidons les entreprises à dominer les recherches locales et Google Maps.","url":"https://visibilite-locale.fr","logo":{"@type":"ImageObject","url":"https://visibilite-locale.fr/logo.png","width":"250","height":"60"},"image":{"@type":"ImageObject","url":"https://visibilite-locale.fr/logo.png","width":"250","height":"60"},"telephone":"+33758682370","email":"contact@visibilite-locale.fr","priceRange":"$$","address":{"@type":"PostalAddress","addressCountry":"FR","addressRegion":"Île-de-France","addressLocality":"Paris"},"areaServed":[{"@type":"Country","name":"France"},{"@type":"AdministrativeArea","name":"Île-de-France"}],"sameAs":["https://www.facebook.com/visibilitelocale","https://www.linkedin.com/company/visibilite-locale","https://twitter.com/visibilitelocale"],"aggregateRating":{"@type":"AggregateRating","ratingValue":4.9,"reviewCount":127,"bestRating":5,"worstRating":1},"openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday"],"opens":"09:00","closes":"18:00"}]}
```

---

### 2️⃣ WEBSITE (avec SearchAction)
**À placer sur:** Page d'accueil

```json
{"@context":"https://schema.org","@type":"WebSite","@id":"https://visibilite-locale.fr/#website","url":"https://visibilite-locale.fr","name":"Visibilité Locale - Agence Google My Business","description":"Agence spécialisée en optimisation Google My Business et référencement local","publisher":{"@id":"https://visibilite-locale.fr/#organization"},"potentialAction":{"@type":"SearchAction","target":{"@type":"EntryPoint","urlTemplate":"https://visibilite-locale.fr/blog?search={search_term_string}"},"query-input":"required name=search_term_string"},"inLanguage":"fr-FR"}
```

---

### 3️⃣ PERSON (Sabri SEO)
**À placer sur:** Page d'accueil, À propos, Articles

```json
{"@context":"https://schema.org","@type":"Person","@id":"https://visibilite-locale.fr/#sabri-seo","name":"Sabri SEO","jobTitle":"Expert SEO Local & Google My Business","description":"Expert en référencement local et optimisation Google My Business, spécialisé dans l'amélioration de la visibilité des entreprises locales sur Google Maps.","url":"https://visibilite-locale.fr","image":{"@type":"ImageObject","url":"https://visibilite-locale.fr/sabri-seo.jpg","width":400,"height":400},"sameAs":["https://www.linkedin.com/in/sabri-seo","https://twitter.com/sabriseo"],"knowsAbout":["Google My Business","Référencement Local","SEO Local","Google Maps Optimization","Local Citations","Online Reputation Management"],"worksFor":{"@id":"https://visibilite-locale.fr/#organization"}}
```

---

### 4️⃣ FAQPAGE
**À placer sur:** Page d'accueil

```json
{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Qu'est-ce que Google My Business ?","acceptedAnswer":{"@type":"Answer","text":"Google My Business (GMB) est un service gratuit de Google qui permet aux entreprises de gérer leur présence en ligne sur Google Search et Google Maps. Il permet d'afficher vos informations essentielles, de recueillir des avis clients et d'améliorer votre visibilité locale."}},{"@type":"Question","name":"Pourquoi optimiser ma fiche Google My Business ?","acceptedAnswer":{"@type":"Answer","text":"Une fiche GMB optimisée augmente votre visibilité locale de plus de 320%, génère plus d'appels, de visites en magasin et de demandes d'itinéraire. Elle apparaît avant votre site web sur mobile et dans Google Maps, créant un pont direct entre vous et vos clients potentiels."}},{"@type":"Question","name":"Combien coûte l'optimisation Google My Business ?","acceptedAnswer":{"@type":"Answer","text":"Nos services d'optimisation GMB commencent à partir de 59€/mois pour l'offre Essentiel. Nous proposons également des formules Pro à 149€/mois et Premium à 299€/mois selon vos besoins et objectifs."}},{"@type":"Question","name":"Combien de temps faut-il pour voir des résultats ?","acceptedAnswer":{"@type":"Answer","text":"Les premiers résultats apparaissent généralement en 2 à 4 semaines. L'optimisation complète et la montée en puissance dans les résultats locaux prennent entre 2 et 3 mois pour atteindre leur plein potentiel."}},{"@type":"Question","name":"Quelle est la différence entre GMB et le SEO classique ?","acceptedAnswer":{"@type":"Answer","text":"Le SEO classique optimise votre site web pour les résultats organiques, tandis que GMB optimise votre fiche pour les recherches locales sur Google Maps et le Local Pack. Les deux sont complémentaires pour maximiser votre visibilité digitale."}}]}
```

---

### 5️⃣ SERVICE (Pack Essentiel)
**À placer sur:** Page d'accueil

```json
{"@context":"https://schema.org","@type":"Service","@id":"https://visibilite-locale.fr/#service-essentiel","serviceType":"Optimisation Google My Business","name":"Pack Essentiel GMB","description":"Optimisation complète de votre fiche GMB avec audit, configuration et optimisation mensuelle","provider":{"@id":"https://visibilite-locale.fr/#organization"},"areaServed":{"@type":"Country","name":"France"},"offers":{"@type":"Offer","price":59,"priceCurrency":"EUR","priceValidUntil":"2025-12-31","availability":"https://schema.org/InStock","url":"https://visibilite-locale.fr/#pricing"}}
```

### 6️⃣ SERVICE (Pack Pro)
```json
{"@context":"https://schema.org","@type":"Service","@id":"https://visibilite-locale.fr/#service-pro","serviceType":"Optimisation Google My Business","name":"Pack Pro GMB","description":"Offre complète incluant gestion des avis, publications GMB et reporting avancé","provider":{"@id":"https://visibilite-locale.fr/#organization"},"areaServed":{"@type":"Country","name":"France"},"offers":{"@type":"Offer","price":149,"priceCurrency":"EUR","priceValidUntil":"2025-12-31","availability":"https://schema.org/InStock","url":"https://visibilite-locale.fr/#pricing"}}
```

### 7️⃣ SERVICE (Pack Premium)
```json
{"@context":"https://schema.org","@type":"Service","@id":"https://visibilite-locale.fr/#service-premium","serviceType":"Optimisation Google My Business","name":"Pack Premium GMB","description":"Solution complète avec stratégie locale avancée, citations et suivi personnalisé","provider":{"@id":"https://visibilite-locale.fr/#organization"},"areaServed":{"@type":"Country","name":"France"},"offers":{"@type":"Offer","price":299,"priceCurrency":"EUR","priceValidUntil":"2025-12-31","availability":"https://schema.org/InStock","url":"https://visibilite-locale.fr/#pricing"}}
```

---

### 8️⃣ BREADCRUMBLIST (Page Blog)
**À placer sur:** /blog

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Accueil","item":"https://visibilite-locale.fr"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://visibilite-locale.fr/blog"}]}
```

---

### 9️⃣ BLOGPOSTING (Article)
**À placer sur:** Chaque article de blog

```json
{"@context":"https://schema.org","@type":"BlogPosting","headline":"Comment Optimiser Votre Fiche Google My Business en 2024","description":"Guide complet pour optimiser votre fiche GMB","image":"https://visibilite-locale.fr/logo.png","datePublished":"2025-10-15","dateModified":"2025-10-15","author":{"@type":"Person","name":"Sabri SEO","url":"https://visibilite-locale.fr"},"publisher":{"@type":"Organization","name":"Visibilité Locale","logo":{"@type":"ImageObject","url":"https://visibilite-locale.fr/logo.png"}},"mainEntityOfPage":{"@type":"WebPage","@id":"https://visibilite-locale.fr/article/optimiser-fiche-google-my-business-2024"},"inLanguage":"fr-FR","keywords":"Google My Business, référencement local, SEO local, GMB, optimisation locale"}
```

---

### 🔟 BREADCRUMBLIST (Article)
**À placer sur:** Chaque article

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Accueil","item":"https://visibilite-locale.fr"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://visibilite-locale.fr/blog"},{"@type":"ListItem","position":3,"name":"Comment Optimiser GMB","item":"https://visibilite-locale.fr/article/optimiser-fiche-google-my-business-2024"}]}
```

---

## 🎯 INTÉGRATION HTML DIRECTE

Si vous voulez ajouter directement dans le HTML (index.html):

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://visibilite-locale.fr/#organization",
  "name": "Visibilité Locale"
}
</script>
```

---

## ✅ CHECKLIST VALIDATION

Avant de déployer, vérifiez:

1. **Google Rich Results Test**
   ```
   https://search.google.com/test/rich-results?url=https://visibilite-locale.fr
   ```

2. **Schema.org Validator**
   ```
   https://validator.schema.org/#url=https://visibilite-locale.fr
   ```

3. **Vérifications techniques:**
   - [ ] Pas d'erreurs de validation
   - [ ] @id cohérents entre les schémas
   - [ ] Dates au format ISO 8601
   - [ ] Prix en nombre (pas en string)
   - [ ] Images avec dimensions
   - [ ] URLs absolues

---

## 📊 IMPACT ATTENDU

### Court terme (2-4 semaines):
- ✅ Rich Snippets dans Google
- ✅ Étoiles d'avis visibles
- ✅ Prix affichés
- ✅ FAQ expansibles

### Moyen terme (2-3 mois):
- ✅ +25% CTR moyen
- ✅ Meilleur positionnement local
- ✅ Knowledge Panel possible
- ✅ Citations par les IA

### Long terme (6+ mois):
- ✅ Autorité E-E-A-T renforcée
- ✅ Featured Snippets possibles
- ✅ Position 0 sur certaines requêtes
- ✅ Reconnaissance comme expert par les IA

---

## 🚨 ERREURS À ÉVITER

❌ **Ne JAMAIS faire:**
- Dupliquer les schémas (même type 2 fois)
- Inventer des propriétés personnalisées
- Mettre des prix en string ("59" au lieu de 59)
- Oublier le @context
- Utiliser des URLs relatives (/blog au lieu de https://...)
- Laisser des champs vides

✅ **TOUJOURS faire:**
- Valider avant déploiement
- Utiliser des @id pour lier les schémas
- Garder les données à jour
- Monitorer Search Console
- Tester régulièrement

---

**Dernière mise à jour:** 24 octobre 2025
