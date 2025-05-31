
import { supabase } from '../lib/supabaseClient';

const sampleArticles = [
  {
    title: "École Supérieure de Commerce et Management - Nouvelle Formation en Marketing Digital",
    content: "Découvrez notre nouvelle formation en Marketing Digital ! Formation certifiante de 2 ans avec stages en entreprise. Nos étudiants bénéficient d'un accompagnement personnalisé et d'un réseau professionnel solide. Taux d'insertion professionnelle : 95%. Candidatures ouvertes jusqu'au 30 juin. Venez nous rencontrer lors de nos journées portes ouvertes tous les samedis de 9h à 17h."
  },
  {
    title: "Institut de Technologies Avancées - Cursus Ingénieur en Intelligence Artificielle",
    content: "Rejoignez notre cursus d'ingénieur en Intelligence Artificielle ! Formation de 5 ans avec spécialisation en Machine Learning et Deep Learning. Laboratoires équipés des dernières technologies, partenariats avec les grandes entreprises tech. Bourses d'excellence disponibles. Stage obligatoire à l'étranger en 4ème année. Inscriptions ouvertes sur Parcoursup et candidatures directes acceptées."
  },
  {
    title: "École Internationale de Design - Programme Bachelor Design Graphique",
    content: "Libérez votre créativité avec notre Bachelor Design Graphique ! Formation en 3 ans alliant théorie et pratique. Ateliers avec des professionnels reconnus, projets réels avec des clients. Matériel professionnel mis à disposition (Mac, tablettes graphiques, logiciels Adobe). Possibilité d'alternance en 3ème année. Venez découvrir nos installations lors de nos portes ouvertes le premier samedi de chaque mois."
  },
  {
    title: "Université Business School - MBA Executive en Management International",
    content: "Accélérez votre carrière avec notre MBA Executive ! Programme intensif de 18 mois pour cadres expérimentés. Cours en français et anglais, séminaires internationaux inclus. Corps professoral composé d'experts internationaux et de dirigeants d'entreprise. Réseau alumni de plus de 10 000 diplômés dans le monde. Sessions d'information tous les mercredis à 18h30."
  },
  {
    title: "École d'Ingénieurs NOVA - Spécialisation Énergies Renouvelables",
    content: "Construisez l'avenir énergétique avec notre formation d'ingénieur ! Spécialisation en énergies renouvelables et développement durable. Projets innovants en partenariat avec EDF, Total Énergies et startups greentech. Formation en apprentissage possible. Campus éco-responsable avec laboratoires de recherche de pointe. Découvrez nos formations lors de notre salon virtuel le 15 de chaque mois."
  }
];

export const seedBlogArticles = async () => {
  try {
    console.log('Ajout des articles de blog...');
    
    const { data, error } = await supabase
      .from('Articles')
      .insert(sampleArticles)
      .select();

    if (error) {
      console.error('Erreur lors de l\'ajout des articles:', error);
      return false;
    }

    console.log('Articles ajoutés avec succès:', data);
    return true;
  } catch (error) {
    console.error('Erreur lors de l\'insertion:', error);
    return false;
  }
};
