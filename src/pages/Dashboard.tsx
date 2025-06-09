
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { User } from '@supabase/supabase-js';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface UserProfile {
  id: string;
  email: string;
  full_name: string;
  created_at: string;
}

interface SchoolSelection {
  id: string;
  school_id: string;
  selected_at: string;
  school_name?: string;
}

interface Notification {
  id: string;
  title: string;
  message: string;
  read: boolean;
  created_at: string;
}

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [selectedSchools, setSelectedSchools] = useState<SchoolSelection[]>([]);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkUser();
    fetchUserData();
  }, []);

  const checkUser = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (session?.user) {
      setUser(session.user);
    } else {
      navigate('/login');
    }
  };

  const fetchUserData = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session?.user) return;

      // Fetch user profile
      const { data: profileData } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('id', session.user.id)
        .single();

      if (profileData) setProfile(profileData);

      // Fetch selected schools
      const { data: schoolsData } = await supabase
        .from('user_school_selections')
        .select('*')
        .eq('user_id', session.user.id)
        .order('selected_at', { ascending: false });

      if (schoolsData) setSelectedSchools(schoolsData);

      // Fetch notifications
      const { data: notificationsData } = await supabase
        .from('notifications')
        .select('*')
        .eq('user_id', session.user.id)
        .order('created_at', { ascending: false });

      if (notificationsData) setNotifications(notificationsData);

    } catch (error) {
      console.error('Erreur lors du chargement des données:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      toast.success('Déconnexion réussie');
      navigate('/');
    } catch (error) {
      toast.error('Erreur lors de la déconnexion');
    }
  };

  const markNotificationAsRead = async (notificationId: string) => {
    try {
      await supabase
        .from('notifications')
        .update({ read: true })
        .eq('id', notificationId);

      setNotifications(notifications.map(notif => 
        notif.id === notificationId ? { ...notif, read: true } : notif
      ));
    } catch (error) {
      console.error('Erreur lors de la mise à jour de la notification:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Chargement...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-primary">
              Tableau de bord
            </h1>
            <p className="text-gray-600">
              Bienvenue {profile?.full_name || user?.email}
            </p>
          </div>
          <div className="space-x-4">
            <Button onClick={() => navigate('/browse-schools')}>
              Parcourir les écoles
            </Button>
            <Button variant="outline" onClick={handleLogout}>
              Déconnexion
            </Button>
          </div>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
            <TabsTrigger value="schools">
              Mes formations ({selectedSchools.length})
            </TabsTrigger>
            <TabsTrigger value="notifications">
              Notifications ({notifications.filter(n => !n.read).length})
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Formations sélectionnées</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-primary">
                    {selectedSchools.length}
                  </div>
                  <p className="text-gray-600">Écoles dans votre liste</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Notifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-secondary">
                    {notifications.filter(n => !n.read).length}
                  </div>
                  <p className="text-gray-600">Messages non lus</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Compte actif depuis</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-lg font-semibold">
                    {profile?.created_at ? new Date(profile.created_at).toLocaleDateString('fr-FR') : 'N/A'}
                  </div>
                  <p className="text-gray-600">Date d'inscription</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="schools" className="mt-6">
            <div className="space-y-4">
              {selectedSchools.length === 0 ? (
                <Card>
                  <CardContent className="text-center py-12">
                    <p className="text-gray-600 mb-4">
                      Vous n'avez pas encore sélectionné d'écoles.
                    </p>
                    <Button onClick={() => navigate('/browse-schools')}>
                      Parcourir les écoles
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                selectedSchools.map((school) => (
                  <Card key={school.id}>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-semibold mb-2">
                            {school.school_name || school.school_id}
                          </h3>
                          <p className="text-gray-600">
                            Ajouté le {new Date(school.selected_at).toLocaleDateString('fr-FR')}
                          </p>
                        </div>
                        <Button
                          variant="outline"
                          onClick={() => navigate(`/school/${school.school_id}`)}
                        >
                          Voir les formations
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="notifications" className="mt-6">
            <div className="space-y-4">
              {notifications.length === 0 ? (
                <Card>
                  <CardContent className="text-center py-12">
                    <p className="text-gray-600">Aucune notification pour le moment.</p>
                  </CardContent>
                </Card>
              ) : (
                notifications.map((notification) => (
                  <Card key={notification.id} className={!notification.read ? 'border-secondary' : ''}>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-semibold">{notification.title}</h3>
                            {!notification.read && (
                              <Badge className="bg-secondary">Nouveau</Badge>
                            )}
                          </div>
                          <p className="text-gray-600 mb-2">{notification.message}</p>
                          <p className="text-sm text-gray-500">
                            {new Date(notification.created_at).toLocaleDateString('fr-FR')}
                          </p>
                        </div>
                        {!notification.read && (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => markNotificationAsRead(notification.id)}
                          >
                            Marquer comme lu
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </TabsContent>
        </Tabs>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
