import React, { useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { useNavigate } from "react-router-dom";

interface FormData {
  Nom: string;
  Prenom: string;
  Der_Dip: string;
  Formation: string;
  AdresseMail: string;
  Pays: string;
}

const FormulaireInscription: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    Nom: "",
    Prenom: "",
    Der_Dip: "",
    Formation: "",
    AdresseMail: "",
    Pays: "",
  });

  const navigate = useNavigate(); // Pour la redirection

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { error } = await supabase.from("Inscription").insert([formData]);

    if (error) {
      alert("Erreur lors de l'enregistrement !");
      console.error(error);
    } else {
      alert("Inscription réussie !");
      navigate("/merci"); // Redirection après validation
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input type="text" name="Nom" placeholder="Nom" onChange={handleChange} required />
      <input type="text" name="Prenom" placeholder="Prénom" onChange={handleChange} required />
      <input type="text" name="Der_Dip" placeholder="Dernier Diplôme" onChange={handleChange} required />
      <input type="text" name="Formation" placeholder="Formation souhaitée" onChange={handleChange} required />
      <input type="email" name="AdresseMail" placeholder="Adresse Email" onChange={handleChange} required />
      <input type="text" name="Pays" placeholder="Pays" onChange={handleChange} required />
      <button type="submit">Envoyer</button>
    </form>
  );
};

export default FormulaireInscription;
