
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
}

interface SchoolRegistrationProps {
  programs: Program[];
  registrationInfo: RegistrationInfo;
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
        
        {schoolParcours.map(parcours => (
          <TabsContent key={parcours} value={parcours}>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">
                  <div className="mt-2">Modalités pour {parcours}</div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Processus d'admission</h3>
                  <p className="text-gray-600">{registrationInfo.process}</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Documentation requise</h3>
                  <ul className="list-disc list-inside text-gray-600">
                    {registrationInfo.requirements.map((req, index) => (
                      <li key={index} className="mb-1">{req}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-col sm:flex-row justify-between sm:items-center p-4 bg-gray-50 rounded-lg mt-6">
                  <div className="mb-2 sm:mb-0">
                    <span className="font-semibold">Date limite:</span> {registrationInfo.deadline}
                  </div>
                  <div>
                    <span className="font-semibold">Frais de scolarité:</span> {registrationInfo.fees}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
};

export default SchoolRegistration;
