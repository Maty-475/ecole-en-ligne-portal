
import React, { useState } from 'react';
import { schools, categories } from '../data/schools';
import SchoolCard from '../components/SchoolCard';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const Index: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  // Filtrer les écoles en fonction de la catégorie sélectionnée
  const filteredSchools = selectedCategory 
    ? schools.filter(school => 
        school.programs.some(program => program.category === selectedCategory)
      )
    : schools;

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
            <h2 className="text-3xl font-bold text-center mb-8 text-primary">
              Toutes les formations et Etablissements Agréés par l'Etat
            </h2>
            
            <div className="flex justify-center mb-10">
              <div className="bg-white p-2 rounded-lg shadow-md">
                <ToggleGroup 
                  type="single"
                  className="flex flex-wrap justify-center gap-2"
                  value={selectedCategory || ""}
                  onValueChange={(value) => setSelectedCategory(value || null)}
                >
                  <ToggleGroupItem 
                    value="" 
                    className="rounded-md"
                  >
                    Tous
                  </ToggleGroupItem>
                  {categories.map((category) => (
                    <ToggleGroupItem 
                      key={category} 
                      value={category}
                      className="rounded-md"
                    >
                      {category}
                    </ToggleGroupItem>
                  ))}
                </ToggleGroup>
              </div>
            </div>
            
            {filteredSchools.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredSchools.map(school => (
                  <SchoolCard key={school.id} school={school} />
                ))}
              </div>
            ) : (
              <div className="text-center py-10">
                <p className="text-xl text-gray-600">
                  Aucun établissement trouvé pour cette catégorie.
                </p>
              </div>
            )}
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
