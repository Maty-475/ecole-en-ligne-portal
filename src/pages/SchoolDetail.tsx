
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
  
  // Adapter les informations d'inscription pour qu'elles soient au bon format
  const registrationInfoByParcours: Record<string, RegistrationInfoForComponent> = {};
  
  // Si l'école a des informations d'inscription spécifiques par parcours, les utiliser
  // Sinon, utiliser les informations générales pour tous les parcours standardisés
  const standardParcours = ["Technicien", "Technicien Spécialisé", "Licence", "Master"];
  
  standardParcours.forEach(parcours => {
    if (school.registrationInfo[parcours]) {
      // Utiliser les informations spécifiques au parcours si elles existent
      const info = school.registrationInfo[parcours];
      registrationInfoByParcours[parcours] = {
        ...info,
        fees: info.fees?.toString() || "",
      };
    } else if (school.registrationInfo["Tous les parcours"]) {
      // Sinon, copier les informations générales pour ce parcours
      const info = school.registrationInfo["Tous les parcours"];
      registrationInfoByParcours[parcours] = {
        ...info,
        fees: info.fees?.toString() || "",
      };
    } else {
      // Si aucune information n'est disponible, créer une entrée vide
      registrationInfoByParcours[parcours] = {
        description: "Information non disponible",
        procedure: ["Information non disponible"],
        fees: "Non spécifié",
      };
    }
  });
  
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
