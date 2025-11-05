Ce fichier contient des templates de messages prêts-à-coller à utiliser dans Claude Code avant chaque section. Remplace [img] par le contexte réel de tes captures.

SECTION 1 : HERO
text
Claude, voici ma capture de la Hero section (image 1).

OBJECTIF:
Reproduire exactement le design: badge pill "Disponible pour nouveaux projets",
gros titre avec mot clé en dégradé bleu→violet, sous-titre, double CTA.

CONTRAINTES SPÉCIFIQUES:

- Titre H1: 64px bold, letter-spacing −0.5px
- Mot clé "d'extraordinaire": gradient text (background-clip: text)
- Badge: petite pill bleu pâle, icône spark, ombre douce
- CTA primaire: "Voir mes projets" bleu soutenu, chevron animé au hover
- CTA secondaire: "Me contacter" style glass avec backdrop-blur
- Fond: blanc + quadrillage très discret (24px cells)
- Animations Framer Motion: stagger fade-in (badge 0ms, titre 80ms, sous-titre 160ms, CTAs 240ms)
- Parallax léger sur halos (0.3 factor)

ACTIONS:

1. Crée composant /components/Hero.tsx avec Framer Motion
2. Ajoute CSS quadrillage dans globals.css
3. Montre-moi le rendu local (npm run dev, localhost:3000)
4. On itère visuellement si ajustements nécessaires

Envoie le code généré et capture ton premier rendu.
SECTION 2 : BENTO GRID
text
Claude, voici mes 4 captures de la Bento Grid section (images 2a-2d):

- 2a: tuile Croissance avec graphique
- 2b: tuile Audience
- 2c: tuile Crédibilité
- 2d: tuile "Le saviez-vous ?"

OBJECTIF:
Reproduire la grille asymétrique 2×3 avec cartes glass et graphique Chart.js.

CONTRAINTES:

- Disposition: tuile graphique large gauche, deux cartes droit, bandeau bas pleine largeur
- Toutes les cartes: corners 20px, backdrop-blur 6-8px, border 1px translucide, ombre douce
- Graphique: ligne bleue lissée, points ronds, axes fins, quadrillage léger, annotation "+300%"
- Hover effects: translateY(−4px), scale(1.01), ombre +30%, glass renforcé
- Checkmarks icônes au hover
- Responsive: pile sur mobile

ACTIONS:

1. Crée /components/BentoGrid.tsx avec 4 sous-composants (BentoChart, BentoCard, etc.)
2. Intègre Chart.js pour le graphique avec données statiques
3. Ajoute Framer Motion pour hover/parallax
4. Montre le rendu et les 4 cartes complètes
5. On ajuste les espacements et opacités si besoin

Commence par l'architecture, montre le code.
SECTION 3 : PRICING
text
Claude, voici ma capture Pricing (image 3).

OBJECTIF:
Implémenter une carte unique centrée 1500€ "Offre Unique" selon le design fourni.

CONTRAINTES:

- Carte XL (760-860px), centrée, glass clair + backdrop-blur 6-8px
- Badge "Recommandé" flottant top avec glow dégradé
- Gros prix: 1500€ en 56-72px bold
- Sous-prix explicatif (14-16px gris moyen)
- Checkmarks animés pour liste features (8 items)
- CTA "Démarrer mon projet" large plein bleu, chevron animé
- CTA secondaire "Demander un appel" outline
- Note légale très petite en bas

ACTIONS:

1. Crée /components/PricingCard.tsx
2. Liste 8 features avec checkmarks animées au scroll
3. Hover: translateY(−6px), scale(1.01), ombre renforcée
4. Mobile: pleine largeur, CTAs empilés
5. Montre le rendu complet avec hovers

Code + screenshot du rendu.
SECTION 4 : TÉMOIGNAGES
text
Claude, voici ma capture Testimonials (image 4).

OBJECTIF:
Grille 3 cartes testimonials + bande logos clients en dessous.

CONTRAINTES:

- 3 colonnes desktop, 1 colonne mobile
- Chaque carte: corners 20px, glass, 5 étoiles (jaune), texte 2-3 lignes, avatar + nom + rôle
- Guillemets "99" déco en haut-droit
- Hover: translateY(−4px), ombre renforcée
- Logos clients: ligne gris atténué (50-60% opacity), 6 logos, au hover opacité +15%
- Background section: quadrillage très pâle pour texture

ACTIONS:

1. Crée /components/TestimonialCard.tsx et /components/ClientLogos.tsx
2. Génère 3 testimonials avec données statiques
3. Ajoute 6 logos clients (texte simple ou SVG)
4. Hover effects Framer Motion
5. Responsive + focus accessible
6. Montre grid complète avec logos

