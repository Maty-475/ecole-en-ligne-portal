import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";

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
    <div className="signup-container">
      <h2>Créer un compte étudiant</h2>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Nom complet"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="URL de la photo"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
        />
        <input
          type="email"
          placeholder="Adresse e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <p className="text-red-500">{error}</p>}
        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
};

export default Signup;
