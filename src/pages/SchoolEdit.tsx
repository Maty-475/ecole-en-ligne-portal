
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { schools, School, Program } from '../data/schools';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

// Interface locale pour les programmes dans l'éditeur
interface ProgramForEditor {
  id: string;
  name: string;
  description: string;
  category: string;
  parcours: string;
  cycle: string;
  duration: string;
  debouche: string;
  niveau?: string;
  diploma?: string;
  admissionRequirements?: string[];
  objectives?: string[];
  skillsDeveloped?: string[];
  opportunities?: string[];
}

// Interface locale pour les informations d'inscription dans l'éditeur
interface RegistrationInfoForEditor {
  deadline: string;
  requirements: string[];
  fees: string;
  process: string;
}

// Interface locale pour l'école dans l'éditeur
interface SchoolForEditor {
  id: string;
  name: string;
  description: string;
  logo: string;
  address: string;
  video?: string;
  contact: {
    phone: string;
    email: string;
    website?: string;
  };
  registrationInfo: RegistrationInfoForEditor;
  programs: ProgramForEditor[];
}

// Définir les catégories et cycles disponibles
const categories = [
  "Informatique",
  "Informatique & Digital",
  "Cyber Sécurité",
  "Sécurité Informatique",
  "Management Informatique",
  "Réseaux et Télécommunications",
  "Gestion Informatisée",
  "Multimédia",
  "Infographie",
  "Arts",
  "Finances",
  "Economie",
  "Comptabilité",
  "Gestion Comptable",  
  "Commerce",  
  "Sciences",
  "Ingénierie",
  "Santé",  
  "Management & Gestion",
  "Ressources Humaines",
  "Transport et Logistique",
  "Logistique",
  "Langues",
  "Communication",
  "Marketing",
  "Douane",
  "Droit",
  "Environnement et Energie",
  "Marketing Digital",
  "Gestion d'Entreprise",
  "Gestion Financière",
  "Gestion des Ressources Humaines",
  "Banque et Assurance"
];

const cycles = [
  "Cycle Initial",
  "Technicien",
  "Formation",
  "Licence",
  "Bachelor",
  "Master",
  "Ingénierie",
  "Doctorat",
  "Formation Continue"
];

