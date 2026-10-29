# Portfolio de Monhamad Ouedraogo

React + TypeScript + Vite, bilingue FR/EN (`/fr`, `/en`).

## Lancer en local
    npm install
    npm run dev        # http://localhost:5173
    npm run build      # vérifie TypeScript et construit dist/

## Personnaliser
Tout est dans `src/content.ts` : coordonnées, compétences (niveaux `practiced` / `learning` / `notions`), projets, textes FR et EN.
- CV : placer le PDF dans `public/` puis renseigner `config.cvUrl` (ex. `'/cv-monhamad-ouedraogo.pdf'`).
- Formulaire : créer un formulaire chez Formspree ou Web3Forms et coller son URL dans `config.formEndpoint`. Sans cela, un lien e-mail s’affiche à la place.

## Publier sur GitHub Pages
1. Créer le dépôt `monhamad.github.io` et y pousser ce dossier (branche `main`).
2. Settings > Pages > Source : **GitHub Actions**. Le workflow `.github/workflows/deploy.yml` construit et publie le site.
3. Si le dépôt a un autre nom, changer `base` dans `vite.config.ts` et les URL dans `index.html` et `public/sitemap.xml`.
