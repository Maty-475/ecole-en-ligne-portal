import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { supabase } from "../lib/supabaseClient";

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
      // Stocker l'utilisateur en session si besoin
      navigate('/dashboard');
    }
  };

  return (
    <div className="login-container">
      <h2>Connexion</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email étudiant"
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

        {errorMsg && <p className="text-red-500">{errorMsg}</p>}

        <button type="submit">Se connecter</button>
      </form>
      <p className="mt-4">
        Pas encore de compte ? <Link to="/signup" className="text-blue-500">Créer un compte</Link>
    </p>
    </div>
  );
};

export default Login;