const SchoolEdit: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [editableSchool, setEditableSchool] = useState<SchoolForEditor | null>(null);
  const [selectedTab, setSelectedTab] = useState("general");
  const [availablePrograms, setAvailablePrograms] = useState<ProgramForEditor[]>([]);
  
  useEffect(() => {
    const schoolToEdit = schools.find(s => s.id === id);
    if (schoolToEdit) {
      // Convertir l'école du format de données au format d'édition
      let registrationInfo: RegistrationInfoForEditor = {
        deadline: "",
        requirements: [],
        fees: "",
        process: ""
      };
      
      // Récupère les infos d'inscription pour "Tous les parcours" si elles existent
      if (schoolToEdit.registrationInfo["Tous les parcours"]) {
        const regInfo = schoolToEdit.registrationInfo["Tous les parcours"];
        registrationInfo = {
          deadline: regInfo.description || "",
          requirements: regInfo.procedure || [],
          fees: regInfo.fees ? regInfo.fees.toString() : "",
          process: Array.isArray(regInfo.procedure) ? regInfo.procedure.join("\n") : ""
        };
      }
      
      const schoolForEditor: SchoolForEditor = {
        id: schoolToEdit.id,
        name: schoolToEdit.name,
        description: schoolToEdit.description,
        logo: schoolToEdit.logo,
        address: schoolToEdit.address,
        video: schoolToEdit.video,
        contact: {
          phone: schoolToEdit.contact.phone,
          email: schoolToEdit.contact.email,
          website: schoolToEdit.contact.website
        },
        registrationInfo: registrationInfo,
        programs: schoolToEdit.programs.map(p => ({
          id: `prog-${Math.random().toString(36).substring(2, 9)}`,
          name: p.name,
          description: p.description,
          category: p.category,
          parcours: p.parcours,
          cycle: p.cycle,
          niveau: p.niveau || "",
          duration: p.duration,
          diploma: p.diploma || "",
          debouche: p.opportunities ? p.opportunities.join(", ") : "",
          admissionRequirements: p.admissionRequirements || [],
          objectives: p.objectives || [],
          skillsDeveloped: p.skillsDeveloped || [],
          opportunities: p.opportunities || []
        }))
      };
      
      setEditableSchool(schoolForEditor);
      setAvailablePrograms(schoolForEditor.programs);
    }
  }, [id]);
  
  if (!editableSchool) {
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
  
  const handleGeneralInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEditableSchool(prev => {
      if (!prev) return prev;
      
      if (name.includes('.')) {
        // Gestion des propriétés imbriquées comme 'contact.email'
        const [parent, child] = name.split('.');
        return {
          ...prev,
          [parent]: {
            ...(prev[parent as keyof typeof prev] as Record<string, any>),
            [child]: value
          }
        };
      } else {
        // Propriétés simples comme 'name'
        return { ...prev, [name]: value };
      }
    });
  };
  
  const handleRegistrationInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEditableSchool(prev => {
      if (!prev) return prev;
      
      if (name.includes('.')) {
        // Gestion des propriétés imbriquées comme 'registrationInfo.deadline'
        const [parent, child] = name.split('.');
        return {
          ...prev,
          [parent]: {
            ...(prev[parent as keyof typeof prev] as Record<string, any>),
            [child]: value
          }
        };
      }
      return prev;
    });
  };
  
  const handleRequirementChange = (index: number, value: string) => {
    setEditableSchool(prev => {
      if (!prev) return prev;
      const newRequirements = [...prev.registrationInfo.requirements];
      newRequirements[index] = value;
      return {
        ...prev,
        registrationInfo: {
          ...prev.registrationInfo,
          requirements: newRequirements
        }
      };
    });
  };
  
  const addRequirement = () => {
    setEditableSchool(prev => {
      if (!prev) return prev;
      return {
        ...prev,
        registrationInfo: {
          ...prev.registrationInfo,
          requirements: [...prev.registrationInfo.requirements, ""]
        }
      };
    });
  };
  
  const removeRequirement = (index: number) => {
    setEditableSchool(prev => {
      if (!prev) return prev;
      const newRequirements = prev.registrationInfo.requirements.filter((_, i) => i !== index);
      return {
        ...prev,
        registrationInfo: {
          ...prev.registrationInfo,
          requirements: newRequirements
        }
      };
    });
  };
  
  const handleProgramChange = (programId: string, field: keyof ProgramForEditor, value: string) => {
    setAvailablePrograms(prev => 
      prev.map(program => 
        program.id === programId ? { ...program, [field]: value } : program
      )
    );
  };
  
  const addProgram = () => {
    const newId = `prog-${editableSchool?.id}-${availablePrograms.length + 1}`;
    const newProgram: ProgramForEditor = {
      id: newId,
      name: "Nouveau programme",
      description: "Description du programme",
      duration: "3 ans",
      category: categories[0],
      cycle: cycles[0],
      parcours: "Nouveau parcours",
      niveau: "Technicien Spécialisé",
      debouche: "Débouchés professionnels",
      diploma: "Diplôme",
      admissionRequirements: ["Baccalauréat"],
      objectives: ["Objectif 1"],
      skillsDeveloped: ["Compétence 1"],
      opportunities: ["Opportunité 1"]
    };
    
    setAvailablePrograms(prev => [...prev, newProgram]);
  };
  
  const removeProgram = (programId: string) => {
    setAvailablePrograms(prev => prev.filter(program => program.id !== programId));
  };
  
  const handleSave = () => {
    // Dans un vrai projet, on enverrait ces données à une API/backend
    const updatedSchool = {
      ...editableSchool,
      programs: availablePrograms
    };
    
    // Simulons une sauvegarde pour la démo
    console.log("École mise à jour:", updatedSchool);
    toast.success("Les modifications ont été enregistrées");
    
    // Dans un cas réel, on actualiserait la liste des écoles
    // Pour l'instant, retournons simplement à la page de détail
    setTimeout(() => {
      navigate(`/school/${id}`);
    }, 1500);
  };
  
  if (!editableSchool) {
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
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-primary">
            Modifier l'établissement
          </h1>
          
          <div className="flex gap-4">
            <Link 
              to={`/school/${id}`}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded-md transition-colors"
            >
              Annuler
            </Link>
            
            <button 
              onClick={handleSave}
              className="bg-primary hover:bg-primary/90 text-white py-2 px-4 rounded-md transition-colors"
            >
              Enregistrer les modifications
            </button>
          </div>
        </div>
        
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
          <TabsList className="w-full grid grid-cols-3 mb-8">
            <TabsTrigger value="general">Informations générales</TabsTrigger>
            <TabsTrigger value="registration">Modalités d'inscription</TabsTrigger>
            <TabsTrigger value="programs">Programmes</TabsTrigger>
          </TabsList>
          
          <TabsContent value="general">
            <Card>
              <CardHeader>
                <CardTitle>Informations générales de l'établissement</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nom de l'établissement</Label>
                      <Input 
                        id="name" 
                        name="name"
                        value={editableSchool.name} 
                        onChange={handleGeneralInfoChange}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="logo">URL du logo</Label>
                      <Input 
                        id="logo" 
                        name="logo"
                        value={editableSchool.logo} 
                        onChange={handleGeneralInfoChange}
                      />
                      <div className="mt-2 p-4 border rounded flex justify-center">
                        <img 
                          src={editableSchool.logo} 
                          alt="Aperçu du logo" 
                          className="h-32 object-contain"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="description">Description</Label>
                      <textarea
                        id="description"
                        name="description"
                        value={editableSchool.description}
                        onChange={handleGeneralInfoChange}
                        rows={4}
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="address">Adresse</Label>
                      <Input 
                        id="address" 
                        name="address"
                        value={editableSchool.address} 
                        onChange={handleGeneralInfoChange}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">Contacts</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <Label htmlFor="contact.phone">Téléphone</Label>
                          <Input 
                            id="contact.phone" 
                            name="contact.phone"
                            value={editableSchool.contact.phone} 
                            onChange={handleGeneralInfoChange}
                          />
                        </div>
                        <div>
                          <Label htmlFor="contact.email">Email</Label>
                          <Input 
                            id="contact.email" 
                            name="contact.email"
                            value={editableSchool.contact.email} 
                            onChange={handleGeneralInfoChange}
                          />
                        </div>
                        <div>
                          <Label htmlFor="contact.website">Site web</Label>
                          <Input 
                            id="contact.website" 
                            name="contact.website"
                            value={editableSchool.contact.website || ''} 
                            onChange={handleGeneralInfoChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="registration">
            <Card>
              <CardHeader>
                <CardTitle>Modalités d'inscription</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="registrationInfo.deadline">Date limite d'inscription</Label>
                      <Input 
                        id="registrationInfo.deadline" 
                        name="registrationInfo.deadline"
                        value={editableSchool.registrationInfo.deadline} 
                        onChange={handleRegistrationInfoChange}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="registrationInfo.fees">Frais d'inscription</Label>
                      <Input 
                        id="registrationInfo.fees" 
                        name="registrationInfo.fees"
                        value={editableSchool.registrationInfo.fees} 
                        onChange={handleRegistrationInfoChange}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="registrationInfo.process">Processus d'admission</Label>
                    <textarea
                      id="registrationInfo.process"
                      name="registrationInfo.process"
                      value={editableSchool.registrationInfo.process}
                      onChange={handleRegistrationInfoChange}
                      rows={3}
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <Label>Conditions requises</Label>
                      <button
                        type="button"
                        onClick={addRequirement}
                        className="text-sm bg-secondary/20 hover:bg-secondary/30 text-secondary px-3 py-1 rounded-full transition-colors"
                      >
                        + Ajouter une condition
                      </button>
                    </div>
                    
                    {editableSchool.registrationInfo.requirements.map((req, index) => (
                      <div key={index} className="flex gap-2 items-center">
                        <Input 
                          value={req} 
                          onChange={(e) => handleRequirementChange(index, e.target.value)}
                        />
                        <button
                          type="button"
                          onClick={() => removeRequirement(index)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="programs">
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">Programmes disponibles</h2>
                <button
                  type="button"
                  onClick={addProgram}
                  className="bg-secondary hover:bg-secondary/90 text-white py-2 px-4 rounded-md transition-colors"
                >
                  + Ajouter un programme
                </button>
              </div>
              
              {availablePrograms.map((program, index) => (
                <Card key={program.id} className="border-l-4 border-l-secondary">
                  <CardHeader className="flex flex-row justify-between items-center pb-2">
                    <CardTitle className="text-lg">
                      Programme {index + 1}
                    </CardTitle>
                    <button
                      type="button"
                      onClick={() => removeProgram(program.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Nom du programme</Label>
                        <Input 
                          value={program.name} 
                          onChange={(e) => handleProgramChange(program.id, 'name', e.target.value)}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label>Durée</Label>
                        <Input 
                          value={program.duration} 
                          onChange={(e) => handleProgramChange(program.id, 'duration', e.target.value)}
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Description</Label>
                      <textarea
                        value={program.description}
                        onChange={(e) => handleProgramChange(program.id, 'description', e.target.value)}
                        rows={2}
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Débouchés</Label>
                      <textarea
                        value={program.debouche}
                        onChange={(e) => handleProgramChange(program.id, 'debouche', e.target.value)}
                        rows={2}
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Catégorie</Label>
                        <select
                          value={program.category}
                          onChange={(e) => handleProgramChange(program.id, 'category', e.target.value)}
                          className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        >
                          {categories.map(category => (
                            <option key={category} value={category}>
                              {category}
                            </option>
                          ))}
                        </select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label>Cycle</Label>
                        <select
                          value={program.cycle}
                          onChange={(e) => handleProgramChange(program.id, 'cycle', e.target.value)}
                          className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        >
                          {cycles.map(cycle => (
                            <option key={cycle} value={cycle}>
                              {cycle}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Niveau</Label>
                      <Input 
                        value={program.niveau || ''} 
                        onChange={(e) => handleProgramChange(program.id, 'niveau', e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Diplôme</Label>
                      <Input 
                        value={program.diploma || ''} 
                        onChange={(e) => handleProgramChange(program.id, 'diploma', e.target.value)}
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              {availablePrograms.length === 0 && (
                <div className="text-center p-8 border-2 border-dashed rounded-lg">
                  <p className="text-gray-500">Aucun programme disponible</p>
                  <button
                    type="button"
                    onClick={addProgram}
                    className="mt-4 bg-secondary/20 hover:bg-secondary/30 text-secondary px-4 py-2 rounded-md transition-colors"
                  >
                    + Ajouter un programme
                  </button>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </main>
      
      <Footer />
    </div>
  );
};

export default SchoolEdit;
