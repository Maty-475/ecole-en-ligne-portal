
import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface RegistrationInfo {
  process: string;
  requirements: string[];
  deadline: string;
  fees: string;
}

interface Program {
  id: string;
  name: string;
  description: string;
  duration: string;
  category: string;
  cycle: string;
  parcours: string;
  registrationInfo?: RegistrationInfo; // Information d'inscription spécifique au programme
}

interface SchoolRegistrationProps {
  programs: Program[];
  registrationInfo: RegistrationInfo; // Information d'inscription par défaut de l'école
}

const SchoolRegistration: React.FC<SchoolRegistrationProps> = ({ programs, registrationInfo }) => {
  // Obtenir les parcours uniques pour cette école
  const schoolParcours = [...new Set(programs.map(program => program.parcours))];
  
  return (
    <section className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-primary mb-6 pb-3 border-b">
        Modalités d'inscription par parcours
      </h2>
      
      <Tabs defaultValue={schoolParcours[0]} className="w-full">
        <TabsList className="w-full mb-6 grid grid-cols-2 md:grid-cols-3 lg:flex flex-wrap">
          {schoolParcours.map(parcours => (
            <TabsTrigger 
              key={parcours} 
              value={parcours}
              className="flex-1 whitespace-normal text-center py-2"
            >
              {parcours}
            </TabsTrigger>
          ))}
        </TabsList>
        
        {schoolParcours.map(parcours => {
          // Trouver le premier programme de ce parcours pour obtenir ses informations d'inscription spécifiques
          const programOfParcours = programs.find(program => program.parcours === parcours);
          
          // Utiliser les infos d'inscription spécifiques au programme si disponibles, sinon utiliser celles de l'école
          const parcoursRegistrationInfo = programOfParcours?.registrationInfo || registrationInfo;
          
          return (
            <TabsContent key={parcours} value={parcours}>
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">
                    <div className="mt-2">Modalités d'inscription pour {parcours}</div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Processus d'admission</h3>
                    <p className="text-gray-600">{parcoursRegistrationInfo.process}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Documentation requise</h3>
                    <ul className="list-disc list-inside text-gray-600">
                      {parcoursRegistrationInfo.requirements.map((req, index) => (
                        <li key={index} className="mb-1">{req}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg mt-6">
                    <div className="mb-2">
                      <span className="font-semibold">Date limite d'inscription:</span> {parcoursRegistrationInfo.deadline}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          );
        })}
      </Tabs>
    </section>
  );
};

export default SchoolRegistration;
