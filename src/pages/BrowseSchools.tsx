
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Search, Plus } from 'lucide-react';
import { toast } from 'sonner';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { schools } from '../data/schools';

const BrowseSchools = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSchools, setSelectedSchools] = useState<string[]>([]);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // Get current user
    const getCurrentUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
      
      if (user) {
        // Load user's selected schools
        const { data: selections } = await supabase
          .from('user_school_selections')
          .select('school_id')
          .eq('user_id', user.id);
        
        if (selections) {
          setSelectedSchools(selections.map(s => s.school_id));
        }
      }
    };

    getCurrentUser();
  }, []);

  const filteredSchools = schools.filter(school =>
    school.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    school.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    school.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelectSchool = async (schoolId: string) => {
    if (!user) return;

    try {
      // Add to user's selected schools
      const { error } = await supabase
        .from('user_school_selections')
        .insert({
          user_id: user.id,
          school_id: schoolId,
          selected_at: new Date().toISOString()
        });

      if (error) throw error;

      setSelectedSchools([...selectedSchools, schoolId]);
      toast.success('École ajoutée à vos formations !');
    } catch (error: any) {
      toast.error('Erreur lors de l\'ajout de l\'école');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold text-center mb-8 text-primary">
              Parcourir toutes les écoles
            </h1>

            {/* Search bar */}
            <div className="relative max-w-2xl mx-auto mb-8">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Rechercher une école, formation ou catégorie..."
                className="pl-10 py-3"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Schools grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSchools.map((school) => (
                <Card key={school.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-2">{school.name}</CardTitle>
                        <p className="text-sm text-gray-600 mb-2">{school.category}</p>
                        <p className="text-sm text-gray-700 line-clamp-3">{school.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-2">
                      <Link to={`/school/${school.id}`} className="flex-1">
                        <Button variant="outline" className="w-full">
                          Voir détails
                        </Button>
                      </Link>
                      {!selectedSchools.includes(school.id) && (
                        <Button
                          onClick={() => handleSelectSchool(school.id)}
                          className="bg-secondary hover:bg-secondary/90"
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      )}
                      {selectedSchools.includes(school.id) && (
                        <Button disabled className="bg-green-500">
                          ✓
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredSchools.length === 0 && (
              <div className="text-center py-8">
                <p className="text-gray-600">Aucune école trouvée pour votre recherche.</p>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BrowseSchools;
