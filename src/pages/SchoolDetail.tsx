
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { schools } from '../data/schools';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SchoolDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const school = schools.find(school => school.id === id);
  
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
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Bannière de l'école */}
        <div className="bg-primary py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center mb-6">
              <div className="bg-white p-2 rounded-lg shadow-md mb-6 md:mb-0 md:mr-8">
                <img 
                  src={school.logo} 
                  alt={`Logo de ${school.name}`} 
                  className="w-32 h-32 object-contain"
                />
              </div>
              <div className="text-center md:text-left text-white">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">{school.name}</h1>
                <p className="text-lg md:text-xl opacity-90">{school.description}</p>
              </div>
            </div>
            
            <div className="mt-6">
              <Link 
                to="/"
                className="inline-flex items-center text-white hover:text-secondary transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Retour à la liste des établissements
              </Link>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Colonne principale */}
            <div className="lg:col-span-2">
              {/* Section: Programmes */}
              <section className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-bold text-primary mb-6 pb-3 border-b">
                  Programmes disponibles
                </h2>
                
                <div className="space-y-6">
                  {school.programs.map(program => (
                    <div key={program.id} className="border-l-4 border-secondary pl-4">
                      <h3 className="text-xl font-semibold mb-2">{program.name}</h3>
                      <p className="text-gray-600 mb-2">{program.description}</p>
                      <p className="text-sm text-gray-500">
                        Durée: <span className="font-medium">{program.duration}</span>
                      </p>
                    </div>
                  ))}
                </div>
              </section>
              
              {/* Section: Modalités d'inscription */}
              <section className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-primary mb-6 pb-3 border-b">
                  Modalités d'inscription
                </h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Processus d'admission</h3>
                    <p className="text-gray-600">{school.registrationInfo.process}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Conditions requises</h3>
                    <ul className="list-disc list-inside text-gray-600">
                      {school.registrationInfo.requirements.map((req, index) => (
                        <li key={index} className="mb-1">{req}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center p-4 bg-gray-50 rounded-lg mt-6">
                    <div className="mb-2 sm:mb-0">
                      <span className="font-semibold">Date limite:</span> {school.registrationInfo.deadline}
                    </div>
                    <div>
                      <span className="font-semibold">Frais de scolarité:</span> {school.registrationInfo.fees}
                    </div>
                  </div>
                </div>
              </section>
            </div>
            
            {/* Barre latérale */}
            <div>
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h3 className="text-xl font-bold text-primary mb-4 pb-2 border-b">
                  Coordonnées
                </h3>
                
                <div className="space-y-3">
                  <p className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-secondary" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span>{school.address}</span>
                  </p>
                  
                  <p className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-secondary" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span>{school.contact.phone}</span>
                  </p>
                  
                  <p className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-secondary" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span>{school.contact.email}</span>
                  </p>
                  
                  {school.contact.website && (
                    <p className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-secondary" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
                      </svg>
                      <a 
                        href={`https://${school.contact.website}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        {school.contact.website}
                      </a>
                    </p>
                  )}
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-primary mb-4 pb-2 border-b">
                  Explorer plus
                </h3>
                
                <div className="space-y-3">
                  {schools
                    .filter(s => s.id !== school.id)
                    .slice(0, 3)
                    .map(s => (
                      <Link 
                        key={s.id}
                        to={`/school/${s.id}`}
                        className="block p-3 border border-gray-200 rounded hover:bg-gray-50 transition-colors"
                      >
                        <div className="font-medium text-primary">{s.name}</div>
                        <div className="text-sm text-gray-500 mt-1">
                          {s.programs.length} programme{s.programs.length > 1 ? 's' : ''}
                        </div>
                      </Link>
                    ))
                  }
                  
                  <div className="pt-2">
                    <Link 
                      to="/"
                      className="text-secondary hover:underline font-medium flex items-center"
                    >
                      Voir tous les établissements
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SchoolDetail;
