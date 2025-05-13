
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { schools, cycles } from '../data/schools';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SchoolBanner from '../components/SchoolBanner';
import SchoolPrograms from '../components/SchoolPrograms';
import SchoolVideo from '../components/SchoolVideo';
import SchoolRegistration from '../components/SchoolRegistration';
import SchoolSidebar from '../components/SchoolSidebar';

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
  
  // Sélectionner les écoles similaires (hors l'école courante)
  const relatedSchools = schools
    .filter(s => s.id !== school.id)
    .slice(0, 3);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Bannière de l'école */}
        <SchoolBanner 
          logo={school.logo} 
          name={school.name} 
          description={school.description} 
          website={school.contact.website} 
        />
        
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Colonne principale */}
            <div className="lg:col-span-2">
              {/* Section: Programmes avec onglets par cycle */}
              <SchoolPrograms programs={school.programs} />
              
              {/* Section: Présentation vidéo YouTube */}
              <SchoolVideo />
              
              {/* Section: Modalités d'inscription par parcours */}
              <SchoolRegistration 
                programs={school.programs} 
                registrationInfo={school.registrationInfo} 
              />
            </div>
            
            {/* Barre latérale */}
            <div>
              <SchoolSidebar school={school} relatedSchools={relatedSchools} />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SchoolDetail;
