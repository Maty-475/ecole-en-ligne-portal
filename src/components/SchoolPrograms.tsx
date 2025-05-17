
import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

interface Program {
  id: string;
  name: string;
  description: string;
  debouche?: string;
  duration: string;
  category: string;
  cycle: string;
  parcours: string;
  niveau?: string;
  diploma?: string;
  admissionRequirements?: string[];
  objectives?: string[];
  skillsDeveloped?: string[];
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
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <h6 className="text-sm font-bold text-primary mb-2">
                            <span className="font-medium">Parcours : </span>{program.parcours}
                          </h6>
                        </div>
                        {program.niveau && (
                          <div>
                            <h6 className="text-sm font-bold text-primary mb-2">
                              <span className="font-medium">Niveau : </span>{program.niveau}
                            </h6>
                          </div>
                        )}
                      </div>
                      
                      <p className="text-gray-600 mb-4">{program.description}</p>
                      
                      {program.diploma && (
                        <div className="mb-3">
                          <h4 className="text-md font-semibold">Diplôme</h4>
                          <p className="text-gray-700">{program.diploma}</p>
                        </div>
                      )}
                      
                      {program.objectives && program.objectives.length > 0 && (
                        <div className="mb-3">
                          <h4 className="text-md font-semibold">Objectifs</h4>
                          <ul className="list-disc list-inside text-gray-700 pl-2">
                            {program.objectives.map((objective, idx) => (
                              <li key={idx}>{objective}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {program.skillsDeveloped && program.skillsDeveloped.length > 0 && (
                        <div className="mb-3">
                          <h4 className="text-md font-semibold">Compétences développées</h4>
                          <ul className="list-disc list-inside text-gray-700 pl-2">
                            {program.skillsDeveloped.map((skill, idx) => (
                              <li key={idx}>{skill}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {program.admissionRequirements && program.admissionRequirements.length > 0 && (
                        <div className="mb-3">
                          <h4 className="text-md font-semibold">Conditions d'admission</h4>
                          <ul className="list-disc list-inside text-gray-700 pl-2">
                            {program.admissionRequirements.map((req, idx) => (
                              <li key={idx}>{req}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      <div className="flex flex-wrap gap-3 mt-4">
                        <p className="text-sm bg-gray-100 px-2 py-1 rounded">
                          <span className="font-medium">Durée :</span> {program.duration}
                        </p>
                        <p className="text-sm bg-gray-100 px-2 py-1 rounded">
                          <span className="font-medium">Catégorie :</span> {program.category}
                        </p>
                        {program.debouche && (
                          <p className="text-sm bg-gray-100 px-2 py-1 rounded">
                            <span className="font-medium">Débouchés :</span> {program.debouche}
                          </p>
                        )}
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
