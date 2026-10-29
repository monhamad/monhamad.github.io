import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// Dépôt « monhamad.github.io » : base '/'. Pour un dépôt de projet, mettre '/nom-du-depot/'.
export default defineConfig({ plugins: [react()], base: '/' });
