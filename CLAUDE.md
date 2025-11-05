Résumé projet
Création d’un site portfolio/SaaS moderne et ultra design : typographie sans-serif, larges espaces blancs, quadrillage fond discret blanc/gris, animations fluides (scroll, hover, parallax), de multiples sections réactives et responsive (hero, bento grid, pricing, témoignages, CTA grand final, footer multi-colonnes + newsletter).

Stack technique
Framework principal : Next.js 14+ (App Router)

Style : Tailwind CSS (palette custom)

Animations : Framer Motion (scroll effects, stagger, parallax), GSAP si besoin

Graphique/statistiques : Chart.js (tuiles bento)

Icônes : Lucide ou Phosphor

Déploiement : Vercel (CI auto GitHub)

Autres : eslint, prettier, React Testing Library

Design tokens & UI
Palette :

Arrière-plan principal : #fff

Quadrillage fond : rgba(0,0,0,0.03 et 0.06) pattern CSS

Textes principaux : #1a1a2e

Accent : gradient bleu (#5a67d8) -> violet (#9f7aea)

Gris : 60–80% opacity pour textes secondaires

Rayons : 12px (buttons), 16–24px (cards, surfaces)

Ombres : Y 10–18px, blur 28–40px, alpha ~12%

Transitions : 280–330 ms, ease-out, GPU-only (transform, opacity)

Typographie : Inter/Poppins/Outfit, hiérarchie bien définie

Structure projet Next.js
/app : pages et sections principales (Hero, Pricing, etc.)

/components : composants UI réutilisables (Button, Card, Navbar, Feature, Testimonial...)

/styles : config Tailwind, CSS utilitaires, pattern quadrillage

/public : images, logos, icônes, fonts

Conventions code
Composants Functionnels (React Hooks uniquement)

Tailwind uniquement (pas de styled-components/CSS modules)

App mobile-first puis desktop scaling

Accessibilité AA (focus visible, alt, labels, contrastes)

Animations respectent prefers-reduced-motion

Utilisation systématique des design tokens Tailwind

Tous les imports/exports explicites

Texte dynamique/statique clairement différencié

Bonnes pratiques Claude
NE PAS coder plusieurs grosses sections d'un coup. Utiliser une branche git par composant/feature majeure. Pull Request et review après chaque merge.

Demander confirmation avant tout build/production/deploy Vercel

Générer tests React Testing Library pour chaque composant critique (Navbar, Hero, Pricing, etc.)

Toujours tester responsive et performance Lighthouse (>90 partout)

Documenter tout code d’animation complexe (commentaire JSDoc recommandé)

Exigences QA
Pixel perfect sur les captures fournies/maquettes

Anims fluide, no “jank”/lag même sur mobile classique

Tous textes traduits FR, acc. labels/aria complets

Images WebP, lazy-load là où nécessaire

Aucune warning/erreur à l’exécution ni au build

Liens fichiers essentiels
prompt-complet-site.md = description fonctionnelle site (sections/couleurs/composants/animations)

README.md = instructions d’installation/lancement locale

/screenshots = captures d’écran/maquettes à respecter

Workflow Claude code
Plan : génère structure Next.js, fichier config Tailwind, liste des composants (reprend prompt-complet-site.md comme référence de découpage)

Set Up : initialise le projet, configure Tailwind et install dépendances, vérifie settings Vercel/GitHub

Developpe Section par Section : exécute chaque section individuellement, push sur branche dédiée, merge après validation visuelle

Tests : écrit unitaires minimum pour tous (React Testing Library)

Optimise & QA : Lighthouse, acc, perf, responsive, builds successifs

Déploiement final : only sur validation, guide configuration Vercel si besoin, check URLs et meta SEO

Points d’attention
Séparer animations Framer des logiques business/pure rendering

Vérifier fallback sur images/fonts/polices

Jamais de secret .env poussé, ni info sensible publique
