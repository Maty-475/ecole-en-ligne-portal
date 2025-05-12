
import React from 'react';
import { schools } from '../data/schools';
import SchoolCard from '../components/SchoolCard';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-primary to-primary/80 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Trouvez l'établissement parfait pour votre avenir
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Explorez les programmes, modalités d'inscription et parcours de nos établissements partenaires.
            </p>
          </div>
        </section>
        
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary">
              Nos établissements
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {schools.map(school => (
                <SchoolCard key={school.id} school={school} />
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8 text-primary">
              Pourquoi choisir notre plateforme ?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="p-6 rounded-lg border border-gray-200 shadow-sm">
                <div className="text-4xl mb-4 text-secondary">📚</div>
                <h3 className="text-xl font-semibold mb-3">Information complète</h3>
                <p className="text-gray-600">
                  Accédez à toutes les informations nécessaires pour faire un choix éclairé.
                </p>
              </div>
              
              <div className="p-6 rounded-lg border border-gray-200 shadow-sm">
                <div className="text-4xl mb-4 text-secondary">🔍</div>
                <h3 className="text-xl font-semibold mb-3">Navigation facile</h3>
                <p className="text-gray-600">
                  Une interface intuitive pour passer facilement d'un établissement à l'autre.
                </p>
              </div>
              
              <div className="p-6 rounded-lg border border-gray-200 shadow-sm">
                <div className="text-4xl mb-4 text-secondary">🚀</div>
                <h3 className="text-xl font-semibold mb-3">Mise à jour régulière</h3>
                <p className="text-gray-600">
                  Des informations toujours à jour sur les programmes et modalités d'inscription.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
