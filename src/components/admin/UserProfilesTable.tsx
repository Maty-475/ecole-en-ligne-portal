
import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "../../lib/supabaseClient";
import { toast } from "sonner";

interface UserProfile {
  id: string;
  email: string;
  full_name: string;
  avatar_url: string;
  created_at: string;
  last_sign_in_at: string;
}

const UserProfilesTable: React.FC = () => {
  const [userProfiles, setUserProfiles] = useState<UserProfile[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadUserProfiles();
  }, []);

  const loadUserProfiles = async () => {
    try {
      const { data, error } = await supabase
        .from('user_profiles')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) {
        console.error(error);
      } else {
        setUserProfiles(data || []);
      }
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  const filteredProfiles = userProfiles.filter(profile =>
    profile.full_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    profile.email?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = async (id: string) => {
    const { error } = await supabase
      .from('user_profiles')
      .delete()
      .eq('id', id);

    if (error) {
      toast.error("Erreur lors de la suppression");
    } else {
      toast.success("Profil supprimé");
      loadUserProfiles();
    }
  };

  if (loading) {
    return <div className="text-center py-4">Chargement...</div>;
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <Input
          placeholder="Rechercher un utilisateur..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-md"
        />
        <div className="text-sm text-gray-600">
          {filteredProfiles.length} utilisateur(s) trouvé(s)
        </div>
      </div>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Avatar</TableHead>
              <TableHead>Nom complet</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Date d'inscription</TableHead>
              <TableHead>Dernière connexion</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredProfiles.map((profile) => (
              <TableRow key={profile.id}>
                <TableCell>
                  {profile.avatar_url ? (
                    <img 
                      src={profile.avatar_url} 
                      alt="Avatar" 
                      className="w-8 h-8 rounded-full"
                    />
                  ) : (
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-xs">{profile.full_name?.charAt(0) || 'U'}</span>
                    </div>
                  )}
                </TableCell>
                <TableCell>{profile.full_name || 'N/A'}</TableCell>
                <TableCell>{profile.email}</TableCell>
                <TableCell>
                  {new Date(profile.created_at).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  {profile.last_sign_in_at ? new Date(profile.last_sign_in_at).toLocaleDateString() : 'Jamais'}
                </TableCell>
                <TableCell>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDelete(profile.id)}
                  >
                    Supprimer
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {filteredProfiles.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          Aucun utilisateur trouvé
        </div>
      )}
    </div>
  );
};

export default UserProfilesTable;
