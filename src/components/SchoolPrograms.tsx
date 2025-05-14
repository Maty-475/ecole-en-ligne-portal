
import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

interface Program {
  id: string;
  name: string;
  description: string;
  debouche: string;
  duration: string;
  category: string;
  cycle: string;
  parcours: string;
}

interface SchoolProgramsProps {
  programs: Program[];
}

const SchoolPrograms: React.FC<SchoolProgramsProps> = ({ programs }) => {
  // Obtenir les cycles disponibles
  const availableCycles = [...new Set(programs.map(program => program.cycle))];

  return (
    <section className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-2xl font-bold text-primary mb-6 pb-3 border-b">
        Programmes disponibles
      </h2>
      
      {availableCycles.length > 0 && (
        <Tabs defaultValue={availableCycles[0]} className="w-full">
          <TabsList className="w-full mb-6 grid grid-cols-2 md:grid-cols-3 lg:flex">
            {availableCycles.map(cycle => (
              <TabsTrigger 
                key={cycle} 
                value={cycle}
                className="flex-1 whitespace-normal text-center py-2"
              >
                {cycle}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {availableCycles.map(cycle => (
            <TabsContent key={cycle} value={cycle}>
              <div className="space-y-6">
                {programs
                  .filter(program => program.cycle === cycle)
                  .map(program => (
                    <div key={program.id} className="border-l-4 border-secondary pl-4">
                      <h3 className="text-xl font-semibold mb-2">{program.name}</h3>
                      <h6 className="text font-bold text-primary mb-6 pb-3 border-b">
                        <span className="font-medium"> Parcours : </span>{program.parcours}
                      </h6>
                      <p className="text-gray-600 mb-2">{program.description}</p>
                      <div className="flex flex-wrap gap-3">
                        <p className="text-sm bg-gray-100 px-2 py-1 rounded">
                          <span className="font-medium">Durée :</span> {program.duration}
                        </p>
                        <p className="text-sm bg-gray-100 px-2 py-1 rounded">
                          <span className="font-medium">Catégorie :</span> {program.category}
                        </p>
                         <p className="text-sm bg-gray-100 px-2 py-1 rounded">
                          <span className="font-medium">Debouchés :</span> {program.debouche}
                        </p>
                      </div>
                    </div>
                  ))
                }
              </div>
            </TabsContent>
          ))}
        </Tabs>
      )}
    </section>
  );
};

export default SchoolPrograms;
