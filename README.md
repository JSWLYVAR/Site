# Site — Catherine Bruyère, Kinésiologue

Site statique multi-pages pour un cabinet de kinésiologie à Andrézieux-Bouthéon (Loire).

## Arborescence

```
index.html                                    Accueil
kinesiologie/
  quest-ce-que-la-kinesiologie.html
  pour-qui.html
  deroulement-seance.html
methodes/
  kinesiologie-appliquee.html
  techniques-reflexes.html
  soins-energetiques.html
qui-suis-je.html
tarifs-mutuelles.html
cabinet-acces.html
assets/
  css/style.css                               Feuille de style partagée (couleurs, typos Marcellus/Karla, composants)
  js/main.js                                  Menu mobile + sous-menus déroulants
robots.txt, sitemap.xml, CNAME
.github/workflows/deploy.yml                  Déploiement automatique GitHub Pages
```

`accueil-catherine-bruyere.html` (à la racine) est la maquette d'origine, conservée telle quelle à titre de référence.

## Aperçu en local

Aucun outil de build n'est nécessaire : ouvrez `index.html` dans un navigateur, ou lancez un petit serveur statique pour un rendu fidèle (chemins relatifs, fetch, etc.) :

```bash
python -m http.server 8000
# puis ouvrir http://localhost:8000
```

## SEO

- Chaque page a un `<title>` et une `<meta name="description">` uniques.
- Balises `og:*` de base + `rel="canonical"` par page.
- JSON-LD `LocalBusiness` inclus sur chaque page (adresse, horaires, téléphone).
- `sitemap.xml` et `robots.txt` prêts à l'emploi.

## Déploiement GitHub Pages

1. Créer un dépôt GitHub et pousser ce projet sur la branche `main` :
   ```bash
   git remote add origin git@github.com:<utilisateur>/<depot>.git
   git push -u origin main
   ```
2. Dans les paramètres du dépôt GitHub → **Settings → Pages**, choisir **Source : GitHub Actions**. Le workflow `.github/workflows/deploy.yml` déploie automatiquement le site à chaque push sur `main`.
3. Domaine personnalisé : un fichier `CNAME` (contenant `catherine-bruyere-kinesiologue.fr`) est déjà présent à la racine. Chez le registrar du domaine, configurer :
   - un enregistrement `CNAME` (ou `ALIAS`/`ANAME`) pointant `catherine-bruyere-kinesiologue.fr` (ou `www`) vers `<utilisateur>.github.io`, ou
   - des enregistrements `A` vers les IP GitHub Pages (voir la [documentation GitHub Pages](https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site)).
   Cocher ensuite « Enforce HTTPS » dans Settings → Pages une fois le certificat généré.
4. Si vous n'utilisez pas (encore) de domaine personnalisé, supprimez simplement le fichier `CNAME` : le site restera accessible via `https://<utilisateur>.github.io/<depot>/`.

## À personnaliser avant mise en ligne

Les éléments suivants sont des **placeholders** repris de la maquette d'origine, à remplacer par les vraies informations :

- Téléphone : `06 00 00 00 00` / `tel:+33600000000`
- E-mail : `contact@exemple.fr`
- Lien de prise de RDV : `https://www.resalib.fr` (à remplacer par le vrai lien Resalib ou autre plateforme)
- Photo professionnelle (bloc `.portrait` sur `index.html` et `qui-suis-je.html`)
- Coordonnées GPS du JSON-LD (`geo.latitude` / `geo.longitude`) et adresse si elles diffèrent
- Tableau des mutuelles partenaires (`tarifs-mutuelles.html`) — à confirmer avec les partenaires réels
