
import React, { useState, useEffect } from "react";
import { supabase } from "../lib/supabaseClient";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate, useSearchParams } from "react-router-dom";

interface FormData {
  Nom: string;
  Prenom: string;
  Der_Dip: string;
  Formation: string;
  AdresseMail: string;
  Pays: string;
  EcoleInteresse?: string;
  WhatsApp: string;
}

const FormulaireInscription: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    Nom: "",
    Prenom: "",
    Der_Dip: "",
    Formation: "",
    AdresseMail: "",
    Pays: "",
    EcoleInteresse: "",
    WhatsApp:"",
  });

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  
  // Récupérer les paramètres d'URL
  const redirectUrl = searchParams.get('redirect');
  const schoolName = searchParams.get('school');

  useEffect(() => {
    if (schoolName) {
      setFormData(prev => ({ ...prev, EcoleInteresse: schoolName }));
    }
  }, [schoolName]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
      
      // Si une URL de redirection est fournie, rediriger vers celle-ci
      if (redirectUrl) {
        window.open(redirectUrl, '_blank');
        navigate("/merci");
      } else {
        navigate("/merci");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
       <Header />
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-center mb-6">
            {schoolName ? `Inscription pour ${schoolName}` : "Formulaire d'inscription"}
          </h2>
          
          {schoolName && (
            <p className="text-center text-gray-600 mb-6">
              Veuillez remplir ce formulaire pour accéder au site de l'établissement
            </p>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <input 
              type="text" 
              name="Nom" 
              placeholder="Nom" 
              onChange={handleChange}
              value={formData.Nom}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required 
            />
            <input 
              type="text" 
              name="Prenom" 
              placeholder="Prénom" 
              onChange={handleChange}
              value={formData.Prenom}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required 
            />
            <select
              name="Der_Dip"
              value={formData.Der_Dip}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">-- Sélectionnez votre dernier diplôme --</option>
              <option value="Baccalauréat">Baccalauréat</option>
              <option value="Licence">Licence</option>
              <option value="Master">Master</option>
              <option value="Doctorat">Doctorat</option>
              <option value="Autre">Autre</option>
            </select>

            <select
                name="Formation"
                value={formData.Formation}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">-- Choisissez une formation --</option>
                <option value="Informatique">Informatique</option>
                <option value="Marketing">Marketing</option>
                <option value="Finance">Finance</option>
                <option value="Droit">Droit</option>
                <option value="Médecine">Médecine</option>
                <option value="Autre">Autre</option>
          </select>

            <input 
              type="email" 
              name="AdresseMail" 
              placeholder="Adresse Email" 
              onChange={handleChange}
              value={formData.AdresseMail}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required 
            />
            <input 
              type="text" 
              name="Pays" 
              placeholder="Pays" 
              onChange={handleChange}
              value={formData.Pays}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required 
            />
            <input 
              type="text" 
              name="WhatsApp" 
              placeholder="Numéro WhatsApp" 
              onChange={handleChange}
              value={formData.WhatsApp}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required 
            />
            
            {schoolName && (
              <input 
                type="text" 
                name="EcoleInteresse" 
                value={formData.EcoleInteresse}
                readOnly
                className="w-full p-3 border border-gray-300 rounded-md bg-gray-100"
              />
            )}
            
            <button 
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition-colors"
            >
              {schoolName ? "S'inscrire et accéder au site" : "Envoyer"}
            </button>
          </form>
        </div>
      </div>
       <Footer />
    </div>
  );
};

export default FormulaireInscription;
