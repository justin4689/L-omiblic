# Site web L'OMBILIC

Site vitrine du cabinet **L'OMBILIC SARL** — cabinet multidisciplinaire basé à Abidjan
(assistance comptable & fiscale, études & conseil, commerce & distribution, prestations agricoles).

> 👉 **Tu dois modifier quelque chose ?** Va directement dans **[GUIDE-MODIFICATION.md](GUIDE-MODIFICATION.md)**.
> Ce fichier explique, cas par cas, quel fichier ouvrir et quoi changer.

---

## 1. C'est quoi, techniquement ?

Un site **100 % statique** : que du **HTML + CSS + un petit fichier JavaScript**.

- ❌ Pas de framework (pas de React, Vue, Angular…)
- ❌ Pas de build, pas de `npm install`, pas de compilation
- ❌ Pas de serveur backend, pas de base de données
- ✅ Tu ouvres un fichier `.html`, tu modifies le texte, tu enregistres, c'est fait.

Les seules ressources externes chargées depuis Internet (via CDN) sont :
- **Google Fonts** : polices *Playfair Display* (titres) et *Poppins* (texte)
- **Font Awesome 6.5** : les icônes (`<i class="fa-solid fa-...">`)

Une connexion Internet est donc nécessaire pour voir les polices et les icônes correctement.

---

## 2. Comment lancer le site en local

**Le plus simple :** double-clique sur `index.html` → il s'ouvre dans le navigateur.

**Recommandé (avec VS Code) :** installe l'extension **Live Server**, puis clic droit sur
`index.html` → *"Open with Live Server"*. Le site se recharge tout seul à chaque
enregistrement. Le port est déjà configuré (`5501`) dans `.vscode/settings.json`.

> ⚠️ Certaines images utilisent des chemins absolus commençant par `/` (ex. `/assets/images/Logo_1.jpeg`).
> Elles s'affichent correctement avec Live Server ou un vrai hébergement, mais **peuvent ne pas
> s'afficher en double-cliquant directement** sur le fichier (protocole `file://`).
> Pour un rendu fidèle, utilise toujours Live Server.

---

## 3. Structure des fichiers

```
L-omiblic/
│
├── index.html               → Page d'accueil
├── a-propos.html            → À propos + équipe (par pôles)
├── realisations.html        → Portfolio / réalisations
├── actualites.html          → Actualités & ressources
├── contact.html             → Page contact + formulaire
├── devis.html               → Demande de devis + formulaire
│
├── services-comptable.html  → Service : assistance comptable & fiscale
├── services-etudes.html     → Service : études, conseil & formation
├── services-commerce.html   → Service : commerce & distribution
├── services-agricole.html   → Service : prestations agricoles
│
├── assets/
│   ├── css/
│   │   └── style.css        → TOUT le style du site (un seul fichier)
│   ├── js/
│   │   └── reveal.js        → Animation d'apparition au scroll
│   └── images/              → Toutes les images
│       ├── Logo_1.jpeg, Logo_2.jpeg, hero1.jpg, hero2.jpg
│       ├── team/            → Photos de l'équipe
│       ├── realisations/    → Photos du portfolio
│       └── actualites/      → Images des articles
│
├── README.md                → Ce fichier
└── GUIDE-MODIFICATION.md    → Le mode d'emploi "quoi modifier"
```

**Les 3 fichiers importants à retenir :**

| Fichier | Rôle |
|---|---|
| `*.html` (à la racine) | Le **contenu** de chaque page (textes, images, liens) |
| `assets/css/style.css` | Tout le **design** (couleurs, polices, mises en page) |
| `assets/js/reveal.js` | Une seule animation : les éléments apparaissent en douceur au scroll |

---

## 4. Points à connaître avant de toucher au code

1. **Le CSS est commun à toutes les pages.** Modifier `style.css` change le style
   partout. Il est découpé en sections clairement titrées (voir GUIDE).

2. **L'en-tête (topbar + menu) et le pied de page sont copiés-collés dans CHAQUE page HTML.**
   Il n'y a pas de système d'inclusion. Si tu modifies le menu ou le footer,
   tu dois le faire **dans les 10 fichiers HTML** (voir GUIDE).

3. **Les formulaires (contact & devis) ne sont PAS connectés.** Ils affichent juste
   un message de succès sans réellement envoyer d'e-mail. Il faut brancher un service
   d'envoi pour les rendre fonctionnels (voir GUIDE).

4. **Le site est en français**, langue déclarée `<html lang="fr">`.

---

## 5. Mise en ligne

Comme le site est statique, il s'héberge n'importe où sans configuration :
GitHub Pages, Netlify, Vercel, ou un simple hébergement mutualisé (FTP).
Il suffit d'envoyer tous les fichiers tels quels.

---

*Pour toute modification concrète, ouvre **[GUIDE-MODIFICATION.md](GUIDE-MODIFICATION.md)**.*
