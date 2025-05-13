
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 bg-blue-400 px-2 py-1">🟡 RézoCampus</h3>
            <p className="text-sm text-gray-300">
              Plateforme de gestion des établissements scolaires permettant d'accéder facilement
              aux informations sur les programmes, modalités d'inscription et parcours.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 bg-blue-600 px-2 py-1">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-secondary transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-secondary transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-secondary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 bg-blue-600 px-2 py-1">Contact</h3>
            <address className="not-italic text-gray-300">
              <p>444 Boulevard Grande Ceinture</p>
              <p>20350 Casablanca, Morocco </p>
              <p className="mt-2">Email: divinmister@hotmail.com</p>
              <p>Tél: +212 617-725867</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} RézoCampus. Tous droits réservés. by mister Divin</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
