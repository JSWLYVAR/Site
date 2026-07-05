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
mentions-legales.html                         Squelette à compléter (SIRET, contacts…)
404.html                                      Page d'erreur personnalisée GitHub Pages
assets/
  css/style.css                               Feuille de style partagée (couleurs, typos Marcellus/Karla, composants)
  js/main.js                                  Menu mobile, sous-menus, carte Google à consentement
  fonts/                                      Polices auto-hébergées (RGPD : aucun appel aux serveurs Google)
  img/favicon.svg
robots.txt, sitemap.xml, CNAME
.github/workflows/deploy.yml                  Déploiement automatique GitHub Pages
```

La maquette d'origine (`accueil-catherine-bruyere.html`) a été retirée du site pour éviter le contenu dupliqué ; elle reste consultable dans l'historique git (`git show ff5eb22:accueil-catherine-bruyere.html`).

## Aperçu en local

Aucun outil de build n'est nécessaire : ouvrez `index.html` dans un navigateur, ou lancez un petit serveur statique pour un rendu fidèle (chemins relatifs, fetch, etc.) :

```bash
python -m http.server 8000
# puis ouvrir http://localhost:8000
```

## SEO

- Chaque page a un `<title>` et une `<meta name="description">` uniques.
- Balises `og:*` de base + `rel="canonical"` par page.
- JSON-LD `LocalBusiness` (adresse, horaires, GPS) sur chaque page + `BreadcrumbList` sur les pages intérieures + `FAQPage` sur la page « Qu'est-ce que la kinésiologie ».
- `sitemap.xml` et `robots.txt` prêts à l'emploi.
- Polices auto-hébergées et carte Google chargée après consentement (RGPD, et meilleur score de vitesse).

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
- Photos (voir `PHOTOS.md` pour la liste et les formats)
- Champs `[À COMPLÉTER]` de `mentions-legales.html` (statut, SIRET, contacts)
- Coordonnées GPS du JSON-LD : actuellement 45.5242 / 4.2711 (niveau rue) — affiner au bâtiment via clic droit sur Google Maps si besoin
- Tableau des mutuelles partenaires (`tarifs-mutuelles.html`) — à confirmer avec les partenaires réels
- Témoignages (`index.html`, `qui-suis-je.html`) : exemples fictifs issus de la maquette, à remplacer par de vrais avis clients (avec leur accord) avant la mise en ligne
