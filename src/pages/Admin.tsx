
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { schools } from '../data/schools';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

const Admin: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filtre des écoles selon le terme de recherche
  const filteredSchools = schools.filter(school => 
    school.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const handleDelete = (schoolId: string) => {
    // Dans un vrai projet, cela enverrait une requête à une API
    // pour supprimer l'école de la base de données
    toast.success(`École supprimée avec l'ID: ${schoolId}`);
    // En réalité, il faudrait mettre à jour la liste des écoles après suppression
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-primary">
            Administration des établissements
          </h1>
          
          <Link 
            to="/admin/new-school"
            className="bg-secondary hover:bg-secondary/90 text-white py-2 px-4 rounded-md transition-colors"
          >
            + Ajouter un établissement
          </Link>
        </div>
        
        <div className="mb-6">
          <Input 
            type="text" 
            placeholder="Rechercher un établissement..." 
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="max-w-md"
          />
        </div>
        
        <div className="grid grid-cols-1 gap-4">
          {filteredSchools.map(school => (
            <Card key={school.id} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-32 bg-white p-4 flex items-center justify-center">
                    <img 
                      src={school.logo} 
                      alt={`Logo de ${school.name}`}
                      className="h-20 object-contain" 
                    />
                  </div>
                  
                  <div className="flex-1 p-4">
                    <div className="font-bold text-lg">{school.name}</div>
                    <div className="text-sm text-gray-500 mb-2">
                      {school.programs.length} programme(s)
                    </div>
                    <p className="text-gray-700 line-clamp-1">
                      {school.description}
                    </p>
                  </div>
                  
                  <div className="flex md:flex-col gap-2 p-4 items-center justify-center">
                    <Link 
                      to={`/school/edit/${school.id}`}
                      className="bg-primary hover:bg-primary/90 text-white py-2 px-4 w-full text-center rounded-md transition-colors"
                    >
                      Modifier
                    </Link>
                    
                    <Button
                      variant="destructive"
                      onClick={() => handleDelete(school.id)}
                      className="w-full"
                    >
                      Supprimer
                    </Button>
                    
                    <Link 
                      to={`/school/${school.id}`}
                      className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 w-full text-center rounded-md transition-colors"
                    >
                      Voir
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
          
          {filteredSchools.length === 0 && (
            <div className="text-center p-8 border-2 border-dashed rounded-lg">
              <p className="text-gray-500">Aucun établissement ne correspond à votre recherche</p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Admin;
