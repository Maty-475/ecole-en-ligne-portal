
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { supabase } from "../lib/supabaseClient";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { GraduationCap, Users, Star } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setErrorMsg('Email ou mot de passe incorrect');
    } else {
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-50">
        <div className="min-h-full flex">
          {/* Côté gauche - Messages percutants */}
          <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-primary to-primary/80 p-12 flex-col justify-center">
            <div className="max-w-md mx-auto text-white">
              <h1 className="text-4xl font-bold mb-6">
                Votre avenir commence ici
              </h1>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <GraduationCap className="w-8 h-8 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Éducation de qualité</h3>
                    <p className="text-white/90">Accédez aux meilleures formations et établissements partenaires</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Users className="w-8 h-8 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Communauté engagée</h3>
                    <p className="text-white/90">Rejoignez des milliers d'étudiants dans leur parcours académique</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Star className="w-8 h-8 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Excellence garantie</h3>
                    <p className="text-white/90">Des établissements reconnus pour leur qualité pédagogique</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Côté droit - Formulaire de connexion */}
          <div className="w-full lg:w-1/2 flex items-center justify-center p-12">
            <div className="max-w-md w-full space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Connexion
                </h2>
                <p className="text-gray-600">
                  Accédez à votre espace étudiant
                </p>
              </div>
              
              <form className="space-y-6" onSubmit={handleLogin}>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Adresse e-mail
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    placeholder="votre@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                    Mot de passe
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    placeholder="Votre mot de passe"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                {errorMsg && (
                  <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
                    {errorMsg}
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-primary text-white py-3 px-4 rounded-lg font-medium hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
                >
                  Se connecter
                </button>

                <div className="text-center">
                  <p className="text-sm text-gray-600">
                    Pas encore de compte ?{' '}
                    <Link to="/signup" className="font-medium text-primary hover:text-primary/80 transition-colors">
                      Créer un compte
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Login;
