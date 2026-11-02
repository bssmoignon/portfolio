# Portfolio — Boubacar Siguine

Portfolio professionnel développé avec Next.js, React, TypeScript, Tailwind CSS,
Framer Motion, GSAP, Lucide, React Hook Form et Zod.

## Prérequis

- Node.js 20.9 ou supérieur
- npm

## Installation et lancement local

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Vérification et production

```bash
npm run typecheck
npm run lint
npm run build
npm run start
```

## Déploiement sur Vercel

1. Importer le dépôt Git dans [Vercel](https://vercel.com/new).
2. Sélectionner **Next.js** comme framework ; Vercel détecte automatiquement les
   commandes `next build` et `next start`.
3. Laisser le répertoire racine à sa valeur par défaut et ne définir aucune
   variable d’environnement pour cette version.
4. Lancer le déploiement. Chaque push sur la branche de production déclenchera
   ensuite un nouveau déploiement.

La page `/cv` est une version imprimable du parcours fourni : son bouton
**Imprimer / enregistrer en PDF** ouvre la boîte de dialogue du navigateur.
Le formulaire de contact valide les champs puis prépare un e-mail avec
l’application configurée par le visiteur ; il ne transmet ni ne stocke de
données sur un serveur.

## Contenu

Les diplômes, domaines techniques, projets et formations affichés proviennent
des informations fournies pour ce portfolio. Les fiches de laboratoire et
justificatifs pourront être ajoutés lorsqu’ils seront disponibles. Le projet
de blockchain est présenté comme une étude de conception en cours, et non
comme un déploiement en production.
