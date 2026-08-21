# Spreek Nederlands — 6 semaines pour parler néerlandais

Application mobile (PWA installable, fonctionne hors connexion) qui conduit un francophone
débutant complet jusqu'à un **A2 solide orienté oral** en 42 jours, à raison de 30-45 minutes
par jour.

Le vocabulaire est centré sur la **vie quotidienne aux Pays-Bas et en Belgique** et sur les
**relations familiales et sociales**.

---

## Le programme

| Semaine | Thème | Ce que tu sais faire à la fin |
|---|---|---|
| 1 | Les sons, se présenter, exister | Prononcer le *g* raclé et le *ui*, te présenter, poser une question, conjuguer `zijn`, `hebben` et le présent régulier, placer le verbe en deuxième position |
| 2 | Chez soi, courses, commander | Décrire ton logement, faire tes courses au poids, commander au café, choisir entre `niet` et `geen` |
| 3 | Se déplacer, le temps, les rendez-vous | Dire l'heure à la néerlandaise, prendre un train, demander ton chemin, utiliser les modaux et les verbes à particule |
| 4 | Raconter, donner son avis | Passé composé et imparfait, récit de journée, subordonnées avec verbe rejeté, décrire les gens |
| 5 | Santé, administration, logement, téléphone | Décrire une douleur, tenir un appel, passer un guichet en néerlandais, signaler une panne |
| 6 | Nuances et aisance | Les particules modales (`even`, `toch`, `hoor`), les diminutifs, comparer, réparer une conversation, un dîner complet |

**Contenu total** : 42 leçons · 712 mots · 238 phrases clés · 380 répliques de dialogue ·
80 phrases de survie · un guide de prononciation complet.

## Comment se déroule une journée

Sept étapes, environ 35 minutes :

1. **Grammaire** — le point du jour expliqué en français, avec exemples audio
2. **Vocabulaire** — écoute et répétition, article inclus (`de fiets`, jamais `fiets` seul)
3. **Phrases clés** — les tournures réutilisables telles quelles
4. **Dialogue** — écoute intégrale, puis mode « jeu de rôle » où tes répliques sont floutées
5. **Exercices** — QCM, production écrite, dictée, remise en ordre des mots
6. **Défi oral** — le micro écoute ta phrase et la compare au modèle
7. **Bilan** — les cartes de la leçon entrent en répétition espacée

La **révision espacée** (SM-2 allégé) est le moteur du reste : cinq minutes chaque matin
suffisent à empêcher l'oubli, et l'app t'y ramène en premier.

## Fonctionnalités

- **Audio néerlandais** par synthèse vocale du système, vitesse réglable (0,5× à 1,2×)
- **Reconnaissance vocale** en `nl-NL` pour les défis oraux, avec repli automatique sur
  l'auto-évaluation là où le navigateur ne la gère pas (Firefox notamment)
- **Répétition espacée** sur les 950 cartes du programme
- **Carnet de survie** consultable et cherchable, à ouvrir deux minutes avant le rendez-vous
  chez le médecin ou l'appel au propriétaire
- **Guide de prononciation** : les sons, les longueurs de voyelles, l'accent tonique
- **Suivi** : série de jours, régularité sur 14 jours, état de mémorisation des cartes
- **Hors connexion** intégral, données stockées uniquement dans le navigateur,
  export/import JSON

## Installer sur ton téléphone

L'app se déploie automatiquement sur GitHub Pages à chaque push sur `main`
(workflow `.github/workflows/deploy.yml`). Il faut activer une fois
**Settings → Pages → Source : GitHub Actions** dans le dépôt.

Puis, sur le téléphone, ouvre l'URL publiée et :

- **iPhone (Safari)** — Partager → *Sur l'écran d'accueil*
- **Android (Chrome)** — menu ⋮ → *Installer l'application*

### La voix néerlandaise

La lecture audio utilise les voix du système. Sans voix néerlandaise installée,
l'app te prévient et le son sera faux.

- **iPhone** : Réglages → Accessibilité → Contenu énoncé → Voix → Néerlandais
- **Android** : Paramètres → Système → Langues → Synthèse vocale → installer *Nederlands*
- **Ordinateur** : ajouter le néerlandais aux langues du système

## Développement

```bash
npm install
npm run dev        # serveur de développement
npm run typecheck  # vérification TypeScript
npm run build      # build de production dans dist/
npm run preview    # sert le build
```

Aucun service externe, aucune clé d'API, aucun compte. React + TypeScript + Vite,
service worker généré par `vite-plugin-pwa`.

### Organisation du code

```
src/
  data/          curriculum (week1…week6), prononciation, carnet de survie
  lib/           moteur : répétition espacée, synthèse et reconnaissance vocale,
                 générateur d'exercices, persistance, routeur
  components/    Drill, SpeakPrompt, icônes, briques d'interface
  screens/       Accueil, Leçon, Révision, Programme, Carnet, Sons, Progrès, Réglages
```

Le contenu pédagogique est entièrement dans `src/data/` : ajouter ou corriger un mot
ne demande de toucher à aucun composant.

## Conseil d'usage

Les Néerlandais passent à l'anglais dès qu'ils entendent une hésitation. La phrase la plus
importante du programme est dans la leçon 7, et elle vaut mille mots de vocabulaire :

> **Mogen we Nederlands praten? Ik ben aan het leren.**
