
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { schools } from '../data/schools';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SchoolBanner from '../components/SchoolBanner';
import SchoolPrograms from '../components/SchoolPrograms';
import SchoolVideo from '../components/SchoolVideo';
import SchoolRegistration from '../components/SchoolRegistration';
import SchoolSidebar from '../components/SchoolSidebar';

// Interface locale pour les composants qui attendent une structure différente
interface ProgramForComponent {
  id: string;
  name: string;
  description: string;
  category: string;
  parcours: string;
  cycle: string;
  duration: string;
  diploma?: string;
  debouche?: string;
  objectives?: string[];
  skillsDeveloped?: string[];
}

interface RegistrationInfoForComponent {
  description?: string;
  procedure?: string[];
  fees?: string;
  process?: string;
  deadline?: string;
  requirements?: string[];
  scholarships?: boolean;
  contact?: {
    phone?: string;
    email?: string;
  };
}

const SchoolDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const school = schools.find(school => school.id === id);
  
  // Si l'école n'existe pas, afficher un message
  if (!school) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center p-8">
            <h2 className="text-2xl font-bold mb-4">Établissement non trouvé</h2>
            <p className="mb-4">L'établissement que vous recherchez n'existe pas.</p>
            <Link 
              to="/"
              className="bg-primary hover:bg-primary/90 text-white py-2 px-4 rounded-md"
            >
              Retour à l'accueil
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  // Use school video URL or fallback to the default one
  const schoolVideoUrl = school.video || "https://www.youtube.com/watch?v=c8jZRuMTiDQ&list=PLwenwdaZUv6J1BLlVcI6xF44EBaWtsHh3";
  
  // Select related schools (excluding the current school)
  const relatedSchools = schools
    .filter(s => s.id !== school.id)
    .slice(0, 3);
  
  // Standardiser les parcours à uniquement: Technicien, Technicien Spécialisé, Licence, Master
  const programsForComponents: ProgramForComponent[] = school.programs.map(program => {
    // Déterminer le parcours standard en fonction du niveau/cycle
    let standardParcours = "Technicien Spécialisé"; // valeur par défaut
    
    if (program.niveau === "Technicien" || program.cycle === "Technicien") {
      standardParcours = "Technicien";
    } else if (program.niveau === "Technicien Spécialisé" || program.cycle === "Cycle Initial") {
      standardParcours = "Technicien Spécialisé";
    } else if (program.niveau === "Licence" || program.cycle === "Licence") {
      standardParcours = "Licence";
    } else if (program.niveau === "Master" || program.cycle === "Master") {
      standardParcours = "Master";
    }

    return {
      id: Math.random().toString(36).substring(2, 9),
      name: program.name,
      description: program.description,
      category: program.category,
      parcours: standardParcours, // Utiliser uniquement le parcours standardisé
      cycle: program.cycle,
      duration: program.duration,
      diploma: program.diploma,
      debouche: program.opportunities && program.opportunities.length > 0 ? program.opportunities.join(", ") : "",
      objectives: program.objectives,
      skillsDeveloped: program.skillsDeveloped
    };
  });
  
  // Configurer les informations d'inscription standardisées pour tous les parcours
  const registrationInfoByParcours: Record<string, RegistrationInfoForComponent> = {
    "Technicien": {
      description:
        "Les inscriptions pour le cycle Technicien ouvrent chaque année du 1ᵉʳ juin au 30 septembre. Les dossiers peuvent être déposés en ligne ou au bureau des admissions.",
      procedure: [
        "Remplir le formulaire de candidature en ligne",
        "Attestation de scolarité de la classe terminale",
        "Relevé de notes de la classe terminale",
        "Copie de la carte d'identité ou passeport",
        "Frais de dossier",
        "Entretien pédagogique (si requis)"
      ],
      fees: "18000",
      scholarships: true,
      contact: {
        phone: "+212 5 22 27 96 00",
        email: "admission-technicien@groupemiage.net"
      }
    },
    "Technicien Spécialisé": {
      description:
        "Le cycle Technicien Spécialisé accueille les candidats titulaires d'un baccalauréat. Les inscriptions s'effectuent du 1ᵉʳ juin au 30 septembre chaque année.",
      procedure: [
        "Formulaire de candidature en ligne dûment complété",
        "Baccalauréat original + copies certifiées conformes",
        "Relevés de notes du baccalauréat",
        "Copie de la carte d'identité ou passeport",
        "Curriculum vitæ (facultatif mais recommandé)",
        "Lettre de motivation précisant votre projet professionnel",
        "Frais de dossier",
        "Entretien de sélection avec le coordinateur pédagogique"
      ],
      fees: "22000",
      scholarships: true,
      contact: {
        phone: "+212 5 22 27 96 01",
        email: "admission-ts@groupemiage.net"
      }
    },
    "Licence": {
      description:
        "Pour le cycle Licence / Bachelor, deux voies sont possibles : entrée en 1ʳᵉ année après le baccalauréat ou admission parallèle en 3ᵉ année après un Bac + 2. Les inscriptions sont ouvertes du 1ᵉʳ juin au 30 septembre.",
      procedure: [
        "Formulaire d'inscription en ligne",
        "Baccalauréat ou diplôme Bac + 2 (DUT, BTS, DEUG…) + relevés de notes certifiés",
        "Photocopie légalisée de la carte d'identité ou passeport",
        "Lettre de motivation détaillant vos objectifs académiques et professionnels",
        "Curriculum vitæ",
        "Deux photos d'identité récentes",
        "Frais de dossier",
        "Entretien individuel (présentiel ou visio)",
        "Test de positionnement (langues ou logique selon filière)"
      ],
      fees: "30000",
      scholarships: true,
      contact: {
        phone: "+212 5 22 27 96 02",
        email: "admission-licence@groupemiage.net"
      }
    },
    "Master": {
      description:
        "Le cycle Master propose une admission en 1ʳᵉ année pour les titulaires d'un Bac + 2 et une admission directe en Master 2 pour les détenteurs d'une Licence ou Bachelor pertinent. Dépôt des dossiers du 1ᵉʳ juin au 30 septembre.",
      procedure: [
        "Formulaire de demande d'admission",
        "Diplôme Bac + 2 ou Licence/Bachelor + relevés de notes certifiés",
        "Lettre de motivation exposant votre projet professionnel",
        "Curriculum vitæ détaillé",
        "Deux lettres de recommandation académiques ou professionnelles",
        "Copie légalisée de la carte d'identité ou passeport",
        "Projet de mémoire ou étude de cas (selon spécialité)",
        "Frais de dossier",
        "Entretien de sélection",
        "Test de langue ou test technique (si requis)"
      ],
      fees: "35000",
      scholarships: true,
      contact: {
        phone: "+212 5 22 27 96 03",
        email: "admission-master@groupemiage.net"
      }
    }
  };
  
  // Si l'école a des informations d'inscription spécifiques par parcours, les utiliser
  // pour remplacer ou compléter les informations standardisées
  if (school.registrationInfo) {
    Object.keys(school.registrationInfo).forEach(parcours => {
      if (parcours !== "Tous les parcours" && registrationInfoByParcours[parcours]) {
        const schoolInfo = school.registrationInfo[parcours];
        if (schoolInfo) {
          // Fusionner avec les infos standardisées en conservant les infos spécifiques de l'école
          registrationInfoByParcours[parcours] = {
            ...registrationInfoByParcours[parcours],
            ...(schoolInfo.description ? { description: schoolInfo.description } : {}),
            ...(schoolInfo.procedure ? { procedure: schoolInfo.procedure } : {}),
            ...(schoolInfo.fees ? { fees: schoolInfo.fees.toString() } : {})
          };
        }
      }
    });
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Bannière de l'école */}
        <SchoolBanner 
          logo={school.logo} 
          name={school.name} 
          description={school.description} 
          website={school.contact.website || ''} 
        />
        
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Colonne principale */}
            <div className="lg:col-span-2">
              {/* Section: Programmes avec onglets par cycle */}
              <SchoolPrograms 
                programs={programsForComponents} 
              />
              
              {/* Section: Présentation vidéo YouTube */}
              <SchoolVideo 
                videoUrl={schoolVideoUrl} 
                schoolName={school.name} 
              />
              
              {/* Section: Modalités d'inscription par parcours */}
              <SchoolRegistration 
                programs={programsForComponents} 
                registrationInfo={registrationInfoByParcours} 
              />
            </div>
            
            {/* Barre latérale */}
            <div>
              <SchoolSidebar 
                school={{
                  address: school.address,
                  contact: {
                    phone: school.contact.phone,
                    email: school.contact.email,
                    website: school.contact.website || ''
                  }
                }} 
                relatedSchools={relatedSchools} 
              />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SchoolDetail;
