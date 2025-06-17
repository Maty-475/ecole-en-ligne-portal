
import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "../../lib/supabaseClient";
import { toast } from "sonner";

interface Inscription {
  id: number;
  Nom: string;
  Prenom: string;
  Der_Dip: string;
  Formation: string;
  AdresseMail: string;
  Pays: string;
  EcoleInteresse?: string;
  WhatsApp: string;
  created_at: string;
}

const InscriptionsTable: React.FC = () => {
  const [inscriptions, setInscriptions] = useState<Inscription[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadInscriptions();
  }, []);

  const loadInscriptions = async () => {
    try {
      const { data, error } = await supabase
        .from('Inscription')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) {
        toast.error("Erreur lors du chargement des inscriptions");
        console.error(error);
      } else {
        setInscriptions(data || []);
      }
    } catch (error) {
      toast.error("Erreur lors du chargement des inscriptions");
      console.error(error);
    }
    setLoading(false);
  };

  const filteredInscriptions = inscriptions.filter(inscription =>
    inscription.Nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
    inscription.Prenom.toLowerCase().includes(searchTerm.toLowerCase()) ||
    inscription.AdresseMail.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (inscription.EcoleInteresse && inscription.EcoleInteresse.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleDelete = async (id: number) => {
    const { error } = await supabase
      .from('Inscription')
      .delete()
      .eq('id', id);

    if (error) {
      toast.error("Erreur lors de la suppression");
    } else {
      toast.success("Inscription supprimée");
      loadInscriptions();
    }
  };

  if (loading) {
    return <div className="text-center py-4">Chargement...</div>;
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <Input
          placeholder="Rechercher une inscription..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-md"
        />
        <div className="text-sm text-gray-600">
          {filteredInscriptions.length} inscription(s) trouvée(s)
        </div>
      </div>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nom</TableHead>
              <TableHead>Prénom</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Formation</TableHead>
              <TableHead>École</TableHead>
              <TableHead>Pays</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredInscriptions.map((inscription) => (
              <TableRow key={inscription.id}>
                <TableCell>{inscription.Nom}</TableCell>
                <TableCell>{inscription.Prenom}</TableCell>
                <TableCell>{inscription.AdresseMail}</TableCell>
                <TableCell>{inscription.Formation}</TableCell>
                <TableCell>{inscription.EcoleInteresse || 'N/A'}</TableCell>
                <TableCell>{inscription.Pays}</TableCell>
                <TableCell>
                  {new Date(inscription.created_at).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDelete(inscription.id)}
                  >
                    Supprimer
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {filteredInscriptions.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          Aucune inscription trouvée
        </div>
      )}
    </div>
  );
};

export default InscriptionsTable;
