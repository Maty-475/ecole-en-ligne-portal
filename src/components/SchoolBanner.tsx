
import React from 'react';
import { Link } from 'react-router-dom';

interface SchoolBannerProps {
  logo: string;
  name: string;
  description: string;
  website: string;
}

const SchoolBanner: React.FC<SchoolBannerProps> = ({name, description, logo, website }) => {
  return (
    <div className="bg-primary py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center mb-6">
          <div className="bg-white p-2 rounded-lg shadow-md mb-6 md:mb-0 md:mr-8">
           <img 
             src={logo}  // "/Images/logo.jpg"
            alt={`Logo de ${name}`} 
            className="w-32 h-32 object-contain"
          />

          </div>
          <div className="text-center md:text-left text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{name}</h1>
            <p className="text-lg md:text-xl opacity-90">{description}</p>
            <a 
              href={`https://${website}`} 
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center bg-secondary hover:bg-red-400 font-bold text-white px-4 py-2 rounded-md">
              Accédez au site de l'établissement
            </a>
          </div>
        </div>
        
        <div className="mt-6">
          <Link 
            to="/index"
            className="inline-flex items-center text-white hover:text-secondary transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Retour à la liste des établissements
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SchoolBanner;
