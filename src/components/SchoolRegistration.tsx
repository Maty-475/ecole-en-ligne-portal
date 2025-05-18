
import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface RegistrationInfo {
  description?: string;
  process?: string;
  procedure?: string[];
  requirements?: string[];
  deadline?: string;
  fees?: string;
  scholarships?: boolean;
  contact?: {
    phone?: string;
    email?: string;
  };
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
  registrationInfo: Record<string, RegistrationInfo>; // Information d'inscription par parcours
  schoolName: string; // Nom de l'école
  schoolContact: {
    phone?: string;
    email?: string;
  };
}

const SchoolRegistration: React.FC<SchoolRegistrationProps> = ({ programs, registrationInfo, schoolName, schoolContact }) => {
  // Les parcours standardisés
  const standardParcours = ["Technicien", "Technicien Spécialisé", "Licence", "Master"];
  
  // Filtrer pour n'afficher que les parcours qui existent dans cette école
  const availableParcours = standardParcours.filter(parcours => 
    programs.some(program => program.parcours === parcours)
  );
  
  // Si aucun parcours standardisé n'est trouvé, utiliser "Tous les parcours"
  const schoolParcours = availableParcours.length > 0 ? availableParcours : ["Tous les parcours"];
  
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
          // Utiliser les informations d'inscription spécifiques au parcours si disponibles,
          // sinon utiliser les informations générales "Tous les parcours"
          const parcoursRegistrationInfo = registrationInfo[parcours] || registrationInfo["Tous les parcours"] || {};
          
          return (
            <TabsContent key={parcours} value={parcours}>
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">
                    <div className="mt-2">Modalités d'inscription pour {parcours} à {schoolName}</div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {parcoursRegistrationInfo.description && (
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Description</h3>
                      <p className="text-gray-600">{parcoursRegistrationInfo.description}</p>
                    </div>
                  )}
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Processus d'admission</h3>
                    <ul className="list-disc list-inside text-gray-600">
                      {parcoursRegistrationInfo.procedure?.map((proc, index) => (
                        <li key={index} className="mb-1">{proc}</li>
                      )) || 
                      <li>Information non disponible</li>}
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg mt-6">
                    <h3 className="text-lg font-semibold mb-2">Contact pour les admissions</h3>
                    <div className="mb-2">
                      <span className="font-semibold">Téléphone :</span> {parcoursRegistrationInfo.contact?.phone || schoolContact.phone || "Information non disponible"}
                    </div>
                    <div className="mb-2">
                      <span className="font-semibold">Email :</span> {parcoursRegistrationInfo.contact?.email || schoolContact.email || "Information non disponible"}
                    </div>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg mt-6">
                    <div className="mb-2">
                      <span className="font-semibold">Date limite d'inscription :</span> {parcoursRegistrationInfo.deadline || "Contacter l'établissement"}
                    </div>
                    
                    <div className="mb-2">
                      <span className="font-semibold">Frais de Scolarité et D'inscription :</span> {parcoursRegistrationInfo.fees || "Contacter l'établissement pour plus d'informations"}
                    </div>
                    
                    {parcoursRegistrationInfo.scholarships !== undefined && (
                      <div className="mb-2">
                        <span className="font-semibold">Bourses disponibles :</span> {parcoursRegistrationInfo.scholarships ? "Oui" : "Non"} (vérifier à l'école)
                      </div>
                    )}
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
