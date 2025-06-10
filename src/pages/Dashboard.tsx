import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    const getSession = async () => {
      const { data, error } = await supabase.auth.getUser();

      if (error || !data.user) {
        navigate('/login');
      } else {
        setUser(data.user);
      }

      setLoading(false);
    };

    getSession();
  }, [navigate]);

  useEffect(() => {
    const fetchMessage = async () => {
      const { data, error } = await supabase
        .from('messages')
        .select('texte')
        .eq('user_id', user?.id)
        .single();

      if (data) setMessage(data.texte);
    };

    if (user) fetchMessage();
  }, [user]);

  if (loading) return <p>Chargement...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Bienvenue sur ton tableau de bord</h1>

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

      {message && (
        <div className="p-4 bg-blue-100 text-blue-800 rounded-md">
          <p>{message}</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
