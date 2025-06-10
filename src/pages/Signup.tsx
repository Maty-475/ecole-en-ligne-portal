
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { BookOpen, Award, Zap } from 'lucide-react';

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nom, setNom] = useState("");
  const [photo, setPhoto] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    // Étape 1 : créer le compte
    const { data, error: signupError } = await supabase.auth.signUp({
      email,
      password,
    });

    if (signupError) {
      setError(signupError.message);
      return;
    }

    const user = data.user;

    if (!user) {
      setError("Utilisateur non créé.");
      return;
    }

    // Étape 2 : insérer dans user_profiles
    const { error: insertError } = await supabase.from("user_profiles").insert({
      id: user.id,
      full_name: nom,
      email: email,
      avatar_url: photo,
    });

    if (insertError) {
      setError("Erreur d'insertion du profil : " + insertError.message);
      return;
    }

    // Étape 3 : rediriger
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-50">
        <div className="min-h-full flex">
          {/* Côté gauche - Formulaire d'inscription */}
          <div className="w-full lg:w-1/2 flex items-center justify-center p-12">
            <div className="max-w-md w-full space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Créer votre compte
                </h2>
                <p className="text-gray-600">
                  Rejoignez RézoCampus aujourd'hui
                </p>
              </div>
              
              <form className="space-y-6" onSubmit={handleSignup}>
                <div>
                  <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-2">
                    Nom complet
                  </label>
                  <input
                    id="nom"
                    name="nom"
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    placeholder="Votre nom complet"
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                  />
                </div>
                
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
                    autoComplete="new-password"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    placeholder="Mot de passe sécurisé"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                
                <div>
                  <label htmlFor="photo" className="block text-sm font-medium text-gray-700 mb-2">
                    Photo de profil (optionnel)
                  </label>
                  <input
                    id="photo"
                    name="photo"
                    type="url"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    placeholder="URL de votre photo"
                    value={photo}
                    onChange={(e) => setPhoto(e.target.value)}
                  />
                </div>

                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-primary text-white py-3 px-4 rounded-lg font-medium hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
                >
                  S'inscrire
                </button>

                <div className="text-center">
                  <p className="text-sm text-gray-600">
                    Déjà un compte ?{' '}
                    <Link to="/login" className="font-medium text-primary hover:text-primary/80 transition-colors">
                      Se connecter
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>

          {/* Côté droit - Messages percutants */}
          <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-bl from-secondary to-secondary/80 p-12 flex-col justify-center">
            <div className="max-w-md mx-auto text-white">
              <h1 className="text-4xl font-bold mb-6">
                Transformez votre potentiel en réussite
              </h1>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <BookOpen className="w-8 h-8 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Formations d'excellence</h3>
                    <p className="text-white/90">Découvrez des programmes adaptés à vos ambitions professionnelles</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Award className="w-8 h-8 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Diplômes reconnus</h3>
                    <p className="text-white/90">Obtenez des certifications valorisées sur le marché du travail</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Zap className="w-8 h-8 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Succès garanti</h3>
                    <p className="text-white/90">Bénéficiez d'un accompagnement personnalisé vers l'emploi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Signup;
