
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";
import Header from '../components/Header';
import Footer from '../components/Footer';

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
      
      <main className="flex-grow flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Créer votre compte étudiant
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Rejoignez RézoCampus et découvrez votre futur
            </p>
          </div>
          
          <form className="mt-8 space-y-6" onSubmit={handleSignup}>
            <div className="space-y-4">
              <div>
                <label htmlFor="nom" className="block text-sm font-medium text-gray-700">
                  Nom complet
                </label>
                <input
                  id="nom"
                  name="nom"
                  type="text"
                  required
                  className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                  placeholder="Votre nom complet"
                  value={nom}
                  onChange={(e) => setNom(e.target.value)}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Adresse e-mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                  placeholder="votre@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Mot de passe
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                  placeholder="Mot de passe sécurisé"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              
              <div>
                <label htmlFor="photo" className="block text-sm font-medium text-gray-700">
                  Photo de profil (optionnel)
                </label>
                <input
                  id="photo"
                  name="photo"
                  type="url"
                  className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                  placeholder="URL de votre photo"
                  value={photo}
                  onChange={(e) => setPhoto(e.target.value)}
                />
              </div>
            </div>

            {error && (
              <div className="text-red-600 text-sm text-center bg-red-50 p-3 rounded-md">
                {error}
              </div>
            )}

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                S'inscrire
              </button>
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-600">
                Déjà un compte ?{' '}
                <Link to="/login" className="font-medium text-primary hover:text-primary/80">
                  Se connecter
                </Link>
              </p>
            </div>
          </form>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Signup;
