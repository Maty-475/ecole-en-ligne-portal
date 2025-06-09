
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Bell, BookOpen, User, Plus } from 'lucide-react';
import { toast } from 'sonner';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { schools } from '../data/schools';

interface UserSchoolSelection {
  id: string;
  school_id: string;
  selected_at: string;
}

interface Notification {
  id: string;
  title: string;
  message: string;
  read: boolean;
  created_at: string;
}

const Dashboard = () => {
  const [user, setUser] = useState<any>(null);
  const [selectedSchools, setSelectedSchools] = useState<UserSchoolSelection[]>([]);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);

      if (user) {
        // Load selected schools
        const { data: selections } = await supabase
          .from('user_school_selections')
          .select('*')
          .eq('user_id', user.id)
          .order('selected_at', { ascending: false });

        if (selections) {
          setSelectedSchools(selections);
        }

        // Load notifications
        const { data: notifs } = await supabase
          .from('notifications')
          .select('*')
          .eq('user_id', user.id)
          .order('created_at', { ascending: false });

        if (notifs) {
          setNotifications(notifs);
        }
      }
    } catch (error) {
      console.error('Error loading user data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast.success('Déconnexion réussie');
  };

  const markNotificationAsRead = async (notificationId: string) => {
    try {
      const { error } = await supabase
        .from('notifications')
        .update({ read: true })
        .eq('id', notificationId);

      if (!error) {
        setNotifications(notifications.map(n => 
          n.id === notificationId ? { ...n, read: true } : n
        ));
      }
    } catch (error) {
      console.error('Error marking notification as read:', error);
    }
  };

  const removeSchoolSelection = async (selectionId: string) => {
    try {
      const { error } = await supabase
        .from('user_school_selections')
        .delete()
        .eq('id', selectionId);

      if (!error) {
        setSelectedSchools(selectedSchools.filter(s => s.id !== selectionId));
        toast.success('École retirée de vos formations');
      }
    } catch (error: any) {
      toast.error('Erreur lors de la suppression');
    }
  };

  const getSchoolById = (schoolId: string) => {
    return schools.find(school => school.id === schoolId);
  };

  const unreadCount = notifications.filter(n => !n.read).length;

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
      
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
              <div>
                <h1 className="text-3xl font-bold text-primary">Tableau de bord</h1>
                <p className="text-gray-600 mt-2">
                  Bienvenue, {user?.email}
                </p>
              </div>
              <Button onClick={handleLogout} variant="outline">
                Déconnexion
              </Button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <BookOpen className="h-8 w-8 text-secondary" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Formations sélectionnées</p>
                      <p className="text-2xl font-bold text-primary">{selectedSchools.length}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <Bell className="h-8 w-8 text-secondary" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Notifications non lues</p>
                      <p className="text-2xl font-bold text-primary">{unreadCount}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <User className="h-8 w-8 text-secondary" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Profil</p>
                      <p className="text-sm font-bold text-primary">Actif</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
                <TabsTrigger value="formations">
                  Formations sélectionnées ({selectedSchools.length})
                </TabsTrigger>
                <TabsTrigger value="notifications">
                  Notifications {unreadCount > 0 && <Badge className="ml-2">{unreadCount}</Badge>}
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Actions rapides</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <Link to="/browse-schools">
                        <Button className="w-full justify-start">
                          <Plus className="mr-2 h-4 w-4" />
                          Parcourir les écoles
                        </Button>
                      </Link>
                      <Link to="/index">
                        <Button variant="outline" className="w-full justify-start">
                          <BookOpen className="mr-2 h-4 w-4" />
                          Voir toutes les formations
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Activité récente</CardTitle>
                    </CardHeader>
                    <CardContent>
                      {selectedSchools.length > 0 ? (
                        <div className="space-y-2">
                          {selectedSchools.slice(0, 3).map((selection) => {
                            const school = getSchoolById(selection.school_id);
                            return (
                              <div key={selection.id} className="text-sm">
                                <span className="font-medium">{school?.name}</span>
                                <span className="text-gray-500 ml-2">
                                  ajoutée le {new Date(selection.selected_at).toLocaleDateString()}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      ) : (
                        <p className="text-gray-500">Aucune activité récente</p>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="formations" className="mt-6">
                <div className="space-y-4">
                  {selectedSchools.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedSchools.map((selection) => {
                        const school = getSchoolById(selection.school_id);
                        if (!school) return null;

                        return (
                          <Card key={selection.id}>
                            <CardHeader>
                              <CardTitle className="text-lg">{school.name}</CardTitle>
                              <p className="text-sm text-gray-600">{school.category}</p>
                            </CardHeader>
                            <CardContent>
                              <p className="text-sm text-gray-700 mb-4 line-clamp-2">
                                {school.description}
                              </p>
                              <div className="flex gap-2">
                                <Link to={`/school/${school.id}`} className="flex-1">
                                  <Button variant="outline" className="w-full">
                                    Voir détails
                                  </Button>
                                </Link>
                                <Button
                                  variant="destructive"
                                  size="sm"
                                  onClick={() => removeSchoolSelection(selection.id)}
                                >
                                  Retirer
                                </Button>
                              </div>
                              <p className="text-xs text-gray-500 mt-2">
                                Ajoutée le {new Date(selection.selected_at).toLocaleDateString()}
                              </p>
                            </CardContent>
                          </Card>
                        );
                      })}
                    </div>
                  ) : (
                    <Card>
                      <CardContent className="text-center py-8">
                        <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-lg font-medium text-gray-900 mb-2">
                          Aucune formation sélectionnée
                        </h3>
                        <p className="text-gray-600 mb-4">
                          Commencez par parcourir nos écoles et sélectionnez celles qui vous intéressent.
                        </p>
                        <Link to="/browse-schools">
                          <Button>Parcourir les écoles</Button>
                        </Link>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </TabsContent>

              <TabsContent value="notifications" className="mt-6">
                <div className="space-y-4">
                  {notifications.length > 0 ? (
                    notifications.map((notification) => (
                      <Card 
                        key={notification.id} 
                        className={`cursor-pointer transition-colors ${
                          !notification.read ? 'border-secondary bg-secondary/5' : ''
                        }`}
                        onClick={() => !notification.read && markNotificationAsRead(notification.id)}
                      >
                        <CardHeader className="pb-2">
                          <div className="flex items-start justify-between">
                            <CardTitle className="text-lg">{notification.title}</CardTitle>
                            {!notification.read && (
                              <Badge variant="secondary">Nouveau</Badge>
                            )}
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-700">{notification.message}</p>
                          <p className="text-xs text-gray-500 mt-2">
                            {new Date(notification.created_at).toLocaleString()}
                          </p>
                        </CardContent>
                      </Card>
                    ))
                  ) : (
                    <Card>
                      <CardContent className="text-center py-8">
                        <Bell className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-lg font-medium text-gray-900 mb-2">
                          Aucune notification
                        </h3>
                        <p className="text-gray-600">
                          Vous recevrez ici les updates importantes et les messages d'accompagnement.
                        </p>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
