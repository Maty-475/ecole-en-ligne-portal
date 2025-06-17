
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { schools } from '../../data/schools';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { toast } from "sonner";
import { supabase } from "../../lib/supabaseClient";

const SchoolsManagement: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [schoolModifications, setSchoolModifications] = useState([]);
  
  const filteredSchools = schools.filter(school => 
    school.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Charger les modifications d'établissements depuis Supabase
  useEffect(() => {
    const loadSchoolModifications = async () => {
      const { data, error } = await supabase
        .from('school_modifications')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (data && !error) {
        setSchoolModifications(data);
      }
    };
    
    loadSchoolModifications();
  }, []);
  
  const handleDelete = async (schoolId: string) => {
    // Enregistrer la suppression dans la base de données
    const { error } = await supabase
      .from('school_modifications')
      .insert([{
        school_id: schoolId,
        action: 'delete',
        data: { deleted_at: new Date().toISOString() }
      }]);

    if (error) {
      toast.error("Erreur lors de l'enregistrement de la suppression");
    } else {
      toast.success(`École supprimée avec l'ID: ${schoolId}`);
    }
  };
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <Input 
          type="text" 
          placeholder="Rechercher un établissement..." 
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="max-w-md"
        />
        
        <Link 
          to="/admin/new-school"
          className="bg-secondary hover:bg-secondary/90 text-white py-2 px-4 rounded-md transition-colors"
        >
          + Ajouter un établissement
        </Link>
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
      </div>

      {schoolModifications.length > 0 && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Modifications récentes</h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>École ID</TableHead>
                <TableHead>Action</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Détails</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {schoolModifications.map((mod: any) => (
                <TableRow key={mod.id}>
                  <TableCell>{mod.school_id}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded text-sm ${
                      mod.action === 'delete' ? 'bg-red-100 text-red-800' :
                      mod.action === 'update' ? 'bg-blue-100 text-blue-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {mod.action}
                    </span>
                  </TableCell>
                  <TableCell>{new Date(mod.created_at).toLocaleDateString()}</TableCell>
                  <TableCell className="max-w-xs truncate">
                    {JSON.stringify(mod.data)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default SchoolsManagement;
