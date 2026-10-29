// GitHub Pages : une URL inconnue (ex. /fr/projects/ransomguard) renvoie 404.html, qui charge l’application.
import { copyFileSync } from 'node:fs';
copyFileSync('dist/index.html', 'dist/404.html');
