
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold text-primary mb-8">À propos RézoCampus</h1>
            
            <div className="prose prose-lg">
              <p className="mb-4">
                RézoCampus est une plateforme dédiée à la gestion et à la présentation des établissements d'enseignement.
                Notre mission est de faciliter l'accès aux informations essentielles concernant les différentes 
                institutions éducatives, leurs programmes, et leurs modalités d'inscription.
              </p>
              
              <p className="mb-4">
                Que vous soyez un étudiant à la recherche de la formation idéale ou un administrateur souhaitant
                présenter votre établissement, notre plateforme offre une interface intuitive et complète pour répondre à vos besoins.
              </p>
              
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Notre vision</h2>
              
              <p className="mb-4">
                Nous croyons que l'éducation est la clé du développement personnel et professionnel. C'est pourquoi nous
                nous efforçons de créer un pont entre les institutions éducatives et les étudiants potentiels, en fournissant
                des informations claires, précises et à jour.
              </p>
              
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Nos services</h2>
              
              <ul className="list-disc pl-5 mb-4">
                <li className="mb-2">
                  <strong>Présentation des établissements</strong>: Description détaillée de chaque institution, avec informations pratiques et contacts.
                </li>
                <li className="mb-2">
                  <strong>Catalogue de programmes</strong>: Liste complète des formations disponibles dans chaque établissement.
                </li>
                <li className="mb-2">
                  <strong>Modalités d'inscription</strong>: Informations détaillées sur les procédures d'admission, conditions requises et dates limites.
                </li>
                <li className="mb-2">
                  <strong>Navigation intuitive</strong>: Interface conviviale permettant de passer facilement d'un établissement à l'autre.
                </li>
              </ul>
              
              <p className="mt-8 text-gray-600 italic">
                Pour toute question ou suggestion concernant notre plateforme, n'hésitez pas à nous contacter via notre page de contact.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
