
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
  niveau?: string;
  diploma?: string;
  debouche?: string;
  admissionRequirements?: string[];
  objectives?: string[];
  skillsDeveloped?: string[];
}

interface RegistrationInfoForComponent {
  deadline: string;
  requirements: string[];
  fees: string;
  process: string;
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
  
  // Adapter les programmes pour les composants en conservant toutes les données
  const programsForComponents: ProgramForComponent[] = school.programs.map(program => ({
    id: Math.random().toString(36).substring(2, 9),
    name: program.name,
    description: program.description,
    category: program.category,
    parcours: program.parcours,
    cycle: program.cycle,
    niveau: program.niveau,
    duration: program.duration,
    diploma: program.diploma,
    debouche: program.opportunities && program.opportunities.length > 0 ? program.opportunities.join(", ") : "",
    admissionRequirements: program.admissionRequirements,
    objectives: program.objectives,
    skillsDeveloped: program.skillsDeveloped
  }));
  
  // Adapter les informations d'inscription pour les composants
  const registrationInfoForComponent: RegistrationInfoForComponent = {
    deadline: typeof school.registrationInfo["Tous les parcours"] === 'object' ? 
      school.registrationInfo["Tous les parcours"].description || "" : "",
    requirements: typeof school.registrationInfo["Tous les parcours"] === 'object' ? 
      school.registrationInfo["Tous les parcours"].procedure || [] : [],
    fees: typeof school.registrationInfo["Tous les parcours"] === 'object' ? 
      `${school.registrationInfo["Tous les parcours"].fees} MAD` : "",
    process: typeof school.registrationInfo["Tous les parcours"] === 'object' ? 
      school.registrationInfo["Tous les parcours"].procedure?.join(", ") || "" : ""
  };
  
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
                registrationInfo={registrationInfoForComponent} 
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