Code + screenshot.
SECTION 5 : CTA FINAL & FOOTER
text
Claude, voici ma capture du grand CTA et Footer (image 5).

OBJECTIF:
Bloc CTA grand dégradé bleu→violet + avantages + footer multi-colonnes avec newsletter.

CONTRAINTES CTA:

- Fond dégradé full-screen bleu→violet (animation lente 12-15s)
- Badge "Prêt à démarrer ?", titre XXL blanc, sous-titre blanc semi-transparent
- Double CTA centré: "Démarrer un projet" blanc/indigo + "Voir portfolio" outline white
- 3 avantages mini: icônes emoji (24h/gratuit/support)
- Séparateur fin blanc/10% opacity

CONTRAINTES FOOTER:

- Colonne marque gauche (description + icônes réseaux pills)
- 4 colonnes liens (Produit, Entreprise, Support, Légal)
- Newsletter centrée: titre + champ email glass + bouton "S'inscrire"
- Barre bas: © + "créé avec ❤️ par développeur" + liens légaux

ACTIONS:

1. Crée /components/CTASection.tsx et /components/Footer.tsx
2. Ajoute Framer Motion pour gradient CTA
3. Newsletter form (validation email basique, pas d'API pour l'instant)
4. Icônes réseaux: GitHub, Dribbble, X, LinkedIn
5. Mobile-first responsive
6. Montre CTA + Footer complet

Code + screenshot desktop + mobile.
SECTION 6 : NAVBAR
text
Claude, voici ma capture de la Navbar (image 1 top).

OBJECTIF:
Header sticky glass avec animations, menu responsive, burger mobile.

CONTRAINTES:

- Transparent au top, devient glass + ombre après 40-60px scroll
- Logo gauche, menu centre (Features, Projets, Pricing, Témoignages), CTA Contact droite
- Soulignement animé au hover des liens (300ms dessin)
- Bouton Contact: pill bleu soutenu, élévation au hover
- Burger menu mobile: toggle overlay glass full-screen
- Focus visible accessible sur tous éléments

ACTIONS:

1. Crée /components/Navbar.tsx avec Framer Motion
2. useScrollListener pour detect scroll et changer backdrop
3. Burger menu mobile avec animation slide/fade
4. Soulignement lien au hover (pseudo-élément animate)
5. Sticky positioning
6. Montre desktop + mobile burger

Code + screenshot.
TEMPLATE POUR ITÉRATION RAPIDE
Après première génération, utilise ce template pour ajustements visuels:

text
Claude, voici ma capture du rendu local (screenshot de localhost:3000).

AJUSTEMENTS:

1. Badge: réduire hauteur de 20%, augmenter padding horizontal
2. Titre: augmenter letter-spacing vers −0.3px
3. CTA primaire: ombre un peu plus douce, rayon passer à 14px
4. Hover: parallax parallax trop marqué, réduire factor à 0.2

Compare avec mon image de référence et corrige.
CHECKLIST AVANT CHAQUE SECTION
Avant de lancer Claude Code, assure-toi:

✅ Image capturée proprement (zoom 100%, pas flou)

✅ Spécifiques couleurs/tailles/espacements notées

✅ Comportements hover/scroll détaillés

✅ Responsive constraints mentionnées (mobile/desktop)

✅ Contexte de page clair (après quelle section, avant quoi)

✅ Design tokens Tailwind alignés (colors, sizing, radius)

PROMPT GLOBAL D'ENTRÉE (Premier appel Claude Code)
Copie-colle ce prompt pour initier le projet entièrement:

text
Salut Claude ! Je vais créer un portfolio/SaaS ultra premium avec Next.js 14 + Tailwind + Framer Motion.

Lis d'abord:

1. CLAUDE.md (conventions, stack, workflow)
2. prompt-complet-site.md (description détaillée design + sections)

Puis PLAN (sans coder):

1. Structure Next.js optimale (dossiers, routing)
2. Liste des composants à créer (découpe logique)
3. Tailwind config avec nos design tokens (couleurs, rayons, ombres, typos)
4. Ordre d'implémentation recommandé
5. Checklist QA/testing

Attendu pour chaque section:

- Image de référence (ex. hero.jpg)
- Constraints spécifiques (tailles, animations, responsive)
- Mon prompt section-par-section (via gabarit)

Objectif final: site pixel-perfect, animations fluides, responsive AA, déployé sur Vercel.

On procède section par section, tu crées code prêt-à-run, on merge après validation visuelle.

PRÊT ? Commence par le PLAN détaillé.
