# Guide de modification — Site L'OMBILIC

Ce guide répond à une seule question : **« Je veux changer X, quel fichier j'ouvre et quoi je touche ? »**

> Rappel : le site est en HTML/CSS pur, sans framework. Tu modifies, tu enregistres, c'est appliqué.
> Pour la vue d'ensemble du projet, voir [README.md](README.md).

## Sommaire
- [Changer un texte sur une page](#1-changer-un-texte)
- [Changer une image](#2-changer-une-image)
- [Changer les coordonnées (téléphone, email, adresse)](#3-changer-les-coordonnées)
- [Modifier le menu de navigation](#4-modifier-le-menu)
- [Modifier le pied de page (footer)](#5-modifier-le-footer)
- [Changer les couleurs / la police](#6-changer-les-couleurs-et-polices)
- [Ajouter / modifier un membre de l'équipe](#7-équipe)
- [Ajouter / modifier une réalisation](#8-réalisations)
- [Ajouter / modifier une actualité](#9-actualités)
- [Rendre les formulaires fonctionnels](#10-formulaires-contact--devis)
- [Modifier l'animation d'apparition](#11-animation-au-scroll)
- [Ajouter une nouvelle page](#12-ajouter-une-nouvelle-page)
- [Règle importante sur les chemins d'images](#13-règle-sur-les-chemins-dimages)

---

## 1. Changer un texte

Le texte visible est directement dans les fichiers `.html`. Ouvre la page concernée
(ex. `index.html` pour l'accueil), repère le texte à l'œil et modifie-le entre les balises.

```html
<h1>Le professionnalisme<br>au service de votre <span>performance</span></h1>
<p>Un cabinet multidisciplinaire fondé à Abidjan en 2024...</p>
```

- Ne touche **qu'au texte**, laisse les balises `<h1>`, `<p>`, `<span>`, `class="..."` en place.
- `<br>` = saut de ligne. `&amp;` = le caractère `&`. `&nbsp;` = espace insécable.

**Quelle page pour quel contenu ?**

| Contenu | Fichier |
|---|---|
| Accueil (hero, à propos condensé, services, témoignages) | `index.html` |
| Présentation détaillée + équipe | `a-propos.html` |
| Portfolio | `realisations.html` |
| Articles / ressources | `actualites.html` |
| Formulaire de contact | `contact.html` |
| Formulaire de devis | `devis.html` |
| Détail d'un service | `services-comptable.html`, `services-etudes.html`, `services-commerce.html`, `services-agricole.html` |

---

## 2. Changer une image

1. Dépose la nouvelle image dans le bon dossier de `assets/images/`
   (racine pour les visuels généraux, `team/`, `realisations/` ou `actualites/` selon le cas).
2. Dans le HTML, remplace le nom de fichier dans l'attribut `src` :

```html
<img src="/assets/images/team/soro-seydou.png" alt="Soro Dokatiéné Seydou">
```

- Garde le même chemin de dossier, change juste le nom du fichier.
- Mets à jour le texte `alt="..."` (description de l'image, utile pour l'accessibilité et le SEO).
- ⚠️ Attention à la casse : `Logo_1.jpeg` ≠ `logo_1.jpeg`. Respecte majuscules et extension exactes.

**Images de fond (hero, bannières) :** elles sont définies dans le CSS, pas dans le HTML.
Cherche `url(` dans `assets/css/style.css` (ex. `background-image: url('/assets/images/hero1.jpg')`).

---

## 3. Changer les coordonnées

Téléphone, e-mail et adresse apparaissent à **plusieurs endroits** (topbar, footer, page contact).
Le plus sûr : **rechercher-remplacer dans tout le projet** (dans VS Code : `Ctrl+Shift+F`).

Valeurs actuelles à rechercher :
- E-mail : `lombilicsarl@gmail.com`
- Téléphone : `+225 27 24 58 96 08`
- Adresse : `Cocody – Angré 8e Tranche`

Remplace chaque occurrence par la nouvelle valeur.

---

## 4. Modifier le menu

⚠️ **Le menu est recopié dans les 10 fichiers HTML.** Il n'y a pas de fichier unique de menu.
Toute modification (ajout d'un lien, changement d'intitulé) doit être répétée dans **chaque** page.

Le menu se trouve dans le bloc `<nav class="hero-nav">` (pages avec grand hero comme `index.html`)
ou `<nav class="page-nav">` (sous-pages). Structure d'un lien :

```html
<li><a href="a-propos.html">À propos</a></li>
```

Le sous-menu déroulant "Services" :

```html
<li class="has-dropdown">
  <a href="#services" class="dropdown-toggle">Services <i class="fa-solid fa-chevron-down"></i></a>
  <ul class="nav-dropdown">
    <li><a href="services-comptable.html">...</a></li>
    ...
  </ul>
</li>
```

> 💡 Astuce : modifie le menu dans `index.html`, teste-le, puis copie-colle le bloc `<nav>`
> dans les autres pages. Pense à ajuster la classe `nav-active` sur le lien de la page courante.

---

## 5. Modifier le footer

Comme le menu, **le pied de page est recopié dans chaque fichier HTML** (bloc `<footer class="site-footer">`).
Une modification doit être reportée partout. On y trouve : logo, liens de navigation,
liste des services, coordonnées, réseaux sociaux et la ligne légale du bas.

**Liens réseaux sociaux** — actuellement `href="#"` (inactifs). Remplace par les vraies URL :

```html
<a href="#" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
```

---

## 6. Changer les couleurs et polices

Tout est centralisé en haut de `assets/css/style.css`, dans le bloc `:root` (section *RESET & VARIABLES*).
Change une valeur ici et elle s'applique à tout le site :

```css
:root {
  --primary:      #F1B310;   /* jaune/or — couleur principale (boutons, accents) */
  --primary-dark: #c98a18;
  --secondary:    #A8CFF0;   /* bleu clair */
  --secondary-dark: #0f3d57; /* bleu foncé */

  --background: #f8fafc;     /* fond de page */
  --surface:    #ffffff;     /* fond des cartes */
  --text:       #0f172a;     /* couleur du texte */
  --text-muted: #475569;     /* texte secondaire */
  --border:     #e2e8f0;

  --radius:     8px;         /* arrondi des coins */
  --transition: 0.3s ease;
}
```

**Polices :** définies via Google Fonts dans le `<head>` de chaque page HTML
(*Playfair Display* pour les titres, *Poppins* pour le texte). Pour en changer,
modifie le `<link href="https://fonts.googleapis.com/...">` puis les
`font-family` dans le CSS.

> Le fichier `style.css` est long (~4000 lignes) mais **organisé en sections titrées**
> (`/* ===== TOPBAR ===== */`, `/* ===== HERO ===== */`, `/* ===== FOOTER ===== */`, etc.).
> Utilise `Ctrl+F` sur le nom de la section pour t'y retrouver rapidement.

---

## 7. Équipe

Fichier : **`a-propos.html`**. L'équipe est organisée par pôles. Chaque membre est une carte `team-card` :

```html
<div class="team-card">
  <div class="team-avatar">
    <img src="/assets/images/team/soro-seydou.png" alt="Soro Dokatiéné Seydou">
  </div>
  <h3>SORO Dokatiéné Seydou</h3>
  <span class="team-role">Enseignant-Chercheur en Agronomie</span>
  <ul class="team-skills">
    <li>Production végétale</li>
    <li>Lutte biologique et lutte intégrée</li>
  </ul>
</div>
```

**Pour ajouter un membre :** copie un bloc `team-card` entier, colle-le dans le bon pôle,
puis change la photo (`src` + `alt`), le nom (`<h3>`), le rôle (`team-role`) et les
compétences (les `<li>`). Dépose la photo dans `assets/images/team/`.

**Pour supprimer un membre :** supprime son bloc `<div class="team-card">...</div>` complet.

---

## 8. Réalisations

Fichier : **`realisations.html`**. Chaque projet est une carte `portfolio-card`.
Pour en ajouter une : copie une carte existante, change l'image (dans `assets/images/realisations/`),
le titre et la description. Pour supprimer : retire le bloc complet.

---

## 9. Actualités

Fichier : **`actualites.html`**. Chaque article est une carte `actu-card`.
Même principe : copie/colle un bloc, change l'image (`assets/images/actualites/`),
le titre, la date et le résumé.

---

## 10. Formulaires (contact & devis)

⚠️ **Les formulaires n'envoient AUCUN e-mail pour l'instant.** Quand on clique sur "Envoyer",
un simple message de succès s'affiche, mais rien n'est transmis. Voici le code actuel
(en bas de `contact.html` et `devis.html`) :

```html
<script>
  document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();                                    // empêche l'envoi réel
    document.getElementById('form-success').style.display = 'flex';  // affiche "envoyé !"
  });
</script>
```

**Pour les rendre fonctionnels**, deux options simples (site statique = pas de backend maison) :

**Option A — Service externe (recommandé, sans code serveur).**
Utilise un service comme **Formspree**, **Getform** ou **Web3Forms**. En pratique :
1. Crée un compte, récupère l'URL/clé du endpoint.
2. Sur la balise `<form>`, ajoute `action="https://..."` et `method="POST"`.
3. Supprime (ou adapte) le `e.preventDefault()` pour laisser l'envoi se faire.

**Option B — Lien mailto (basique).**
Ouvre le logiciel de messagerie du visiteur avec `action="mailto:lombilicsarl@gmail.com"`.
Moins fiable et moins propre, mais sans inscription.

Les deux formulaires (`id="contact-form"` et `id="devis-form"`) fonctionnent de la même façon —
applique la modification aux deux.

---

## 11. Animation au scroll

Fichier : **`assets/js/reveal.js`**. Ce script fait apparaître les éléments en fondu quand
ils entrent à l'écran. Tu n'as normalement pas besoin d'y toucher.

Il repère les éléments à animer via une liste de classes CSS (au début du fichier, tableau `selectors`).
**Si tu crées un nouveau type de bloc et qu'il doit s'animer aussi**, ajoute sa classe CSS
dans ce tableau. L'animation se désactive automatiquement si l'utilisateur a activé
"réduire les animations" dans son système (accessibilité).

---

## 12. Ajouter une nouvelle page

1. Copie un fichier existant proche de ce que tu veux (ex. `contact.html`) et renomme-le.
2. Garde le `<head>` (liens vers `assets/css/style.css`, polices, icônes) et le `<script>`
   final (`assets/js/reveal.js`).
3. Recopie l'en-tête (`<nav>`) et le footer, ou copie-les depuis une autre page.
4. Change le contenu central et le `<title>`.
5. Ajoute un lien vers ta nouvelle page dans le menu — **dans les 10 fichiers HTML** (voir §4).

---

## 13. Règle sur les chemins d'images

Toutes les images sont dans **`assets/images/`** (et ses sous-dossiers `team/`, `realisations/`, `actualites/`).

- Dans le **HTML**, les images pointent vers `/assets/images/...` ou `assets/images/...`.
- Dans le **CSS**, les fonds pointent vers `/assets/images/...` via `url(...)`.

Si tu déplaces ou renommes un dossier d'images, **toutes ces références se cassent**
et les images ne s'affichent plus. Dans ce cas, fais un rechercher-remplacer global
de l'ancien chemin vers le nouveau (`Ctrl+Shift+F` puis remplacer dans VS Code),
dans **les fichiers `.html` ET `assets/css/style.css`**.

---

*Une question non couverte ici ? Le code est volontairement simple et lisible :
ouvre le fichier concerné, le nom des classes CSS décrit ce que fait chaque bloc.*
