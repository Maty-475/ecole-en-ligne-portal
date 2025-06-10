
import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';
import { schools } from '../data/schools';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { MessageCircle, Settings, LogOut, Globe, Phone, Mail } from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [messageThread, setMessageThread] = useState<any[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [updateInfo, setUpdateInfo] = useState({ nom: '', photo: '', password: '' });
  const [activeTab, setActiveTab] = useState<'messages' | 'settings'>('messages');
  const [showMessaging, setShowMessaging] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  // Récupérer quelques écoles pour l'affichage des informations
  const featuredSchools = schools.slice(0, 3);

  useEffect(() => {
    const getSession = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (error || !data.user) navigate('/login');
      else {
        setUser(data.user);
        setUpdateInfo({
          nom: data.user.user_metadata?.nom || '',
          photo: data.user.user_metadata?.photo || '',
          password: '',
        });
      }
      setLoading(false);
    };
    getSession();
  }, [navigate]);

  useEffect(() => {
    const fetchThread = async () => {
      const { data } = await supabase
        .from('messages')
        .select('*')
        .or(`user_id.eq.${user?.id},sender_id.eq.${user?.id}`)
        .order('created_at', { ascending: true });
      if (data) setMessageThread(data);
    };
    if (user) fetchThread();
  }, [user]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/login');
  };

  const handleSendMessage = async () => {
    if (!newMessage.trim()) return;
    const { error } = await supabase.from('messages').insert({
      user_id: user.id,
      sender_id: user.id,
      texte: newMessage,
    });
    if (!error) {
      setMessageThread([...messageThread, { texte: newMessage, sender_id: user.id, created_at: new Date() }]);
      setNewMessage('');
    }
  };

  const handleUpdateProfile = async () => {
    const updates: any = {
      data: {
        nom: updateInfo.nom,
        photo: updateInfo.photo,
      },
    };
    if (updateInfo.password) updates.password = updateInfo.password;

    const { error } = await supabase.auth.updateUser(updates);
    if (!error) alert('Profil mis à jour !');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow flex items-center justify-center">
          <p className="text-lg">Chargement...</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
           
      <main className="flex-grow bg-gray-50">
        {/* En-tête du dashboard avec info utilisateur */}
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              {/* Info utilisateur à gauche */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center overflow-hidden">
                  {user?.user_metadata?.photo ? (
                    <img
                      src={user.user_metadata.photo}
                      alt="Photo de profil"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-white font-semibold text-sm">
                      {user?.user_metadata?.nom ? user.user_metadata.nom.charAt(0).toUpperCase() : 'U'}
                    </span>
                  )}
                </div>
                <div>
                  <h1 className="text-lg font-semibold text-gray-900">
                    {user?.user_metadata?.nom || 'Étudiant'}
                  </h1>
                  <p className="text-sm text-gray-500">{user?.email}</p>
                </div>
              </div>

              {/* Actions à droite */}
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setShowMessaging(!showMessaging)}
                  className={`p-2 rounded-lg transition-colors ${
                    showMessaging ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <MessageCircle className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setShowSettings(!showSettings)}
                  className={`p-2 rounded-lg transition-colors ${
                    showSettings ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <Settings className="w-5 h-5" />
                </button>
                <button
                  onClick={handleLogout}
                  className="p-2 rounded-lg bg-red-100 text-red-600 hover:bg-red-200 transition-colors"
                >
                  <LogOut className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Contenu principal par défaut - Informations des écoles */}
          {!showMessaging && !showSettings && (
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Établissements partenaires</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {featuredSchools.map((school) => (
                    <div key={school.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                      <img
                        src={school.logo}
                        alt={school.name}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{school.name}</h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{school.description}</p>
                        
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center text-sm text-gray-500">
                            <Phone className="w-4 h-4 mr-2" />
                            {school.contact.phone}
                          </div>
                          <div className="flex items-center text-sm text-gray-500">
                            <Mail className="w-4 h-4 mr-2" />
                            {school.contact.email}
                          </div>
                          {school.contact.website && (
                            <div className="flex items-center text-sm text-gray-500">
                              <Globe className="w-4 h-4 mr-2" />
                              <a
                                href={school.contact.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:underline"
                              >
                                Site web
                              </a>
                            </div>
                          )}
                        </div>

                        <div className="flex gap-2">
                          <Link
                            to={`/school/${school.id}`}
                            className="flex-1 bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors text-center"
                          >
                            Voir détails
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Section Messagerie */}
          {showMessaging && (
            <div className="bg-white rounded-lg shadow-lg">
              <div className="p-6 border-b">
                <h2 className="text-xl font-semibold text-gray-900">Messagerie</h2>
              </div>
              <div className="p-6">
                <div className="h-96 overflow-y-auto mb-4 space-y-3">
                  {messageThread.map((msg, index) => (
                    <div
                      key={index}
                      className={`flex ${msg.sender_id === user.id ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                          msg.sender_id === user.id
                            ? 'bg-primary text-white'
                            : 'bg-green-100 text-green-800'
                        }`}
                      >
                        {msg.texte}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <input
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Écris ton message"
                    className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  />
                  <button
                    className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition-colors"
                    onClick={handleSendMessage}
                  >
                    Envoyer
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Section Paramètres */}
          {showSettings && (
            <div className="bg-white rounded-lg shadow-lg">
              <div className="p-6 border-b">
                <h2 className="text-xl font-semibold text-gray-900">Paramètres du profil</h2>
              </div>
              <div className="p-6 space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nom complet
                  </label>
                  <input
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder="Votre nom"
                    value={updateInfo.nom}
                    onChange={(e) => setUpdateInfo({ ...updateInfo, nom: e.target.value })}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Photo de profil (URL)
                  </label>
                  <input
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder="https://exemple.com/photo.jpg"
                    value={updateInfo.photo}
                    onChange={(e) => setUpdateInfo({ ...updateInfo, photo: e.target.value })}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nouveau mot de passe
                  </label>
                  <input
                    type="password"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder="Laisser vide pour ne pas changer"
                    value={updateInfo.password}
                    onChange={(e) => setUpdateInfo({ ...updateInfo, password: e.target.value })}
                  />
                </div>
                
                <button
                  className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition-colors"
                  onClick={handleUpdateProfile}
                >
                  Enregistrer les modifications
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
