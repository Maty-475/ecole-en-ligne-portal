import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [messageThread, setMessageThread] = useState<any[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [updateInfo, setUpdateInfo] = useState({ nom: '', photo: '', password: '' });

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
      setMessageThread([...messageThread, { texte: newMessage, sender_id: user.id }]);
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

  if (loading) return <p>Chargement...</p>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Tableau de bord</h1>
        <button onClick={handleLogout} className="text-red-500 underline">Se déconnecter</button>
      </div>

      <div className="flex items-center gap-4 mb-6">
        {user?.user_metadata?.photo && (
          <img
            src={user.user_metadata.photo}
            alt="Photo de profil"
            className="w-16 h-16 rounded-full"
          />
        )}
        <div>
          <p className="text-lg font-semibold">{user?.user_metadata?.nom || 'Étudiant'}</p>
          <p className="text-gray-600">{user?.email}</p>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="font-bold mb-2">Paramètres du profil</h2>
        <input
          className="border p-2 w-full mb-2"
          placeholder="Nom"
          value={updateInfo.nom}
          onChange={(e) => setUpdateInfo({ ...updateInfo, nom: e.target.value })}
        />
        <input
          className="border p-2 w-full mb-2"
          placeholder="Lien de la photo"
          value={updateInfo.photo}
          onChange={(e) => setUpdateInfo({ ...updateInfo, photo: e.target.value })}
        />
        <input
          type="password"
          className="border p-2 w-full mb-2"
          placeholder="Nouveau mot de passe"
          value={updateInfo.password}
          onChange={(e) => setUpdateInfo({ ...updateInfo, password: e.target.value })}
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={handleUpdateProfile}>
          Enregistrer les modifications
        </button>
      </div>

      <div className="bg-gray-100 p-4 rounded-md">
        <h2 className="font-bold mb-2">Messagerie</h2>
        <div className="space-y-2 h-64 overflow-y-auto mb-4">
          {messageThread.map((msg, index) => (
            <div
              key={index}
              className={`p-2 rounded ${
                msg.sender_id === user.id ? 'bg-blue-200 text-right' : 'bg-green-100 text-left'
              }`}
            >
              {msg.texte}
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          <input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Écris ton message"
            className="flex-1 border p-2 rounded"
          />
          <button className="bg-blue-500 text-white px-4 rounded" onClick={handleSendMessage}>
            Envoyer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;