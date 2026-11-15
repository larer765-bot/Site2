# SolidHand International : site web

Site statique (HTML) prêt pour **GitHub Pages**. Aucune installation, aucun outil de build.

## Fichiers
- Pages : `index`, `a-propos`, `projets`, `terrain`, `equipe`, `transparence`, `soutenir`, `contact`, `mentions-legales` (.html)
- `SITE-COMPLET.html` : toutes les pages dans un seul fichier
- `images/` : toutes les photos
- `robots.txt`, `sitemap.xml`, `.nojekyll`

## Photos à mettre dans `images/` (minuscules, noms exacts : GitHub distingue majuscules et minuscules)
`logo.jpg`, `president-fondateur.jpg`, `directrice.jpg`, `tresorier.jpg`, `secretaire.jpg`, `conseillere.jpg`, `digital-marketing.jpg`, `logistique-administration.jpg`, `terrain-enfants.jpg` (déjà fournie).

## Publier sur GitHub
1. Déposer tout le contenu de ce dossier à la racine du dépôt (Add file > Upload files > Commit changes), en gardant les photos dans `images/`.
2. Settings > Pages > *Deploy from a branch* > `main` / `/ (root)`.
3. Domaine : www.solidhandinternational.org (fichier `CNAME` à ajouter si le domaine est relié à GitHub Pages).

## Configuration (reprise de l'ancien index)
- **Formulaires (contact et Gazette)** : envoyés par **Web3Forms** (clé publique dans `const W3=` en bas de chaque page). Si l'envoi échoue, la messagerie du visiteur s'ouvre avec le message prérempli.
- **Google Analytics** : `G-P4RG1505RE`. **Search Console** : balise `google-site-verification` dans l'en-tête.
- **WhatsApp** : +1 401 662 5655.
- **Partage (Open Graph)** : l'image de partage est `images/logo.jpg`.

## Don en ligne (KKiaPay)
Page `soutenir.html`, bloc « Donner en ligne ». Type de compte KKiaPay : **Intégration**.
1. Copier la **clé publique** dans le tableau de bord KKiaPay (jamais la clé privée).
2. Dans `soutenir.html`, remplacer `const KK={key:"",sandbox:true}` par la clé, tester en `sandbox:true`, puis passer à `false` quand le compte est activé.
Tant que la clé est vide, le bouton affiche « bientôt disponible » et renvoie vers PayPal et T-Money.

## Réseaux sociaux (pied de page)
Actifs : WhatsApp, TikTok (@solidhand.interna), YouTube (@SolidHandInternationalTV), Instagram (@solidhandinternational). À activer : Facebook et Snapchat.
