# Guide photos du site

Chaque page contient un ou plusieurs emplacements photo visibles (cadre vert pâle avec l'icône 📷).
Pour mettre une photo en ligne :

1. Préparer le fichier aux dimensions indiquées ci-dessous (voir « Préparation des fichiers »).
2. Le déposer dans le dossier `assets/img/` avec **exactement** le nom de fichier indiqué.
3. Dans la page HTML, remplacer le bloc `<div class="photo-ph">…</div>` par la balise `<img>` déjà écrite en commentaire juste au-dessus (il suffit de retirer les `<!--` et `-->` et de supprimer le div placeholder).

## Liste des photos par page

| Page | Fichier (`assets/img/`) | Format | Dimensions | Sujet conseillé |
|---|---|---|---|---|
| Accueil | `cabinet-kinesiologie-andrezieux-boutheon.jpg` | Paysage 16:9 | 1600 × 900 px | Le cabinet, vue d'ensemble chaleureuse |
| Accueil + Qui suis-je | `catherine-bruyere-kinesiologue-portrait.jpg` | Portrait 4:5 | 800 × 1000 px | Portrait de Catherine, lumière naturelle, cabinet en arrière-plan (**même fichier utilisé sur les 2 pages**) |
| Qu'est-ce que la kinésiologie ? | `test-musculaire-kinesiologie.jpg` | Paysage 3:2 | 1200 × 800 px | Le test musculaire en situation (main sur le bras) |
| Pour qui ? | `seance-kinesiologie-famille.jpg` | Paysage 16:9 | 1600 × 900 px | Ambiance famille / générations (enfant, adulte, senior) |
| Déroulement d'une séance | `salle-seance-kinesiologie-cabinet.jpg` | Paysage 3:2 | 1200 × 800 px | La salle de séance (table de pratique, ambiance apaisante) |
| Kinésiologie appliquée | `seance-kinesiologie-appliquee.jpg` | Paysage 3:2 | 1200 × 800 px | Geste d'équilibration, points réflexes |
| Techniques réflexes | `reflexologie-cranio-sacree-soin.jpg` | Paysage 3:2 | 1200 × 800 px | Soin réflexe en situation (mains, toucher léger) |
| Soins énergétiques & sonores | `bols-tibetains-soin-sonore.jpg` | Paysage 3:2 | 1200 × 800 px | Bols tibétains / diapasons, gros plan, lumière douce |
| Tarifs & mutuelles | `accueil-cabinet-kinesiologie.jpg` | Paysage 16:9 | 1600 × 900 px | Espace d'accueil / détail chaleureux du cabinet |
| Le cabinet & accès | `cabinet-kinesiologie-interieur.jpg` | Paysage 3:2 | 1200 × 800 px | L'intérieur du cabinet |
| Le cabinet & accès | `entree-cabinet-parking-andrezieux.jpg` | Paysage 3:2 | 1200 × 800 px | L'entrée / la façade avec le parking |

**Soit 11 fichiers à fournir** (le portrait sert deux fois), en 3 formats seulement :
- **Portrait 4:5** — 800 × 1000 px
- **Paysage 3:2** — 1200 × 800 px
- **Panoramique 16:9** — 1600 × 900 px

## Préparation des fichiers (important pour le SEO et la vitesse)

- **Poids** : viser moins de 200 Ko par photo (300 Ko maximum pour les panoramiques). Un site rapide est mieux classé par Google, surtout sur mobile. Outil gratuit simple : [squoosh.app](https://squoosh.app) (glisser la photo, choisir la qualité ~80 %, exporter).
- **Format de fichier** : JPEG (`.jpg`) convient très bien. Le WebP est encore plus léger si l'outil le propose — dans ce cas adapter l'extension dans la balise `<img>`.
- **Noms de fichiers** : ne pas les changer — ils contiennent les mots-clés (kinésiologie, Andrézieux…) et participent au référencement. Pas d'accents, d'espaces ni de majuscules dans un nom de fichier.
- **Balises `alt`** : déjà rédigées dans les commentaires HTML — elles décrivent la photo pour Google et pour les personnes malvoyantes. Les conserver, ou les ajuster si la photo montre autre chose.
- **`width`/`height`** : déjà renseignés dans les balises — ils évitent que la page « saute » pendant le chargement (critère Core Web Vitals). Si vous recadrez à d'autres dimensions, mettre à jour ces deux valeurs.
- **`loading="lazy"`** : déjà en place — les photos ne se chargent que lorsqu'on fait défiler la page jusqu'à elles.

## Après la mise en ligne des photos

Deux petits bonus SEO à faire une fois les photos réelles en place :

1. **JSON-LD** : ajouter dans le script `LocalBusiness` de chaque page une ligne
   `"image": "https://catherine-bruyere-kinesiologue.fr/assets/img/cabinet-kinesiologie-andrezieux-boutheon.jpg",`
   (sous la ligne `"url"`), pour que Google associe une image à la fiche du cabinet.
2. **Balise Open Graph** : sur chaque page, ajouter sous les balises `og:` existantes
   `<meta property="og:image" content="https://catherine-bruyere-kinesiologue.fr/assets/img/…">`
   avec la photo principale de la page — c'est l'image affichée quand on partage le lien sur WhatsApp, Facebook, etc.
3. **Google Business Profile** : téléverser les mêmes photos (cabinet, entrée, parking) sur la fiche Google du cabinet — c'est le levier le plus fort pour le référencement local.
