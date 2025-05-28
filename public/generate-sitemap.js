import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Pour résoudre les chemins correctement en ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 🔗 URL de base de ton site
const baseUrl = "https://www.rezocampus.fr";

// 🏫 Slugs des établissements
const schools = [
  "Groupe-Miage",
  "Best-Institut",
  "Cesa-SUP",
  "IPCS",
  "IPM"
];

// 📄 Routes statiques
const staticRoutes = [
  "/",
  "/index",
  "/about",
  "/contact"
];

// 📦 Début du fichier sitemap XML
let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n`;
sitemap += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

// 🔁 Ajouter les pages statiques
staticRoutes.forEach(route => {
  sitemap += `  <url>\n    <loc>${baseUrl}${route}</loc>\n    <changefreq>weekly</changefreq>\n  </url>\n`;
});

// 🔁 Ajouter les pages d’établissement
schools.forEach(slug => {
  sitemap += `  <url>\n    <loc>${baseUrl}/school/${slug}</loc>\n    <changefreq>monthly</changefreq>\n  </url>\n`;
});

// 📄 Fin du sitemap
sitemap += `</urlset>`;

// 📍 Chemin du fichier de sortie dans le dossier public
const outputPath = path.join(__dirname, "sitemap.xml");

// 💾 Écriture du fichier
fs.writeFileSync(outputPath, sitemap);
console.log("✅ sitemap.xml généré avec succès !");